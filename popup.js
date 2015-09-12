$(function() {
    Politik.candidate.getCandidate(-.6, function(candidate) {
        Politik.ui.getCandidateCard(candidate, function(card) {
            $('#candidate-container').html(card);
            $('#candidate-link').click(function() {
                Politik.ui.openTab($('#candidate-link').attr('href'));
            });
        });
    });
});
