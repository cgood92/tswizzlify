(function() {
    var t_self = {
        init: function() {
            chrome.storage.sync.get({
                activate: true,
                contextmenu: true,
                contextmenuActivate: true
            }, function (items) {
            });
            chrome.runtime.onInstalled.addListener(t_self.onInstalled);
            chrome.runtime.onMessage.addListener(t_self.onMessageReceived);
        },
        onInstalled: function (details) {
            if (details.reason == "install") {
                t_self.openOptions();
            }
        },
        onMessageReceived: function(message, sender, sendResponse) {
            if (message.type == "extensions") {
                t_self.openExtensions();
            }
            if(typeof (sendResponse) == "function")
                sendResponse();
        },
        openOptions:function(){
            var optionsUrl = chrome.extension.getURL('tswizzlify/options/options.html');
            t_self.openUrl(optionsUrl);
        },
        openUrl: function(url) {
            chrome.tabs.query({ url: url }, function (tabs) {
                if (tabs.length) {
                    chrome.tabs.update(tabs[0].id, { active: true });
                    chrome.windows.update(tabs[0].windowId, { focused: true });
                } else {
                    chrome.tabs.create({ url: url });
                }
            });
        }
    };
    t_self.init();
})();