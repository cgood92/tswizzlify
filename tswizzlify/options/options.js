(function() {
    self = {
        //Bind events
        init: function () {

            //Header
            document.title = chrome.i18n.getMessage("optionsHeader");

            var message = chrome.i18n.getMessage('optionsPageActivate');
            document.getElementById('optionsPageActivate').textContent = message;

            //Options
            self.restoreOptions();
            document.getElementById('chkActivate').addEventListener('change', self.saveOptions);
            
            //Options info ([LINK] not in use)
            var optionsInfo = chrome.i18n.getMessage("openOptionsInfo").replace("[LINK]", "chrome://extensions/");
            document.getElementById("optionsPage").innerHTML = optionsInfo;

            //Link
            var extensionsLink = document.getElementById('extensionsLink');
            //extensionsLink.addEventListener('click', self.linkExtensions);
            extensionsLink.textContent = "chrome://extensions/";

            //Privacy Terms
            document.getElementById('termsToggle').addEventListener('click', self.togglePrivacyTerms);
        },
        //Save to storage
        saveOptions: function() {
            var activate = document.getElementById('chkActivate').checked;
            var items = {
                activate: activate
            };
            chrome.storage.sync.set(items, function () {
                self.setStatus(activate);
                setTimeout(function () {
                }, 750);
            });

            //Notify bg.js
            chrome.runtime.sendMessage({ type: "options", items: items }, function(response) {
                var a = "";
            });
        },
        //Load from storage
        restoreOptions: function() {
            chrome.storage.sync.get({
                activate: true
            }, function (items) {
                document.getElementById('chkActivate').checked = items.activate;
                self.setStatus(items.activate);
            });
        },
        //Update page with status
        setStatus: function (active) {
            var url;
            if (active) {
                url = chrome.extension.getURL('tswizzlify/options/tswift-on.jpg');
            } else {
                url = chrome.extension.getURL('tswizzlify/options/tswift-off.jpg');
            }
            console.log('Setting status', url);
           document.getElementById('imgStatus').src = url;
        },
        //Open extensions page (not working, not in use)
        linkExtensions: function() {
            chrome.runtime.sendMessage({ type: "extensions" }, function(response) {
                var a = "";
            });
        },
        togglePrivacyTerms: function () {
            var holder = document.getElementById('termsHolder');
            if (holder.style.display == "none")
                holder.style.display = "";
            else
                holder.style.display = "none";
        },

    }

    document.addEventListener('DOMContentLoaded', self.init);


})();