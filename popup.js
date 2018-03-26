function main(tab) {
  _log("chrome.tabs.executeScript(..., page.js)");
  chrome.tabs.executeScript(tab.Id, { file: "page.js" }, function() {
    _log("chrome.tabs.executeScript callback!");
    var lastError = chrome.runtime.lastError;

    if (lastError) {
      _log("chrome.runtime.lastError: " + lastError.message);
    } else {
      _log("chrome.tabs.sendMessage(..., test)");
      chrome.tabs.sendMessage(tab.id, { msg: "test" }, function() {
        _log("chrome.tabs.sendMessage callback!");
        var lastError = chrome.runtime.lastError;
        if (lastError) {
          _log("chrome.runtime.lastError: " + lastError.message);
        } else {
          console.log("sendMessage got response!!");
        }
      });
    }
  });
}

function _log(msg) {
  var elt = document.createElement("li");
  elt.innerText = msg;
  document.getElementById("msgs").appendChild(elt);
}

window.addEventListener(
  "load",
  function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var tab = tabs[0];
      main(tab);
    });
  },
  false
);
