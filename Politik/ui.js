var Politik = window.Politik = window.Politik || {};
Politik.ui = {};

Politik.ui.getCandidateCard = function(candidate, callback) {
    callback('<div class="ui card">' +
        '<div class="image">' +
            '<img src="' + candidate.img + '">' +
        '</div>' +
        '<div class="content">' +
            '<a class="header" href="' + candidate.link + '">' + candidate.name + '</a>' +
            '<div class="meta">' +
                '<span class="date">' + candidate.party + '</span>' +
            '</div>' +
            '<div class="description">' + candidate.blurb + '</div>' +
        '</div>' +
    '</div>');
};
