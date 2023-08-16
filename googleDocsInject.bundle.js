(() => {
    var e = localStorage.getItem("insertText"),
        t = localStorage.getItem("showPreviewText"),
        n = localStorage.getItem("removeText"),
        o = localStorage.getItem("replacementText"),
        c = localStorage.getItem("removeTab"),
        r = localStorage.getItem("removeUpArrow"),
        a = localStorage.getItem("removeDownArrow");
    if (r) {
        var v = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
            i = document.createEvent("Event");
        i.initEvent("keydown", !0, !0), i.keyCode = 40, v.dispatchEvent(i)
    }
    if (a) {
        var d = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
            m = document.createEvent("Event");
        m.initEvent("keydown", !0, !0), m.keyCode = 38, d.dispatchEvent(m)
    }
    if (c) {
        var l = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
            E = document.createEvent("Event");
        E.initEvent("keydown", !0, !0), E.keyCode = 8, l.dispatchEvent(E)
    }
    if (o) {
        var g = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
            u = document.createEvent("Event");
        u.initEvent("keydown", !0, !0), u.keyCode = 8, g.dispatchEvent(u), setTimeout((function() {
            o = o.split("");
            for (var e = 0; e < o.length; e++) {
                h(o[e].charCodeAt(0))
            }
        }), 200)
    }
    if (e) {
        e = e.split("");
        for (var y = 0; y < e.length; y++) {
            h(e[y].charCodeAt(0))
        }
    }
    if (t)
        for (y = 0; y < t.length; y++) {
            h(t[y].charCodeAt(0))
        }
    if (n)
        for (y = 0; y < n.length; y++) {
            var s = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
                f = document.createEvent("Event");
            f.initEvent("keydown", !0, !0), f.keyCode = 8, s.dispatchEvent(f)
        }

    function h(e) {
        var t = document.querySelector(".docs-texteventtarget-iframe").contentDocument.activeElement,
            n = document.createEvent("Event");
        10 == e ? (n.initEvent("keydown", !0, !0), n.keyCode = 13, n.ignoreTypeahead = !0, t.dispatchEvent(n)) : (n.initEvent("keypress", !0, !0), n.keyCode = e, n.ignoreTypeahead = !0, t.dispatchEvent(n))
    }
    localStorage.clear()
})();