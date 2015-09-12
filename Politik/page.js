var Politik = window.Politik = window.Politik || {};
Politik.page = {};
Politik.page.site = {};

Politik.page.site['www.cnn.com'] = function() {
    return Array.prototype.slice.call(document.getElementsByClassName("zn-body__paragraph")).map(function(e) { return e.innerText }).join(' ');
};

Politik.page.site['www.thedailybeast.com'] = function() {
    return Array.prototype.slice.call(document.querySelectorAll("article")).map(function(e) { return e.innerText }).join(' ');
};

Politik.page.getContent = function(tab, callback) {
    if (tab.id && tab.url.substring(0, 6) !== 'chrome') {
        var injectedCode = Politik.page.site[(new URL(tab.url)).hostname];

        if (injectedCode) {
            chrome.tabs.executeScript(tab.id, {code: '('+injectedCode.toString()+')()'}, function(text) {
                callback(text[0]);
            });
        }

        // $.post(Politik.settings.endpoint, {url: tab.url}).then(function(res) {
        //     callback(res.data);
        // });
    }
};
