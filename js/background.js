var data = {}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  data = message
})