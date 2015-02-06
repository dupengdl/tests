/* aladdin v1.0.0 - 2015/2/6

 Copyright (c) 2015 Cator V. <catorwei@gmail.com> */
!function () {
    function a(a) {
        return document.getElementById(a)
    }

    function b() {
        function f() {
            "number" == typeof window.orientation && 0 !== window.orientation || "function" != typeof b || location.reload()
        }

        if (window.onorientationchange = f, "number" == typeof window.orientation && 0 !== window.orientation)alert(m.a1 || "璇锋棆杞偍鐨勬墜鏈轰负绔栫珛鐘舵€侊紝鍦ㄦí灞忕晫闈笅鏃犳硶鎿嶄綔锛�"), f(); else {
            b = null;
            var g = document.body.clientWidth, h = g / 640;
            document.body.style.fontSize = 32 * h + "px", document.body.style.width = g + "px";
            var n = a("canvas");
            n.width = 640 * h, n.height = 586 * h;
            var o = new e(n);
            o.b = g, window.PENSIZE && (o.c = window.PENSIZE), document.getElementById("clearCanvas").onclick = function () {
                o.A(), j = 0, i = ""
            }, document.ontouchmove = function (a) {
                "CANVAS" == a.target.tagName && a.preventDefault()
            };
            {
                a("palette")
            }
            a("shareBtn").onclick = function () {
                if (0 == o.k)alert(m.a2 || "鍒€椾簡锛屾垜鎬庝箞浠€涔堥兘娌＄湅鍒板摢锛�"); else if (20 > o.k)alert(m.a3 || "涓嶈杩欎箞浠绘€э紝杩欎篃澶畝娲佷簡锛�"); else if (j == o.k && "" != i)d("share"); else {
                    $$.loading.start(), j = o.k, d("upload", "<p>" + (m.a4 || "鐢熸垚鍥剧墖涓�") + "...</p>");
                    var a, b, e = "";
                    b = o.B("jpeg", .6), "data:image/png" == b.substr(0, 14) ? (b = b.substr(22), a = "png") : (b = b.substr(23), a = "jpg"), e = "jpg" == a ? o.C("jpeg", .6).substr(23) : "", "png" != a || k || !l || confirm((m.a5 || "鐢熸垚鐨勫浘鐗囦负{$num}k锛屾槸鍚︿笂浼狅紵").replace("{$num}", Math.round((b.length + e.length) / 1024))) ? (d("upload", "<p>" + (m.a6 || "鍥剧墖涓婁紶涓�") + "(" + Math.round((b.length + e.length) / 1024) + ")</p>"), c(b, a, e)) : d("editor")
                }
            }
        }
    }

    function c(a, b) {
        var c = new XMLHttpRequest;
        b = b || "jpg", c.onreadystatechange = function () {
            if (4 == c.readyState && 200 == c.status) {
                var a = JSON.parse(c.responseText);
                a.obj.id && (location.href = location.protocol + "//" + location.host + "/activities/write/show.html?imgid=" + a.obj.id)
            } else 4 == c.readyState && 200 !== c.status && (alert(m.a8 || "缃戠粶蹇欙紝璇风◢鍚庡啀璇曪紒code:" + c.status), d("editor"))
        }, c.ontimeout = function () {
            alert(m.a9 || "涓婁紶瓒呮椂锛岃鍦ㄨ緝濂界殑缃戠粶鐜涓啀璇曪紒"), d("editor")
        }, c.upload && (c.upload.onprogress = function (a) {
            a.lengthComputable && d("upload", "<p>" + (m.a6 || "鍥剧墖涓婁紶涓�") + "<span>(" + Math.round(a.total / 1024) + "k/" + Math.round(a.loaded / a.total * 100) + "%)</span></p>")
        }), c.open("POST", $$.API_URL, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a = "j=" + encodeURIComponent(JSON.stringify({openid: $$.api.openid || "", passport: $$.api.passport || "", vericode: $$.api.vericode || "", action: "activity", requestParam: {module: "writeimage", oper: "add", actcode: 3002, bigdata: a, smalldata: ""}})), c.send(a)
    }

    function d() {
    }

    function e(a) {
        if (a.nodeType)this.canvas = a; else {
            if ("string" != typeof a)return;
            this.canvas = document.getElementById(a)
        }
        this.D()
    }

    function f(a, b, c, d) {
        if (!c.p.complete || !c.o.complete)return"";
        d = d || 520, a = a || "png", b = b || .7;
        var e = document.createElement("canvas");
        e.width = e.height = d;
        var f, g, h, i, j = c.canvas.width, k = c.canvas.height;
        if (j / d > 1.8)for (f = document.createElement("canvas"), g = document.createElement("canvas"), h = f.getContext("2d"), i = g.getContext("2d"), f.width = j, f.height = k, h.drawImage(c.canvas, 0, 0, j, k); j / d > 1.8;)j = Math.round(.6 * j), k = Math.round(.6 * k), g.width = j, g.height = k, i.drawImage(f, 0, 0, j, k), f.width = j, f.height = k, h.drawImage(g, 0, 0, j, k); else f = c.canvas;
        return g = e.getContext("2d"), g.drawImage(c.o, 0, 0, d, d), g.drawImage(f, 0, 0, d, d), e.toDataURL("image/" + a, b)
    }

    var g = "", h = navigator.userAgent.match(/ OS (\d+).*? Mac OS/) || !1, i = "", j = 0, k = -1 !== navigator.userAgent.indexOf("NetType/WIFI"), l = -1 !== navigator.userAgent.indexOf("Messenger"), m = window.LANG || {};
    l && window.console && window.console.log, e.prototype = {lineWidth: 1, color: "rgba(0,0,0, .6)", c: 8, b: 320, v: "./images/paper.jpg", k: 0, D: function () {
        var a = this;
        if (this.canvas.getContext) {
            this.a = this.canvas.getContext("2d"), this.a.strokeStyle = this.color, this.a.fillStyle = this.color, this.h(this.canvas, "selectstart", function () {
                return!1
            }), this.o = new Image, this.o.src = this.v, this.p = new Image, this.p.src = "data:image/png;base64," + g;
            var b = function (c) {
                var d, e;
                if ("touchstart" == c.type) {
                    if (2 <= c.touches.length)return;
                    d = c.touches[0].pageX, e = c.touches[0].pageY, a.f(a.canvas, "mousedown", b)
                } else d = c.pageX, e = c.pageY;
                a.F(d, e, c.type), c.preventDefault()
            };
            this.h(this.canvas, "touchstart", b), this.h(this.canvas, "mousedown", b)
        }
    }, F: function (a, b, c) {
        var d = this;
        this.i = this.canvas.getBoundingClientRect(), this.i = {left: this.i.left + (window.scrollX || window.pageXOffset), top: this.i.top + (window.scrollY || window.pageYOffset)}, window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty(), this.a.moveTo(a - this.i.left, b - this.i.top), this.e = null, this.s = 0, this.d = [], this.lineWidth = this.c / 2 * (this.b / 320), this.g && (this.f(document, "mousemove", this.g), this.f(document, "touchmove", this.g), this.f(document, "mouseup", this.j), this.f(document, "touchend", this.j)), this.g = function (a) {
            var b, c;
            if ("touchmove" == a.type) {
                if (2 <= a.touches.length)return;
                b = a.touches[0].pageX, c = a.touches[0].pageY
            } else b = a.pageX, c = a.pageY;
            d.t(b, c), a.preventDefault()
        }, this.j = function () {
            d.G()
        }, "touchstart" == c ? (this.h(document, "touchmove", this.g), this.h(document, "touchend", this.j)) : (this.h(document, "mousemove", this.g), this.h(document, "mouseup", this.j)), this.w(), this.t(a, b)
    }, t: function (a, b) {
        var c;
        c = 0, a -= this.i.left, b -= this.i.top, this.d.length && (c = this.d[this.d.length - 1], c = Math.sqrt((c.x - a) * (c.x - a) + (c.y - b) * (c.y - b)), 0 == c) || (this.k++, this.d.push({x: a, y: b, r: c}), 3 <= this.d.length && (c = this.d.shift(), this.q(c)))
    }, q: function (a, b) {
        var c = a.x, d = a.y, e = a.r, f = h ? 4 : 2;
        if (!this.e || 0 !== e) {
            var g = this.d.length ? this.d[0] : null;
            if (e) {
                if (this.a.moveTo(this.e.x, this.e.y), !this.s && (this.s = 1, g && e > g.r * f))for (e /= 4, f = 1; 4 >= f; f++)this.u(c + f / 4 * (this.e.x - c), d + f / 4 * (this.e.y - d));
                b || (b = e < .003125 * this.b ? this.b / 320 * this.c * 1.625 : e < .00625 * this.b ? this.b / 320 * this.c * 1.375 : e < .009375 * this.b ? this.b / 320 * this.c * 1.25 : e < .015625 * this.b ? this.b / 320 * this.c * 1.125 : e < .021875 * this.b ? this.b / 320 * this.c : e < .028125 * this.b ? this.b / 320 * this.c * .875 : e < .034375 * this.b ? this.b / 320 * this.c * .75 : e < .046875 * this.b ? this.b / 320 * this.c * .625 : e < .0625 * this.b ? this.b / 320 * this.c * .5 : this.b / 320 * this.c * .375), this.n = b, Math.abs(this.lineWidth - this.n) > this.b / 320 * this.c * .025 && (this.lineWidth -= (this.lineWidth - this.n) / 8, this.a.lineWidth = this.lineWidth)
            }
            this.e = a, this.u(c, d)
        }
    }, G: function () {
        this.f(document, "mousemove", this.g), this.f(document, "touchmove", this.g), this.f(document, "mouseup", this.j), this.f(document, "touchend", this.j), --this.a.lineWidth;
        for (var a; this.d.length;)a = this.d.shift(), this.q(a, this.b / 320 * this.c / 4)
    }, A: function () {
        this.e = null, this.k = 0, this.a.clearRect(0, 0, this.canvas.width, this.canvas.height), this.a.beginPath()
    }, u: function (a, b) {
        var c, d, e;
        if (this.a.fillStyle = this.color, this.a.strokeStyle = this.color, this.a.lineTo(this.e.x, this.e.y), this.a.stroke(), this.a.beginPath(), this.a.strokeStyle = "rgba(0, 0, 0, 0)", (this.l || this.m) && (c = this.l - a, d = this.m - b, e = Math.sqrt((this.l - a) * (this.l - a) + (this.m - b) * (this.m - b)), Math.abs(e) > this.lineWidth / 3)) {
            e = Math.floor(Math.abs(e) / (this.lineWidth / 3));
            for (var f = 1; e >= f; f++)Math.abs(this.lineWidth - this.n) > this.b / 320 * this.c * .025 && (this.lineWidth -= Math.round(this.lineWidth - this.n) / 8, this.a.lineWidth = this.lineWidth), this.a.arc(this.l - f / e * c, this.m - f / e * d, this.lineWidth, 0, 2 * Math.PI), this.a.fill(), this.a.stroke(), this.a.beginPath()
        }
        this.a.arc(a, b, this.lineWidth, 0, 2 * Math.PI), this.a.fill(), this.a.stroke(), this.a.beginPath(), this.l = a, this.m = b
    }, w: function () {
        this.m = this.l = 0
    }, h: function (a, b, c) {
        a.attachEvent ? a.attachEvent("on" + b, c) : a.addEventListener(b, c, !1)
    }, f: function (a, b, c) {
        a.detachEvent ? a.detachEvent("on" + b, c) : a.removeEventListener(b, c, !1)
    }, B: function (a, b) {
        return f(a, b, this, 590)
    }, C: function (a, b) {
        return f(a, b, this, 80)
    }}, b()
}();