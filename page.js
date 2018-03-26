(function(window, document) {
  function onMessage(data, sender, callback) {
    console.log(`[page.onMessage] ${data.msg}`); //REM

    window.setTimeout(function() {
      callback("woo!");
    }, 1000);
    return true;
  }

  chrome.runtime.onMessage.addListener(onMessage);
})(this, document);
