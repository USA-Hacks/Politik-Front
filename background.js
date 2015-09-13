var precachedPages = {};

Politik.location.onNewLocation(function(tab) {
    Politik.page.send(tab.url);
    Politik.page.getScore(tab.url, function(score) {
        Politik.candidate.getCandidate(score.ascore, score.keywords, function(candidate) {
            Politik.ui.getCandidateCard(candidate, function(card) {
                precachedPages[tab.url] = card;
            });
        });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.getPage) {
        var page = precachedPages[request.getPage];
        sendResponse({page: page});
    } else {
        Politik.page.getScore(request.getPage, function(score) {
            Politik.candidate.getCandidate(score.ascore, function(candidate) {
                Politik.ui.getCandidateCard(candidate, function(card) {
                    sendResponse({page: card});
                });
            });
        });
    }
});
