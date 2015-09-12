Politik.location.onNewLocation(function(tab) {
    Politik.page.getContent(tab, function(content) {
        console.log(content);
    });
});
