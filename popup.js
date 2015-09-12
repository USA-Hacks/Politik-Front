$(function() {
    Politik.location.getCurrent(function(tab) {
        Politik.page.getScore(tab, function(score) {
            Politik.candidate.getCandidate(score.ascore, function(candidate) {
                Politik.ui.getCandidateCard(candidate, function(card) {
                    $('#candidate-container').html(card);
                    $('#candidate-link').click(function() {
                        Politik.ui.openTab($('#candidate-link').attr('href'));
                    });
                });
            });
        });
    });
});
