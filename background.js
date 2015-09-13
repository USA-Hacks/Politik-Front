var precachedPages = {};

Politik.location.onNewLocation(function(tab) {
    Politik.page.send(tab.url);
    Politik.page.getScore(tab.url, function(score) {
        Politik.candidate.getCandidate(score.ascore, function(candidate) {
            Politik.ui.getCandidateCard(candidate, function(card) {
                precachedPages[tab.url] = card;
                console.log(precachedPages);
            });
        });
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request);
    if (request.getPage) {
        var page = precachedPages[request.getPage];
        sendResponse({page: page});
        delete precachedPages[tab.url];
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
