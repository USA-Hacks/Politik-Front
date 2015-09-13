var Politik = window.Politik = window.Politik || {};
Politik.identity = {};

Politik.identity.getId = function(callback) {
    chrome.storage.sync.get('politikUserId', function(id) {
        if (!id.politikUserId) {
            id =  Politik.util.uuid();
            chrome.storage.sync.set({politikUserId: id}, function() {
                callback(id);
            });
        } else {
            callback(id.politikUserId);
        }
    });
};

Politik.identity.clear = function(callback) {
    chrome.storage.sync.remove('politikUserId', callback);
};

Politik.identity.getScore = function(callback) {
    Politik.identity.getId(function(id) {
        $.ajax({
            url: Politik.settings.endpoints.uscore,
            type: "POST",
            data: JSON.stringify({id: id}),
            contentType: "application/json"})
        .then(callback);
    });
};
