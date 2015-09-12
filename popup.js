$(function() {
    Politik.candidate.getCandidate(0, function(candidate) {
        Politik.ui.getCandidateCard(candidate, function(card) {
            $('#candidate-container').html(card);
        });
    });
});
