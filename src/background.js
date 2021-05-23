// background.js

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
    title: "Save to WorkTrace",
    contexts: ["all"],
    onclick: function() {
        alert('Work in Progress!');
    }
});

/*

var port = chrome.extension.connect({
    name: "Listener",
});



chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected");
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        if(msg === "false") {
            logged = false;
            chrome.browserAction.setPopup({popup: "signup.html"});
            //window.location.href="signup.html";
        }
    })
})

if(logged === true) {
    chrome.browserAction.setPopup({popup: "login.html"});
} else if (logged === false) {
    chrome.browserAction.setPopup({popup: "signup.html"});
} */