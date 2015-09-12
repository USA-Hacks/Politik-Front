var Politik = window.Politik = window.Politik || {};
Politik.page = {};

Politik.page.send = function(tab, callback) {
    Politik.identity.getId(function(id) {
        if (tab.id && tab.url.substring(0, 6) !== 'chrome') {
            $.ajax({url: Politik.settings.endpoints.post,
                    type: "POST",
                    data: JSON.stringify({url: tab.url, id: id}),
                    contentType: "application/json"})
            .then(callback);
        }
    });
};
