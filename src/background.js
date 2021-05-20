// background.js

const { default: Login } = require("./components/Login");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && 
        tab.url.includes('http')) {
        chrome.tabs.executeScript(tabId, { file: 
            './inject-script.js' }, function () {
            chrome.tabs.executeScript(tabId, { file: 
               './foreground.bundle.js' }, function () {
                   console.log('INJECTED AND EXECUTED');
            });
        });
    }
});

chrome.contextMenus.create({
    title: "test",
    contexts: ["all"],
    onclick: function() {
        alert('first');
    }
});



let logged = true;
if(logged == true) {
    chrome.browserAction.setPopup({popup: "login.html"});
} else if (logged = true) {
    chrome.browserAction.setPopup({popup: "popup.html"});
}