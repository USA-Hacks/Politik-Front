var Politik = window.Politik = window.Politik || {};
Politik.location = {};

Politik.location.onNewLocation = function(callback) {
    chrome.tabs.onUpdated.addListener(function(id, info, tab) {
        if (info.url) {
            callback(tab);
        }
    })
};
