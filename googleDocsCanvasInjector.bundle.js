(() => {
    "use strict";
    var e = document.createElement("script");
    e.src = chrome.runtime.getURL("content/gDocsAnnotatedCanvas.js"), (document.head || document.documentElement).appendChild(e)
})();