//tswizzlify background script
(function() {

    var t_self = {
        //Get saved setting and initialize GUI items
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

        //On first install
        onInstalled: function (details) {
            if (details.reason == "install") {
                t_self.openOptions();
            }
        },

        //On message received
        onMessageReceived: function(message, sender, sendResponse) {
            if (message.type == "extensions") {
                t_self.openExtensions();
            }
            if(typeof (sendResponse) == "function")
                sendResponse();
        },
        //Opens the options tab
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