var Politik = window.Politik = window.Politik || {};
Politik.page = {};

Politik.page.send = function(url, callback) {
    Politik.identity.getId(function(id) {
        if (url.substring(0, 6) !== 'chrome') {
            $.ajax({url: Politik.settings.endpoints.post,
                    type: "POST",
                    data: JSON.stringify({url: url, id: id}),
                    contentType: "application/json"})
            .then(callback);
        }
    });
};

Politik.page.getScore = function(url, callback) {
    Politik.identity.getId(function(id) {
        $.ajax({
            url: Politik.settings.endpoints.score,
            type: "POST",
            data: JSON.stringify({id: id, url: url}),
            contentType: "application/json"})
        .then(callback);
    });
};
