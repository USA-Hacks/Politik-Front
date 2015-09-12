var Politik = window.Politik = window.Politik || {};
Politik.page = {};

Politik.page.getContent = function(tab, callback) {
    if (tab.id && tab.url.substring(0, 6) !== 'chrome') {
        $.ajax({url: Politik.settings.article,
                type: "POST",
                data: JSON.stringify({url: tab.url}),
                contentType: "application/json"})
        .then(function(res) {
            callback(res.text);
        });
    }
};

Politik.page.send = function(tab, callback) {
    Politik.identity.get(function(id) {
        if (tab.id && tab.url.substring(0, 6) !== 'chrome') {
            $.ajax({url: Politik.settings.post,
                    type: "POST",
                    data: JSON.stringify({url: tab.url, id: id, score: 1}),
                    contentType: "application/json"})
            .then(callback);
        }
    });
};
