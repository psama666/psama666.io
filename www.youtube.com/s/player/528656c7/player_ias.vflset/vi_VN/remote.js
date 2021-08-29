(function(g) {
    var window = this;
    'use strict';
    var hQa = function(a, b) {
            return g.Tb(a, b)
        },
        iQa = function(a, b) {
            b = b instanceof g.Kc ? b : g.Qc(b, /^data:image\//i.test(b));
            a.src = g.Lc(b)
        },
        jQa = function(a) {
            if (a instanceof g.Qh) return a;
            if ("function" == typeof a.Ig) return a.Ig(!1);
            if (g.La(a)) {
                var b = 0,
                    c = new g.Qh;
                c.i = function() {
                    for (;;) {
                        if (b >= a.length) throw g.Zh;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                c.next = c.i.bind(c);
                return c
            }
            throw Error("Not implemented");
        },
        kQa = function(a, b, c) {
            if (g.La(a)) try {
                g.Db(a, b, c)
            } catch (d) {
                if (d !== g.Zh) throw d;
            } else {
                a = jQa(a);
                try {
                    for (;;) b.call(c, a.i(), void 0, a)
                } catch (d) {
                    if (d !== g.Zh) throw d;
                }
            }
        },
        N6 = function(a) {
            g.Yj(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Qa()).toString(36));
            return a
        },
        O6 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.dk(a.u, b, c)
        },
        lQa = function(a, b) {
            var c = [];
            kQa(b, function(d) {
                try {
                    var e = g.kr.prototype.u.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.jr(e) && c.push(d)
            }, a);
            return c
        },
        mQa = function(a, b) {
            lQa(a, b).forEach(function(c) {
                g.kr.prototype.remove.call(this, c)
            }, a)
        },
        nQa = function(a) {
            if (a.V) {
                if (a.V.locationOverrideToken) return {
                    locationOverrideToken: a.V.locationOverrideToken
                };
                if (null != a.V.latitudeE7 && null != a.V.longitudeE7) return {
                    latitudeE7: a.V.latitudeE7,
                    longitudeE7: a.V.longitudeE7
                }
            }
            return null
        },
        oQa = function(a, b) {
            g.jb(a, b) || a.push(b)
        },
        P6 = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        pQa = function(a) {
            try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Q6 = function(a) {
            if (g.C.JSON) try {
                return g.C.JSON.parse(a)
            } catch (b) {}
            return pQa(a)
        },
        qQa = function(a, b, c, d) {
            var e = new g.Qj(null, void 0);
            a && g.Rj(e, a);
            b && g.Sj(e, b);
            c && g.Tj(e, c);
            d && (e.K = d);
            return e
        },
        R6 = function(a, b) {
            g.Ru[a] = !0;
            var c = g.Pu();
            c && c.publish.apply(c, arguments);
            g.Ru[a] = !1
        },
        S6 = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.ai;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username =
                a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", rQa(this, a.capabilities || ""), sQa(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "",
                this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        rQa = function(a, b) {
            a.capabilities.clear();
            g.Go(b.split(","), g.Pa(hQa, tQa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        sQa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        T6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        U6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        uQa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        vQa = function(a) {
            return new T6(a)
        },
        wQa = function(a) {
            return Array.isArray(a) ? g.Se(a, vQa) : []
        },
        V6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        W6 = function(a) {
            return Array.isArray(a) ? "[" + g.Se(a, V6).join(",") + "]" : "null"
        },
        X6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        xQa = function(a) {
            return g.Se(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        Y6 = function(a, b) {
            return g.fb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        Z6 = function(a, b) {
            return g.fb(a, function(c) {
                return U6(c, b)
            })
        },
        yQa = function() {
            var a = (0, g.uz)();
            a && mQa(a, a.i.Ig(!0))
        },
        $6 = function() {
            var a = g.xz("yt-remote-connected-devices") || [];
            g.Ab(a);
            return a
        },
        zQa = function(a) {
            if (g.kb(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Se(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        AQa = function(a) {
            g.wz("yt-remote-connected-devices", a, 86400)
        },
        b7 = function() {
            if (a7) return a7;
            var a = g.xz("yt-remote-device-id");
            a || (a = X6(), g.wz("yt-remote-device-id", a, 31536E3));
            for (var b = $6(), c = 1, d = a; g.jb(b, d);) c++, d = a + "#" + c;
            return a7 = d
        },
        c7 = function() {
            var a = $6(),
                b = b7();
            g.jb(a, b);
            g.Az() && g.Cb(a, b);
            a = zQa(a);
            if (g.kb(a)) try {
                g.At("remote_sid")
            } catch (c) {} else try {
                g.xt("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        BQa = function() {
            return g.xz("yt-remote-session-browser-channel")
        },
        CQa = function() {
            return g.xz("yt-remote-local-screens") || []
        },
        DQa = function() {
            g.wz("yt-remote-lounge-token-expiration", !0, 86400)
        },
        EQa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Se(CQa(), function(d) {
                    return d.loungeToken
                }),
                c = g.Se(a, function(d) {
                    return d.loungeToken
                });
            g.vm(c, function(d) {
                return !g.jb(b, d)
            }) && DQa();
            g.wz("yt-remote-local-screens", a, 31536E3)
        },
        FQa = function(a, b) {
            g.wz("yt-remote-session-browser-channel", a);
            g.wz("yt-remote-session-screen-id", b);
            a = $6();
            b = b7();
            g.jb(a, b) || a.push(b);
            AQa(a);
            c7()
        },
        d7 = function(a) {
            a || (g.zz("yt-remote-session-screen-id"), g.zz("yt-remote-session-video-id"));
            c7();
            a = $6();
            g.ob(a, b7());
            AQa(a)
        },
        GQa = function() {
            if (!e7) {
                var a = g.ur();
                a && (e7 = new g.er(a))
            }
        },
        HQa = function() {
            GQa();
            return e7 ? !!e7.get("yt-remote-use-staging-server") : !1
        },
        f7 = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        IQa = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        JQa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        g7 = function(a) {
            a.length ? KQa(a.shift(), function() {
                g7(a)
            }) : h7()
        },
        LQa = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        KQa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.Rk(d, g.Tq(a));
            (document.head || document.documentElement).appendChild(d)
        },
        MQa = function() {
            var a = f7(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        h7 = function() {
            var a = JQa();
            a && a(!1, "No cast extension found")
        },
        i7 = function() {
            if (NQa) {
                var a = 2,
                    b = JQa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                KQa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", h7, c)
            }
        },
        OQa = function() {
            i7();
            var a = MQa();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        QQa = function() {
            i7();
            var a = MQa();
            a.push.apply(a, g.v(PQa.map(LQa)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            g7(a)
        },
        j7 = function(a, b, c) {
            g.H.call(this);
            this.J = null != c ? (0, g.D)(a, c) : a;
            this.Mf = b;
            this.D = (0, g.D)(this.QO, this);
            this.i = !1;
            this.u = 0;
            this.B = this.Kb = null;
            this.C = []
        },
        k7 = function(a, b, c) {
            g.H.call(this);
            this.C = null != c ? a.bind(c) : a;
            this.Mf = b;
            this.B = null;
            this.i = !1;
            this.u = 0;
            this.Kb = null
        },
        l7 = function(a) {
            a.Kb = g.lh(function() {
                a.Kb = null;
                a.i && !a.u && (a.i = !1, l7(a))
            }, a.Mf);
            var b = a.B;
            a.B = null;
            a.C.apply(null, b)
        },
        m7 = function() {},
        n7 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.C.setTimeout(function() {
                a()
            }, b)
        },
        p7 = function(a) {
            o7.dispatchEvent(new RQa(o7, a))
        },
        RQa = function(a, b) {
            g.nf.call(this, "statevent", a);
            this.stat = b
        },
        q7 = function(a, b, c, d) {
            this.i = a;
            this.u = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.ek(this);
            this.J = new g.kh;
            this.J.setInterval(250)
        },
        TQa = function(a, b, c) {
            a.Ts = 1;
            a.Im = N6(b.clone());
            a.eq = c;
            a.D = !0;
            SQa(a, null)
        },
        r7 = function(a, b, c, d, e) {
            a.Ts = 1;
            a.Im = N6(b.clone());
            a.eq = null;
            a.D = c;
            e && (a.YL = !1);
            SQa(a, d)
        },
        SQa = function(a, b) {
            a.Is = Date.now();
            s7(a);
            a.Wn = a.Im.clone();
            O6(a.Wn, "t", a.K);
            a.yA = 0;
            a.Hf = a.i.nC(a.i.Dw() ? b : null);
            0 < a.lB && (a.Kz = new k7((0, g.D)(a.ZM, a, a.Hf), a.lB));
            a.C.Sa(a.Hf, "readystatechange", a.RO);
            b = a.Go ? g.$b(a.Go) : {};
            a.eq ? (a.vA = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Hf.send(a.Wn, a.vA, a.eq, b)) : (a.vA = "GET", a.YL && !g.ng && (b.Connection = "close"), a.Hf.send(a.Wn, a.vA, null, b));
            a.i.rj(1)
        },
        VQa = function(a, b) {
            var c = a.yA,
                d = b.indexOf("\n", c);
            if (-1 == d) return t7;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return UQa;
            d += 1;
            if (d + c > b.length) return t7;
            b = b.substr(d, c);
            a.yA = d + c;
            return b
        },
        XQa = function(a, b) {
            a.Is = Date.now();
            s7(a);
            var c = b ? window.location.hostname : "";
            a.Wn = a.Im.clone();
            g.Yj(a.Wn, "DOMAIN", c);
            g.Yj(a.Wn, "t", a.K);
            try {
                a.Ij = new ActiveXObject("htmlfile")
            } catch (m) {
                u7(a);
                a.Em = 7;
                p7(22);
                v7(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in w7) f = w7[f];
                        else if (f in WQa) f = w7[f] = WQa[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                w7[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            d += "</body></html>";
            c = g.md(g.lc("b/12014412"), d);
            a.Ij.open();
            a.Ij.write(g.hd(c));
            a.Ij.close();
            a.Ij.parentWindow.m = (0, g.D)(a.cV, a);
            a.Ij.parentWindow.d = (0, g.D)(a.qL, a, !0);
            a.Ij.parentWindow.rpcClose = (0, g.D)(a.qL, a, !1);
            c = a.Ij.createElement("DIV");
            a.Ij.parentWindow.document.body.appendChild(c);
            d = g.Pc(a.Wn.toString());
            d = g.vd(g.Lc(d));
            d = g.md(g.lc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.od(c, d);
            a.i.rj(1)
        },
        s7 = function(a) {
            a.IF = Date.now() +
                a.B;
            YQa(a, a.B)
        },
        YQa = function(a, b) {
            if (null != a.gt) throw Error("WatchDog timer not null");
            a.gt = n7((0, g.D)(a.jV, a), b)
        },
        x7 = function(a) {
            a.gt && (g.C.clearTimeout(a.gt), a.gt = null)
        },
        v7 = function(a) {
            a.i.hf() || a.Yo || a.i.fx(a)
        },
        u7 = function(a) {
            x7(a);
            g.hf(a.Kz);
            a.Kz = null;
            a.J.stop();
            g.gk(a.C);
            if (a.Hf) {
                var b = a.Hf;
                a.Hf = null;
                b.abort();
                b.dispose()
            }
            a.Ij && (a.Ij = null)
        },
        y7 = function(a, b) {
            try {
                a.i.jL(a, b), a.i.rj(4)
            } catch (c) {}
        },
        $Qa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                ZQa(a, b, function(h) {
                    h ? c(!0) : g.C.setTimeout(function() {
                        $Qa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        ZQa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    z7(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    z7(d), c(!1)
                } catch (e) {}
            };
            g.C.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            iQa(d, a)
        },
        z7 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        aRa = function(a) {
            this.i = a;
            this.u = new m7
        },
        bRa = function(a) {
            var b = A7(a.i, a.mu, "/mail/images/cleardot.gif");
            N6(b);
            $Qa(b.toString(), 5E3, (0, g.D)(a.LP, a), 3, 2E3);
            a.rj(1)
        },
        C7 = function(a) {
            var b = a.i.N;
            if (null != b) p7(5), b ? (p7(11), B7(a.i, a, !1)) : (p7(12), B7(a.i, a, !0));
            else if (a.lh = new q7(a, void 0, void 0, void 0), a.lh.Go = a.mB, b = a.i, b = A7(b, b.Dw() ? a.Mt : null, a.nB), p7(5), !g.ke || g.ce(10)) O6(b, "TYPE", "xmlhttp"), r7(a.lh, b, !1, a.Mt, !1);
            else {
                O6(b, "TYPE", "html");
                var c = a.lh;
                a = !!a.Mt;
                c.Ts = 3;
                c.Im = N6(b.clone());
                XQa(c, a)
            }
        },
        D7 = function(a, b, c) {
            this.Ra = 1;
            this.i = [];
            this.B = [];
            this.C = new m7;
            this.K = a || null;
            this.N = null != b ? b : null;
            this.D = c || !1
        },
        cRa = function(a, b) {
            this.i = a;
            this.map = b;
            this.context = null
        },
        dRa = function(a, b, c, d) {
            g.nf.call(this, "timingevent", a);
            this.size = b;
            this.ww = d
        },
        eRa = function(a) {
            g.nf.call(this, "serverreachability", a)
        },
        hRa = function(a) {
            fRa(a);
            if (3 == a.Ra) {
                var b = a.Mv++,
                    c = a.Nx.clone();
                g.Yj(c, "SID", a.u);
                g.Yj(c, "RID", b);
                g.Yj(c, "TYPE", "terminate");
                E7(a, c);
                b = new q7(a, a.u, b, void 0);
                b.Ts = 2;
                b.Im = N6(c.clone());
                iQa(new Image, b.Im.toString());
                b.Is = Date.now();
                s7(b)
            }
            gRa(a)
        },
        iRa = function(a) {
            a.lQ(1, 0);
            a.Nx = A7(a, null, a.oB);
            F7(a)
        },
        fRa = function(a) {
            a.Nm && (a.Nm.abort(), a.Nm = null);
            a.De && (a.De.cancel(), a.De = null);
            a.wl && (g.C.clearTimeout(a.wl), a.wl = null);
            G7(a);
            a.Tg && (a.Tg.cancel(), a.Tg = null);
            a.Wm && (g.C.clearTimeout(a.Wm), a.Wm = null)
        },
        jRa = function(a, b) {
            if (0 == a.Ra) throw Error("Invalid operation: sending map when state is closed");
            a.i.push(new cRa(a.UR++, b));
            2 != a.Ra && 3 != a.Ra || F7(a)
        },
        kRa = function(a) {
            var b = 0;
            a.De && b++;
            a.Tg && b++;
            return b
        },
        F7 = function(a) {
            a.Tg || a.Wm || (a.Wm = n7((0, g.D)(a.oL, a), 0), a.Er = 0)
        },
        mRa = function(a, b) {
            if (1 == a.Ra) {
                if (!b) {
                    a.Mv = Math.floor(1E5 * Math.random());
                    b = a.Mv++;
                    var c = new q7(a, "", b, void 0);
                    c.Go = a.Wj;
                    var d = H7(a),
                        e = a.Nx.clone();
                    g.Yj(e, "RID", b);
                    g.Yj(e, "CVER", "1");
                    E7(a, e);
                    TQa(c, e, d);
                    a.Tg = c;
                    a.Ra = 2
                }
            } else 3 == a.Ra && (b ? lRa(a, b) : 0 == a.i.length || a.Tg || lRa(a))
        },
        lRa = function(a, b) {
            if (b)
                if (6 < a.Zo) {
                    a.i = a.B.concat(a.i);
                    a.B.length = 0;
                    var c = a.Mv - 1;
                    b = H7(a)
                } else c = b.N, b = b.eq;
            else c = a.Mv++, b = H7(a);
            var d = a.Nx.clone();
            g.Yj(d, "SID", a.u);
            g.Yj(d, "RID", c);
            g.Yj(d, "AID", a.Xr);
            E7(a, d);
            c = new q7(a, a.u, c, a.Er + 1);
            c.Go = a.Wj;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Tg = c;
            TQa(c, d, b)
        },
        E7 = function(a, b) {
            a.If && (a = a.If.MI()) && g.Gb(a, function(c, d) {
                g.Yj(b, d, c)
            })
        },
        H7 = function(a) {
            var b = Math.min(a.i.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Zo && 0 < b) {
                var d = a.i[0].i;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    Iq: e.Iq
                }, f++) {
                e.Iq = a.i[f].i;
                var h = a.i[f].map;
                e.Iq = 6 >= a.Zo ? f : e.Iq - d;
                try {
                    g.Gb(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.Iq + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.Iq + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.i.splice(0, b));
            return c.join("&")
        },
        nRa = function(a) {
            a.De || a.wl || (a.J = 1, a.wl = n7((0, g.D)(a.nL, a), 0), a.er = 0)
        },
        I7 = function(a) {
            if (a.De || a.wl || 3 <= a.er) return !1;
            a.J++;
            a.wl = n7((0, g.D)(a.nL, a), oRa(a, a.er));
            a.er++;
            return !0
        },
        B7 = function(a, b, c) {
            a.tA = c;
            a.Xj = b.Zk;
            a.D || iRa(a)
        },
        G7 = function(a) {
            null != a.kp && (g.C.clearTimeout(a.kp), a.kp = null)
        },
        oRa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        J7 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.If && (c = null);
                var d = (0, g.D)(a.fW, a);
                c || (c = new g.Qj("//www.google.com/images/cleardot.gif"), N6(c));
                ZQa(c.toString(), 1E4, d)
            } else p7(2);
            pRa(a, b)
        },
        pRa = function(a, b) {
            a.Ra = 0;
            a.If && a.If.aI(b);
            gRa(a);
            fRa(a)
        },
        gRa = function(a) {
            a.Ra = 0;
            a.Xj = -1;
            if (a.If)
                if (0 == a.B.length && 0 == a.i.length) a.If.aC();
                else {
                    g.rb(a.B);
                    var b = g.rb(a.i);
                    a.B.length = 0;
                    a.i.length = 0;
                    a.If.aC(b)
                }
        },
        A7 = function(a, b, c) {
            var d = g.Zj(c);
            if ("" != d.i) b && g.Sj(d, b + "." + d.i), g.Tj(d, d.B);
            else {
                var e = window.location;
                d = qQa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.Ku && g.Gb(a.Ku, function(f, h) {
                g.Yj(d, h, f)
            });
            g.Yj(d, "VER", a.Zo);
            E7(a, d);
            return d
        },
        qRa = function() {},
        rRa = function() {
            this.i = [];
            this.u = []
        },
        sRa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        K7 = function(a, b) {
            g.H.call(this);
            this.i = new g.K(this.UU, 0, this);
            g.J(this, this.i);
            this.Mf = 5E3;
            this.u = 0;
            if ("function" === typeof a) b && (a = (0, g.D)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.D)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.B = a
        },
        L7 = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.ya = a;
            this.J = b;
            this.B = new g.dr;
            this.u = new K7(this.KV, this);
            this.i = null;
            this.ea = !1;
            this.D = null;
            this.V = "";
            this.N = this.C = 0;
            this.K = [];
            this.Aa = c;
            this.ma = d;
            this.Ca = e
        },
        tRa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.i.tA,
                sessionId: a.i.u,
                arrayId: a.i.Xr
            }
        },
        uRa = function(a, b) {
            a.N = b || 0;
            a.u.stop();
            M7(a);
            a.i && (3 == a.i.getState() && mRa(a.i), hRa(a.i));
            a.N = 0
        },
        N7 = function(a) {
            return !!a.i && 3 == a.i.getState()
        },
        M7 = function(a) {
            if (a.i) {
                var b = a.ma(),
                    c = a.i.Wj || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.i.Wj = c
            }
        },
        O7 = function(a) {
            this.port = this.domain = "";
            this.i = "/api/lounge";
            this.u = !0;
            a = a || document.location.href;
            var b = Number(g.gi(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.hi(a) || "";
            a = g.ad;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Ic(a, "10.0") && (this.u = !1))
        },
        P7 = function(a, b) {
            var c = a.i;
            a.u && (c = "https://" + a.domain + a.port + a.i);
            return g.si(c + b, {})
        },
        Q7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Pa(a.C, d, !0),
                onError: g.Pa(a.B, e),
                onTimeout: g.Pa(a.D, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.lt(b, a)
        },
        yRa = function() {
            var a = vRa;
            wRa();
            R7.push(a);
            xRa()
        },
        S7 = function(a, b) {
            wRa();
            var c = zRa(a, String(b));
            g.kb(R7) ? ARa(c) : (xRa(), g.Db(R7, function(d) {
                d(c)
            }))
        },
        wRa = function() {
            R7 || (R7 = g.Ha("yt.mdx.remote.debug.handlers_") || [], g.Ga("yt.mdx.remote.debug.handlers_", R7, void 0))
        },
        ARa = function(a) {
            var b = (T7 + 1) % 50;
            T7 = b;
            U7[b] = a;
            V7 || (V7 = 49 == b)
        },
        xRa = function() {
            var a = R7;
            if (U7[0]) {
                var b = V7 ? T7 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = U7[b];
                    g.Db(a, function(d) {
                        d(c)
                    })
                } while (b != T7);
                U7 = Array(50);
                T7 = -1;
                V7 = !1
            }
        },
        zRa = function(a, b) {
            var c = (Date.now() - BRa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        W7 = function(a) {
            g.R.call(this);
            this.J = a;
            this.screens = []
        },
        CRa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        DRa = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.Go(a.screens, function(f) {
                return !!Y6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = CRa(a, b[d]) || c;
            return c
        },
        ERa = function(a, b) {
            var c = a.screens.length;
            a.screens = g.Go(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        X7 = function(a, b, c, d, e) {
            g.R.call(this);
            this.B = a;
            this.K = b;
            this.C = c;
            this.J = d;
            this.D = e;
            this.u = 0;
            this.i = null;
            this.Kb = NaN
        },
        Z7 = function(a) {
            W7.call(this, "LocalScreenService");
            this.u = a;
            this.i = NaN;
            Y7(this);
            this.info("Initializing with " + W6(this.screens))
        },
        FRa = function(a) {
            if (a.screens.length) {
                var b = g.Se(a.screens, function(d) {
                        return d.id
                    }),
                    c = P7(a.u, "/pairing/get_lounge_token_batch");
                Q7(a.u, c, {
                    screen_ids: b.join(",")
                }, (0, g.D)(a.JQ, a), (0, g.D)(a.IQ, a))
            }
        },
        Y7 = function(a) {
            if (g.hs("deprecate_pair_servlet_enabled")) return DRa(a, []);
            var b = wQa(CQa());
            b = g.Go(b, function(c) {
                return !c.uuid
            });
            return DRa(a, b)
        },
        $7 = function(a, b) {
            EQa(g.Se(a.screens, uQa));
            b && DQa()
        },
        b8 = function(a, b) {
            g.R.call(this);
            this.J = b;
            b = (b = g.xz("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.J(), e = 0, f = d.length; e < f; ++e) {
                var h = d[e].id;
                c[h] = g.jb(b, h)
            }
            this.i = c;
            this.D = a;
            this.B = this.C = NaN;
            this.u = null;
            a8("Initialized with " + g.Jh(this.i))
        },
        c8 = function(a, b, c) {
            var d = P7(a.D, "/pairing/get_screen_availability");
            Q7(a.D, d, {
                lounge_token: b.token
            }, (0, g.D)(function(e) {
                e = e.screens || [];
                for (var f = 0, h = e.length; f < h; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.D)(function() {
                c(!1)
            }, a))
        },
        d8 = function(a, b) {
            a: if (P6(b) != P6(a.i)) var c = !1;
                else {
                    c = g.Ob(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.i[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (a8("Updated online screens: " + g.Jh(a.i)), a.i = b, a.Z("screenChange"));GRa(a)
        },
        e8 = function(a) {
            isNaN(a.B) || g.gt(a.B);
            a.B = g.et((0, g.D)(a.EE, a), 0 < a.C && a.C < g.Qa() ? 2E4 : 1E4)
        },
        a8 = function(a) {
            S7("OnlineScreenService", a)
        },
        HRa = function(a) {
            var b = {};
            g.Db(a.J(), function(c) {
                c.token ? b[c.token] = c.id : this.Yd("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        GRa = function(a) {
            a = g.Ob(g.Hb(a.i, function(b) {
                return b
            }));
            g.Ab(a);
            a.length ? g.wz("yt-remote-online-screen-ids", a.join(","), 60) : g.zz("yt-remote-online-screen-ids")
        },
        f8 = function(a, b) {
            b = void 0 === b ? !1 : b;
            W7.call(this, "ScreenService");
            this.C = a;
            this.K = b;
            this.i = this.u = null;
            this.B = [];
            this.D = {};
            IRa(this)
        },
        KRa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var h = a.Gh(),
                l = c ? Z6(h, c) : null;
            c && (a.K || l) || (l = Z6(h, b));
            if (l) {
                l.uuid = b;
                var m = g8(a, l);
                c8(a.i, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? JRa(a, c, (0, g.D)(function(n) {
                var p = g8(this, new T6({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                c8(this.i, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        LRa = function(a, b) {
            for (var c = 0, d = a.screens.length; c < d; ++c)
                if (a.screens[c].name == b) return a.screens[c];
            return null
        },
        MRa = function(a, b, c) {
            c8(a.i, b, c)
        },
        JRa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.lt(P7(a.C, "/pairing/get_lounge_token_batch"), e)
        },
        NRa = function(a) {
            a.screens = a.u.Gh();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.screens.length; b < d; ++b) {
                var e = a.screens[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + W6(a.screens))
        },
        IRa = function(a) {
            h8(a);
            a.u = new Z7(a.C);
            a.u.subscribe("screenChange", (0, g.D)(a.SQ, a));
            NRa(a);
            a.K || (a.B = wQa(g.xz("yt-remote-automatic-screen-cache") || []));
            h8(a);
            a.info("Initializing automatic screens: " + W6(a.B));
            a.i = new b8(a.C, (0, g.D)(a.Gh, a, !0));
            a.i.subscribe("screenChange", (0, g.D)(function() {
                this.Z("onlineScreenChange")
            }, a))
        },
        g8 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = Z6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.K || ORa(a));
            h8(a);
            a.D[b.uuid] = b.id;
            g.wz("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        ORa = function(a) {
            a = g.Go(a.B, function(b) {
                return "shortLived" != b.idType
            });
            g.wz("yt-remote-automatic-screen-cache", g.Se(a, uQa))
        },
        h8 = function(a) {
            a.D = g.xz("yt-remote-device-id-map") || {}
        },
        i8 = function(a, b, c) {
            g.R.call(this);
            this.Ca = c;
            this.B = a;
            this.i = b;
            this.C = null
        },
        j8 = function(a, b) {
            a.C = b;
            a.Z("sessionScreen", a.C)
        },
        PRa = function(a, b) {
            a.C && (a.C.token = b, g8(a.B, a.C));
            a.Z("sessionScreen", a.C)
        },
        k8 = function(a, b) {
            S7(a.Ca, b)
        },
        l8 = function(a, b, c) {
            i8.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.u = null;
            this.ma = (0, g.D)(this.WO, this);
            this.Aa = (0, g.D)(this.mV, this);
            this.ea = g.et(function() {
                QRa(d, null)
            }, 12E4);
            this.K = this.D = this.J = this.N = 0;
            this.ya = !1;
            this.V = "unknown"
        },
        m8 = function(a, b) {
            g.gt(a.K);
            a.K = 0;
            0 == b ? RRa(a) : a.K = g.et(function() {
                RRa(a)
            }, b)
        },
        RRa = function(a) {
            SRa(a, "getLoungeToken");
            g.gt(a.D);
            a.D = g.et(function() {
                TRa(a, null)
            }, 3E4)
        },
        SRa = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Jh(void 0));
            var c = {};
            c.type = b;
            a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, g.Ia, (0, g.D)(function() {
                k8(this, "Failed to send message: " + b + ".")
            }, a)) : k8(a, "Sending yt message without session: " + g.Jh(c))
        },
        n8 = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.aJ(b, function(c) {
                j8(a, c)
            }, function() {
                return a.qg()
            }, 5)) : a.qg(Error("Waiting for session status timed out."))
        },
        VRa = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            URa(a, d, function(e) {
                e ? (a.ya = !0, g8(a.B, d), j8(a, d), a.V = "unknown", m8(a, c)) : (g.ms(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.qg())
            }, 5)
        },
        QRa = function(a, b) {
            g.gt(a.ea);
            a.ea = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? VRa(a, {
                name: a.i.friendlyName,
                screenId: b.screenId,
                loungeToken: b.loungeToken,
                dialId: b.deviceId,
                screenIdType: "shortLived"
            }, b.loungeTokenRefreshIntervalMs) : (g.ms(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), n8(a, b.screenId))) : (g.ms(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                ".")), n8(a, b.screenId)) : n8(a, b.screenId) : a.qg(Error("Waiting for session status timed out."))
        },
        TRa = function(a, b) {
            g.gt(a.D);
            a.D = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.V = c, m8(a, 3E4)) : (PRa(a, b.loungeToken), a.ya = !1, a.V = "unknown", m8(a, b.loungeTokenRefreshIntervalMs))
        },
        URa = function(a, b, c, d) {
            g.gt(a.J);
            a.J = 0;
            MRa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.et(function() {
                    URa(a, b, c, d - 1)
                }, 300)
            })
        },
        WRa = function(a) {
            g.gt(a.N);
            a.N = 0;
            g.gt(a.J);
            a.J = 0;
            g.gt(a.ea);
            a.ea = 0;
            g.gt(a.D);
            a.D = 0;
            g.gt(a.K);
            a.K = 0
        },
        o8 = function(a, b, c, d) {
            i8.call(this, a, b, "DialSession");
            this.config_ = d;
            this.u = this.N = null;
            this.Aa = "";
            this.Ka = c;
            this.La = null;
            this.ea = g.Ia;
            this.V = NaN;
            this.Ha = (0, g.D)(this.XO, this);
            this.D = g.Ia;
            this.K = this.J = 0;
            this.ma = !1;
            this.ya = "unknown"
        },
        p8 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
        },
        XRa = function(a) {
            a.D = a.B.HG(a.Aa, a.i.label, a.i.friendlyName, p8(a), function(b, c) {
                a.D = g.Ia;
                a.ma = !0;
                j8(a, b);
                "shortLived" == b.idType && 0 < c && q8(a, c)
            }, function(b) {
                a.D = g.Ia;
                a.qg(b)
            })
        },
        YRa = function(a) {
            var b = {};
            b.pairingCode = a.Aa;
            b.theme = a.Ka;
            HQa() && (b.env_useStageMdx = 1);
            return g.qi(b)
        },
        r8 = function(a) {
            return new Promise(function(b) {
                a.Aa = X6();
                if (a.La) {
                    var c = new chrome.cast.DialLaunchResponse(!0, YRa(a));
                    b(c);
                    XRa(a)
                } else a.ea = function() {
                    g.gt(a.V);
                    a.ea = function() {};
                    a.V = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, YRa(a));
                    b(d);
                    XRa(a)
                }, a.V = g.et(function() {
                    a.ea()
                }, 100)
            })
        },
        $Ra = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new T6(b);
            return (new Promise(function(e) {
                ZRa(a, d, function(f) {
                    f ? (a.ma = !0, g8(a.B, d), j8(a, d), q8(a, c)) : g.ms(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        aSa = function(a, b) {
            var c = a.N.receiver.label,
                d = a.i.friendlyName;
            return (new Promise(function(e) {
                KRa(a.B, c, b, d, function(f) {
                    f && f.token && j8(a, f);
                    e(f)
                }, function(f) {
                    k8(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : r8(a)
            })
        },
        ZRa = function(a, b, c, d) {
            g.gt(a.J);
            a.J = 0;
            MRa(a.B, b, function(e) {
                e || 0 > d ? c(e) : a.J = g.et(function() {
                    ZRa(a, b, c, d - 1)
                }, 300)
            })
        },
        q8 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            p8(a) && (g.gt(a.K), a.K = 0, 0 == b ? bSa(a) : a.K = g.et(function() {
                bSa(a)
            }, b))
        },
        bSa = function(a) {
            p8(a) && a.u.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.ya = c, q8(a, 3E4)) : (a.ma = !1, a.ya = "unknown", PRa(a, b.loungeToken), q8(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.ya = "noLoungeTokenResponse";
                q8(a, 3E4)
            })
        },
        cSa = function(a) {
            g.gt(a.J);
            a.J = 0;
            g.gt(a.K);
            a.K = 0;
            a.D();
            a.D = function() {};
            g.gt(a.V)
        },
        s8 = function(a, b) {
            i8.call(this, a, b, "ManualSession");
            this.u = g.et((0, g.D)(this.Yr, this, null), 150)
        },
        t8 = function(a, b) {
            g.R.call(this);
            this.config_ = b;
            this.u = a;
            this.N = b.appId || "233637DE";
            this.C = b.theme || "cl";
            this.V = b.disableCastApi || !1;
            this.J = b.forceMirroring || !1;
            this.i = null;
            this.K = !1;
            this.B = [];
            this.D = (0, g.D)(this.iU, this)
        },
        dSa = function(a, b) {
            return b ? g.fb(a.B, function(c) {
                return U6(b, c.label)
            }, a) : null
        },
        u8 = function(a) {
            S7("Controller", a)
        },
        vRa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        v8 = function(a) {
            return a.K || !!a.B.length || !!a.i
        },
        w8 = function(a, b, c) {
            b != a.i && (g.hf(a.i), (a.i = b) ? (c ? a.Z("yt-remote-cast2-receiver-resumed",
                b.i) : a.Z("yt-remote-cast2-receiver-selected", b.i), b.subscribe("sessionScreen", (0, g.D)(a.mL, a, b)), b.subscribe("sessionFailed", function() {
                return eSa(a, b)
            }), b.getScreen() ? a.Z("yt-remote-cast2-session-change", b.getScreen()) : c && a.i.Yr(null)) : a.Z("yt-remote-cast2-session-change", null))
        },
        eSa = function(a, b) {
            a.i == b && a.Z("yt-remote-cast2-session-failed")
        },
        fSa = function(a) {
            var b = a.u.GG(),
                c = a.i && a.i.i;
            a = g.Se(b, function(d) {
                c && U6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = dSa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        kSa = function(a, b, c, d) {
            d.disableCastApi ? x8("Cannot initialize because disabled by Mdx config.") : gSa() ? hSa(b, d) && (y8(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? iSa(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? iSa(a, c) : (z8("Failed to load cast API: " + f), A8(!1), y8(!1), g.zz("yt-remote-cast-available"), g.zz("yt-remote-cast-receiver"),
                    jSa(), c(!1))
            }, d.loadCastApiSetupScript ? g.Bz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= f7() && OQa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? h7() : 89 <= f7() ? QQa() : (i7(), g7(PQa.map(LQa))))) : x8("Cannot initialize because not running Chrome")
        },
        jSa = function() {
            x8("dispose");
            var a = B8();
            a && a.dispose();
            g.Ga("yt.mdx.remote.cloudview.instance_", null, void 0);
            lSa(!1);
            g.Uu(C8);
            C8.length = 0
        },
        D8 = function() {
            return !!g.xz("yt-remote-cast-installed")
        },
        mSa = function() {
            var a = g.xz("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        nSa = function() {
            x8("clearCurrentReceiver");
            g.zz("yt-remote-cast-receiver")
        },
        oSa = function() {
            return D8() ? B8() ? B8().getCastSession() : (z8("getCastSelector: Cast is not initialized."), null) : (z8("getCastSelector: Cast API is not installed!"), null)
        },
        F8 = function() {
            D8() ? B8() ? E8() ? (x8("Requesting cast selector."), B8().requestSession()) : (x8("Wait for cast API to be ready to request the session."), C8.push(g.Tu("yt-remote-cast2-api-ready", F8))) : z8("requestCastSelector: Cast is not initialized.") : z8("requestCastSelector: Cast API is not installed!")
        },
        G8 =
        function(a, b) {
            E8() ? B8().setConnectedScreenStatus(a, b) : z8("setConnectedScreenStatus called before ready.")
        },
        gSa = function() {
            var a = 0 <= g.ad.search(/ (CrMo|Chrome|CriOS)\//);
            return g.dj || a
        },
        pSa = function(a, b) {
            B8().init(a, b)
        },
        hSa = function(a, b) {
            var c = !1;
            B8() || (a = new t8(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.wz("yt-remote-cast-available", d);
                R6("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                x8("onReceiverSelected: " + d.friendlyName);
                g.wz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                x8("onReceiverResumed: " + d.friendlyName);
                g.wz("yt-remote-cast-receiver", d);
                R6("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                x8("onSessionChange: " + V6(d));
                d || g.zz("yt-remote-cast-receiver");
                R6("yt-remote-cast2-session-change", d)
            }), g.Ga("yt.mdx.remote.cloudview.instance_", a, void 0), c = !0);
            x8("cloudview.createSingleton_: " + c);
            return c
        },
        B8 = function() {
            return g.Ha("yt.mdx.remote.cloudview.instance_")
        },
        iSa = function(a, b) {
            A8(!0);
            y8(!1);
            pSa(a, function(c) {
                c ? (lSa(!0), g.Vu("yt-remote-cast2-api-ready")) : (z8("Failed to initialize cast API."), A8(!1), g.zz("yt-remote-cast-available"), g.zz("yt-remote-cast-receiver"), jSa());
                b(c)
            })
        },
        x8 = function(a) {
            S7("cloudview", a)
        },
        z8 = function(a) {
            S7("cloudview", a)
        },
        A8 = function(a) {
            x8("setCastInstalled_ " + a);
            g.wz("yt-remote-cast-installed", a)
        },
        E8 = function() {
            return !!g.Ha("yt.mdx.remote.cloudview.apiReady_")
        },
        lSa = function(a) {
            x8("setApiReady_ " + a);
            g.Ga("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        y8 = function(a) {
            g.Ga("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        H8 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.J = this.K = 0;
            this.trackData = null;
            this.hasNext = this.Bk = !1;
            this.N = this.D = this.i = this.C = 0;
            this.B = NaN;
            this.u = !1;
            this.reset(a)
        },
        I8 = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.Bk = !1;
            a.hasNext = !1;
            a.K = 0;
            a.J = g.Qa();
            a.C = 0;
            a.i = 0;
            a.D = 0;
            a.N = 0;
            a.B = NaN;
            a.u = !1
        },
        J8 = function(a) {
            return a.yc() ? (g.Qa() - a.J) / 1E3 : 0
        },
        K8 = function(a, b) {
            a.K = b;
            a.J = g.Qa()
        },
        L8 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.Qa() - a.J) / 1E3 + a.K;
                case -1E3:
                    return 0
            }
            return a.K
        },
        M8 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && I8(a)
        },
        N8 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.ac(a.trackData);
            b.hasPrevious = a.Bk;
            b.hasNext = a.hasNext;
            b.playerTime = a.K;
            b.playerTimeAt = a.J;
            b.seekableStart = a.C;
            b.seekableEnd = a.i;
            b.duration = a.D;
            b.loadedTime = a.N;
            b.liveIngestionTime = a.B;
            return b
        },
        P8 = function(a, b) {
            g.R.call(this);
            this.Ra = 0;
            this.B = a;
            this.D = [];
            this.C = new rRa;
            this.u = this.i = null;
            this.N = (0, g.D)(this.GS, this);
            this.J = (0, g.D)(this.Tv, this);
            this.K = (0, g.D)(this.ES, this);
            this.V = (0, g.D)(this.NS, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.TE, this), qSa(this))) : c = 3;
            0 != c && (b ? this.TE(c) : g.et((0, g.D)(function() {
                this.TE(c)
            }, this), 0));
            (a = oSa()) && O8(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.V)
        },
        Q8 = function(a) {
            return new H8(a.B.getPlayerContextData())
        },
        qSa = function(a) {
            g.Db("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled".split(" "), function(b) {
                this.D.push(this.B.subscribe(b, g.Pa(this.fU, b), this))
            }, a)
        },
        rSa = function(a) {
            g.Db(a.D, function(b) {
                this.B.unsubscribeByKey(b)
            }, a);
            a.D.length = 0
        },
        R8 = function(a) {
            return 1 == a.getState()
        },
        S8 = function(a, b) {
            var c = a.C;
            50 > c.i.length + c.u.length && a.C.u.push(b)
        },
        U8 = function(a, b, c) {
            var d = Q8(a);
            K8(d, c); - 1E3 != d.playerState && (d.playerState = b);
            T8(a, d)
        },
        V8 = function(a, b, c) {
            a.B.sendMessage(b, c)
        },
        T8 = function(a, b) {
            rSa(a);
            a.B.setPlayerContextData(N8(b));
            qSa(a)
        },
        O8 = function(a, b) {
            a.u && (a.u.removeUpdateListener(a.N), a.u.removeMediaListener(a.J), a.Tv(null));
            a.u = b;
            a.u && (S7("CP", "Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.N), a.u.addMediaListener(a.J), a.u.media.length && a.Tv(a.u.media[0]))
        },
        sSa = function(a) {
            var b = a.i.media,
                c = a.i.customData;
            if (b && c) {
                var d = Q8(a);
                b.contentId != d.videoId && S7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                K8(d, a.i.getEstimatedTime());
                T8(a, d)
            } else S7("CP", "No cast media video. Ignoring state update.")
        },
        W8 = function(a, b, c) {
            return (0, g.D)(function(d) {
                this.Yd("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.Yd("Retrying " + b + " using MDx browser channel."), V8(this, b, c))
            }, a)
        },
        X8 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.R.call(this);
            this.D = NaN;
            this.ya = !1;
            this.N = this.K = this.ea = this.ma = NaN;
            this.V = [];
            this.C = this.J = this.B = this.jc = this.i = null;
            this.Ha = a;
            this.Ca = d;
            this.V.push(g.ku(window, "beforeunload", (0, g.D)(this.EQ, this)));
            this.u = [];
            this.jc = new H8;
            this.La = b.id;
            this.Aa = b.idType;
            this.i = tSa(this, c);
            this.i.subscribe("handlerOpened", this.KS, this);
            this.i.subscribe("handlerClosed", this.HS, this);
            this.i.subscribe("handlerError", this.IS, this);
            this.i.subscribe("handlerMessage", this.JS, this);
            this.i.Wz(b.token);
            this.subscribe("remoteQueueChange",
                function() {
                    var e = this.jc.videoId;
                    g.Az() && g.wz("yt-remote-session-video-id", e)
                }, this)
        },
        uSa = function(a) {
            return g.fb(a.u, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        Y8 = function(a) {
            S7("conn", a)
        },
        tSa = function(a, b) {
            return new L7(P7(a.Ha, "/bc"), b, !1, function() {
                return a.LG()
            }, "shortLived" == a.Aa)
        },
        Z8 = function(a, b) {
            a.Z("proxyStateChange", b)
        },
        vSa = function(a) {
            a.D = g.et((0, g.D)(function() {
                Y8("Connecting timeout");
                this.zr(1)
            }, a), 2E4)
        },
        $8 = function(a) {
            g.gt(a.D);
            a.D = NaN
        },
        a9 = function(a) {
            g.gt(a.ma);
            a.ma = NaN
        },
        wSa = function(a) {
            b9(a);
            a.ea = g.et((0, g.D)(function() {
                c9(this, "getNowPlaying")
            }, a), 2E4)
        },
        b9 = function(a) {
            g.gt(a.ea);
            a.ea = NaN
        },
        ySa = function(a, b) {
            var c = null;
            if (b) {
                var d = uSa(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ga("yt.mdx.remote.remoteClient_", c, void 0);
            b && ($8(a), a9(a));
            c = N7(a.i) && isNaN(a.D);
            b == c ? b && (Z8(a, 1), c9(a, "getSubtitlesTrack")) : b ? (a.ZI() && a.jc.reset(), Z8(a, 1), c9(a, "getNowPlaying"), xSa(a)) : a.zr(1)
        },
        zSa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.jc.videoId && (g.Wb(b.params) ? a.jc.trackData = null : a.jc.trackData = b.params, a.Z("remotePlayerChange"))
        },
        ASa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.jc.listId = b.params.listId || a.jc.listId;
            M8(a.jc, c, d);
            a.Z("remoteQueueChange")
        },
        CSa = function(a, b) {
            b.params = b.params || {};
            ASa(a, b);
            BSa(a, b);
            a.Z("autoplayDismissed")
        },
        BSa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            K8(a.jc, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.jc.playerState && (c = -1E3);
            a.jc.playerState = c;
            c = Number(b.params.loadedTime);
            a.jc.N = isNaN(c) ? 0 : c;
            a.jc.Cj(Number(b.params.duration));
            c = a.jc;
            var d = Number(b.params.liveIngestionTime);
            c.B = d;
            c.u = isNaN(d) ? !1 : !0;
            c = a.jc;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.C = isNaN(d) ? 0 : d;
            c.i = isNaN(b) ? 0 : b;
            1 == a.jc.playerState ? wSa(a) : b9(a);
            a.Z("remotePlayerChange")
        },
        DSa = function(a, b) {
            if (-1E3 != a.jc.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.jc.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                K8(a.jc, isNaN(b) ? 0 : b);
                a.Z("remotePlayerChange")
            }
        },
        ESa = function(a, b) {
            var c = "true" == b.params.muted;
            a.jc.volume = parseInt(b.params.volume, 10);
            a.jc.muted = c;
            a.Z("remotePlayerChange")
        },
        FSa = function(a, b) {
            a.J = b.params.videoId;
            a.Z("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        GSa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.jc.Bk = "true" == b.params.hasPrevious;
            a.jc.hasNext = c;
            a.Z("previousNextChange")
        },
        xSa = function(a) {
            g.gt(a.N);
            a.N = g.et((0, g.D)(a.zr, a, 1), 864E5)
        },
        c9 = function(a, b, c) {
            c ? Y8("Sending: action=" + b + ", params=" + g.Jh(c)) : Y8("Sending: action=" + b);
            a.i.sendMessage(b, c)
        },
        d9 = function(a) {
            W7.call(this, "ScreenServiceProxy");
            this.Ne = a;
            this.i = [];
            this.i.push(this.Ne.$_s("screenChange", (0, g.D)(this.bP, this)));
            this.i.push(this.Ne.$_s("onlineScreenChange", (0, g.D)(this.JT, this)))
        },
        KSa = function(a, b) {
            GQa();
            if (!e7 || !e7.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.P("MDX_CONFIG") || b;
                yQa();
                c7();
                e9 || (e9 = new O7(b ? b.loungeApiHost : void 0), HQa() && (e9.i = "/api/loungedev"));
                f9 || (f9 = g.Ha("yt.mdx.remote.deferredProxies_") || [], g.Ga("yt.mdx.remote.deferredProxies_", f9, void 0));
                HSa();
                var c = g9();
                if (!c) {
                    var d = new f8(e9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ga("yt.mdx.remote.screenService_", d, void 0);
                    c = g9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ga("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1, void 0);
                    kSa(a, d, function(f) {
                        f ? h9() && G8(h9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            R6("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Ha("yt.mdx.remote.initialized_") && (g.Ga("yt.mdx.remote.initialized_", !0, void 0), i9("Initializing: " +
                        g.Jh(b)), j9.push(g.Tu("yt-remote-cast2-api-ready", function() {
                        R6("yt-remote-api-ready")
                    })), j9.push(g.Tu("yt-remote-cast2-availability-change", function() {
                        R6("yt-remote-receiver-availability-change")
                    })), j9.push(g.Tu("yt-remote-cast2-receiver-selected", function() {
                        k9(null);
                        R6("yt-remote-auto-connect", "cast-selector-receiver")
                    })), j9.push(g.Tu("yt-remote-cast2-receiver-resumed", function() {
                        R6("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), j9.push(g.Tu("yt-remote-cast2-session-change", ISa)), j9.push(g.Tu("yt-remote-connection-change", function(f) {
                        f ? G8(h9(), "YouTube TV") : l9() || (G8(null, null), nSa())
                    })), j9.push(g.Tu("yt-remote-cast2-session-failed", function() {
                        R6("yt-remote-connection-failed")
                    })), a = m9(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.hs("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), i9(" -- with channel params: " + g.Jh(a)), a ? (g.wz("yt-remote-session-app", a.app), g.wz("yt-remote-session-name", a.name)) : (g.zz("yt-remote-session-app"), g.zz("yt-remote-session-name")), g.Ga("yt.mdx.remote.channelParams_", a, void 0), c.start(), h9() || JSa())
            }
        },
        LSa = function() {
            var a = g9().Ne.$_gos();
            var b = n9();
            b && o9() && (Y6(a, b) || a.push(b));
            return xQa(a)
        },
        p9 = function() {
            var a = MSa();
            !a && D8() && mSa() && (a = {
                key: "cast-selector-receiver",
                name: mSa()
            });
            return a
        },
        MSa = function() {
            var a = LSa(),
                b = n9();
            b || (b = l9());
            return g.fb(a, function(c) {
                return b && U6(b, c.key) ? !0 : !1
            })
        },
        n9 = function() {
            var a = h9();
            if (!a) return null;
            var b = g9().Gh();
            return Z6(b, a)
        },
        ISa = function(a) {
            i9("remote.onCastSessionChange_: " + V6(a));
            if (a) {
                var b = n9();
                if (b && b.id == a.id) {
                    if (G8(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) q9 && (q9.token = a), (b = o9()) && b.Wz(a)
                } else b && r9(), s9(a, 1)
            } else o9() && r9()
        },
        r9 = function() {
            E8() ? B8().stopSession() : z8("stopSession called before API ready.");
            var a = o9();
            a && (a.disconnect(1), t9(null))
        },
        u9 = function() {
            var a = o9();
            return !!a && 3 != a.getProxyState()
        },
        i9 = function(a) {
            S7("remote", a)
        },
        g9 = function() {
            if (!v9) {
                var a = g.Ha("yt.mdx.remote.screenService_");
                v9 = a ? new d9(a) : null
            }
            return v9
        },
        h9 = function() {
            return g.Ha("yt.mdx.remote.currentScreenId_")
        },
        NSa = function(a) {
            g.Ga("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        OSa = function() {
            return g.Ha("yt.mdx.remote.connectData_")
        },
        k9 = function(a) {
            g.Ga("yt.mdx.remote.connectData_", a, void 0)
        },
        o9 = function() {
            return g.Ha("yt.mdx.remote.connection_")
        },
        t9 = function(a) {
            var b = o9();
            k9(null);
            a || NSa("");
            g.Ga("yt.mdx.remote.connection_", a, void 0);
            f9 && (g.Db(f9, function(c) {
                c(a)
            }), f9.length = 0);
            b && !a ? R6("yt-remote-connection-change", !1) : !b && a && R6("yt-remote-connection-change", !0)
        },
        l9 = function() {
            var a = g.Az();
            if (!a) return null;
            var b = g9();
            if (!b) return null;
            b = b.Gh();
            return Z6(b, a)
        },
        s9 = function(a, b) {
            h9();
            n9() && n9();
            if (w9) q9 = a;
            else {
                NSa(a.id);
                var c = g.Ha("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new X8(e9, a, m9(), c);
                a.connect(b, OSa());
                a.subscribe("beforeDisconnect", function(d) {
                    R6("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    o9() && (o9(), t9(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = n9();
                    d && "shortLived" == d.idType && (E8() ? B8().handleBrowserChannelAuthError() : z8("refreshLoungeToken called before API ready."))
                });
                t9(a)
            }
        },
        JSa = function() {
            var a = l9();
            a ? (i9("Resume connection to: " + V6(a)), s9(a, 0)) : (d7(), nSa(), i9("Skipping connecting because no session screen found."))
        },
        HSa = function() {
            var a = m9();
            if (g.Wb(a)) {
                a = b7();
                var b = g.xz("yt-remote-session-name") || "",
                    c = g.xz("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Ga("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        m9 = function() {
            return g.Ha("yt.mdx.remote.channelParams_") || {}
        },
        x9 = function(a, b, c) {
            g.H.call(this);
            var d = this;
            this.u = a;
            this.I = b;
            this.Rb = c;
            this.events = new g.aN(this);
            this.ea = this.events.S(this.I, "onVolumeChange", function(e) {
                PSa(d, e)
            });
            this.D = !1;
            this.suggestion = null;
            this.J = new g.fK(64);
            this.i = new g.K(this.iM, 500, this);
            this.B = new g.K(this.jM, 1E3, this);
            this.N = new j7(this.xW, 0, this);
            this.C = {};
            this.V = new g.K(this.SM, 1E3, this);
            this.K = new k7(this.seekTo, 1E3, this);
            this.ma = g.Ia;
            g.J(this, this.events);
            this.events.S(b, "onCaptionsTrackListChanged", this.tT);
            this.events.S(b, "captionschanged", this.CS);
            this.events.S(b, "captionssettingschanged", this.pM);
            this.events.S(b, "videoplayerreset", this.sz);
            this.events.S(b, "mdxautoplaycancel", function() {
                d.Rb.vI()
            });
            a = this.Rb;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.iL, this);
            a.subscribe("remotePlayerChange", this.Yv, this);
            a.subscribe("remoteQueueChange", this.sz, this);
            a.subscribe("previousNextChange", this.fL, this);
            a.subscribe("nowAutoplaying", this.ZK, this);
            a.subscribe("autoplayDismissed", this.CK, this);
            g.J(this, this.i);
            g.J(this, this.B);
            g.J(this, this.N);
            g.J(this, this.V);
            g.J(this, this.K);
            this.pM();
            this.sz();
            this.Yv()
        },
        PSa = function(a, b) {
            if (y9(a)) {
                a.Rb.unsubscribe("remotePlayerChange", a.Yv, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = Q8(a.Rb);
                if (c !== d.volume || b !== d.muted) a.Rb.setVolume(c, b), a.V.start();
                a.Rb.subscribe("remotePlayerChange", a.Yv, a)
            }
        },
        QSa = function(a) {
            a.Ob(0);
            a.i.stop();
            a.Sb(new g.fK(64))
        },
        z9 = function(a, b) {
            if (y9(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.I.getSubtitlesUserSettings()
                }, g.dc(c, b));
                a.Rb.KG(a.I.getVideoData(1).videoId, c);
                a.C = Q8(a.Rb).trackData
            }
        },
        A9 = function(a, b) {
            var c = a.I.getPlaylist();
            if (null === c || void 0 === c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.I.getVideoData(1);
            a.Rb.playVideo(c.videoId, b, d, e, c.playerParams, c.Ta, nQa(c));
            a.Sb(new g.fK(1))
        },
        RSa = function(a, b) {
            if (b) {
                var c = a.I.getOption("captions", "tracklist", {
                    wJ: 1
                });
                c && c.length ? (a.I.setOption("captions", "track", b), a.D = !1) : (a.I.loadModule("captions"), a.D = !0)
            } else a.I.setOption("captions", "track", {})
        },
        y9 = function(a) {
            return Q8(a.Rb).videoId === a.I.getVideoData(1).videoId
        },
        B9 = function() {
            g.W.call(this, {
                G: "div",
                L: "ytp-mdx-manual-pairing-popup-dialog",
                W: {
                    role: "dialog"
                },
                T: [{
                    G: "div",
                    L: "ytp-mdx-manual-pairing-popup-dialog-inner-content",
                    T: [{
                        G: "div",
                        L: "ytp-mdx-manual-pairing-popup-title",
                        va: "T\u00ednh n\u0103ng d\u00f9ng m\u00e3 \u0111\u1ec3 k\u1ebft n\u1ed1i m\u1ea1ng cho TV s\u1eafp ng\u1eebng ho\u1ea1t \u0111\u1ed9ng"
                    }, {
                        G: "div",
                        L: "ytp-mdx-manual-pairing-popup-buttons",
                        T: [{
                            G: "button",
                            Ga: ["ytp-button", "ytp-mdx-manual-pairing-popup-learn-more"],
                            va: "T\u00ecm hi\u1ec3u th\u00eam"
                        }, {
                            G: "button",
                            Ga: ["ytp-button",
                                "ytp-mdx-manual-pairing-popup-ok"
                            ],
                            va: "OK"
                        }]
                    }]
                }]
            });
            this.i = new g.LL(this, 250);
            this.learnMoreButton = this.Fa("ytp-mdx-manual-pairing-popup-learn-more");
            this.okButton = this.Fa("ytp-mdx-manual-pairing-popup-ok");
            g.J(this, this.i);
            this.S(this.learnMoreButton, "click", this.u);
            this.S(this.okButton, "click", this.B)
        },
        C9 = function() {
            g.W.call(this, {
                G: "div",
                L: "ytp-mdx-popup-dialog",
                W: {
                    role: "dialog"
                },
                T: [{
                    G: "div",
                    L: "ytp-mdx-popup-dialog-inner-content",
                    T: [{
                            G: "div",
                            L: "ytp-mdx-popup-title",
                            va: "B\u1ea1n \u0111\u00e3 \u0111\u0103ng xu\u1ea5t"
                        }, {
                            G: "div",
                            L: "ytp-mdx-popup-description",
                            va: "C\u00e1c video m\u00e0 b\u1ea1n xem c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c th\u00eam v\u00e0o l\u1ecbch s\u1eed xem v\u00e0 g\u00e2y \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn ph\u1ea7n \u0111\u1ec1 xu\u1ea5t tr\u00ean TV. \u0110\u1ec3 tr\u00e1nh \u0111i\u1ec1u n\u00e0y, h\u00e3y h\u1ee7y r\u1ed3i \u0111\u0103ng nh\u1eadp v\u00e0o YouTube tr\u00ean m\u00e1y t\u00ednh."
                        },
                        {
                            G: "div",
                            L: "ytp-mdx-privacy-popup-buttons",
                            T: [{
                                G: "button",
                                Ga: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                                va: "H\u1ee7y"
                            }, {
                                G: "button",
                                Ga: ["ytp-button", "ytp-mdx-privacy-popup-confirm"],
                                va: "X\u00e1c nh\u1eadn"
                            }]
                        }
                    ]
                }]
            });
            this.i = new g.LL(this, 250);
            this.cancelButton = this.Fa("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Fa("ytp-mdx-privacy-popup-confirm");
            g.J(this, this.i);
            this.S(this.cancelButton, "click", this.u);
            this.S(this.confirmButton, "click", this.B)
        },
        D9 = function(a) {
            g.W.call(this, {
                G: "div",
                L: "ytp-remote",
                T: [{
                    G: "div",
                    L: "ytp-remote-display-status",
                    T: [{
                        G: "div",
                        L: "ytp-remote-display-status-icon",
                        T: [g.Lra()]
                    }, {
                        G: "div",
                        L: "ytp-remote-display-status-text",
                        va: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.i = new g.LL(this, 250);
            g.J(this, this.i);
            this.S(a, "presentingplayerstatechange", this.u);
            SSa(this, a.vb())
        },
        SSa = function(a, b) {
            if (3 === a.api.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.api.getOption("remote", "currentReceiver").name
                };
                b = g.V(b, 128) ? g.EI("L\u1ed7i tr\u00ean $RECEIVER_NAME", c) : b.yc() || g.V(b, 4) ? g.EI("\u0110ang ph\u00e1t tr\u00ean $RECEIVER_NAME", c) : g.EI("\u0110\u00e3 k\u1ebft n\u1ed1i v\u1edbi $RECEIVER_NAME", c);
                a.Ua("statustext", b);
                a.i.show()
            } else a.i.hide()
        },
        E9 = function(a, b) {
            g.bQ.call(this, "Ph\u00e1t tr\u00ean", 0, a, b);
            this.I = a;
            this.Tn = {};
            this.S(a, "onMdxReceiversChange", this.D);
            this.S(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        F9 = function(a) {
            g.kN.call(this, a);
            this.nj = {
                key: X6(),
                name: "M\u00e1y t\u00ednh n\u00e0y"
            };
            this.wh = null;
            this.subscriptions = [];
            this.uE = this.Rb = null;
            this.Tn = [this.nj];
            this.Pm = this.nj;
            this.pd = new g.fK(64);
            this.VJ = 0;
            this.lf = -1;
            this.ls = null;
            this.ew = this.Ry = !1;
            this.fm = this.Ds = null;
            if (!g.tF(this.player.U()) && !g.uF(this.player.U())) {
                a = this.player;
                var b = g.OM(a);
                b && (b = b.qn()) && (b = new E9(a, b), g.J(this, b));
                b = new D9(a);
                g.J(this, b);
                g.YM(a, b.element, 4);
                this.Ds = new C9;
                g.J(this, this.Ds);
                g.YM(a, this.Ds.element, 4);
                g.T(this.player.U().experiments, "pair_servlet_deprecation_warning_enabled") &&
                    !g.T(this.player.U().experiments, "deprecate_pair_servlet_enabled") && (this.ls = new B9, g.J(this, this.ls), g.YM(a, this.ls.element, 4));
                this.ew = !!l9();
                this.Ry = !!g.xz("yt-remote-manual-pairing-warning-shown")
            }
        },
        G9 = function(a) {
            a.fm && (a.player.removeEventListener("presentingplayerstatechange", a.fm), a.fm = null)
        },
        TSa = function(a, b, c) {
            a.pd = c;
            a.player.Z("presentingplayerstatechange", new g.qI(c, b))
        },
        USa = function(a, b, c) {
            var d = !1;
            1 === b ? d = !a.ew : 2 === b && (d = !a.Ry);
            d && g.sI(c, 8) && (a.player.pauseVideo(), G9(a))
        },
        H9 = function(a, b) {
            if (b.key !== a.Pm.key)
                if (b.key === a.nj.key) r9();
                else {
                    if (a.ls && !a.Ry && b !== a.nj && "cast-selector-receiver" !== b.key && g.LF(a.player.U())) VSa(a);
                    else {
                        var c;
                        (c = !g.T(a.player.U().experiments, "mdx_enable_privacy_disclosure_ui")) || (c = ((c = g.P("PLAYER_CONFIG")) && c.args && void 0 !== c.args.authuser ? !0 : !(!g.P("SESSION_INDEX") && !g.P("LOGGED_IN"))) || a.ew || !a.Ds);
                        (c ? 0 : g.LF(a.player.U()) || g.OF(a.player.U())) && WSa(a)
                    }
                    a.Pm = b;
                    if (!a.player.U().Y("disable_mdx_connection_in_mdx_module_for_music_web") || !g.uF(a.player.U())) {
                        var d = a.player.getPlaylistId();
                        c = a.player.getVideoData(1);
                        var e = c.videoId;
                        if (!d && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && g.T(a.player.U().experiments, "should_clear_video_data_on_player_cued_unstarted")) a = null;
                        else {
                            var f = a.player.getPlaylist();
                            if (f) {
                                var h = [];
                                for (var l = 0; l < f.length; l++) h[l] = g.gN(f, l).videoId
                            } else h = [e];
                            f = a.player.getCurrentTime(1);
                            a = {
                                videoIds: h,
                                listId: d,
                                videoId: e,
                                playerParams: c.playerParams,
                                clickTrackingParams: c.Ta,
                                index: Math.max(a.player.getPlaylistIndex(), 0),
                                currentTime: 0 === f ? void 0 : f
                            };
                            (c = nQa(c)) && (a.locationInfo = c)
                        }
                        i9("Connecting to: " +
                            g.Jh(b));
                        "cast-selector-receiver" == b.key ? (k9(a || null), b = a || null, E8() ? B8().setLaunchParams(b) : z8("setLaunchParams called before ready.")) : !a && u9() && h9() == b.key ? R6("yt-remote-connection-change", !0) : (r9(), k9(a || null), a = g9().Gh(), (b = Z6(a, b.key)) && s9(b, 1))
                    }
                }
        },
        WSa = function(a) {
            a.player.vb().yc() ? a.player.pauseVideo() : (a.fm = function(b) {
                USa(a, 1, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.fm));
            a.Ds && a.Ds.bd();
            o9() || (w9 = !0)
        },
        VSa = function(a) {
            a.player.vb().yc() ? a.player.pauseVideo() : (a.fm = function(b) {
                USa(a, 2, b)
            }, a.player.addEventListener("presentingplayerstatechange", a.fm));
            a.ls && a.ls.bd();
            o9() || (w9 = !0)
        },
        WQa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        w7 = {
            "'": "\\'"
        },
        tQa = {
            yX: "atp",
            N7: "ska",
            B6: "que",
            K4: "mus",
            M7: "sus",
            T0: "dsp",
            W6: "seq",
            n4: "mic",
            Q_: "dpa",
            MX: "cds",
            I4: "mlm"
        },
        e7, a7 = "",
        NQa = IQa("loadCastFramework") || IQa("loadCastApplicationFramework"),
        PQa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    g.Ra(j7, g.H);
    g.k = j7.prototype;
    g.k.PO = function(a) {
        this.C = arguments;
        this.i = !1;
        this.Kb ? this.B = g.Qa() + this.Mf : this.Kb = g.lh(this.D, this.Mf)
    };
    g.k.stop = function() {
        this.Kb && (g.C.clearTimeout(this.Kb), this.Kb = null);
        this.B = null;
        this.i = !1;
        this.C = []
    };
    g.k.pause = function() {
        ++this.u
    };
    g.k.resume = function() {
        this.u && (--this.u, !this.u && this.i && (this.i = !1, this.J.apply(null, this.C)))
    };
    g.k.xa = function() {
        this.stop();
        j7.Xd.xa.call(this)
    };
    g.k.QO = function() {
        this.Kb && (g.C.clearTimeout(this.Kb), this.Kb = null);
        this.B ? (this.Kb = g.lh(this.D, this.B - g.Qa()), this.B = null) : this.u ? this.i = !0 : (this.i = !1, this.J.apply(null, this.C))
    };
    g.w(k7, g.H);
    g.k = k7.prototype;
    g.k.FG = function(a) {
        this.B = arguments;
        this.Kb || this.u ? this.i = !0 : l7(this)
    };
    g.k.stop = function() {
        this.Kb && (g.C.clearTimeout(this.Kb), this.Kb = null, this.i = !1, this.B = null)
    };
    g.k.pause = function() {
        this.u++
    };
    g.k.resume = function() {
        this.u--;
        this.u || !this.i || this.Kb || (this.i = !1, l7(this))
    };
    g.k.xa = function() {
        g.H.prototype.xa.call(this);
        this.stop()
    };
    m7.prototype.stringify = function(a) {
        return g.C.JSON.stringify(a, void 0)
    };
    m7.prototype.parse = function(a) {
        return g.C.JSON.parse(a, void 0)
    };
    var o7 = new g.Mf;
    g.w(RQa, g.nf);
    g.k = q7.prototype;
    g.k.Go = null;
    g.k.tm = !1;
    g.k.gt = null;
    g.k.IF = null;
    g.k.Is = null;
    g.k.Ts = null;
    g.k.Im = null;
    g.k.Wn = null;
    g.k.eq = null;
    g.k.Hf = null;
    g.k.yA = 0;
    g.k.Ij = null;
    g.k.vA = null;
    g.k.Em = null;
    g.k.Lt = -1;
    g.k.YL = !0;
    g.k.Yo = !1;
    g.k.lB = 0;
    g.k.Kz = null;
    var UQa = {},
        t7 = {};
    g.k = q7.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.RO = function(a) {
        a = a.target;
        var b = this.Kz;
        b && 3 == g.Fi(a) ? b.FG() : this.ZM(a)
    };
    g.k.ZM = function(a) {
        try {
            if (a == this.Hf) a: {
                var b = g.Fi(this.Hf),
                    c = this.Hf.u,
                    d = this.Hf.getStatus();
                if (g.ke && !g.ce(10) || g.ng && !g.be("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Ki(this.Hf)) break a;this.Yo || 4 != b || 7 == c || (8 == c || 0 >= d ? this.i.rj(3) : this.i.rj(2));x7(this);
                var e = this.Hf.getStatus();this.Lt = e;
                var f = g.Ki(this.Hf);
                if (this.tm = 200 == e) {
                    4 == b && u7(this);
                    if (this.D) {
                        for (a = !0; !this.Yo && this.yA < f.length;) {
                            var h = VQa(this, f);
                            if (h == t7) {
                                4 == b && (this.Em = 4, p7(15), a = !1);
                                break
                            } else if (h == UQa) {
                                this.Em = 4;
                                p7(16);
                                a = !1;
                                break
                            } else y7(this, h)
                        }
                        4 == b && 0 == f.length && (this.Em = 1, p7(17), a = !1);
                        this.tm = this.tm && a;
                        a || (u7(this), v7(this))
                    } else y7(this, f);
                    this.tm && !this.Yo && (4 == b ? this.i.fx(this) : (this.tm = !1, s7(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Em = 3, p7(13)) : (this.Em = 0, p7(14)),
                u7(this),
                v7(this)
            }
        } catch (l) {
            this.Hf && g.Ki(this.Hf)
        } finally {}
    };
    g.k.cV = function(a) {
        n7((0, g.D)(this.bV, this, a), 0)
    };
    g.k.bV = function(a) {
        this.Yo || (x7(this), y7(this, a), s7(this))
    };
    g.k.qL = function(a) {
        n7((0, g.D)(this.aV, this, a), 0)
    };
    g.k.aV = function(a) {
        this.Yo || (u7(this), this.tm = a, this.i.fx(this), this.i.rj(4))
    };
    g.k.cancel = function() {
        this.Yo = !0;
        u7(this)
    };
    g.k.jV = function() {
        this.gt = null;
        var a = Date.now();
        0 <= a - this.IF ? (2 != this.Ts && this.i.rj(3), u7(this), this.Em = 2, p7(18), v7(this)) : YQa(this, this.IF - a)
    };
    g.k.getLastError = function() {
        return this.Em
    };
    g.k = aRa.prototype;
    g.k.mB = null;
    g.k.lh = null;
    g.k.Lz = !1;
    g.k.kM = null;
    g.k.Mx = null;
    g.k.yD = null;
    g.k.nB = null;
    g.k.Ra = null;
    g.k.Zk = -1;
    g.k.Mt = null;
    g.k.mu = null;
    g.k.connect = function(a) {
        this.nB = a;
        a = A7(this.i, null, this.nB);
        p7(3);
        this.kM = Date.now();
        var b = this.i.K;
        null != b ? (this.Mt = b[0], (this.mu = b[1]) ? (this.Ra = 1, bRa(this)) : (this.Ra = 2, C7(this))) : (O6(a, "MODE", "init"), this.lh = new q7(this, void 0, void 0, void 0), this.lh.Go = this.mB, r7(this.lh, a, !1, null, !0), this.Ra = 0)
    };
    g.k.LP = function(a) {
        if (a) this.Ra = 2, C7(this);
        else {
            p7(4);
            var b = this.i;
            b.Xj = b.Nm.Zk;
            J7(b, 9)
        }
        a && this.rj(2)
    };
    g.k.nC = function(a) {
        return this.i.nC(a)
    };
    g.k.abort = function() {
        this.lh && (this.lh.cancel(), this.lh = null);
        this.Zk = -1
    };
    g.k.hf = function() {
        return !1
    };
    g.k.jL = function(a, b) {
        this.Zk = a.Lt;
        if (0 == this.Ra)
            if (b) {
                try {
                    var c = this.u.parse(b)
                } catch (d) {
                    a = this.i;
                    a.Xj = this.Zk;
                    J7(a, 2);
                    return
                }
                this.Mt = c[0];
                this.mu = c[1]
            } else a = this.i, a.Xj = this.Zk, J7(a, 2);
        else if (2 == this.Ra)
            if (this.Lz) p7(7), this.yD = Date.now();
            else if ("11111" == b) {
            if (p7(6), this.Lz = !0, this.Mx = Date.now(), a = this.Mx - this.kM, !g.ke || g.ce(10) || 500 > a) this.Zk = 200, this.lh.cancel(), p7(12), B7(this.i, this, !0)
        } else p7(8), this.Mx = this.yD = Date.now(), this.Lz = !1
    };
    g.k.fx = function() {
        this.Zk = this.lh.Lt;
        if (this.lh.tm) 0 == this.Ra ? this.mu ? (this.Ra = 1, bRa(this)) : (this.Ra = 2, C7(this)) : 2 == this.Ra && ((!g.ke || g.ce(10) ? !this.Lz : 200 > this.yD - this.Mx) ? (p7(11), B7(this.i, this, !1)) : (p7(12), B7(this.i, this, !0)));
        else {
            0 == this.Ra ? p7(9) : 2 == this.Ra && p7(10);
            var a = this.i;
            this.lh.getLastError();
            a.Xj = this.Zk;
            J7(a, 2)
        }
    };
    g.k.Dw = function() {
        return this.i.Dw()
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.rj = function(a) {
        this.i.rj(a)
    };
    g.k = D7.prototype;
    g.k.Wj = null;
    g.k.Ku = null;
    g.k.Tg = null;
    g.k.De = null;
    g.k.oB = null;
    g.k.Nx = null;
    g.k.LH = null;
    g.k.gx = null;
    g.k.Mv = 0;
    g.k.UR = 0;
    g.k.If = null;
    g.k.Wm = null;
    g.k.wl = null;
    g.k.kp = null;
    g.k.Nm = null;
    g.k.tA = null;
    g.k.Xr = -1;
    g.k.UJ = -1;
    g.k.Xj = -1;
    g.k.Er = 0;
    g.k.er = 0;
    g.k.Zo = 8;
    g.Ra(dRa, g.nf);
    g.Ra(eRa, g.nf);
    g.k = D7.prototype;
    g.k.connect = function(a, b, c, d, e) {
        p7(0);
        this.oB = b;
        this.Ku = c || {};
        d && void 0 !== e && (this.Ku.OSID = d, this.Ku.OAID = e);
        this.D ? (n7((0, g.D)(this.gI, this, a), 100), iRa(this)) : this.gI(a)
    };
    g.k.gI = function(a) {
        this.Nm = new aRa(this);
        this.Nm.mB = this.Wj;
        this.Nm.u = this.C;
        this.Nm.connect(a)
    };
    g.k.hf = function() {
        return 0 == this.Ra
    };
    g.k.getState = function() {
        return this.Ra
    };
    g.k.oL = function(a) {
        this.Wm = null;
        mRa(this, a)
    };
    g.k.nL = function() {
        this.wl = null;
        this.De = new q7(this, this.u, "rpc", this.J);
        this.De.Go = this.Wj;
        this.De.lB = 0;
        var a = this.LH.clone();
        g.Yj(a, "RID", "rpc");
        g.Yj(a, "SID", this.u);
        g.Yj(a, "CI", this.tA ? "0" : "1");
        g.Yj(a, "AID", this.Xr);
        E7(this, a);
        if (!g.ke || g.ce(10)) g.Yj(a, "TYPE", "xmlhttp"), r7(this.De, a, !0, this.gx, !1);
        else {
            g.Yj(a, "TYPE", "html");
            var b = this.De,
                c = !!this.gx;
            b.Ts = 3;
            b.Im = N6(a.clone());
            XQa(b, c)
        }
    };
    g.k.jL = function(a, b) {
        if (0 != this.Ra && (this.De == a || this.Tg == a))
            if (this.Xj = a.Lt, this.Tg == a && 3 == this.Ra)
                if (7 < this.Zo) {
                    try {
                        var c = this.C.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.wl) {
                                if (this.De)
                                    if (this.De.Is + 3E3 < this.Tg.Is) G7(this), this.De.cancel(), this.De = null;
                                    else break a;
                                I7(this);
                                p7(19)
                            }
                        }
                    else this.UJ = a[1], 0 < this.UJ - this.Xr && 37500 > a[2] && this.tA && 0 == this.er && !this.kp && (this.kp = n7((0, g.D)(this.zS, this), 6E3));
                    else J7(this, 11)
                } else null != b && J7(this, 11);
        else if (this.De ==
            a && G7(this), !g.vc(b))
            for (a = this.C.parse(b), b = 0; b < a.length; b++) c = a[b], this.Xr = c[0], c = c[1], 2 == this.Ra ? "c" == c[0] ? (this.u = c[1], this.gx = c[2], c = c[3], null != c ? this.Zo = c : this.Zo = 6, this.Ra = 3, this.If && this.If.cI(), this.LH = A7(this, this.Dw() ? this.gx : null, this.oB), nRa(this)) : "stop" == c[0] && J7(this, 7) : 3 == this.Ra && ("stop" == c[0] ? J7(this, 7) : "noop" != c[0] && this.If && this.If.bI(c), this.er = 0)
    };
    g.k.zS = function() {
        null != this.kp && (this.kp = null, this.De.cancel(), this.De = null, I7(this), p7(20))
    };
    g.k.fx = function(a) {
        if (this.De == a) {
            G7(this);
            this.De = null;
            var b = 2
        } else if (this.Tg == a) this.Tg = null, b = 1;
        else return;
        this.Xj = a.Lt;
        if (0 != this.Ra)
            if (a.tm)
                if (1 == b) {
                    b = Date.now() - a.Is;
                    var c = o7;
                    c.dispatchEvent(new dRa(c, a.eq ? a.eq.length : 0, b, this.Er));
                    F7(this);
                    this.B.length = 0
                } else nRa(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Xj)) {
                if (d = 1 == b) this.Tg || this.Wm || 1 == this.Ra || 2 <= this.Er ? d = !1 : (this.Wm = n7((0, g.D)(this.oL, this, a), oRa(this, this.Er)), this.Er++, d = !0);
                d = !(d || 2 == b && I7(this))
            }
            if (d) switch (c) {
                case 1:
                    J7(this,
                        5);
                    break;
                case 4:
                    J7(this, 10);
                    break;
                case 3:
                    J7(this, 6);
                    break;
                case 7:
                    J7(this, 12);
                    break;
                default:
                    J7(this, 2)
            }
        }
    };
    g.k.lQ = function(a) {
        if (!g.jb(arguments, this.Ra)) throw Error("Unexpected channel state: " + this.Ra);
    };
    g.k.fW = function(a) {
        a ? p7(2) : (p7(1), pRa(this, 8))
    };
    g.k.nC = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.zi;
        a.N = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.If && this.If.isActive(this)
    };
    g.k.rj = function(a) {
        var b = o7;
        b.dispatchEvent(new eRa(b, a))
    };
    g.k.Dw = function() {
        return !(!g.ke || g.ce(10))
    };
    g.k = qRa.prototype;
    g.k.cI = function() {};
    g.k.bI = function() {};
    g.k.aI = function() {};
    g.k.aC = function() {};
    g.k.MI = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = rRa.prototype;
    g.k.isEmpty = function() {
        return 0 === this.i.length && 0 === this.u.length
    };
    g.k.clear = function() {
        this.i = [];
        this.u = []
    };
    g.k.contains = function(a) {
        return g.jb(this.i, a) || g.jb(this.u, a)
    };
    g.k.remove = function(a) {
        var b = this.i;
        var c = (0, g.xKa)(b, a);
        0 <= c ? (g.nb(b, c), b = !0) : b = !1;
        return b || g.ob(this.u, a)
    };
    g.k.Wg = function() {
        for (var a = [], b = this.i.length - 1; 0 <= b; --b) a.push(this.i[b]);
        var c = this.u.length;
        for (b = 0; b < c; ++b) a.push(this.u[b]);
        return a
    };
    g.Ra(K7, g.H);
    g.k = K7.prototype;
    g.k.UU = function() {
        this.Mf = Math.min(3E5, 2 * this.Mf);
        this.B();
        this.u && this.start()
    };
    g.k.start = function() {
        var a = this.Mf + 15E3 * Math.random();
        g.Dq(this.i, a);
        this.u = Date.now() + a
    };
    g.k.stop = function() {
        this.i.stop();
        this.u = 0
    };
    g.k.isActive = function() {
        return this.i.isActive()
    };
    g.k.reset = function() {
        this.i.stop();
        this.Mf = 5E3
    };
    g.Ra(L7, qRa);
    g.k = L7.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.B.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.B.unsubscribe(a, b, c)
    };
    g.k.Tf = function(a) {
        return this.B.Tf(a)
    };
    g.k.Z = function(a, b) {
        return this.B.Z.apply(this.B, arguments)
    };
    g.k.dispose = function() {
        this.ea || (this.ea = !0, g.hf(this.B), uRa(this), g.hf(this.u), this.u = null, this.ma = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ea
    };
    g.k.connect = function(a, b, c) {
        if (!this.i || 2 != this.i.getState()) {
            this.V = "";
            this.u.stop();
            this.D = a || null;
            this.C = b || 0;
            a = this.ya + "/test";
            b = this.ya + "/bind";
            var d = new D7(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Aa),
                e = this.i;
            e && (e.If = null);
            d.If = this;
            this.i = d;
            M7(this);
            if (this.i) {
                d = g.P("ID_TOKEN");
                var f = this.i.Wj || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.i.Wj = f
            }
            e ? (3 != e.getState() && 0 == kRa(e) || e.getState(), this.i.connect(a, b, this.J, e.u, e.Xr)) : c ? this.i.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.i.connect(a, b, this.J)
        }
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.dc(a, b);
        this.u.isActive() || 2 == (this.i ? this.i.getState() : 0) ? this.K.push(a) : N7(this) && (M7(this), jRa(this.i, a))
    };
    g.k.cI = function() {
        this.u.reset();
        this.D = null;
        this.C = 0;
        if (this.K.length) {
            var a = this.K;
            this.K = [];
            for (var b = 0, c = a.length; b < c; ++b) jRa(this.i, a[b])
        }
        this.Z("handlerOpened")
    };
    g.k.aI = function(a) {
        var b = 2 == a && 401 == this.i.Xj;
        4 == a || b || this.u.start();
        this.Z("handlerError", a, b)
    };
    g.k.aC = function(a) {
        if (!this.u.isActive()) this.Z("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.K.push(d)
            }
    };
    g.k.MI = function() {
        var a = {
            v: 2
        };
        this.V && (a.gsessionid = this.V);
        0 != this.C && (a.ui = "" + this.C);
        0 != this.N && (a.ui = "" + this.N);
        this.D && g.dc(a, this.D);
        return a
    };
    g.k.bI = function(a) {
        "S" == a[0] ? this.V = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), hRa(this.i)) : this.Z("handlerMessage", new sRa(a[0], a[1]))
    };
    g.k.Wz = function(a) {
        (this.J.loungeIdToken = a) || this.u.stop();
        if (this.Ca && this.i) {
            var b = this.i.Wj || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.i.Wj = b
        }
    };
    g.k.KV = function() {
        this.u.isActive();
        0 == kRa(this.i) && this.connect(this.D, this.C)
    };
    O7.prototype.C = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    O7.prototype.B = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    O7.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    var BRa = Date.now(),
        R7 = null,
        U7 = Array(50),
        T7 = -1,
        V7 = !1;
    g.Ra(W7, g.R);
    W7.prototype.Gh = function() {
        return this.screens
    };
    W7.prototype.contains = function(a) {
        return !!Y6(this.screens, a)
    };
    W7.prototype.get = function(a) {
        return a ? Z6(this.screens, a) : null
    };
    W7.prototype.info = function(a) {
        S7(this.J, a)
    };
    g.w(X7, g.R);
    g.k = X7.prototype;
    g.k.start = function() {
        !this.i && isNaN(this.Kb) && this.xL()
    };
    g.k.stop = function() {
        this.i && (this.i.abort(), this.i = null);
        isNaN(this.Kb) || (g.gt(this.Kb), this.Kb = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.R.prototype.xa.call(this)
    };
    g.k.xL = function() {
        this.Kb = NaN;
        this.i = g.lt(P7(this.B, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.K
            },
            timeout: 5E3,
            onSuccess: (0, g.D)(this.TO, this),
            onError: (0, g.D)(this.SO, this),
            onTimeout: (0, g.D)(this.UO, this)
        })
    };
    g.k.TO = function(a, b) {
        this.i = null;
        a = b.screen || {};
        a.dialId = this.C;
        a.name = this.J;
        b = -1;
        this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.Z("pairingComplete", new T6(a), b)
    };
    g.k.SO = function(a) {
        this.i = null;
        a.status && 404 == a.status ? this.u >= XSa.length ? this.Z("pairingFailed", Error("DIAL polling timed out")) : (a = XSa[this.u], this.Kb = g.et((0, g.D)(this.xL, this), a), this.u++) : this.Z("pairingFailed", Error("Server error " + a.status))
    };
    g.k.UO = function() {
        this.i = null;
        this.Z("pairingFailed", Error("Server not responding"))
    };
    var XSa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.Ra(Z7, W7);
    g.k = Z7.prototype;
    g.k.start = function() {
        Y7(this) && this.Z("screenChange");
        !g.xz("yt-remote-lounge-token-expiration") && FRa(this);
        g.gt(this.i);
        this.i = g.et((0, g.D)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        Y7(this);
        CRa(this, a);
        $7(this, !1);
        this.Z("screenChange");
        b(a);
        a.token || FRa(this)
    };
    g.k.remove = function(a, b) {
        var c = Y7(this);
        ERa(this, a) && ($7(this, !1), c = !0);
        b(a);
        c && this.Z("screenChange")
    };
    g.k.rA = function(a, b, c, d) {
        var e = Y7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, $7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.Z("screenChange")
    };
    g.k.xa = function() {
        g.gt(this.i);
        Z7.Xd.xa.call(this)
    };
    g.k.JQ = function(a) {
        Y7(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        $7(this, !b);
        b && S7(this.J, "Missed " + b + " lounge tokens.")
    };
    g.k.IQ = function(a) {
        S7(this.J, "Requesting lounge tokens failed: " + a)
    };
    g.w(b8, g.R);
    g.k = b8.prototype;
    g.k.start = function() {
        var a = parseInt(g.xz("yt-remote-fast-check-period") || "0", 10);
        (this.C = g.Qa() - 144E5 < a ? 0 : a) ? e8(this): (this.C = g.Qa() + 3E5, g.wz("yt-remote-fast-check-period", this.C), this.EE())
    };
    g.k.isEmpty = function() {
        return g.Wb(this.i)
    };
    g.k.update = function() {
        a8("Updating availability on schedule.");
        var a = this.J(),
            b = g.Hb(this.i, function(c, d) {
                return c && !!Z6(a, d)
            }, this);
        d8(this, b)
    };
    g.k.xa = function() {
        g.gt(this.B);
        this.B = NaN;
        this.u && (this.u.abort(), this.u = null);
        g.R.prototype.xa.call(this)
    };
    g.k.EE = function() {
        g.gt(this.B);
        this.B = NaN;
        this.u && this.u.abort();
        var a = HRa(this);
        if (P6(a)) {
            var b = P7(this.D, "/pairing/get_screen_availability");
            this.u = Q7(this.D, b, {
                lounge_token: g.Ob(a).join(",")
            }, (0, g.D)(this.BU, this, a), (0, g.D)(this.AU, this))
        } else d8(this, {}), e8(this)
    };
    g.k.BU = function(a, b) {
        this.u = null;
        var c = g.Ob(HRa(this));
        if (g.Bb(c, g.Ob(a))) {
            b = b.screens || [];
            c = {};
            for (var d = 0, e = b.length; d < e; ++d) c[a[b[d].loungeToken]] = "online" == b[d].status;
            d8(this, c);
            e8(this)
        } else this.Yd("Changing Screen set during request."), this.EE()
    };
    g.k.AU = function(a) {
        this.Yd("Screen availability failed: " + a);
        this.u = null;
        e8(this)
    };
    g.k.Yd = function(a) {
        S7("OnlineScreenService", a)
    };
    g.Ra(f8, W7);
    g.k = f8.prototype;
    g.k.start = function() {
        this.u.start();
        this.i.start();
        this.screens.length && (this.Z("screenChange"), this.i.isEmpty() || this.Z("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.u.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.u.remove(a, b, c);
        this.i.update()
    };
    g.k.rA = function(a, b, c, d) {
        this.u.contains(a) ? this.u.rA(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, S7(this.J, a), d(Error(a)))
    };
    g.k.Gh = function(a) {
        return a ? this.screens : g.qb(this.screens, g.Go(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.GG = function() {
        return g.Go(this.Gh(!0), function(a) {
            return !!this.i.i[a.id]
        }, this)
    };
    g.k.HG = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new X7(this.C, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.hf(l);
            e(g8(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.hf(l);
            f(m)
        });
        l.start();
        return (0, g.D)(l.stop, l)
    };
    g.k.VO = function(a, b, c, d) {
        g.lt(P7(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.D)(function(e, f) {
                e = new T6(f.screen || {});
                if (!e.name || LRa(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); LRa(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(g8(this, e))
            }, this),
            onError: (0, g.D)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.D)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.hf(this.u);
        g.hf(this.i);
        f8.Xd.xa.call(this)
    };
    g.k.SQ = function() {
        NRa(this);
        this.Z("screenChange");
        this.i.update()
    };
    f8.prototype.dispose = f8.prototype.dispose;
    g.Ra(i8, g.R);
    g.k = i8.prototype;
    g.k.getScreen = function() {
        return this.C
    };
    g.k.qg = function(a) {
        this.isDisposed() || (a && (k8(this, "" + a), this.Z("sessionFailed")), this.C = null, this.Z("sessionScreen", null))
    };
    g.k.info = function(a) {
        S7(this.Ca, a)
    };
    g.k.IG = function() {
        return null
    };
    g.k.RE = function(a) {
        var b = this.i;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.D)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.D)(function() {
            k8(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.RE("");
        i8.Xd.xa.call(this)
    };
    g.w(l8, i8);
    g.k = l8.prototype;
    g.k.QE = function(a) {
        if (this.u) {
            if (this.u == a) return;
            k8(this, "Overriding cast session with new session object");
            WRa(this);
            this.ya = !1;
            this.V = "unknown";
            this.u.removeUpdateListener(this.ma);
            this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa)
        }
        this.u = a;
        this.u.addUpdateListener(this.ma);
        this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa);
        SRa(this, "getMdxSessionStatus")
    };
    g.k.Yr = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Jh(a))
    };
    g.k.stop = function() {
        this.u ? this.u.stop((0, g.D)(function() {
            this.qg()
        }, this), (0, g.D)(function() {
            this.qg(Error("Failed to stop receiver app."))
        }, this)) : this.qg(Error("Stopping cast device without session."))
    };
    g.k.RE = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        WRa(this);
        this.u && (this.u.removeUpdateListener(this.ma), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa));
        this.u = null;
        i8.prototype.xa.call(this)
    };
    g.k.mV = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = Q6(b), g.Ma(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Jh(b)), a) {
                    case "mdxSessionStatus":
                        QRa(this, b);
                        break;
                    case "loungeToken":
                        TRa(this, b);
                        break;
                    default:
                        k8(this, "Unknown youtube message: " + a)
                } else k8(this, "Unable to parse message.");
                else k8(this, "No data in message.")
    };
    g.k.aJ = function(a, b, c, d) {
        g.gt(this.N);
        this.N = 0;
        KRa(this.B, this.i.label, a, this.i.friendlyName, (0, g.D)(function(e) {
            e ? b(e) : 0 <= d ? (k8(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.N = g.et((0, g.D)(this.aJ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.IG = function() {
        return this.u
    };
    g.k.WO = function(a) {
        this.isDisposed() || a || (k8(this, "Cast session died."), this.qg())
    };
    g.w(o8, i8);
    g.k = o8.prototype;
    g.k.QE = function(a) {
        this.u = a;
        this.u.addUpdateListener(this.Ha)
    };
    g.k.Yr = function(a) {
        this.La = a;
        this.ea()
    };
    g.k.stop = function() {
        cSa(this);
        this.u ? this.u.stop((0, g.D)(this.qg, this, null), (0, g.D)(this.qg, this, "Failed to stop DIAL device.")) : this.qg()
    };
    g.k.xa = function() {
        cSa(this);
        this.u && this.u.removeUpdateListener(this.Ha);
        this.u = null;
        i8.prototype.xa.call(this)
    };
    g.k.XO = function(a) {
        this.isDisposed() || a || (k8(this, "DIAL session died."), this.D(), this.D = g.Ia, this.qg())
    };
    g.w(s8, i8);
    s8.prototype.stop = function() {
        this.qg()
    };
    s8.prototype.QE = function() {};
    s8.prototype.Yr = function() {
        g.gt(this.u);
        this.u = NaN;
        var a = Z6(this.B.Gh(), this.i.label);
        a ? j8(this, a) : this.qg(Error("No such screen"))
    };
    s8.prototype.xa = function() {
        g.gt(this.u);
        this.u = NaN;
        i8.prototype.xa.call(this)
    };
    g.w(t8, g.R);
    g.k = t8.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.N);
        this.V || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.J ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.D)(this.lU, this);
        c = new chrome.cast.ApiConfig(c, (0, g.D)(this.kL, this), e, d, a);
        c.customDialLaunchCallback = (0, g.D)(this.WS, this);
        chrome.cast.initialize(c, (0, g.D)(function() {
            this.isDisposed() ||
                (chrome.cast.addReceiverActionListener(this.D), yRa(), this.u.subscribe("onlineScreenChange", (0, g.D)(this.JG, this)), this.B = fSa(this), chrome.cast.setCustomReceivers(this.B, g.Ia, (0, g.D)(function(f) {
                    this.Yd("Failed to set initial custom receivers: " + g.Jh(f))
                }, this)), this.Z("yt-remote-cast2-availability-change", v8(this)), b(!0))
        }, this), (0, g.D)(function(f) {
            this.Yd("Failed to initialize API: " + g.Jh(f));
            b(!1)
        }, this))
    };
    g.k.PV = function(a, b) {
        u8("Setting connected screen ID: " + a + " -> " + b);
        if (this.i) {
            var c = this.i.getScreen();
            if (!a || c && c.id != a) u8("Unsetting old screen status: " + this.i.i.friendlyName), w8(this, null)
        }
        if (a && b) {
            if (!this.i) {
                c = Z6(this.u.Gh(), a);
                if (!c) {
                    u8("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == c.idType) {
                    u8("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                a = dSa(this, c);
                a || (u8("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, g.Ia, (0, g.D)(function(d) {
                    this.Yd("Failed to set initial custom receivers: " + g.Jh(d))
                }, this)));
                u8("setConnectedScreenStatus: new active receiver: " + a.friendlyName);
                w8(this, new s8(this.u, a), !0)
            }
            this.i.RE(b)
        } else u8("setConnectedScreenStatus: no screen.")
    };
    g.k.QV = function(a) {
        this.isDisposed() ? this.Yd("Setting connection data on disposed cast v2") : this.i ? this.i.Yr(a) : this.Yd("Setting connection data without a session")
    };
    g.k.ZO = function() {
        this.isDisposed() ? this.Yd("Stopping session on disposed cast v2") : this.i ? (this.i.stop(), w8(this, null)) : u8("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.D)(this.kL, this), (0, g.D)(this.EU, this))
    };
    g.k.xa = function() {
        this.u.unsubscribe("onlineScreenChange", (0, g.D)(this.JG, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D);
        var a = vRa,
            b = g.Ha("yt.mdx.remote.debug.handlers_");
        g.ob(b || [], a);
        g.hf(this.i);
        g.R.prototype.xa.call(this)
    };
    g.k.Yd = function(a) {
        S7("Controller", a)
    };
    g.k.mL = function(a, b) {
        this.i == a && (b || w8(this, null), this.Z("yt-remote-cast2-session-change", b))
    };
    g.k.iU = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), u8("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.i)
                        if (this.i.i.label != a.label) u8("onReceiverAction_: Stopping active receiver: " + this.i.i.friendlyName), this.i.stop();
                        else {
                            u8("onReceiverAction_: Casting to active receiver.");
                            this.i.getScreen() && this.Z("yt-remote-cast2-session-change", this.i.getScreen());
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            w8(this,
                                new s8(this.u, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            w8(this, new o8(this.u, a, this.C, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            w8(this, new l8(this.u, a, this.config_));
                            break;
                        default:
                            this.Yd("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.i && this.i.i.label == a.label ? this.i.stop() : this.Yd("Stopping receiver w/o session: " + a.friendlyName)
            } else this.Yd("onReceiverAction_ called without receiver.")
    };
    g.k.WS = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Yd("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.i ? this.i.i : null;
        if (!c || c.label != b.label) return this.Yd("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.i.getScreen()) return u8("Reselecting dial screen."),
                this.Z("yt-remote-cast2-session-change", this.i.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.Yd('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            w8(this, new o8(this.u, b, this.C, this.config_))
        }
        b = this.i;
        b.N = a;
        b.N.appState == chrome.cast.DialAppState.RUNNING ? (a = b.N.extraData || {}, c = a.screenId || null, p8(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = $Ra(b, {
            name: b.i.friendlyName,
            screenId: a.screenId,
            loungeToken: a.loungeToken,
            dialId: b.N.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.ms(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = aSa(b, c)) : a = aSa(b, c)) : a = r8(b);
        return a
    };
    g.k.kL = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.J) {
            u8("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.i)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) u8("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), w8(this, new l8(this.u, c, this.config_), !0);
                    else {
                        this.Yd("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.i.i,
                    e = Z6(this.u.Gh(),
                        d.label);
                e && U6(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (u8("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.hf(this.i), this.i = new l8(this.u, c, this.config_), this.i.subscribe("sessionScreen", (0, g.D)(this.mL, this, this.i)), this.i.subscribe("sessionFailed", function() {
                    return eSa(b, b.i)
                }), this.i.Yr(null));
                this.i.QE(a)
            }
        }
    };
    g.k.YO = function() {
        return this.i ? this.i.IG() : null
    };
    g.k.EU = function(a) {
        this.isDisposed() || (this.Yd("Failed to estabilish a session: " + g.Jh(a)), a.code != chrome.cast.ErrorCode.CANCEL && w8(this, null), this.Z("yt-remote-cast2-session-failed"))
    };
    g.k.lU = function(a) {
        u8("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = v8(this);
            this.K = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            v8(this) != b && this.Z("yt-remote-cast2-availability-change", v8(this))
        }
    };
    g.k.JG = function() {
        this.isDisposed() || (this.B = fSa(this), u8("Updating custom receivers: " + g.Jh(this.B)), chrome.cast.setCustomReceivers(this.B, g.Ia, (0, g.D)(function() {
            this.Yd("Failed to set custom receivers.")
        }, this)), this.Z("yt-remote-cast2-availability-change", v8(this)))
    };
    t8.prototype.setLaunchParams = t8.prototype.QV;
    t8.prototype.setConnectedScreenStatus = t8.prototype.PV;
    t8.prototype.stopSession = t8.prototype.ZO;
    t8.prototype.getCastSession = t8.prototype.YO;
    t8.prototype.requestSession = t8.prototype.requestSession;
    t8.prototype.init = t8.prototype.init;
    t8.prototype.dispose = t8.prototype.dispose;
    var C8 = [];
    g.k = H8.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        I8(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Bk = a.hasPrevious, this.hasNext = a.hasNext, this.K = a.playerTime, this.J = a.playerTimeAt, this.C = a.seekableStart, this.i = a.seekableEnd, this.D = a.duration, this.N = a.loadedTime, this.B = a.liveIngestionTime, this.u = !isNaN(this.B))
    };
    g.k.yc = function() {
        return 1 == this.playerState
    };
    g.k.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.k.Cj = function(a) {
        this.D = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.u ? this.D + J8(this) : this.D
    };
    g.k.clone = function() {
        return new H8(N8(this))
    };
    g.w(P8, g.R);
    g.k = P8.prototype;
    g.k.getState = function() {
        return this.Ra
    };
    g.k.play = function() {
        R8(this) ? (this.i ? this.i.play(null, g.Ia, W8(this, "play")) : V8(this, "play"), U8(this, 1, L8(Q8(this))), this.Z("remotePlayerChange")) : S8(this, this.play)
    };
    g.k.pause = function() {
        R8(this) ? (this.i ? this.i.pause(null, g.Ia, W8(this, "pause")) : V8(this, "pause"), U8(this, 2, L8(Q8(this))), this.Z("remotePlayerChange")) : S8(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (R8(this)) {
            if (this.i) {
                var b = Q8(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.yc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.i.seek(c, g.Ia, W8(this, "seekTo", {
                    newTime: a
                }))
            } else V8(this, "seekTo", {
                newTime: a
            });
            U8(this, 3, a);
            this.Z("remotePlayerChange")
        } else S8(this, g.Pa(this.seekTo, a))
    };
    g.k.stop = function() {
        if (R8(this)) {
            this.i ? this.i.stop(null, g.Ia, W8(this, "stopVideo")) : V8(this, "stopVideo");
            var a = Q8(this);
            a.index = -1;
            a.videoId = "";
            I8(a);
            T8(this, a);
            this.Z("remotePlayerChange")
        } else S8(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            if (this.u) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.u.setReceiverVolumeLevel(d, (0, g.D)(function() {
                        S7("CP", "set receiver volume: " + d)
                    }, this), (0, g.D)(function() {
                        this.Yd("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.u.setReceiverMuted(b, (0, g.D)(function() {
                    S7("CP", "set receiver muted: " + b)
                }, this), (0, g.D)(function() {
                    this.Yd("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                V8(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            T8(this, c)
        } else S8(this, g.Pa(this.setVolume, a, b))
    };
    g.k.KG = function(a, b) {
        if (R8(this)) {
            var c = Q8(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Jh(b.style), g.dc(a, c.trackData));
            V8(this, "setSubtitlesTrack", a);
            T8(this, c)
        } else S8(this, g.Pa(this.KG, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        R8(this) ? (b = b.getLanguageInfo().getId(), V8(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = Q8(this), a.audioTrackId = b, T8(this, a)) : S8(this, g.Pa(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = Q8(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        M8(l, a, c || 0);
        void 0 !== b && (K8(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Jh(h));
        V8(this, "setPlaylist", m);
        d || T8(this, l)
    };
    g.k.Ez = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "previous")
        } else S8(this, g.Pa(this.Ez, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (R8(this)) {
            if (a && b) {
                var c = Q8(this);
                M8(c, a, b);
                T8(this, c)
            }
            V8(this, "next")
        } else S8(this, g.Pa(this.nextVideo, a, b))
    };
    g.k.vI = function() {
        R8(this) ? V8(this, "dismissAutoplay") : S8(this, this.vI)
    };
    g.k.dispose = function() {
        if (3 != this.Ra) {
            var a = this.Ra;
            this.Ra = 3;
            this.Z("proxyStateChange", a, this.Ra)
        }
        g.R.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        rSa(this);
        this.B = null;
        this.C.clear();
        O8(this, null);
        g.R.prototype.xa.call(this)
    };
    g.k.TE = function(a) {
        if ((a != this.Ra || 2 == a) && 3 != this.Ra && 0 != a) {
            var b = this.Ra;
            this.Ra = a;
            this.Z("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.C.isEmpty();) b = a = this.C, 0 === b.i.length && (b.i = b.u, b.i.reverse(), b.u = []), a.i.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.fU = function(a, b) {
        this.Z(a, b)
    };
    g.k.GS = function(a) {
        if (!a) this.Tv(null), O8(this, null);
        else if (this.u.receiver.volume) {
            a = this.u.receiver.volume;
            var b = Q8(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) S7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, T8(this, b)
        }
    };
    g.k.Tv = function(a) {
        S7("CP", "Cast media: " + !!a);
        this.i && this.i.removeUpdateListener(this.K);
        if (this.i = a) this.i.addUpdateListener(this.K), sSa(this), this.Z("remotePlayerChange")
    };
    g.k.ES = function(a) {
        a ? (sSa(this), this.Z("remotePlayerChange")) : this.Tv(null)
    };
    g.k.mF = function() {
        V8(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.NS = function() {
        var a = oSa();
        a && O8(this, a)
    };
    g.k.Yd = function(a) {
        S7("CP", a)
    };
    g.w(X8, g.R);
    g.k = X8.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ca && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.jc.listId = c);
            this.jc.videoId = d;
            this.jc.index = l || 0;
            this.jc.state = 3;
            K8(this.jc,
                n);
            this.C = "UNSUPPORTED";
            c = this.Ca ? "setInitialState" : "setPlaylist";
            Y8("Connecting with " + c + " and params: " + g.Jh(m));
            this.i.connect({
                method: c,
                params: g.Jh(m)
            }, a, BQa())
        } else Y8("Connecting without params"), this.i.connect({}, a, BQa());
        vSa(this)
    };
    g.k.Wz = function(a) {
        this.i.Wz(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ga("yt.mdx.remote.remoteClient_", null, void 0), this.Z("beforeDispose"), Z8(this, 3));
        g.R.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        $8(this);
        b9(this);
        a9(this);
        g.gt(this.K);
        this.K = NaN;
        g.gt(this.N);
        this.N = NaN;
        this.B = null;
        g.lu(this.V);
        this.V.length = 0;
        this.i.dispose();
        g.R.prototype.xa.call(this);
        this.C = this.J = this.u = this.jc = this.i = null
    };
    g.k.EQ = function() {
        this.zr(2)
    };
    g.k.KS = function() {
        Y8("Channel opened");
        this.ya && (this.ya = !1, a9(this), this.ma = g.et((0, g.D)(function() {
            Y8("Timing out waiting for a screen.");
            this.zr(1)
        }, this), 15E3));
        FQa(tRa(this.i), this.La)
    };
    g.k.HS = function() {
        Y8("Channel closed");
        isNaN(this.D) ? d7(!0) : d7();
        this.dispose()
    };
    g.k.IS = function(a, b) {
        d7();
        isNaN(this.ev()) ? (b && "shortLived" == this.Aa && this.Z("browserChannelAuthError", a), Y8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.ya = !0, Y8("Channel error: " + a + " with reconnection in " + this.ev() + " ms"), Z8(this, 2))
    };
    g.k.HJ = function(a) {
        if (!this.u || 0 === this.u.length) return !1;
        for (var b = g.r(this.u), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.JS = function(a) {
        a.params ? Y8("Received: action=" + a.action + ", params=" + g.Jh(a.params)) : Y8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = Q6(a.params.devices);
                this.u = g.Se(a, function(c) {
                    return new S6(c)
                });
                a = !!g.fb(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                ySa(this, a);
                a = this.HJ("mlm");
                this.Z("multiStateLoopEnabled", a);
                break;
            case "loungeScreenDisconnected":
                g.pb(this.u, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                ySa(this, !1);
                break;
            case "remoteConnected":
                var b = new S6(Q6(a.params.device));
                g.fb(this.u, function(c) {
                    return b ? c.id == b.id : !1
                }) || oQa(this.u, b);
                break;
            case "remoteDisconnected":
                b = new S6(Q6(a.params.device));
                g.pb(this.u, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                ASa(this, a);
                break;
            case "nowPlaying":
                CSa(this, a);
                break;
            case "onStateChange":
                BSa(this, a);
                break;
            case "onAdStateChange":
                DSa(this, a);
                break;
            case "onVolumeChanged":
                ESa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                zSa(this, a);
                break;
            case "nowAutoplaying":
                FSa(this, a);
                break;
            case "autoplayDismissed":
                this.Z("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.J = a.params.videoId || null;
                this.Z("autoplayUpNext", this.J);
                break;
            case "onAutoplayModeChanged":
                this.C =
                    a.params.autoplayMode;
                this.Z("autoplayModeChange", this.C);
                "DISABLED" == this.C && this.Z("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                GSa(this, a);
                break;
            case "requestAssistedSignIn":
                this.Z("assistedSignInRequested", a.params.authCode);
                break;
            case "onLoopModeChanged":
                this.Z("loopModeChange", a.params.loopMode);
                break;
            default:
                Y8("Unrecognized action: " + a.action)
        }
    };
    g.k.FV = function() {
        if (this.B) {
            var a = this.B;
            this.B = null;
            this.jc.videoId != a && c9(this, "getNowPlaying")
        }
    };
    g.k.AQ = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.ev()) ? N7(this.i) && isNaN(this.D) && (a = 1) : a = 2);
        return a
    };
    g.k.zr = function(a) {
        Y8("Disconnecting with " + a);
        g.Ga("yt.mdx.remote.remoteClient_", null, void 0);
        $8(this);
        this.Z("beforeDisconnect", a);
        1 == a && d7();
        uRa(this.i, a);
        this.dispose()
    };
    g.k.yQ = function() {
        var a = this.jc;
        this.B && (a = this.jc.clone(), M8(a, this.B, a.index));
        return N8(a)
    };
    g.k.RV = function(a) {
        var b = new H8(a);
        b.videoId && b.videoId != this.jc.videoId && (this.B = b.videoId, g.gt(this.K), this.K = g.et((0, g.D)(this.FV, this), 5E3));
        var c = [];
        this.jc.listId == b.listId && this.jc.videoId == b.videoId && this.jc.index == b.index || c.push("remoteQueueChange");
        this.jc.playerState == b.playerState && this.jc.volume == b.volume && this.jc.muted == b.muted && L8(this.jc) == L8(b) && g.Jh(this.jc.trackData) == g.Jh(b.trackData) || c.push("remotePlayerChange");
        this.jc.reset(a);
        g.Db(c, function(d) {
            this.Z(d)
        }, this)
    };
    g.k.ZI = function() {
        var a = this.i.J.id,
            b = g.fb(this.u, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.ev = function() {
        var a = this.i;
        return a.u.isActive() ? a.u.u - Date.now() : NaN
    };
    g.k.vQ = function() {
        return this.C || "UNSUPPORTED"
    };
    g.k.wQ = function() {
        return this.J || ""
    };
    g.k.aP = function() {
        if (!isNaN(this.ev())) {
            var a = this.i.u;
            g.Eq(a.i);
            a.start()
        }
    };
    g.k.OV = function(a, b) {
        c9(this, a, b);
        xSa(this)
    };
    g.k.LG = function() {
        var a = g.zt("SID", "") || "",
            b = g.zt("SAPISID", "") || "",
            c = g.zt("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.he(g.Ya(a), 2);
        b = g.he(g.Ya(b), 2);
        c = g.he(g.Ya(c), 2);
        return g.he(g.Ya(a + "," + b + "," + c), 2)
    };
    X8.prototype.subscribe = X8.prototype.subscribe;
    X8.prototype.unsubscribeByKey = X8.prototype.Tf;
    X8.prototype.getProxyState = X8.prototype.AQ;
    X8.prototype.disconnect = X8.prototype.zr;
    X8.prototype.getPlayerContextData = X8.prototype.yQ;
    X8.prototype.setPlayerContextData = X8.prototype.RV;
    X8.prototype.getOtherConnectedRemoteId = X8.prototype.ZI;
    X8.prototype.getReconnectTimeout = X8.prototype.ev;
    X8.prototype.getAutoplayMode = X8.prototype.vQ;
    X8.prototype.getAutoplayVideoId = X8.prototype.wQ;
    X8.prototype.reconnect = X8.prototype.aP;
    X8.prototype.sendMessage = X8.prototype.OV;
    X8.prototype.getXsrfToken = X8.prototype.LG;
    X8.prototype.isCapabilitySupportedOnConnectedDevices = X8.prototype.HJ;
    g.w(d9, W7);
    g.k = d9.prototype;
    g.k.Gh = function(a) {
        return this.Ne.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Ne.$_c(a)
    };
    g.k.get = function(a) {
        return this.Ne.$_g(a)
    };
    g.k.start = function() {
        this.Ne.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Ne.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Ne.$_r(a, b, c)
    };
    g.k.rA = function(a, b, c, d) {
        this.Ne.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.i.length; a < b; ++a) this.Ne.$_ubk(this.i[a]);
        this.i.length = 0;
        this.Ne = null;
        W7.prototype.xa.call(this)
    };
    g.k.bP = function() {
        this.Z("screenChange")
    };
    g.k.JT = function() {
        this.Z("onlineScreenChange")
    };
    f8.prototype.$_st = f8.prototype.start;
    f8.prototype.$_gspc = f8.prototype.VO;
    f8.prototype.$_gsppc = f8.prototype.HG;
    f8.prototype.$_c = f8.prototype.contains;
    f8.prototype.$_g = f8.prototype.get;
    f8.prototype.$_a = f8.prototype.add;
    f8.prototype.$_un = f8.prototype.rA;
    f8.prototype.$_r = f8.prototype.remove;
    f8.prototype.$_gs = f8.prototype.Gh;
    f8.prototype.$_gos = f8.prototype.GG;
    f8.prototype.$_s = f8.prototype.subscribe;
    f8.prototype.$_ubk = f8.prototype.Tf;
    var q9 = null,
        w9 = !1,
        e9 = null,
        f9 = null,
        v9 = null,
        j9 = [];
    g.w(x9, g.H);
    g.k = x9.prototype;
    g.k.xa = function() {
        g.H.prototype.xa.call(this);
        this.i.stop();
        this.B.stop();
        this.N.stop();
        this.ma();
        var a = this.Rb;
        a.unsubscribe("proxyStateChange", this.iL, this);
        a.unsubscribe("remotePlayerChange", this.Yv, this);
        a.unsubscribe("remoteQueueChange", this.sz, this);
        a.unsubscribe("previousNextChange", this.fL, this);
        a.unsubscribe("nowAutoplaying", this.ZK, this);
        a.unsubscribe("autoplayDismissed", this.CK, this);
        this.Rb = this.u = null
    };
    g.k.hj = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.Rb.Ra)
            if (y9(this)) {
                if (!Q8(this.Rb).isAdPlaying() || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        Q8(this.Rb).yc() ? this.Rb.pause() : this.Rb.play();
                        break;
                    case "control_play":
                        this.Rb.play();
                        break;
                    case "control_pause":
                        this.Rb.pause();
                        break;
                    case "control_seek":
                        this.K.FG(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        z9(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(c[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c =
                        this.I.getCurrentTime();
                    A9(this, 0 === c ? void 0 : c);
                    break;
                case "control_seek":
                    A9(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    z9(this, c[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(c[0])
            }
    };
    g.k.CS = function(a) {
        this.N.PO(a)
    };
    g.k.xW = function(a) {
        this.hj("control_subtitles_set_track", g.Wb(a) ? null : a)
    };
    g.k.pM = function() {
        var a = this.I.getOption("captions", "track");
        g.Wb(a) || z9(this, a)
    };
    g.k.Ob = function(a) {
        this.u.Ob(a, this.I.getVideoData().lengthSeconds)
    };
    g.k.tT = function() {
        g.Wb(this.C) || RSa(this, this.C);
        this.D = !1
    };
    g.k.iL = function(a, b) {
        this.B.stop();
        2 === b && this.jM()
    };
    g.k.Yv = function() {
        if (y9(this)) {
            this.i.stop();
            var a = Q8(this.Rb);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.u.lf = 1;
                    break;
                case 1082:
                case 1083:
                    this.u.lf = 0;
                    break;
                default:
                    this.u.lf = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Sb(new g.fK(8));
                    this.iM();
                    break;
                case 1085:
                case 3:
                    this.Sb(new g.fK(9));
                    break;
                case 1083:
                case 0:
                    this.Sb(new g.fK(2));
                    this.K.stop();
                    this.Ob(this.I.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Sb(new g.fK(4));
                    break;
                case 2:
                    this.Sb(new g.fK(4));
                    this.Ob(L8(a));
                    break;
                case -1:
                    this.Sb(new g.fK(64));
                    break;
                case -1E3:
                    this.Sb(new g.fK(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "Video n\u00e0y kh\u00f4ng kh\u1ea3 d\u1ee5ng \u0111\u1ec3 ph\u00e1t l\u1ea1i t\u1eeb xa."
                    }))
            }
            a = Q8(this.Rb).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, RSa(this, a));
            a = Q8(this.Rb); - 1 === a.volume || Math.round(this.I.getVolume()) === a.volume && this.I.isMuted() === a.muted || this.V.isActive() ||
                this.SM()
        } else QSa(this)
    };
    g.k.fL = function() {
        this.I.Z("mdxpreviousnextchange")
    };
    g.k.sz = function() {
        y9(this) || QSa(this)
    };
    g.k.ZK = function(a) {
        isNaN(a) || this.I.Z("mdxnowautoplaying", a)
    };
    g.k.CK = function() {
        this.I.Z("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        y9(this) && this.Rb.setAudioTrack(this.I.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === Q8(this.Rb).playerState ? A9(this, a) : b && this.Rb.seekTo(a)
    };
    g.k.SM = function() {
        var a = this;
        if (y9(this)) {
            var b = Q8(this.Rb);
            this.events.kc(this.ea);
            b.muted ? this.I.mute() : this.I.unMute();
            this.I.setVolume(b.volume);
            this.ea = this.events.S(this.I, "onVolumeChange", function(c) {
                PSa(a, c)
            })
        }
    };
    g.k.iM = function() {
        this.i.stop();
        if (!this.Rb.isDisposed()) {
            var a = Q8(this.Rb);
            a.yc() && this.Sb(new g.fK(8));
            this.Ob(L8(a));
            this.i.start()
        }
    };
    g.k.jM = function() {
        this.B.stop();
        this.i.stop();
        var a = this.Rb.B.getReconnectTimeout();
        2 == this.Rb.Ra && !isNaN(a) && this.B.start()
    };
    g.k.Sb = function(a) {
        this.B.stop();
        var b = this.J;
        if (!g.kK(b, a)) {
            var c = g.V(a, 2);
            c !== g.V(this.J, 2) && this.I.Ms(c);
            this.J = a;
            TSa(this.u, b, a)
        }
    };
    g.w(B9, g.W);
    B9.prototype.bd = function() {
        this.i.show()
    };
    B9.prototype.Cb = function() {
        this.i.hide()
    };
    B9.prototype.u = function() {
        g.NJ("https://support.google.com/youtube/answer/7640706")
    };
    B9.prototype.B = function() {
        R6("mdx-manual-pairing-popup-ok");
        this.Cb()
    };
    g.w(C9, g.W);
    C9.prototype.bd = function() {
        this.i.show()
    };
    C9.prototype.Cb = function() {
        this.i.hide()
    };
    C9.prototype.u = function() {
        R6("mdx-privacy-popup-cancel");
        this.Cb()
    };
    C9.prototype.B = function() {
        R6("mdx-privacy-popup-confirm");
        this.Cb()
    };
    g.w(D9, g.W);
    D9.prototype.u = function(a) {
        SSa(this, a.state)
    };
    g.w(E9, g.bQ);
    E9.prototype.D = function() {
        var a = this.I.getOption("remote", "receivers");
        a && 1 < a.length && !this.I.getOption("remote", "quickCast") ? (this.Tn = g.Eb(a, this.i, this), g.cQ(this, g.Se(a, this.i)), a = this.I.getOption("remote", "currentReceiver"), a = this.i(a), this.options[a] && this.Xh(a), this.enable(!0)) : this.enable(!1)
    };
    E9.prototype.i = function(a) {
        return a.key
    };
    E9.prototype.Yi = function(a) {
        return "cast-selector-receiver" === a ? "Truy\u1ec1n..." : this.Tn[a].name
    };
    E9.prototype.vf = function(a) {
        g.bQ.prototype.vf.call(this, a);
        this.I.setOption("remote", "currentReceiver", this.Tn[a]);
        this.Ab.Cb()
    };
    g.w(F9, g.kN);
    g.k = F9.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.rF(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: g.T(a.experiments, "mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: g.T(a.experiments, "enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: g.T(a.experiments, "enable_cast_short_lived_lounge_token")
        };
        KSa(b, a);
        this.subscriptions.push(g.Tu("yt-remote-before-disconnect", this.BS, this));
        this.subscriptions.push(g.Tu("yt-remote-connection-change", this.mU, this));
        this.subscriptions.push(g.Tu("yt-remote-receiver-availability-change",
            this.hL, this));
        this.subscriptions.push(g.Tu("yt-remote-auto-connect", this.kU, this));
        this.subscriptions.push(g.Tu("yt-remote-receiver-resumed", this.jU, this));
        this.subscriptions.push(g.Tu("mdx-privacy-popup-confirm", this.uV, this));
        this.subscriptions.push(g.Tu("mdx-privacy-popup-cancel", this.tV, this));
        this.subscriptions.push(g.Tu("mdx-manual-pairing-popup-ok", this.FR, this));
        this.hL()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.kN.prototype.load.call(this);
        this.wh = new x9(this, this.player, this.Rb);
        var a = (a = OSa()) ? a.currentTime : 0;
        var b = u9() ? new P8(o9(), void 0) : null;
        0 == a && b && (a = L8(Q8(b)));
        0 !== a && this.Ob(a);
        TSa(this, this.pd, this.pd);
        this.player.Qk(6)
    };
    g.k.unload = function() {
        this.player.Z("mdxautoplaycanceled");
        this.Pm = this.nj;
        g.lf(this.wh, this.Rb);
        this.Rb = this.wh = null;
        g.kN.prototype.unload.call(this);
        this.player.Qk(5);
        G9(this)
    };
    g.k.xa = function() {
        g.Uu(this.subscriptions);
        g.kN.prototype.xa.call(this)
    };
    g.k.Jk = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.wh.hj.apply(this.wh, [a].concat(g.v(c)))
    };
    g.k.getAdState = function() {
        return this.lf
    };
    g.k.BQ = function() {
        return this.loaded ? this.wh.suggestion : null
    };
    g.k.Bk = function() {
        return this.Rb ? Q8(this.Rb).Bk : !1
    };
    g.k.hasNext = function() {
        return this.Rb ? Q8(this.Rb).hasNext : !1
    };
    g.k.Ob = function(a, b) {
        this.VJ = a || 0;
        this.player.Z("progresssync", a, b);
        this.player.Ma("onVideoProgress", a)
    };
    g.k.getCurrentTime = function() {
        return this.VJ
    };
    g.k.getProgressState = function() {
        var a = Q8(this.Rb),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: g.T(this.player.U().experiments, "web_player_mdx_allow_seeking_change_killswitch") ? this.player.jf() : !a.isAdPlaying() && this.player.jf(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.u ? a.B + J8(a) : a.B,
            isAtLiveHead: 1 >= (a.u ? a.i + J8(a) : a.i) - this.getCurrentTime(),
            loaded: a.N,
            seekableEnd: a.u ? a.i + J8(a) : a.i,
            seekableStart: 0 < a.C ? a.C + J8(a) : a.C
        }
    };
    g.k.nextVideo = function() {
        this.Rb && this.Rb.nextVideo()
    };
    g.k.Ez = function() {
        this.Rb && this.Rb.Ez()
    };
    g.k.BS = function(a) {
        1 === a && (this.uE = this.Rb ? Q8(this.Rb) : null)
    };
    g.k.mU = function() {
        var a = u9() ? new P8(o9(), void 0) : null;
        if (a) {
            var b = this.Pm;
            this.loaded && this.unload();
            this.Rb = a;
            this.uE = null;
            b.key !== this.nj.key && (this.Pm = b, this.load())
        } else g.hf(this.Rb), this.Rb = null, this.loaded && (this.unload(), (a = this.uE) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, L8(a)));
        this.player.Z("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.hL = function() {
        var a = [this.nj],
            b = a.concat,
            c = LSa();
        D8() && g.xz("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Tn = b.call(a, c);
        a = p9() || this.nj;
        H9(this, a);
        this.player.Ma("onMdxReceiversChange")
    };
    g.k.kU = function() {
        var a = p9();
        H9(this, a)
    };
    g.k.jU = function() {
        this.Pm = p9()
    };
    g.k.uV = function() {
        this.ew = !0;
        G9(this);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.tV = function() {
        this.ew = !1;
        G9(this);
        H9(this, this.nj);
        this.Pm = this.nj;
        w9 = !1;
        q9 = null;
        this.player.playVideo()
    };
    g.k.FR = function() {
        this.Ry = !0;
        G9(this);
        g.wz("yt-remote-manual-pairing-warning-shown", !0, 2592E3);
        w9 = !1;
        q9 && s9(q9, 1);
        q9 = null
    };
    g.k.Ze = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Tn;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? F8() : H9(this, b)), this.loaded ? this.Pm : this.nj;
            case "quickCast":
                return 2 === this.Tn.length && "cast-selector-receiver" === this.Tn[1].key ? (b && F8(), !0) : !1
        }
    };
    g.k.mF = function() {
        this.Rb.mF()
    };
    g.k.Ji = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.vN.remote = F9;
})(_yt_player);