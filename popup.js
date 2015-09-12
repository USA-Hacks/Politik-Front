$(function() {
    $('#candidate-reveal').click(function() {
        $('#like-container').hide();
        Politik.candidate.getCandidate(-.6, function(candidate) {
            Politik.ui.getCandidateCard(candidate, function(card) {
                $('#candidate-container').html(card);
                $('#candidate-link').click(function() {
                    Politik.ui.openTab($('#candidate-link').attr('href'));
                });
            });
        });
    });

    $('#like-button').click(function() {
        Politik.location.getCurrent(function(tab) {
            Politik.page.send(tab, 1, function() {
                console.log(tab.url + " liked!");
            });
        });
    });

    $('#dislike-button').click(function() {
        Politik.location.getCurrent(function(tab) {
            Politik.page.send(tab, 0, function() {
                console.log(tab.url + "disliked!");
            });
        })
    })
});
