Politik.location.onNewLocation(function(tab) {
    Politik.page.send(tab, function(res) {
         console.log(res);
    });
});
