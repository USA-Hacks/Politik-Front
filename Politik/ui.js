var Politik = window.Politik = window.Politik || {};
Politik.ui = {};

Politik.ui.getCandidateCard = function(candidate, callback) {
    callback('<div class="ui card">' +
        '<div class="ui fluid image candidate-image-container">' +
            (candidate.party === 'Democrat' ? '<span class="ui blue ribbon label">Democrat</span>' : '') +
            (candidate.party === 'Republican' ? '<span class="ui red ribbon label">Republican</span>' : '') +
            (candidate.party === 'Green' ? '<span class="ui green ribbon label">Green</span>' : '') +
            (candidate.party === 'Independent' ? '<span class="ui ribbon label">Independent</span>' : '') +
            '<img class="candidate-image" src="' + candidate.img + '">' +
        '</div>' +
        '<div class="content">' +
            '<span class="header" href="' + candidate.link + '">' + candidate.name + '</span>' +
            '<div class="description">' + candidate.blurb + '</div>' +
        '</div>' +
        '<div class="extra content">' +
            '<a id="candidate-link" href="' + candidate.link + '"><i class="user icon"></i>' + candidate.link + '</a>' +
        '</div>' +
    '</div>');
};

Politik.ui.openTab = function(link) {
    chrome.tabs.create({url: link});
};
