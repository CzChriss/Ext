var insertText = localStorage.getItem("insertText"),
    showPreviewText = localStorage.getItem("showPreviewText"),
    removeText = localStorage.getItem("removeText"),
    replacementText = localStorage.getItem("replacementText"),
    removeTab = localStorage.getItem("removeTab"),
    removeUpArrow = localStorage.getItem("removeUpArrow"),
    removeDownArrow = localStorage.getItem("removeDownArrow");
if (removeUpArrow) {
    let e = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
        t = document.createEvent("Event");
    t.initEvent("keydown", !0, !0), t.keyCode = 40, e.dispatchEvent(t)
}
if (removeDownArrow) {
    let e = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
        t = document.createEvent("Event");
    t.initEvent("keydown", !0, !0), t.keyCode = 38, e.dispatchEvent(t)
}
if (removeTab) {
    let e = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
        t = document.createEvent("Event");
    t.initEvent("keydown", !0, !0), t.keyCode = 8, e.dispatchEvent(t)
}
if (replacementText) {
    let e = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
        t = document.createEvent("Event");
    t.initEvent("keydown", !0, !0), t.keyCode = 8, e.dispatchEvent(t), setTimeout((() => {
        replacementText = replacementText.split("");
        for (var e = 0; e < replacementText.length; e++) {
            triggerValueWrite(replacementText[e].charCodeAt(0))
        }
    }), 200)
}
if (insertText) {
    insertText = insertText.split("");
    for (var i = 0; i < insertText.length; i++) {
        triggerValueWrite(insertText[i].charCodeAt(0))
    }
}
if (showPreviewText)
    for (i = 0; i < showPreviewText.length; i++) {
        triggerValueWrite(showPreviewText[i].charCodeAt(0))
    }
if (removeText)
    for (i = 0; i < removeText.length; i++) {
        let e = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
            t = document.createEvent("Event");
        t.initEvent("keydown", !0, !0), t.keyCode = 8, e.dispatchEvent(t)
    }

function triggerValueWrite(e) {
    let t = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
        r = document.createEvent("Event");
    10 == e ? (r.initEvent("keydown", !0, !0), r.keyCode = 13, r.ignoreTypeahead = !0, t.dispatchEvent(r)) : (r.initEvent("keypress", !0, !0), r.keyCode = e, r.ignoreTypeahead = !0, t.dispatchEvent(r))
}
localStorage.clear();