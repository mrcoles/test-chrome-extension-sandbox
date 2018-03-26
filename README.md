
Content Security Policy Sandbox and SetTimeout in Content Script
================================================================

*NOTE: if you’re looking for the popup animate bug [issue 813371](https://bugs.chromium.org/p/chromium/issues/detail?id=813371) see [this repo](https://github.com/mrcoles/test-chrome-extension-popup-animate).*

Tested with:

*   Chrome 64.0.3282
*   Mac OS X 10.13.2

Running the following extension on a page that loads with the response header of `Content-Security-Policy: "sandbox ;"` (e.g., [this page](https://mrcoles.com/csp-sandbox)) fails to trigger the callback between step 3 ("chrome.tabs.sendMessage(..., test)") and step 4 ("chrome.tabs.sendMessage callback!").

In page.js in the `onMessage(...)` function, if the callback is called inside a `setTimeout` then this fails silently. If the `setTimeout` is removed, then this works fine.

I would expect either (1) adding the content script doesn't work at all or (2) calling the `callback` inside a `setTimeout` would work just like the rest of the code.

Separately, despite no scripts being on the page, the error console on the [page with CSP sandbox](https://mrcoles.com/csp-sandbox) is constantly printing the following error message:

    Blocked script execution in '<URL>' because the document's frame is sandboxed and the 'allow-scripts' permission is not set.
