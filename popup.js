$(function() {
    Politik.location.getCurrent(function(tab) {
        chrome.runtime.sendMessage({getPage: tab.url}, function(response) {
            $('#candidate-container').html(response.page);
            $('#candidate-link').click(function() {
                Politik.ui.openTab($('#candidate-link').attr('href'));
            });
        });
    });
});
