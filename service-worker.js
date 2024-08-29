// service-worker.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.replace) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting
      .executeScript({
        target: {tabId: tabs[0].id },
        files: ['scripts/main.js'],
      })
      .then(() => {
        console.log('Script has run');
      });
    });
  }
});