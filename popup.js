$(function() {
    $('#candidate-reveal').click(function() {
        $('#like-container').hide();
        Politik.candidate.getCandidate(-.3, function(candidate) {
            Politik.ui.getCandidateCard(candidate, function(card) {
                $('#candidate-container').html(card);
                $('#candidate-link').click(function() {
                    Politik.ui.openTab($('#candidate-link').attr('href'));
                });
            });
        });
    });
});
