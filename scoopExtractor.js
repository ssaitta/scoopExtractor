//whenever the browser action is clicked the content script is run.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "contentscript.js"});
});