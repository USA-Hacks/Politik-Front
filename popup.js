$(function() {
    Politik.candidate.getCandidate(1, function(candidate) {
        Politik.ui.getCandidateCard(candidate, function(card) {
            $('#candidate-container').html(card);
            $('#candidate-link').click(function() {
                Politik.ui.openTab($('#candidate-link').attr('href'));
            });
        });
    });
});
