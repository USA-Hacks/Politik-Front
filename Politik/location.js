var Politik = window.Politik = window.Politik || {};
Politik.location = {};

Politik.location.onNewLocation = function(callback) {
    chrome.tabs.onCreated.addListener(function(_tab) {
        chrome.tabs.onUpdated.addListener(function(id, info, tab) {
            if (_tab.id === id && info.status === 'complete') {
                callback(tab);
            }
        });
    });
};
