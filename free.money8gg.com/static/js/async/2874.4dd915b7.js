"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["2874"], {
        56803: function() {},
        28443: function() {},
        57922: function(e, t, a) {
            a.r(t), a.d(t, {
                default: () => io
            });
            var s, n, l = a("85893"),
                i = a("67294"),
                r = a("96877"),
                o = a("6753"),
                d = a("92198"),
                c = a("22273"),
                _ = a("12838");
            let u = e => {
                let {
                    is_client_store_initialized: t,
                    landing_company_shortcode: a = " ",
                    currency: s = " ",
                    email: n = " ",
                    is_logged_in: l = " ",
                    loginid: r = " ",
                    residence: o = " ",
                    last_name: u = " ",
                    first_name: m = " "
                } = e, x = new URLSearchParams(window.location.search), h = "reset_password" === _.fr.getQueryParameter("action"), p = x.get("code") && h, {
                    data: j
                } = (0, c.Z)(!0), {
                    cs_chat_livechat: v
                } = j;
                (0, i.useEffect)(() => {
                    if (t && v) {
                        var e;
                        null === (e = window.LiveChatWidget) || void 0 === e || e.init()
                    }
                }, [t, v]), (0, i.useEffect)(() => {
                    if (!p && t) {
                        var e;
                        null === (e = window.LiveChatWidget) || void 0 === e || e.on("ready", e => {
                            var t, i, c, _, x, h;
                            "minimized" === e.state.visibility && (null === (i = window.LiveChatWidget) || void 0 === i || i.call("hide"));
                            let {
                                utm_source: p,
                                utm_medium: j,
                                utm_campaign: v
                            } = JSON.parse(d.Z.get("utm_data") || "{}"), b = {
                                is_logged_in: String(l),
                                utm_source: p || " ",
                                utm_medium: j || " ",
                                utm_campaign: v || " ",
                                loginid: l ? r : " ",
                                landing_company_shortcode: l ? a : " ",
                                currency: l ? s : " ",
                                residence: l ? o : " ",
                                email: l ? n : " "
                            };
                            null === (t = window.LiveChatWidget) || void 0 === t || t.call("set_session_variables", b), l ? (null === (c = window.LiveChatWidget) || void 0 === c || c.call("set_customer_email", n), null === (_ = window.LiveChatWidget) || void 0 === _ || _.call("set_customer_name", `${m} ${u}`)) : (null === (x = window.LiveChatWidget) || void 0 === x || x.call("set_customer_email", " "), null === (h = window.LiveChatWidget) || void 0 === h || h.call("set_customer_name", " "))
                        })
                    }
                }, [n, p, r, l, a, t, s, m, u, o])
            };
            var m = a("97529"),
                x = a("66175"),
                h = a("79649"),
                p = a("78013");
            let j = () => {
                let {
                    client: e
                } = (0, p.oR)(), {
                    account_settings: t,
                    landing_company_shortcode: a
                } = e, {
                    tnc_status: s
                } = t || {};
                return s && 0 === s[a]
            };
            var v = a("2502");
            let b = (0, r.Pi)(() => {
                let {
                    isAuthorized: e
                } = (0, h.T)(), {
                    client: t
                } = (0, p.oR)(), {
                    is_cr_account: a
                } = t, [s, n] = i.useState(!1), {
                    isDesktop: l
                } = (0, v.F)(), r = j();
                return i.useEffect(() => {
                    let e = localStorage.getItem("tnc_popup_dismissed");
                    r && !e && n(!0)
                }, [r]), null
            });
            var y = a("33281"),
                g = a("20296"),
                f = a.n(g),
                N = a("76298");
            var C = ((s = {}).MOVE = "move", s.TOP = "top", s.RIGHT = "right", s.BOTTOM = "bottom", s.LEFT = "left", s.TOP_RIGHT = "top-right", s.BOTTOM_RIGHT = "bottom-right", s.BOTTOM_LEFT = "bottom-left", s.TOP_LEFT = "top-left", s.BODY_REF = "body", s);
            let w = e => {
                    let {
                        setZIndex: t
                    } = e, a = document.getElementsByClassName("draggable");
                    if (!a.length) return;
                    let s = Array.from(a).reduce((e, t) => Math.max(e, parseInt(window.getComputedStyle(t).zIndex) || 0), 0);
                    t(s + 3)
                },
                k = e => {
                    let {
                        prevWidth: t,
                        leftOffset: a,
                        boundaryRect: s,
                        initialSelfRight: n,
                        resize_direction: l,
                        newWidth: i,
                        minWidth: r,
                        clientX: o,
                        self: d
                    } = e, c = (null == s ? void 0 : s.left) ? ? 0, _ = (null == s ? void 0 : s.width) ? ? 0, u = c + a + 5, m = (null == d ? void 0 : d.left) ? ? 0, x = c + _ - 7;
                    if (l.includes("left")) return i >= r && o > u ? i : o < u + 10 ? x - u - (x - n) - 10 : t;
                    if (l.includes("right")) {
                        if (i >= r && o < x) return i;
                        if (o > x) return x - m
                    }
                    return t
                },
                T = e => {
                    let {
                        prevHeight: t,
                        topOffset: a,
                        boundaryRect: s,
                        initialSelfBottom: n,
                        resize_direction: l,
                        newHeight: i,
                        minHeight: r,
                        clientY: o,
                        self: d
                    } = e, c = (null == s ? void 0 : s.top) ? ? 0, _ = (null == s ? void 0 : s.height) ? ? 0, u = c + a + 5, m = (null == d ? void 0 : d.top) ? ? 0, x = c + _ - 7;
                    if (l.includes("top")) return i >= r && o > u ? i : o < u + 10 ? x - u - (x - n) - 10 : t;
                    if (l.includes("bottom")) {
                        if (i >= r && o < x) return i;
                        if (o > x) return x - m
                    }
                    return t
                },
                E = e => {
                    let {
                        children: t,
                        boundary: a,
                        initialValues: s = {
                            width: 400,
                            height: 400,
                            xAxis: 0,
                            yAxis: 0
                        },
                        minWidth: n = 100,
                        minHeight: r = 100,
                        enableResizing: o = !1,
                        enableDragging: d = !0,
                        header: c = "",
                        onClose: _
                    } = e, [u, m] = (0, i.useState)({
                        x: s.xAxis,
                        y: s.yAxis
                    }), [x, h] = (0, i.useState)({
                        width: s.width,
                        height: s.height
                    }), [p, j] = (0, i.useState)(100), v = (0, i.useRef)(!1), [b, y] = (0, i.useState)(!1), g = (0, i.useRef)(null), [f, E] = (0, i.useState)(document.querySelector(a ? ? C.BODY_REF));
                    (0, i.useEffect)(() => {
                        h({
                            width: s.width,
                            height: s.height
                        }), m({
                            x: s.xAxis,
                            y: s.yAxis
                        })
                    }, [s.height, s.width, s.xAxis, s.yAxis]), (0, i.useEffect)(() => {
                        E(document.querySelector(a ? ? C.BODY_REF)), w({
                            setZIndex: j
                        })
                    }, [a]);
                    let S = (e, t) => {
                        var a, l, i, c, _;
                        if (null == e || e.stopPropagation(), w({
                                setZIndex: j
                            }), !t) return;
                        v.current = t !== C.MOVE && o, y(t === C.MOVE && d);
                        let p = null == f ? void 0 : f.getBoundingClientRect(),
                            b = (null == f ? void 0 : f.offsetTop) ? ? 0,
                            N = (null == f ? void 0 : f.offsetLeft) ? ? 0,
                            E = (null == e ? void 0 : e.clientX) ? ? 0,
                            S = (null == e ? void 0 : e.clientY) ? ? 0,
                            A = (null == x ? void 0 : x.width) ? ? s.width,
                            I = (null == x ? void 0 : x.height) ? ? s.height,
                            R = (null == u ? void 0 : u.x) ? ? 0,
                            M = (null == u ? void 0 : u.y) ? ? 0,
                            O = (null === (l = g.current) || void 0 === l ? void 0 : null === (a = l.getBoundingClientRect()) || void 0 === a ? void 0 : a.right) ? ? x.width,
                            D = (null === (c = g.current) || void 0 === c ? void 0 : null === (i = c.getBoundingClientRect()) || void 0 === i ? void 0 : i.bottom) ? ? x.height,
                            L = {},
                            U = null === (_ = g.current) || void 0 === _ ? void 0 : _.querySelector("#draggable-content-body");
                        if (U) {
                            let {
                                style: e
                            } = U;
                            e && "none" !== e.pointerEvents && (L = { ...e
                            }, e.pointerEvents = "none")
                        }
                        let Z = e => {
                                if (!e) return;
                                let {
                                    clientX: t,
                                    clientY: a
                                } = e, s = t - E, n = a - S;
                                try {
                                    v.current ? B(s, n, t, a) : F(s, n)
                                } catch (e) {
                                    z()
                                }
                            },
                            B = (e, a, s, l) => {
                                var i;
                                let o = (null == u ? void 0 : u.x) ? ? 0,
                                    d = (null == u ? void 0 : u.y) ? ? 0,
                                    c = A,
                                    _ = I;
                                t.includes(C.RIGHT) ? c += e : t.includes(C.LEFT) && (o = e + R, c -= e), t.includes(C.BOTTOM) ? _ += a : t.includes(C.TOP) && (d = a + M, _ -= a), m(e => {
                                    let t = Math.max(d, b + 5),
                                        a = Math.max(o, N + 5);
                                    return {
                                        x: c <= n ? e.x : a,
                                        y: _ <= r ? e.y : t
                                    }
                                });
                                let x = null === (i = g.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                                h(e => ({
                                    width: k({
                                        prevWidth: e.width,
                                        leftOffset: N,
                                        boundaryRect: p,
                                        initialSelfRight: O,
                                        resize_direction: t,
                                        newWidth: c,
                                        minWidth: n,
                                        clientX: s,
                                        self: x
                                    }),
                                    height: T({
                                        prevHeight: e.height,
                                        topOffset: b,
                                        boundaryRect: p,
                                        initialSelfBottom: D,
                                        resize_direction: t,
                                        newHeight: _,
                                        minHeight: r,
                                        clientY: l,
                                        self: x
                                    })
                                }))
                            },
                            F = (e, t) => {
                                let a = Math.min(Math.max(e + R, N + 5), N + ((null == p ? void 0 : p.width) ? ? 0) - x.width - 9);
                                m({
                                    x: a,
                                    y: Math.min(Math.max(t + M, b + 5), b + ((null == p ? void 0 : p.height) ? ? 0) - x.height - 9)
                                })
                            },
                            z = () => {
                                if (y(!1), v.current = !1, null == U ? void 0 : U.style) try {
                                    Object.assign(U.style, L)
                                } catch {
                                    U.style.pointerEvents = "unset"
                                }
                                f && (window.removeEventListener("mousemove", Z), window.removeEventListener("mouseup", z))
                            };
                        f && (window.addEventListener("mousemove", Z), window.addEventListener("mouseup", z))
                    };
                    return (0, l.jsx)("div", {
                        className: `draggable ${b?"dragging":""}`,
                        style: {
                            position: "absolute",
                            top: u.y,
                            left: u.x,
                            zIndex: p
                        },
                        onMouseDown: () => w({
                            setZIndex: j
                        }),
                        onKeyDown: () => w({
                            setZIndex: j
                        }),
                        "data-testid": "dt_react_draggable",
                        tabIndex: 0,
                        children: (0, l.jsxs)("div", {
                            ref: g,
                            className: "draggable-content",
                            "data-testid": "dt_react_draggable_content",
                            style: {
                                width: x.width,
                                height: x.height
                            },
                            children: [(0, l.jsxs)("div", {
                                id: "draggable-content__header",
                                "data-testid": "dt_react_draggable_handler",
                                className: "draggable-content__header",
                                onMouseDown: e => S(e, C.MOVE),
                                onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                tabIndex: 0,
                                children: [(0, l.jsx)("div", {
                                    className: "draggable-content__header__title",
                                    children: c
                                }), (0, l.jsx)("div", {
                                    className: "draggable-content__header__close",
                                    "data-testid": "dt_react_draggable-close-modal",
                                    onClick: _,
                                    children: (0, l.jsx)(N.Z, {
                                        height: "20px",
                                        width: "20px",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })
                                })]
                            }), (0, l.jsx)("span", {
                                className: "draggable-content__body",
                                id: "draggable-content-body",
                                children: t
                            }), o && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "resizable-handle__top",
                                    "data-testid": "dt_resizable-handle__top",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.TOP),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__right",
                                    "data-testid": "dt_resizable-handle__right",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.RIGHT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__bottom",
                                    "data-testid": "dt_resizable-handle__bottom",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.BOTTOM),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__left",
                                    "data-testid": "dt_resizable-handle__left",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.LEFT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__top-right",
                                    "data-testid": "dt_resizable-handle__top-right",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.TOP_RIGHT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__bottom-right",
                                    "data-testid": "dt_resizable-handle__bottom-right",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.BOTTOM_RIGHT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__bottom-left",
                                    "data-testid": "dt_resizable-handle__bottom-left",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.BOTTOM_LEFT),
                                    tabIndex: 0
                                }), (0, l.jsx)("div", {
                                    className: "resizable-handle__top-left",
                                    "data-testid": "dt_resizable-handle__top-left",
                                    onKeyDown: e => "Enter" === e.key && S(null, C.MOVE),
                                    onMouseDown: e => S(e, C.TOP_LEFT),
                                    tabIndex: 0
                                })]
                            })]
                        })
                    })
                },
                S = e => {
                    let {
                        boundary: t,
                        children: a,
                        onClose: s,
                        enableResizing: n = !1,
                        enableDragging: r = !0,
                        header: o = "",
                        minHeight: d = 100,
                        minWidth: c = 100,
                        modalHeight: _ = 400,
                        modalWidth: u = 400
                    } = e, [m, x] = (0, i.useState)(!1), h = (window.innerWidth - u) / 2, p = (window.innerHeight - _) / 2, [j, v] = i.useState({
                        width: u,
                        height: _,
                        xAxis: h >= 0 ? h : 0,
                        yAxis: p >= 0 ? p : 0
                    }), b = f()(() => {
                        let e = window.innerWidth > u ? u : window.innerWidth - 50,
                            t = window.innerHeight > _ ? _ : window.innerHeight - 50,
                            a = (window.innerWidth - e) / 2,
                            s = (window.innerHeight - t) / 2;
                        v({
                            width: e,
                            height: t,
                            xAxis: a >= 0 ? a : 0,
                            yAxis: s >= 0 ? s : 0
                        }), x(!0)
                    }, 0);
                    return i.useEffect(() => (b(), window.addEventListener("resize", b), () => {
                        window.removeEventListener("resize", b)
                    }), [b]), (0, l.jsx)("div", {
                        id: "draggable_resize_container",
                        children: m && (0, l.jsx)(E, {
                            boundary: t,
                            initialValues: j,
                            minWidth: c,
                            minHeight: d,
                            enableResizing: n,
                            enableDragging: r,
                            header: o,
                            onClose: s,
                            children: a
                        })
                    })
                };
            var A = a("48059"),
                I = a("63387"),
                R = a.n(I),
                M = a("24561"),
                O = a("33690"),
                D = a("88199"),
                L = a("26855");
            let U = {
                    FRXAUDCAD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexAudcadIcon
                    }))),
                    FRXAUDCHF: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexAudchfIcon
                    }))),
                    FRXAUDJPY: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexAudjpyIcon
                    }))),
                    FRXAUDNZD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexAudnzdIcon
                    }))),
                    FRXAUDPLN: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexAudsgdIcon
                    }))),
                    FRXAUDUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexAudusdIcon
                    }))),
                    FRXBROUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexCadchfIcon
                    }))),
                    FRXEURAUD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEuraudIcon
                    }))),
                    FRXEURCAD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEurcadIcon
                    }))),
                    FRXEURCHF: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEurchfIcon
                    }))),
                    FRXEURGBP: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEurgbpIcon
                    }))),
                    FRXEURJPY: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEurjpyIcon
                    }))),
                    FRXEURNZD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEurnzdIcon
                    }))),
                    FRXEURUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexEurusdIcon
                    }))),
                    FRXGBPAUD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpaudIcon
                    }))),
                    FRXGBPCAD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpcadIcon
                    }))),
                    FRXGBPCHF: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpchfIcon
                    }))),
                    FRXGBPJPY: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpjpyIcon
                    }))),
                    FRXGBPNOK: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpnokIcon
                    }))),
                    FRXGBPUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpusdIcon
                    }))),
                    FRXGBPNZD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexGbpnzdIcon
                    }))),
                    FRXNZDJPY: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexNzdjpnIcon
                    }))),
                    FRXNZDUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexNzdusdIcon
                    }))),
                    FRXUSDCAD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdcadIcon
                    }))),
                    FRXUSDCHF: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdchfIcon
                    }))),
                    FRXUSDJPY: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdjpyIcon
                    }))),
                    FRXUSDNOK: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdnokIcon
                    }))),
                    FRXUSDPLN: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdplnIcon
                    }))),
                    FRXUSDSEK: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdsekIcon
                    }))),
                    FRXUSDMXN: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketForexUsdmxnIcon
                    }))),
                    FRXXAGUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCommoditySilverusdIcon
                    }))),
                    FRXXAUUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCommodityGoldusdIcon
                    }))),
                    FRXXPDUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCommodityPalladiumusdIcon
                    }))),
                    FRXXPTUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCommodityPlatinumusdIcon
                    }))),
                    OTC_AEX: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesNetherlands25Icon
                    }))),
                    OTC_AS51: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesAustralia200Icon
                    }))),
                    OTC_DJI: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesWallStreet30Icon
                    }))),
                    OTC_FCHI: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesFrance40Icon
                    }))),
                    OTC_FTSE: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesUk100Icon
                    }))),
                    OTC_GDAXI: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesUk100Icon
                    }))),
                    OTC_HSI: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesHongKong50Icon
                    }))),
                    OTC_IBEX35: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesSpain35Icon
                    }))),
                    OTC_N225: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesJapan225Icon
                    }))),
                    OTC_NDX: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesUsTech100Icon
                    }))),
                    OTC_SPC: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesUs500Icon
                    }))),
                    OTC_SSMI: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesSwiss20Icon
                    }))),
                    OTC_SX5E: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketIndicesEuro50Icon
                    }))),
                    R_10: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility10Icon
                    }))),
                    R_25: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility25Icon
                    }))),
                    R_50: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility50Icon
                    }))),
                    R_75: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility75Icon
                    }))),
                    R_100: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility100Icon
                    }))),
                    BOOM300N: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedBoom300Icon
                    }))),
                    BOOM500: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedBoom500Icon
                    }))),
                    BOOM1000: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedBoom1000Icon
                    }))),
                    CRASH300N: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedCrash300Icon
                    }))),
                    CRASH500: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedCrash500Icon
                    }))),
                    CRASH1000: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedCrash1000Icon
                    }))),
                    RDBEAR: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedBearIcon
                    }))),
                    RDBULL: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedBullIcon
                    }))),
                    STPRNG: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices100Icon
                    }))),
                    STPRNG2: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices200Icon
                    }))),
                    STPRNG3: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices300Icon
                    }))),
                    STPRNG4: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices400Icon
                    }))),
                    STPRNG5: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedStepIndices500Icon
                    }))),
                    WLDAUD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedAudBasketIcon
                    }))),
                    WLDEUR: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedEurBasketIcon
                    }))),
                    WLDGBP: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedGbpBasketIcon
                    }))),
                    WLDXAU: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedGoldBasketIcon
                    }))),
                    WLDUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedUsdBasketIcon
                    }))),
                    "1HZ10V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility101sIcon
                    }))),
                    "1HZ25V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility251sIcon
                    }))),
                    "1HZ50V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility501sIcon
                    }))),
                    "1HZ75V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility751sIcon
                    }))),
                    "1HZ100V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility1001sIcon
                    }))),
                    "1HZ150V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility1501sIcon
                    }))),
                    "1HZ200V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility2001sIcon
                    }))),
                    "1HZ250V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility2501sIcon
                    }))),
                    "1HZ300V": (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedVolatility3001sIcon
                    }))),
                    JD10: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump10Icon
                    }))),
                    JD25: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump25Icon
                    }))),
                    JD50: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump50Icon
                    }))),
                    JD75: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump75Icon
                    }))),
                    JD100: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump100Icon
                    }))),
                    JD150: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump150Icon
                    }))),
                    JD200: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketDerivedJump200Icon
                    }))),
                    CRYBCHUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBchusdIcon
                    }))),
                    CRYBNBUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBnbusdIcon
                    }))),
                    CRYBTCLTC: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBtcltcIcon
                    }))),
                    CRYIOTUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyIotusdIcon
                    }))),
                    CRYNEOUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyNeousdIcon
                    }))),
                    CRYOMGUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyOmgusdIcon
                    }))),
                    CRYTRXUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyTrxusdIcon
                    }))),
                    CRYBTCETH: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBtcethIcon
                    }))),
                    CRYZECUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyZecusdIcon
                    }))),
                    CRYXMRUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyXmrusdIcon
                    }))),
                    CRYXMLUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyXlmusdIcon
                    }))),
                    CRYXRPUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyXrpusdIcon
                    }))),
                    CRYBTCUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyBtcusdIcon
                    }))),
                    CRYDSHUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyDshusdIcon
                    }))),
                    CRYETHUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyEthusdIcon
                    }))),
                    CRYEOSUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyEosusdIcon
                    }))),
                    CRYLTCUSD: (0, i.lazy)(() => a.e("753").then(a.bind(a, 48375)).then(e => ({
                        default: e.MarketCryptocurrencyLtcusdIcon
                    }))),
                    unknown: (0, i.lazy)(() => a.e("5733").then(a.bind(a, 57136)).then(e => ({
                        default: e.IllustrativeMarketsIcon
                    })))
                },
                Z = e => {
                    let {
                        type: t,
                        size: a
                    } = e, s = U[null == t ? void 0 : t.toUpperCase()] || U.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(s, {
                            iconSize: a ? ? "xs"
                        })
                    })
                };
            var B = a("30394");
            let F = {
                    ACCU: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesAccumulatorStayInIcon
                    }))),
                    DIGITDIFF: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesDigitsDiffersIcon
                    }))),
                    DIGITEVEN: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesDigitsEvenIcon
                    }))),
                    DIGITMATCH: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesDigitsMatchesIcon
                    }))),
                    DIGITODD: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesDigitsOddIcon
                    }))),
                    DIGITOVER: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesDigitsOverIcon
                    }))),
                    DIGITUNDER: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesDigitsUnderIcon
                    }))),
                    TICKHIGH: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsHighIcon
                    }))),
                    TICKLOW: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsLowIcon
                    }))),
                    NOTOUCH: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsNoTouchIcon
                    }))),
                    ONETOUCH: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsTouchIcon
                    }))),
                    EXPIRYRANGE: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsEndsInIcon
                    }))),
                    EXPIRYMISS: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsEndsOutIcon
                    }))),
                    UPORDOWN: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsGoesOutIcon
                    }))),
                    RANGE: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesInsAndOutsStaysInIcon
                    }))),
                    MULTDOWN: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesMultipliersDownIcon
                    }))),
                    MULTUP: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesMultipliersUpIcon
                    }))),
                    CALLSPREAD: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesSpreadsCallIcon
                    }))),
                    PUTSPREAD: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesSpreadsPutIcon
                    }))),
                    ASIAND: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsAsianDownIcon
                    }))),
                    ASIANU: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsAsianUpIcon
                    }))),
                    PUT: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsFallIcon
                    }))),
                    PUTE: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsFallIcon
                    }))),
                    RUNLOW: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsOnlyDownsIcon
                    }))),
                    RUNHIGH: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsOnlyUpsIcon
                    }))),
                    RESETPUT: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsResetDownIcon
                    }))),
                    RESETCALL: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsResetUpIcon
                    }))),
                    CALL: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsRiseIcon
                    }))),
                    CALLE: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesUpsAndDownsRiseIcon
                    }))),
                    HIGHER: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsHigherIcon
                    }))),
                    LOWER: (0, i.lazy)(() => a.e("5327").then(a.bind(a, 94733)).then(e => ({
                        default: e.TradeTypesHighsAndLowsLowerIcon
                    }))),
                    unknown: (0, i.lazy)(() => a.e("5733").then(a.bind(a, 57136)).then(e => ({
                        default: e.IllustrativeMarketsIcon
                    })))
                },
                z = e => {
                    let {
                        type: t,
                        size: a,
                        className: s
                    } = e, n = F[null == t ? void 0 : t.toUpperCase()] || F.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(n, {
                            iconSize: a ? ? "xs",
                            className: s
                        })
                    })
                },
                P = "transaction-details-modal-desktop",
                X = e => {
                    let {
                        label: t,
                        extra_classes: a = [],
                        loader: s = !1
                    } = e;
                    return (0, l.jsx)("div", {
                        className: R()(`${P}__table-cell`, ...a),
                        children: s ? (0, l.jsx)(V, {}) : t
                    })
                },
                H = e => {
                    let {
                        columns: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: R()(`${P}__table-row`, `${P}__table-header`),
                        children: null == t ? void 0 : t.map(e => (0, l.jsx)(X, {
                            extra_classes: [e.extra_class ? `${P}__table-cell${e.extra_class}` : ""],
                            label: e.label,
                            loader: !1
                        }, e.key))
                    })
                },
                $ = e => {
                    let {
                        message: t,
                        icon: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: `${P}__icon-wrapper`,
                        children: (0, l.jsx)(B.Z, {
                            alignment: (0, L.rK)() ? "right" : "left",
                            message: t,
                            zIndex: "9999",
                            children: a
                        })
                    })
                },
                V = () => (0, l.jsx)(M.ZP, {
                    className: "transactions__loader-text",
                    "data-testid": "transaction_details_table_cell_loader",
                    height: 10,
                    width: 30,
                    speed: 3,
                    backgroundColor: "var(--general-section-2)",
                    foregroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "60",
                        height: "12"
                    })
                });

            function G(e) {
                let {
                    result: t,
                    result_columns: a,
                    transactions: s,
                    transaction_columns: n,
                    account: i,
                    balance: r
                } = e;
                return (0, l.jsxs)("div", {
                    "data-testid": "transaction_details_tables",
                    className: "transaction-details-tables",
                    children: [(0, l.jsxs)("div", {
                        className: R()(`${P}__table-container`, `${P}__table-container__top-table`),
                        children: [(0, l.jsx)(H, {
                            columns: n
                        }), null == s ? void 0 : s.map(e => {
                            let {
                                data: t,
                                type: a
                            } = e;
                            if (a === O.i.CONTRACT) {
                                var s, n;
                                return (0, l.jsxs)("div", {
                                    className: `${P}__table-row`,
                                    children: [(0, l.jsx)(X, {
                                        label: (null == t ? void 0 : t.date_start) && (0, x.fcq)(null == t ? void 0 : t.date_start, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]"),
                                        extra_classes: [`${P}__table-cell--grow-big`]
                                    }), (0, l.jsx)(X, {
                                        label: null == t ? void 0 : null === (s = t.transaction_ids) || void 0 === s ? void 0 : s.buy,
                                        extra_classes: [`${P}__table-cell--grow-mid`]
                                    }), (0, l.jsx)(X, {
                                        label: (0, l.jsx)($, {
                                            message: null == t ? void 0 : t.display_name,
                                            icon: (0, l.jsx)(Z, {
                                                type: null == t ? void 0 : t.underlying,
                                                size: "sm"
                                            })
                                        })
                                    }), (0, l.jsx)(X, {
                                        label: (0, l.jsx)($, {
                                            message: (0, D.getContractTypeName)(t),
                                            icon: (0, l.jsx)(z, {
                                                type: null == t ? void 0 : t.contract_type,
                                                size: "sm"
                                            })
                                        })
                                    }), (0, l.jsx)(X, {
                                        label: null == t ? void 0 : t.entry_tick,
                                        loader: !(null == t ? void 0 : t.entry_tick)
                                    }), (0, l.jsx)(X, {
                                        label: null == t ? void 0 : t.exit_tick,
                                        loader: !t.exit_tick
                                    }), (0, l.jsx)(X, {
                                        label: Math.abs((null == t ? void 0 : t.buy_price) ? ? 0).toFixed(2)
                                    }), (0, l.jsx)(X, {
                                        label: (0, l.jsx)("div", {
                                            className: R()({
                                                [`${P}__profit--win`]: (null == t ? void 0 : t.profit) > 0,
                                                [`${P}__profit--loss`]: (null == t ? void 0 : t.profit) < 0
                                            }),
                                            children: Math.abs((null == t ? void 0 : t.profit) ? ? 0).toFixed(2)
                                        }),
                                        loader: !t.is_completed
                                    })]
                                }, null == t ? void 0 : null === (n = t.transaction_ids) || void 0 === n ? void 0 : n.buy)
                            }
                            return (0, l.jsx)("div", {
                                className: `${P}__table-row`,
                                children: (0, l.jsx)("div", {
                                    className: `${P}__divider`,
                                    children: (0, l.jsx)("div", {
                                        className: "transactions__divider-line"
                                    })
                                })
                            }, `transaction-row-divider-${t}`)
                        })]
                    }), (0, l.jsxs)("div", {
                        className: R()(`${P}__table-container`, `${P}__table-container__bottom-table`),
                        children: [(0, l.jsx)(H, {
                            columns: a
                        }), (0, l.jsxs)("div", {
                            className: `${P}__table-row`,
                            children: [(0, l.jsx)(X, {
                                label: i,
                                extra_classes: [`${P}__table-cell--grow-mid`]
                            }), (0, l.jsx)(X, {
                                label: null == t ? void 0 : t.number_of_runs
                            }), (0, l.jsx)(X, {
                                label: Math.abs((null == t ? void 0 : t.total_stake) ? ? 0).toFixed(2)
                            }), (0, l.jsx)(X, {
                                label: Math.abs((null == t ? void 0 : t.total_payout) ? ? 0).toFixed(2)
                            }), (0, l.jsx)(X, {
                                label: null == t ? void 0 : t.won_contracts
                            }), (0, l.jsx)(X, {
                                label: null == t ? void 0 : t.lost_contracts,
                                extra_classes: [`${P}__loss`]
                            }), (0, l.jsx)(X, {
                                label: (0, l.jsx)("div", {
                                    className: R()((null == t ? void 0 : t.total_profit) && {
                                        [`${P}__profit--win`]: (null == t ? void 0 : t.total_profit) > 0,
                                        [`${P}__profit--loss`]: (null == t ? void 0 : t.total_profit) < 0
                                    }),
                                    "data-testid": "transaction_details_table_profit",
                                    children: Math.abs((null == t ? void 0 : t.total_profit) ? ? 0).toFixed(2)
                                })
                            }), (0, l.jsx)(X, {
                                label: r
                            })]
                        })]
                    })]
                })
            }
            let q = () => [{
                    key: "timestamp",
                    label: (0, A.NC)("Timestamp"),
                    extra_class: "--grow-big"
                }, {
                    key: "reference",
                    label: (0, A.NC)("Reference"),
                    extra_class: "--grow-mid"
                }, {
                    key: "market",
                    label: (0, A.NC)("Market")
                }, {
                    key: "contract_type",
                    label: (0, A.NC)("Trade type")
                }, {
                    key: "entry_tick",
                    label: (0, A.NC)("Entry spot")
                }, {
                    key: "exit_tick",
                    label: (0, A.NC)("Exit spot")
                }, {
                    key: "buy_price",
                    label: (0, A.NC)("Buy price")
                }, {
                    key: "profit",
                    label: (0, A.NC)("Profit/Loss")
                }],
                Y = () => [{
                    key: "account",
                    label: (0, A.NC)("Account"),
                    extra_class: "--grow-mid"
                }, {
                    key: "no_of_runs",
                    label: (0, A.NC)("No. of runs")
                }, {
                    key: "total_stake",
                    label: (0, A.NC)("Total stake")
                }, {
                    key: "total_payout",
                    label: (0, A.NC)("Total payout")
                }, {
                    key: "win",
                    label: (0, A.NC)("Win")
                }, {
                    key: "loss",
                    label: (0, A.NC)("Loss")
                }, {
                    key: "total_profit",
                    label: (0, A.NC)("Total profit/loss")
                }, {
                    key: "balance",
                    label: (0, A.NC)("Balance")
                }],
                W = (0, r.Pi)(() => {
                    let {
                        client: e
                    } = (0, p.oR)(), {
                        loginid: t,
                        balance: a
                    } = e, {
                        transactions: s
                    } = (0, p.oR)(), {
                        toggleTransactionDetailsModal: n,
                        is_transaction_details_modal_open: r,
                        transactions: o
                    } = s, {
                        statistics: d
                    } = s;
                    return (0, l.jsx)(i.Fragment, {
                        children: r && (0, l.jsx)(S, {
                            boundary: ".main",
                            header: (0, A.NC)("Transactions detailed summary"),
                            onClose: () => n(!1),
                            modalWidth: 882,
                            modalHeight: 404,
                            minWidth: 882,
                            minHeight: 404,
                            enableResizing: !0,
                            children: (0, l.jsx)(G, {
                                transaction_columns: q(),
                                transactions: o,
                                result_columns: Y(),
                                result: d,
                                account: t ? ? "",
                                balance: a ? ? 0
                            })
                        })
                    })
                });
            var K = a("45452"),
                J = a("80177"),
                Q = a("64010"),
                ee = a("44810"),
                et = a("30328"),
                ea = a("43882");
            let es = i.memo(e => {
                var t, a;
                let {
                    className: s,
                    column: n,
                    is_footer: i,
                    passthrough: r,
                    row: o
                } = e;
                if (!n) return null;
                let {
                    col_index: d,
                    title: c
                } = n, _ = null == o ? void 0 : o[d], u = (0, x.MOe)(null == o ? void 0 : null === (t = o.contract_info) || void 0 === t ? void 0 : t.contract_type), m = (0, x.Yeo)(null == o ? void 0 : null === (a = o.contract_info) || void 0 === a ? void 0 : a.contract_type);
                return (0, l.jsxs)("div", {
                    className: R()(s, n.col_index),
                    children: [!i && (0, l.jsx)("div", {
                        className: R()(`${n.col_index}__row-title`, "data-list__row-title"),
                        children: n.renderHeader ? n.renderHeader({
                            title: c,
                            is_vanilla: m
                        }) : c
                    }), (0, l.jsx)("div", {
                        className: "data-list__row-content",
                        children: n.renderCellContent ? n.renderCellContent({
                            cell_value: _,
                            is_footer: i,
                            passthrough: r,
                            row_obj: o,
                            is_vanilla: m,
                            is_turbos: u
                        }) : _
                    })]
                })
            });
            var en = a("79655"),
                el = a("89471");
            let ei = (e, t) => {
                    let a = i.useMemo(() => f()(e, t), []);
                    return i.useEffect(() => a.cancel, []), a
                },
                er = i.memo(e => {
                    let {
                        action_desc: t,
                        destination_link: a,
                        row_gap: s,
                        row_key: n,
                        rowRenderer: r,
                        measure: o,
                        is_dynamic_height: d,
                        ...c
                    } = e, [_, u] = i.useState(!1), m = (0, el.tm)(), h = ei(() => u(!1), 5e3), p = () => {
                        t && (u(!_), h())
                    }, j = e => {
                        (0, x.K9$)(p, e)
                    };
                    return i.useEffect(() => {
                        m() && d && (null == o || o())
                    }, [_, d, o]), (0, l.jsx)("div", {
                        className: "data-list__row--wrapper",
                        style: {
                            paddingBottom: `${s||0}px`
                        },
                        children: a ? (0, l.jsx)(en.OL, {
                            className: "data-list__item--wrapper",
                            id: `dt_reports_contract_${n}`,
                            to: {
                                pathname: a,
                                state: {
                                    from_table_row: !0
                                }
                            },
                            children: (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        }) : (0, l.jsx)("div", {
                            className: R()("data-list__item--wrapper", {
                                "data-list__item--dynamic-height-wrapper": d
                            }),
                            children: t ? (0, l.jsx)("div", {
                                className: "data-list__item",
                                onClick: j,
                                onKeyDown: j,
                                children: _ ? (0, l.jsx)("div", {
                                    className: "data-list__desc--wrapper",
                                    children: t.component && (0, l.jsx)("div", {
                                        children: t.component
                                    })
                                }) : r({
                                    measure: o,
                                    ...c
                                })
                            }) : (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        })
                    })
                }),
                eo = et.aV,
                ed = et.qj,
                ec = et.Z8,
                e_ = i.memo(e => {
                    let {
                        children: t,
                        className: a,
                        data_source: s,
                        footer: n,
                        getRowSize: r,
                        keyMapper: o,
                        onRowsRendered: d,
                        onScroll: c,
                        setListRef: _,
                        overscanRowCount: u,
                        ...m
                    } = e, [h, p] = i.useState(!0), [j, v] = i.useState(!1), [b, y] = i.useState(0), g = i.useRef(), f = i.useRef(null), N = i.useRef({}), C = i.useRef(null);
                    C.current = s;
                    let w = !r,
                        k = i.useCallback(() => {
                            s.forEach((e, t) => {
                                let a = (null == o ? void 0 : o(e)) || `${t}-0`;
                                N.current[a] = !0
                            })
                        }, [s, o]);
                    i.useEffect(() => {
                        w && (g.current = new et.t1({
                            fixedWidth: !0,
                            keyMapper: e => (null == C ? void 0 : C.current) && e < (null == C ? void 0 : C.current.length) && (null == o ? void 0 : o(C.current[e])) || e
                        })), k(), p(!1)
                    }, []), i.useEffect(() => {
                        if (w) {
                            var e, t;
                            null === (t = f.current) || void 0 === t || null === (e = t.recomputeGridSize) || void 0 === e || e.call(t, {
                                columnIndex: 0,
                                rowIndex: 0
                            })
                        }
                        k()
                    }, [s, w, k]);
                    let T = e => {
                            let {
                                style: t,
                                index: a,
                                key: n,
                                parent: i
                            } = e, {
                                getRowAction: r,
                                passthrough: d,
                                row_gap: c
                            } = m, _ = s[a], {
                                action_type: u,
                                shortcode: h,
                                purchase_time: p,
                                transaction_time: v,
                                id: b
                            } = _;
                            if ((0, x.JIr)(u, h, p || v)) {
                                let e = !!(null == s ? void 0 : s.find(e => "sell" === e.action_type && e.id === b));
                                _ = { ..._,
                                    is_sold: e
                                }
                            }
                            let y = r && r(_),
                                f = "string" == typeof y ? y : void 0,
                                C = "object" == typeof y ? y : void 0,
                                k = (null == o ? void 0 : o(_)) || n,
                                T = function() {
                                    let {
                                        measure: e
                                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (0, l.jsx)(er, {
                                        action_desc: C,
                                        destination_link: f,
                                        is_new_row: !N.current[k],
                                        is_scrolling: j,
                                        measure: e,
                                        passthrough: d,
                                        row_gap: c,
                                        row_key: k,
                                        row: _,
                                        rowRenderer: m.rowRenderer,
                                        is_dynamic_height: w
                                    })
                                };
                            return w && g.current ? (0, l.jsx)(ec, {
                                cache: g.current,
                                columnIndex: 0,
                                rowIndex: a,
                                parent: i,
                                children: e => {
                                    let {
                                        measure: a
                                    } = e;
                                    return (0, l.jsx)("div", {
                                        style: t,
                                        children: T({
                                            measure: a
                                        })
                                    })
                                }
                            }, k) : (0, l.jsx)("div", {
                                style: t,
                                children: T()
                            }, k)
                        },
                        E = e => {
                            let t;
                            clearTimeout(t), !j && v(!0), t = setTimeout(() => {
                                !h && v(!1)
                            }, 200), y(e.target.scrollTop), "function" == typeof c && c(e)
                        },
                        S = e => {
                            f.current = e, null == _ || _(e)
                        };
                    return h ? (0, l.jsx)("div", {}) : (0, l.jsxs)("div", {
                        "data-testid": "dt_data_list",
                        className: R()(a, "data-list", {
                            [`${a}__data-list`]: a
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "data-list__body-wrapper",
                            children: [(0, l.jsx)("div", {
                                className: R()("data-list__body", {
                                    [`${a}__data-list-body`]: a
                                }),
                                children: (0, l.jsx)(ed, {
                                    children: e => {
                                        var t, n;
                                        let {
                                            width: i,
                                            height: o
                                        } = e;
                                        return (0, l.jsx)(ee.Z, {
                                            style: {
                                                height: o,
                                                width: i
                                            },
                                            children: (0, l.jsx)(ea.Z, {
                                                onScroll: E,
                                                autohide: !0,
                                                is_bypassed: (0, x.tqC)(),
                                                children: (0, l.jsx)(eo, {
                                                    className: a,
                                                    deferredMeasurementCache: null == g ? void 0 : g.current,
                                                    height: o,
                                                    onRowsRendered: d,
                                                    overscanRowCount: u || 1,
                                                    ref: e => S(e),
                                                    rowCount: s.length,
                                                    rowHeight: w && (null == g ? void 0 : null === (t = g.current) || void 0 === t ? void 0 : t.rowHeight) ? null == g ? void 0 : null === (n = g.current) || void 0 === n ? void 0 : n.rowHeight : r || 0,
                                                    rowRenderer: T,
                                                    scrollingResetTimeInterval: 0,
                                                    width: i,
                                                    ...(0, x.nIE)() ? {
                                                        scrollTop: b,
                                                        autoHeight: !0
                                                    } : {
                                                        onScroll: e => E({
                                                            target: e
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }), t]
                        }), n && (0, l.jsx)("div", {
                            className: R()("data-list__footer", {
                                [`${a}__data-list-footer`]: a
                            }),
                            children: (0, l.jsx)(i.Fragment, {
                                children: m.rowRenderer({
                                    row: n,
                                    is_footer: !0
                                })
                            })
                        })]
                    })
                });
            e_.displayName = "DataList", e_.Cell = es;
            let eu = e => {
                let {
                    date: t,
                    time: a
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", {
                        className: "journal__text-date",
                        children: t
                    }), " | ", (0, l.jsx)("span", {
                        className: "journal__text-time",
                        children: a
                    })]
                })
            };
            var em = a("1051"),
                ex = a("75544");
            let eh = i.forwardRef((e, t) => {
                let {
                    className: a,
                    classNameLabel: s,
                    disabled: n = !1,
                    id: r,
                    label: o,
                    label_font_size: d = "xs",
                    label_lineHeight: c = "unset",
                    defaultChecked: _,
                    onChange: u,
                    value: m = !1,
                    withTabIndex: x = 0,
                    greyDisabled: h = !1,
                    has_error: p = !1,
                    ...j
                } = e, [v, b] = i.useState(_ || m);
                return i.useEffect(() => {
                    b(_ || m)
                }, [m, _]), (0, l.jsxs)("label", {
                    htmlFor: r,
                    onClick: e => e.stopPropagation(),
                    className: R()("dc-checkbox", a, {
                        "dc-checkbox--disabled": n
                    }),
                    children: [(0, l.jsxs)("span", {
                        children: [(0, l.jsx)("input", {
                            className: "dc-checkbox__input",
                            type: "checkbox",
                            id: r,
                            ref: t,
                            disabled: n,
                            onChange: e => {
                                e.persist(), b(!v), null == u || u(e)
                            },
                            checked: v,
                            ...j
                        }), (0, l.jsx)("span", {
                            className: R()("dc-checkbox__box", {
                                "dc-checkbox__box--active": v,
                                "dc-checkbox__box--disabled": n,
                                "dc-checkbox--grey-disabled": n && h
                            }),
                            tabIndex: x,
                            onKeyDown: e => {
                                !n && ("Enter" === e.key || 32 === e.keyCode) && (null == u || u(e), b(!v))
                            },
                            children: !!v && (0, l.jsx)(ex.Z, {})
                        })]
                    }), (0, l.jsx)(K.Z, {
                        size: d,
                        lineHeight: c,
                        className: R()("dc-checkbox__label", s, {
                            "dc-checkbox__label--error": p
                        }),
                        children: o
                    })]
                })
            });
            eh.displayName = "Checkbox";
            let ep = e => {
                    let {
                        wrapper_ref: t,
                        checked_filters: a,
                        filters: s,
                        filterMessage: n,
                        className: i
                    } = e;
                    return (0, l.jsx)("div", {
                        ref: t,
                        className: i,
                        children: s.map(e => {
                            let t = Array.isArray(a) && a.includes(e.id);
                            return (0, l.jsx)(eh, {
                                checked: t,
                                label: e.label,
                                onChange: () => n(!t, e.id),
                                name: e.id,
                                defaultChecked: t
                            }, e.id)
                        })
                    })
                },
                ej = e => {
                    let {
                        toggle_ref: t,
                        checked_filters: a,
                        filters: s,
                        filterMessage: n,
                        is_filter_dialog_visible: r,
                        toggleFilterDialog: o
                    } = e, d = i.useRef(null);
                    return (0, em.t)(d, o, e => {
                        var a;
                        return r && !(null === (a = t.current) || void 0 === a ? void 0 : a.contains(e.target))
                    }), (0, l.jsx)(ep, {
                        wrapper_ref: d,
                        checked_filters: a,
                        filters: s,
                        filterMessage: n,
                        className: "filter-dialog"
                    })
                },
                ev = e => {
                    let {
                        logType: t,
                        className: a,
                        extra: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: R()("journal__text", a),
                        children: (() => {
                            switch (t) {
                                case D.LogTypes.LOAD_BLOCK:
                                    return (0, A.NC)("Blocks are loaded successfully");
                                case D.LogTypes.NOT_OFFERED:
                                    return (0, A.NC)("Resale of this contract is not offered.");
                                case D.LogTypes.PURCHASE:
                                    {
                                        let {
                                            longcode: e,
                                            transaction_id: t
                                        } = s;
                                        return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "<0>Bought</0>: {{longcode}} (ID: {{transaction_id}})",
                                            values: {
                                                longcode: e,
                                                transaction_id: t
                                            },
                                            components: [(0, l.jsx)(K.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-info)"
                                                }
                                            }, 0)],
                                            options: {
                                                interpolation: {
                                                    escapeValue: !1
                                                }
                                            }
                                        })
                                    }
                                case D.LogTypes.SELL:
                                    {
                                        let {
                                            sold_for: e
                                        } = s;
                                        return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "<0>Sold for</0>: {{sold_for}}",
                                            values: {
                                                sold_for: e
                                            },
                                            components: [(0, l.jsx)(K.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-warning)"
                                                }
                                            }, 0)]
                                        })
                                    }
                                case D.LogTypes.PROFIT:
                                    {
                                        let {
                                            currency: e,
                                            profit: t
                                        } = s;
                                        return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Profit amount: <0>{{profit}}</0>",
                                            values: {
                                                profit: `${(0,x.lby)(e,t,!0)} ${(0,x.O$T)(e)}`
                                            },
                                            components: [(0, l.jsx)(K.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-success)"
                                                }
                                            }, 0)]
                                        })
                                    }
                                case D.LogTypes.LOST:
                                    {
                                        let {
                                            currency: e,
                                            profit: t
                                        } = s;
                                        return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Loss amount: <0>{{profit}}</0>",
                                            values: {
                                                profit: `${(0,x.lby)(e,t,!0)} ${(0,x.O$T)(e)}`
                                            },
                                            components: [(0, l.jsx)(K.Z, {
                                                size: "xxs",
                                                styles: {
                                                    color: "var(--status-danger)"
                                                }
                                            }, 0)]
                                        })
                                    }
                                case D.LogTypes.WELCOME_BACK:
                                    {
                                        let {
                                            current_currency: e
                                        } = s;
                                        if (e) return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Welcome back! Your messages have been restored. You are using your {{current_currency}} account.",
                                            values: {
                                                current_currency: e
                                            }
                                        });
                                        return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Welcome back! Your messages have been restored."
                                        })
                                    }
                                case D.LogTypes.WELCOME:
                                    {
                                        let {
                                            current_currency: e
                                        } = s;
                                        if (e) return (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "You are using your {{current_currency}} account.",
                                            values: {
                                                current_currency: e
                                            }
                                        });
                                        break
                                    }
                                default:
                                    return null
                            }
                        })()
                    })
                },
                eb = (e, t, a, s, n) => {
                    switch (t) {
                        case D.MessageTypes.SUCCESS:
                            return (0, l.jsx)(ev, {
                                logType: e,
                                extra: s,
                                className: a
                            });
                        case D.MessageTypes.NOTIFY:
                            if ("function" == typeof e) return (0, l.jsx)("div", {
                                className: R()("journal__text", a),
                                children: e(n)
                            });
                            return (0, l.jsx)("div", {
                                className: R()("journal__text", a),
                                children: e
                            });
                        case D.MessageTypes.ERROR:
                            return (0, l.jsx)("div", {
                                className: "journal__text--error journal__text",
                                children: e
                            });
                        default:
                            return null
                    }
                },
                ey = e => {
                    let {
                        row: t,
                        measure: a
                    } = e, {
                        date: s,
                        time: n,
                        message: i,
                        message_type: r,
                        className: o,
                        extra: d
                    } = t, c = eu({
                        date: s,
                        time: n
                    });
                    return (0, l.jsx)("div", {
                        children: (0, l.jsx)("div", {
                            className: "list__animation",
                            "data-testid": "mock-css-transition",
                            children: (0, l.jsxs)("div", {
                                className: "journal__item",
                                dir: (0, L.rK)() ? "rtl" : "ltr",
                                children: [(0, l.jsx)("div", {
                                    className: "journal__item-content",
                                    children: eb(i, r, o, d, a)
                                }), (0, l.jsx)("div", {
                                    className: "journal__text-datetime",
                                    children: c
                                })]
                            })
                        })
                    })
                },
                eg = e => {
                    let {
                        is_mobile: t
                    } = e;
                    return (0, l.jsxs)(M.ZP, {
                        className: R()("journal__loader", {
                            "journal__loader--mobile": t
                        }),
                        speed: 3,
                        width: 350,
                        height: 92,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: [(0, l.jsx)("rect", {
                            x: "15",
                            y: "15",
                            rx: "5",
                            ry: "5",
                            width: "320",
                            height: "40"
                        }), (0, l.jsx)("rect", {
                            x: "15",
                            y: "60",
                            rx: "5",
                            ry: "5",
                            width: "180",
                            height: "7"
                        })]
                    })
                };
            var ef = a("81262");
            let eN = () => {
                    let e = new Date,
                        t = e.getUTCFullYear(),
                        a = (e.getUTCMonth() + 1).toString().padStart(2, "0"),
                        s = e.getUTCDate().toString().padStart(2, "0"),
                        n = e.getUTCHours().toString().padStart(2, "0"),
                        l = e.getUTCMinutes().toString().padStart(2, "0"),
                        i = e.getUTCSeconds().toString().padStart(2, "0");
                    return `${t}-${a}-${s} ${n}${l}${i}`
                },
                eC = (e, t) => {
                    let {
                        profit: a,
                        sold_for: s,
                        longcode: n,
                        transaction_id: l,
                        current_currency: i
                    } = t;
                    switch (e) {
                        case D.LogTypes.LOAD_BLOCK:
                            return (0, A.NC)("Blocks are loaded successfully");
                        case D.LogTypes.NOT_OFFERED:
                            return (0, A.NC)("Resale of this contract is not offered.");
                        case D.LogTypes.PURCHASE:
                            return (0, A.NC)("Bought: {{longcode}} (ID: {{transaction_id}})", {
                                longcode: n,
                                transaction_id: l
                            });
                        case D.LogTypes.SELL:
                            return (0, A.NC)("Sold for: {{sold_for}}", {
                                sold_for: s
                            });
                        case D.LogTypes.PROFIT:
                            return (0, A.NC)("Profit amount: {{profit}}", {
                                profit: a
                            });
                        case D.LogTypes.LOST:
                            return (0, A.NC)("Loss amount: {{profit}}", {
                                profit: a
                            });
                        case D.LogTypes.WELCOME_BACK:
                            if (i) return (0, A.NC)("Welcome back! Your messages have been restored. You are using your {{current_currency}} account.", {
                                current_currency: i
                            });
                            return (0, A.NC)("Welcome back! Your messages have been restored.");
                        case D.LogTypes.WELCOME:
                            if (i) return (0, A.NC)("You are using your {{current_currency}} account.", {
                                current_currency: i
                            });
                            break;
                        default:
                            return ""
                    }
                },
                ew = (e, t) => {
                    let a = encodeURI(`data:text/csv;charset=utf-8, ${t}`),
                        s = document.createElement("a");
                    s.setAttribute("href", a), s.setAttribute("download", `${e} ${eN()}.csv`), document.body.appendChild(s), s.click();
                    let n = s.parentNode;
                    n && s && (null == n ? void 0 : n.contains(s)) && (null == n || n.removeChild(s))
                };
            var ek = a("8015");
            let eT = (0, r.Pi)(e => {
                let t, a, {
                        tab: s
                    } = e,
                    {
                        run_panel: n,
                        transactions: i,
                        journal: r
                    } = (0, p.oR)(),
                    {
                        is_clear_stat_disabled: o,
                        is_running: d
                    } = n,
                    {
                        filtered_messages: c
                    } = r,
                    {
                        transactions: _
                    } = i,
                    u = !1;
                return "transactions" === s ? (t = () => {
                    let e = [
                        [(0, A.NC)("Market"), (0, A.NC)("Reference ID (buy)"), (0, A.NC)("Reference ID (sell)"), (0, A.NC)("Barrier"), (0, A.NC)("Start Time"), (0, A.NC)("Entry Spot"), (0, A.NC)("Entry Spot Time"), (0, A.NC)("Exit Spot"), (0, A.NC)("Exit Spot Time"), (0, A.NC)("Buy Price"), (0, A.NC)("Profit/Loss")]
                    ];
                    _.forEach(t => {
                        let {
                            data: a
                        } = t;
                        "string" != typeof a && e.push([a.display_name, a.transaction_ids.buy, a.transaction_ids.sell, a.barrier, a.date_start, a.entry_tick, a.entry_tick_time, a.exit_tick, a.exit_tick_time, a.buy_price, a.profit])
                    });
                    let t = e.map(e => e.join(",")).join("\n");
                    ew((0, A.NC)("Transactions"), t)
                }, u = !_.length || d, a = (0, A.NC)("Download your transaction history."), !_.length && (a = (0, A.NC)("No transaction or activity yet."))) : "journal" === s && (t = () => {
                    let e = [
                        [(0, A.NC)("Date"), (0, A.NC)("Time"), (0, A.NC)("Message")]
                    ];
                    c.map(t => {
                        let a;
                        a = "success" !== t.message_type ? JSON.stringify(t.message) : eC(t.message.toString(), t.extra);
                        let s = [t.date, t.time, null == a ? void 0 : a.replace("&#x2F;", "/")];
                        e.push(s)
                    });
                    let t = e.map(e => e.join(",")).join("\n");
                    ew((0, A.NC)("Journal"), t)
                }, a = (0, A.NC)("Download your journal."), (u = o) && (a = (0, A.NC)("No transaction or activity yet."))), d && (a = (0, A.NC)("Download is unavailable while your bot is running.")), (0, l.jsx)(B.Z, {
                    className: "run-panel__info",
                    classNameBubble: "run-panel__info--bubble",
                    alignment: "bottom",
                    message: a,
                    zIndex: "5",
                    children: (0, l.jsx)(ek.Z, {
                        id: "download-button",
                        disabled: u,
                        className: "download__button",
                        onClick: t,
                        secondary: !0,
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Download"
                        })
                    })
                })
            });
            var eE = a("29643");
            let eS = e => {
                    let {
                        checked_filters: t,
                        filters: a,
                        filterMessage: s,
                        is_filter_dialog_visible: n,
                        toggleFilterDialog: r
                    } = e, o = i.useRef(null);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "journal-tools__container",
                            children: [(0, l.jsx)(eT, {
                                tab: "journal"
                            }), (0, l.jsxs)("div", {
                                ref: o,
                                className: "journal-tools__container-filter",
                                onClick: r,
                                children: [(0, l.jsx)(K.Z, {
                                    size: "xs",
                                    className: "journal-tools__container-filter--label",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Filters"
                                    })
                                }), (0, l.jsx)(eE.Z, {
                                    height: "16px",
                                    width: "16px",
                                    fill: "var(--text-general)"
                                })]
                            })]
                        }), (0, l.jsx)(ef.Z, { in: n,
                            classNames: {
                                enter: "filter-dialog--enter",
                                enterDone: "filter-dialog--enter-done",
                                exit: "filter-dialog--exit"
                            },
                            timeout: 150,
                            unmountOnExit: !0,
                            children: (0, l.jsx)(ej, {
                                toggle_ref: o,
                                checked_filters: t,
                                filters: a,
                                filterMessage: s,
                                is_filter_dialog_visible: n,
                                toggleFilterDialog: r
                            })
                        })]
                    })
                },
                eA = (0, r.Pi)(() => {
                    let {
                        journal: e,
                        run_panel: t
                    } = (0, p.oR)(), {
                        checked_filters: a,
                        filterMessage: s,
                        filters: n,
                        filtered_messages: i,
                        is_filter_dialog_visible: r,
                        toggleFilterDialog: o,
                        unfiltered_messages: d
                    } = e, {
                        is_stop_button_visible: c,
                        contract_stage: _
                    } = t, u = Array.isArray(i) && i.length, m = Array.isArray(d) && d.length, {
                        isDesktop: x
                    } = (0, v.F)();
                    return (0, l.jsxs)("div", {
                        className: R()("journal run-panel-tab__content--no-stat", {
                            "run-panel-tab__content": x
                        }),
                        "data-testid": "dt_mock_journal",
                        children: [(0, l.jsx)(eS, {
                            checked_filters: a,
                            filters: n,
                            filterMessage: s,
                            is_filter_dialog_visible: r,
                            toggleFilterDialog: o
                        }), (0, l.jsx)("div", {
                            className: "journal__item-list",
                            children: u ? (0, l.jsx)(e_, {
                                className: "journal",
                                data_source: i,
                                rowRenderer: e => (0, l.jsx)(ey, { ...e
                                }),
                                keyMapper: e => e.unique_id
                            }) : (0, l.jsx)(l.Fragment, {
                                children: _ >= J.K.STARTING && Object.keys(a).length && !m && c ? (0, l.jsx)(eg, {
                                    is_mobile: !x
                                }) : (0, l.jsxs)("div", {
                                    className: "journal-empty",
                                    children: [(0, l.jsx)(Q.Z, {
                                        height: "64px",
                                        width: "64px",
                                        className: "journal-empty__icon icon-general-fill-g-path",
                                        color: "secondary",
                                        fill: "var(--text-general)"
                                    }), (0, l.jsx)(K.Z, {
                                        as: "h4",
                                        size: "xs",
                                        weight: "bold",
                                        align: "center",
                                        color: "less-prominent",
                                        lineHeight: "s",
                                        className: "journal-empty__header",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "There are no messages to display"
                                        })
                                    }), (0, l.jsxs)("div", {
                                        className: "journal-empty__message",
                                        children: [(0, l.jsx)(K.Z, {
                                            size: "xxs",
                                            color: "less-prominent",
                                            children: (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Here are the possible reasons:"
                                            })
                                        }), (0, l.jsxs)("ul", {
                                            className: "journal-empty__list",
                                            children: [(0, l.jsx)("li", {
                                                children: (0, l.jsx)(K.Z, {
                                                    size: "xxs",
                                                    color: "less-prominent",
                                                    children: (0, l.jsx)(A.Xx, {
                                                        i18n_default_text: "The bot is not running"
                                                    })
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(K.Z, {
                                                    size: "xxs",
                                                    color: "less-prominent",
                                                    children: (0, l.jsx)(A.Xx, {
                                                        i18n_default_text: "The stats are cleared"
                                                    })
                                                })
                                            }), (0, l.jsx)("li", {
                                                children: (0, l.jsx)(K.Z, {
                                                    size: "xxs",
                                                    color: "less-prominent",
                                                    children: (0, l.jsx)(A.Xx, {
                                                        i18n_default_text: "All messages are filtered out"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    })
                });
            var eI = a("29747"),
                eR = a("45697"),
                eM = a.n(eR),
                eO = a("24335"),
                eD = a("97050"),
                eL = a("75097");
            let eU = {
                    initial: {
                        y: -50,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 250,
                        delay: .3
                    }
                },
                eZ = {
                    initial: {
                        y: 50,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: .25,
                        delay: .3
                    }
                },
                eB = {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .3
                    }
                },
                eF = e => {
                    let {
                        children: t,
                        className: a,
                        is_visible: s,
                        keyname: n,
                        type: i
                    } = e;
                    return "top" === i ? (0, l.jsx)(l.Fragment, {
                        children: s && (0, l.jsx)(eL.E.div, {
                            animate: eU.animate,
                            initial: eU.initial,
                            transition: eU.transition,
                            className: a,
                            children: t
                        }, n)
                    }) : "bottom" === i ? (0, l.jsx)(l.Fragment, {
                        children: s && (0, l.jsx)(eL.E.div, {
                            animate: eZ.animate,
                            initial: eZ.initial,
                            transition: eZ.transition,
                            className: a,
                            children: t
                        }, n)
                    }) : (0, l.jsx)(l.Fragment, {
                        children: s && (0, l.jsx)(eL.E.div, {
                            animate: eB.animate,
                            initial: eB.initial,
                            transition: eB.transition,
                            className: a,
                            children: t
                        }, n)
                    })
                },
                ez = a("45927").Z,
                eP = e => {
                    let {
                        children: t,
                        has_footer: a
                    } = e;
                    return a ? (0, l.jsx)("div", {
                        className: "dc-input__wrapper",
                        children: t
                    }) : (0, l.jsx)(i.Fragment, {
                        children: t
                    })
                },
                eX = i.forwardRef((e, t) => {
                    let {
                        bottom_label: a,
                        className: s,
                        classNameError: n,
                        classNameHint: r,
                        classNameWarn: o,
                        disabled: d = !1,
                        error: c,
                        field_className: _,
                        has_character_counter: u,
                        hint: m,
                        initial_character_count: x,
                        input_id: h,
                        is_relative_hint: p,
                        label_className: j,
                        label: v,
                        leading_icon: b,
                        max_characters: y,
                        trailing_icon: g,
                        warn: f,
                        data_testId: N,
                        maxLength: C,
                        placeholder: w,
                        ...k
                    } = e, [T, E] = i.useState(0);
                    i.useEffect(() => {
                        (x || 0 === x) && E(x)
                    }, [x]);
                    let S = e => {
                            var t, a, s;
                            let n = e.target.value;
                            if ("number" === e.target.type || (null === (t = e.target.name) || void 0 === t ? void 0 : t.includes("amount")) || (null === (a = e.target.name) || void 0 === a ? void 0 : a.includes("count"))) {
                                if ("tick_count" === e.target.name) {
                                    let e = n.indexOf("."); - 1 !== e && (n = n.substring(0, e))
                                } else {
                                    let e = n.indexOf("."); - 1 !== e && n.substring(e + 1).length > 2 && (n = n.substring(0, e + 3))
                                }
                            }
                            E(n.length), e.target.value = n, null === (s = k.onChange) || void 0 === s || s.call(k, e)
                        },
                        A = !!u || !!m && !!p,
                        I = v ? "" : w;
                    return (0, l.jsxs)(eP, {
                        has_footer: A,
                        children: [(0, l.jsxs)("div", {
                            className: R()("dc-input", s, {
                                "dc-input--disabled": d,
                                "dc-input--error": c,
                                "dc-input--hint": m,
                                "dc-input--bottom-label-active": a
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: R()("dc-input__container", {
                                    "dc-input__container--disabled": d,
                                    "dc-input__container--error": c
                                }),
                                children: [b && i.cloneElement(b, {
                                    className: R()("dc-input__leading-icon", b.props.className)
                                }), "textarea" === k.type ? (0, l.jsx)("textarea", {
                                    ref: t,
                                    "data-testid": N,
                                    ...k,
                                    className: R()("dc-input__field dc-input__textarea", {
                                        "dc-input__field--placeholder-visible": !v && w
                                    }),
                                    onChange: S,
                                    disabled: d,
                                    id: h,
                                    maxLength: C,
                                    placeholder: I
                                }) : (0, l.jsx)("input", {
                                    ref: t,
                                    "data-testid": N,
                                    ...k,
                                    className: R()("dc-input__field", _, {
                                        "dc-input__field--placeholder-visible": !v && w
                                    }),
                                    onFocus: k.onFocus,
                                    onBlur: k.onBlur,
                                    onChange: S,
                                    onKeyDown: k.onKeyDown,
                                    onMouseDown: k.onMouseDown,
                                    onMouseUp: k.onMouseUp,
                                    onPaste: k.onPaste,
                                    disabled: d,
                                    "data-lpignore": "password" !== k.type || void 0,
                                    id: h,
                                    "aria-label": v,
                                    maxLength: C,
                                    placeholder: I
                                }), g && i.cloneElement(g, {
                                    className: R()("dc-input__trailing-icon", g.props.className)
                                }), v && (0, l.jsx)("label", {
                                    className: R()("dc-input__label", j),
                                    htmlFor: k.id,
                                    children: v
                                })]
                            }), (0, l.jsx)("div", {
                                children: !A && (0, l.jsxs)(i.Fragment, {
                                    children: [c && (0, l.jsx)(ez, {
                                        className: n,
                                        message: c,
                                        type: "error"
                                    }), f && (0, l.jsx)(ez, {
                                        className: o,
                                        message: f,
                                        type: "warn"
                                    }), !c && m && !p && (0, l.jsx)("div", {
                                        className: "dc-input__hint",
                                        children: (0, l.jsx)(K.Z, {
                                            as: "p",
                                            color: "less-prominent",
                                            size: "xs",
                                            className: r,
                                            children: m
                                        })
                                    })]
                                })
                            })]
                        }), A && (0, l.jsxs)("div", {
                            className: "dc-input__footer",
                            children: [c && (0, l.jsx)(ez, {
                                className: n,
                                message: c,
                                type: "error"
                            }), f && (0, l.jsx)(ez, {
                                className: o,
                                message: f,
                                type: "warn"
                            }), !c && m && (0, l.jsx)("div", {
                                className: "dc-input__hint dc-input__hint--relative",
                                children: (0, l.jsx)(K.Z, {
                                    color: "less-prominent",
                                    "line-height": "m",
                                    size: "xs",
                                    children: m
                                })
                            }), u && (0, l.jsx)("div", {
                                className: "dc-input__counter",
                                children: (0, l.jsxs)(K.Z, {
                                    color: "less-prominent",
                                    "line-height": "m",
                                    size: "xs",
                                    children: [T, y ? `/${y}` : ""]
                                })
                            })]
                        }), a && !c && (0, l.jsx)("div", {
                            className: "dc-input__bottom-label",
                            children: (0, l.jsx)(K.Z, {
                                size: "xs",
                                color: "less-prominent",
                                children: a
                            })
                        })]
                    })
                });
            eX.displayName = "Input";
            var eH = a("66163"),
                e$ = a("31784"),
                eV = a("73935"),
                eG = a("14117");
            let eq = e => {
                    let {
                        children: t,
                        header: a,
                        id: s,
                        is_from_app: n = !1,
                        is_open: r,
                        onClickClose: o,
                        portal_id: d,
                        header_classname: c,
                        has_return_icon: _,
                        onReturn: u
                    } = e, m = i.useRef(null), x = (0, l.jsxs)("div", {
                        ref: m,
                        id: s,
                        className: R()("dc-page-overlay", {
                            "dc-page-overlay-portal": !!d
                        }),
                        children: [a && (0, l.jsx)("div", {
                            className: R()("dc-page-overlay__header", {
                                "dc-page-app__header ": n
                            }),
                            children: (0, l.jsxs)("div", {
                                className: "dc-page-overlay__header-wrapper",
                                children: [(0, l.jsxs)("div", {
                                    className: R()("dc-page-overlay__header-title", c),
                                    children: [_ && (0, l.jsx)(eG.Z, {
                                        onClick: u,
                                        className: "dc-modal-header__icon"
                                    }), a]
                                }), !n && (0, l.jsx)("div", {
                                    "data-testid": "dt_page_overlay_header_close",
                                    className: "dc-page-overlay__header-close",
                                    onClick: o || window.history.back,
                                    children: (0, l.jsx)(N.Z, {
                                        height: "20px",
                                        width: "20px"
                                    })
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "dc-page-overlay__content",
                            children: t
                        })]
                    });
                    return d ? eV.createPortal((0, l.jsx)(ef.Z, {
                        appear: !0,
                        in: r,
                        timeout: 250,
                        classNames: {
                            appear: "dc-page-overlay--enter",
                            enter: "dc-page-overlay--enter",
                            enterDone: "dc-page-overlay--enter-done",
                            exit: "dc-page-overlay--exit"
                        },
                        unmountOnExit: !0,
                        children: x
                    }), document.getElementById(d)) : (0, l.jsx)(i.Fragment, {
                        children: x
                    })
                },
                eY = e => {
                    let [t, a] = i.useState(""), {
                        dashboard: s
                    } = (0, p.oR)(), {
                        is_onscreen_keyboard_active: n,
                        is_logged_in: r,
                        initial_values: o,
                        api_max_losses: d,
                        onRunButtonClick: c,
                        resetSelfExclusion: _,
                        updateSelfExclusion: u,
                        setRunLimit: m,
                        is_mobile: x
                    } = e, h = (null == s ? void 0 : s.active_tab) === eO.ve.AUTO_TRADES;
                    i.useEffect(() => {
                        !r && _()
                    });
                    let j = async e => {
                        if (e.form_max_losses !== d) {
                            let t = await u({
                                max_losses: e.form_max_losses
                            });
                            if (null == t ? void 0 : t.error) {
                                a((0, A.NC)(t.error.message));
                                return
                            }
                        }
                        m(e.run_limit), c()
                    };
                    return (0, l.jsx)("div", {
                        className: "db-self-exclusion",
                        children: (0, l.jsxs)("div", {
                            className: "db-self-exclusion__content",
                            children: [(0, l.jsx)("div", {
                                className: "db-self-exclusion__info",
                                children: (0, A.NC)("Enter limits to stop your bot from trading when any of these conditions are met.")
                            }), (0, l.jsx)(eI.J9, {
                                initialValues: o,
                                validate: e => {
                                    let t = {},
                                        s = /^\d+(\.\d+)?$/,
                                        n = /^\d+$/,
                                        l = (0, A.NC)("This field is required."),
                                        i = (0, A.NC)("Should be a valid number"),
                                        r = (0, A.NC)("Reached maximum number of digits"),
                                        o = (0, A.NC)("Reached maximum number of decimals"),
                                        c = (0, A.NC)("Please enter a number between 0 and {{api_max_losses}}.", {
                                            api_max_losses: d
                                        });
                                    return ["run_limit", "form_max_losses"].forEach(a => {
                                        !e[a] && (t[a] = l)
                                    }), ["run_limit", "form_max_losses"].forEach(a => {
                                        e[a] && (s.test(e[a]) ? +e[a] > 0x9184e729fff && (t[a] = r) : t[a] = i)
                                    }), ["run_limit"].forEach(a => {
                                        e[a] && !n.test(e[a]) && (t[a] = i)
                                    }), ["form_max_losses"].forEach(a => {
                                        let s = e[a].toString().split(".")[1];
                                        (s && s.length || 0) > 2 && (t[a] = o)
                                    }), ["form_max_losses"].forEach(s => {
                                        0 !== d && d !== e[s] && d < e[s] ? t[s] = c : a("")
                                    }), t
                                },
                                onSubmit: j,
                                children: e => {
                                    let {
                                        values: a,
                                        touched: s,
                                        errors: i,
                                        isValid: r,
                                        handleChange: o
                                    } = e;
                                    return (0, l.jsxs)(eI.l0, {
                                        children: [(0, l.jsx)("div", {
                                            className: "db-self-exclusion__form-group",
                                            children: (0, l.jsx)(eI.gN, {
                                                name: "form_max_losses",
                                                children: e => {
                                                    let {
                                                        field: n
                                                    } = e;
                                                    return (0, l.jsx)(eX, { ...n,
                                                        className: "db-self-exclusion__input",
                                                        type: "text",
                                                        label: (0, A.NC)("Daily loss limit"),
                                                        value: a.form_max_losses,
                                                        onChange: o,
                                                        error: t || s[n.name] && i[n.name],
                                                        hint: (0, A.NC)("Limits your potential losses for the day across all Deriv platforms.")
                                                    })
                                                }
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "db-self-exclusion__form-group",
                                            children: (0, l.jsx)(eI.gN, {
                                                name: "run_limit",
                                                children: e => {
                                                    let {
                                                        field: t
                                                    } = e;
                                                    return (0, l.jsx)(eX, { ...t,
                                                        className: "db-self-exclusion__input",
                                                        type: "text",
                                                        label: (0, A.NC)("Maximum consecutive trades"),
                                                        value: a.run_limit,
                                                        onChange: o,
                                                        error: s[t.name] && i.run_limit,
                                                        hint: (0, A.NC)("Maximum number of trades your bot will execute for this run.")
                                                    })
                                                }
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: R()("db-self-exclusion__footer", {
                                                "db-self-exclusion__footer--relative": x && n
                                            }),
                                            children: (0, l.jsxs)("div", {
                                                className: "db-self-exclusion__footer-btn-group",
                                                children: [(0, l.jsx)(ek.Z, {
                                                    large: !0,
                                                    text: (0, A.NC)("Cancel"),
                                                    onClick: _,
                                                    secondary: !0,
                                                    type: "button"
                                                }), !h && (0, l.jsx)(ek.Z, {
                                                    type: "submit",
                                                    large: !0,
                                                    text: (0, A.NC)("Apply and run"),
                                                    is_disabled: !r || !a.run_limit || !a.form_max_losses || "" !== t,
                                                    primary: !0
                                                })]
                                            })
                                        })]
                                    })
                                }
                            })]
                        })
                    })
                },
                eW = (0, r.Pi)(e => {
                    let {
                        onRunButtonClick: t
                    } = e, {
                        self_exclusion: a
                    } = (0, p.oR)(), {
                        ui: s,
                        client: n
                    } = (0, p.oR)(), {
                        is_restricted: i,
                        resetSelfExclusion: r,
                        initial_values: o,
                        api_max_losses: d,
                        run_limit: c,
                        setRunLimit: _
                    } = a, {
                        is_onscreen_keyboard_active: u
                    } = s, {
                        is_logged_in: m,
                        updateSelfExclusion: x,
                        virtual_account_loginid: h
                    } = n, {
                        isDesktop: j
                    } = (0, v.F)(), b = {
                        is_onscreen_keyboard_active: u,
                        is_logged_in: m,
                        initial_values: o,
                        api_max_losses: d,
                        onRunButtonClick: t,
                        resetSelfExclusion: r,
                        updateSelfExclusion: x,
                        setRunLimit: _,
                        virtual_account_loginid: h,
                        run_limit: c,
                        isDesktop: j
                    };
                    return (0, l.jsx)(l.Fragment, {
                        children: j ? (0, l.jsx)(e$.Z, {
                            is_open: i,
                            has_close_icon: !0,
                            width: "440px",
                            height: "374px",
                            toggleModal: r,
                            className: "db-self-exclusion__modal",
                            title: (0, A.NC)("Limits"),
                            children: (0, l.jsx)(eY, { ...b
                            })
                        }) : (0, l.jsx)(eF, {
                            is_visible: i,
                            className: "limits__wrapper",
                            keyname: "limitis__wrapper",
                            children: (0, l.jsx)(eq, {
                                header: (0, A.NC)("Limits"),
                                onClickClose: r,
                                children: (0, l.jsx)(eH.Z, {
                                    children: (0, l.jsx)(eD.Z, {
                                        className: "limits__wrapper--is-mobile",
                                        children: (0, l.jsx)(eY, { ...b
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            eW.propTypes = {
                onRunButtonClick: eM().func
            };
            var eK = a("65342"),
                eJ = a("51729");
            let eQ = e => {
                let {
                    anchor: t = "left",
                    children: a,
                    className: s,
                    contentClassName: n,
                    footer: r,
                    header: o,
                    width: d = 250,
                    zIndex: c = 4,
                    ..._
                } = e, [u, m] = i.useState(_.is_open), {
                    isDesktop: x
                } = (0, v.F)();
                return i.useEffect(() => {
                    m(_.is_open)
                }, [_.is_open]), (0, l.jsxs)("div", {
                    "data-testid": "drawer",
                    className: R()("dc-drawer", s, {
                        [`dc-drawer--${t}`]: x,
                        "dc-drawer--open": u
                    }),
                    style: {
                        zIndex: c,
                        transform: u && x ? "left" === t ? `translateX(calc(${d}px - 16px))` : `translateX(calc(-${d}px + 16px))` : void 0
                    },
                    children: [(0, l.jsx)("div", {
                        className: R()("dc-drawer__toggle", {
                            "dc-drawer__toggle--open": u
                        }),
                        onClick: () => {
                            m(!u), _.toggleDrawer && _.toggleDrawer(!u)
                        },
                        children: x ? (0, l.jsx)(eK.Z, {
                            className: R()("dc-drawer__toggle-icon", {
                                [`dc-drawer__toggle-icon--${t}`]: x
                            })
                        }) : (0, l.jsx)(eJ.Z, {
                            iconSize: "sm",
                            className: "dc-drawer__toggle-icon"
                        })
                    }), (0, l.jsxs)("div", {
                        className: R()("dc-drawer__container", {
                            [`dc-drawer__container--${t}`]: x
                        }),
                        children: [o && (0, l.jsx)("div", {
                            className: "dc-drawer__header",
                            children: o
                        }), (0, l.jsx)("div", {
                            className: R()("dc-drawer__content", n),
                            children: a
                        }), r && (0, l.jsx)("div", {
                            className: "dc-drawer__footer",
                            children: r
                        })]
                    })]
                })
            };
            var e0 = a("87537"),
                e1 = a("62873"),
                e3 = a("88817"),
                e8 = a("50220");
            let e5 = (0, A.NC)("Your bot is running and waiting for a signal to buy a contract."),
                e7 = () => (0, l.jsxs)("div", {
                    className: "db-contract-card-running-loader",
                    children: [(0, l.jsx)(e8.Z, {
                        id: "rotate-icon",
                        fontSize: 16,
                        fill: "var(--text-general)"
                    }), (0, l.jsx)(K.Z, {
                        color: "less-prominent",
                        lineHeight: "xs",
                        size: "xs",
                        weight: "bold",
                        align: "center",
                        className: "dc-contract-card-message",
                        children: e5
                    })]
                }),
                e2 = e => {
                    let {
                        speed: t = 3,
                        contract_stage: a
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: a === J.K.RUNNING ? (0, l.jsx)(e7, {}) : (0, l.jsxs)(M.ZP, {
                            height: 153,
                            width: 334,
                            speed: t,
                            backgroundColor: "var(--general-section-2)",
                            foregroundColor: "var(--general-hover)",
                            "data-testid": "contract-card-loader",
                            children: [(0, l.jsx)("rect", {
                                x: "12",
                                y: "15",
                                rx: "0",
                                ry: "0",
                                width: "41",
                                height: "25"
                            }), (0, l.jsx)("rect", {
                                x: "61",
                                y: "24",
                                rx: "0",
                                ry: "0",
                                width: "91",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "15",
                                rx: "0",
                                ry: "0",
                                width: "41",
                                height: "25"
                            }), (0, l.jsx)("rect", {
                                x: "229",
                                y: "24",
                                rx: "0",
                                ry: "0",
                                width: "91",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "48",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "64",
                                rx: "0",
                                ry: "0",
                                width: "308",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "80",
                                rx: "0",
                                ry: "0",
                                width: "308",
                                height: "1"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "89",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "105",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "121",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "12",
                                y: "137",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "89",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "105",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "121",
                                rx: "0",
                                ry: "0",
                                width: "140",
                                height: "8"
                            }), (0, l.jsx)("rect", {
                                x: "180",
                                y: "137",
                                rx: "0",
                                ry: "0",
                                width: "60",
                                height: "8"
                            })]
                        })
                    })
                };
            var e4 = a("91761"),
                e9 = a("48766"),
                e6 = a("54802"),
                te = a("23406");
            let tt = i.memo(e => {
                    let {
                        className: t,
                        value: a
                    } = e, [s, n] = i.useState(!1), [r, o] = i.useState({
                        icon: "",
                        previous_icon: ""
                    }), {
                        icon: d,
                        previous_icon: c,
                        previous_value: _
                    } = r, u = !isNaN(Number(r.value)) && !isNaN(Number(a)), m = i.useRef();
                    return i.useEffect(() => (n(!0), o(e => {
                        let t = Number(e.value) < Number(a) ? (0, l.jsx)(e6.Z, {
                            fill: "var(--text-profit-success)",
                            iconSize: "sm"
                        }) : (0, l.jsx)("div", {
                            style: {
                                position: "relative",
                                top: "-0.7rem"
                            },
                            children: (0, l.jsx)(te.Z, {
                                fill: "var(--text-loss-danger)",
                                iconSize: "sm"
                            })
                        });
                        return {
                            icon: u ? t : "",
                            previous_icon: e.icon,
                            previous_value: e.value,
                            value: a
                        }
                    }), clearTimeout(m.current), m.current = setTimeout(() => {
                        n(!1)
                    }, 3e3), () => clearTimeout(m.current)), [a]), (0, l.jsx)("div", {
                        className: t,
                        "data-testid": "dt_arrow_indicator",
                        children: u && s ? (0, l.jsx)("div", {
                            children: _ === Number(a) ? c : d
                        }) : null
                    })
                }),
                ta = e => {
                    let {
                        currency: t
                    } = e;
                    return (0, l.jsx)(K.Z, {
                        className: "dc-currency-badge",
                        color: "colored-background",
                        lineHeight: "unset",
                        size: "xxxs",
                        weight: "bold",
                        children: (0, x.O$T)(t)
                    })
                };
            var ts = a("73728");
            let tn = e => {
                    let {
                        className: t,
                        danger_limit: a = 20,
                        is_clockwise: s = !1,
                        progress: n = 0,
                        radius: i = 22,
                        stroke: r = 3,
                        warning_limit: o = 50
                    } = e, d = i - r / 2, c = 2 * d * Math.PI;
                    return (0, l.jsxs)("div", {
                        className: R()("dc-circular-progress", t),
                        children: [(0, l.jsx)("div", {
                            className: "dc-circular-progress__icon",
                            children: (0, l.jsx)(ts.Z, {
                                iconSize: "xs"
                            })
                        }), (0, l.jsx)("svg", {
                            height: 2 * i,
                            width: 2 * i,
                            children: (0, l.jsx)("circle", {
                                className: R()("dc-circular-progress__bar", {
                                    "dc-circular-progress--clockwise": s,
                                    "dc-circular-progress__bar--warning": n <= o && n > a,
                                    "dc-circular-progress__bar--danger": n <= a
                                }),
                                cx: i,
                                cy: i,
                                fill: "transparent",
                                r: d,
                                strokeDasharray: `${c} ${c}`,
                                strokeWidth: r,
                                style: {
                                    strokeDashoffset: c - n / 100 * c
                                }
                            })
                        })]
                    })
                },
                tl = e => {
                    let {
                        end_time: t,
                        format: a,
                        getCardLabels: s,
                        start_time: n
                    } = e;
                    if (!t || n.unix() > +t) return (0, l.jsx)(i.Fragment, {
                        children: ""
                    });
                    let {
                        days: r,
                        timestamp: o
                    } = (0, x.LUK)((0, x.QRc)(n.unix(), t), a), d = o;
                    r > 0 && (d = `${r} ${r>1?s().DAYS:s().DAY} ${o}`);
                    let c = /^00:00$/.test(d);
                    return (0, l.jsx)(i.Fragment, {
                        children: !c && (0, l.jsx)("div", {
                            className: "dc-remaining-time",
                            children: d
                        })
                    })
                },
                ti = e => {
                    let {
                        is_on: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: R()("dc-tick-progress__tick", {
                            "dc-tick-progress__tick--on": t
                        })
                    })
                },
                tr = e => {
                    let {
                        className: t,
                        rows: a = 2,
                        columns: s = 5,
                        size: n = 10,
                        value: i = 0
                    } = e;
                    return (0, l.jsx)("div", {
                        className: R()("dc-tick-progress", t),
                        style: {
                            gridTemplateRows: `repeat(${a}, 1fr)`,
                            gridTemplateColumns: `repeat(${s}, 1fr)`
                        },
                        children: Array(n).fill(null).map((e, t) => (0, l.jsx)(ti, {
                            is_on: t < Number(i)
                        }, t))
                    })
                },
                to = e => {
                    let {
                        current_tick: t,
                        getCardLabels: a,
                        ticks_count: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "dc-progress-slider__ticks",
                        children: [(0, l.jsxs)(K.Z, {
                            styles: {
                                lineHeight: "18px"
                            },
                            size: "xxs",
                            className: "dc-progress-slider__ticks-caption",
                            children: [a().TICK, " ", t]
                        }), (0, l.jsx)(tr, {
                            columns: 5,
                            rows: s > 5 ? 2 : 1,
                            size: s,
                            value: t
                        })]
                    })
                },
                td = e => {
                    let {
                        className: t,
                        current_tick: a,
                        getCardLabels: s,
                        is_loading: n,
                        start_time: r,
                        expiry_time: o,
                        server_time: d,
                        ticks_count: c
                    } = e, _ = (0, x.dq6)(d, Number(r), Number(o));
                    return (0, l.jsx)("div", {
                        className: R()("dc-progress-slider-mobile", t),
                        children: c ? (0, l.jsx)(to, {
                            current_tick: a,
                            getCardLabels: s,
                            ticks_count: c
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(K.Z, {
                                size: "xxs",
                                children: (0, l.jsx)(tl, {
                                    end_time: o,
                                    getCardLabels: s,
                                    start_time: d
                                })
                            }), n || _ < 1 ? (0, l.jsx)("div", {
                                className: "dc-progress-slider-mobile__infinite-loader",
                                children: (0, l.jsx)("div", {
                                    className: "dc-progress-slider-mobile__infinite-loader--indeterminate"
                                })
                            }) : (0, l.jsx)(tn, {
                                className: "dc-progress-slider-mobile__timer",
                                danger_limit: 20,
                                progress: _,
                                warning_limit: 50
                            })]
                        })
                    })
                };
            var tc = a("96672");
            let t_ = e => {
                    let {
                        getCardLabels: t,
                        is_contract_won: a
                    } = e;
                    return (0, l.jsxs)("span", {
                        className: R()("dc-result__caption", {
                            "dc-result__caption--won": a,
                            "dc-result__caption--lost": !a
                        }),
                        children: [(0, l.jsx)("div", {
                            className: "dc-result__icon",
                            children: (0, l.jsx)(tc.Z, {
                                iconSize: "sm",
                                fill: a ? "var(--text-profit-success)" : "var(--text-loss-danger)"
                            })
                        }), t().CLOSED]
                    })
                },
                tu = e => {
                    let {
                        className: t,
                        children: a,
                        header: s,
                        is_crypto: n,
                        is_loss: i,
                        is_won: r
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: R()("dc-contract-card-item", t),
                        children: [(0, l.jsx)("div", {
                            className: "dc-contract-card-item__header",
                            children: s
                        }), (0, l.jsx)("div", {
                            className: R()("dc-contract-card-item__body", {
                                "dc-contract-card-item__body--crypto": n,
                                "dc-contract-card-item__body--loss": i,
                                "dc-contract-card-item__body--profit": r
                            }),
                            children: a
                        })]
                    })
                };
            var tm = a("54996"),
                tx = a("94145");
            let th = i.forwardRef((e, t) => {
                let {
                    children: a,
                    is_visible: s,
                    left: n,
                    toggleDialog: i,
                    toggle_ref: r,
                    top: o
                } = e;
                (0, em.t)(t, i, e => {
                    var t;
                    return s && !(null == r ? void 0 : null === (t = r.current) || void 0 === t ? void 0 : t.contains(e.target))
                });
                let d = (0, l.jsx)(ef.Z, { in: s,
                        classNames: {
                            enter: "dc-contract-card-dialog--enter",
                            enterDone: "dc-contract-card-dialog--enter-done",
                            exit: "dc-contract-card-dialog--exit"
                        },
                        timeout: 150,
                        unmountOnExit: !0,
                        children: (0, l.jsx)("div", {
                            ref: t,
                            className: "dc-contract-card-dialog",
                            style: {
                                top: o,
                                left: `calc(${n}px + 32px)`
                            },
                            children: a
                        })
                    }),
                    c = document.getElementById("deriv_app");
                return eV.createPortal(d, c || document.body)
            });
            th.displayName = "ContractCardDialog";
            var tp = a("11527"),
                tj = a("86278"),
                tv = a("89606"),
                tb = a("14244");
            let ty = e => {
                    let {
                        alignment: t,
                        children: a,
                        className: s,
                        classNameIcon: n,
                        has_error: r,
                        icon: o,
                        message: d
                    } = e, [c, _] = (0, tj.X)(), u = R()(n, o);
                    return (0, l.jsxs)("span", {
                        className: R()(s, "dc-tooltip", {
                            "dc-tooltip--error": r
                        }),
                        "data-tooltip": d || void 0,
                        "data-tooltip-pos": t,
                        children: ["info" === o && (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(tb.Z, {
                                className: u,
                                ref: c
                            }), (0, l.jsx)(tb.Z, {
                                className: R()(`${n}-balloon-icon`, "dc-tooltip__balloon-icon", {
                                    "dc-tooltip__balloon-icon--show": _
                                })
                            })]
                        }), "question" === o && (0, l.jsx)(tv.J, {
                            icon: "IcUnknown",
                            className: u
                        }), "dot" === o && (0, l.jsx)(tv.J, {
                            icon: "IcCircle",
                            className: u,
                            size: 4
                        }), a]
                    })
                },
                tg = e => {
                    let {
                        decrementValue: t,
                        id: a,
                        incrementValue: s,
                        max_is_disabled: n,
                        min_is_disabled: r,
                        is_incrementable_on_long_press: o,
                        onLongPressEnd: d,
                        type: c
                    } = e, _ = i.useRef(), u = i.useRef(), m = i.useRef(!1), x = e => t => {
                        u.current = setTimeout(() => {
                            m.current = !0;
                            let a = 1;
                            e(t, 1), _.current = setInterval(() => {
                                e(t, ++a)
                            }, 50)
                        }, 300)
                    }, h = () => {
                        clearInterval(_.current), clearTimeout(u.current), d && m.current && d(), m.current = !1
                    }, p = e => o ? {
                        onContextMenu: e => e.preventDefault(),
                        onTouchStart: x(e),
                        onTouchEnd: h,
                        onMouseDown: x(e),
                        onMouseUp: h
                    } : {};
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(ek.Z, {
                            id: `${a}_add`,
                            className: R()("dc-input-wrapper__button dc-input-wrapper__button--increment", {
                                "dc-input-wrapper__button--disabled": !!n
                            }),
                            disabled: !!n,
                            onClick: s,
                            tabIndex: -1,
                            "aria-label": "Increment value",
                            type: c,
                            ...p(s),
                            children: (0, l.jsx)(tv.J, {
                                icon: "IcAdd",
                                className: "dc-input-wrapper__icon dc-input-wrapper__icon--plus",
                                color: n ? "disabled" : void 0
                            })
                        }), (0, l.jsx)(ek.Z, {
                            id: `${a}_sub`,
                            className: R()("dc-input-wrapper__button dc-input-wrapper__button--decrement", {
                                "dc-input-wrapper__button--disabled": !!r
                            }),
                            disabled: !!r,
                            onClick: t,
                            tabIndex: -1,
                            "aria-label": "Decrement value",
                            type: c,
                            ...p(t),
                            children: (0, l.jsx)(tv.J, {
                                icon: "IcMinus",
                                className: "dc-input-wrapper__icon dc-input-wrapper__icon--minus",
                                color: r ? "disabled" : void 0
                            })
                        })]
                    })
                },
                tf = e => {
                    let {
                        ariaLabel: t,
                        changeValue: a,
                        checked: s,
                        className: n,
                        classNameDynamicSuffix: r,
                        classNameInlinePrefix: o,
                        current_focus: d,
                        data_testid: c,
                        data_tip: _,
                        data_value: u,
                        display_value: m,
                        fractional_digits: h,
                        id: p,
                        inline_prefix: j,
                        inputmode: v,
                        is_autocomplete_disabled: b,
                        is_disabled: y,
                        is_hj_whitelisted: g,
                        is_incrementable: f,
                        is_read_only: N,
                        max_length: C,
                        name: w,
                        onBlur: k,
                        onClick: T,
                        onKeyPressed: E,
                        placeholder: S,
                        required: A,
                        setCurrentFocus: I,
                        type: M
                    } = e, O = i.useRef(null);
                    return i.useEffect(() => {
                        if (d === w) {
                            var e;
                            null == O || null === (e = O.current) || void 0 === e || e.focus()
                        }
                    }, [d, w]), (0, l.jsxs)("div", {
                        className: r,
                        children: [j ? (0, l.jsx)("div", {
                            className: o,
                            children: (0, l.jsx)(K.Z, {
                                className: R()(o ? `${o}--symbol` : "", {
                                    disabled: !!y
                                }),
                                size: "xs",
                                children: "UST" === j ? (0, x.O$T)(j) : j
                            })
                        }) : null, (0, l.jsx)("input", {
                            autoComplete: b ? "off" : void 0,
                            checked: s,
                            className: R()(n),
                            "data-for": `error_tooltip_${w}`,
                            "data-hj-whitelist": g,
                            "data-tip": _,
                            "data-testid": c,
                            "data-value": u,
                            disabled: !!y,
                            id: p,
                            maxLength: h && C ? C + h + 1 : C,
                            name: w,
                            onBlur: e => {
                                null == I || I(null), null == k || k(e)
                            },
                            onChange: e => {
                                if (-1 !== navigator.userAgent.indexOf("Safari") && "checkbox" !== M) {
                                    let t = e.target.selectionStart;
                                    a(e, e => {
                                        e.target.selectionEnd = t
                                    })
                                } else a(e)
                            },
                            onClick: T,
                            onFocus: () => null == I ? void 0 : I(w),
                            onKeyDown: f ? E : void 0,
                            placeholder: S || void 0,
                            readOnly: N,
                            ref: O,
                            required: A || void 0,
                            inputMode: v,
                            type: "number" === M ? "text" : M,
                            value: m ? ? "",
                            "aria-label": t,
                            "data-lpignore": "password" !== M
                        })]
                    })
                },
                tN = e => {
                    let {
                        ariaLabel: t,
                        checked: a,
                        className: s,
                        classNameDynamicSuffix: n,
                        classNameInlinePrefix: r,
                        classNameInput: o,
                        classNamePrefix: d,
                        classNameWrapper: c,
                        currency: _,
                        current_focus: u,
                        data_tip: m,
                        data_value: h,
                        decimal_point_change: p,
                        error_messages: j,
                        error_message_alignment: v,
                        fractional_digits: b,
                        helper: y,
                        icon: g,
                        id: f,
                        inline_prefix: N,
                        is_autocomplete_disabled: C,
                        is_disabled: w,
                        is_error_tooltip_hidden: k = !1,
                        is_float: T,
                        is_hj_whitelisted: E = !1,
                        is_incrementable: S,
                        is_incrementable_on_long_press: A,
                        is_negative_disabled: I,
                        is_read_only: M = !1,
                        is_signed: O = !1,
                        is_unit_at_right: D = !1,
                        inputmode: L,
                        increment_button_type: U,
                        label: Z,
                        max_length: B,
                        max_value: F,
                        min_value: z,
                        name: P = "",
                        format: X,
                        onBlur: H,
                        onChange: $,
                        onClick: V,
                        onClickInputWrapper: G,
                        placeholder: q,
                        prefix: Y,
                        required: W,
                        setCurrentFocus: J,
                        type: Q = "",
                        unit: ee,
                        value: et,
                        data_testid: ea
                    } = e, [es, en] = i.useState(), el = j && !!j.length && !k, ei = F && (+et >= +F || Number(es) >= +F), er = z && (+et <= +z || Number(es) <= +z), eo = !0, ed = e => {
                        let t = "string" == typeof e ? e.split(".") : e.toString().split(".");
                        return t && t.length > 1 ? t[1].length : 0
                    }, ec = e => {
                        let t = e;
                        return z && (t = Math.max(t, z)), F && (t = Math.min(t, F)), t
                    }, e_ = (e, t) => {
                        let a;
                        if (ei) return;
                        let s = es || et.toString(),
                            n = s ? ed(s) : 0,
                            l = !!_ && (0, x.oS6)(_);
                        if (t) {
                            let e = Math.min(t, Math.max(t, 10)) / 10 * +et / 100;
                            a = parseFloat(ec(parseFloat(s || "0") + Math.abs(e)).toString()).toFixed(n)
                        } else a = l || !_ && T ? parseFloat((parseFloat(s || "0") + parseFloat((1 * 10 ** (0 - (p || n))).toString())).toString()).toFixed(p || n) : parseFloat(((+s || 0) + 1).toString()).toFixed(n);
                        ex(a, !!t)
                    }, eu = e => {
                        let t;
                        let a = es || (null == et ? void 0 : et.toString()),
                            s = a ? ed(a) : 0,
                            n = !!_ && (0, x.oS6)(_);
                        if (e) {
                            let n = Math.min(e, Math.max(e, 10)) / 10 * +et / 100;
                            t = parseFloat(ec(parseFloat(a || "0") - Math.abs(n)).toString()).toFixed(s)
                        } else t = n || !_ && T ? parseFloat((parseFloat(a || "0") - parseFloat((1 * 10 ** (0 - (p || s))).toString())).toString()).toFixed(p || s) : parseFloat(((+a || 0) - 1).toString()).toFixed(s);
                        return t
                    }, em = (e, t) => {
                        if (er) return;
                        let a = eu(t);
                        if (!I || !(0 > +a)) ex(a, !!t)
                    }, ex = (e, t) => {
                        let a = X ? X(e) : e;
                        t ? en(a) : (O && /^\d+/.test(a) && +a > 0 && (a = `+${a}`), null == $ || $({
                            target: {
                                value: a,
                                name: P
                            }
                        }))
                    }, eh = es || et;
                    ee && (eh = D ? `${et} ${ee}` : `${ee} ${et}`);
                    let ep = S && ("number" === Q || "tel" === Q),
                        ej = (0, l.jsx)(tf, {
                            ariaLabel: t,
                            changeValue: (e, t) => {
                                if (ee && (e.target.value = e.target.value.replace(ee, "").trim()), e.target.value !== et || "checkbox" === Q) {
                                    if ("number" === Q || "tel" === Q) {
                                        let t = !e.target.value || "" === e.target.value || "  " === e.target.value,
                                            a = O ? "^([+-.0-9])" : "^";
                                        e.target.value = e.target.value.replace(",", ".");
                                        let s = RegExp(`${a}(\\d*)?${T?"(\\.\\d+)?":""}$`).test(e.target.value),
                                            n = T && RegExp(`${a}(\\.|\\d+\\.)?$`).test(e.target.value),
                                            l = RegExp(`${a}(\\d+)?\\.(\\d+)?[0]+$`).test(e.target.value),
                                            i = /e/.test(`${+e.target.value}`);
                                        if (B && (b || 0 === b) && (eo = RegExp(`${a}(\\d{0,${B}})(\\${b&&"."}\\d{0,${b}})?$`).test(e.target.value)), (s || t) && eo) e.target.value = t || O || l || i || "tel" === Q ? e.target.value : +e.target.value;
                                        else if (!n) {
                                            e.target.value = et;
                                            return
                                        }
                                    }
                                    null == $ || $(e), t && t(e)
                                }
                            },
                            checked: a,
                            current_focus: u,
                            className: R()(ep ? "dc-input-wrapper__input" : "", N ? "input--has-inline-prefix" : "", "input", {
                                "input--error": j && !!j.length
                            }, o),
                            classNameDynamicSuffix: n,
                            classNameInlinePrefix: r,
                            data_tip: m,
                            data_testid: ea,
                            data_value: h,
                            display_value: eh,
                            fractional_digits: b,
                            has_error: el,
                            id: f,
                            inline_prefix: N,
                            is_autocomplete_disabled: C,
                            is_disabled: w,
                            is_hj_whitelisted: E,
                            is_incrementable: ep,
                            is_read_only: M,
                            max_length: B,
                            name: P,
                            onBlur: H,
                            onClick: V,
                            onKeyPressed: e => {
                                38 === e.keyCode && e_(), 40 === e.keyCode && em()
                            },
                            placeholder: q,
                            required: W,
                            setCurrentFocus: J,
                            type: Q,
                            inputmode: L
                        }),
                        ev = (0, l.jsx)(tg, {
                            id: f,
                            max_is_disabled: ei || !!w,
                            incrementValue: e_,
                            min_is_disabled: er || I && 0 > +eu() || !!w,
                            decrementValue: em,
                            onLongPressEnd: () => {
                                let e = X ? X(es) : es;
                                null == $ || $({
                                    target: {
                                        value: e || "",
                                        name: P
                                    }
                                }), en("")
                            },
                            is_incrementable_on_long_press: A,
                            type: U
                        }),
                        eb = (0, l.jsxs)(ty, {
                            className: R()("trade-container__tooltip", {
                                "dc-tooltip--with-label": Z
                            }),
                            alignment: v || "left",
                            message: el ? j[0] : null,
                            has_error: el,
                            children: [!!Z && (0, l.jsx)("label", {
                                htmlFor: P,
                                className: "dc-input-field__label",
                                children: Z
                            }), !!y && (0, l.jsx)(K.Z, {
                                size: "xxs",
                                color: "less-prominent",
                                weight: "lighter",
                                children: y
                            }), ep ? (0, l.jsxs)("div", {
                                className: R()("dc-input-wrapper", {
                                    "dc-input-wrapper--disabled": !!w
                                }, c),
                                children: [ev, ej]
                            }) : ej]
                        });
                    return (0, l.jsxs)(i.Fragment, {
                        children: [!!Y && (0, l.jsx)("div", {
                            className: d,
                            children: (0, l.jsx)("span", {
                                className: R()(`${d}--symbol`, "symbols"),
                                children: (0, x.O$T)(_)
                            })
                        }), (0, l.jsxs)("div", {
                            className: R()("dc-input-field", s),
                            onClick: G,
                            children: [g && (0, l.jsx)(g, {
                                onClick: V
                            }), eb]
                        })]
                    })
                },
                tC = e => {
                    let {
                        addToast: t,
                        checkbox_tooltip_label: a,
                        classNameBubble: s,
                        classNameInlinePrefix: n,
                        classNameInput: r,
                        className: o,
                        currency: d,
                        current_focus: c,
                        defaultChecked: _,
                        error_message_alignment: u,
                        error_messages: m,
                        is_disabled: h,
                        is_single_currency: p,
                        is_negative_disabled: j,
                        is_input_hidden: v,
                        label: b,
                        max_value: y,
                        name: g,
                        onChange: f,
                        removeToast: N,
                        setCurrentFocus: C,
                        tooltip_alignment: w,
                        tooltip_label: k,
                        value: T
                    } = e, E = i.useRef(null), S = i.useRef(null), [A, I] = i.useState(_), R = `has_${g}`;
                    i.useEffect(() => {
                        I(_)
                    }, [_]), i.useEffect(() => {
                        if ((0, x.tqC)()) {
                            let e = () => {
                                "function" == typeof N && N(`${g}__error`)
                            };
                            if ((null == m ? void 0 : m.length) !== void 0 && (null == m ? void 0 : m.length) > 0) return "function" == typeof t && t({
                                key: `${g}__error`,
                                content: String(m),
                                type: "error"
                            }), () => {
                                e()
                            }
                        }
                    }, [m, t, N, g]);
                    let M = () => {
                            setTimeout(() => {
                                var e, t, a, s;
                                let n = null === (a = S.current) || void 0 === a ? void 0 : null === (t = a.nextSibling) || void 0 === t ? void 0 : null === (e = t.querySelector) || void 0 === e ? void 0 : e.call(t, "input.dc-input-wrapper__input");
                                null == n || null === (s = n.focus) || void 0 === s || s.call(n)
                            })
                        },
                        O = (0, l.jsx)(tN, {
                            className: o,
                            classNameInlinePrefix: n,
                            classNameInput: r,
                            currency: d,
                            current_focus: c || "",
                            error_messages: m,
                            error_message_alignment: u,
                            is_error_tooltip_hidden: (0, x.tqC)(),
                            is_disabled: !!h,
                            fractional_digits: (0, x.i4S)(d),
                            id: `dc_${g}_input`,
                            inline_prefix: p ? d : void 0,
                            is_autocomplete_disabled: !0,
                            is_float: (0, x.i4S)(d) > 0,
                            is_hj_whitelisted: !0,
                            is_incrementable: !0,
                            is_negative_disabled: j,
                            max_length: 10,
                            max_value: y,
                            name: g,
                            onChange: f,
                            onClickInputWrapper: h ? void 0 : () => {
                                !A && (I(!0), null == f || f({
                                    target: {
                                        name: R,
                                        value: !0
                                    }
                                }), M())
                            },
                            type: "number",
                            ariaLabel: "",
                            inputmode: "decimal",
                            value: T,
                            setCurrentFocus: C
                        }),
                        D = (0, l.jsx)(eh, {
                            className: `${g}-checkbox__input`,
                            ref: E,
                            id: `dc_${g}-checkbox_input`,
                            onChange: () => {
                                let e = !A;
                                null == f || f({
                                    target: {
                                        name: R,
                                        value: e
                                    }
                                }), e && M()
                            },
                            name: R,
                            label: b,
                            classNameLabel: `${g}-checkbox__label`,
                            defaultChecked: _,
                            disabled: h
                        });
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            ref: S,
                            className: "dc-input-wrapper--inline",
                            children: [a ? (0, l.jsx)(B.Z, {
                                alignment: "left",
                                classNameBubble: "trade-container__popover",
                                is_bubble_hover_enabled: !0,
                                margin: 2,
                                message: a,
                                relative_render: !0,
                                children: D
                            }) : (0, l.jsx)(i.Fragment, {
                                children: D
                            }), k && (0, l.jsx)(B.Z, {
                                alignment: w || "left",
                                classNameBubble: s,
                                icon: "info",
                                id: `dc_${g}-checkbox__tooltip`,
                                is_bubble_hover_enabled: !0,
                                message: k,
                                margin: (0, x.tqC)() || "right" === w ? 0 : 216,
                                zIndex: "9999",
                                ...(0, x.nIE)() ? {
                                    relative_render: "left" === w
                                } : {}
                            })]
                        }), !v && O]
                    })
                },
                tw = e => {
                    let t, a, {
                        addToast: s,
                        contract: n,
                        current_focus: r,
                        error_message_alignment: o,
                        getCardLabels: d,
                        isMobile: c,
                        is_turbos: _,
                        is_accumulator: u,
                        onMouseLeave: m,
                        removeToast: h,
                        setCurrentFocus: p,
                        toggleDialog: j,
                        totalProfit: v
                    } = e;
                    i.useEffect(() => () => n.clearContractUpdateConfigValues(), [n]);
                    let {
                        contract_info: b,
                        contract_update_take_profit: y,
                        has_contract_update_take_profit: g,
                        contract_update_stop_loss: f,
                        has_contract_update_stop_loss: N,
                        updateLimitOrder: C,
                        validation_errors: w
                    } = n, [k, T] = i.useState({
                        contract_update_take_profit: y,
                        contract_update_stop_loss: f
                    }), {
                        buy_price: E,
                        currency: S = "",
                        is_valid_to_cancel: I,
                        is_sold: M
                    } = b, {
                        stop_loss: O,
                        take_profit: D
                    } = (0, x.gNN)(b.limit_order), {
                        contract_update_stop_loss: L,
                        contract_update_take_profit: U
                    } = w, Z = {
                        take_profit: g ? U : void 0,
                        stop_loss: N ? L : void 0
                    }, B = Object.keys(Z).some(e => {
                        var t;
                        return null === (t = Z[e]) || void 0 === t ? void 0 : t.length
                    }), F = (0, x.L8o)(b.contract_type || "");
                    let z = g ? +y > 0 : null != (t = F ? O : D);
                    let P = N ? +f > 0 : null != (a = D),
                        X = F ? !I && !!(z || P) : !!z,
                        H = e => {
                            let t = ["has_contract_update_take_profit", "has_contract_update_stop_loss", e.has_contract_update_take_profit && "contract_update_take_profit", e.has_contract_update_stop_loss && "contract_update_stop_loss"];
                            return (0, x.eiS)(e, t)
                        },
                        $ = e => {
                            var t;
                            let {
                                name: a,
                                value: s
                            } = e.target;
                            T({ ...k,
                                [a]: s
                            }), null === (t = n.onChange) || void 0 === t || t.call(n, {
                                name: a,
                                value: s
                            })
                        },
                        V = (0, l.jsx)(tC, {
                            addToast: s,
                            removeToast: h,
                            current_focus: r,
                            classNameBubble: "dc-popover__trade-params",
                            classNameInlinePrefix: "dc-contract-card-dialog__input--currency",
                            currency: S,
                            error_messages: Z.take_profit,
                            is_input_hidden: c && !g,
                            is_single_currency: !0,
                            is_negative_disabled: !0,
                            defaultChecked: g,
                            label: d().TAKE_PROFIT,
                            name: "contract_update_take_profit",
                            onChange: $,
                            error_message_alignment: o || "right",
                            value: k.contract_update_take_profit,
                            is_disabled: F && !!I,
                            setCurrentFocus: p,
                            tooltip_alignment: c ? "left" : "right",
                            tooltip_label: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "When your profit reaches or exceeds this amount, your trade will be closed automatically."
                            })
                        }),
                        G = (0, x.CeH)(b),
                        q = (0, l.jsx)(tC, {
                            addToast: s,
                            removeToast: h,
                            current_focus: r,
                            classNameBubble: "dc-popover__trade-params",
                            classNameInlinePrefix: "dc-contract-card-dialog__input--currency",
                            currency: S,
                            defaultChecked: N,
                            error_messages: Z.stop_loss,
                            is_input_hidden: c && !N,
                            is_single_currency: !0,
                            is_negative_disabled: !0,
                            label: d().STOP_LOSS,
                            max_value: Number(E) - G,
                            name: "contract_update_stop_loss",
                            onChange: $,
                            error_message_alignment: o || "right",
                            value: k.contract_update_stop_loss,
                            is_disabled: !!I,
                            setCurrentFocus: p,
                            tooltip_alignment: c ? "left" : "right",
                            tooltip_label: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "When your loss reaches or exceeds this amount, your trade will be closed automatically."
                            })
                        });
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(eH.Z, {
                            children: (0, l.jsxs)("div", {
                                className: "dc-contract-card-dialog__total-profit",
                                children: [(0, l.jsx)(K.Z, {
                                    color: "less-prominent",
                                    size: "xs",
                                    weight: "bold",
                                    children: d().TOTAL_PROFIT_LOSS
                                }), (0, l.jsxs)("div", {
                                    className: R()("dc-contract-card__profit-loss dc-contract-card-item__total-profit-loss-value", {
                                        "dc-contract-card__profit-loss--is-crypto": (0, x.oS6)(S),
                                        "dc-contract-card__profit-loss--negative": v < 0,
                                        "dc-contract-card__profit-loss--positive": v > 0
                                    }),
                                    children: [(0, l.jsx)(e0.Z, {
                                        amount: v,
                                        currency: S,
                                        show_currency: !0
                                    }), !M && (0, l.jsx)(tt, {
                                        className: "dc-contract-card__indicative--movement",
                                        value: v
                                    })]
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: R()("dc-contract-card-dialog__form", {
                                "dc-contract-card-dialog__form--no-stop-loss": u || _
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "dc-contract-card-dialog__input",
                                children: V
                            }), F && (0, l.jsx)("div", {
                                className: "dc-contract-card-dialog__input",
                                children: q
                            }), (0, l.jsx)("div", {
                                className: "dc-contract-card-dialog__button",
                                children: (0, l.jsx)(tp.z, {
                                    onClick: e => {
                                        C(), j(e), null == m || m()
                                    },
                                    disabled: B || !X || (0, x.xb4)(H((0, x.W9k)(b)), H(e.contract)),
                                    isFullWidth: !0,
                                    children: d().APPLY
                                })
                            })]
                        })]
                    })
                },
                tk = e => {
                    let {
                        addToast: t,
                        contract_id: a,
                        getCardLabels: s,
                        getContractById: n,
                        is_valid_to_cancel: r,
                        should_show_cancellation_warning: o,
                        toggleCancellationWarning: d,
                        ...c
                    } = e, [_, u] = i.useState(!1), [m, h] = i.useState(0), [p, j] = i.useState(0), v = i.useRef(null), b = i.useRef(null), y = n(Number(a));
                    i.useEffect(() => {
                        if (_ && (null == v ? void 0 : v.current) && (null == b ? void 0 : b.current)) {
                            let e = v.current.getBoundingClientRect(),
                                t = b.current.getBoundingClientRect(),
                                a = document.body.getBoundingClientRect(),
                                {
                                    top: s
                                } = e,
                                {
                                    right: n
                                } = e;
                            s + (null == t ? void 0 : t.height) > a.height && (s -= (null == t ? void 0 : t.height) - e.height), n + (null == t ? void 0 : t.width) > a.width ? j(n - (null == t ? void 0 : t.width) - 16) : j(n - 16), h(s)
                        }
                    }, [_]);
                    let g = e => {
                            e.preventDefault(), e.stopPropagation(), (0, x.tqC)() && o && r && t({
                                key: "deal_cancellation_active",
                                content: s().TAKE_PROFIT_LOSS_NOT_AVAILABLE,
                                type: "error"
                            }), !r && u(!_)
                        },
                        f = i.useCallback(g, [g]),
                        N = (0, l.jsx)("div", {
                            className: "dc-contract-card-dialog-toggle__icon",
                            children: (0, l.jsx)(tm.Z, {
                                height: 12,
                                width: 12
                            })
                        });
                    return (0, l.jsxs)("div", {
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: [r && o && (0, x.nIE)() ? (0, l.jsx)(B.Z, {
                            alignment: "right",
                            classNameBubble: "dc-contract-card-dialog__popover-bubble",
                            className: "dc-contract-card-dialog__popover",
                            is_bubble_hover_enabled: !0,
                            margin: 2,
                            zIndex: "2",
                            message: s().TAKE_PROFIT_LOSS_NOT_AVAILABLE,
                            onBubbleClose: () => {
                                null == d || d()
                            },
                            children: (0, l.jsx)("button", {
                                ref: v,
                                className: "dc-contract-card-dialog-toggle",
                                onClick: f,
                                children: N
                            })
                        }) : (0, l.jsx)("button", {
                            ref: v,
                            className: "dc-contract-card-dialog-toggle",
                            onClick: f,
                            children: N
                        }), (0, l.jsx)(eH.Z, {
                            children: (0, l.jsx)(tx.Z, {
                                portal_element_id: "modal_root",
                                visible: _,
                                onClose: f,
                                wrapper_classname: "contract-update",
                                children: (0, l.jsx)(eD.Z, {
                                    className: "contract-update__wrapper",
                                    height_offset: "40px",
                                    children: (0, l.jsx)(tw, {
                                        addToast: t,
                                        contract: y,
                                        getCardLabels: s,
                                        getContractById: n,
                                        isMobile: !0,
                                        toggleDialog: f,
                                        ...c
                                    })
                                })
                            })
                        }), (0, l.jsx)(e9.Z, {
                            children: (0, l.jsx)(th, {
                                ref: b,
                                is_visible: _,
                                left: p,
                                top: m,
                                toggle_ref: v,
                                toggleDialog: f,
                                children: (0, l.jsx)(tw, {
                                    addToast: t,
                                    contract: y,
                                    getCardLabels: s,
                                    getContractById: n,
                                    toggleDialog: f,
                                    ...c
                                })
                            })
                        })]
                    })
                };
            tk.displayName = "ToggleCardDialog";
            let tT = i.memo(tk),
                tE = i.memo(e => {
                    let t, a, {
                            contract_info: s,
                            contract_update: n,
                            currency: r,
                            getCardLabels: o,
                            indicative: d,
                            is_sold: c,
                            is_positions: _,
                            ...u
                        } = e,
                        {
                            buy_price: m,
                            profit: h,
                            limit_order: p,
                            sell_price: j
                        } = s,
                        {
                            take_profit: v
                        } = (0, x.gNN)(n || p),
                        b = (0, x.iBr)(s),
                        {
                            CONTRACT_VALUE: y,
                            STAKE: g,
                            TAKE_PROFIT: f,
                            TOTAL_PROFIT_LOSS: N
                        } = o();
                    return h && (t = +h > 0, a = 0 > +h), (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "dc-contract-card-items-wrapper",
                            children: [(0, l.jsx)(tu, {
                                header: g,
                                className: "dc-contract-card__stake",
                                children: (0, l.jsx)(e0.Z, {
                                    amount: m,
                                    currency: r
                                })
                            }), (0, l.jsxs)(tu, {
                                header: y,
                                className: "dc-contract-card__current-stake",
                                children: [(0, l.jsx)("div", {
                                    className: R()({
                                        "dc-contract-card--profit": t,
                                        "dc-contract-card--loss": a
                                    }),
                                    children: (0, l.jsx)(e0.Z, {
                                        amount: j || d,
                                        currency: r
                                    })
                                }), !c && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: j || d
                                })]
                            }), (0, l.jsxs)(tu, {
                                header: N,
                                is_crypto: (0, x.oS6)(r),
                                is_loss: a,
                                is_won: t,
                                children: [(0, l.jsx)(e0.Z, {
                                    amount: h,
                                    currency: r
                                }), !c && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: h
                                })]
                            }), (0, l.jsxs)(tu, {
                                header: f,
                                className: "dc-contract-card__take-profit",
                                children: [v ? (0, l.jsx)(e0.Z, {
                                    amount: v,
                                    currency: r
                                }) : (0, l.jsx)("strong", {
                                    children: "-"
                                }), b && (0, l.jsx)(tT, {
                                    contract_id: s.contract_id,
                                    getCardLabels: o,
                                    is_accumulator: !0,
                                    ...u
                                })]
                            })]
                        }), !!c && (0, l.jsx)(eH.Z, {
                            children: (0, l.jsx)("div", {
                                className: R()("dc-contract-card__status", {
                                    "dc-contract-card__status--accumulator-mobile-positions": _
                                }),
                                children: (0, l.jsx)(t_, {
                                    getCardLabels: o,
                                    is_contract_won: t
                                })
                            })
                        })]
                    })
                }),
                tS = i.memo(e => {
                    var t, a;
                    let s, {
                            contract_info: n,
                            currency: r,
                            is_sold: o,
                            indicative: d,
                            progress_slider_mobile_el: c
                        } = e,
                        {
                            buy_price: _,
                            contract_type: u,
                            sell_price: m,
                            profit: h,
                            multiplier: p
                        } = n,
                        {
                            INDICATIVE_PRICE: j,
                            MULTIPLIER: v,
                            PROFIT_LOSS: b,
                            POTENTIAL_PROFIT_LOSS: y,
                            PAYOUT: g,
                            PURCHASE_PRICE: f
                        } = (0, x.gk9)();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "dc-contract-card-items-wrapper dc-contract-card--lookbacks",
                            children: [(0, l.jsxs)(tu, {
                                header: o ? b : y,
                                is_crypto: (0, x.oS6)(r),
                                is_loss: 0 > Number(h),
                                is_won: Number(h) > 0,
                                children: [(0, l.jsx)(e0.Z, {
                                    amount: h,
                                    currency: r
                                }), !o && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: h
                                })]
                            }), (0, l.jsxs)(tu, {
                                header: o ? g : j,
                                children: [(0, l.jsx)(e0.Z, {
                                    currency: r,
                                    amount: Number(m || d)
                                }), !o && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: Number(m || d)
                                })]
                            }), (0, l.jsx)(tu, {
                                header: f,
                                children: (0, l.jsx)(e0.Z, {
                                    amount: _,
                                    currency: r
                                })
                            }), (0, l.jsx)(tu, {
                                header: v,
                                children: `x${p}`
                            }), (0, l.jsx)(eH.Z, {
                                children: (0, l.jsx)("div", {
                                    className: "dc-contract-card__status",
                                    children: o ? (0, l.jsx)(t_, {
                                        getCardLabels: x.gk9,
                                        is_contract_won: "won" === (0, x.efd)(n)
                                    }) : c
                                })
                            })]
                        }), (0, l.jsx)(tu, {
                            className: "dc-contract-card-item__payout-limit",
                            children: (0, l.jsx)(K.Z, {
                                align: "center",
                                lineHeightt: "l",
                                size: "xxs",
                                children: (t = u, a = p, s = "", t === x.FTx.LB_PUT ? s = (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "(High - Close)"
                                }) : t === x.FTx.LB_CALL ? s = (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "(Close - Low)"
                                }) : t === x.FTx.LB_HIGH_LOW && (s = (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "(High - Low)"
                                })), (0, l.jsxs)(i.Fragment, {
                                    children: [(0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Payout limit: {{multiplier}} x ",
                                        values: {
                                            multiplier: a
                                        }
                                    }), s]
                                }))
                            })
                        })]
                    })
                }),
                tA = e => {
                    let {
                        contract_info: t,
                        contract_update: a,
                        currency: s,
                        getCardLabels: n,
                        has_progress_slider: r,
                        progress_slider: o,
                        is_mobile: d,
                        is_sold: c,
                        should_show_cancellation_warning: _,
                        toggleCancellationWarning: u,
                        ...m
                    } = e, {
                        buy_price: h,
                        bid_price: p,
                        limit_order: j
                    } = t, {
                        take_profit: v,
                        stop_loss: b
                    } = (0, x.gNN)(a || j), y = (0, x.CeH)(t), g = (0, x.Dlf)(t), f = (0, x.iBr)(t), N = (0, x.vMw)(t), {
                        CONTRACT_COST: C,
                        CONTRACT_VALUE: w,
                        DEAL_CANCEL_FEE: k,
                        STAKE: T,
                        STOP_LOSS: E,
                        TAKE_PROFIT: S,
                        TOTAL_PROFIT_LOSS: A
                    } = n();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: R()({
                                "dc-contract-card-items-wrapper--mobile": d,
                                "dc-contract-card-items-wrapper": !d,
                                "dc-contract-card-items-wrapper--has-progress-slider": r && !c
                            }),
                            children: [(0, l.jsx)(tu, {
                                header: C,
                                className: "dc-contract-card__stake",
                                children: (0, l.jsx)(e0.Z, {
                                    amount: h - y,
                                    currency: s
                                })
                            }), (0, l.jsxs)(tu, {
                                header: w,
                                className: "dc-contract-card__current-stake",
                                children: [(0, l.jsx)("div", {
                                    className: R()({
                                        "dc-contract-card--profit": N > 0,
                                        "dc-contract-card--loss": N < 0
                                    }),
                                    children: (0, l.jsx)(e0.Z, {
                                        amount: p,
                                        currency: s
                                    })
                                }), !c && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: N
                                })]
                            }), (0, l.jsx)(tu, {
                                header: k,
                                className: R()("dc-contract-card__deal-cancel-fee", {
                                    "dc-contract-card__deal-cancel-fee__disabled": !y
                                }),
                                children: y ? (0, l.jsx)(e0.Z, {
                                    amount: y,
                                    currency: s
                                }) : (0, l.jsx)(i.Fragment, {
                                    children: "-"
                                })
                            }), (0, l.jsx)(tu, {
                                header: T,
                                className: "dc-contract-card__buy-price",
                                children: (0, l.jsx)(e0.Z, {
                                    amount: h,
                                    currency: s
                                })
                            }), r && d && !c && (0, l.jsx)(tu, {
                                className: "dc-contract-card__date-expiry",
                                children: o
                            }), (0, l.jsxs)("div", {
                                className: "dc-contract-card__limit-order-info",
                                children: [(0, l.jsx)(tu, {
                                    header: S,
                                    className: "dc-contract-card__take-profit",
                                    children: v ? (0, l.jsx)(e0.Z, {
                                        amount: v,
                                        currency: s
                                    }) : (0, l.jsx)("strong", {
                                        children: "-"
                                    })
                                }), (0, l.jsx)(tu, {
                                    header: E,
                                    className: "dc-contract-card__stop-loss",
                                    children: b ? (0, l.jsxs)(i.Fragment, {
                                        children: [(0, l.jsx)("strong", {
                                            children: "-"
                                        }), (0, l.jsx)(e0.Z, {
                                            amount: b,
                                            currency: s
                                        })]
                                    }) : (0, l.jsx)("strong", {
                                        children: "-"
                                    })
                                }), (f || g) && (0, l.jsx)(tT, {
                                    contract_id: t.contract_id,
                                    getCardLabels: n,
                                    is_valid_to_cancel: g,
                                    should_show_cancellation_warning: _,
                                    toggleCancellationWarning: u,
                                    ...m
                                })]
                            })]
                        }), (0, l.jsxs)(tu, {
                            className: "dc-contract-card-item__total-profit-loss",
                            header: A,
                            is_crypto: (0, x.oS6)(s),
                            is_loss: N < 0,
                            is_won: N > 0,
                            children: [(0, l.jsx)(e0.Z, {
                                amount: Math.abs(N),
                                currency: s
                            }), !c && (0, l.jsx)(tt, {
                                className: "dc-contract-card__indicative--movement",
                                value: N
                            })]
                        })]
                    })
                };
            tA.propTypes = {
                addToast: eM().func,
                contract_info: eM().object,
                contract_update: eM().object,
                currency: eM().string,
                current_focus: eM().string,
                error_message_alignment: eM().string,
                getCardLabels: eM().func,
                getContractById: eM().func,
                is_mobile: eM().bool,
                is_sold: eM().bool,
                onMouseLeave: eM().func,
                progress_slider: eM().node,
                removeToast: eM().func,
                setCurrentFocus: eM().func,
                should_show_cancellation_warning: eM().bool,
                toggleCancellationWarning: eM().func,
                totalProfit: eM().number.isRequired,
                has_progress_slider: eM().bool
            };
            let tI = i.memo(tA),
                tR = i.memo(e => {
                    let {
                        contract_info: t,
                        contract_update: a,
                        currency: s,
                        getCardLabels: n,
                        is_sold: r,
                        progress_slider_mobile_el: o,
                        ...d
                    } = e, {
                        bid_price: c,
                        buy_price: _,
                        profit: u,
                        barrier: m,
                        entry_spot_display_value: h,
                        limit_order: p = {},
                        sell_price: j
                    } = t, {
                        take_profit: v
                    } = (0, x.gNN)(a || p), b = (0, x.iBr)(t), y = r ? j : c, {
                        BARRIER: g,
                        CONTRACT_VALUE: f,
                        ENTRY_SPOT: N,
                        TAKE_PROFIT: C,
                        TOTAL_PROFIT_LOSS: w,
                        STAKE: k
                    } = n();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: R()("dc-contract-card-items-wrapper dc-contract-card--turbos"),
                            children: [(0, l.jsx)(tu, {
                                className: "dc-contract-card__buy-price",
                                is_crypto: (0, x.oS6)(s),
                                header: k,
                                children: (0, l.jsx)(e0.Z, {
                                    amount: _,
                                    currency: s
                                })
                            }), (0, l.jsxs)(tu, {
                                header: f,
                                className: "dc-contract-card__contract-value",
                                children: [(0, l.jsx)("div", {
                                    className: R()({
                                        "dc-contract-card--profit": Number(u) > 0,
                                        "dc-contract-card--loss": 0 > Number(u)
                                    }),
                                    children: (0, l.jsx)(e0.Z, {
                                        amount: y,
                                        currency: s
                                    })
                                }), !r && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: j || y
                                })]
                            }), (0, l.jsx)(tu, {
                                header: N,
                                is_crypto: (0, x.oS6)(s),
                                className: "dc-contract-card__entry-spot",
                                children: (0, x.oC5)(h)
                            }), (0, l.jsx)("div", {
                                className: "dc-contract-card__limit-order-info",
                                children: (0, l.jsxs)(tu, {
                                    header: C,
                                    className: "dc-contract-card__take-profit",
                                    children: [v ? (0, l.jsx)(e0.Z, {
                                        amount: v,
                                        currency: s
                                    }) : (0, l.jsx)("strong", {
                                        children: "-"
                                    }), b && (0, l.jsx)(tT, {
                                        contract_id: t.contract_id,
                                        getCardLabels: n,
                                        is_turbos: !0,
                                        ...d
                                    })]
                                })
                            }), (0, l.jsx)(tu, {
                                header: g,
                                className: "dc-contract-card__barrier-level",
                                children: (0, x.oC5)(m)
                            }), (0, l.jsx)(eH.Z, {
                                children: (0, l.jsx)("div", {
                                    className: "dc-contract-card__status",
                                    children: r ? (0, l.jsx)(t_, {
                                        getCardLabels: n,
                                        is_contract_won: !!u && u > 0
                                    }) : o
                                })
                            })]
                        }), (0, l.jsxs)(tu, {
                            className: "dc-contract-card-item__total-profit-loss",
                            header: w,
                            is_crypto: (0, x.oS6)(s),
                            is_loss: 0 > Number(u),
                            is_won: Number(u) > 0,
                            children: [(0, l.jsx)(e0.Z, {
                                amount: u,
                                currency: s
                            }), !r && (0, l.jsx)(tt, {
                                className: "dc-contract-card__indicative--movement",
                                value: u
                            })]
                        })]
                    })
                }),
                tM = i.memo(e => {
                    let {
                        contract_info: t,
                        currency: a,
                        getCardLabels: s,
                        is_sold: n,
                        progress_slider: r
                    } = e, {
                        buy_price: o,
                        bid_price: d,
                        entry_spot_display_value: c,
                        barrier: _,
                        sell_price: u,
                        profit: m
                    } = t, h = n ? u : d, {
                        CONTRACT_VALUE: p,
                        ENTRY_SPOT: j,
                        STAKE: v,
                        STRIKE: b,
                        TOTAL_PROFIT_LOSS: y
                    } = s();
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)(e9.Z, {
                            children: [(0, l.jsxs)("div", {
                                className: "dc-contract-card-items-wrapper",
                                children: [(0, l.jsx)(tu, {
                                    header: v,
                                    children: (0, l.jsx)(e0.Z, {
                                        amount: o,
                                        currency: a
                                    })
                                }), (0, l.jsxs)(tu, {
                                    className: "dc-contract-card-item__contract-value",
                                    header: p,
                                    children: [(0, l.jsx)("div", {
                                        className: R()({
                                            "dc-contract-card--profit": Number(m) > 0,
                                            "dc-contract-card--loss": 0 > Number(m)
                                        }),
                                        children: (0, l.jsx)(e0.Z, {
                                            amount: h,
                                            currency: a
                                        })
                                    }), !n && (0, l.jsx)(tt, {
                                        className: "dc-contract-card__indicative--movement",
                                        value: u || h
                                    })]
                                }), (0, l.jsx)(tu, {
                                    header: j,
                                    children: c && (0, x.oC5)(c)
                                }), (0, l.jsx)(tu, {
                                    header: b,
                                    children: _ && (0, x.oC5)(_)
                                })]
                            }), (0, l.jsxs)(tu, {
                                className: "dc-contract-card-item__total-profit-loss",
                                header: y,
                                is_crypto: (0, x.oS6)(a),
                                is_loss: 0 > Number(m),
                                is_won: Number(m) > 0,
                                children: [(0, l.jsx)(e0.Z, {
                                    amount: m,
                                    currency: a
                                }), !n && (0, l.jsx)(tt, {
                                    className: "dc-contract-card__indicative--movement",
                                    value: m
                                })]
                            })]
                        }), (0, l.jsx)(eH.Z, {
                            children: (0, l.jsxs)("div", {
                                className: "dc-contract-card-items-wrapper--mobile",
                                children: [(0, l.jsxs)("div", {
                                    className: "dc-contract-card-items-wrapper-group",
                                    children: [(0, l.jsx)(tu, {
                                        header: v,
                                        children: (0, l.jsx)(e0.Z, {
                                            amount: o,
                                            currency: a
                                        })
                                    }), (0, l.jsx)(tu, {
                                        header: j,
                                        children: c && (0, x.oC5)(c)
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "dc-contract-card-items-wrapper-group",
                                    children: [(0, l.jsxs)(tu, {
                                        header: p,
                                        children: [(0, l.jsx)("div", {
                                            className: R()({
                                                "dc-contract-card--profit": Number(m) > 0,
                                                "dc-contract-card--loss": 0 > Number(m)
                                            }),
                                            children: (0, l.jsx)(e0.Z, {
                                                amount: h,
                                                currency: a
                                            })
                                        }), !n && (0, l.jsx)(tt, {
                                            className: "dc-contract-card__indicative--movement",
                                            value: u || h
                                        })]
                                    }), (0, l.jsx)(tu, {
                                        header: b,
                                        children: _ && (0, x.oC5)(_)
                                    })]
                                }), n ? (0, l.jsx)(t_, {
                                    getCardLabels: s,
                                    is_contract_won: "won" === (0, x.efd)(t)
                                }) : r, (0, l.jsxs)(tu, {
                                    className: "dc-contract-card-item__total-profit-loss",
                                    header: y,
                                    is_crypto: (0, x.oS6)(a),
                                    is_loss: 0 > Number(m),
                                    is_won: Number(m) > 0,
                                    children: [(0, l.jsx)(e0.Z, {
                                        amount: m,
                                        currency: a
                                    }), !n && (0, l.jsx)(tt, {
                                        className: "dc-contract-card__indicative--movement",
                                        value: m
                                    })]
                                })]
                            })
                        })]
                    })
                }),
                tO = e => {
                    let {
                        contract_info: t,
                        getCardLabels: a,
                        is_sell_requested: s,
                        onClickSell: n
                    } = e, r = (0, x.iBr)(t), o = ((0, x._mr)(t) || (0, x.s0r)((null == t ? void 0 : t.shortcode) ? ? "", t.purchase_time)) && (0, x.FJ7)(t);
                    return o ? (0, l.jsx)(i.Fragment, {
                        children: r ? (0, l.jsx)(tp.z, {
                            className: R()("dc-btn--sell", {
                                "dc-btn--loading": s
                            }),
                            "data-testid": "dt_contract_card_sell",
                            disabled: s,
                            onClick: e => {
                                null == n || n(t.contract_id), e.stopPropagation(), e.preventDefault()
                            },
                            variant: "outlined",
                            children: a().SELL
                        }) : (0, l.jsx)("div", {
                            className: "dc-contract-card__no-resale-msg",
                            children: a().RESALE_NOT_OFFERED
                        })
                    }) : null
                },
                tD = e => {
                    let {
                        className: t,
                        contract_info: a,
                        getCardLabels: s,
                        is_sell_requested: n,
                        onClickCancel: r,
                        onClickSell: o,
                        server_time: d
                    } = e, {
                        contract_id: c,
                        cancellation: {
                            date_expiry: _
                        } = {},
                        profit: u
                    } = a, m = (0, x.Dlf)(a);
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(tp.z, {
                            id: `dc_contract_card_${c}_button`,
                            className: R()(t, {
                                "dc-btn--loading": n
                            }),
                            disabled: n || 0 > Number(u) && m,
                            onClick: e => {
                                o(c), e.stopPropagation(), e.preventDefault()
                            },
                            variant: "outlined",
                            children: s().CLOSE
                        }), m && (0, l.jsxs)(tp.z, {
                            id: `dc_contract_card_${c}_cancel_button`,
                            className: "dc-btn--cancel",
                            disabled: Number(u) >= 0,
                            onClick: e => {
                                r(c), e.stopPropagation(), e.preventDefault()
                            },
                            variant: "outlined",
                            children: [s().CANCEL, _ && (0, l.jsx)(tl, {
                                end_time: _,
                                format: "mm:ss",
                                getCardLabels: s,
                                start_time: d
                            })]
                        })]
                    })
                },
                tL = e => {
                    let {
                        current_tick: t,
                        getCardLabels: a,
                        ticks_count: s
                    } = e, n = Array.from(Array(s).keys());
                    return (0, l.jsxs)("div", {
                        className: "dc-progress-slider__ticks",
                        children: [(0, l.jsxs)(K.Z, {
                            styles: {
                                lineHeight: "18px"
                            },
                            size: "xxs",
                            className: "dc-progress-slider__ticks-caption",
                            children: [a().TICK, " ", t]
                        }), (0, l.jsx)("div", {
                            className: "dc-progress-slider__ticks-wrapper",
                            children: n.map(e => (0, l.jsx)("div", {
                                className: R()("dc-progress-slider__ticks-step", {
                                    "dc-progress-slider__ticks-step--marked": e + 1 <= Number(t)
                                })
                            }, e))
                        })]
                    })
                },
                tU = e => {
                    let {
                        className: t,
                        current_tick: a,
                        expiry_time: s,
                        getCardLabels: n,
                        is_loading: r,
                        server_time: o,
                        start_time: d,
                        ticks_count: c
                    } = e, _ = (0, x.dq6)(o, Number(d), Number(s));
                    return (0, l.jsx)("div", {
                        className: R()("dc-progress-slider", t),
                        children: c ? (0, l.jsx)(tL, {
                            current_tick: a,
                            getCardLabels: n,
                            ticks_count: c
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(K.Z, {
                                size: "xxxs",
                                className: "dc-progress-slider__remaining-time",
                                children: (0, l.jsx)(tl, {
                                    end_time: s,
                                    getCardLabels: n,
                                    start_time: o
                                })
                            }), r || _ < 1 ? (0, l.jsx)("div", {
                                className: "dc-progress-slider__infinite-loader",
                                children: (0, l.jsx)("div", {
                                    className: "dc-progress-slider__infinite-loader--indeterminate"
                                })
                            }) : (0, l.jsx)("div", {
                                className: "dc-progress-slider__track",
                                children: (0, l.jsx)("div", {
                                    className: R()("dc-progress-slider__line", {
                                        "dc-progress-slider__line--green": _ >= 50,
                                        "dc-progress-slider__line--yellow": _ < 50 && _ >= 20,
                                        "dc-progress-slider__line--red": _ < 20
                                    }),
                                    style: {
                                        width: `${_}%`
                                    }
                                })
                            })]
                        })
                    })
                },
                tZ = e => {
                    let {
                        displayed_trade_param: t,
                        getContractTypeDisplay: a,
                        is_high_low: s,
                        is_multipliers: n,
                        is_turbos: i,
                        type: r = ""
                    } = e, o = "";
                    return s && (o = "CALL" === r ? "HIGHER" : "LOWER"), (0, l.jsxs)("div", {
                        className: "dc-contract-type",
                        children: [(0, l.jsx)("div", {
                            className: "dc-contract-type__type-wrapper",
                            children: (0, l.jsx)(z, {
                                type: s && !(0, x.Yeo)(r) ? o : r,
                                className: "category-type",
                                size: "md"
                            })
                        }), (0, l.jsxs)("div", {
                            className: R()("dc-contract-type__type-label", {
                                "dc-contract-type__type-label--smarttrader-contract": (0, x.xGd)(r),
                                "dc-contract-type__type-label--lookbacks-contract": (0, x.vxy)(r),
                                "dc-contract-type__type-label--multipliers": n
                            }),
                            children: [(0, l.jsx)("div", {
                                children: a(r, {
                                    isHighLow: s,
                                    showMainTitle: n || i
                                }) || ""
                            }), t && (0, l.jsx)("div", {
                                className: "dc-contract-type__type-label-trade-param",
                                children: t
                            })]
                        })]
                    })
                },
                tB = i.memo(e => {
                    let {
                        current_tick: t,
                        label: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "dc-tick-counter-bar__container",
                        children: (0, l.jsx)("div", {
                            className: "dc-tick-counter-bar__track",
                            children: (0, l.jsx)(K.Z, {
                                size: "xxs",
                                weight: "bold",
                                align: "center",
                                color: "profit-success",
                                className: "dc-tick-counter-bar__text",
                                children: `${t} ${a}`
                            })
                        })
                    })
                }),
                tF = e => {
                    let {
                        currency: t,
                        contract_id: a,
                        getCardLabels: s,
                        getContractPath: n,
                        is_positions: r,
                        is_visible: o,
                        onClickRemove: d,
                        payout_info: c,
                        result: _
                    } = e, u = "won" === _;
                    return (0, l.jsx)(i.Fragment, {
                        children: (0, l.jsx)(ef.Z, { in: o,
                            timeout: 250,
                            classNames: {
                                enter: "dc-contract-card__result--enter",
                                enterDone: "dc-contract-card__result--enter-done",
                                exit: "dc-contract-card__result--exit"
                            },
                            unmountOnExit: !0,
                            children: (0, l.jsxs)("div", {
                                id: `dc_contract_card_${a}_result`,
                                className: R()("dc-contract-card__result", {
                                    "dc-result__positions-overlay": r,
                                    "dc-contract-card__result--won": u,
                                    "dc-contract-card__result--lost": !u
                                }),
                                children: [r && (0, l.jsx)("span", {
                                    id: `dc_contract_card_${a}_result_close_icon`,
                                    className: "dc-result__close-btn",
                                    onClick: () => {
                                        a && (null == d || d(a))
                                    }
                                }), n && (0, l.jsx)(en.OL, {
                                    className: "dc-result__caption-wrapper",
                                    to: n(a)
                                }), (0, l.jsxs)("div", {
                                    className: "dc-result__content",
                                    children: [(0, l.jsx)(t_, {
                                        getCardLabels: s,
                                        is_contract_won: u
                                    }), (0, l.jsx)(K.Z, {
                                        weight: "bold",
                                        size: "s",
                                        lineHeight: "2xl",
                                        color: u ? "profit-success" : "loss-danger",
                                        children: (0, l.jsx)(e0.Z, {
                                            amount: c,
                                            currency: t,
                                            has_sign: !0,
                                            show_currency: !0
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                tz = e => {
                    let {
                        children: t,
                        contract_info: a,
                        getCardLabels: s,
                        getContractPath: n,
                        is_multiplier: r,
                        is_positions: o,
                        onClickRemove: d,
                        profit_loss: c,
                        result: _,
                        should_show_result_overlay: u
                    } = e, m = r ? (0, e4.vM)(a) : c;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [u && (0, l.jsx)(e9.Z, {
                            children: (0, l.jsx)(tF, {
                                contract_id: a.contract_id,
                                currency: a.currency,
                                getCardLabels: s,
                                getContractPath: n,
                                is_multiplier: r,
                                is_visible: !!a.is_sold,
                                onClickRemove: d,
                                payout_info: m,
                                result: _ || (c >= 0 ? "won" : "lost"),
                                is_positions: o
                            })
                        }), t]
                    })
                };
            tz.Header = e => {
                var t;
                let {
                    contract_info: a,
                    display_name: s,
                    getCardLabels: n,
                    getContractTypeDisplay: r,
                    has_progress_slider: o,
                    id: d,
                    is_sell_requested: c,
                    is_sold: _,
                    is_valid_to_sell: u,
                    onClickSell: m,
                    server_time: h
                } = e, p = a.tick_count ? (0, x.v3q)(a) : null, {
                    growth_rate: j,
                    underlying: b,
                    multiplier: y,
                    contract_type: g,
                    shortcode: f,
                    purchase_time: N,
                    date_expiry: C,
                    tick_count: w,
                    tick_passed: k
                } = a, T = !!a.is_sold || _, E = (0, x.XtD)(g), S = (0, x.xGd)(g), {
                    isMobile: A
                } = (0, v.F)(), I = (0, x.MOe)(g), M = (0, x.L8o)(g), O = (0, x.CY$)({
                    shortcode: f
                }), D = (null === (t = i.useMemo(() => [{
                    is_param_displayed: M,
                    displayed_param: `${r(g??"",{isHighLow:O})} x${y}`.trim()
                }, {
                    is_param_displayed: E,
                    displayed_param: `${(0,x.dR9)(j||0)}%`
                }, {
                    is_param_displayed: I,
                    displayed_param: (0, x.Lp7)(g)
                }], [g, j, y, E, M, I, O]).find(e => e.is_param_displayed)) || void 0 === t ? void 0 : t.displayed_param) || "";
                return (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: R()("dc-contract-card__grid", "dc-contract-card__grid-underlying-trade", {
                            "dc-contract-card__grid-underlying-trade--trader": false,
                            "dc-contract-card__grid-underlying-trade--trader--accumulator": false,
                            "dc-contract-card__grid-underlying-trade--trader--sold": (E || I || M) && T
                        }),
                        children: [(0, l.jsxs)("div", {
                            id: "dc-contract_card_underlying_label",
                            className: R()("dc-contract-card__underlying-name", {
                                "dc-contract-card__underlying-name--accumulator": E
                            }),
                            children: [(0, l.jsx)(Z, {
                                type: b ? ? "",
                                size: "md"
                            }), (0, l.jsx)(K.Z, {
                                size: "xxs",
                                className: R()("dc-contract-card__symbol", {
                                    "dc-contract-card__symbol--smarttrader-contract": S
                                }),
                                weight: "bold",
                                children: s || a.display_name
                            })]
                        }), (0, l.jsx)("div", {
                            id: "dc-contract_card_type_label",
                            className: R()("dc-contract-card__type", {
                                "dc-contract-card__type--accumulators": E
                            }),
                            children: (0, l.jsx)(tZ, {
                                displayed_trade_param: D,
                                getContractTypeDisplay: r,
                                is_high_low: O,
                                is_multipliers: M,
                                is_turbos: I,
                                type: g
                            })
                        }), (0, l.jsx)(eH.Z, {
                            children: u ? (0, l.jsx)(ef.Z, { in: !!u,
                                timeout: 250,
                                classNames: {
                                    enter: "dc-contract-card__sell-button--enter",
                                    enterDone: "dc-contract-card__sell-button--enter-done",
                                    exit: "dc-contract-card__sell-button--exit"
                                },
                                unmountOnExit: !0,
                                children: (0, l.jsx)("div", {
                                    className: "dc-contract-card__sell-button-mobile",
                                    children: (0, l.jsx)(tp.z, {
                                        id: `dc_contract_card_${d}_button`,
                                        className: R()("dc-btn--sell", {
                                            "dc-btn--loading": c
                                        }),
                                        disabled: !u || c,
                                        onClick: () => m(d),
                                        variant: "outlined",
                                        children: n().SELL
                                    })
                                })
                            }) : null
                        })]
                    }), !T && E && (0, l.jsx)(tB, {
                        current_tick: k,
                        label: n().TICKS
                    }), (0, l.jsx)(eH.Z, {
                        children: (0, l.jsx)("div", {
                            className: "dc-progress-slider--completed"
                        })
                    }), (0, l.jsxs)(e9.Z, {
                        children: [(!o || !!T) && (0, l.jsx)("div", {
                            className: "dc-progress-slider--completed"
                        }), o && !T && !E && (0, l.jsx)(tU, {
                            current_tick: p,
                            expiry_time: C,
                            getCardLabels: n,
                            is_loading: !1,
                            server_time: h,
                            start_time: N,
                            ticks_count: w
                        })]
                    })]
                })
            }, tz.Body = e => {
                let t, {
                        addToast: a,
                        contract_info: s,
                        contract_update: n,
                        currency: r,
                        current_focus: o,
                        error_message_alignment: d,
                        getCardLabels: c,
                        getContractById: _,
                        has_progress_slider: u,
                        is_accumulator: m,
                        is_mobile: h,
                        is_multiplier: p,
                        is_positions: j,
                        is_sold: v,
                        is_turbos: b,
                        is_vanilla: y,
                        is_lookbacks: g,
                        onMouseLeave: f,
                        removeToast: N,
                        server_time: C,
                        setCurrentFocus: w,
                        should_show_cancellation_warning: k,
                        toggleCancellationWarning: T
                    } = e,
                    E = (0, x.Kq_)(s),
                    {
                        buy_price: S,
                        sell_price: A,
                        payout: I,
                        profit: M,
                        tick_count: O,
                        date_expiry: D,
                        purchase_time: L
                    } = s,
                    U = O ? (0, x.v3q)(s) : null,
                    {
                        CONTRACT_VALUE: Z,
                        POTENTIAL_PAYOUT: B,
                        TOTAL_PROFIT_LOSS: F,
                        STAKE: z
                    } = c(),
                    P = (0, l.jsx)(td, {
                        current_tick: U,
                        expiry_time: D,
                        getCardLabels: c,
                        is_loading: !1,
                        server_time: C,
                        start_time: L,
                        ticks_count: O
                    }),
                    X = {
                        addToast: a,
                        current_focus: o,
                        error_message_alignment: d,
                        getContractById: _,
                        onMouseLeave: f,
                        removeToast: N,
                        setCurrentFocus: w,
                        totalProfit: p && !isNaN(Number(M)) ? (0, x.vMw)(s) : Number(M)
                    };
                return t = p ? (0, l.jsx)(tI, {
                    contract_info: s,
                    contract_update: n,
                    currency: r,
                    getCardLabels: c,
                    has_progress_slider: u,
                    progress_slider: P,
                    is_mobile: h,
                    is_sold: v,
                    should_show_cancellation_warning: k,
                    toggleCancellationWarning: T,
                    ...X
                }) : m ? (0, l.jsx)(tE, {
                    contract_info: s,
                    contract_update: n,
                    currency: r,
                    getCardLabels: c,
                    indicative: E,
                    is_sold: v,
                    is_positions: j,
                    ...X
                }) : b ? (0, l.jsx)(tR, {
                    contract_info: s,
                    contract_update: n,
                    currency: r,
                    getCardLabels: c,
                    is_sold: v,
                    progress_slider_mobile_el: P,
                    ...X
                }) : y ? (0, l.jsx)(tM, {
                    contract_info: s,
                    currency: r,
                    getCardLabels: c,
                    is_sold: v,
                    progress_slider: P
                }) : g ? (0, l.jsx)(tS, {
                    contract_info: s,
                    currency: r,
                    is_sold: v,
                    indicative: E,
                    progress_slider_mobile_el: P
                }) : (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: "dc-contract-card-items-wrapper",
                        children: [(0, l.jsxs)(tu, {
                            header: F,
                            is_crypto: (0, x.oS6)(r),
                            is_loss: 0 > Number(M),
                            is_won: Number(M) > 0,
                            children: [(0, l.jsx)(e0.Z, {
                                amount: M,
                                currency: r
                            }), !v && (0, l.jsx)(tt, {
                                className: "dc-contract-card__indicative--movement",
                                value: M
                            })]
                        }), (0, l.jsxs)(tu, {
                            header: Z,
                            children: [(0, l.jsx)("div", {
                                className: R()({
                                    "dc-contract-card--profit": Number(M) > 0,
                                    "dc-contract-card--loss": 0 > Number(M)
                                }),
                                children: (0, l.jsx)(e0.Z, {
                                    currency: r,
                                    amount: Number(A || E)
                                })
                            }), !v && (0, l.jsx)(tt, {
                                className: "dc-contract-card__indicative--movement",
                                value: Number(A || E)
                            })]
                        }), (0, l.jsx)(tu, {
                            header: z,
                            children: (0, l.jsx)(e0.Z, {
                                amount: S,
                                currency: r
                            })
                        }), (0, l.jsx)(tu, {
                            header: B,
                            children: (0, l.jsx)(e0.Z, {
                                currency: r,
                                amount: I
                            })
                        })]
                    }), (0, l.jsx)(eH.Z, {
                        children: (0, l.jsx)("div", {
                            className: "dc-contract-card__status",
                            children: v ? (0, l.jsx)(t_, {
                                getCardLabels: c,
                                is_contract_won: "won" === (0, x.efd)(s)
                            }) : P
                        })
                    })]
                }), (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(ta, {
                        currency: r
                    }), (0, l.jsx)(e9.Z, {
                        children: t
                    }), (0, l.jsx)(eH.Z, {
                        children: (0, l.jsx)("div", {
                            className: R()("dc-contract-card__separatorclass", {
                                "dc-contract-card__body-wrapper": !p && !b && !g
                            }),
                            children: t
                        })
                    })]
                })
            }, tz.Footer = e => {
                let {
                    contract_info: t,
                    getCardLabels: a,
                    is_multiplier: s,
                    is_positions: n,
                    is_sell_requested: r,
                    is_lookbacks: o,
                    onClickCancel: d,
                    onClickSell: c,
                    onFooterEntered: _,
                    server_time: u,
                    should_show_transition: m
                } = e, {
                    in_prop: h
                } = (0, x.hwq)(!!m), p = (0, x.Dlf)(t), j = (0, x._mr)(t) && (0, x.FJ7)(t), v = o && (0, x.iBr)(t) && j;
                return j ? (0, l.jsx)(ef.Z, { in: h,
                    timeout: m ? 250 : 0,
                    classNames: m ? {
                        enter: "dc-contract-card__sell-button--enter",
                        enterDone: "dc-contract-card__sell-button--enter-done",
                        exit: "dc-contract-card__sell-button--exit"
                    } : {},
                    onEntered: _,
                    unmountOnExit: !0,
                    children: (0, l.jsx)("div", {
                        className: "dc-contract-card-item__footer",
                        children: s ? (0, l.jsx)("div", {
                            className: R()("dc-contract-card__sell-button", {
                                "dc-contract-card__sell-button--has-cancel-btn": p,
                                "dc-contract-card__sell-button--positions": n
                            }),
                            children: (0, l.jsx)(tD, {
                                className: "dc-btn--sell",
                                contract_info: t,
                                getCardLabels: a,
                                is_sell_requested: r,
                                onClickCancel: d,
                                onClickSell: c,
                                server_time: u
                            })
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: R()("dc-contract-card__sell-button", {
                                    "dc-contract-card__sell-button--positions": n
                                }),
                                children: (0, l.jsx)(tO, {
                                    contract_info: t,
                                    is_sell_requested: r,
                                    getCardLabels: a,
                                    onClickSell: c
                                })
                            }), v && (0, l.jsx)(K.Z, {
                                as: "div",
                                size: "xxxs",
                                color: "less-prominent",
                                lineHeight: "s",
                                className: "lookbacks--note",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "<0>Note:</0> Contract will be sold at the prevailing market price when the request is received by our servers. This price may differ from the indicated price.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            })]
                        })
                    })
                }) : null
            }, tz.Loader = e2, tz.ContractTypeCell = tZ, tz.MultiplierCloseActions = tD, tz.Sell = tO;
            let tP = (0, r.Pi)(e => {
                let {
                    contract_info: t,
                    is_contract_loading: a,
                    is_bot_running: s
                } = e, {
                    summary_card: n,
                    run_panel: r,
                    ui: o,
                    common: d
                } = (0, p.oR)(), {
                    is_contract_completed: c,
                    is_contract_inactive: _,
                    is_multiplier: u,
                    is_accumulator: m,
                    setIsBotRunning: h
                } = n, {
                    onClickSell: j,
                    is_sell_requested: b,
                    contract_stage: y
                } = r, {
                    addToast: g,
                    current_focus: f,
                    removeToast: N,
                    setCurrentFocus: C
                } = o, {
                    server_time: w
                } = d, {
                    isDesktop: k
                } = (0, v.F)();
                i.useEffect(() => h(), [a]);
                let T = (0, l.jsx)(tz.Header, {
                        contract_info: t,
                        getCardLabels: x.gk9,
                        getContractTypeDisplay: e3.h8,
                        has_progress_slider: !u,
                        is_sold: c,
                        server_time: w
                    }),
                    E = (0, l.jsx)(tz.Body, {
                        addToast: g,
                        contract_info: t,
                        currency: (null == t ? void 0 : t.currency) ? ? "",
                        current_focus: f,
                        error_message_alignment: "left",
                        getCardLabels: x.gk9,
                        getContractById: () => n,
                        is_mobile: !k,
                        is_multiplier: u,
                        is_accumulator: m,
                        is_sold: c,
                        removeToast: N,
                        server_time: w,
                        setCurrentFocus: C
                    }),
                    S = (0, l.jsx)(tz.Footer, {
                        contract_info: t,
                        getCardLabels: x.gk9,
                        is_multiplier: u,
                        is_sell_requested: b,
                        onClickSell: j
                    }),
                    I = (0, l.jsxs)(i.Fragment, {
                        children: [T, E, S]
                    });
                return (0, l.jsxs)("div", {
                    className: R()("db-summary-card", {
                        "db-summary-card--mobile": !k,
                        "db-summary-card--inactive": _ && !a && !t,
                        "db-summary-card--completed": c,
                        "db-summary-card--completed-mobile": c && !k,
                        "db-summary-card--delayed-loading": s
                    }),
                    "data-testid": "dt_mock_summary_card",
                    children: [a && !s && (0, l.jsx)(e2, {
                        speed: 2
                    }), s && (0, l.jsx)(e2, {
                        speed: 2,
                        contract_stage: y
                    }), !a && t && !s && (0, l.jsx)(tz, {
                        contract_info: t,
                        getCardLabels: x.gk9,
                        is_multiplier: u,
                        profit_loss: t.profit,
                        should_show_result_overlay: !0,
                        children: (0, l.jsx)("div", {
                            className: R()("dc-contract-card", {
                                "dc-contract-card--green": t.profit > 0,
                                "dc-contract-card--red": t.profit < 0
                            }),
                            children: I
                        })
                    }), !a && !t && !s && (0, l.jsxs)(K.Z, {
                        as: "p",
                        align: "center",
                        lineHeight: "s",
                        size: "xs",
                        children: [(0, A.NC)("When you’re ready to trade, hit "), (0, l.jsx)("strong", {
                            className: "summary-panel-inactive__strong",
                            children: (0, A.NC)("Run")
                        }), (0, A.NC)(". You’ll be able to track your bot’s performance here.")]
                    })]
                })
            });
            var tX = a("79907");
            let tH = (0, r.Pi)(e => {
                    let {
                        timedContracts: t,
                        is_bot_running: a
                    } = e, {
                        run_panel: s,
                        journal: n,
                        client: r,
                        summary_card: o
                    } = (0, p.oR)(), {
                        isDesktop: d
                    } = (0, v.F)(), [c, _] = i.useState(new Set), [u, m] = i.useState(new Set), x = async e => {
                        let a = String((null == e ? void 0 : e.contract_id) || "");
                        if (!(!a || c.has(a))) {
                            _(e => new Set([...e, a])), s.is_sell_requested = !0;
                            try {
                                console.log("Selling contract from summary:", a);
                                let e = await tX.D.api.send({
                                    sell: a,
                                    price: 0
                                });
                                if (e.error) console.error("Summary sell error:", e.error), n.onLogSuccess({
                                    log_type: D.LogTypes.NOTIFY,
                                    extra: {
                                        currency: (null == r ? void 0 : r.currency) || "USD",
                                        content: `Sell failed: ${e.error.message}`
                                    }
                                });
                                else {
                                    if (console.log("Summary sell successful:", e), m(e => new Set([...e, a])), t.has(a)) {
                                        let e = { ...t.get(a),
                                            is_valid_to_sell: !1,
                                            is_sold: !0,
                                            status: "sold"
                                        };
                                        t.set(a, e)
                                    }
                                    n.onLogSuccess({
                                        log_type: D.LogTypes.NOTIFY,
                                        extra: {
                                            currency: (null == r ? void 0 : r.currency) || "USD",
                                            content: "Contract sold successfully from summary panel"
                                        }
                                    })
                                }
                            } catch (e) {
                                console.error("Summary sell error:", e), n.onLogSuccess({
                                    log_type: D.LogTypes.NOTIFY,
                                    extra: {
                                        currency: (null == r ? void 0 : r.currency) || "USD",
                                        content: "Sell failed: Network error"
                                    }
                                })
                            } finally {
                                _(e => {
                                    let t = new Set(e);
                                    return t.delete(a), t
                                }), s.is_sell_requested = !1
                            }
                        }
                    };
                    return a && (!t || 0 === t.size) ? (0, l.jsx)("div", {
                        className: "db-summary-card",
                        children: (0, l.jsx)(e2, {
                            speed: 2
                        })
                    }) : t && 0 !== t.size ? (0, l.jsxs)("div", {
                        className: "timed-contracts-summary",
                        children: [(0, l.jsx)("div", {
                            className: "timed-contracts-summary__header",
                            children: (0, l.jsx)(K.Z, {
                                size: "sm",
                                weight: "bold",
                                align: "center",
                                children: `Active Timed Trades (${t.size})`
                            })
                        }), (0, l.jsx)("div", {
                            className: "timed-contracts-summary__grid",
                            children: Array.from(t.values()).map(e => {
                                let t = Number((null == e ? void 0 : e.profit) || 0),
                                    a = Number((null == e ? void 0 : e.buy_price) || 0),
                                    s = a > 0 ? t / a * 100 : 0,
                                    n = t > 0,
                                    i = String((null == e ? void 0 : e.contract_id) || ""),
                                    r = (null == e ? void 0 : e.is_valid_to_sell) && !c.has(i) && !u.has(i) && !(null == e ? void 0 : e.is_sold);
                                return (0, l.jsxs)("div", {
                                    className: R()("timed-contract-card", {
                                        "timed-contract-card--profit": n,
                                        "timed-contract-card--loss": t < 0
                                    }),
                                    children: [(0, l.jsxs)("div", {
                                        className: "timed-contract-card__header",
                                        children: [(0, l.jsx)(K.Z, {
                                            size: "xs",
                                            weight: "bold",
                                            children: String((null == e ? void 0 : e.contract_type) || "UNKNOWN")
                                        }), (0, l.jsxs)(K.Z, {
                                            size: "xs",
                                            className: "timed-contract-card__id",
                                            children: ["#", i.slice(-6) || "Unknown"]
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "timed-contract-card__stats",
                                        children: [(0, l.jsxs)("div", {
                                            className: "timed-contract-card__stat",
                                            children: [(0, l.jsx)(K.Z, {
                                                size: "xs",
                                                children: "Stake"
                                            }), (0, l.jsxs)(K.Z, {
                                                size: "xs",
                                                weight: "bold",
                                                children: ["$", a.toFixed(2)]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "timed-contract-card__stat",
                                            children: [(0, l.jsx)(K.Z, {
                                                size: "xs",
                                                children: "P&L"
                                            }), (0, l.jsxs)(K.Z, {
                                                size: "xs",
                                                weight: "bold",
                                                style: {
                                                    color: n ? "#4caf50" : "#f44336"
                                                },
                                                children: ["$", t.toFixed(2)]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "timed-contract-card__stat",
                                            children: [(0, l.jsx)(K.Z, {
                                                size: "xs",
                                                children: "%"
                                            }), (0, l.jsxs)(K.Z, {
                                                size: "xs",
                                                weight: "bold",
                                                style: {
                                                    color: n ? "#4caf50" : "#f44336"
                                                },
                                                children: [s > 0 ? "+" : "", s.toFixed(1), "%"]
                                            })]
                                        })]
                                    }), r && (0, l.jsx)("button", {
                                        className: R()("timed-contract-card__sell-btn", {
                                            "timed-contract-card__sell-btn--profit": n,
                                            "timed-contract-card__sell-btn--loss": t < 0
                                        }),
                                        onClick: () => x(e),
                                        disabled: c.has(i),
                                        children: c.has(i) ? (0, A.NC)("Selling...") : n ? (0, A.NC)("Take Profit") : (0, A.NC)("Cut Loss")
                                    }), !r && (!1 === e.is_valid_to_sell || u.has(i) || (null == e ? void 0 : e.is_sold)) && (0, l.jsx)(K.Z, {
                                        size: "xs",
                                        align: "center",
                                        className: "timed-contract-card__status",
                                        children: u.has(i) || (null == e ? void 0 : e.is_sold) ? (0, A.NC)("Contract Sold") : (0, A.NC)("Cannot sell")
                                    })]
                                }, i || Math.random())
                            })
                        })]
                    }) : (0, l.jsx)("div", {
                        className: "db-summary-card db-summary-card--inactive",
                        children: (0, l.jsxs)(K.Z, {
                            as: "p",
                            align: "center",
                            lineHeight: "s",
                            size: "xs",
                            children: [(0, A.NC)("When you're ready to trade, hit "), (0, l.jsx)("strong", {
                                className: "summary-panel-inactive__strong",
                                children: (0, A.NC)("Run")
                            }), (0, A.NC)(". You'll be able to track your bot's performance here.")]
                        })
                    })
                }),
                t$ = (0, r.Pi)(e => {
                    let {
                        is_drawer_open: t
                    } = e, {
                        dashboard: a,
                        summary_card: s
                    } = (0, p.oR)(), {
                        is_contract_loading: n,
                        contract_info: i,
                        is_bot_running: r
                    } = s, {
                        active_tour: o
                    } = a, {
                        isDesktop: d
                    } = (0, v.F)(), c = s.__timedActiveContracts, _ = c && c.size > 0;
                    return (0, l.jsx)("div", {
                        className: R()({
                            "run-panel-tab__content": d,
                            "run-panel-tab__content--mobile": !d && t,
                            "run-panel-tab__content--summary-tab": d && t || o
                        }),
                        "data-testid": "mock-summary",
                        children: (0, l.jsx)(ea.Z, {
                            className: R()({
                                summary: !n && !i && !_ || r,
                                "summary--loading": !d && n || !d && !n && (i || _)
                            }),
                            children: _ ? (0, l.jsx)(tH, {
                                timedContracts: c,
                                is_bot_running: r
                            }) : (0, l.jsx)(tP, {
                                is_contract_loading: n,
                                contract_info: i,
                                is_bot_running: r
                            })
                        })
                    })
                });
            var tV = a("71766"),
                tG = a("54176");
            let tq = e => {
                let {
                    profit: t
                } = e, a = t >= 0;
                return (0, l.jsx)("div", {
                    className: R()("db-contract-card__result", {
                        "db-contract-card__result--won": a,
                        "db-contract-card__result--lost": !a
                    }),
                    children: (0, l.jsx)(K.Z, {
                        weight: "bold",
                        className: "db-contract-card__result-caption",
                        children: a ? (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(A.Xx, {
                                i18n_default_text: "Won"
                            }), (0, l.jsx)(tV.Z, {
                                className: "db-contract-card__result-icon",
                                color: "green"
                            })]
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(A.Xx, {
                                i18n_default_text: "Lost"
                            }), (0, l.jsx)(tG.Z, {
                                className: "db-contract-card__result-icon",
                                color: "red"
                            })]
                        })
                    })
                })
            };
            var tY = a("16854"),
                tW = a("67109"),
                tK = a("89057");
            let tJ = e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: R()("circular-wrapper", t),
                        children: [(0, l.jsx)("span", {
                            className: "static-circle"
                        }), (0, l.jsx)("span", {
                            className: "dynamic-circle"
                        })]
                    })
                },
                tQ = Object.freeze({
                    NOT_RUNNING: "Bot is not running",
                    STARTING: "Bot is starting",
                    RUNNING: "Bot running",
                    PURCHASE_SENT: "Buying contract",
                    PURCHASE_RECEIVED: "Contract bought",
                    IS_STOPPING: "Bot is stopping",
                    CONTRACT_CLOSED: "Contract closed"
                }),
                t0 = e => {
                    let {
                        contract_stage: t
                    } = e;
                    switch (void 0 !== t ? t : J.K.NOT_RUNNING) {
                        case J.K.STARTING:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.STARTING
                            });
                        case J.K.RUNNING:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.RUNNING
                            });
                        case J.K.PURCHASE_SENT:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.PURCHASE_SENT
                            });
                        case J.K.PURCHASE_RECEIVED:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.PURCHASE_RECEIVED
                            });
                        case J.K.IS_STOPPING:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.IS_STOPPING
                            });
                        case J.K.CONTRACT_CLOSED:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.CONTRACT_CLOSED
                            });
                        case J.K.NOT_RUNNING:
                        default:
                            return (0, l.jsx)(A.Xx, {
                                i18n_default_text: tQ.NOT_RUNNING
                            })
                    }
                },
                t1 = (0, r.Pi)(e => {
                    let {
                        className: t,
                        should_show_overlay: a
                    } = e, {
                        dashboard: s,
                        run_panel: n,
                        summary_card: r,
                        blockly_store: o
                    } = (0, p.oR)(), {
                        client: d
                    } = (0, p.oR)(), {
                        active_tab: c
                    } = s, {
                        has_active_bot: _,
                        has_saved_bots: u
                    } = o, {
                        isMobile: m
                    } = (0, v.F)(), {
                        is_contract_completed: x,
                        profit: h
                    } = r, {
                        contract_stage: j,
                        is_stop_button_visible: b,
                        is_stop_button_disabled: y,
                        onRunButtonClick: g,
                        onStopBotClick: f,
                        performSelfExclusionCheck: N
                    } = n, {
                        account_status: C
                    } = d, w = null == C ? void 0 : C.cashier_validation, [k, T] = i.useState(!1), E = null == w ? void 0 : w.includes("WithdrawServiceUnavailableForPA");
                    i.useEffect(() => {
                        N()
                    }, []);
                    let {
                        load_modal: S
                    } = (0, p.oR)(), {
                        dashboard_strategies: I,
                        is_delete_modal_open: M
                    } = S, O = i.useRef(M);
                    i.useEffect(() => {
                        (async () => {
                            await o.checkForSavedBots()
                        })()
                    }, [I, M, b]), i.useEffect(() => {
                        O.current && !M && (async () => {
                            await new Promise(e => setTimeout(e, 100)), await o.checkForSavedBots(), !b && (T(!0), setTimeout(() => T(!1), 0))
                        })(), O.current = M
                    }, [M, b]), i.useEffect(() => {
                        k && setTimeout(() => {
                            T(!1)
                        }, 1e3)
                    }, [k, b]);
                    let D = ["", "", ""],
                        L = j === J.K.PURCHASE_SENT,
                        U = j === J.K.PURCHASE_RECEIVED,
                        Z = j - (L || U ? 2 : 3);
                    if (Z >= 0) {
                        Z < D.length && (D[Z] = "active"), x && (Z += 1);
                        for (let e = 0; e < Z - 1; e++) D[e] = "completed"
                    }
                    let B = !_ && !u,
                        F = [eO.ve.BOT_BUILDER, eO.ve.PROFIT, eO.ve.DANALYSIS, eO.ve.TRADING_VIEW, eO.ve.CHART, eO.ve.AUTO_TRADES].includes(c),
                        z = !b && (k || B && !F),
                        P = !b && !F && B,
                        X = i.useMemo(() => b && !y ? {
                            id: "db-animation__stop-button",
                            class: "animation__stop-button",
                            text: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Stop"
                            }),
                            icon: (0, l.jsx)(tY.Z, {
                                fill: "#fff"
                            })
                        } : {
                            id: "db-animation__run-button",
                            class: "animation__run-button",
                            text: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Run"
                            }),
                            icon: (0, l.jsx)(tW.Z, {
                                fill: "#fff"
                            })
                        }, [b]),
                        H = a && x,
                        $ = "number" == typeof c ? c : 0,
                        [V, G] = i.useState(() => localStorage.getItem("auto_trades_active_tab") || "rise-fall");
                    i.useEffect(() => {
                        let e = e => {
                            G(e.detail.activeTab)
                        };
                        return window.addEventListener("autoTradesTabChange", e), () => {
                            window.removeEventListener("autoTradesTabChange", e)
                        }
                    }, []);
                    let q = i.useMemo(() => c === eO.ve.AUTO_TRADES && "matches-differs" !== V, [c, V]);
                    return (0, l.jsxs)("div", {
                        className: R()("animation__wrapper", t),
                        children: [!q && (0, l.jsx)(l.Fragment, {
                            children: P ? (0, l.jsxs)("div", {
                                className: "run__button_wrapper",
                                children: [(0, l.jsx)(ty, {
                                    alignment: (() => {
                                        if (m) return "top";
                                        try {
                                            let e = document.querySelector(".run__button_wrapper");
                                            if (e) {
                                                let t = e.getBoundingClientRect(),
                                                    a = "number" == typeof t.bottom ? t.bottom : 0,
                                                    s = "number" == typeof window.innerHeight ? window.innerHeight : 0;
                                                return a > s - 150 ? "top" : "left"
                                            }
                                        } catch (e) {
                                            console.error("Error determining tooltip position:", e)
                                        }
                                        return "left"
                                    })(),
                                    message: (0, A.NC)("The Run button is disabled because no Bot has been created yet."),
                                    icon: "info",
                                    className: "qs__tooltip"
                                }), (0, l.jsx)("div", {
                                    style: {
                                        opacity: .5,
                                        marginLeft: "8px"
                                    },
                                    children: (0, l.jsx)(ek.Z, {
                                        is_disabled: !0,
                                        className: X.class,
                                        id: X.id,
                                        icon: X.icon,
                                        onClick: () => {},
                                        has_effect: !0,
                                        ...b || !E ? {
                                            primary: !0
                                        } : {
                                            green: !0
                                        },
                                        children: X.text
                                    })
                                })]
                            }) : (0, l.jsx)(ek.Z, {
                                is_disabled: z && !E || 3 === j,
                                className: X.class,
                                id: X.id,
                                icon: X.icon,
                                onClick: () => {
                                    if (T(!0), b) {
                                        f();
                                        return
                                    }
                                    g(), (0, tK.GE)({
                                        subpage_name: $
                                    })
                                },
                                has_effect: !0,
                                ...b || !E ? {
                                    primary: !0
                                } : {
                                    green: !0
                                },
                                children: X.text
                            })
                        }), (0, l.jsxs)("div", {
                            className: R()("animation__container", t, {
                                "animation--running": j > 0,
                                "animation--completed": H,
                                "animation--disabled": z
                            }),
                            children: [H && (0, l.jsx)(tq, {
                                profit: h
                            }), (0, l.jsx)("span", {
                                className: "animation__text",
                                children: (0, l.jsx)(t0, {
                                    contract_stage: j
                                })
                            }), (0, l.jsxs)("div", {
                                className: "animation__progress",
                                children: [(0, l.jsx)("div", {
                                    className: "animation__progress-line",
                                    children: (0, l.jsx)("div", {
                                        className: `animation__progress-bar animation__progress-${j}`
                                    })
                                }), D.map((e, t) => (0, l.jsx)(tJ, {
                                    className: e
                                }, `status_class-${e}-${t}`))]
                            })]
                        })]
                    })
                }),
                t3 = i.memo(e => {
                    var t, a;
                    let {
                        className: s,
                        column: n,
                        is_footer: i,
                        passthrough: r,
                        row: o
                    } = e;
                    if (!n) return null;
                    let {
                        col_index: d,
                        title: c
                    } = n, _ = null == o ? void 0 : o[d], u = (0, x.MOe)(null == o ? void 0 : null === (t = o.contract_info) || void 0 === t ? void 0 : t.contract_type), m = (0, x.Yeo)(null == o ? void 0 : null === (a = o.contract_info) || void 0 === a ? void 0 : a.contract_type);
                    return (0, l.jsxs)("div", {
                        className: R()(s, n.col_index),
                        children: [!i && (0, l.jsx)("div", {
                            className: R()(`${n.col_index}__row-title`, "data-list__row-title"),
                            children: n.renderHeader ? n.renderHeader({
                                title: c,
                                is_vanilla: m
                            }) : c
                        }), (0, l.jsx)("div", {
                            className: "data-list__row-content",
                            children: n.renderCellContent ? n.renderCellContent({
                                cell_value: _,
                                is_footer: i,
                                passthrough: r,
                                row_obj: o,
                                is_vanilla: m,
                                is_turbos: u
                            }) : _
                        })]
                    })
                }),
                t8 = i.memo(e => {
                    let {
                        action_desc: t,
                        destination_link: a,
                        row_gap: s,
                        row_key: n,
                        rowRenderer: r,
                        measure: o,
                        is_dynamic_height: d,
                        ...c
                    } = e, [_, u] = i.useState(!1), m = (0, x.tmR)(), h = ei(() => u(!1), 5e3), p = () => {
                        t && (u(!_), h())
                    }, j = e => {
                        (0, x.K9$)(p, e)
                    };
                    return i.useEffect(() => {
                        m() && d && (null == o || o())
                    }, [_, d, o]), (0, l.jsx)("div", {
                        className: "data-list__row--wrapper",
                        style: {
                            paddingBottom: `${s||0}px`
                        },
                        children: a ? (0, l.jsx)(en.OL, {
                            className: "data-list__item--wrapper",
                            id: `dt_reports_contract_${n}`,
                            to: {
                                pathname: a,
                                state: {
                                    from_table_row: !0
                                }
                            },
                            children: (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        }) : (0, l.jsx)("div", {
                            className: R()("data-list__item--wrapper", {
                                "data-list__item--dynamic-height-wrapper": d
                            }),
                            children: t ? (0, l.jsx)("div", {
                                className: "data-list__item",
                                onClick: j,
                                onKeyDown: j,
                                children: _ ? (0, l.jsx)("div", {
                                    className: "data-list__desc--wrapper",
                                    children: t.component && (0, l.jsx)("div", {
                                        children: t.component
                                    })
                                }) : r({
                                    measure: o,
                                    ...c
                                })
                            }) : (0, l.jsx)("div", {
                                className: "data-list__item",
                                children: r({
                                    measure: o,
                                    ...c
                                })
                            })
                        })
                    })
                }),
                t5 = et.aV,
                t7 = et.qj,
                t2 = et.Z8,
                t4 = i.memo(e => {
                    let {
                        children: t,
                        className: a,
                        data_source: s,
                        footer: n,
                        getRowSize: r,
                        keyMapper: o,
                        onRowsRendered: d,
                        onScroll: c,
                        setListRef: _,
                        overscanRowCount: u,
                        ...m
                    } = e, [h, p] = i.useState(!0), [j, v] = i.useState(!1), [b, y] = i.useState(0), g = i.useRef(), f = i.useRef(null), N = i.useRef({}), C = i.useRef(null);
                    C.current = s;
                    let w = !r,
                        k = i.useCallback(() => {
                            s.forEach((e, t) => {
                                let a = (null == o ? void 0 : o(e)) || `${t}-0`;
                                N.current[a] = !0
                            })
                        }, [s, o]);
                    i.useEffect(() => {
                        w && (g.current = new et.t1({
                            fixedWidth: !0,
                            keyMapper: e => (null == C ? void 0 : C.current) && e < (null == C ? void 0 : C.current.length) && (null == o ? void 0 : o(C.current[e])) || e
                        })), k(), p(!1)
                    }, []), i.useEffect(() => {
                        if (w) {
                            var e, t;
                            null === (t = f.current) || void 0 === t || null === (e = t.recomputeGridSize) || void 0 === e || e.call(t, {
                                columnIndex: 0,
                                rowIndex: 0
                            })
                        }
                        k()
                    }, [s, w, k]);
                    let T = e => {
                            let {
                                style: t,
                                index: a,
                                key: n,
                                parent: i
                            } = e, {
                                getRowAction: r,
                                passthrough: d,
                                row_gap: c
                            } = m, _ = s[a], {
                                action_type: u,
                                shortcode: h,
                                purchase_time: p,
                                transaction_time: v,
                                id: b
                            } = _;
                            if ((0, x.JIr)(u, h, p || v)) {
                                let e = !!(null == s ? void 0 : s.find(e => "sell" === e.action_type && e.id === b));
                                _ = { ..._,
                                    is_sold: e
                                }
                            }
                            let y = r && r(_),
                                f = "string" == typeof y ? y : void 0,
                                C = "object" == typeof y ? y : void 0,
                                k = (null == o ? void 0 : o(_)) || n,
                                T = function() {
                                    let {
                                        measure: e
                                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (0, l.jsx)(t8, {
                                        action_desc: C,
                                        destination_link: f,
                                        is_new_row: !N.current[k],
                                        is_scrolling: j,
                                        measure: e,
                                        passthrough: d,
                                        row_gap: c,
                                        row_key: k,
                                        row: _,
                                        rowRenderer: m.rowRenderer,
                                        is_dynamic_height: w
                                    })
                                };
                            return w && g.current ? (0, l.jsx)(t2, {
                                cache: g.current,
                                columnIndex: 0,
                                rowIndex: a,
                                parent: i,
                                children: e => {
                                    let {
                                        measure: a
                                    } = e;
                                    return (0, l.jsx)("div", {
                                        style: t,
                                        children: T({
                                            measure: a
                                        })
                                    })
                                }
                            }, k) : (0, l.jsx)("div", {
                                style: t,
                                children: T()
                            }, k)
                        },
                        E = e => {
                            let t;
                            clearTimeout(t), !j && v(!0), t = setTimeout(() => {
                                !h && v(!1)
                            }, 200), y(e.target.scrollTop), "function" == typeof c && c(e)
                        },
                        S = e => {
                            f.current = e, null == _ || _(e)
                        };
                    return h ? (0, l.jsx)("div", {}) : (0, l.jsxs)("div", {
                        "data-testid": "dt_data_list",
                        className: R()(a, "data-list", {
                            [`${a}__data-list`]: a
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "data-list__body-wrapper",
                            children: [(0, l.jsx)("div", {
                                className: R()("data-list__body", {
                                    [`${a}__data-list-body`]: a
                                }),
                                children: (0, l.jsx)(t7, {
                                    children: e => {
                                        var t, n;
                                        let {
                                            width: i,
                                            height: o
                                        } = e;
                                        return (0, l.jsx)(ee.Z, {
                                            style: {
                                                height: o,
                                                width: i
                                            },
                                            children: (0, l.jsx)(ea.Z, {
                                                onScroll: E,
                                                autohide: !0,
                                                is_bypassed: (0, x.tqC)(),
                                                children: (0, l.jsx)(t5, {
                                                    className: a,
                                                    deferredMeasurementCache: null == g ? void 0 : g.current,
                                                    height: o,
                                                    onRowsRendered: d,
                                                    overscanRowCount: u || 1,
                                                    ref: e => S(e),
                                                    rowCount: s.length,
                                                    rowHeight: w && (null == g ? void 0 : null === (t = g.current) || void 0 === t ? void 0 : t.rowHeight) ? null == g ? void 0 : null === (n = g.current) || void 0 === n ? void 0 : n.rowHeight : r || 0,
                                                    rowRenderer: T,
                                                    scrollingResetTimeInterval: 0,
                                                    width: i,
                                                    ...(0, x.nIE)() ? {
                                                        scrollTop: b,
                                                        autoHeight: !0
                                                    } : {
                                                        onScroll: e => E({
                                                            target: e
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }), t]
                        }), n && (0, l.jsx)("div", {
                            className: R()("data-list__footer", {
                                [`${a}__data-list-footer`]: a
                            }),
                            children: (0, l.jsx)(i.Fragment, {
                                children: m.rowRenderer({
                                    row: n,
                                    is_footer: !0
                                })
                            })
                        })]
                    })
                });
            t4.displayName = "DataList", t4.Cell = t3;
            let t9 = Object.freeze({
                QUICK_STRATEGY: 99999,
                TOOLBAR: 100,
                TRANSACTION: 10,
                SUMMARY_TOOLTIPS: 5,
                RUN_PANEL: 8
            });
            var t6 = a("62017"),
                ae = a("49355");
            let at = e => {
                    let {
                        icon: t,
                        title: a,
                        message: s,
                        className: n
                    } = e;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(B.Z, {
                            className: R()(n, "transactions__icon"),
                            alignment: (0, L.rK)() ? "right" : "left",
                            message: a,
                            zIndex: t9.TRANSACTION.toString(),
                            children: t
                        }), s]
                    })
                },
                aa = () => (0, l.jsx)(M.ZP, {
                    className: "transactions__loader-text",
                    height: 10,
                    width: 80,
                    speed: 3,
                    backgroundColor: "var(--general-section-2)",
                    foregroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "100",
                        height: "12"
                    })
                }),
                as = () => (0, l.jsx)(M.ZP, {
                    className: "transactions__loader-icon",
                    speed: 3,
                    width: 24,
                    height: 24,
                    backgroundColor: "var(--general-section-1)",
                    foregroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "5",
                        ry: "5",
                        width: "24",
                        height: "24"
                    })
                }),
                an = e => {
                    let {
                        icon: t,
                        title: a,
                        children: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "transactions__popover-item",
                        children: [t && (0, l.jsx)("div", {
                            className: "transaction__popover-icon",
                            children: t
                        }), (0, l.jsxs)("div", {
                            className: "transactions__popover-details",
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-title",
                                children: a
                            }), s]
                        })]
                    })
                },
                al = e => {
                    let {
                        contract: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "transactions__popover-content",
                        children: [t.transaction_ids && (0, l.jsxs)(an, {
                            title: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Reference IDs"
                            }),
                            children: [t.transaction_ids.buy && (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.transaction_ids.buy} ${(0,A.NC)("(Buy)")}`
                            }), t.transaction_ids.sell && (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.transaction_ids.sell} ${(0,A.NC)("(Sell)")}`
                            })]
                        }), t.tick_count && (0, l.jsx)(an, {
                            title: (0, A.NC)("Duration"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.tick_count} ${(0,A.NC)("ticks")}`
                            })
                        }), t.barrier && (0, l.jsx)(an, {
                            title: (0, A.NC)("Barrier"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.barrier
                            })
                        }) || t.high_barrier && t.low_barrier && (0, l.jsxs)(an, {
                            title: (0, A.NC)("Barriers"),
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.high_barrier} ${(0,A.NC)("(High)")}`
                            }), (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: `${t.low_barrier} ${(0,A.NC)("(Low)")}`
                            })]
                        }), t.date_start && (0, l.jsx)(an, {
                            title: (0, A.NC)("Start time"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: (0, x.fcq)(t.date_start, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                            })
                        }), t.entry_tick && (0, l.jsxs)(an, {
                            title: (0, A.NC)("Entry spot"),
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.entry_tick
                            }), t.entry_tick_time && (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: (0, x.fcq)(t.entry_tick_time, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                            })]
                        }), t.exit_tick && t.exit_tick_time && (0, l.jsxs)(an, {
                            title: (0, A.NC)("Exit spot"),
                            children: [(0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.exit_tick
                            }), (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: (0, x.fcq)(t.exit_tick_time, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                            })]
                        }) || t.exit_tick && (0, l.jsx)(an, {
                            title: (0, A.NC)("Exit time"),
                            children: (0, l.jsx)("div", {
                                className: "transactions__popover-value",
                                children: t.exit_tick
                            })
                        })]
                    })
                },
                ai = e => {
                    var t;
                    let {
                        contract: a,
                        active_transaction_id: s,
                        onClickTransaction: n
                    } = e;
                    return (0, l.jsx)(B.Z, {
                        zIndex: t9.TRANSACTION.toString(),
                        alignment: (0, L.rK)() ? "right" : "left",
                        className: "transactions__item-wrapper",
                        is_open: !!(a && s === (null == a ? void 0 : null === (t = a.transaction_ids) || void 0 === t ? void 0 : t.buy)),
                        message: a && (0, l.jsx)(al, {
                            contract: a
                        }),
                        children: (0, l.jsxs)("div", {
                            "data-testid": "dt_transactions_item",
                            className: "transactions__item",
                            onClick: () => {
                                var e;
                                return n && n((null == a ? void 0 : null === (e = a.transaction_ids) || void 0 === e ? void 0 : e.buy) || null)
                            },
                            children: [(0, l.jsxs)("div", {
                                className: "transactions__cell transactions__trade-type",
                                children: [(0, l.jsx)("div", {
                                    className: "transactions__loader-container",
                                    children: a ? (0, l.jsx)(at, {
                                        icon: (0, l.jsx)(Z, {
                                            type: a.underlying
                                        }),
                                        title: a.display_name || ""
                                    }) : (0, l.jsx)(as, {})
                                }), (0, l.jsx)("div", {
                                    className: "transactions__loader-container",
                                    children: a ? (0, l.jsx)(at, {
                                        icon: (0, l.jsx)(z, {
                                            type: a.contract_type || "",
                                            size: "sm"
                                        }),
                                        title: (0, D.getContractTypeName)(a)
                                    }) : (0, l.jsx)(as, {})
                                })]
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__entry-spot",
                                children: (0, l.jsx)(at, {
                                    icon: (0, l.jsx)(t6.Z, {
                                        height: 10,
                                        width: 10
                                    }),
                                    title: (0, A.NC)("Entry spot"),
                                    message: (null == a ? void 0 : a.entry_tick) ? ? (0, l.jsx)(aa, {})
                                })
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__exit-spot",
                                children: (0, l.jsx)(at, {
                                    icon: (0, l.jsx)(ae.C, {
                                        height: 10,
                                        width: 10
                                    }),
                                    title: (0, A.NC)("Exit spot"),
                                    message: (null == a ? void 0 : a.exit_tick) ? ? (0, l.jsx)(aa, {})
                                })
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__stake",
                                children: a ? (0, l.jsx)(e0.Z, {
                                    amount: a.buy_price,
                                    currency: a.currency,
                                    show_currency: !0
                                }) : (0, l.jsx)(aa, {})
                            }), (0, l.jsx)("div", {
                                className: "transactions__cell transactions__profit",
                                children: (null == a ? void 0 : a.is_completed) ? (0, l.jsx)("div", {
                                    className: R()({
                                        "transactions__profit--win": (null == a ? void 0 : a.profit) && (null == a ? void 0 : a.profit) >= 0,
                                        "transactions__profit--loss": (null == a ? void 0 : a.profit) && (null == a ? void 0 : a.profit) < 0
                                    }),
                                    children: (0, l.jsx)(e0.Z, {
                                        amount: Math.abs(a.profit || 0),
                                        currency: a.currency,
                                        show_currency: !0
                                    })
                                }) : (0, l.jsx)(aa, {})
                            })]
                        })
                    })
                },
                ar = e => {
                    let {
                        row: t = !1,
                        onClickTransaction: a,
                        active_transaction_id: s
                    } = e;
                    switch (t.type) {
                        case O.i.CONTRACT:
                            {
                                let {
                                    data: e
                                } = t;
                                return (0, l.jsx)(ai, {
                                    contract: e,
                                    onClickTransaction: a,
                                    active_transaction_id: s
                                })
                            }
                        case O.i.DIVIDER:
                            return (0, l.jsx)("div", {
                                className: "transactions__divider",
                                children: (0, l.jsx)("div", {
                                    className: "transactions__divider-line"
                                })
                            });
                        default:
                            return null
                    }
                },
                ao = (0, r.Pi)(e => {
                    let {
                        is_drawer_open: t
                    } = e, [a, s] = i.useState(null), {
                        run_panel: n,
                        transactions: r
                    } = (0, p.oR)(), {
                        contract_stage: o
                    } = n, {
                        transactions: d,
                        toggleTransactionDetailsModal: c,
                        recoverPendingContracts: _
                    } = r, {
                        isDesktop: u
                    } = (0, v.F)();
                    i.useEffect(() => (window.addEventListener("click", m), _(), () => {
                        window.removeEventListener("click", m)
                    }), []), i.useEffect(() => {
                        a && s(null)
                    }, [null == d ? void 0 : d.length]);
                    let m = e => {
                            !((null == e ? void 0 : e.composedPath()) || []).some(e => {
                                var t;
                                return null === (t = e.classList) || void 0 === t ? void 0 : t.contains("transactions__item-wrapper")
                            }) && s(null)
                        },
                        x = e => {
                            e && a === e ? s(null) : s(e)
                        };
                    return (0, l.jsxs)("div", {
                        className: R()("transactions", {
                            "run-panel-tab__content": u,
                            "run-panel-tab__content--mobile": !u && t
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: "download__container transaction-details__button-container",
                            children: [(0, l.jsx)(eT, {
                                tab: "transactions"
                            }), (0, l.jsx)(ek.Z, {
                                id: "download__container__view-detail-button",
                                className: "download__container__view-detail-button",
                                disabled: !(null == d ? void 0 : d.length),
                                onClick: () => {
                                    c(!0)
                                },
                                secondary: !0,
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "View Detail"
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "transactions__header",
                            children: [(0, l.jsx)("span", {
                                className: "transactions__header-column transactions__header-type",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Type"
                                })
                            }), (0, l.jsx)("span", {
                                className: "transactions__header-column transactions__header-spot",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Entry/Exit spot"
                                })
                            }), (0, l.jsx)("span", {
                                className: "transactions__header-column transactions__header-profit",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Buy price and P/L"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: R()({
                                transactions__content: u,
                                "transactions__content--mobile": !u
                            }),
                            children: (0, l.jsx)("div", {
                                className: "transactions__scrollbar",
                                children: (null == d ? void 0 : d.length) ? (0, l.jsx)(t4, {
                                    className: "transactions",
                                    data_source: d,
                                    rowRenderer: e => (0, l.jsx)(ar, {
                                        onClickTransaction: x,
                                        active_transaction_id: a,
                                        ...e
                                    }),
                                    keyMapper: e => {
                                        switch (e.type) {
                                            case O.i.CONTRACT:
                                                return e.data.transaction_ids.buy;
                                            case O.i.DIVIDER:
                                                return e.data;
                                            default:
                                                return null
                                        }
                                    },
                                    getRowSize: e => {
                                        let {
                                            index: t
                                        } = e;
                                        switch ((null == d ? void 0 : d[t]).type) {
                                            case O.i.CONTRACT:
                                                return 50;
                                            case O.i.DIVIDER:
                                                return 21;
                                            default:
                                                return 0
                                        }
                                    }
                                }) : (0, l.jsx)(l.Fragment, {
                                    children: o >= J.K.STARTING ? (0, l.jsx)(ai, {
                                        contract: null
                                    }) : (0, l.jsx)(ea.Z, {
                                        children: (0, l.jsx)("div", {
                                            className: "transactions-empty-box",
                                            children: (0, l.jsxs)("div", {
                                                className: "transactions-empty",
                                                children: [(0, l.jsx)("div", {
                                                    className: "transactions-empty__icon-box",
                                                    children: (0, l.jsx)(Q.Z, {
                                                        height: "64px",
                                                        width: "64px",
                                                        className: "transactions-empty__icon icon-general-fill-g-path",
                                                        color: "secondary",
                                                        fill: "var(--text-general)"
                                                    })
                                                }), (0, l.jsx)(K.Z, {
                                                    as: "h4",
                                                    size: "xs",
                                                    weight: "bold",
                                                    align: "center",
                                                    color: "less-prominent",
                                                    lineHeight: "xxs",
                                                    className: "transactions-empty__header",
                                                    children: (0, l.jsx)(A.Xx, {
                                                        i18n_default_text: "There are no transactions to display"
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "transactions-empty__message",
                                                    children: [(0, l.jsx)(K.Z, {
                                                        size: "xxs",
                                                        color: "less-prominent",
                                                        children: (0, l.jsx)(A.Xx, {
                                                            i18n_default_text: "Here are the possible reasons:"
                                                        })
                                                    }), (0, l.jsxs)("ul", {
                                                        className: "transactions-empty__list",
                                                        children: [(0, l.jsx)("li", {
                                                            children: (0, l.jsx)(K.Z, {
                                                                size: "xs",
                                                                color: "less-prominent",
                                                                children: (0, l.jsx)(A.Xx, {
                                                                    i18n_default_text: "The bot is not running"
                                                                })
                                                            })
                                                        }), (0, l.jsx)("li", {
                                                            children: (0, l.jsx)(K.Z, {
                                                                size: "xs",
                                                                color: "less-prominent",
                                                                children: (0, l.jsx)(A.Xx, {
                                                                    i18n_default_text: "The stats are cleared"
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })]
                    })
                }),
                ad = e => {
                    let {
                        content: t,
                        contentClassName: a,
                        title: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "run-panel__tile",
                        children: [(0, l.jsx)("div", {
                            className: "run-panel__tile-title",
                            children: s
                        }), (0, l.jsx)("div", {
                            className: R()("run-panel__tile-content", a),
                            children: t
                        })]
                    })
                },
                ac = e => {
                    let {
                        currency: t,
                        is_mobile: a,
                        lost_contracts: s,
                        number_of_runs: n,
                        total_stake: i,
                        total_payout: r,
                        toggleStatisticsInfoModal: o,
                        total_profit: d,
                        won_contracts: c
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: R()("run-panel__stat", {
                            "run-panel__stat--mobile": a
                        }),
                        children: [(0, l.jsx)("div", {
                            className: "run-panel__stat--info",
                            onClick: o,
                            children: (0, l.jsx)("div", {
                                className: "run-panel__stat--info-item",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "What's this?"
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "run-panel__stat--tiles",
                            children: [(0, l.jsx)(ad, {
                                title: (0, A.NC)("Total stake"),
                                alignment: "top",
                                content: (0, l.jsx)(e0.Z, {
                                    amount: i,
                                    currency: t,
                                    show_currency: !0
                                })
                            }), (0, l.jsx)(ad, {
                                title: (0, A.NC)("Total payout"),
                                alignment: "top",
                                content: (0, l.jsx)(e0.Z, {
                                    amount: r,
                                    currency: t,
                                    show_currency: !0
                                })
                            }), (0, l.jsx)(ad, {
                                title: (0, A.NC)("No. of runs"),
                                alignment: "top",
                                content: n
                            }), (0, l.jsx)(ad, {
                                title: (0, A.NC)("Contracts lost"),
                                alignment: "bottom",
                                content: s
                            }), (0, l.jsx)(ad, {
                                title: (0, A.NC)("Contracts won"),
                                alignment: "bottom",
                                content: c
                            }), (0, l.jsx)(ad, {
                                title: (0, A.NC)("Total profit/loss"),
                                content: (0, l.jsx)(e0.Z, {
                                    amount: d,
                                    currency: t,
                                    has_sign: !0,
                                    show_currency: !0
                                }),
                                alignment: "bottom",
                                contentClassName: R()("run-panel__stat-amount", {
                                    "run-panel__stat-amount--positive": d > 0,
                                    "run-panel__stat-amount--negative": d < 0
                                })
                            })]
                        })]
                    })
                },
                a_ = e => {
                    let {
                        is_clear_stat_disabled: t,
                        is_mobile: a,
                        is_drawer_open: s,
                        onClearStatClick: n
                    } = e;
                    return a && s && (0, l.jsx)(ek.Z, {
                        id: "db-run-panel__clear-button",
                        className: "run-panel__clear-button",
                        disabled: t,
                        text: (0, A.NC)("Reset"),
                        onClick: n,
                        secondary: !0
                    })
                },
                au = e => {
                    let {
                        active_index: t,
                        is_drawer_open: a,
                        active_tour: s,
                        setActiveTabIndex: n,
                        ...r
                    } = e, {
                        isDesktop: o
                    } = (0, v.F)();
                    return i.useEffect(() => (!o && a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                        document.body.style.overflow = ""
                    }), [a, o]), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(e1.Z, {
                            active_index: t,
                            onTabItemClick: n,
                            top: !0,
                            children: [(0, l.jsx)("div", {
                                id: "db-run-panel-tab__summary",
                                label: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Summary"
                                }),
                                children: (0, l.jsx)(t$, {
                                    is_drawer_open: a
                                })
                            }), (0, l.jsx)("div", {
                                id: "db-run-panel-tab__transactions",
                                label: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Transactions"
                                }),
                                children: (0, l.jsx)(ao, {
                                    is_drawer_open: a
                                })
                            }), (0, l.jsx)("div", {
                                id: "db-run-panel-tab__journal",
                                label: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Journal"
                                }),
                                children: (0, l.jsx)(eA, {})
                            })]
                        }), (a && 2 !== t || s) && (0, l.jsx)(ac, { ...r
                        })]
                    })
                },
                am = e => {
                    let {
                        is_clear_stat_disabled: t,
                        onClearStatClick: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "run-panel__footer",
                        children: (0, l.jsx)(ek.Z, {
                            id: "db-run-panel__clear-button",
                            className: "run-panel__footer-button",
                            disabled: t,
                            onClick: a,
                            has_effect: !0,
                            secondary: !0,
                            children: (0, l.jsx)("span", {
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Reset"
                                })
                            })
                        })
                    })
                },
                ax = () => (0, l.jsx)("div", {
                    className: "controls__section",
                    children: (0, l.jsx)("div", {
                        className: "controls__buttons",
                        children: (0, l.jsx)(t1, {
                            className: "controls__animation",
                            should_show_overlay: !0
                        })
                    })
                }),
                ah = e => {
                    let {
                        is_mobile: t,
                        is_statistics_info_modal_open: a,
                        toggleStatisticsInfoModal: s
                    } = e;
                    return (0, l.jsx)(e$.Z, {
                        className: R()("statistics__modal", {
                            "statistics__modal--mobile": t
                        }),
                        title: (0, A.NC)("What's this?"),
                        is_open: a,
                        toggleModal: s,
                        width: "440px",
                        children: (0, l.jsx)(e$.Z.Body, {
                            children: (0, l.jsx)("div", {
                                className: R()("statistics__modal-body", {
                                    "statistics__modal-body--mobile": t
                                }),
                                children: (0, l.jsxs)(ea.Z, {
                                    className: "statistics__modal-scrollbar",
                                    children: [(0, l.jsx)(K.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content no-margin",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Total stake"
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Total stake since you last cleared your stats."
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Total payout"
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        children: (0, A.NC)("Total payout since you last cleared your stats.")
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "No. of runs"
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "The number of times your bot has run since you last cleared your stats. Each run includes the execution of all the root blocks."
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Contracts lost"
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "The number of contracts you have lost since you last cleared your stats."
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Contracts won"
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "The number of contracts you have won since you last cleared your stats."
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        weight: "bold",
                                        className: "statistics__modal-body--content",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Total profit/loss"
                                        })
                                    }), (0, l.jsx)(K.Z, {
                                        as: "p",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Your total profit/loss since you last cleared your stats. It is the difference between your total payout and your total stake."
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                ap = (0, r.Pi)(() => {
                    let {
                        run_panel: e,
                        dashboard: t,
                        transactions: a
                    } = (0, p.oR)(), {
                        client: s
                    } = (0, p.oR)(), {
                        isDesktop: n
                    } = (0, v.F)(), {
                        currency: r
                    } = s, {
                        active_index: o,
                        is_drawer_open: d,
                        is_statistics_info_modal_open: c,
                        is_clear_stat_disabled: _,
                        onClearStatClick: u,
                        onMount: m,
                        onRunButtonClick: x,
                        onUnmount: h,
                        setActiveTabIndex: j,
                        toggleDrawer: b,
                        toggleStatisticsInfoModal: y
                    } = e, {
                        statistics: g
                    } = a, {
                        active_tour: f,
                        active_tab: N
                    } = t, {
                        total_payout: C,
                        total_profit: w,
                        total_stake: k,
                        won_contracts: T,
                        lost_contracts: E,
                        number_of_runs: S
                    } = g, {
                        BOT_BUILDER: A,
                        CHART: I
                    } = eO.ve;
                    i.useEffect(() => (m(), () => h()), [m, h]), i.useEffect(() => {
                        !n && b(!1)
                    }, [n, b]), i.useEffect(() => {
                        !n && b(!1)
                    }, []);
                    let M = (0, l.jsx)(au, {
                            active_index: o,
                            currency: r,
                            is_drawer_open: d,
                            is_mobile: !n,
                            lost_contracts: E,
                            number_of_runs: S,
                            setActiveTabIndex: j,
                            toggleStatisticsInfoModal: y,
                            total_payout: C,
                            total_profit: w,
                            total_stake: k,
                            won_contracts: T,
                            active_tour: f
                        }),
                        O = (0, l.jsx)(am, {
                            is_clear_stat_disabled: _,
                            onClearStatClick: u
                        }),
                        D = (0, l.jsx)(a_, {
                            is_clear_stat_disabled: _,
                            is_mobile: !n,
                            is_drawer_open: d,
                            onClearStatClick: u
                        }),
                        {
                            PROFIT: L,
                            TRADING_VIEW: U,
                            AUTO_TRADES: Z,
                            DANALYSIS: B
                        } = eO.ve;
                    return !([A, I, L, Z, B, U].includes(N) || f) && n || "bot_builder" === f ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: !n && d ? "run-panel__container--mobile" : "run-panel",
                            children: [(0, l.jsx)(eQ, {
                                anchor: "right",
                                className: R()("run-panel", {
                                    "run-panel__container": n,
                                    "run-panel__container--tour-active": n && f
                                }),
                                contentClassName: "run-panel__content",
                                header: D,
                                footer: n && O,
                                is_open: d,
                                toggleDrawer: b,
                                width: 366,
                                zIndex: t9.RUN_PANEL,
                                children: M
                            }), !n && (0, l.jsx)(ax, {})]
                        }), (0, l.jsx)(eW, {
                            onRunButtonClick: x
                        }), (0, l.jsx)(ah, {
                            is_mobile: !n,
                            is_statistics_info_modal_open: c,
                            toggleStatisticsInfoModal: y
                        })]
                    })
                }),
                aj = e => {
                    let {
                        body_className: t,
                        className: a,
                        should_header_stick_body: s,
                        header: n,
                        header_background_color: r,
                        height_offset: o = "0px",
                        is_flex: d,
                        is_popup: c,
                        is_modal_open: _,
                        onClickClose: u,
                        renderPageFooterChildren: m,
                        page_footer_className: x,
                        page_footer_parent: h,
                        page_footer_parent_className: p,
                        page_header_className: j,
                        page_header_text: v,
                        renderPageHeaderTrailingIcon: b,
                        pageHeaderReturnFn: y,
                        renderPageHeader: g,
                        renderPageHeaderElement: f,
                        children: N,
                        container_children: C
                    } = e;
                    return (0, l.jsx)(eF, {
                        is_visible: _,
                        className: R()("dc-mobile-full-page-modal", a),
                        keyname: `${a}__wrapper`,
                        children: (0, l.jsx)(eq, {
                            header: n,
                            onClickClose: u,
                            children: (0, l.jsxs)(eD.Z, {
                                className: R()("dc-mobile-full-page-modal", {
                                    "dc-mobile-full-page-modal--flex": d,
                                    "dc-mobile-full-page-modal--popup": c
                                }),
                                height_offset: o,
                                children: [(g || v || f) && (0, l.jsxs)("div", {
                                    className: R()("dc-mobile-full-page-modal__header", {
                                        "dc-mobile-full-page-modal__header--border-bottom": !s,
                                        ...j ? {
                                            [j]: !!j
                                        } : {}
                                    }),
                                    style: {
                                        background: r
                                    },
                                    children: [y && (0, l.jsx)("div", {
                                        className: "dc-mobile-full-page-modal__header-return",
                                        children: (0, l.jsx)(eG.Z, {
                                            onClick: y,
                                            "data-testid": "dt_mobile_full_page_return_icon"
                                        })
                                    }), g && g(), (0, l.jsx)("div", {
                                        className: "dc-mobile-full-page-modal__header-text",
                                        children: f ? ? (0, l.jsx)(K.Z, {
                                            as: "p",
                                            color: "prominent",
                                            lineHeight: "m",
                                            size: "s",
                                            weight: "bold",
                                            children: v
                                        })
                                    }), b && (0, l.jsx)("div", {
                                        className: "dc-mobile-full-page-modal__header-trailing-icon",
                                        children: b()
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: R()("dc-mobile-full-page-modal__body", t),
                                    children: N
                                }), m && (0, l.jsxs)(i.Fragment, {
                                    children: [h && (0, l.jsx)("div", {
                                        className: R()("dc-mobile-full-page-modal__footer-parent", p),
                                        children: h
                                    }), (0, l.jsx)("div", {
                                        className: R()("dc-mobile-full-page-modal__footer", x),
                                        children: m()
                                    })]
                                }), C]
                            })
                        })
                    })
                },
                av = "transaction-details-modal-mobile",
                ab = () => (0, l.jsx)(M.ZP, {
                    className: "transactions__loader-text",
                    "data-testid": "transaction_details_card_cell_loader",
                    height: 10,
                    width: 80,
                    speed: 3,
                    foregroundColor: "var(--general-section-2)",
                    backgroundColor: "var(--general-hover)",
                    children: (0, l.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "100",
                        height: "12"
                    })
                }),
                ay = e => {
                    let {
                        label: t = "",
                        large_title: a = !1,
                        right_aligned: s = !1,
                        title: n = "",
                        loader: i = !1
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: R()(`${av}__card__column`, {
                            [`${av}__right-align`]: s
                        }),
                        children: [n && (0, l.jsx)("div", {
                            className: R()({
                                [`${av}__small-title`]: !a,
                                [`${av}__large-title`]: a
                            }),
                            children: (0, A.NC)(n)
                        }), (0, l.jsx)("div", {
                            className: `${av}__label`,
                            children: i ? (0, l.jsx)(ab, {}) : t
                        })]
                    })
                },
                ag = e => {
                    let {
                        message: t,
                        icon: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: R()(`${av}__table-cell`, `${av}__table-cell__icon-wrapper`),
                        children: t && (0, l.jsx)(B.Z, {
                            alignment: (0, L.rK)() ? "left" : "right",
                            message: t,
                            zIndex: "7",
                            children: a
                        })
                    })
                };

            function af(e) {
                var t;
                let {
                    transaction: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: `${av}__card`,
                    "data-testid": "dt_mobile_transaction_card",
                    children: [(0, l.jsx)("div", {
                        className: `${av}__card__row`,
                        children: (0, l.jsx)(ay, {
                            label: (0, l.jsxs)("div", {
                                className: `${av}__icon-wrapper`,
                                children: [(0, l.jsx)(ag, {
                                    message: null == a ? void 0 : a.display_name,
                                    icon: (0, l.jsx)(Z, {
                                        type: null == a ? void 0 : a.underlying,
                                        size: "md"
                                    })
                                }), (0, l.jsx)(ag, {
                                    message: (0, D.getContractTypeName)(a),
                                    icon: (0, l.jsx)(z, {
                                        type: null == a ? void 0 : a.contract_type,
                                        size: "md"
                                    })
                                })]
                            })
                        })
                    }), (0, l.jsx)("div", {
                        className: `${av}__card__row`,
                        children: (0, l.jsx)(ay, {
                            title: "Ref. ID",
                            label: null == a ? void 0 : null === (t = a.transaction_ids) || void 0 === t ? void 0 : t.buy
                        })
                    }), (0, l.jsxs)("div", {
                        className: `${av}__card__row`,
                        children: [(0, l.jsx)(ay, {
                            title: "Timestamp",
                            label: (0, x.fcq)(null == a ? void 0 : a.date_start, "YYYY-M-D HH:mm:ss [GMT]", "YYYY-MM-DD HH:mm:ss [GMT]")
                        }), (0, l.jsx)(ay, {
                            title: "Entry Spot",
                            label: null == a ? void 0 : a.entry_tick,
                            right_aligned: !0,
                            loader: !a.entry_tick
                        })]
                    }), (0, l.jsxs)("div", {
                        className: `${av}__card__row`,
                        children: [(0, l.jsx)(ay, {
                            title: "Buy Price",
                            label: Math.abs((null == a ? void 0 : a.buy_price) ? ? 0).toFixed(2)
                        }), (0, l.jsx)(ay, {
                            title: "Exit Spot",
                            label: null == a ? void 0 : a.exit_tick,
                            right_aligned: !0,
                            loader: !a.exit_tick
                        })]
                    }), (0, l.jsxs)("div", {
                        className: `${av}__card__row`,
                        children: [(0, l.jsx)(ay, {
                            title: "Profit / Loss",
                            large_title: !0
                        }), (0, l.jsx)(ay, {
                            label: (0, l.jsx)("div", {
                                className: R()({
                                    [`${av}__card__profit--win`]: (null == a ? void 0 : a.profit) > 0,
                                    [`${av}__card__profit--loss`]: (null == a ? void 0 : a.profit) < 0
                                }),
                                children: Math.abs((null == a ? void 0 : a.profit) ? ? 0).toFixed(2)
                            }),
                            right_aligned: !0,
                            loader: !a.is_completed
                        })]
                    })]
                })
            }
            let aN = (0, r.Pi)(() => {
                    let {
                        client: e
                    } = (0, p.oR)(), {
                        transactions: t,
                        run_panel: a
                    } = (0, p.oR)(), {
                        toggleTransactionDetailsModal: s,
                        is_transaction_details_modal_open: n,
                        transactions: i,
                        statistics: r
                    } = t, {
                        toggleStatisticsInfoModal: o
                    } = a;
                    return (0, l.jsxs)(aj, {
                        is_modal_open: n,
                        className: "transaction-details-modal-mobile",
                        header: (0, A.NC)("Transactions detailed summary"),
                        onClickClose: () => {
                            s(!1)
                        },
                        height_offset: "80px",
                        children: [(0, l.jsx)("div", {
                            className: "transaction-details-modal-mobile__wrapper",
                            "data-testid": "transaction_details_cards",
                            children: null == i ? void 0 : i.map(e => {
                                var t;
                                let {
                                    data: a,
                                    type: s
                                } = e;
                                return s === O.i.CONTRACT ? (0, l.jsx)(af, {
                                    transaction: a
                                }, null == a ? void 0 : null === (t = a.transaction_ids) || void 0 === t ? void 0 : t.buy) : (0, l.jsx)("div", {
                                    className: "transaction-details-modal-mobile__divider",
                                    children: (0, l.jsx)("div", {
                                        className: "transactions__divider-line"
                                    })
                                }, `transaction-row-divider-${a}`)
                            })
                        }), (0, l.jsx)("div", {
                            className: "transaction-details-modal-mobile__card__footer",
                            children: (0, l.jsx)(ac, {
                                is_mobile: !0,
                                currency: null == e ? void 0 : e.currency,
                                lost_contracts: (null == r ? void 0 : r.lost_contracts) ? ? 0,
                                number_of_runs: (null == r ? void 0 : r.number_of_runs) ? ? 0,
                                total_payout: (null == r ? void 0 : r.total_payout) ? ? 0,
                                total_profit: (null == r ? void 0 : r.total_profit) ? ? 0,
                                total_stake: (null == r ? void 0 : r.total_stake) ? ? 0,
                                won_contracts: (null == r ? void 0 : r.won_contracts) ? ? 0,
                                toggleStatisticsInfoModal: o
                            })
                        })]
                    })
                }),
                aC = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, v.F)();
                    return (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(y.a, {}),
                        children: e ? (0, l.jsx)(W, {}) : (0, l.jsx)(aN, {})
                    })
                });
            var aw = a("87383"),
                ak = a("89064"),
                aT = a("75324"),
                aE = a("83257"),
                aS = a("6388");
            let {
                TRACKJS_TOKEN: aA
            } = {
                TRANSLATIONS_CDN_URL: void 0,
                R2_PROJECT_NAME: void 0,
                CROWDIN_BRANCH_NAME: void 0,
                TRACKJS_TOKEN: void 0,
                APP_ENV: void 0,
                REF_NAME: void 0,
                REMOTE_CONFIG_URL: void 0,
                GD_CLIENT_ID: void 0,
                GD_APP_ID: void 0,
                GD_API_KEY: void 0,
                DATADOG_SESSION_REPLAY_SAMPLE_RATE: void 0,
                DATADOG_SESSION_SAMPLE_RATE: void 0,
                DATADOG_APPLICATION_ID: void 0,
                DATADOG_CLIENT_TOKEN: void 0,
                RUDDERSTACK_KEY: void 0,
                GROWTHBOOK_CLIENT_KEY: void 0,
                GROWTHBOOK_DECRYPTION_KEY: void 0
            }, aI = () => ({
                initTrackJS: e => {
                    try {
                        if (!aS.t.isInstalled()) {
                            var t;
                            aS.t.install({
                                application: "standalone-deriv-bot",
                                dedupe: !1,
                                enabled: !1,
                                token: aA,
                                userId: e,
                                version: (null === (t = document.querySelector("meta[name=version]")) || void 0 === t ? void 0 : t.content) ? ? "undefined"
                            })
                        }
                    } catch (e) {
                        console.error("Failed to initialize TrackJS", e)
                    }
                }
            });
            a("99702");
            let aR = e => {};
            var aM = a("72755");
            let aO = e => {
                ! function(t, a, s, n) {
                    t.hj = t.hj || function() {
                        (t.hj.q = t.hj.q || []).push(arguments)
                    }, t._hjSettings = {
                        hjid: 3050531,
                        hjsv: 6
                    };
                    let l = a.getElementsByTagName("head")[0],
                        i = a.createElement("script");
                    i.async = 1, i.src = s + t._hjSettings.hjid + n + t._hjSettings.hjsv, l.appendChild(i);
                    let r = e.loginid,
                        o = e.is_virtual ? "Demo" : "Real",
                        d = e.account_open_date ? (0, aM.vk)(e.account_open_date) : void 0;
                    window.hj("identify", r, {
                        "Account created": d ? (0, aM.gb)(d).format("YYYY-MM-DD") : "",
                        "Account type": o,
                        "User country": e.clients_country
                    })
                }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
            };
            var aD = a("47494"),
                aL = a("44740");
            let aU = () => (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("audio", {
                        id: "announcement",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/announcement.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "earned-money",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/coins.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "job-done",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/job-done.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "error",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/out-of-bounds.mp3`
                    }), (0, l.jsx)("audio", {
                        id: "severe-error",
                        "aria-label": "audio",
                        src: `${window.__webpack_public_path__}assets/media/i-am-being-serious.mp3`
                    })]
                }),
                aZ = (0, r.Pi)(() => {
                    let {
                        blockly_store: e
                    } = (0, p.oR)(), {
                        is_loading: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t && (0, l.jsxs)("div", {
                            className: "bot__loading",
                            "data-testid": "blockly-loader",
                            children: [(0, l.jsx)(y.a, {}), (0, l.jsx)("div", {
                                children: "Loading Blockly..."
                            })]
                        })
                    })
                });
            var aB = a("10434");
            let aF = (0, r.Pi)(() => {
                let {
                    dashboard: e
                } = (0, p.oR)(), {
                    is_web_socket_intialised: t
                } = e, a = () => {
                    location.reload()
                };
                return (0, l.jsxs)(aB.Z, {
                    is_visible: !t,
                    is_mobile_full_width: !0,
                    className: "dc-dialog bot-stopped-dialog",
                    cancel_button_text: (0, A.NC)("Go to Reports"),
                    confirm_button_text: (0, A.NC)("Back to Bot"),
                    onCancel: () => location.replace("reports/positions"),
                    onConfirm: () => location.reload(),
                    children: [(0, l.jsxs)("div", {
                        className: "dc-dialog__content__header",
                        children: [(0, l.jsx)(K.Z, {
                            "data-testid": "data-title",
                            weight: "bold",
                            as: "p",
                            align: "left",
                            size: "s",
                            color: "prominent",
                            children: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "You're back online"
                            })
                        }), (0, l.jsx)("div", {
                            "data-testid": "data-close-button",
                            onClick: a,
                            onKeyDown: e => {
                                "Enter" === e.key && a()
                            },
                            tabIndex: 0,
                            children: (0, l.jsx)(N.Z, {
                                height: "20px",
                                width: "20px",
                                fill: "var(--text-general)"
                            })
                        })]
                    }), (0, l.jsx)(K.Z, {
                        as: "p",
                        align: "left",
                        size: "xs",
                        color: "prominent",
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "The bot has stopped, but your trade may still be running. You can check it on the Reports page."
                        })
                    })]
                })
            });
            var az = a("64736"),
                aP = a("59462"),
                aX = a("49985"),
                aH = a("83571"),
                a$ = a("13617");
            let aV = e => {
                let {
                    load_strategy_tab: t
                } = e;
                aH.Analytics.trackEvent("ce_bot_form", {
                    action: a$.om.SWITCH_LOAD_STRATEGY_TAB,
                    form_name: a$.oH,
                    load_strategy_tab: t,
                    subform_name: "load_strategy",
                    subpage_name: "bot_builder"
                })
            };
            var aG = a("66062"),
                aq = a("31865"),
                aY = a("97909");
            let aW = (0, r.Pi)(() => {
                let {
                    google_drive: e,
                    load_modal: t
                } = (0, p.oR)(), {
                    is_authorised: a,
                    signIn: s,
                    signOut: n
                } = e, {
                    is_open_button_loading: r,
                    onDriveOpen: o
                } = t, {
                    isDesktop: d
                } = (0, v.F)(), c = d ? "128" : "96";
                return (0, l.jsx)("div", {
                    className: "load-strategy__container",
                    "data-testid": "dt_google_drive",
                    children: (0, l.jsxs)("div", {
                        className: "load-strategy__google-drive",
                        children: [(0, l.jsx)(aY.Z, {
                            className: R()("load-strategy__google-drive-icon", {
                                "load-strategy__google-drive-icon--disabled": !a
                            }),
                            height: c,
                            width: c
                        }), (0, l.jsx)("div", {
                            className: "load-strategy__google-drive-connected-text",
                            children: a ? (0, l.jsx)(A.Xx, {
                                i18n_default_text: "You are connected to Google Drive"
                            }) : "Google Drive"
                        }), a ? (0, l.jsxs)(ek.Z.Group, {
                            children: [(0, l.jsx)(ek.Z, {
                                onClick: () => {
                                    n(), (0, tK.z9)()
                                },
                                has_effect: !0,
                                secondary: !0,
                                large: !0,
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Disconnect"
                                })
                            }), (0, l.jsx)(ek.Z, {
                                onClick: () => {
                                    o()
                                },
                                is_loading: r,
                                has_effect: !0,
                                primary: !0,
                                large: !0,
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Open"
                                })
                            })]
                        }) : (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsxs)("div", {
                                className: "load-strategy__google-drive-terms",
                                children: [(0, l.jsx)("div", {
                                    className: "load-strategy__google-drive-text",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "To import your bot from your Google Drive, you'll need to sign in to your Google account."
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "load-strategy__google-drive-text",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "To know how Google Drive handles your data, please review Deriv’s <0>Privacy policy.</0>",
                                        components: [(0, l.jsx)(aq.Z, {
                                            className: "link",
                                            href: "tnc/security-and-privacy.pdf",
                                            is_document: !0
                                        }, 0)]
                                    })
                                })]
                            }), (0, l.jsx)(ek.Z, {
                                onClick: () => {
                                    s(), (0, tK.df)()
                                },
                                has_effect: !0,
                                primary: !0,
                                large: !0,
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Sign in"
                                })
                            })]
                        })]
                    })
                })
            });
            var aK = a("81593"),
                aJ = a("73446"),
                aQ = a("91047");
            let a0 = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        is_open_button_loading: a,
                        is_open_button_disabled: s,
                        loadStrategyOnBotBuilder: n,
                        setLoadedLocalFile: r,
                        saveStrategyToLocalStorage: o,
                        toggleLoadModal: d
                    } = e, {
                        setOpenSettings: c,
                        setPreviewOnPopup: _
                    } = t, {
                        isDesktop: u
                    } = (0, v.F)(), m = u ? i.Fragment : ek.Z.Group;
                    return (0, l.jsxs)(m, {
                        children: [!u && (0, l.jsx)(ek.Z, {
                            text: (0, A.NC)("Cancel"),
                            onClick: () => r(null),
                            has_effect: !0,
                            secondary: !0,
                            large: !0
                        }), (0, l.jsx)(ek.Z, {
                            text: (0, A.NC)("Open"),
                            onClick: () => {
                                n(), o(), r(null), d(), _(!1), c(aP.tx.BOT_IMPORT)
                            },
                            is_loading: a,
                            has_effect: !0,
                            primary: !0,
                            large: !0,
                            disabled: s
                        })]
                    })
                }),
                a1 = e => {
                    let {
                        icon: t,
                        message: a,
                        className: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: s,
                        children: [t && (0, l.jsx)("span", {
                            className: "icon",
                            children: t
                        }), (0, l.jsx)("span", {
                            className: "text",
                            children: (0, l.jsx)(K.Z, {
                                size: "xs",
                                children: a
                            })
                        })]
                    })
                };
            var a3 = a("19405"),
                a8 = a("97613");
            let a5 = (0, r.Pi)(e => {
                    let {
                        mockZoomInOut: t
                    } = e, {
                        dashboard: a
                    } = (0, p.oR)(), {
                        onZoomInOutClick: s
                    } = a;
                    return (0, l.jsxs)("div", {
                        className: "load-strategy__preview-workspace-controls",
                        children: [(0, l.jsx)(a3.Z, {
                            className: "load-strategy__preview-workspace-icon",
                            onClick: () => {
                                t ? t(!0) : s(!0)
                            },
                            "data-testid": "zoom-in",
                            fill: "var(--text-general)"
                        }), (0, l.jsx)(a8.Z, {
                            className: "load-strategy__preview-workspace-icon",
                            onClick: () => {
                                t ? t(!1) : s(!1)
                            },
                            "data-testid": "zoom-out",
                            fill: "var(--text-general)"
                        })]
                    })
                }),
                a7 = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        load_modal: t,
                        blockly_store: a
                    } = (0, p.oR)(), {
                        active_tab: s,
                        active_tour: n
                    } = e, {
                        handleFileChange: r,
                        loaded_local_file: o,
                        setLoadedLocalFile: d,
                        imported_strategy_type: c,
                        is_open_button_loading: _
                    } = t, u = i.useRef(null), [m, x] = i.useState(!0), {
                        isDesktop: h
                    } = (0, v.F)(), {
                        is_loading: j
                    } = a;
                    return (i.useEffect(() => {
                        o && m && "pending" !== c && !j && "old" === c && (0, az.J)((0, aP.xG)().strategy_conversion, void 0, {
                            closeButton: !1
                        })
                    }, [o, m, c, _, j]), o && m) ? (0, l.jsxs)("div", {
                        className: "load-strategy__container load-strategy__container--has-footer",
                        children: [(0, l.jsxs)("div", {
                            className: R()("load-strategy__local-preview", {
                                "load-strategy__local-preview--active": s === eO.ve.BOT_BUILDER && n
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__title",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Preview"
                                })
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__preview-workspace",
                                children: (0, l.jsxs)("div", {
                                    id: "load-strategy__blockly-container",
                                    style: {
                                        height: "100%"
                                    },
                                    children: [(0, l.jsx)("div", {
                                        className: "load-strategy__local-preview-close",
                                        children: (0, l.jsx)(N.Z, {
                                            onClick: () => {
                                                d(null)
                                            },
                                            "data-testid": "dt_load-strategy__local-preview-close",
                                            height: "20px",
                                            width: "20px"
                                        })
                                    }), (0, l.jsx)(a5, {})]
                                })
                            })]
                        }), !h && (0, l.jsx)("div", {
                            className: "load-strategy__local-footer",
                            children: (0, l.jsx)(a0, {})
                        })]
                    }) : (0, l.jsx)("div", {
                        className: "load-strategy__container",
                        children: (0, l.jsxs)("div", {
                            className: "load-strategy__local-dropzone",
                            children: [(0, l.jsx)("input", {
                                type: "file",
                                ref: u,
                                accept: "application/xml, text/xml",
                                style: {
                                    display: "none"
                                },
                                onChange: e => {
                                    let t = r(e, !1);
                                    t || (0, az.J)((0, aP.xG)().xml_import_error, void 0, {
                                        className: "error-toast"
                                    }), x(t)
                                },
                                "data-testid": "dt-load-strategy-file-input"
                            }), (0, l.jsx)(a1, {
                                message: (0, A.NC)("Importing XML files from Binary Bot and other third-party platforms may take longer."),
                                icon: (0, l.jsx)(aQ.Z, {
                                    fill: "#e18d00",
                                    iconSize: "xs"
                                }),
                                className: "load-strategy__section_message"
                            }), (0, l.jsxs)("div", {
                                "data-testid": "dt__local-dropzone-area",
                                className: "load-strategy__local-dropzone-area",
                                onDrop: e => {
                                    r(e, !1)
                                },
                                children: [h ? (0, l.jsxs)(i.Fragment, {
                                    children: [(0, l.jsx)(aJ.Z, {
                                        height: "128px",
                                        width: "128px",
                                        className: "load-strategy__local-icon"
                                    }), (0, l.jsx)("div", {
                                        className: "load-strategy__local-title",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Drag your XML file here"
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "load-strategy__local-description",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "or, if you prefer..."
                                        })
                                    })]
                                }) : (0, l.jsx)(aK.Z, {
                                    height: "96px",
                                    width: "96px",
                                    className: "load-strategy__local-icon"
                                }), (0, l.jsx)(ek.Z, {
                                    text: m ? (0, A.NC)("Select an XML file from your device") : (0, A.NC)("Please upload an XML file"),
                                    "data-testid": "dt_load-strategy__local-upload",
                                    onClick: () => {
                                        var e;
                                        return null == u ? void 0 : null === (e = u.current) || void 0 === e ? void 0 : e.click()
                                    },
                                    has_effect: !0,
                                    primary: !0,
                                    large: !0
                                })]
                            })]
                        })
                    })
                });
            var a2 = a("45845"),
                a4 = a("30810"),
                a9 = a("39590");
            let a6 = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return e || "string" == typeof e ? ({
                        [a4.R.UNSAVED]: (0, l.jsx)(a9.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)",
                            className: "icon-general-fill-g-path"
                        }),
                        [a4.R.LOCAL]: (0, l.jsx)(aJ.Z, {
                            height: "16px",
                            width: "16px",
                            fill: "var(--text-general)"
                        }),
                        [a4.R.GOOGLE_DRIVE]: (0, l.jsx)(aY.Z, {
                            className: t,
                            height: "16px",
                            width: "16px",
                            fill: "var(--text-general)"
                        })
                    })[e] : (0, l.jsx)(a9.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    })
                },
                se = (0, r.Pi)(e => {
                    let {
                        workspace: t
                    } = e, {
                        load_modal: a,
                        blockly_store: s
                    } = (0, p.oR)(), {
                        setLoading: n
                    } = s, {
                        getSaveType: i,
                        loadStrategyOnModalRecentPreview: r,
                        selected_strategy_id: o,
                        updateXmlValuesOnStrategySelection: d
                    } = a;
                    return (0, l.jsxs)("div", {
                        className: R()("load-strategy__recent-item", {
                            "load-strategy__recent-item--selected": o === t.id
                        }),
                        onClick: () => {
                            o !== t.id && (n(!0), r(t.id), d())
                        },
                        "data-testid": "dt_recent_workspace_item",
                        children: [(0, l.jsxs)("div", {
                            className: "load-strategy__recent-item-text",
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__recent-item-title",
                                title: t.name,
                                children: t.name
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__recent-item-time",
                                children: (0, D.timeSince)(t.timestamp)
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "load-strategy__recent-item-location",
                            children: [a6(t.save_type, "load-strategy__recent-icon--active"), (0, l.jsx)("div", {
                                className: "load-strategy__recent-item-saved",
                                children: i(t.save_type)
                            })]
                        })]
                    }, t.id)
                }),
                st = (0, r.Pi)(() => {
                    let {
                        load_modal: e
                    } = (0, p.oR)(), {
                        is_explanation_expand: t,
                        recent_strategies: a,
                        toggleExplanationExpand: s
                    } = e;
                    return a.length ? (0, l.jsx)("div", {
                        className: "load-strategy__container load-strategy__container--has-footer",
                        children: (0, l.jsxs)("div", {
                            className: "load-strategy__recent",
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__recent__files",
                                children: a.map(e => (0, l.jsx)(se, {
                                    workspace: e
                                }, e.id))
                            }), (0, l.jsxs)("div", {
                                className: "load-strategy__recent__preview",
                                children: [(0, l.jsx)("div", {
                                    className: "load-strategy__title load-strategy__recent-preview-title",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Preview"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "load-strategy__preview-workspace",
                                    children: (0, l.jsx)("div", {
                                        id: "load-strategy__blockly-container",
                                        style: {
                                            height: "100%"
                                        },
                                        children: (0, l.jsx)(a5, {})
                                    })
                                })]
                            })]
                        })
                    }) : (0, l.jsx)("div", {
                        className: "load-strategy__container",
                        children: (0, l.jsxs)("div", {
                            className: "load-strategy__recent__empty",
                            "data-testid": "dt-load-strategy__recent__empty",
                            children: [(0, l.jsx)("div", {
                                className: "load-strategy__recent__empty-icon",
                                children: (0, l.jsx)(a2.Z, {
                                    height: "128px",
                                    width: "128px"
                                })
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__recent__empty-title",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "You do not have any recent bots"
                                })
                            }), (0, l.jsx)("div", {
                                className: "load-strategy__recent__empty-description",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Create one or upload one from your local drive or Google Drive."
                                })
                            }), (0, l.jsx)("div", {
                                tabIndex: 0,
                                className: "load-strategy__recent__empty-expand",
                                "data-testid": "dt-load-strategy__recent__empty-expand",
                                onClick: s,
                                onKeyDown: e => {
                                    "Enter" === e.key && s()
                                },
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Why can't I see my recent bots?"
                                })
                            }), (0, l.jsxs)("div", {
                                "data-testid": t ? "dt-empty-explanation-list--open" : "dt-empty-explanation-list--close",
                                className: R()("load-strategy__recent__empty-explanation", {
                                    "load-strategy__recent__empty-explanation--show": t
                                }),
                                children: [(0, l.jsx)("div", {
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "If you've recently used bots but don't see them in this list, it may be because you:"
                                    })
                                }), (0, l.jsxs)("ol", {
                                    className: "load-strategy__recent__empty-explanation-list",
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "1. Logged in from a different device"
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "2. Logged in from a different browser"
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "3. Cleared your browser cache"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                }),
                sa = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        is_open_button_loading: a,
                        is_open_button_disabled: s,
                        loadStrategyOnBotBuilder: n,
                        toggleLoadModal: i
                    } = e, {
                        setOpenSettings: r
                    } = t;
                    return (0, l.jsx)(ek.Z, {
                        text: (0, A.NC)("Open"),
                        onClick: () => {
                            n(), i(), r(aP.tx.BOT_IMPORT)
                        },
                        is_loading: a,
                        has_effect: !0,
                        primary: !0,
                        large: !0,
                        disabled: s
                    })
                }),
                ss = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        active_index: a,
                        is_load_modal_open: s,
                        loaded_local_file: n,
                        onEntered: i,
                        recent_strategies: r,
                        setActiveTabIndex: o,
                        toggleLoadModal: d,
                        tab_name: c
                    } = e, {
                        setPreviewOnPopup: _
                    } = t, {
                        isDesktop: u
                    } = (0, v.F)(), m = (0, A.NC)("Load strategy"), x = e => {
                        o(e), aV({
                            load_strategy_tab: aG.yO[e + (u ? 0 : 1)]
                        })
                    };
                    if (!u) return (0, l.jsx)(aj, {
                        is_modal_open: s,
                        className: "load-strategy__wrapper",
                        header: m,
                        onClickClose: () => {
                            _(!1), d(), (0, tK._W)({
                                subform_name: "load_strategy",
                                load_strategy_tab: aG.yO[a + 1]
                            })
                        },
                        height_offset: "80px",
                        page_overlay: !0,
                        children: (0, l.jsxs)(e1.Z, {
                            active_index: a,
                            onTabItemClick: x,
                            top: !0,
                            children: [(0, l.jsx)("div", {
                                label: (0, A.NC)("Local"),
                                children: (0, l.jsx)(a7, {})
                            }), (0, l.jsx)("div", {
                                label: "Google Drive",
                                children: (0, l.jsx)(aW, {})
                            })]
                        })
                    });
                    let h = !!n && c === aX.y.TAB_LOCAL,
                        j = r.length > 0 && c === aX.y.TAB_RECENT;
                    return (0, l.jsxs)(e$.Z, {
                        title: m,
                        className: "load-strategy",
                        width: "1000px",
                        height: "80vh",
                        is_open: s,
                        toggleModal: () => {
                            d(), (0, tK._W)({
                                subform_name: "load_strategy",
                                load_strategy_tab: aG.yO[a + (u ? 0 : 1)]
                            })
                        },
                        onEntered: i,
                        elements_to_ignore: [document.querySelector(".injectionDiv")],
                        children: [(0, l.jsx)(e$.Z.Body, {
                            children: (0, l.jsxs)(e1.Z, {
                                active_index: a,
                                onTabItemClick: x,
                                top: !0,
                                header_fit_content: !0,
                                children: [(0, l.jsx)("div", {
                                    label: (0, A.NC)("Recent"),
                                    children: (0, l.jsx)(st, {})
                                }), (0, l.jsx)("div", {
                                    label: (0, A.NC)("Local"),
                                    children: (0, l.jsx)(a7, {})
                                }), (0, l.jsx)("div", {
                                    label: "Google Drive",
                                    children: (0, l.jsx)(aW, {})
                                })]
                            })
                        }), j && (0, l.jsx)(e$.Z.Footer, {
                            has_separator: !0,
                            children: (0, l.jsx)(sa, {})
                        }), h && (0, l.jsx)(e$.Z.Footer, {
                            has_separator: !0,
                            children: (0, l.jsx)(a0, {})
                        })]
                    })
                }),
                sn = e => {
                    let {
                        children: t,
                        should_wrap_items: a
                    } = e;
                    return a ? (0, l.jsx)("div", {
                        className: "dc-radio-group__item-wrapper",
                        children: t
                    }) : (0, l.jsx)(i.Fragment, {
                        children: t
                    })
                },
                sl = e => {
                    let {
                        className: t,
                        name: a,
                        onToggle: s,
                        required: n,
                        selected: r,
                        should_wrap_items: o,
                        children: d
                    } = e, [c, _] = i.useState(r);
                    i.useEffect(() => {
                        _(r)
                    }, [r]);
                    let u = e => {
                        _(e.target.value), s(e)
                    };
                    return (0, l.jsx)("div", {
                        className: R()("dc-radio-group", t),
                        children: Array.isArray(d) && d.filter(e => !e.props.hidden).map(e => (0, l.jsx)(sn, {
                            should_wrap_items: o,
                            children: (0, l.jsxs)("label", {
                                className: R()("dc-radio-group__item", t, {
                                    "dc-radio-group__item--selected": c === e.props.value
                                }),
                                children: [(0, l.jsx)("input", {
                                    id: e.props.id,
                                    name: a,
                                    className: "dc-radio-group__input",
                                    type: "radio",
                                    value: e.props.value,
                                    checked: c === e.props.value,
                                    onChange: u,
                                    disabled: e.props.disabled,
                                    required: n
                                }), (0, l.jsx)("span", {
                                    className: R()("dc-radio-group__circle", {
                                        "dc-radio-group__circle--selected": c === e.props.value,
                                        "dc-radio-group__circle--disabled": e.props.disabled,
                                        "dc-radio-group__circle--error": e.props.has_error
                                    })
                                }), (0, l.jsx)(K.Z, {
                                    size: "xs",
                                    className: R()("dc-radio-group__label", {
                                        "dc-radio-group__label--disabled": e.props.disabled,
                                        "dc-radio-group__label--error": e.props.has_error
                                    }),
                                    children: e.props.label
                                })]
                            })
                        }, e.props.value))
                    })
                };
            sl.Item = e => {
                let {
                    children: t,
                    hidden: a = !1,
                    ...s
                } = e;
                return (0, l.jsx)("div", {
                    hidden: a,
                    ...s,
                    children: t
                })
            };
            let si = e => {
                    let {
                        icon: t,
                        text: a,
                        google_drive_connected: s
                    } = e, n = "Google Drive" === a;
                    return (0, l.jsx)("div", {
                        className: "save-type__container",
                        children: (0, l.jsxs)("div", {
                            className: "save-type__radio",
                            children: [t && i.cloneElement(t, {
                                className: R()("save-type__icon", {
                                    "save-type__icon--active": n && s,
                                    "save-type__icon--disabled": n && !s
                                }, t.props.className)
                            }), (0, l.jsx)(K.Z, {
                                as: "p",
                                align: "center",
                                size: "xxs",
                                color: n && !s ? "disabled" : "prominent",
                                lineHeight: "s",
                                className: "save-type__radio-text",
                                children: (0, A.NC)(a)
                            })]
                        })
                    })
                },
                sr = e => {
                    let {
                        bot_name: t,
                        button_status: a,
                        is_authorised: s,
                        onConfirmSave: n,
                        onDriveConnect: i,
                        validateBotName: r,
                        toggleSaveModal: o,
                        is_mobile: d,
                        is_onscreen_keyboard_active: c,
                        setCurrentFocus: _
                    } = e;
                    return (0, l.jsx)(eI.J9, {
                        initialValues: {
                            is_local: !0,
                            save_as_collection: !1,
                            bot_name: t === (0, D.config)().default_file_name ? "" : t
                        },
                        validate: r,
                        onSubmit: n,
                        children: e => {
                            let {
                                values: {
                                    is_local: t
                                },
                                setFieldValue: n,
                                touched: r,
                                errors: u
                            } = e;
                            return (0, l.jsx)(ea.Z, {
                                height: d ? "calc(100%)" : "500px",
                                autohide: !0,
                                children: (0, l.jsxs)(eI.l0, {
                                    className: R()({
                                        "form--active-keyboard": c
                                    }),
                                    children: [(0, l.jsxs)("div", {
                                        className: "modal__content",
                                        children: [(0, l.jsxs)(K.Z, {
                                            size: "xs",
                                            lineHeight: "l",
                                            children: [(0, A.NC)("Enter your bot name, choose to save on your computer or Google Drive, and hit "), (0, l.jsx)("strong", {
                                                children: (0, A.NC)("Save.")
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: "modal__content-row",
                                            children: (0, l.jsx)(eI.gN, {
                                                name: "bot_name",
                                                children: e => {
                                                    let {
                                                        field: t
                                                    } = e;
                                                    return (0, l.jsx)(eX, {
                                                        className: "save-type__input",
                                                        type: "text",
                                                        placeholder: (0, A.NC)("Untitled Strategy"),
                                                        error: r[t.name] && u[t.name],
                                                        label: (0, A.NC)("Bot name"),
                                                        onFocus: e => _(e.currentTarget.value),
                                                        onBlur: () => _(""),
                                                        ...t,
                                                        max_characters: 25
                                                    })
                                                }
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "modal__content-row",
                                            children: (0, l.jsxs)(sl, {
                                                className: "radio-group__save-type",
                                                name: "is_local",
                                                selected: () => s && !t ? D.save_types.GOOGLE_DRIVE : D.save_types.LOCAL,
                                                onToggle: () => n("is_local", !t),
                                                children: [(0, l.jsx)(sl.Item, {
                                                    id: "local",
                                                    label: (0, l.jsx)(si, {
                                                        text: (0, A.NC)("Local"),
                                                        icon: d ? (0, l.jsx)(aK.Z, {
                                                            height: "48px",
                                                            width: "48px"
                                                        }) : (0, l.jsx)(aJ.Z, {
                                                            height: "48px",
                                                            width: "48px"
                                                        })
                                                    }),
                                                    value: D.save_types.LOCAL
                                                }), (0, l.jsx)(sl.Item, {
                                                    id: "drive",
                                                    label: (0, l.jsx)(si, {
                                                        text: "Google Drive",
                                                        icon: (0, l.jsx)(aY.Z, {
                                                            height: "48px",
                                                            width: "48px"
                                                        }),
                                                        google_drive_connected: s,
                                                        onDriveConnect: i
                                                    }),
                                                    value: D.save_types.GOOGLE_DRIVE,
                                                    disabled: !s,
                                                    className: R()({
                                                        "dc-radio-group__item-disabled": !s
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: R()("modal__footer", {
                                            "modal__footer--active-keyboard": c
                                        }),
                                        children: [(0, l.jsx)(ek.Z, {
                                            type: "button",
                                            className: "modal__footer--button",
                                            text: (0, A.NC)("Cancel"),
                                            onClick: o,
                                            secondary: !0
                                        }), (0, l.jsx)(ek.Z, {
                                            className: "modal__footer--button",
                                            type: "submit",
                                            is_loading: 1 === a,
                                            is_submit_success: 2 === a,
                                            text: (0, A.NC)("Save"),
                                            primary: !0
                                        })]
                                    })]
                                })
                            })
                        }
                    })
                },
                so = (0, r.Pi)(() => {
                    let {
                        save_modal: e,
                        google_drive: t,
                        dashboard: a,
                        load_modal: s,
                        ui: n
                    } = (0, p.oR)(), {
                        dashboard_strategies: r
                    } = s, {
                        button_status: o,
                        bot_name: d,
                        is_save_modal_open: c,
                        onConfirmSave: _,
                        toggleSaveModal: u,
                        updateBotName: m,
                        validateBotName: x
                    } = e, {
                        is_authorised: h,
                        onDriveConnect: j
                    } = t, {
                        is_onscreen_keyboard_active: b,
                        setCurrentFocus: y
                    } = n, {
                        isMobile: g
                    } = (0, v.F)(), {
                        active_tab: f
                    } = a;
                    return (0, i.useEffect)(() => {
                        if (f === eO.ve.BOT_BUILDER) {
                            var e;
                            m((null == r ? void 0 : null === (e = r[0]) || void 0 === e ? void 0 : e.name) ? ? "")
                        }
                    }, [f, r, m]), g ? (0, l.jsx)(aj, {
                        is_modal_open: c,
                        className: "save-modal__wrapper",
                        header: (0, A.NC)("Save strategy"),
                        onClickClose: u,
                        height_offset: "80px",
                        page_overlay: !0,
                        children: (0, l.jsx)(sr, {
                            bot_name: d,
                            button_status: o,
                            is_authorised: h,
                            onConfirmSave: _,
                            onDriveConnect: j,
                            validateBotName: x,
                            toggleSaveModal: u,
                            is_mobile: g,
                            is_onscreen_keyboard_active: b,
                            setCurrentFocus: y
                        })
                    }) : (0, l.jsx)(e$.Z, {
                        title: (0, A.NC)("Save strategy"),
                        className: "modal--save",
                        width: "32.8rem",
                        height: "50rem",
                        is_open: c,
                        toggleModal: u,
                        children: (0, l.jsx)(sr, {
                            bot_name: d,
                            button_status: o,
                            is_authorised: h,
                            onConfirmSave: _,
                            onDriveConnect: j,
                            validateBotName: x,
                            toggleSaveModal: u,
                            setCurrentFocus: y
                        })
                    })
                });
            var sd = a("58902"),
                sc = a("13323");
            let s_ = {
                    fontWeight: "700",
                    fontSize: "1.4rem",
                    height: "4rem",
                    padding: "1rem 1.6rem"
                },
                su = e => {
                    let {
                        steps: t,
                        styles: a,
                        handleCallback: s,
                        ...n
                    } = e;
                    return (0, l.jsx)(sc.ZP, {
                        steps: t,
                        continuous: !0,
                        callback: s,
                        locale: {
                            back: (0, A.NC)("Previous"),
                            next: (0, A.NC)("Next")
                        },
                        ...n,
                        styles: {
                            options: {
                                arrowColor: "var(--general-main-2)",
                                backgroundColor: "var(--general-main-2)",
                                primaryColor: "var(--brand-red-coral)",
                                textColor: "var(--text-general)",
                                spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                                width: 440
                            },
                            buttonBack: {
                                border: "0.2rem solid var(--text-less-prominent)",
                                marginInlineEnd: "1rem",
                                borderRadius: "0.4rem",
                                color: "var(--text-general)",
                                ...s_
                            },
                            buttonNext: { ...s_
                            },
                            buttonClose: {
                                insetInlineEnd: "0px",
                                right: "unset"
                            },
                            overlay: {
                                height: "100%"
                            },
                            ...a
                        }
                    })
                },
                sm = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        is_tour_dialog_visible: t,
                        setTourDialogVisibility: a
                    } = e, {
                        isDesktop: s
                    } = (0, v.F)();
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(aB.Z, {
                            is_visible: t,
                            confirm_button_text: (0, A.NC)("OK"),
                            onConfirm: () => {
                                a(!1)
                            },
                            is_mobile_full_width: !0,
                            className: "dc-dialog tour-dialog",
                            has_close_icon: !1,
                            children: [(0, l.jsx)("div", {
                                className: "dc-dialog__content__header",
                                children: (0, l.jsx)(K.Z, {
                                    weight: "bold",
                                    color: "prominent",
                                    size: s ? "s" : "xs",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Congratulations"
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "dc-dialog__content__description",
                                children: (0, l.jsx)(K.Z, {
                                    size: s ? "xs" : "xxs",
                                    color: "prominent",
                                    children: (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)("div", {
                                            className: "dc-dialog__content__description__text",
                                            "data-testid": "tour-success-message",
                                            children: (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "You have successfully created your bot using a simple strategy."
                                            }, 0)
                                        }), (0, l.jsx)("div", {
                                            className: "dc-dialog__content__description__text",
                                            children: (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Now, <0>run the bot</0> to test out the strategy.",
                                                components: [(0, l.jsx)("strong", {}, 0)]
                                            }, 0)
                                        }), (0, l.jsx)("div", {
                                            className: "dc-dialog__content__description__text",
                                            children: (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Note: If you wish to learn more about the Bot Builder, you can proceed to the <0>Tutorials</0> tab.",
                                                components: [(0, l.jsx)("strong", {}, 0)]
                                            }, 0)
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                });
            var sx = a("21995"),
                sh = a("63430"),
                sp = a("39338");
            let sj = (0, r.Pi)(e => {
                    let {
                        content: t,
                        media: a,
                        label: s,
                        step_index: n,
                        has_localize_component: r = !1,
                        show_actions: o = !0
                    } = e;
                    return (0, l.jsx)(i.Fragment, {
                        children: (0, l.jsxs)("div", {
                            className: "onboard",
                            children: [o && (0, l.jsx)("div", {
                                className: "onboard__header",
                                children: (0, l.jsxs)(K.Z, {
                                    color: "less-prominent",
                                    lineHeight: "l",
                                    children: [n, "/6"]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "onboard__steps",
                                children: [(0, l.jsx)("div", {
                                    className: "onboard__label",
                                    children: (0, l.jsx)(K.Z, {
                                        as: "p",
                                        lineHeight: "l",
                                        weight: "bold",
                                        children: s
                                    })
                                }), a && (0, l.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    controls: !0,
                                    preload: "auto",
                                    playsInline: !0,
                                    disablePictureInPicture: !0,
                                    controlsList: "nodownload",
                                    style: {
                                        width: "100%"
                                    },
                                    src: a
                                }), (0, l.jsx)("div", {
                                    className: "onboard__content",
                                    children: (0, l.jsx)(l.Fragment, {
                                        children: t.map(e => r ? e : (0, l.jsx)("div", {
                                            className: "onboard__content__block",
                                            children: (0, l.jsx)(K.Z, {
                                                align: "left",
                                                as: "p",
                                                size: "xs",
                                                lineHeight: "l",
                                                children: e
                                            })
                                        }, `onboard--${(0,sp.Fs)()}`))
                                    })
                                })]
                            })]
                        })
                    })
                }),
                sv = {
                    showProgress: !1,
                    spotlightClicks: !1,
                    disableBeacon: !0,
                    disableOverlay: !0,
                    disableCloseOnEsc: !0
                },
                sb = [{
                    target: "#id-bot-builder",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Build from scratch"
                        }),
                        content: [(0, l.jsx)(l.Fragment, {
                            children: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Create your bot using our drag-and-drop blocks or click Quick Strategy to choose from the ready-to-use bot templates."
                            })
                        }), (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "We also provide a guide on the Tutorial tab to show you how you can build and execute a simple strategy."
                            })
                        })],
                        media: "/assets/videos/dbot-onboarding-tour-step-1.mp4",
                        step_index: 1
                    }),
                    ...sv,
                    disableOverlay: !1
                }, {
                    target: "#id-charts",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Monitor the market"
                        }),
                        content: [(0, l.jsx)(A.Xx, {
                            i18n_default_text: "View the market price of your favourite assets."
                        }, "view the market")],
                        media: "/assets/videos/dbot-onboarding-tour-step-2.mp4",
                        step_index: 2
                    }),
                    ...sv,
                    disableOverlay: !1
                }, {
                    target: "#id-tutorials",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Learn more with our tutorials"
                        }),
                        content: [(0, l.jsx)(A.Xx, {
                            i18n_default_text: "Explore the video guides and FAQs to build your bot in the tutorials tab."
                        }, "explore tutorials")],
                        media: "/assets/videos/dbot-onboarding-tour-step-3.mp4",
                        step_index: 3
                    }),
                    ...sv,
                    disableOverlay: !1
                }, {
                    target: "#tab__dashboard__table__tiles",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Use these shortcuts"
                        }),
                        content: [(0, l.jsx)(A.Xx, {
                            i18n_default_text: "You can also import or build your bot using any of these shortcuts."
                        }, "use shortcuts")],
                        step_index: 4
                    }),
                    placement: (0, L.rK)() ? "left" : "right",
                    ...sv,
                    disableOverlay: !1
                }, {
                    target: ".dc-drawer__container",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Check your bot’s performance"
                        }),
                        content: [(0, l.jsx)(A.Xx, {
                            i18n_default_text: "See how your bot is doing in real-time."
                        }, "check bot performance")],
                        media: "/assets/videos/dbot-onboarding-tour-step-5.mp4",
                        step_index: 5
                    }),
                    placement: (0, L.rK)() ? "right" : "left",
                    ...sv,
                    disableOverlay: !1
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Run your bot"
                        }),
                        content: [(0, l.jsx)(A.Xx, {
                            i18n_default_text: "Click <0>Run</0> when you want to start trading, and click <0>Stop</0> when you want to stop.",
                            components: [(0, l.jsx)("strong", {}, 0)]
                        }, "run your bot")],
                        media: "/assets/videos/dbot-onboarding-tour-step-6.mp4",
                        step_index: 6
                    }),
                    ...sv,
                    disableOverlay: !1
                }, {
                    target: "#id-tutorials",
                    content: (0, l.jsx)(sj, {
                        label: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Want to retake the tour?"
                        }),
                        content: [(0, l.jsx)(K.Z, {
                            as: "p",
                            children: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Head to the Tutorials tab to do so."
                            })
                        }, "0-id-tutorials")],
                        step_index: 7,
                        show_actions: !1,
                        has_localize_component: !0
                    }),
                    locale: {
                        last: (0, A.NC)("Got it, thanks!")
                    },
                    ...sv,
                    hideBackButton: !0,
                    disableOverlay: !1
                }],
                sy = [{
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Step 1 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "First, set the <0>Trade parameters</0> block.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left joyride-content__sub-title",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "<0>1. Trade parameters:<0>",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsxs)("ul", {
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "First, set <0>Market</0> to Derived > Continuous Indices > Volatility 100 (1s) Index.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Then, set <0>Trade type</0> to Up/Down > Rise/Fall.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "For <0>Contract type,</0> set it to Both.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "For <0>Default candle interval,</0> set it to 1 minute",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, L.rK)() ? "bottom" : "right",
                    ...sv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(() => (0, l.jsxs)("div", {
                        className: "joyride-content",
                        children: [(0, l.jsx)("div", {
                            className: "joyride-content__left",
                            children: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "For <0>Trade options</0>, set it as below:",
                                components: [(0, l.jsx)("strong", {}, 0)]
                            })
                        }), (0, l.jsx)("div", {
                            className: "joyride-content__left",
                            children: (0, l.jsxs)("ul", {
                                children: [(0, l.jsx)("li", {
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "<0>Duration</0>: Ticks 1",
                                        components: [(0, l.jsx)("strong", {}, 0)]
                                    })
                                }), (0, l.jsx)("li", {
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "<0>Stake: USD</0> 10 (min: 0.35 - max: 50000)",
                                        components: [(0, l.jsx)("strong", {}, 0)]
                                    })
                                })]
                            })
                        })]
                    }), {}),
                    placement: (0, L.rK)() ? "bottom" : "right",
                    ...sv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Step 2 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Then, set the <0>Purchase conditions</0> block.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left joyride-content__sub-title",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "<0>2. Purchase conditions</0>:",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)("ul", {
                                    children: (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "<0>Purchase</0>: Rise",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, L.rK)() ? "bottom" : "right",
                    ...sv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left joyride-content__left__step-three",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Step 3 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "The third block is <0>optional</0>. You may use this block if you want to sell your contract before it expires. For now, leave the block as it is. ",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, L.rK)() ? "bottom" : "right",
                    ...sv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Step 4 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Next, go to <0>Utility tab</0> under the Blocks menu. Tap the drop-down arrow and hit <0>Loops</0>.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsxs)("div", {
                                className: "joyride-content__left",
                                children: [(0, l.jsxs)("ul", {
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Look for the <0>Repeat While/Until</0>, and click the + icon to add the block to the workspace area.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Choose <0>until</0> as the repeat option.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "joyride-content__left joyride-content__with-icon",
                                    children: [(0, l.jsx)("div", {
                                        className: "joyride-content__with-icon__left",
                                        children: (0, l.jsx)(sh.Z, {
                                            className: "db-contract-card__result-icon",
                                            fill: "#4bb4b3"
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "joyride-content__with-icon__right",
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Pro tip: You can also click and drag out the desired block",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    controls: !0,
                                    playsInline: !0,
                                    preload: "auto",
                                    disablePictureInPicture: !0,
                                    controlsList: "nodownload",
                                    children: (0, l.jsx)("source", {
                                        src: "/assets/videos/bot-builder-tour-step-4.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, L.rK)() ? "bottom" : "right",
                    ...sv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Step 5 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Now, tap the <0>Analysis</0> drop-down arrow and hit <0>Contract</0>.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsxs)("ul", {
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Go to the <0>Last trade result</0> block and click + icon to add the <0>Result is Win</0> block to the workspace.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Then, drag the <0>Result is win</0> into the empty slot next to <0>repeat until</0> block.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Now, go to the <0>Restart trading conditions</0> block.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Drag the <0>Trade again</0> block and add it into the <0>do</0> part of the <0>Repeat until</0> block.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        })
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    controls: !0,
                                    playsInline: !0,
                                    preload: "auto",
                                    disablePictureInPicture: !0,
                                    controlsList: "nodownload",
                                    children: (0, l.jsx)("source", {
                                        src: "/assets/videos/bot-builder-tour-step-5.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    placement: (0, L.rK)() ? "bottom" : "right",
                    ...sv
                }, {
                    target: ".animation__wrapper",
                    content: (0, l.jsx)(e => {
                        let {
                            show_label: t = !1
                        } = e;
                        return (0, l.jsxs)("div", {
                            className: "joyride-content",
                            children: [t && (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Step 6 :"
                                })
                            }), (0, l.jsx)("div", {
                                className: "joyride-content__left",
                                children: (0, l.jsx)(A.Xx, {
                                    i18n_default_text: "Finally, drag and add the whole <0>Repeat</0> block to the <0>Restart trading conditions</0> block.",
                                    components: [(0, l.jsx)("strong", {}, 0)]
                                })
                            })]
                        })
                    }, {
                        show_label: !0
                    }),
                    locale: {
                        last: (0, A.NC)("Next")
                    },
                    ...sv
                }],
                sg = [{
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Step 1"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "First, click the Import icon on the tool bar."
                        }, "step-1")
                    }, "step-1-wrapper")],
                    tour_step_key: 1
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Step 2"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Next, import your bot directly from your mobile device or from Google Drive."
                        }, "step-2")
                    }, "step-2-wrapper")],
                    tour_step_key: 2
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Step 3"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Once imported, you will see a preview of the bot on the workspace. Click run to start trading with this bot."
                        }, "step-3")
                    }, "step-3-wrapper")],
                    tour_step_key: 3
                }],
                sf = [{
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Get started on Deriv Bot"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Hi! Hit <0>Start</0> for a quick tour.",
                            components: [(0, l.jsx)("strong", {}, 0)]
                        }, "get-started-on-deriv-bot")
                    }, "get-started-on-deriv-bot-wrapper")],
                    tour_step_key: 1
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Import or choose your bot"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Import your bot or tap Quick Strategies to choose from the ready-to-use bot templates."
                        }, "import-or-choose-your-bot")
                    }, "import-or-choose-your-bot-wrapper")],
                    media: "/assets/videos/dbot-mobile-onboarding-step-1.mp4",
                    tour_step_key: 2
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Monitor the market"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "View the market price of your favourite assets."
                        }, "monitor-the-market")
                    }, "monitor-the-market-wrapper")],
                    media: "/assets/videos/dbot-mobile-onboarding-step-2.mp4",
                    tour_step_key: 3
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Learn more with our tutorials"
                    }),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Explore the video guides and FAQs to build your bot in the tutorials tab."
                        }, "learn-more-with-our-tutorials")
                    }, "learn-more-with-our-tutorials-wrapper")],
                    media: "/assets/videos/dbot-mobile-onboarding-step-3.mp4",
                    tour_step_key: 4
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Use these shortcuts"
                    }),
                    img: (0, sx.oY)("dbot-mobile-onboarding-step-4.png"),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "You can also import or build your bot using any of these shortcuts."
                        }, "use-these-shortcuts")
                    }, "use-these-shortcuts-wrapper")],
                    tour_step_key: 5
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Check your bot’s performance"
                    }),
                    media: "/assets/videos/dbot-mobile-onboarding-step-5.mp4",
                    content: [(0, l.jsxs)("span", {
                        children: [(0, l.jsx)(A.Xx, {
                            i18n_default_text: "See how your bot is doing in real-time."
                        }, "check-your-bots-performance"), ","]
                    }, "check-your-bots-performance-wrapper")],
                    tour_step_key: 6
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Run your bot"
                    }),
                    media: "/assets/videos/dbot-mobile-onboarding-step-6.mp4",
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Click <0>Run</0> when you want to start trading, and click <0>Stop</0> when you want to stop.",
                            components: [(0, l.jsx)("strong", {}, 0)]
                        }, "run-your-bot")
                    }, "run-your-bot-wrapper")],
                    tour_step_key: 7
                }, {
                    header: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Want to retake the tour?"
                    }),
                    img: (0, sx.oY)("dbot-mobile-onboarding-step-7.png"),
                    content: [(0, l.jsx)("span", {
                        children: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Head to the Tutorials tab to do so."
                        }, "want-to-retake-the-tour")
                    }, "want-to-retake-the-tour-wrapper")],
                    tour_step_key: 8
                }],
                sN = e => e ? (0, l.jsx)(A.Xx, {
                    i18n_default_text: "Here’s a quick guide on how to use Deriv Bot on the go."
                }, "tour-dialog-info-mobile") : (0, l.jsx)(A.Xx, {
                    i18n_default_text: "Learn how to build your bot from scratch using a simple strategy."
                }, "tour-dialog-info-desktop"),
                sC = e => e ? (0, l.jsx)(A.Xx, {
                    i18n_default_text: "You can import a bot from your mobile device or from Google drive, see a preview in the bot builder, and start trading by running the bot."
                }, "tour-dialog-action-mobile") : (0, l.jsx)(A.Xx, {
                    i18n_default_text: "Hit the <0>Start</0> button to begin and follow the tutorial.",
                    components: [(0, l.jsx)("strong", {}, 0)]
                }, "tour-dialog-action-desktop"),
                sw = (0, l.jsx)(A.Xx, {
                    i18n_default_text: "Get started on Deriv Bot"
                }, "onboarding-tour-header"),
                sk = e => e ? (0, l.jsx)(A.Xx, {
                    i18n_default_text: "Bot Builder guide"
                }, "tour_header-mobile") : (0, l.jsx)(A.Xx, {
                    i18n_default_text: "Let's build a Bot!"
                }, "tour_header-desktop");
            var sT = a("84006");
            let sE = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        active_tab: t,
                        is_tour_dialog_visible: a,
                        setTourDialogVisibility: s,
                        setActiveTour: n,
                        setShowMobileTourDialog: i
                    } = e, {
                        isDesktop: r
                    } = (0, v.F)(), o = t === eO.ve.DASHBOARD ? "onboard_tour_token" : "bot_builder_token", d = () => {
                        !r && i(!1), s(!1), n(""), (0, sT.X7)(new Date().getTime(), o)
                    }, c = t === eO.ve.DASHBOARD, _ = sN(!r), u = sC(!r), m = t === eO.ve.DASHBOARD ? sw : sk(!r);
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(aB.Z, {
                            is_visible: a,
                            cancel_button_text: (0, A.NC)("Skip"),
                            onCancel: () => d(),
                            confirm_button_text: (0, A.NC)("Start"),
                            onConfirm: () => {
                                n(sT.TJ[t]), !r && i(!1), s(!1), (0, sT.X7)(new Date().getTime(), o)
                            },
                            is_mobile_full_width: !0,
                            className: "dc-dialog tour-dialog",
                            has_close_icon: !1,
                            portal_element_id: "modal_root",
                            children: [(0, l.jsx)("div", {
                                className: "dc-dialog__content__header",
                                children: (0, l.jsx)(K.Z, {
                                    weight: "bold",
                                    color: "prominent",
                                    size: r ? "s" : "xs",
                                    children: m
                                })
                            }), (0, l.jsx)("div", {
                                className: "dc-dialog__content__description",
                                children: (0, l.jsx)(K.Z, {
                                    size: r ? "xs" : "xxs",
                                    color: "prominent",
                                    children: (0, l.jsx)(l.Fragment, {
                                        children: c ? (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Hi! Hit <0>Start</0> for a quick tour.",
                                            components: [(0, l.jsx)("strong", {}, 0)]
                                        }, 0) : (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)("div", {
                                                className: "dc-dialog__content__description__text",
                                                children: _
                                            }), (0, l.jsx)("div", {
                                                className: "dc-dialog__content__description__text",
                                                children: u
                                            }), (0, l.jsx)("div", {
                                                className: "dc-dialog__content__description__text",
                                                children: (0, l.jsx)(A.Xx, {
                                                    i18n_default_text: "Note: You can also find this tutorial in the <0>Tutorials</0> tab.",
                                                    components: [(0, l.jsx)("strong", {}, 0)]
                                                }, 0)
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                }),
                sS = () => {
                    let [e, t] = (0, i.useState)(!1), [a, s] = (0, i.useState)(!1);
                    return {
                        is_finished: e,
                        handleJoyrideCallback: e => {
                            let {
                                action: a,
                                status: n
                            } = e;
                            "finished" === n ? t(!0) : ("close" === a || "skip" === a) && s(!0)
                        },
                        setIsFinished: t,
                        is_close_tour: a,
                        setIsCloseTour: s
                    }
                },
                sA = (0, r.Pi)(() => {
                    let {
                        is_close_tour: e,
                        is_finished: t,
                        handleJoyrideCallback: a,
                        setIsCloseTour: s
                    } = sS(), {
                        dashboard: n,
                        load_modal: r
                    } = (0, p.oR)(), {
                        active_tab: o,
                        active_tour: d,
                        setActiveTour: c,
                        setTourDialogVisibility: _
                    } = n, {
                        is_load_modal_open: u
                    } = r;
                    return !(0, sd.$8)("bot_builder_token") && o === eO.ve.BOT_BUILDER && _(!0), i.useEffect(() => {
                        t ? (_(!0), c("")) : e && (c(""), s(!1))
                    }, [e, t, c, s, _]), (0, l.jsxs)(l.Fragment, {
                        children: [t ? (0, l.jsx)(sm, {}) : u ? null : (0, l.jsx)(sE, {}), d && (0, l.jsx)(su, {
                            handleCallback: a,
                            steps: sy,
                            disableCloseOnEsc: !0,
                            disableOverlay: !1,
                            disableOverlayClose: !0,
                            styles: {
                                options: {
                                    arrowColor: "transparent",
                                    backgroundColor: "var(--general-main-2)",
                                    primaryColor: "var(--brand-red-coral)",
                                    textColor: "var(--text-general)"
                                }
                            }
                        })]
                    })
                }),
                sI = e => {
                    let {
                        step: t,
                        steps_list: a,
                        is_transition: s = !1,
                        onStepChange: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "dc-progress-bar-tracker",
                        children: a.map((e, a) => {
                            let i = t === a + 1;
                            return (0, l.jsx)("div", {
                                onClick: () => {
                                    n(a + 1)
                                },
                                className: R()({
                                    "dc-progress-bar-tracker-rectangle": i,
                                    "dc-progress-bar-tracker-circle": !i,
                                    "dc-progress-bar-tracker-transition": s
                                })
                            }, e)
                        })
                    })
                },
                sR = e => {
                    let {
                        label: t,
                        type: a = "default",
                        ...s
                    } = e;
                    return t ? (0, l.jsx)("button", {
                        className: a,
                        ...s,
                        children: (0, l.jsx)(K.Z, {
                            color: "prominent",
                            align: "center",
                            weight: "bold",
                            as: "span",
                            lineHeight: "s",
                            size: "xs",
                            children: t
                        })
                    }) : null
                },
                sM = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        load_modal: t,
                        quick_strategy: a
                    } = (0, p.oR)(), {
                        toggleTourLoadModal: s
                    } = t, {
                        onTourEnd: n,
                        setTourActiveStep: r,
                        active_tour: o,
                        show_mobile_tour_dialog: d,
                        active_tab: c,
                        setShowMobileTourDialog: _,
                        setTourDialogVisibility: u
                    } = e, {
                        is_open: m
                    } = a, [x, h] = i.useState(1), j = sg.find(e => {
                        let {
                            tour_step_key: t
                        } = e;
                        return t === x
                    }), v = 3 === x ? "finish-bot-builder-tour" : "next-bot-builder-tour";
                    i.useEffect(() => {
                        r(x), d || (0, sT._y)(o, x), 2 === x ? s(!0) : "" !== o && s(!1), !(0, sd.$8)("bot_builder_token") && c === eO.ve.BOT_BUILDER && (m ? u(!1) : u(!0), _(!0))
                    }, [x, d]);
                    let b = 3 === x ? (0, A.NC)("Finish") : (0, A.NC)("Next"),
                        y = "onboarding" === o;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [d && (0, l.jsx)(sE, {}), o && !d && (0, l.jsxs)("div", {
                            "data-testid": "botbuilder-tour-mobile",
                            className: "dbot-slider dbot-slider__bot-builder-tour",
                            children: [(0, l.jsx)("div", {
                                className: "dbot-slider__label",
                                children: (0, l.jsx)(K.Z, {
                                    as: "span",
                                    size: "xs",
                                    weight: "bold",
                                    children: null == j ? void 0 : j.header
                                })
                            }), (0, l.jsx)("div", {
                                className: "dbot-slider__content",
                                children: (0, l.jsx)(K.Z, {
                                    as: "span",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: null == j ? void 0 : j.content
                                })
                            }), (0, l.jsxs)("div", {
                                className: "dbot-slider__status",
                                children: [(0, l.jsx)("div", {
                                    className: "dbot-slider__progress-bar",
                                    children: (0, l.jsx)(sI, {
                                        step: x,
                                        steps_list: sg.map(e => e.tour_step_key.toString()),
                                        onStepChange: h
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "dbot-slider__button-group",
                                    children: [1 !== x && (0, l.jsx)(sR, {
                                        onClick: () => {
                                            h(x - 1)
                                        },
                                        label: (0, A.NC)("Previous"),
                                        "data-testid": "prev-bot-builder-tour"
                                    }), (0, l.jsx)(sR, {
                                        type: "danger",
                                        onClick: () => {
                                            h(x + 1), n(x, y)
                                        },
                                        label: b,
                                        "data-testid": v
                                    })]
                                })]
                            })]
                        })]
                    })
                }),
                sO = (0, r.Pi)(e => {
                    let {
                        is_mobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsx)(sM, {}) : (0, l.jsx)(sA, {})
                    })
                });
            var sD = a("16310");
            let sL = e => {
                    let {
                        form_values: t,
                        selected_strategy: a
                    } = e;
                    aH.Analytics.trackEvent("ce_bot_form", {
                        action: a$.om.RUN_QUICK_STRATEGY,
                        form_name: a$.oH,
                        subform_name: "quick_strategy",
                        strategy_name: (0, aG.gc)(a),
                        ...(0, aG.qc)({
                            form_values: t,
                            selected_strategy: a
                        })
                    })
                },
                sU = e => {
                    let {
                        form_values: t,
                        selected_strategy: a
                    } = e;
                    aH.Analytics.trackEvent("ce_bot_form", {
                        action: a$.om.EDIT_QUICK_STRATEGY,
                        form_name: a$.oH,
                        subform_name: "quick_strategy",
                        strategy_name: (0, aG.gc)(a),
                        ...(0, aG.qc)({
                            form_values: t,
                            selected_strategy: a
                        })
                    })
                };
            var sZ = a("85414"),
                sB = a("53890"),
                sF = a("81624");
            var sz = ((n = {})[n.StrategySelect = 0] = "StrategySelect", n[n.StrategyVerified = 1] = "StrategyVerified", n[n.StrategyCompleted = 2] = "StrategyCompleted", n);
            let sP = Object.freeze({
                    ALL: 0,
                    ACCUMULATORS: 1,
                    OPTIONS: 2
                }),
                sX = [(0, A.NC)("All"), (0, A.NC)("Accumulators"), (0, A.NC)("Options")],
                sH = [{
                    name: "MARTINGALE",
                    display_name: (0, sZ.j)().MARTINGALE.label,
                    id: 0,
                    parent: [(0, A.NC)("Options")]
                }, {
                    name: "D_ALEMBERT",
                    display_name: (0, sZ.j)().D_ALEMBERT.label,
                    id: 1,
                    parent: [(0, A.NC)("Options")]
                }, {
                    name: "REVERSE_MARTINGALE",
                    display_name: (0, sZ.j)().REVERSE_MARTINGALE.label,
                    id: 2,
                    parent: [(0, A.NC)("Options")]
                }, {
                    name: "REVERSE_D_ALEMBERT",
                    display_name: (0, sZ.j)().REVERSE_D_ALEMBERT.label,
                    id: 3,
                    parent: [(0, A.NC)("Options")]
                }, {
                    name: "OSCARS_GRIND",
                    display_name: (0, sZ.j)().OSCARS_GRIND.label,
                    id: 4,
                    parent: [(0, A.NC)("Options")]
                }, {
                    name: "STRATEGY_1_3_2_6",
                    display_name: (0, sZ.j)().STRATEGY_1_3_2_6.label,
                    id: 5,
                    parent: [(0, A.NC)("Options")]
                }, {
                    name: "ACCUMULATORS_MARTINGALE",
                    display_name: (0, sZ.j)().ACCUMULATORS_MARTINGALE.label,
                    id: 6,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_MARTINGALE_ON_STAT_RESET",
                    display_name: (0, sZ.j)().ACCUMULATORS_MARTINGALE_ON_STAT_RESET.label,
                    id: 7,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_DALEMBERT",
                    display_name: (0, sZ.j)().ACCUMULATORS_DALEMBERT.label,
                    id: 8,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_DALEMBERT_ON_STAT_RESET",
                    display_name: (0, sZ.j)().ACCUMULATORS_DALEMBERT_ON_STAT_RESET.label,
                    id: 9,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_MARTINGALE",
                    display_name: (0, sZ.j)().ACCUMULATORS_REVERSE_MARTINGALE.label,
                    id: 10,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_MARTINGALE_ON_STAT_RESET",
                    display_name: (0, sZ.j)().ACCUMULATORS_REVERSE_MARTINGALE_ON_STAT_RESET.label,
                    id: 11,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_DALEMBERT",
                    display_name: (0, sZ.j)().ACCUMULATORS_REVERSE_DALEMBERT.label,
                    id: 12,
                    parent: [(0, A.NC)("Accumulators")]
                }, {
                    name: "ACCUMULATORS_REVERSE_DALEMBERT_ON_STAT_RESET",
                    display_name: (0, sZ.j)().ACCUMULATORS_REVERSE_DALEMBERT_ON_STAT_RESET.label,
                    id: 13,
                    parent: [(0, A.NC)("Accumulators")]
                }],
                s$ = e => {
                    let {
                        current_step: t,
                        is_mobile: a = !1
                    } = e, s = t === sz.StrategyCompleted ? 100 : 50;
                    return a ? (0, l.jsx)(sF.D, {
                        percentage: s,
                        label: "",
                        danger_limit: 101,
                        is_loading: !1,
                        warning_limit: 0
                    }) : (0, l.jsx)("div", {
                        className: "qs-stepper",
                        children: (0, l.jsx)(sB.t, {
                            currentStep: t,
                            labels: [(0, A.NC)("Default"), (0, A.NC)("Strategy template"), (0, A.NC)("Trade parameters")]
                        })
                    })
                },
                sV = e => {
                    let {
                        content_data: t,
                        expanded: a = !1,
                        test_id: s = "dbot-acc-id",
                        is_cursive: n = !1,
                        no_collapsible: r = !0,
                        has_subtitle: o = !0,
                        font_size: d,
                        ...c
                    } = e, [_, u] = (0, i.useState)(a), {
                        quick_strategy: {
                            selected_strategy: m
                        }
                    } = (0, p.oR)();
                    if (!t) return null;
                    let {
                        content: x,
                        header: h
                    } = t, {
                        expanded_subtitles_storage: j,
                        setExpandedSubtitlesStorage: v
                    } = c, b = `${h}__${m}`.split(" ").join("_").toLocaleLowerCase(), y = !!j && j[b] || _ || !o;
                    return (0, l.jsxs)("div", {
                        className: "dbot-accordion",
                        children: [o && (0, l.jsxs)("button", {
                            className: R()("dbot-accordion__navbar", {
                                "dbot-accordion__navbar--no-event": !r
                            }),
                            "data-testid": s,
                            onClick: e => {
                                e.preventDefault(), u(!y), j && v && v({ ...j,
                                    [b]: !y
                                })
                            },
                            children: [(0, l.jsx)("div", {
                                className: R()("dbot-accordion__header", {
                                    "dbot-accordion__header--cursive": n
                                }),
                                children: (0, l.jsx)(K.Z, {
                                    as: "span",
                                    size: d,
                                    weight: "bold",
                                    children: h
                                })
                            }), r && (0, l.jsx)("div", {
                                className: "dbot-accordion__icon",
                                children: y ? (0, l.jsx)(a8.Z, {}) : (0, l.jsx)(a3.Z, {})
                            })]
                        }), (0, l.jsx)("div", {
                            className: R()("dbot-accordion__content", {
                                "dbot-accordion__content--open": y
                            }),
                            "data-testid": "accordion-content",
                            children: (0, l.jsx)(K.Z, {
                                as: "span",
                                lineHeight: "s",
                                size: d,
                                children: x
                            })
                        })]
                    })
                };
            var sG = a("48118");
            let sq = (0, r.Pi)(e => {
                    var t, a;
                    let {
                        item: s,
                        font_size: n
                    } = e, {
                        ui: i
                    } = (0, p.oR)(), {
                        is_dark_mode_on: r
                    } = i, o = (null == s ? void 0 : s.className) ? ? "";
                    switch (s.type) {
                        case "text":
                            {
                                let e = R()(`qs__description__content ${o}`);
                                return (0, l.jsx)(l.Fragment, {
                                    children: null == s ? void 0 : null === (t = s.content) || void 0 === t ? void 0 : t.map(t => (0, l.jsx)("div", {
                                        className: e,
                                        children: (0, l.jsx)(K.Z, {
                                            size: n,
                                            children: (0, sG.ZP)(t)
                                        })
                                    }, t))
                                })
                            }
                        case "text_italic":
                            {
                                let e = R()(`qs__description__content italic ${o}`);
                                return (0, l.jsx)(l.Fragment, {
                                    children: null == s ? void 0 : null === (a = s.content) || void 0 === a ? void 0 : a.map(t => (0, l.jsx)("div", {
                                        className: e,
                                        children: (0, l.jsx)(K.Z, {
                                            size: n,
                                            children: (0, sG.ZP)(t)
                                        })
                                    }, t))
                                })
                            }
                        case "media":
                            {
                                let e = R()(`qs__description__image ${o}`);
                                return (0, l.jsx)("div", {
                                    className: e,
                                    style: null == s ? void 0 : s.styles,
                                    children: (0, l.jsx)("img", {
                                        src: r ? s.dark_src ? ? s.src : s.src,
                                        alt: s.alt
                                    })
                                })
                            }
                        default:
                            return null
                    }
                }),
                sY = e => {
                    let {
                        item: t,
                        font_size: a
                    } = e, s = Array.isArray(t) ? t : t.slice(1);
                    return (0, l.jsx)(l.Fragment, {
                        children: Array.isArray(s) && (null == s ? void 0 : s.map(e => (0, l.jsx)(i.Fragment, {
                            children: (0, l.jsx)(sq, {
                                item: e,
                                font_size: a
                            })
                        }, e.id)))
                    })
                },
                sW = (0, r.Pi)(e => {
                    let {
                        tutorial_selected_strategy: t,
                        grouped_objects_by_title: a,
                        expanded_subtitles_storage: s,
                        setExpandedSubtitlesStorage: n
                    } = e, {
                        isDesktop: r
                    } = (0, v.F)(), o = t ? "s" : "xs", d = i.useMemo(() => r ? o : "xs", [r, o]);
                    return (0, l.jsx)(l.Fragment, {
                        children: Array.isArray(a) && a.map(e => {
                            var t, a, i, r;
                            let o = (null == e ? void 0 : null === (a = e[0]) || void 0 === a ? void 0 : null === (t = a.content) || void 0 === t ? void 0 : t[0]) ? ? "";
                            return (0, l.jsx)(sV, {
                                content_data: {
                                    header: o,
                                    content: (0, l.jsx)(sY, {
                                        item: e,
                                        font_size: d
                                    })
                                },
                                expanded: !!(null === (i = e[0]) || void 0 === i ? void 0 : i.expanded),
                                is_cursive: !1,
                                no_collapsible: null === (r = e[0]) || void 0 === r ? void 0 : r.no_collapsible,
                                has_subtitle: !!o,
                                expanded_subtitles_storage: s,
                                setExpandedSubtitlesStorage: n,
                                font_size: d
                            }, `accordion-${o}`)
                        })
                    })
                }),
                sK = (0, r.Pi)(e => {
                    var t;
                    let {
                        formfields: a,
                        active_tab: s,
                        tutorial_selected_strategy: n
                    } = e, {
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        selected_strategy: o
                    } = r, d = {}, [c, _] = (0, i.useState)(d), u = (0, sZ.j)()[n || o];
                    let m = Array.isArray(null == u ? void 0 : u.description) ? null == u ? void 0 : null === (t = u.description) || void 0 === t ? void 0 : t.reduce((e, t, a) => {
                        if ("subtitle_italic" === t.type || "subtitle" === t.type) {
                            let a, s;
                            e.push([]);
                            d[a = t, s = o, `${a.content[0]}__${s}`.split(" ").join("_").toLowerCase()] = (null == t ? void 0 : t.expanded) ? ? !1
                        }
                        return e[e.length - 1].push({ ...t,
                            id: a
                        }), e
                    }, []) : [{
                        type: "text",
                        content: [null == u ? void 0 : u.description]
                    }];
                    return (0, l.jsx)(l.Fragment, {
                        children: "TRADE_PARAMETERS" === s ? (0, l.jsx)("div", {
                            className: "qs__body__content__form",
                            children: a
                        }) : (0, l.jsx)("div", {
                            className: "qs__body__content__description",
                            children: (0, l.jsx)(sW, {
                                tutorial_selected_strategy: n,
                                grouped_objects_by_title: m,
                                expanded_subtitles_storage: c,
                                setExpandedSubtitlesStorage: _
                            })
                        })
                    })
                });
            var sJ = a("95975"),
                sQ = a("68792"),
                s0 = a("51667"),
                s1 = a("35275");
            let s3 = e => {
                    let {
                        title: t,
                        items: a,
                        onSelectStrategy: s
                    } = e;
                    return a.length > 0 ? (0, l.jsxs)("div", {
                        className: "strategy-template-picker__strategy",
                        children: [(0, l.jsx)("div", {
                            className: "strategy-template-picker__title",
                            children: (0, l.jsx)(K.Z, {
                                size: "xs",
                                weight: "bold",
                                children: t
                            })
                        }), a.map((e, a) => (0, l.jsx)("div", {
                            className: "strategy-template-picker__links",
                            children: (0, l.jsx)(s1.r, {
                                hasChevron: !0,
                                size: "sm",
                                onClick: () => s(e.name, t),
                                children: e.display_name
                            })
                        }, a))]
                    }) : null
                },
                s8 = e => {
                    let {
                        selector_chip_value: t,
                        search_value: a,
                        is_searching: s,
                        onSelectStrategy: n
                    } = e, i = [], r = !1, o = e => (r = e.toLowerCase().includes(a.toLowerCase()), s && r || !s);
                    sH.filter(e => e.parent.some(e => o(e)) || e.display_name.toLowerCase().includes(a.toLowerCase())).forEach(e => {
                        let t = { ...e
                        };
                        if (s && "" !== a) {
                            if (e.display_name.toLowerCase().includes(a.toLowerCase())) t.parent = [...e.parent];
                            else {
                                let s = t.parent.filter(e => e.toLowerCase().includes(a.toLowerCase()));
                                t.parent = s.length > 0 ? s : e.parent
                            }
                        } else t.parent = [...e.parent];
                        i.push(t)
                    });
                    let d = i.filter(e => e.parent.includes(sX[sP.OPTIONS])),
                        c = i.filter(e => e.parent.includes(sX[sP.MULTIPLIERS])),
                        _ = i.filter(e => e.parent.includes(sX[sP.ACCUMULATORS])),
                        u = sX[t],
                        m = [{
                            type: (0, A.NC)("Accumulators"),
                            items: _
                        }, {
                            type: (0, A.NC)("Options"),
                            items: d
                        }, {
                            type: (0, A.NC)("Multipliers"),
                            items: c
                        }],
                        x = e => u === (0, A.NC)("All") || u === e,
                        h = m.filter(e => {
                            let {
                                type: t
                            } = e;
                            return x(t)
                        }),
                        p = h.some(e => {
                            let {
                                items: t
                            } = e;
                            return t.length > 0
                        });
                    return i.length > 0 && p ? (0, l.jsx)("div", {
                        className: "strategy-template-picker__strategies",
                        children: h.map(e => {
                            let {
                                type: t,
                                items: a
                            } = e;
                            return (0, l.jsx)(s3, {
                                title: t,
                                items: a,
                                onSelectStrategy: n
                            }, t)
                        })
                    }) : (0, l.jsx)("div", {
                        className: "no-results",
                        children: (0, l.jsx)(K.Z, {
                            size: "xs",
                            children: (0, A.NC)("No results found")
                        })
                    })
                },
                s5 = (0, r.Pi)(e => {
                    let {
                        setCurrentStep: t,
                        setSelectedTradeType: a
                    } = e, {
                        dashboard: s,
                        quick_strategy: n
                    } = (0, p.oR)(), {
                        setActiveTabTutorial: r,
                        setActiveTab: o,
                        setFAQSearchValue: d,
                        filterTuotrialTab: c
                    } = s, {
                        setFormVisibility: _,
                        setSelectedStrategy: u
                    } = n, [m, x] = i.useState(0), [h, j] = i.useState(!1), [v, b] = i.useState(""), y = e => {
                        x(e)
                    };
                    return (0, l.jsxs)("div", {
                        className: "strategy-template-picker",
                        children: [(0, l.jsxs)("div", {
                            className: "strategy-template-picker__panel",
                            children: [(0, l.jsx)(sQ.U, {
                                onChange: e => {
                                    b(e.target.value), j(!0), d(e.target.value), c(e.target.value)
                                },
                                placeholder: (0, A.NC)("Search"),
                                type: "text",
                                value: v,
                                inputSize: "sm"
                            }), (0, l.jsx)("button", {
                                className: "strategy-template-picker__icon",
                                onClick: () => {
                                    o(eO.ve.TUTORIAL), r(2), _(!1), setTimeout(() => {
                                        let e = document.getElementById("id-tutorials");
                                        e && e.scrollIntoView({
                                            behavior: "smooth",
                                            block: "nearest"
                                        })
                                    }, 100)
                                },
                                children: (0, l.jsx)(sJ.Z, {
                                    iconSize: "sm"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "strategy-template-picker__chips",
                            children: sX.map((e, t) => (0, l.jsx)(s0.A.Selectable, {
                                onClick: () => y(t),
                                selected: t == m,
                                size: "sm",
                                label: e
                            }, t))
                        }), (0, l.jsx)(s8, {
                            selector_chip_value: m,
                            search_value: v,
                            is_searching: h,
                            onSelectStrategy: (e, s) => {
                                u(e), a(s), t(sz.StrategyVerified)
                            }
                        })]
                    })
                }),
                s7 = () => {
                    let {
                        client: e
                    } = (0, p.oR)(), {
                        currency: t,
                        balance: a,
                        is_logged_in: s
                    } = e, {
                        submitForm: n,
                        setFieldValue: l,
                        values: i,
                        isValid: r,
                        validateForm: o
                    } = (0, eI.u6)(), {
                        quick_strategy: d,
                        run_panel: c
                    } = (0, p.oR)(), {
                        toggleStopBotDialog: _,
                        setLossThresholdWarningData: u,
                        loss_threshold_warning_data: m,
                        onSubmit: x
                    } = d, h = async () => {
                        c.is_running ? (await l("action", "EDIT"), o(), n(), _()) : (await l("action", "RUN"), o(), n().then(e => {
                            r && e && x(e)
                        }))
                    };
                    return {
                        handleSubmit: async () => {
                            var e;
                            let n = Number((null == i ? void 0 : i.loss) ? ? 0),
                                l = Number((null == i ? void 0 : i.profit) ? ? 0),
                                r = JSON.parse((null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("qs-dont-show-loss-threshold-warning")) ? ? "false");
                            !m.already_shown && (n > .5 * Number(a ? ? 0) || n > 2 * l) && s && !r ? u({
                                show: !0,
                                loss_amount: n,
                                currency: t,
                                already_shown: !0
                            }) : h()
                        },
                        proceedFormSubmission: h
                    }
                },
                s2 = e => {
                    let {
                        selected_trade_type: t,
                        selected_startegy_label: a,
                        children: s
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "qs__selected-options",
                            children: [(0, l.jsxs)("div", {
                                className: "qs__selected-options__item",
                                children: [(0, l.jsx)(K.Z, {
                                    size: "xs",
                                    lineHeight: "s",
                                    children: (0, A.NC)("Trade type")
                                }), (0, l.jsx)(K.Z, {
                                    size: "xs",
                                    weight: "bold",
                                    lineHeight: "s",
                                    children: t
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "qs__selected-options__item",
                                children: [(0, l.jsx)(K.Z, {
                                    size: "xs",
                                    lineHeight: "s",
                                    children: (0, A.NC)("Strategy")
                                }), (0, l.jsx)(K.Z, {
                                    className: "qs__selected-options__item__description",
                                    weight: "bold",
                                    lineHeight: "s",
                                    children: a
                                })]
                            })]
                        }), (0, l.jsx)(sK, {
                            formfields: s,
                            active_tab: "TRADE_PARAMETERS"
                        })]
                    })
                },
                s4 = (0, r.Pi)(e => {
                    let {
                        children: t,
                        current_step: a,
                        setCurrentStep: s,
                        onClickClose: n,
                        selected_trade_type: r,
                        setSelectedTradeType: o
                    } = e, d = i.useRef(null), {
                        submitForm: c,
                        isValid: _,
                        setFieldValue: u,
                        validateForm: m,
                        values: x
                    } = (0, eI.u6)(), {
                        quick_strategy: h
                    } = (0, p.oR)(), {
                        selected_strategy: j,
                        onSubmit: v,
                        is_stop_bot_dialog_open: b
                    } = h, {
                        handleSubmit: y
                    } = s7(), g = (0, sZ.j)()[j].label, f = a === sz.StrategySelect;
                    i.useEffect(() => {
                        _ && a === sz.StrategyVerified && s(sz.StrategyCompleted), !_ && a === sz.StrategyCompleted && s(sz.StrategyVerified)
                    }, [_, a]), i.useEffect(() => {
                        m()
                    }, [j, m]);
                    let C = async () => {
                            await u("action", "EDIT"), m(), c().then(e => {
                                _ && e && (sU({
                                    form_values: x,
                                    selected_strategy: j
                                }), v(e))
                            })
                        },
                        w = () => {
                            y()
                        },
                        k = i.useCallback(() => {
                            switch (a) {
                                case sz.StrategySelect:
                                    return (0, l.jsx)(s5, {
                                        setCurrentStep: s,
                                        setSelectedTradeType: o
                                    });
                                case sz.StrategyVerified:
                                case sz.StrategyCompleted:
                                    return (0, l.jsx)(s2, {
                                        selected_trade_type: r,
                                        selected_startegy_label: g,
                                        children: t
                                    });
                                default:
                                    return null
                            }
                        }, [a, r, g, t, s, o]);
                    return !b && (0, l.jsxs)("div", {
                        className: "qs",
                        children: [(0, l.jsxs)("div", {
                            className: "qs__head",
                            children: [(0, l.jsx)("div", {
                                className: "qs__head__title",
                                children: (0, l.jsx)(K.Z, {
                                    weight: "bold",
                                    children: (0, A.NC)("Quick Strategy")
                                })
                            }), (0, l.jsx)("div", {
                                className: "qs__head__action",
                                children: (0, l.jsx)("span", {
                                    "data-testid": "qs-desktop-close-button",
                                    onClick: n,
                                    tabIndex: 0,
                                    onKeyDown: e => {
                                        "Enter" === e.key && n()
                                    },
                                    children: (0, l.jsx)(N.Z, {
                                        height: "20px",
                                        width: "20px"
                                    })
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "qs__body",
                            children: [(0, l.jsxs)("div", {
                                className: "qs__body__sidebar",
                                children: [(0, l.jsx)("div", {
                                    className: "qs__body__sidebar__subtitle",
                                    children: (0, l.jsx)(K.Z, {
                                        size: "xs",
                                        children: (0, A.NC)("Choose a template below and set your trade parameters.")
                                    })
                                }), (0, l.jsx)(s$, {
                                    current_step: a
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "qs__body__content",
                                children: [(0, l.jsx)(ea.Z, {
                                    className: "qs__form__container qs__form__container--footer",
                                    autohide: !1,
                                    refSetter: d,
                                    children: k()
                                }), !f && (0, l.jsxs)("div", {
                                    className: "qs__body__content__footer",
                                    children: [(0, l.jsx)(ek.Z, {
                                        transparent: !0,
                                        classNameSpan: "qs__body__content__footer--back",
                                        disabled: f,
                                        onClick: () => {
                                            s(sz.StrategySelect)
                                        },
                                        children: (0, A.NC)("Back")
                                    }), (0, l.jsx)(ek.Z, {
                                        secondary: !0,
                                        disabled: !_,
                                        onClick: C,
                                        children: (0, A.NC)("Load")
                                    }), (0, l.jsx)(ek.Z, {
                                        "data-testid": "qs-run-button",
                                        primary: !0,
                                        onClick: e => {
                                            e.preventDefault(), w()
                                        },
                                        disabled: !_,
                                        children: (0, A.NC)("Run")
                                    })]
                                })]
                            })]
                        })]
                    })
                }),
                s9 = i.memo(s4),
                s6 = (0, r.Pi)(e => {
                    let {
                        children: t,
                        current_step: a,
                        selected_trade_type: s,
                        setCurrentStep: n,
                        setSelectedTradeType: r
                    } = e, {
                        isValid: o,
                        validateForm: d
                    } = (0, eI.u6)(), {
                        quick_strategy: c
                    } = (0, p.oR)(), {
                        selected_strategy: _
                    } = c, u = (0, sZ.j)()[_].label, m = a === sz.StrategyVerified || a === sz.StrategyCompleted, x = a === sz.StrategySelect;
                    return i.useEffect(() => {
                        d()
                    }, [_, d]), i.useEffect(() => {
                        o && a === sz.StrategyVerified && n(sz.StrategyCompleted), !o && a === sz.StrategyCompleted && n(sz.StrategyVerified)
                    }, [o, a]), (0, l.jsx)("div", {
                        className: "qs",
                        children: (0, l.jsx)("div", {
                            className: "qs__body",
                            children: (0, l.jsx)("div", {
                                className: "qs__body__content",
                                children: (0, l.jsxs)(ea.Z, {
                                    className: R()("qs__form__container qs__form__container--footer", {
                                        "qs__form__container--template": x
                                    }),
                                    autohide: !1,
                                    children: [(0, l.jsx)(s$, {
                                        setCurrentStep: n,
                                        current_step: a,
                                        isValid: o,
                                        is_mobile: !0
                                    }), x && (0, l.jsx)(s5, {
                                        setSelectedTradeType: r,
                                        setCurrentStep: n
                                    }), m && (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsxs)("div", {
                                            className: "qs__selected-options",
                                            children: [(0, l.jsxs)("div", {
                                                className: "qs__selected-options__item",
                                                children: [(0, l.jsx)(K.Z, {
                                                    size: "xs",
                                                    children: (0, A.NC)("Trade type")
                                                }), (0, l.jsx)(K.Z, {
                                                    size: "xs",
                                                    weight: "bold",
                                                    children: s
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "qs__selected-options__item",
                                                children: [(0, l.jsx)(K.Z, {
                                                    size: "xs",
                                                    children: (0, A.NC)("Strategy")
                                                }), (0, l.jsx)(K.Z, {
                                                    className: "qs__selected-options__item__description",
                                                    size: "xs",
                                                    weight: "bold",
                                                    children: u
                                                })]
                                            })]
                                        }), (0, l.jsx)(sK, {
                                            formfields: t,
                                            active_tab: "TRADE_PARAMETERS"
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                }),
                ne = (0, r.Pi)(e => {
                    let {
                        current_step: t,
                        setCurrentStep: a
                    } = e, {
                        quick_strategy: s
                    } = (0, p.oR)(), {
                        selected_strategy: n
                    } = s, {
                        isValid: i,
                        values: r
                    } = (0, eI.u6)(), {
                        handleSubmit: o
                    } = s7(), d = t === sz.StrategyVerified || t === sz.StrategyCompleted, c = t === sz.StrategySelect, _ = () => {
                        sL({
                            form_values: r,
                            selected_strategy: n
                        }), o()
                    };
                    return (0, l.jsx)(l.Fragment, {
                        children: d && (0, l.jsxs)("div", {
                            className: "qs__body__content__footer",
                            children: [(0, l.jsx)(ek.Z, {
                                secondary: !0,
                                disabled: c,
                                onClick: () => {
                                    a(sz.StrategySelect)
                                },
                                children: (0, A.NC)("Back")
                            }), (0, l.jsx)(ek.Z, {
                                primary: !0,
                                "data-testid": "qs-run-button",
                                type: "submit",
                                onClick: e => {
                                    e.preventDefault(), _()
                                },
                                disabled: !i,
                                children: (0, A.NC)("Run")
                            })]
                        })
                    })
                }),
                nt = "loss-threshold-warning-dialog",
                na = (0, r.Pi)(() => {
                    let {
                        quick_strategy: e
                    } = (0, p.oR)(), {
                        loss_threshold_warning_data: t,
                        setLossThresholdWarningData: a,
                        initializeLossThresholdWarningData: s
                    } = e, {
                        proceedFormSubmission: n
                    } = s7();
                    return (0, l.jsxs)(aB.Z, {
                        portal_element_id: "modal_root",
                        title: (0, A.NC)("Are you sure you want to continue?"),
                        is_visible: t.show,
                        confirm_button_text: (0, A.NC)("Yes, continue"),
                        onConfirm: () => {
                            s(), n()
                        },
                        cancel_button_text: (0, A.NC)("Edit the amount"),
                        onCancel: () => {
                            a({
                                show: !1,
                                highlight_field: ["loss"]
                            })
                        },
                        is_mobile_full_width: !1,
                        has_close_icon: !1,
                        className: nt,
                        children: [(0, l.jsx)("div", {
                            className: `${nt}__body-text`,
                            children: (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Please confirm that your loss threshold amount is {{loss_amount}} {{currency}}.",
                                values: {
                                    loss_amount: null == t ? void 0 : t.loss_amount,
                                    currency: null == t ? void 0 : t.currency
                                }
                            })
                        }), (0, l.jsx)(eh, {
                            defaultChecked: !1,
                            label: (0, A.NC)("Do not show this message again."),
                            onChange: () => {
                                var e, t;
                                let a = JSON.parse((null === (e = localStorage) || void 0 === e ? void 0 : e.getItem("qs-dont-show-loss-threshold-warning")) ? ? "false");
                                null === (t = localStorage) || void 0 === t || t.setItem("qs-dont-show-loss-threshold-warning", `${!a}`)
                            }
                        })]
                    })
                });
            var ns = a("67026"),
                nn = a("63069");
            let nl = e => {
                    let {
                        parent_rect: t,
                        child_height: a = 0
                    } = e;
                    return ((null == t ? void 0 : t.top) || 0) + ((null == t ? void 0 : t.height) || 0) + a
                },
                ni = e => {
                    let {
                        parent_rect: t,
                        child_height: a = 0
                    } = e;
                    return Number(null == t ? void 0 : t.top) - a
                },
                nr = e => {
                    let {
                        preferred_alignment: t = "bottom",
                        child_el: a,
                        parent_el: s,
                        should_consider_parent_height: n = !0
                    } = e, l = null == s ? void 0 : s.getBoundingClientRect(), i = null == a ? void 0 : a.clientHeight, r = document.body.getBoundingClientRect(), {
                        top: o,
                        bottom: d,
                        left: c,
                        width: _
                    } = l || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0
                    }, u = nl({
                        parent_rect: l,
                        child_height: i
                    }), m = {
                        bottom: r.bottom - (n ? o : d) + 8,
                        insetInlineStart: c,
                        width: _,
                        transformOrigin: "bottom"
                    }, x = {
                        top: n ? d : o,
                        insetInlineStart: c,
                        width: _,
                        transformOrigin: "top"
                    };
                    if ("bottom" === t && u <= r.height) return {
                        style: x,
                        placement: "bottom"
                    };
                    let h = ni({
                        parent_rect: l,
                        child_height: i
                    });
                    return "top" === t && h >= 0 ? {
                        style: m,
                        placement: "top"
                    } : u - r.height < 0 - h ? {
                        style: x,
                        placement: "bottom"
                    } : {
                        style: m,
                        placement: "top"
                    }
                };
            var no = a("46677");
            let nd = e => {
                i.useEffect(() => {
                    if (!e) return;
                    let t = e => e ? e.classList.contains("dc-themed-scrollbars") && e.scrollHeight > e.clientHeight ? e : t(e.parentElement) : null,
                        a = t(e.current),
                        s = navigator.userAgent.indexOf("Firefox") > -1;
                    return a && (a.style.overflow = "hidden", a.style.width = s ? "100%" : "calc(100% - 5px)"), () => {
                        a && (a.style.removeProperty("overflow"), a.style.removeProperty("width"))
                    }
                }, [e])
            };
            var nc = a("33716"),
                n_ = a("40150");
            let nu = e => {
                    let {
                        is_active: t,
                        is_disabled: a,
                        index: s,
                        item: n,
                        child_ref: i,
                        onItemSelection: r,
                        setActiveIndex: o
                    } = e;
                    return (0, l.jsx)("div", {
                        ref: i,
                        onMouseDown: e => {
                            e.stopPropagation(), r(n), o(s)
                        },
                        className: R()("dc-dropdown-list__item", {
                            "dc-dropdown-list__item--active": t,
                            "dc-dropdown-list__item--disabled": a
                        }),
                        children: "object" == typeof n ? n.component || n.text : n
                    })
                },
                nm = i.forwardRef((e, t) => {
                    let {
                        active_index: a,
                        list_items: s,
                        is_object_list: n,
                        onItemSelection: r,
                        setActiveIndex: o,
                        not_found_text: d
                    } = e;
                    if (null == s ? void 0 : s.some(e => "object" == typeof e && !!e.group)) {
                        let e = {};
                        s.forEach(t => {
                            let a = "object" == typeof t && t.group || "?";
                            !e[a] && (e[a] = []), e[a].push(t)
                        });
                        let d = Object.keys(e),
                            c = -1;
                        return (0, l.jsx)(l.Fragment, {
                            children: d.map((s, _) => {
                                let u = e[s],
                                    m = !!d[_ + 1];
                                return (0, l.jsxs)(i.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "dc-dropdown-list__group-header",
                                        children: s
                                    }), u.map(e => (c++, (0, l.jsx)(nu, {
                                        item: e,
                                        index: c,
                                        is_active: c === a,
                                        onItemSelection: r,
                                        setActiveIndex: o,
                                        is_object_list: n,
                                        is_disabled: "object" == typeof e && "DISABLED" === e.disabled,
                                        child_ref: c === a ? t : null
                                    }, c))), m && (0, l.jsx)("div", {
                                        className: "dc-dropdown-list__separator"
                                    })]
                                }, `group${_}`)
                            })
                        })
                    }
                    return (0, l.jsx)(l.Fragment, {
                        children: (null == s ? void 0 : s.length) ? s.map((e, s) => (0, l.jsx)(nu, {
                            item: e,
                            index: s,
                            is_active: s === a,
                            onItemSelection: r,
                            is_object_list: n,
                            setActiveIndex: o,
                            child_ref: s === a ? t : null
                        }, s)) : (0, l.jsx)("div", {
                            className: "dc-dropdown-list__item dc-dropdown-list__item--not-found",
                            children: d
                        })
                    })
                });
            nm.displayName = "ListItems";
            let nx = e => {
                let {
                    dropdown_ref: t,
                    list_item_ref: a,
                    list_wrapper_ref: s
                } = e.dropdown_refs || {}, {
                    active_index: n,
                    is_visible: i,
                    list_items: r,
                    list_height: o,
                    onScrollStop: d,
                    onItemSelection: c,
                    setActiveIndex: _,
                    style: u,
                    not_found_text: m,
                    portal_id: x
                } = e;
                if ((null == r ? void 0 : r.length) && "string" != typeof r[0] && "object" != typeof r[0]) throw Error("Dropdown received wrong data structure");
                let h = !Array.isArray(r) && "object" == typeof r,
                    p = (null == r ? void 0 : r.length) && "string" == typeof r[0],
                    j = (0, l.jsx)(ef.Z, {
                        appear: i,
                        in: i,
                        timeout: 100,
                        classNames: {
                            enter: "dc-dropdown-list--enter",
                            enterDone: "dc-dropdown-list--enter-done",
                            exit: "dc-dropdown-list--exit"
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)("div", {
                            style: u,
                            className: "dc-dropdown-list",
                            ref: s,
                            children: (0, l.jsx)(n_.Z, {
                                height: o || "220px",
                                refSetter: t,
                                onScroll: d,
                                children: h ? Object.keys(r).map((e, t) => (0, l.jsx)(nm, {
                                    not_found_text: m,
                                    active_index: n,
                                    list_items: r[e],
                                    ref: a,
                                    onItemSelection: c,
                                    setActiveIndex: _
                                }, t)) : (0, l.jsx)(nm, {
                                    not_found_text: m,
                                    active_index: n,
                                    list_items: r,
                                    ref: a,
                                    onItemSelection: c,
                                    is_object_list: !p,
                                    setActiveIndex: _
                                })
                            })
                        })
                    });
                if (x) {
                    let e = document.getElementById(x);
                    return e && eV.createPortal(j, e)
                }
                return j
            };
            nx.displayName = "DropdownList";
            let nh = {
                    ENTER: 13,
                    ESCAPE: 27,
                    TAB: 9,
                    KEYDOWN: 40,
                    KEYUP: 38
                },
                np = e => "string" == typeof e,
                nj = function(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        s = e.toLowerCase();
                    return t.filter(e => (np(e) ? e.toLowerCase() : (e.text || "").toLowerCase()).includes(s)).sort((e, t) => {
                        let a = (np(e) ? e : e.text || "").toLowerCase().indexOf(s);
                        return a - (np(t) ? t : t.text || "").toLowerCase().indexOf(s)
                    }).filter(t => {
                        let s = np(t) ? t : t.text || "",
                            n = s.toLowerCase(),
                            l = (0, no._v)(n);
                        return a ? (0, no.pp)(s, e) : l.includes(e) || n.includes(e)
                    })
                },
                nv = i.memo(e => {
                    let t;
                    let a = (0, nn.Re)(),
                        {
                            autoComplete: s,
                            className: n,
                            data_testid: r,
                            dropdown_offset: o,
                            error: d,
                            has_updating_list: c = !0,
                            hide_list: _ = !1,
                            historyValue: u,
                            input_id: m,
                            is_alignment_top: x,
                            is_list_visible: h = !1,
                            list_items: p,
                            list_portal_id: j,
                            not_found_text: v = a,
                            onHideDropdownList: b,
                            onItemSelection: y,
                            onSearch: g,
                            onScrollStop: f,
                            onShowDropdownList: N,
                            should_filter_by_char: C,
                            show_list: w = !1,
                            value: k,
                            ...T
                        } = e,
                        E = i.useRef(null),
                        S = i.useRef(null),
                        A = i.useRef(null),
                        I = i.useRef(null),
                        [M, O] = i.useState(!1),
                        [D, L] = i.useState(""),
                        [U, Z] = i.useState(-1),
                        [B, F] = i.useState(p),
                        [z, P] = i.useState({});
                    nd(j && M ? I : void 0);
                    let X = null;
                    i.useEffect(() => {
                        if (c) {
                            let e = [];
                            if (F(e = h ? "function" == typeof g ? g(k.toLowerCase(), p) : nj(k.toLowerCase(), p) : p), u) {
                                let t = e.findIndex(e => ("object" == typeof e ? e.text : e) === u);
                                L(u), Z(t)
                            } else L(""), Z(-1)
                        }
                    }, [p, c, u]), i.useEffect(() => {
                        h && Z(B.findIndex(e => ("object" == typeof e ? e.text : e) === u))
                    }, [B]), i.useEffect(() => {
                        if (w && q(), _ && Y(), M && A.current) {
                            var e;
                            let t = A.current.offsetTop;
                            null === (e = E.current) || void 0 === e || e.scrollTo({
                                top: t,
                                behavior: "smooth"
                            })
                        }
                    }, [w, _, M, A]), i.useEffect(() => {
                        S.current && j && M && P(nr({
                            preferred_alignment: x ? "top" : "bottom",
                            parent_el: I.current,
                            child_el: S.current
                        }).style)
                    }, [M, x, j, null == B ? void 0 : B.length]);
                    let H = () => {
                            if (-1 !== U) {
                                var e, t, a, s, n, l, i;
                                let r = U - 1;
                                if (r < 0) {
                                    let a = null === (e = E.current) || void 0 === e ? void 0 : e.clientHeight;
                                    Z(B.length - 1), null === (t = E.current) || void 0 === t || t.scrollTo({
                                        top: a,
                                        behavior: "smooth"
                                    })
                                } else {
                                    let e = Number(null === (a = A.current) || void 0 === a ? void 0 : a.getBoundingClientRect().height);
                                    if (!$(Math.floor(Number(null === (n = A.current) || void 0 === n ? void 0 : null === (s = n.getBoundingClientRect()) || void 0 === s ? void 0 : s.top)) - e)) {
                                        let t = Number(null === (l = A.current) || void 0 === l ? void 0 : l.offsetTop) - e;
                                        null === (i = E.current) || void 0 === i || i.scrollTo({
                                            top: t,
                                            behavior: "smooth"
                                        })
                                    }
                                    Z(r)
                                }
                            }
                        },
                        $ = e => {
                            var t, a, s;
                            let n = Number(null === (t = E.current) || void 0 === t ? void 0 : t.clientHeight),
                                l = Math.floor(Number(null === (a = S.current) || void 0 === a ? void 0 : a.getBoundingClientRect().top));
                            return !(e >= Math.floor(Number(null === (s = S.current) || void 0 === s ? void 0 : s.getBoundingClientRect().top)) + n) && e > l
                        },
                        V = () => {
                            if (-1 !== U && A.current) {
                                if ("number" == typeof U) {
                                    var e, t, a, s;
                                    let n = U + 1;
                                    if (n >= B.length) Z(0), null === (e = E.current) || void 0 === e || e.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                    else {
                                        let e = A.current.getBoundingClientRect().height,
                                            l = Math.floor(A.current.getBoundingClientRect().top) + e + e / 2,
                                            i = Number(null === (t = E.current) || void 0 === t ? void 0 : t.clientHeight);
                                        if (!$(l)) {
                                            let t = A.current.offsetTop - (i / e - 2) * e;
                                            null === (s = E.current) || void 0 === s || null === (a = s.scrollTo) || void 0 === a || a.call(s, {
                                                top: t,
                                                behavior: "smooth"
                                            })
                                        }
                                        Z(n)
                                    }
                                }
                            } else Z(0)
                        },
                        G = e => {
                            e && (L(("object" == typeof e ? e.text : e) || ""), null == y || y(e))
                        },
                        q = () => {
                            O(!0), null == N || N()
                        },
                        Y = () => {
                            O(!1), null == b || b()
                        };
                    return (0, l.jsxs)("div", {
                        "data-testid": r,
                        className: R()("dc-autocomplete", n),
                        children: [(0, l.jsx)("div", {
                            ref: I,
                            className: "dc-autocomplete__input-field",
                            children: (0, l.jsx)(eX, { ...T,
                                className: "dc-autocomplete__field",
                                error: d,
                                autoComplete: s,
                                onKeyDown: e => {
                                    switch (e.keyCode) {
                                        case nh.ENTER:
                                            e.preventDefault(), Y(), G(B[U]);
                                            break;
                                        case nh.TAB:
                                            M && (Y(), G(B[U]));
                                            break;
                                        case nh.ESCAPE:
                                            e.preventDefault(), Y();
                                            break;
                                        case nh.KEYDOWN:
                                            !M && q(), V();
                                            break;
                                        case nh.KEYUP:
                                            M ? H() : q();
                                            break;
                                        default:
                                            !M && q()
                                    }
                                },
                                onInput: e => {
                                    let t = e.target.value.toLowerCase(),
                                        a = [];
                                    !(a = "function" == typeof g ? g(t, p) : nj(t, p, C)).length && L(""), F(a)
                                },
                                input_id: m,
                                onClick: () => {
                                    M ? Y() : q()
                                },
                                onBlur: e => {
                                    e.preventDefault(), Y(), !h && F(p), "" === D && (null == y || y({
                                        text: v,
                                        value: ""
                                    })), "function" == typeof T.onBlur && T.onBlur(e)
                                },
                                value: "function" == typeof y ? k : D,
                                trailing_icon: T.trailing_icon ? T.trailing_icon : (0, l.jsx)(nc.Z, {
                                    className: (0, ns.Z)("dc-autocomplete__trailing-icon", {
                                        "dc-autocomplete__trailing-icon--opened": M,
                                        "dc-autocomplete__trailing-icon--disabled": T.disabled
                                    }),
                                    height: "24px",
                                    width: "24px"
                                })
                            })
                        }), (0, l.jsx)(nx, {
                            dropdown_refs: {
                                dropdown_ref: E,
                                list_item_ref: A,
                                list_wrapper_ref: S
                            },
                            active_index: U,
                            style: {
                                width: I.current ? `${I.current.offsetWidth}px` : "100%",
                                ...z || {
                                    marginTop: o ? `calc(-${o} + 8px)` : "8px"
                                }
                            },
                            is_visible: M || h,
                            list_items: B,
                            list_height: T.list_height,
                            onItemSelection: G,
                            setActiveIndex: Z,
                            onScrollStop: e => {
                                if (!f) return;
                                let a = e.currentTarget;
                                (X = a.scrollTop) === a.scrollTop && clearTimeout(t), t = setTimeout(() => {
                                    null == f || f()
                                }, 150)
                            },
                            not_found_text: v,
                            portal_id: j
                        })]
                    })
                });
            nv.displayName = "Autocomplete";
            let nb = ["ACCUMULATORS_MARTINGALE", "ACCUMULATORS_DALEMBERT", "ACCUMULATORS_MARTINGALE_ON_STAT_RESET", "ACCUMULATORS_DALEMBERT_ON_STAT_RESET", "ACCUMULATORS_REVERSE_MARTINGALE", "ACCUMULATORS_REVERSE_MARTINGALE_ON_STAT_RESET", "ACCUMULATORS_REVERSE_DALEMBERT", "ACCUMULATORS_REVERSE_DALEMBERT_ON_STAT_RESET"],
                ny = e => {
                    let {
                        symbol: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "qs__select__option",
                        children: [(0, l.jsx)(Z, {
                            type: t.value,
                            size: "sm"
                        }), (0, l.jsx)(K.Z, {
                            className: "qs__select__option__text",
                            size: "xs",
                            color: "prominent",
                            children: t.text
                        })]
                    }, t.value)
                },
                ng = () => {
                    let {
                        quick_strategy: e
                    } = (0, p.oR)(), {
                        isDesktop: t
                    } = (0, v.F)(), {
                        setValue: a,
                        selected_strategy: s
                    } = e, [n, r] = i.useState([]), [o, d] = (0, i.useState)(!1), [c, _] = (0, i.useState)({
                        text: "",
                        value: ""
                    }), [u, m] = (0, i.useState)({
                        text: "",
                        value: ""
                    }), {
                        setFieldValue: x,
                        values: h
                    } = (0, eI.u6)(), j = nb.includes(s), b = (0, i.useMemo)(() => n.map(e => ({
                        component: (0, l.jsx)(ny, {
                            symbol: e
                        }, e.text),
                        ...e
                    })).filter(e => {
                        var t;
                        return !j || (null == e ? void 0 : null === (t = e.group) || void 0 === t ? void 0 : t.startsWith("Continuous Indices"))
                    }), [n, j]);
                    (0, i.useEffect)(() => {
                        var e, t, s;
                        let {
                            active_symbols: n
                        } = (null === D.ApiHelpers || void 0 === D.ApiHelpers ? void 0 : D.ApiHelpers.instance) ? ? {}, l = null == n ? void 0 : null === (e = n.getSymbolsForBot) || void 0 === e ? void 0 : e.call(n);
                        r(l), !(null == l ? void 0 : l.find(e => (null == e ? void 0 : e.value) === (null == h ? void 0 : h.symbol))) && (x("symbol", null == l ? void 0 : null === (t = l[0]) || void 0 === t ? void 0 : t.value), a("symbol", null == l ? void 0 : null === (s = l[0]) || void 0 === s ? void 0 : s.value))
                    }, []), (0, i.useEffect)(() => {
                        let e = b.find(e => e.value === h.symbol);
                        e && _({
                            text: e.text,
                            value: e.value
                        })
                    }, [b, h.symbol, _]);
                    let y = () => {
                            t && !o && d(!0)
                        },
                        g = e => {
                            _({ ...c,
                                text: e.target.value
                            })
                        },
                        f = e => {
                            if (null == e ? void 0 : e.value) {
                                let {
                                    value: t
                                } = e;
                                x("symbol", t), a("symbol", t), d(!1)
                            }
                        },
                        N = () => {
                            if (t) {
                                let e = b.find(e => e.value === h.symbol);
                                e && e.text !== c.text && (_({
                                    text: e.text,
                                    value: e.value
                                }), m({
                                    text: e.text,
                                    value: e.value
                                }), d(!1)), !e && (_({
                                    text: u.text,
                                    value: u.value
                                }), d(!1))
                            }
                        };
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input",
                        children: (0, l.jsx)(eI.gN, {
                            name: "symbol",
                            id: "asset",
                            children: e => {
                                let {
                                    field: { ...a
                                    }
                                } = e;
                                return (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)(nv, { ...a,
                                        readOnly: !t,
                                        inputMode: "none",
                                        "data-testid": "dt_qs_symbol",
                                        autoComplete: "off",
                                        className: "qs__autocomplete",
                                        value: c.text,
                                        list_items: b,
                                        onItemSelection: f,
                                        onChange: g,
                                        onFocus: y,
                                        onHideDropdownList: N,
                                        leading_icon: (0, l.jsx)(Z, {
                                            type: c.value,
                                            size: "sm"
                                        })
                                    })
                                })
                            }
                        }, "asset")
                    })
                },
                nf = e => {
                    let {
                        trade_type: {
                            value: t,
                            icon: a,
                            text: s
                        }
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "qs__select__option",
                        children: [(null == a ? void 0 : a.length) ? a.map((e, t) => (0, l.jsx)(z, {
                            type: e,
                            className: "qs__select__option__icon",
                            size: "sm"
                        }, `${e}id-${t}`)) : null, (0, l.jsx)(K.Z, {
                            className: "qs__select__option__text",
                            size: "xs",
                            color: "prominent",
                            children: s
                        })]
                    }, t)
                },
                nN = () => {
                    let [e, t] = i.useState([]), {
                        setFieldValue: a,
                        values: s,
                        validateForm: n
                    } = (0, eI.u6)(), {
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        setValue: o,
                        selected_strategy: d
                    } = r, c = nb.includes(d);
                    i.useEffect(() => {
                        if (null == s ? void 0 : s.symbol) {
                            let e = null == s ? void 0 : s.tradetype,
                                l = c ? "ACCU" : "",
                                {
                                    contracts_for: i
                                } = (null === D.ApiHelpers || void 0 === D.ApiHelpers ? void 0 : D.ApiHelpers.instance) ? ? {};
                            (async () => {
                                var n, r;
                                let d = await (null == i ? void 0 : null === (n = i.getTradeTypesForQuickStrategy) || void 0 === n ? void 0 : n.call(i, null == s ? void 0 : s.symbol, l));
                                !(null == d ? void 0 : d.some(t => t.value === e)) && (null == d ? void 0 : null === (r = d[0]) || void 0 === r ? void 0 : r.value) !== e && (null == a || a("tradetype", (null == d ? void 0 : d[0].value) || ""), o("tradetype", null == d ? void 0 : d[0].value)), t(d)
                            })(), n()
                        }
                    }, [null == s ? void 0 : s.symbol]);
                    let _ = i.useMemo(() => e.map(e => ({
                        component: (0, l.jsx)(nf, {
                            trade_type: e
                        }, e.text),
                        ...e
                    })), [e]);
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input qs__form__field__group-icons",
                        children: (0, l.jsx)(eI.gN, {
                            name: "tradetype",
                            id: "tradetype",
                            children: e => {
                                var t, s;
                                let {
                                    field: n
                                } = e, i = null == _ ? void 0 : _.find(e => e.value === n.value), r = c ? "Buy" : null == i ? void 0 : i.text;
                                return (0, l.jsx)(nv, { ...n,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_tradetype",
                                    autoComplete: "off",
                                    className: "qs__autocomplete",
                                    value: r || "",
                                    list_items: _,
                                    onItemSelection: e => {
                                        let t = null == e ? void 0 : e.value,
                                            s = null == e ? void 0 : e.text;
                                        t && s && (null == a || a("tradetype", t), o("tradetype", t))
                                    },
                                    leading_icon: (0, l.jsxs)(K.Z, {
                                        children: [(0, l.jsx)(z, {
                                            type: (null == i ? void 0 : null === (t = i.icon) || void 0 === t ? void 0 : t[0]) || "CALL",
                                            size: "sm"
                                        }), (0, l.jsx)(z, {
                                            type: (null == i ? void 0 : null === (s = i.icon) || void 0 === s ? void 0 : s[1]) || "PUT",
                                            size: "sm"
                                        })]
                                    })
                                })
                            }
                        }, "tradetype")
                    })
                },
                nC = (0, r.Pi)(e => {
                    let {
                        name: t
                    } = e, {
                        isDesktop: a
                    } = (0, v.F)(), [s, n] = i.useState([]), {
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        setValue: o
                    } = r, {
                        setFieldValue: d,
                        values: c
                    } = (0, eI.u6)(), {
                        symbol: _,
                        tradetype: u
                    } = c;
                    i.useEffect(() => {
                        if (u && _) {
                            let e = null == c ? void 0 : c.type;
                            (async () => {
                                var a, s, l;
                                let {
                                    contracts_for: i
                                } = (null === D.ApiHelpers || void 0 === D.ApiHelpers ? void 0 : D.ApiHelpers.instance) ? ? {}, r = await (null == i ? void 0 : null === (a = i.getContractTypes) || void 0 === a ? void 0 : a.call(i, u));
                                n(r), !(null == r ? void 0 : r.some(t => t.value === e)) && (null == d || d(t, null == r ? void 0 : null === (s = r[0]) || void 0 === s ? void 0 : s.value), o(t, null == r ? void 0 : null === (l = r[0]) || void 0 === l ? void 0 : l.value))
                            })()
                        }
                    }, [_, u]);
                    let m = e => {
                            null == d || d(t, e), o(t, e)
                        },
                        x = `qs-contract-type-${t}`;
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input no-top-spacing",
                        children: (0, l.jsx)(eI.gN, {
                            name: t,
                            id: x,
                            children: e => {
                                let {
                                    field: t
                                } = e, n = null == s ? void 0 : s.find(e => (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value));
                                return a ? (0, l.jsx)(nv, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_contract_type",
                                    autoComplete: "off",
                                    className: "qs__select contract-type",
                                    value: (null == n ? void 0 : n.text) || "",
                                    list_items: s,
                                    onItemSelection: e => {
                                        let {
                                            value: t
                                        } = e;
                                        t && m(t)
                                    }
                                }) : (0, l.jsx)("ul", {
                                    className: "qs__form__field__list",
                                    "data-testid": "dt_qs_contract_types",
                                    children: s.map(e => {
                                        let t = (null == n ? void 0 : n.value) === (null == e ? void 0 : e.value);
                                        return (0, l.jsx)("li", {
                                            className: R()("qs__form__field__list__item", {
                                                "qs__form__field__list__item--active": t
                                            }),
                                            onClick: () => {
                                                m(null == e ? void 0 : e.value)
                                            },
                                            children: (0, l.jsx)(K.Z, {
                                                size: "xs",
                                                color: "prominent",
                                                weight: t ? "bold " : "normal",
                                                children: null == e ? void 0 : e.text
                                            })
                                        }, null == e ? void 0 : e.value)
                                    })
                                })
                            }
                        }, x)
                    })
                }),
                nw = e => {
                    let {
                        attached: t
                    } = e, [a, s] = i.useState([]), [n, r] = i.useState(""), [o, d] = i.useState(""), {
                        quick_strategy: c
                    } = (0, p.oR)(), {
                        setValue: _,
                        setCurrentDurationMinMax: u,
                        current_duration_min_max: m
                    } = c, {
                        setFieldValue: x,
                        validateForm: h,
                        values: j
                    } = (0, eI.u6)(), {
                        symbol: v,
                        tradetype: b
                    } = j;
                    return i.useEffect(() => {
                        b && v && (async () => {
                            var e, t, a, l, i, c;
                            let {
                                contracts_for: m
                            } = (null === D.ApiHelpers || void 0 === D.ApiHelpers ? void 0 : D.ApiHelpers.instance) ? ? {}, h = await (null == m ? void 0 : null === (e = m.getDurations) || void 0 === e ? void 0 : e.call(m, v, b)), p = null == h ? void 0 : h.map(e => ({
                                text: e.display ? ? "",
                                value: e.unit ? ? "",
                                min: e.min,
                                max: e.max
                            }));
                            s(p);
                            let y = null == j ? void 0 : j.durationtype;
                            if ((null == p ? void 0 : p.some(e => e.value === y)) && n === v && o === b) {
                                let e = null == p ? void 0 : p.find(e => e.value === y);
                                u(null == e ? void 0 : e.min, null == e ? void 0 : e.max)
                            } else u(null == h ? void 0 : null === (t = h[0]) || void 0 === t ? void 0 : t.min, null == h ? void 0 : null === (a = h[0]) || void 0 === a ? void 0 : a.max), null == x || x("durationtype", null == h ? void 0 : null === (l = h[0]) || void 0 === l ? void 0 : l.unit, !0), null == x || x("duration", null == h ? void 0 : null === (i = h[0]) || void 0 === i ? void 0 : i.min, !0), _("durationtype", (null == h ? void 0 : null === (c = h[0]) || void 0 === c ? void 0 : c.unit) ? ? "");
                            r(v), d(b)
                        })()
                    }, [v, b]), (0, i.useEffect)(() => {
                        h()
                    }, [m, h]), (0, l.jsx)("div", {
                        className: R()("qs__form__field qs__form__field__input", {
                            "no-top-border-radius": t
                        }),
                        children: (0, l.jsx)(eI.gN, {
                            name: "durationtype",
                            id: "durationtype",
                            children: e => {
                                let {
                                    field: t
                                } = e, s = null == a ? void 0 : a.find(e => e.value === t.value);
                                return (0, l.jsx)(nv, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_durationtype",
                                    autoComplete: "off",
                                    className: "qs__select",
                                    value: (null == s ? void 0 : s.text) || "",
                                    list_items: a,
                                    onItemSelection: e => {
                                        let {
                                            value: t,
                                            min: a,
                                            max: s
                                        } = e;
                                        t && (u(a, s), null == x || x("durationtype", t), _("durationtype", t), null == x || x("duration", a).then(() => {
                                            h()
                                        }), _("duration", a))
                                    }
                                })
                            }
                        }, "durationtype")
                    })
                },
                nk = (0, r.Pi)(e => {
                    let {
                        name: t,
                        onChange: a,
                        type: s = "text",
                        attached: n = !1,
                        disabled: r = !1,
                        min: o,
                        max: d,
                        has_currency_unit: c = !1
                    } = e, {
                        client: {
                            currency: _
                        }
                    } = (0, p.oR)(), {
                        quick_strategy: u
                    } = (0, p.oR)(), {
                        loss_threshold_warning_data: m
                    } = u, [, x] = i.useState(!1), [h, j] = i.useState(null), {
                        setFieldValue: v,
                        setFieldTouched: b,
                        values: y
                    } = (0, eI.u6)(), g = "number" === s;
                    (0, i.useEffect)(() => {
                        if ("max_stake" === t && y.stake && y.max_stake) {
                            let t = parseFloat(Number(y.stake).toFixed(2)),
                                s = parseFloat(Number(y.max_stake).toFixed(2));
                            if (console.log(`useEffect max_stake comparing: initial_stake=${t}, max_stake=${s}`), t > s) {
                                j("Initial stake cannot be greater than max stake");
                                let t = document.querySelector('input[name="max_stake"]');
                                if (t) {
                                    var e, a;
                                    null === (e = t.closest(".qs__input")) || void 0 === e || e.classList.add("error");
                                    let s = null === (a = t.closest(".qs__form__field__input")) || void 0 === a ? void 0 : a.querySelector(".qs__warning-bubble");
                                    s && s.setAttribute("data-show", "true")
                                }
                            } else j(null)
                        }
                        if ("stake" === t && y.stake && y.max_stake) {
                            let e = parseFloat(Number(y.stake).toFixed(2)),
                                t = parseFloat(Number(y.max_stake).toFixed(2));
                            if (console.log(`useEffect stake comparing: initial_stake=${e}, max_stake=${t}`), e > t) {
                                let e = document.querySelector('input[name="max_stake"]');
                                if (e) {
                                    let t = e.closest(".qs__input");
                                    t && t.classList.add("error");
                                    let a = document.querySelector('[data-testid="max_stake-popover"]');
                                    if (a) {
                                        a.setAttribute("data-force-show", "true");
                                        let e = a.querySelector(".qs__warning-bubble div");
                                        e && (e.textContent = "Initial stake cannot be greater than max stake");
                                        let t = a.querySelector(".qs__warning-bubble");
                                        t && (t.style.display = "block", t.style.opacity = "1", t.style.visibility = "visible", t.style.position = "absolute", t.style.zIndex = "9999")
                                    }
                                    v("max_stake", y.max_stake), b("max_stake", !0, !0);
                                    let s = "Initial stake cannot be greater than max stake";
                                    document.querySelectorAll('input[name="max_stake"]').forEach(e => {
                                        e.setAttribute("data-has-error", "true"), e.setAttribute("data-error-message", s);
                                        let t = new Event("blur", {
                                            bubbles: !0
                                        });
                                        e.dispatchEvent(t);
                                        let a = new Event("keyup", {
                                            bubbles: !0
                                        });
                                        e.dispatchEvent(a);
                                        let n = new CustomEvent("qs-error", {
                                            detail: {
                                                message: s
                                            },
                                            bubbles: !0
                                        });
                                        e.dispatchEvent(n)
                                    })
                                }
                            }
                        }
                    }, [t, y.stake, y.max_stake]);
                    let f = (e, s) => {
                            var n, l, i;
                            if (null == e || e.preventDefault(), ("tick_count" === t || "duration" === t && (null === (n = u.form_data) || void 0 === n ? void 0 : n.durationtype) === "t") && (s = String(Math.floor(Number(s)))), "stake" === t) {
                                let e = (null == u ? void 0 : null === (l = u.additional_data) || void 0 === l ? void 0 : l.min_stake) || .35,
                                    t = (null == u ? void 0 : null === (i = u.additional_data) || void 0 === i ? void 0 : i.max_stake) || 1e3;
                                Number(s) < e ? s = String(e) : Number(s) > t && (s = String(t))
                            }
                            a(t, s), b(t, !0, !0), v(t, s)
                        },
                        N = e => {
                            var s, n, l, i, r, o;
                            let d = e.target.value,
                                c = 0;
                            if (j(null), "" === d || "0" === d || "0." === d) {
                                if (a(t, d), "stake" === t || "max_stake" === t) {
                                    let e = (null == u ? void 0 : null === (n = u.additional_data) || void 0 === n ? void 0 : n.min_stake) || .35;
                                    j(`Minimum stake allowed is ${e}`)
                                }
                                return
                            }
                            if (d.length >= 12 ? (c = d.slice(0, 12), c = g ? Number(c) : c) : c = g ? Number(d) : d, g && ("tick_count" === t || "duration" === t && (null === (s = u.form_data) || void 0 === s ? void 0 : s.durationtype) === "t") && !Number.isInteger(c) && (c = Math.floor(Number(c))), g && "number" == typeof c && c < 1 && !Number.isInteger(c) && (c = 1), "stake" === t && g) {
                                let e = (null == u ? void 0 : null === (l = u.additional_data) || void 0 === l ? void 0 : l.min_stake) || .35,
                                    t = (null == u ? void 0 : null === (i = u.additional_data) || void 0 === i ? void 0 : i.max_stake) || 1e3,
                                    a = Number(c);
                                a >= e && a <= t ? j(null) : a < e ? j(`Minimum stake allowed is ${e}`) : a > t && j(`Maximum stake allowed is ${t}`)
                            }
                            if ("max_stake" === t && g) {
                                let e = (null == u ? void 0 : null === (r = u.additional_data) || void 0 === r ? void 0 : r.min_stake) || .35,
                                    t = (null == u ? void 0 : null === (o = u.additional_data) || void 0 === o ? void 0 : o.max_stake) || 1e3,
                                    a = Number(c);
                                a >= e && a <= t ? j(null) : a < e ? j(`Minimum stake allowed is ${e}`) : a > t && j(`Maximum stake allowed is ${t}`);
                                let s = y.stake;
                                s && Number(s) > a && j("Initial stake cannot be greater than max stake")
                            }
                            a(t, c)
                        };
                    return (0, l.jsx)(eI.gN, {
                        name: t,
                        id: t,
                        children: e => {
                            var a, i, p, C, w;
                            let {
                                field: k,
                                meta: T
                            } = e, {
                                error: E
                            } = T;
                            return (0, l.jsx)("div", {
                                className: R()("qs__form__field qs__form__field__input", {
                                    "no-top-spacing": n,
                                    "no-border-top": n
                                }),
                                children: (0, l.jsx)("div", {
                                    "data-testid": "qs-input-container",
                                    onMouseEnter: () => x(!0),
                                    onMouseLeave: () => x(!1),
                                    children: (0, l.jsx)(B.Z, {
                                        alignment: "bottom",
                                        message: E || h,
                                        is_open: !!(E || h) && ("stake" === t || "max_stake" === t || "loss" === t || "profit" === t || "take_profit" === t || "tick_count" === t || "size" === t),
                                        zIndex: "9999",
                                        classNameBubble: "qs__warning-bubble",
                                        has_error: !0,
                                        should_disable_pointer_events: !0,
                                        "data-testid": `${t}-popover`,
                                        children: (0, l.jsx)(eX, {
                                            data_testId: "qs-input",
                                            className: R()("qs__input", {
                                                error: (E || !!h) && ("stake" === t || "max_stake" === t || "loss" === t || "profit" === t || "take_profit" === t || "tick_count" === t)
                                            }, {
                                                highlight: null == m ? void 0 : null === (a = m.highlight_field) || void 0 === a ? void 0 : a.includes(t)
                                            }),
                                            type: s,
                                            leading_icon: g ? (0, l.jsx)("button", {
                                                disabled: r || !!o && Number(k.value) === o || "stake" === t && Number(k.value) <= ((null == u ? void 0 : null === (i = u.additional_data) || void 0 === i ? void 0 : i.min_stake) || .35) || 1 >= Number(k.value),
                                                "data-testid": "qs-input-decrease",
                                                onClick: e => {
                                                    var a;
                                                    let s = (null == u ? void 0 : null === (a = u.additional_data) || void 0 === a ? void 0 : a.min_stake) || .35,
                                                        n = Number(k.value),
                                                        l = "stake" === t ? s : o || 1;
                                                    if (n > 1) {
                                                        let t = n - 1;
                                                        f(e, String(t % 1 ? t.toFixed(2) : t));
                                                        return
                                                    }
                                                    if (n <= 1 && n > l) {
                                                        f(e, String(l));
                                                        return
                                                    }
                                                    if (n <= l) return
                                                },
                                                children: "-"
                                            }) : void 0,
                                            trailing_icon: g ? (0, l.jsx)("button", {
                                                disabled: r || 0xe8d4a50fff == k.value || !!d && k.value >= d,
                                                "data-testid": "qs-input-increase",
                                                onClick: e => {
                                                    let t = Number(k.value) + 1;
                                                    f(e, String(t % 1 ? t.toFixed(2) : t))
                                                },
                                                children: "+"
                                            }) : null,
                                            ...k,
                                            disabled: r,
                                            onChange: e => N(e),
                                            onBlur: e => {
                                                if ("stake" === t || "max_stake" === t) {
                                                    var a, s;
                                                    let n = (null == u ? void 0 : null === (a = u.additional_data) || void 0 === a ? void 0 : a.min_stake) || .35,
                                                        l = (null == u ? void 0 : null === (s = u.additional_data) || void 0 === s ? void 0 : s.max_stake) || 1e3,
                                                        i = e.target.value;
                                                    if ("" === i || "0" === i || "0." === i) j(`Minimum stake allowed is ${n}`);
                                                    else {
                                                        let e = Number(i);
                                                        if (e < 1 && !Number.isInteger(e)) {
                                                            v(t, 1);
                                                            return
                                                        }
                                                        e < n ? j(`Minimum stake allowed is ${n}`) : e > l ? j(`Maximum stake allowed is ${l}`) : j(null)
                                                    }
                                                    if ("stake" === t) {
                                                        let e = y.max_stake,
                                                            t = parseFloat(Number(i).toFixed(2)),
                                                            a = e ? parseFloat(Number(e).toFixed(2)) : 0;
                                                        if (e && a < t) {
                                                            let t = document.querySelector('input[name="max_stake"]');
                                                            if (t) {
                                                                v("max_stake", e), b("max_stake", !0, !0);
                                                                let a = new Event("blur", {
                                                                    bubbles: !0
                                                                });
                                                                t.dispatchEvent(a);
                                                                let s = new Event("keyup", {
                                                                    bubbles: !0
                                                                });
                                                                t.dispatchEvent(s)
                                                            }
                                                        } else if (e) {
                                                            let e = document.querySelector('input[name="max_stake"]');
                                                            if (e) {
                                                                let t = new Event("keyup", {
                                                                    bubbles: !0
                                                                });
                                                                e.dispatchEvent(t)
                                                            }
                                                        }
                                                    } else if ("max_stake" === t) {
                                                        let e = y.stake,
                                                            t = parseFloat(Number(i).toFixed(2)),
                                                            a = e ? parseFloat(Number(e).toFixed(2)) : 0;
                                                        e && a > t ? j("Initial stake cannot be greater than max stake") : j(null)
                                                    }
                                                }
                                            },
                                            placeholder: c ? "0.00" : "",
                                            bottom_label: c ? _ : "",
                                            max_characters: 2,
                                            maxLength: 2,
                                            inputMode: "tick_count" === t || "duration" === t && (null === (p = u.form_data) || void 0 === p ? void 0 : p.durationtype) === "t" ? "numeric" : void 0,
                                            pattern: "tick_count" === t || "duration" === t && (null === (C = u.form_data) || void 0 === C ? void 0 : C.durationtype) === "t" ? "[0-9]*" : void 0,
                                            onKeyPress: "tick_count" === t || "duration" === t && (null === (w = u.form_data) || void 0 === w ? void 0 : w.durationtype) === "t" ? e => {
                                                "." === e.key && e.preventDefault()
                                            } : void 0,
                                            onKeyUp: e => {
                                                if ("stake" === t || "max_stake" === t) {
                                                    var a, s;
                                                    let n = (null == u ? void 0 : null === (a = u.additional_data) || void 0 === a ? void 0 : a.min_stake) || .35,
                                                        l = (null == u ? void 0 : null === (s = u.additional_data) || void 0 === s ? void 0 : s.max_stake) || 1e3,
                                                        i = e.currentTarget.value;
                                                    if ("" === i || "0" === i || "0." === i) {
                                                        j(`Minimum stake allowed is ${n}`);
                                                        return
                                                    }
                                                    let r = Number(i);
                                                    if (r < 1 && !Number.isInteger(r)) {
                                                        v(t, 1);
                                                        return
                                                    }
                                                    if (r >= n && r <= l) {
                                                        j(null);
                                                        return
                                                    }
                                                    if (r < n ? j(`Minimum stake allowed is ${n}`) : r > l && j(`Maximum stake allowed is ${l}`), "stake" === t) {
                                                        let e = y.max_stake,
                                                            t = parseFloat(Number(i).toFixed(2)),
                                                            a = e ? parseFloat(Number(e).toFixed(2)) : 0;
                                                        if (e && a < t) {
                                                            let t = document.querySelector('input[name="max_stake"]');
                                                            if (t) {
                                                                v("max_stake", e), b("max_stake", !0, !0);
                                                                let a = new Event("blur", {
                                                                    bubbles: !0
                                                                });
                                                                t.dispatchEvent(a);
                                                                let s = new Event("keyup", {
                                                                    bubbles: !0
                                                                });
                                                                t.dispatchEvent(s)
                                                            }
                                                        } else if (e) {
                                                            let e = document.querySelector('input[name="max_stake"]');
                                                            if (e) {
                                                                let t = new Event("keyup", {
                                                                    bubbles: !0
                                                                });
                                                                e.dispatchEvent(t)
                                                            }
                                                        }
                                                    } else if ("max_stake" === t) {
                                                        let e = y.stake,
                                                            t = parseFloat(Number(i).toFixed(2)),
                                                            a = e ? parseFloat(Number(e).toFixed(2)) : 0;
                                                        e && a > t ? j("Initial stake cannot be greater than max stake") : j(null)
                                                    }
                                                }
                                            }
                                        })
                                    })
                                })
                            })
                        }
                    }, t)
                }),
                nT = e => {
                    let {
                        className: t,
                        classNameButton: a,
                        classNameLabel: s,
                        handleToggle: n,
                        id: r,
                        is_enabled: o,
                        name: d = "toggle_switch"
                    } = e;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("input", {
                            "aria-label": d,
                            className: R()("dc-toggle-switch", t),
                            id: r,
                            type: "checkbox",
                            checked: o,
                            onChange: n
                        }), (0, l.jsx)("label", {
                            className: R()("dc-toggle-switch__label", s),
                            htmlFor: r,
                            children: (0, l.jsx)("span", {
                                className: R()("dc-toggle-switch__button", a)
                            })
                        })]
                    })
                },
                nE = e => {
                    let {
                        name: t,
                        label: a,
                        description: s,
                        attached: n = !1,
                        isEnabledToggleSwitch: i,
                        setIsEnabledToggleSwitch: r
                    } = e, {
                        values: o,
                        setFieldValue: d
                    } = (0, eI.u6)(), c = async () => {
                        r(), await d(t, !(null == o ? void 0 : o[t]), !0), await d("max_stake", null == o ? void 0 : o.max_stake, !0)
                    };
                    return (0, l.jsx)(eI.gN, {
                        name: t,
                        children: () => (0, l.jsx)("div", {
                            className: R()("qs__form__field qs__form__field__input", {
                                "no-border-bottom-radius": n
                            }),
                            children: (0, l.jsx)("div", {
                                className: "qs__checkbox",
                                children: (0, l.jsxs)("div", {
                                    className: "qs__checkbox__container",
                                    children: [(0, l.jsxs)("label", {
                                        className: "dc-checkbox",
                                        children: [(0, l.jsx)(K.Z, {
                                            size: "xs",
                                            className: "dc-checkbox__label",
                                            children: a
                                        }), (0, l.jsx)(K.Z, {
                                            size: "xs",
                                            children: (0, A.NC)("(optional)")
                                        })]
                                    }), (0, l.jsx)("span", {
                                        children: (0, l.jsx)(B.Z, {
                                            classNameTargetIcon: "qs__checkbox__info",
                                            message: s,
                                            zIndex: "9999",
                                            alignment: "top",
                                            icon: "info"
                                        })
                                    }), (0, l.jsx)(nT, {
                                        id: "dt_mobile_drawer_theme_toggler",
                                        handleToggle: c,
                                        is_enabled: i,
                                        "data-testid": "qs-toggle-switch"
                                    })]
                                })
                            })
                        })
                    })
                },
                nS = e => {
                    let t, {
                        label: a,
                        description: s,
                        additional_data: n
                    } = e;
                    return t = "function" == typeof s ? s(n) : s, (0, l.jsx)("div", {
                        className: "qs__form__field",
                        children: (0, l.jsxs)("div", {
                            className: "qs__input-label",
                            children: [(0, l.jsx)(K.Z, {
                                weight: "bold",
                                className: "qs__input-label__wrapper",
                                size: "xs",
                                children: a
                            }), (0, l.jsx)("span", {
                                children: (0, l.jsx)(B.Z, {
                                    message: t,
                                    zIndex: "9999",
                                    alignment: "top",
                                    icon: "info"
                                })
                            })]
                        })
                    })
                };
            var nA = a("63999");
            let nI = (0, r.Pi)(e => {
                    let {
                        name: t
                    } = e, {
                        ui: a,
                        client: s
                    } = (0, p.oR)(), {
                        is_desktop: n
                    } = a, [r, o] = i.useState([]), {
                        quick_strategy: d
                    } = (0, p.oR)(), {
                        setValue: c,
                        setAdditionalData: _
                    } = d, {
                        setFieldValue: u,
                        values: m,
                        setFieldError: x,
                        errors: h
                    } = (0, eI.u6)(), j = i.useRef(null), v = i.useRef(null), b = i.useRef({
                        tick_count: null,
                        take_profit: null
                    });
                    i.useEffect(() => {
                        o([{
                            text: "1%",
                            value: "0.01"
                        }, {
                            text: "2%",
                            value: "0.02"
                        }, {
                            text: "3%",
                            value: "0.03"
                        }, {
                            text: "4%",
                            value: "0.04"
                        }, {
                            text: "5%",
                            value: "0.05"
                        }]), null == u || u("tradetype", "accumulator"), c("tradetype", "accumulator")
                    }, []), i.useEffect(() => {
                        var e, t;
                        m.boolean_tick_count ? (u("take_profit", 0), x("tick_count", (null === (e = b.current) || void 0 === e ? void 0 : e.tick_count) ? ? void 0), x("take_profit", void 0)) : (u("tick_count", 0), x("take_profit", (null === (t = b.current) || void 0 === t ? void 0 : t.take_profit) ? ? void 0), x("tick_count", void 0))
                    }, [m, h.take_profit, h.tick_count, m.boolean_tick_count, u, x]);
                    let y = async e => {
                            var t, a, n, l, i, r, o, c, m, h, p, y, g, f, N, C, w, k;
                            let T = Number(e.growth_rate),
                                E = Number(e.stake),
                                S = Number(e.take_profit),
                                I = {
                                    amount: E,
                                    currency: null == s ? void 0 : s.currency,
                                    growth_rate: T,
                                    symbol: e.symbol,
                                    limit_order: { ...!e.boolean_tick_count && {
                                            take_profit: S
                                        }
                                    }
                                };
                            j.current = { ...I,
                                boolean_tick_count: e.boolean_tick_count
                            };
                            try {
                                let s = await (0, nA.QT)(I, D.api_base.api),
                                    d = null == s ? void 0 : null === (a = s.proposal) || void 0 === a ? void 0 : null === (t = a.validation_params) || void 0 === t ? void 0 : t.max_ticks,
                                    u = null == s ? void 0 : null === (l = s.proposal) || void 0 === l ? void 0 : null === (n = l.contract_details) || void 0 === n ? void 0 : n.maximum_stake,
                                    m = null == s ? void 0 : null === (r = s.proposal) || void 0 === r ? void 0 : null === (i = r.contract_details) || void 0 === i ? void 0 : i.minimum_stake,
                                    h = "",
                                    p = "";
                                _({
                                    max_payout: v.current,
                                    max_ticks: d,
                                    max_stake: Number(u) || 1e3,
                                    min_stake: Number(m) || 1
                                }), v.current = null == s ? void 0 : null === (c = s.proposal) || void 0 === c ? void 0 : null === (o = c.validation_params) || void 0 === o ? void 0 : o.max_payout;
                                let j = Number(e.tick_count);
                                !isNaN(j) && j > d ? (p = `Maximum tick count is: ${d}`, x("tick_count", p), b.current.tick_count = p) : !isNaN(j) && j < 1 ? (h = "Minimum tick count is: 1", x("tick_count", h), b.current.tick_count = h) : (b.current.tick_count = null, x("tick_count", void 0)), b.current.take_profit = null
                            } catch (a) {
                                let t = (null == a ? void 0 : a.message) ? ? (null == a ? void 0 : null === (m = a.error) || void 0 === m ? void 0 : m.message);
                                if (e.boolean_tick_count) {
                                    t.includes("Please enter a stake amount that's at least") ? t = (0, A.NC)("Minimum tick count allowed is 1") : t.includes("Maximum stake allowed is") && (t = (0, A.NC)("Maximum tick count allowed is 1000")), x("tick_count", t), b.current.tick_count = t;
                                    let a = Number(e.tick_count);
                                    a > 1e3 ? u("tick_count", 1e3) : a < 1 && u("tick_count", 1)
                                } else if ((null == a ? void 0 : null === (p = a.error) || void 0 === p ? void 0 : null === (h = p.details) || void 0 === h ? void 0 : h.field) === "take_profit" && (t = 0 === Number(e.take_profit) ? null == a ? void 0 : null === (f = a.error) || void 0 === f ? void 0 : f.message : `Your total payout is ${Number(e.take_profit)+Number(e.stake)}. Enter amount less than ${v.current} ${(0,A.NC)("By changing your initial stake and/or take profit.")}`), (null == a ? void 0 : null === (g = a.error) || void 0 === g ? void 0 : null === (y = g.details) || void 0 === y ? void 0 : y.field) === "stake") {
                                    let s = null == a ? void 0 : null === (N = a.error) || void 0 === N ? void 0 : N.message.match(/minimum stake of (\d+\.\d+)/i),
                                        n = null == a ? void 0 : null === (C = a.error) || void 0 === C ? void 0 : C.message.match(/maximum payout of (\d+\.\d+)/i);
                                    if (s && n) {
                                        let a = s[1],
                                            l = n[1],
                                            i = Number(e.take_profit) + Number(e.stake);
                                        t = (0, A.NC)(`Minimum stake of ${a} and maximum payout of ${l}. Current payout is ${i.toFixed(2)}.`)
                                    } else if (t.includes("Maximum stake allowed is")) {
                                        let e = (null == d ? void 0 : null === (w = d.additional_data) || void 0 === w ? void 0 : w.max_stake) || "1000";
                                        t = (0, A.NC)(`Maximum stake allowed is ${e}`)
                                    } else t = `${null==a?void 0:null===(k=a.error)||void 0===k?void 0:k.message}`;
                                    x("stake", t)
                                } else x("take_profit", t), b.current.take_profit = t
                            }
                        },
                        g = i.useCallback(f()(y, 500, {
                            trailing: !0,
                            leading: !1
                        }), []);
                    i.useEffect(() => {
                        var e, t, a, n, l, i, r;
                        ((null === (e = j.current) || void 0 === e ? void 0 : e.symbol) !== m.symbol || (null === (t = j.current) || void 0 === t ? void 0 : t.amount) !== m.stake || (null === (n = j.current) || void 0 === n ? void 0 : null === (a = n.limit_order) || void 0 === a ? void 0 : a.take_profit) !== m.take_profit || (null === (l = j.current) || void 0 === l ? void 0 : l.currency) !== (null == s ? void 0 : s.currency) || (null === (i = j.current) || void 0 === i ? void 0 : i.growth_rate) !== m.growth_rate || (null === (r = j.current) || void 0 === r ? void 0 : r.boolean_tick_count) !== m.boolean_tick_count) && g(m)
                    }, [m.take_profit, m.tick_count, m.stake, m.growth_rate, null == s ? void 0 : s.currency, m.boolean_tick_count, m, g]);
                    let N = async e => {
                            null == u || u(t, e), c(t, e)
                        },
                        C = `qs-contract-type-${t}`;
                    return (0, l.jsx)("div", {
                        className: "qs__form__field qs__form__field__input no-top-spacing",
                        children: (0, l.jsx)(eI.gN, {
                            name: t,
                            id: C,
                            children: e => {
                                let {
                                    field: t
                                } = e, a = null == r ? void 0 : r.find(e => (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value));
                                return n ? (0, l.jsx)(nv, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_contract_type",
                                    autoComplete: "off",
                                    className: "qs__select contract-type",
                                    value: (null == a ? void 0 : a.text) || "",
                                    list_items: r,
                                    onItemSelection: e => {
                                        let {
                                            value: t
                                        } = e;
                                        t && N(t)
                                    }
                                }) : (0, l.jsx)("ul", {
                                    className: "qs__form__field__list",
                                    "data-testid": "dt_qs_contract_types",
                                    children: r.map(e => {
                                        let t = (null == a ? void 0 : a.value) === (null == e ? void 0 : e.value);
                                        return (0, l.jsx)("li", {
                                            className: R()("qs__form__field__list__item", {
                                                "qs__form__field__list__item--active": t
                                            }),
                                            onClick: () => {
                                                N(null == e ? void 0 : e.value)
                                            },
                                            onChange: () => {
                                                N(null == e ? void 0 : e.value)
                                            },
                                            children: (0, l.jsx)(K.Z, {
                                                size: "xs",
                                                color: "prominent",
                                                weight: t ? "bold " : "normal",
                                                children: null == e ? void 0 : e.text
                                            })
                                        }, null == e ? void 0 : e.value)
                                    })
                                })
                            }
                        }, C)
                    })
                }),
                nR = [{
                    text: "Take Profit",
                    value: "take_profit"
                }, {
                    text: "Tick Count",
                    value: "tick_count"
                }],
                nM = e => {
                    let {
                        attached: t
                    } = e, {
                        quick_strategy: a
                    } = (0, p.oR)(), {
                        setValue: s
                    } = a, {
                        setFieldValue: n,
                        values: r
                    } = (0, eI.u6)(), [o, d] = (0, i.useState)(r.boolean_tick_count ? nR[1] : nR[0]), c = e => {
                        if (null == e ? void 0 : e.value) {
                            let {
                                value: t
                            } = e, a = "take_profit" === t;
                            s("boolean_tick_count", !a), null == n || n("boolean_tick_count", !a), d({ ...o,
                                text: a ? "Take Profit" : "Tick Count"
                            })
                        }
                    };
                    return (0, l.jsx)("div", {
                        className: R()("qs__form__field qs__form__field__input", {
                            "no-top-border-radius": t
                        }),
                        children: (0, l.jsx)(eI.gN, {
                            name: "sell_conditions",
                            id: "sell_conditions",
                            children: e => {
                                let {
                                    field: t
                                } = e;
                                return (0, l.jsx)(nv, { ...t,
                                    readOnly: !0,
                                    inputMode: "none",
                                    "data-testid": "dt_qs_sell_conditions",
                                    autoComplete: "off",
                                    className: "qs__select",
                                    value: o.text,
                                    list_items: nR,
                                    onItemSelection: c
                                })
                            }
                        }, "sell_conditions")
                    })
                },
                nO = (0, r.Pi)(() => {
                    var e;
                    let {
                        quick_strategy: t
                    } = (0, p.oR)(), {
                        selected_strategy: a,
                        setValue: s,
                        form_data: n
                    } = t, r = null === (e = (0, sZ.j)()[a]) || void 0 === e ? void 0 : e.fields, {
                        isDesktop: o
                    } = (0, v.F)(), {
                        values: d,
                        setFieldTouched: c,
                        setFieldValue: _
                    } = (0, eI.u6)(), {
                        current_duration_min_max: u,
                        additional_data: m
                    } = t, [x, h] = i.useState((null == d ? void 0 : d.boolean_max_stake) ? ? !1);
                    i.useEffect(() => {
                        window.addEventListener("keydown", b);
                        let e = null;
                        try {
                            e = JSON.parse(localStorage.getItem("qs-fields") ? ? "{}")
                        } catch {
                            e = null
                        }
                        return h(!!(null == e ? void 0 : e.boolean_max_stake)), () => {
                            window.removeEventListener("keydown", b)
                        }
                    }, []), i.useEffect(() => {
                        (null == d ? void 0 : d.boolean_max_stake) !== void 0 && h(!!d.boolean_max_stake)
                    }, [null == d ? void 0 : d.boolean_max_stake]), i.useEffect(() => {
                        !x && (null == d ? void 0 : d.max_stake) && _("max_stake", 0)
                    }, [x, null == d ? void 0 : d.max_stake]);
                    let j = async (e, t) => {
                            if (s(e, t), await c(e, !0, !0), await _(e, t, !0), "stake" === e || "max_stake" === e) {
                                if (c("stake", !0, !0), c("max_stake", !0, !0), "stake" === e) {
                                    let e = document.querySelectorAll('input[name="max_stake"]');
                                    if (e.length > 0) {
                                        let t = new Event("keyup", {
                                            bubbles: !0
                                        });
                                        e[0].dispatchEvent(t)
                                    }
                                } else if ("max_stake" === e) {
                                    let e = document.querySelectorAll('input[name="stake"]');
                                    if (e.length > 0) {
                                        let t = new Event("keyup", {
                                            bubbles: !0
                                        });
                                        e[0].dispatchEvent(t)
                                    }
                                }
                            }
                        },
                        b = e => {
                            (null == e ? void 0 : e.key) && "Enter" == e.key && (e.preventDefault(), e.stopPropagation())
                        },
                        y = e => e.every(e => {
                            var t;
                            let a = null == d ? void 0 : null === (t = d[e.key]) || void 0 === t ? void 0 : t.toString();
                            return e.multiple ? e.multiple.includes(a) : d[e.key] === e.value
                        }),
                        g = () => {
                            h(e => !e)
                        };
                    return (0, l.jsx)("div", {
                        children: r.map((e, t) => (null == e ? void 0 : e.length) ? (0, l.jsx)("div", {
                            className: "qs__body__content__form__group",
                            children: e.map((e, t) => {
                                var a, s;
                                let r = `${e.name||e.type} + ${t}`;
                                if (!o && (null === (a = e.hide) || void 0 === a ? void 0 : a.includes("mobile")) || o && (null === (s = e.hide) || void 0 === s ? void 0 : s.includes("desktop"))) return null;
                                switch (e.type) {
                                    case "number":
                                        {
                                            let t;
                                            if (!e.name) return null;
                                            let {
                                                should_have: a = [],
                                                hide_without_should_have: s = !1,
                                                has_currency_unit: l = !1
                                            } = e,
                                            d = y(a),
                                            c = 1;
                                            "duration" === e.name && u && (c = u.min, t = u.max);
                                            let _ = e.should_have;
                                            if (_ && "max_stake" === e.name && isNaN(c = +(null == n ? void 0 : n.stake)) && (c = 1), _ && "last_digit_prediction" === e.name && ((isNaN(+(null == n ? void 0 : n.last_digit_prediction)) || 1 == +(null == n ? void 0 : n.last_digit_prediction)) && (c = 0), +(null == n ? void 0 : n.last_digit_prediction) > 0 && (c = +(null == n ? void 0 : n.last_digit_prediction) - 1), t = 9), null == a ? void 0 : a.length) {
                                                if (!d && (!o || s)) return null;
                                                return (0, i.createElement)(nk, { ...e,
                                                    key: r,
                                                    name: e.name,
                                                    disabled: !d,
                                                    onChange: j,
                                                    min: c,
                                                    max: t,
                                                    has_currency_unit: l
                                                })
                                            }
                                            return (0, i.createElement)(nk, { ...e,
                                                onChange: j,
                                                key: r,
                                                name: e.name,
                                                min: c,
                                                max: t,
                                                has_currency_unit: l
                                            })
                                        }
                                    case "label":
                                        {
                                            if (!e.label) return null;
                                            let {
                                                should_have: t = [],
                                                hide_without_should_have: a = !1
                                            } = e;
                                            if (!y(t) && a) return null;
                                            return (0, l.jsx)(nS, {
                                                label: e.label,
                                                description: e.description ? String(e.description) : "",
                                                additional_data: m
                                            }, r)
                                        }
                                    case "checkbox":
                                        return (0, l.jsx)(nE, {
                                            name: e.name,
                                            label: e.label,
                                            description: e.description ? String(e.description) : void 0,
                                            isEnabledToggleSwitch: !!x,
                                            setIsEnabledToggleSwitch: g
                                        }, r);
                                    case "symbol":
                                        return (0, i.createElement)(ng, { ...e,
                                            key: r
                                        });
                                    case "tradetype":
                                        return (0, i.createElement)(nN, { ...e,
                                            key: r
                                        });
                                    case "durationtype":
                                        return (0, i.createElement)(nw, { ...e,
                                            key: r
                                        });
                                    case "contract_type":
                                        return (0, i.createElement)(nC, { ...e,
                                            key: r,
                                            name: e.name
                                        });
                                    case "growth_rate":
                                        return (0, i.createElement)(nI, { ...e,
                                            key: r,
                                            name: e.name
                                        });
                                    case "sell_conditions":
                                        return (0, i.createElement)(nM, { ...e,
                                            key: r
                                        });
                                    default:
                                        return null
                                }
                            })
                        }, t) : null)
                    })
                }),
                nD = function(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "DEFAULT";
                    return ({
                        DURATION: {
                            MIN: (0, A.NC)("Minimum duration: {{ value }}", {
                                value: t
                            }),
                            MAX: (0, A.NC)("Maximum duration: {{ value }}", {
                                value: t
                            })
                        },
                        LAST_DIGIT_PREDICTION: {
                            MIN: (0, A.NC)("Enter a value from {{ value }} to 9.", {
                                value: t
                            }),
                            MAX: (0, A.NC)("Enter a value from 0 to {{ value }}.", {
                                value: t
                            })
                        },
                        DEFAULT: {
                            MIN: (0, A.NC)("The value must be equal or greater than {{ value }}", {
                                value: t
                            }),
                            MAX: (0, A.NC)("The value must be equal or less than {{ value }}", {
                                value: t
                            })
                        }
                    })[a][e]
                },
                nL = (0, r.Pi)(e => {
                    var t;
                    let {
                        children: a
                    } = e, {
                        quick_strategy: s
                    } = (0, p.oR)(), {
                        selected_strategy: n,
                        form_data: r,
                        initializeLossThresholdWarningData: o
                    } = s, d = null === (t = (0, sZ.j)()[n]) || void 0 === t ? void 0 : t.fields, [c, _] = (0, i.useState)(sD.Ry().shape({})), u = (0, i.useRef)(!0), m = null, x = () => {
                        let e = null;
                        try {
                            e = JSON.parse(localStorage.getItem("qs-fields") ? ? "{}")
                        } catch {
                            e = null
                        }
                        return e
                    };
                    i.useEffect(() => () => {
                        u.current = !1
                    }, []), i.useEffect(() => {
                        o()
                    }, []);
                    let h = e => {
                        let t = {};
                        d.forEach(a => {
                            if (!(null == a ? void 0 : a.length)) return null;
                            a.forEach(a => {
                                var n, l;
                                if ((null == a ? void 0 : null === (n = a.validation) || void 0 === n ? void 0 : n.length) && (null == a ? void 0 : a.name) && a.validation.includes("number")) {
                                    let n = sD.Rx().typeError((0, A.NC)("Must be a number")),
                                        i = 0,
                                        o = 10,
                                        d = nD("MIN", 0),
                                        c = nD("MAX", o),
                                        _ = "",
                                        {
                                            current_duration_min_max: u
                                        } = s;
                                    "duration" === a.name && u && (i = u.min, o = u.max, d = nD("MIN", i, "DURATION"), c = nD("MAX", o, "DURATION"));
                                    let x = !a.should_have || (null === (l = a.should_have) || void 0 === l ? void 0 : l.every(t => {
                                        var a;
                                        let s = null == e ? void 0 : null === (a = e[t.key]) || void 0 === a ? void 0 : a.toString();
                                        return t.multiple ? t.multiple.includes(s) : (null == e ? void 0 : e[t.key]) === t.value
                                    }));
                                    x && "max_stake" === a.name && (isNaN(i = +(null == r ? void 0 : r.stake)) && (i = +((null == m ? void 0 : m.stake) ? ? 0)), d = nD("MIN", i)), x && "last_digit_prediction" === a.name && (i = 0, c = nD("MAX", o = 9, "LAST_DIGIT_PREDICTION"), _ = "Enter a value from 0 to 9."), x && a.validation.forEach(e => {
                                        if ("string" == typeof e) switch (e) {
                                            case "required":
                                                n = n.required((0, A.NC)("Field cannot be empty"));
                                                break;
                                            case "min":
                                                n = n.min(i, d);
                                                break;
                                            case "max":
                                                n = n.max(o, c);
                                                break;
                                            case "ceil":
                                                n = n.round("ceil");
                                                break;
                                            case "floor":
                                                n = n.round("floor");
                                                break;
                                            case "integer":
                                                n = n.integer(_)
                                        } else if ("object" == typeof e && (null == e ? void 0 : e.type)) {
                                            let t = e.getDynamicValue ? e.getDynamicValue(s) : e.value;
                                            n = n[e.type](t, (0, A.NC)(e.getMessage(t)))
                                        }
                                    }), t[a.name] = n
                                }
                            })
                        }), u.current && _(sD.Ry().shape(t))
                    };
                    return (0, l.jsx)(eI.J9, {
                        initialValues: (() => {
                            let e = x();
                            return m = {
                                symbol: (null == e ? void 0 : e.symbol) ? ? (0, D.config)().QUICK_STRATEGY.DEFAULT.symbol,
                                tradetype: (null == e ? void 0 : e.tradetype) ? ? "",
                                type: (null == e ? void 0 : e.type) ? ? "",
                                durationtype: (null == e ? void 0 : e.durationtype) ? ? (0, D.config)().QUICK_STRATEGY.DEFAULT.durationtype,
                                duration: (null == e ? void 0 : e.duration) ? ? "1",
                                stake: (null == e ? void 0 : e.stake) ? ? "1",
                                loss: (null == e ? void 0 : e.loss) ? ? "",
                                profit: (null == e ? void 0 : e.profit) ? ? "",
                                size: (null == e ? void 0 : e.size) ? ? String((0, D.config)().QUICK_STRATEGY.DEFAULT.size),
                                unit: (null == e ? void 0 : e.unit) ? ? String((0, D.config)().QUICK_STRATEGY.DEFAULT.unit),
                                action: (null == e ? void 0 : e.action) ? ? "RUN",
                                max_stake: (null == e ? void 0 : e.max_stake) ? ? 10,
                                boolean_max_stake: (null == e ? void 0 : e.boolean_max_stake) ? ? !1,
                                last_digit_prediction: (null == e ? void 0 : e.last_digit_prediction) ? ? 1,
                                growth_rate: (null == e ? void 0 : e.growth_rate) ? ? "0.01",
                                tick_count: (null == e ? void 0 : e.tick_count) ? ? 0,
                                take_profit: (null == e ? void 0 : e.take_profit) ? ? 0,
                                boolean_tick_count: (null == e ? void 0 : e.boolean_tick_count) ? ? !1,
                                max_payout: (null == e ? void 0 : e.max_payout) ? ? 0,
                                max_ticks: (null == e ? void 0 : e.max_ticks) ? ? 0
                            }
                        })(),
                        validationSchema: c,
                        onSubmit: e => {
                            var t;
                            return h(e), null === (t = localStorage) || void 0 === t || t.setItem("qs-fields", JSON.stringify(e)), e
                        },
                        validate: e => h(e),
                        validateOnChange: !1,
                        children: a
                    })
                }),
                nU = (0, r.Pi)(() => {
                    let {
                        quick_strategy: e
                    } = (0, p.oR)(), {
                        isDesktop: t
                    } = (0, v.F)(), {
                        is_open: a,
                        setFormVisibility: s,
                        form_data: n,
                        selected_strategy: r
                    } = e, o = (0, i.useRef)(null), [d, c] = i.useState(sz.StrategySelect), [_, u] = i.useState("");
                    i.useEffect(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
                        document.body.style.overflow = ""
                    }), [a]);
                    let m = () => {
                            var e, t, a;
                            let s = (null === (a = o.current) || void 0 === a ? void 0 : null === (t = a.querySelector(".active")) || void 0 === t ? void 0 : null === (e = t.textContent) || void 0 === e ? void 0 : e.toLowerCase()) === "learn more" ? "learn more" : "trade parameters";
                            (0, tK._W)({
                                subform_name: "quick_strategy",
                                quick_strategy_tab: s,
                                selected_strategy: r,
                                form_values: n
                            })
                        },
                        x = () => {
                            m(), s(!1)
                        };
                    return (0, l.jsx)(nL, {
                        children: (0, l.jsxs)(eI.l0, {
                            children: [(0, l.jsx)(na, {}), t ? (0, l.jsx)(e$.Z, {
                                className: "modal--strategy",
                                is_open: a,
                                width: "72rem",
                                children: (0, l.jsx)(s9, {
                                    onClickClose: x,
                                    setCurrentStep: c,
                                    current_step: d,
                                    selected_trade_type: _,
                                    setSelectedTradeType: u,
                                    children: (0, l.jsx)(nO, {})
                                })
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(aj, {
                                    is_modal_open: a,
                                    className: "quick-strategy__wrapper",
                                    header: (0, l.jsx)(K.Z, {
                                        size: "xs",
                                        weight: "bold",
                                        children: (0, A.NC)(`Step ${d===sz.StrategyCompleted?2:1}/2: Choose your strategy`)
                                    }),
                                    onClickClose: x,
                                    height_offset: "8rem",
                                    children: (0, l.jsx)(s6, {
                                        setCurrentStep: c,
                                        current_step: d,
                                        selected_trade_type: _,
                                        setSelectedTradeType: u,
                                        children: (0, l.jsx)(nO, {})
                                    })
                                }), (0, l.jsx)(ne, {
                                    setCurrentStep: c,
                                    current_step: d
                                })]
                            })]
                        })
                    })
                });
            var nZ = a("18908"),
                nB = a("69103"),
                nF = a("27086"),
                nz = a("35651");
            let nP = (0, r.Pi)(e => {
                    let {
                        block_node: t,
                        should_hide_display_name: a
                    } = e, {
                        flyout: s
                    } = (0, p.oR)(), {
                        initBlockWorkspace: n
                    } = s, r = i.useRef();
                    return i.useEffect(() => {
                        n(r, t)
                    }, []), (0, l.jsx)("div", {
                        ref: e => r = e,
                        className: R()({
                            "flyout__block-workspace--center": a,
                            "flyout__block-workspace--top": !a
                        }),
                        "data-testid": "flyout-block-workspace"
                    })
                }),
                nX = e => {
                    let {
                        onInfoClick: t,
                        block_node: a,
                        is_active: s,
                        should_hide_display_name: n
                    } = e, i = a.getAttribute("type") || "", r = window.Blockly.Blocks[i].meta(), o = "variables_get" === i, d = "variables_set" === i, {
                        display_name: c,
                        description: _
                    } = r, u = () => (0, l.jsx)("div", {
                        className: "flyout__item-buttons",
                        children: (0, l.jsx)(ek.Z, {
                            id: `db-flyout__add--${i}`,
                            "data-testid": `dt_flyout__add_${i}`,
                            className: "flyout__button-add flyout__button-add--hide",
                            has_effect: !0,
                            is_plus: !0,
                            onClick: () => window.Blockly.derivWorkspace.addBlockNode(a),
                            type: "button",
                            children: (0, l.jsx)(nz.Z, {
                                height: "24px",
                                width: "24px",
                                fill: "var(--text-general)"
                            })
                        })
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [d && (0, l.jsx)("div", {
                            className: "flyout__hr"
                        }), (0, l.jsxs)("div", {
                            className: R()("flyout__item", {
                                "flyout__item--active": s
                            }),
                            children: [!n && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)("div", {
                                    className: "flyout__item-header",
                                    children: [(0, l.jsx)(K.Z, {
                                        size: o ? "xs" : "xsm",
                                        lineHeight: o ? void 0 : "xl",
                                        weight: o ? void 0 : "bold",
                                        children: c
                                    }), !o && (0, l.jsx)(u, {})]
                                }), (0, l.jsxs)("div", {
                                    className: "flyout__item-description",
                                    children: [_, t && (0, l.jsx)("a", {
                                        id: c.replace(/\s/gi, "-"),
                                        className: "flyout__item-info",
                                        onClick: t,
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: "Learn more"
                                        })
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flyout__block-workspace__header",
                                children: [(0, l.jsx)(nP, {
                                    block_node: a,
                                    should_hide_display_name: !0
                                }), o && (0, l.jsx)(u, {})]
                            })]
                        })]
                    })
                };
            var nH = a("43774");
            let n$ = e => {
                    let {
                        width: t,
                        url: a
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "flyout__item",
                        "data-testid": "dt_flyout_image",
                        children: (0, l.jsx)("img", {
                            src: a,
                            className: "flyout__image",
                            style: {
                                width: t
                            }
                        })
                    })
                },
                nV = e => {
                    let {
                        text: t
                    } = e;
                    return (0, l.jsx)(K.Z, {
                        as: "p",
                        size: "xs",
                        styles: {
                            lineHeight: "1.3em"
                        },
                        children: t
                    })
                },
                nG = e => (0, l.jsx)("div", {
                    className: "flyout__item",
                    "data-testid": "dt_flyout_video_container",
                    children: (0, l.jsx)("iframe", {
                        "data-testid": "dt_flyout_video",
                        className: "flyout__video",
                        src: e.url,
                        frameBorder: "0",
                        allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        width: "100%"
                    })
                }),
                nq = (0, r.Pi)(() => {
                    let {
                        flyout: e,
                        flyout_help: t
                    } = (0, p.oR)(), {
                        block_node: a,
                        block_type: s,
                        examples: n,
                        help_string: r,
                        onBackClick: o,
                        onSequenceClick: d,
                        should_next_disable: c,
                        should_previous_disable: _,
                        title: u
                    } = t, {
                        is_search_flyout: m
                    } = e, x = r && (0, nB.S)(window.__webpack_public_path__)[s], h = 0;
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "flyout__help-header",
                            "data-testid": "dt_flyout_help_base",
                            children: [(0, l.jsx)("button", {
                                className: "dc-btn flyout__button-back",
                                onClick: o,
                                children: (0, l.jsx)(nH.Z, {
                                    height: "16px",
                                    width: "16px",
                                    fill: "var(--text-general)"
                                })
                            }), (0, l.jsx)(K.Z, {
                                weight: "bold",
                                className: "flyout__help-title",
                                children: u
                            }), (0, l.jsx)("div", {
                                className: "flyout__item-buttons",
                                children: (0, l.jsx)(ek.Z, {
                                    className: "flyout__button-add",
                                    has_effect: !0,
                                    id: `db-flyout-help__add--${s}`,
                                    onClick: () => window.Blockly.derivWorkspace.addBlockNode(a),
                                    primary: !0,
                                    text: (0, A.NC)("Add"),
                                    type: "button"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "flyout__help-content",
                            children: x && x.map((e, t) => {
                                let {
                                    type: i,
                                    width: o,
                                    url: d,
                                    example_id: c
                                } = e, {
                                    text: _
                                } = r, u = n.find(e => e.id === c);
                                switch (i) {
                                    case nB.I.TEXT:
                                        if (h < _.length) return (0, l.jsx)(nV, {
                                            text: _[h++]
                                        }, `${s}_${t}`);
                                        return null;
                                    case nB.I.VIDEO:
                                        return (0, l.jsx)(nG, {
                                            url: d
                                        }, `${s}_${t}`);
                                    case nB.I.IMAGE:
                                        return (0, l.jsx)(n$, {
                                            width: o,
                                            url: d
                                        }, `${s}_${t}`);
                                    case nB.I.BLOCK:
                                        return (0, l.jsx)(nP, {
                                            block_node: a
                                        }, `${s}_${t}`);
                                    case nB.I.EXAMPLE:
                                        if (u) return (0, l.jsx)(nP, {
                                            block_node: u.childNodes[0]
                                        }, `${s}_${t}`);
                                        return null;
                                    default:
                                        return null
                                }
                            })
                        }), !m && !(_ && c) && (0, l.jsxs)("div", {
                            className: "flyout__help-footer",
                            children: [(0, l.jsx)(ek.Z, {
                                className: "flyout__button-previous",
                                secondary: !0,
                                onClick: () => d(!1),
                                text: (0, A.NC)("Previous"),
                                type: "button",
                                is_disabled: _,
                                renderText: e => _ && (0, l.jsx)(K.Z, {
                                    size: "xs",
                                    weight: "bold",
                                    align: "center",
                                    color: "disabled",
                                    children: e
                                })
                            }), (0, l.jsx)(ek.Z, {
                                className: "flyout__button-next",
                                secondary: !0,
                                onClick: () => d(!0),
                                text: (0, A.NC)("Next"),
                                type: "button",
                                is_disabled: c,
                                renderText: e => c && (0, l.jsx)(K.Z, {
                                    size: "xs",
                                    weight: "bold",
                                    align: "center",
                                    color: "disabled",
                                    children: e
                                })
                            })]
                        })]
                    })
                }),
                nY = e => {
                    let {
                        search_term: t,
                        total_result: a
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "flyout__search-header",
                        children: [(0, l.jsx)(K.Z, {
                            weight: "bold",
                            className: "flyout__search-header-text",
                            children: (0, A.NC)('Results for "{{ search_term }}"', {
                                search_term: t,
                                interpolation: {
                                    escapeValue: !1
                                }
                            })
                        }), (0, l.jsx)(K.Z, {
                            weight: "bold",
                            color: "profit-success",
                            className: "flyout__search-header-text",
                            children: `${a} ${a>1?(0,A.NC)("results"):(0,A.NC)("result")}`
                        })]
                    })
                },
                nW = e => {
                    let t = i.useRef(),
                        {
                            flyout_content: a,
                            active_helper: s,
                            setHelpContent: n,
                            initFlyoutHelp: r,
                            is_empty: o,
                            is_search_flyout: d,
                            selected_category: c,
                            first_get_variable_block_index: _
                        } = e;
                    return (0, l.jsx)("div", {
                        ref: t,
                        className: R()("flyout__content", {
                            "flyout__normal-content": !d
                        }),
                        children: (0, l.jsxs)(ea.Z, {
                            className: "flyout__content-scrollbar",
                            children: [(null == c ? void 0 : c.getAttribute("id")) === "indicators" && (0, l.jsxs)("div", {
                                className: "flyout__content-disclaimer",
                                children: [(0, l.jsx)("span", {
                                    className: "flyout__content-disclaimer-icon",
                                    children: (0, l.jsx)(nF.Z, {
                                        className: "flyout__content-disclaimer__warning-icon",
                                        height: "24px",
                                        width: "24px",
                                        fill: "var(--text-general)"
                                    })
                                }), (0, l.jsx)("span", {
                                    className: "flyout__content-disclaimer-text",
                                    children: (0, A.NC)("Indicators on the chart tab are for indicative purposes only and may vary slightly from the ones on the {{platform_name_dbot}} workspace.", {
                                        platform_name_dbot: (0, x.$Xq)("dbot").name
                                    })
                                })]
                            }), o ? (0, l.jsx)("div", {
                                className: "flyout__search-empty",
                                children: (0, l.jsx)(K.Z, {
                                    as: "h2",
                                    weight: "bold",
                                    lineHeight: "xs",
                                    children: (0, A.NC)("No results found")
                                })
                            }) : a.map((e, t) => {
                                switch (e.tagName.toUpperCase()) {
                                    case window.Blockly.Xml.NODE_BLOCK:
                                        {
                                            var a, i, o, c;
                                            let u = e.getAttribute("type") || "";
                                            return (0, l.jsx)(nX, {
                                                id: `flyout__item-workspace--${t}`,
                                                block_node: e,
                                                should_hide_display_name: "variables_get" === u && t !== _,
                                                onInfoClick: (0, nB.S)(window.__webpack_public_path__)[u] && (d ? () => n(e) : () => r(e, u)),
                                                is_active: s === u
                                            }, `${e.getAttribute("type")}${null===(c=window)||void 0===c?void 0:null===(o=c.Blockly)||void 0===o?void 0:null===(i=o.utils)||void 0===i?void 0:null===(a=i.idGenerator)||void 0===a?void 0:a.genUid()}`)
                                        }
                                    case window.Blockly.Xml.NODE_LABEL:
                                        return (0, l.jsx)("div", {
                                            className: "flyout__item-label-bold",
                                            children: e.getAttribute("text")
                                        }, `${e.getAttribute("text")}${t}`);
                                    case window.Blockly.Xml.NODE_INPUT:
                                        return (0, l.jsx)(eX, {
                                            className: `${e.getAttribute("className")}`,
                                            type: `${e.getAttribute("type")}`,
                                            name: `${e.getAttribute("name")}`,
                                            placeholder: `${e.getAttribute("placeholder")}`,
                                            autoComplete: "off"
                                        }, `${e.getAttribute("name")}${t}`);
                                    case window.Blockly.Xml.NODE_BUTTON:
                                        {
                                            let a = e.getAttribute("callbackKey"),
                                                s = e.getAttribute("id");
                                            return (0, l.jsx)("button", {
                                                id: s,
                                                className: R()("dc-btn", "dc-btn-effect", "dc-btn--primary", `${e.getAttribute("className")}`),
                                                onClick: e => {
                                                    let t = window.Blockly.derivWorkspace,
                                                        s = t.getButtonCallback(a);
                                                    e.targetWorkspace_ = t, e.getTargetWorkspace = () => e.targetWorkspace_, null == s || s(e)
                                                },
                                                children: e.getAttribute("text")
                                            }, `${a}${t}`)
                                        }
                                    default:
                                        return null
                                }
                            })]
                        })
                    })
                },
                nK = (0, r.Pi)(() => {
                    let {
                        flyout: e,
                        flyout_help: t
                    } = (0, p.oR)(), {
                        active_helper: a,
                        initFlyoutHelp: s,
                        setHelpContent: n
                    } = t, {
                        flyout_content: r,
                        flyout_width: o,
                        is_help_content: d,
                        is_search_flyout: c,
                        is_visible: _,
                        onMount: u,
                        onUnmount: m,
                        search_term: x,
                        selected_category: h,
                        first_get_variable_block_index: j
                    } = e;
                    if (i.useEffect(() => (u(), () => m()), [u, m]), _ && c) {
                        var v;
                        null === nZ.default || void 0 === nZ.default || null === (v = nZ.default.pushDataLayer) || void 0 === v || v.call(nZ.default, {
                            event: "dbot_search_results",
                            value: !0
                        })
                    }
                    let b = Object.keys(r).length;
                    return _ && (0, l.jsxs)("div", {
                        id: "gtm-search-results",
                        className: R()("flyout", {
                            flyout__search: c,
                            flyout__help: d,
                            flyout__normal: !d && !c
                        }),
                        style: {
                            width: `${o}px`
                        },
                        children: [c && !d && (0, l.jsx)(nY, {
                            search_term: x,
                            total_result: b
                        }), d ? (0, l.jsx)(nq, {}) : (0, l.jsx)(nW, {
                            is_empty: 0 === b,
                            flyout_content: r,
                            active_helper: a,
                            setHelpContent: n,
                            initFlyoutHelp: s,
                            is_search_flyout: c,
                            selected_category: h,
                            first_get_variable_block_index: j
                        })]
                    })
                }),
                nJ = e => {
                    let {
                        is_running: t,
                        is_multiplier: a,
                        is_contract_dialog_open: s,
                        is_stop_bot_dialog_open: n,
                        closeMultiplierContract: r,
                        onOkButtonClick: o,
                        toggleStopBotDialog: d
                    } = e, c = t && a ? (0, A.NC)("Keep my contract") : (0, A.NC)("Stop my bot"), _ = t && a ? (0, A.NC)("Close my contract") : (0, A.NC)("Back"), u = t && a ? (0, A.NC)("Keep your current contract?") : (0, A.NC)("Stop your current bot?"), m = t && a ? r : d;
                    return (0, l.jsx)(i.Fragment, {
                        children: (0, l.jsx)(aB.Z, {
                            portal_element_id: "modal_root",
                            title: u,
                            is_visible: t ? n : s,
                            confirm_button_text: c,
                            onConfirm: o,
                            cancel_button_text: _,
                            onCancel: m,
                            is_mobile_full_width: !1,
                            className: "toolbar__dialog",
                            has_close_icon: !0,
                            children: t && a ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsxs)(K.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    styles: {
                                        paddingBottom: "2rem",
                                        paddingTop: "1rem"
                                    },
                                    children: [(0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Close your contract now or keep it running. If you decide to keep it running, you can check and close it later on the "
                                    }), (0, l.jsx)(K.Z, {
                                        weight: "bold",
                                        as: "span",
                                        lineHeight: "s",
                                        size: "xs",
                                        children: (0, l.jsx)(aq.Z, {
                                            className: "link",
                                            onClick: () => window.location.assign(x.xOw.reports),
                                            children: (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Reports"
                                            })
                                        }, 0)
                                    }), (0, l.jsx)(A.Xx, {
                                        i18n_default_text: " page."
                                    })]
                                }), (0, l.jsx)(K.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "The Quick Strategy you just created will be loaded to the workspace."
                                    })
                                })]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(K.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    styles: {
                                        paddingBottom: "2rem",
                                        paddingTop: "1rem"
                                    },
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Stopping the current bot will load the Quick Strategy you just created to the workspace."
                                    })
                                }), (0, l.jsxs)(K.Z, {
                                    as: "p",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: [(0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Any open contracts can be viewed on the "
                                    }), (0, l.jsx)(K.Z, {
                                        weight: "bold",
                                        as: "span",
                                        lineHeight: "s",
                                        size: "xs",
                                        children: (0, l.jsx)(aq.Z, {
                                            className: "link",
                                            onClick: () => window.location.assign(x.xOw.reports),
                                            children: (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Reports"
                                            })
                                        }, 0)
                                    }), (0, l.jsx)(K.Z, {
                                        as: "span",
                                        lineHeight: "s",
                                        size: "xs",
                                        styles: {
                                            paddingInlineStart: "0.4rem"
                                        },
                                        children: (0, l.jsx)(A.Xx, {
                                            i18n_default_text: " page."
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                nQ = (0, r.Pi)(() => {
                    let {
                        run_panel: e,
                        quick_strategy: t,
                        summary_card: a
                    } = (0, p.oR)(), {
                        is_contract_dialog_open: s,
                        is_stop_bot_dialog_open: n,
                        toggleStopBotDialog: i
                    } = t, {
                        is_running: r,
                        closeMultiplierContract: o,
                        stopMyBot: d,
                        is_dialog_open: c
                    } = e, {
                        is_multiplier: _
                    } = a;
                    return (0, l.jsx)(nJ, {
                        is_running: r,
                        onOkButtonClick: d,
                        is_contract_dialog_open: s,
                        is_stop_bot_dialog_open: n,
                        is_multiplier: _,
                        closeMultiplierContract: o,
                        is_dialog_open: c,
                        toggleStopBotDialog: i
                    })
                }),
                n0 = e => {
                    let {
                        popover_message: t,
                        button_id: a,
                        button_classname: s,
                        buttonOnClick: n,
                        icon: i,
                        button_text: r,
                        is_bot_running: o
                    } = e, d = (0, l.jsx)(ek.Z, {
                        id: a,
                        className: s,
                        has_effect: !0,
                        onClick: n,
                        icon: i,
                        green: !0,
                        children: r
                    });
                    return o ? d : (0, l.jsx)(B.Z, {
                        alignment: "bottom",
                        message: t,
                        should_disable_pointer_events: !0,
                        children: d
                    })
                };
            var n1 = a("52068"),
                n3 = a("62705"),
                n8 = a("81712"),
                n5 = a("66090"),
                n7 = a("87348"),
                n2 = a("79800"),
                n4 = a("70342"),
                n9 = a("48073"),
                n6 = a("80246"),
                le = a("83069");
            let lt = e => {
                    let {
                        popover_message: t,
                        icon: a
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(eH.Z, {
                            children: a
                        }), (0, l.jsx)(e9.Z, {
                            children: (0, l.jsx)(B.Z, {
                                alignment: "bottom",
                                message: t,
                                zIndex: String(t9.TOOLBAR),
                                should_disable_pointer_events: !0,
                                children: a
                            })
                        })]
                    })
                },
                la = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        toolbar: t,
                        load_modal: a,
                        save_modal: s
                    } = (0, p.oR)(), {
                        setPreviewOnPopup: n,
                        setChartModalVisibility: i,
                        setTradingViewModalVisibility: r
                    } = e, {
                        has_redo_stack: o,
                        has_undo_stack: d,
                        onResetClick: c,
                        onSortClick: _,
                        onUndoClick: u,
                        onZoomInOutClick: m
                    } = t, {
                        toggleSaveModal: x
                    } = s, {
                        toggleLoadModal: h
                    } = a, {
                        isDesktop: j
                    } = (0, v.F)();
                    return (0, l.jsx)("div", {
                        className: "toolbar__wrapper",
                        children: (0, l.jsxs)("div", {
                            className: "toolbar__group toolbar__group-btn",
                            "data-testid": "dt_toolbar_group_btn",
                            children: [(0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Reset"),
                                icon: (0, l.jsx)("span", {
                                    id: "db-toolbar__reset-button",
                                    className: "toolbar__icon",
                                    onClick: c,
                                    "data-testid": "dt_toolbar_reset_button",
                                    children: (0, l.jsx)(n1.Z, {})
                                })
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Import"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__import-button",
                                    "data-testid": "dt_toolbar_import_button",
                                    onClick: () => {
                                        n(!0), h(), (0, tK.m5)({
                                            subpage_name: "bot_builder",
                                            subform_source: "bot_builder",
                                            subform_name: "load_strategy",
                                            load_strategy_tab: "recent"
                                        })
                                    },
                                    children: (0, l.jsx)(n3.Z, {})
                                })
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Sort blocks"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__sort-button",
                                    "data-testid": "dt_toolbar_sort_button",
                                    onClick: _,
                                    children: (0, l.jsx)(n8.Z, {})
                                })
                            }), j && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "vertical-divider"
                                }), (0, l.jsx)(lt, {
                                    popover_message: (0, A.NC)("Charts"),
                                    icon: (0, l.jsx)("span", {
                                        className: "toolbar__icon",
                                        id: "db-toolbar__charts-button",
                                        onClick: () => i(),
                                        children: (0, l.jsx)(n5.Z, {})
                                    })
                                }), (0, l.jsx)(lt, {
                                    popover_message: (0, A.NC)("TradingView Chart"),
                                    icon: (0, l.jsx)("span", {
                                        className: "toolbar__icon",
                                        id: "db-toolbar__tradingview-button",
                                        onClick: () => r(),
                                        children: (0, l.jsx)(n7.Z, {})
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: "vertical-divider"
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Undo"),
                                icon: (0, l.jsx)("span", {
                                    className: R()("toolbar__icon undo", {
                                        "toolbar__icon--disabled": !d
                                    }),
                                    id: "db-toolbar__undo-button",
                                    "data-testid": "dt_toolbar_undo_button",
                                    onClick: () => u(!1),
                                    children: (0, l.jsx)(n2.Z, {})
                                })
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Redo"),
                                icon: (0, l.jsx)("span", {
                                    className: R()("toolbar__icon redo", {
                                        "toolbar__icon--disabled": !o
                                    }),
                                    id: "db-toolbar__redo-button",
                                    "data-testid": "dt_toolbar_redo_button",
                                    onClick: () => u(!0),
                                    children: (0, l.jsx)(n4.Z, {})
                                })
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Save"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__save-button",
                                    "data-testid": "dt_toolbar_save_button",
                                    onClick: x,
                                    children: (0, l.jsx)(n9.Z, {})
                                })
                            }), (0, l.jsx)("div", {
                                className: "vertical-divider"
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Zoom in"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__zoom-in-button",
                                    "data-testid": "dt_toolbar_zoom_in_button",
                                    onClick: () => m(!0),
                                    children: (0, l.jsx)(n6.Z, {})
                                })
                            }), (0, l.jsx)(lt, {
                                popover_message: (0, A.NC)("Zoom out"),
                                icon: (0, l.jsx)("span", {
                                    className: "toolbar__icon",
                                    id: "db-toolbar__zoom-out",
                                    "data-testid": "dt_toolbar_zoom_out_button",
                                    onClick: () => m(!1),
                                    children: (0, l.jsx)(le.Z, {})
                                })
                            })]
                        })
                    })
                }),
                ls = (0, r.Pi)(() => {
                    let {
                        run_panel: e,
                        toolbar: t,
                        quick_strategy: a
                    } = (0, p.oR)(), {
                        isDesktop: s
                    } = (0, v.F)(), {
                        is_dialog_open: n,
                        closeResetDialog: r,
                        onResetOkButtonClick: o
                    } = t, {
                        is_running: d
                    } = e, {
                        setFormVisibility: c
                    } = a, _ = d ? (0, A.NC)("Yes") : (0, A.NC)("OK"), u = d ? (0, A.NC)("No") : (0, A.NC)("Cancel");
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "toolbar dashboard__toolbar",
                            "data-testid": "dt_dashboard_toolbar",
                            children: (0, l.jsxs)("div", {
                                className: "toolbar__section",
                                children: [!s && (0, l.jsx)(n0, {
                                    popover_message: (0, A.NC)("Click here to start building your Deriv Bot."),
                                    button_id: "db-toolbar__get-started-button",
                                    button_classname: "toolbar__btn toolbar__btn--icon toolbar__btn--start",
                                    buttonOnClick: () => {
                                        c(!0), (0, tK.m5)({
                                            subpage_name: "bot_builder",
                                            subform_source: "bot_builder",
                                            subform_name: "quick_strategy"
                                        })
                                    },
                                    button_text: (0, A.NC)("Quick strategy"),
                                    is_bot_running: d
                                }), s && (0, l.jsx)(la, {})]
                            })
                        }), !s && (0, l.jsx)(la, {}), (0, l.jsx)(aB.Z, {
                            portal_element_id: "modal_root",
                            title: (0, A.NC)("Are you sure?"),
                            is_visible: n,
                            confirm_button_text: _,
                            onConfirm: o,
                            cancel_button_text: u,
                            onCancel: r,
                            is_mobile_full_width: !1,
                            className: "toolbar__dialog",
                            has_close_icon: !0,
                            children: d ? (0, l.jsx)(A.Xx, {
                                i18n_default_text: "The workspace will be reset to the default strategy and any unsaved changes will be lost. <0>Note: This will not affect your running bot.</0>",
                                components: [(0, l.jsx)("div", {
                                    className: "toolbar__dialog-text--second",
                                    "data-testid": "dt_toolbar_dialog_text_second"
                                }, 0)]
                            }) : (0, l.jsx)(A.Xx, {
                                i18n_default_text: "Any unsaved changes will be lost."
                            })
                        })]
                    })
                });
            var ln = a("88720"),
                ll = a("16232"),
                li = a("40877");
            let lr = (0, r.Pi)(e => {
                    let {
                        search: t,
                        is_search_loading: a,
                        onClick: s
                    } = e;
                    return t ? a ? (0, l.jsx)("div", {
                        className: "loader",
                        "data-testid": "loader"
                    }) : (0, l.jsx)(li.Z, {
                        onClick: s,
                        height: "18px",
                        width: "18px",
                        fill: "var(--text-general)"
                    }) : (0, l.jsx)(ll.Z, {
                        height: "20px",
                        width: "20px",
                        fill: "var(--text-general)"
                    })
                }),
                lo = e => {
                    let {
                        is_search_loading: t,
                        onSearch: a,
                        onSearchBlur: s,
                        onSearchClear: n,
                        onSearchKeyUp: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: "db-toolbox__search",
                        children: (0, l.jsx)(eI.J9, {
                            initialValues: {
                                search: ""
                            },
                            onSubmit: a,
                            children: e => {
                                let {
                                    submitForm: a,
                                    values: {
                                        search: r
                                    },
                                    setFieldValue: o
                                } = e;
                                return (0, l.jsx)(eI.l0, {
                                    children: (0, l.jsx)(eI.gN, {
                                        name: "search",
                                        children: e => {
                                            let {
                                                field: d
                                            } = e;
                                            return (0, l.jsx)(eX, { ...d,
                                                className: "db-toolbox__search-field",
                                                type: "text",
                                                name: "search",
                                                placeholder: (0, A.NC)("Search"),
                                                onKeyUp: () => i(a),
                                                onFocus: a,
                                                onBlur: s,
                                                leading_icon: (0, l.jsx)(lr, {
                                                    search: r,
                                                    is_search_loading: t,
                                                    onClick: () => n(o)
                                                })
                                            })
                                        }
                                    })
                                })
                            }
                        })
                    })
                };
            var ld = a("97762");
            let lc = e => {
                    let { ...t
                    } = e;
                    return i.createElement("arg", t)
                },
                l_ = e => {
                    let { ...t
                    } = e;
                    return i.createElement("block", t)
                },
                lu = e => {
                    let { ...t
                    } = e;
                    return i.createElement("category", t)
                },
                lm = e => {
                    let { ...t
                    } = e;
                    return i.createElement("example", t)
                },
                lx = e => {
                    let { ...t
                    } = e;
                    return i.createElement("examples", t)
                },
                lh = e => {
                    let { ...t
                    } = e;
                    return i.createElement("field", t)
                },
                lp = e => {
                    let { ...t
                    } = e;
                    return i.createElement("mutation", t)
                },
                lj = e => {
                    let { ...t
                    } = e;
                    return i.createElement("next", t)
                },
                lv = e => {
                    let { ...t
                    } = e;
                    return i.createElement("shadow", t)
                },
                lb = e => {
                    let { ...t
                    } = e;
                    return i.createElement("statement", t)
                },
                ly = e => {
                    let { ...t
                    } = e;
                    return i.createElement("value", t)
                },
                lg = e => {
                    let { ...t
                    } = e;
                    return i.createElement("xml", t)
                },
                lf = () => ld.renderToStaticMarkup((0, l.jsxs)(lg, {
                    xmlns: "http://www.w3.org/1999/xhtml",
                    id: "toolbox",
                    children: [(0, l.jsxs)(lu, {
                        id: "trade_parameters",
                        name: (0, A.NC)("Trade parameters"),
                        children: [(0, l.jsx)(l_, {
                            type: "trade_definition",
                            children: (0, l.jsx)(lb, {
                                name: "TRADE_OPTIONS",
                                children: (0, l.jsxs)(l_, {
                                    type: "trade_definition_market",
                                    deletable: "false",
                                    movable: "false",
                                    children: [(0, l.jsx)(lh, {
                                        name: "MARKET_LIST"
                                    }), (0, l.jsx)(lh, {
                                        name: "SUBMARKET_LIST"
                                    }), (0, l.jsx)(lh, {
                                        name: "SYMBOL_LIST"
                                    }), (0, l.jsx)(lj, {
                                        children: (0, l.jsxs)(l_, {
                                            type: "trade_definition_tradetype",
                                            deletable: "false",
                                            movable: "false",
                                            children: [(0, l.jsx)(lh, {
                                                name: "TRADETYPECAT_LIST"
                                            }), (0, l.jsx)(lh, {
                                                name: "TRADETYPE_LIST"
                                            }), (0, l.jsx)(lj, {
                                                children: (0, l.jsxs)(l_, {
                                                    type: "trade_definition_contracttype",
                                                    deletable: "false",
                                                    movable: "false",
                                                    children: [(0, l.jsx)(lh, {
                                                        name: "TYPE_LIST"
                                                    }), (0, l.jsx)(lj, {
                                                        children: (0, l.jsxs)(l_, {
                                                            type: "trade_definition_candleinterval",
                                                            deletable: "false",
                                                            movable: "false",
                                                            children: [(0, l.jsx)(lh, {
                                                                name: "CANDLEINTERVAL_LIST",
                                                                children: "60"
                                                            }), (0, l.jsx)(lj, {
                                                                children: (0, l.jsxs)(l_, {
                                                                    type: "trade_definition_restartbuysell",
                                                                    deletable: "false",
                                                                    movable: "false",
                                                                    children: [(0, l.jsx)(lh, {
                                                                        name: "TIME_MACHINE_ENABLED",
                                                                        children: "FALSE"
                                                                    }), (0, l.jsx)(lj, {
                                                                        children: (0, l.jsx)(l_, {
                                                                            type: "trade_definition_restartonerror",
                                                                            deletable: "false",
                                                                            movable: "false",
                                                                            children: (0, l.jsx)(lh, {
                                                                                name: "RESTARTONERROR",
                                                                                children: "TRUE"
                                                                            })
                                                                        })
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, l.jsxs)(l_, {
                            type: "trade_definition_tradeoptions",
                            children: [(0, l.jsx)(lp, {
                                has_first_barrier: "false",
                                has_second_barrier: "false",
                                has_prediction: "false"
                            }), (0, l.jsx)(lh, {
                                name: "DURATIONTYPE_LIST"
                            }), (0, l.jsx)(lh, {
                                name: "CURRENCY_LIST",
                                children: "USD"
                            }), (0, l.jsx)(ly, {
                                name: "DURATION",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            }), (0, l.jsx)(ly, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            }), (0, l.jsx)(lh, {
                                name: "AMOUNT_LIMITS"
                            })]
                        }), (0, l.jsxs)(l_, {
                            type: "trade_definition_multiplier",
                            children: [(0, l.jsx)(lh, {
                                name: "MULTIPLIERTYPE_LIST"
                            }), (0, l.jsx)(lh, {
                                name: "CURRENCY_LIST",
                                children: "USD"
                            }), (0, l.jsx)(ly, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            }), (0, l.jsx)(lh, {
                                name: "AMOUNT_LIMITS"
                            })]
                        }), (0, l.jsx)(l_, {
                            type: "multiplier_take_profit",
                            children: (0, l.jsx)(ly, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "0"
                                    })
                                })
                            })
                        }), (0, l.jsx)(l_, {
                            type: "multiplier_stop_loss",
                            children: (0, l.jsx)(ly, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "0"
                                    })
                                })
                            })
                        }), (0, l.jsxs)(l_, {
                            type: "trade_definition_accumulator",
                            children: [(0, l.jsx)(lh, {
                                name: "GROWTHRATE_LIST"
                            }), (0, l.jsx)(lh, {
                                name: "CURRENCY_LIST",
                                children: "USD"
                            }), (0, l.jsx)(ly, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "1"
                                    })
                                })
                            })]
                        }), (0, l.jsx)(l_, {
                            type: "accumulator_take_profit",
                            children: (0, l.jsx)(ly, {
                                name: "AMOUNT",
                                children: (0, l.jsx)(lv, {
                                    type: "math_number",
                                    children: (0, l.jsx)(lh, {
                                        name: "NUM",
                                        children: "0"
                                    })
                                })
                            })
                        })]
                    }), (0, l.jsxs)(lu, {
                        id: "purchase_conditions",
                        name: (0, A.NC)("Purchase conditions"),
                        children: [(0, l.jsx)(l_, {
                            type: "before_purchase"
                        }), (0, l.jsx)(l_, {
                            type: "purchase"
                        }), (0, l.jsx)(l_, {
                            type: "purchase_accumulator"
                        }), (0, l.jsx)(l_, {
                            type: "smart_even_odd"
                        }), (0, l.jsx)(l_, {
                            type: "smart_trend_trader"
                        }), (0, l.jsx)(l_, {
                            type: "smart_accumulator_trader"
                        }), (0, l.jsx)(l_, {
                            type: "smart_over_under"
                        }), (0, l.jsx)(l_, {
                            type: "smart_under_8_only"
                        }), (0, l.jsx)(l_, {
                            type: "smart_under_9_only"
                        }), (0, l.jsx)(l_, {
                            type: "multi_market_trend_trader"
                        })]
                    }), (0, l.jsxs)(lu, {
                        id: "sell_conditions",
                        name: (0, A.NC)("Sell conditions (optional)"),
                        children: [(0, l.jsx)(l_, {
                            type: "during_purchase"
                        }), (0, l.jsx)(l_, {
                            type: "sell_at_market"
                        })]
                    }), (0, l.jsxs)(lu, {
                        id: "trade_results",
                        name: (0, A.NC)("Restart trading conditions"),
                        children: [(0, l.jsx)(l_, {
                            type: "after_purchase"
                        }), (0, l.jsx)(l_, {
                            type: "trade_again"
                        })]
                    }), (0, l.jsxs)(lu, {
                        id: "analysis",
                        name: (0, A.NC)("Analysis"),
                        children: [(0, l.jsxs)(lu, {
                            id: "indicators",
                            name: (0, A.NC)("Indicators"),
                            children: [(0, l.jsx)(l_, {
                                type: "sma_statement",
                                children: (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "smaa_statement",
                                children: (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsxs)(l_, {
                                type: "bb_statement",
                                children: [(0, l.jsx)(lh, {
                                    name: "BBRESULT_LIST",
                                    children: "0"
                                }), (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsxs)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "std_dev_multiplier_up",
                                                        deletable: "false",
                                                        movable: "false",
                                                        children: [(0, l.jsx)(ly, {
                                                            name: "UPMULTIPLIER",
                                                            children: (0, l.jsx)(lv, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "NUM",
                                                                    children: "5"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(lj, {
                                                            children: (0, l.jsx)(l_, {
                                                                type: "std_dev_multiplier_down",
                                                                children: (0, l.jsx)(ly, {
                                                                    name: "DOWNMULTIPLIER",
                                                                    children: (0, l.jsx)(lv, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(lh, {
                                                                            name: "NUM",
                                                                            children: "5"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "bba_statement",
                                children: [(0, l.jsx)(lh, {
                                    name: "BBRESULT_LIST",
                                    children: "0"
                                }), (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsxs)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "std_dev_multiplier_up",
                                                        deletable: "false",
                                                        movable: "false",
                                                        children: [(0, l.jsx)(ly, {
                                                            name: "UPMULTIPLIER",
                                                            children: (0, l.jsx)(lv, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "NUM",
                                                                    children: "5"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(lj, {
                                                            children: (0, l.jsx)(l_, {
                                                                type: "std_dev_multiplier_down",
                                                                children: (0, l.jsx)(ly, {
                                                                    name: "DOWNMULTIPLIER",
                                                                    children: (0, l.jsx)(lv, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(lh, {
                                                                            name: "NUM",
                                                                            children: "5"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "ema_statement",
                                children: (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "emaa_statement",
                                children: (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "rsi_statement",
                                children: (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsx)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "rsia_statement",
                                children: (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), (0, l.jsxs)(l_, {
                                type: "macda_statement",
                                children: [(0, l.jsx)(lh, {
                                    name: "MACDFIELDS_LIST",
                                    children: "1"
                                }), (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST"
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsxs)(l_, {
                                                type: "fast_ema_period",
                                                deletable: "false",
                                                movable: "false",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "FAST_EMA_PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "12"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "slow_ema_period",
                                                        deletable: "false",
                                                        movable: "false",
                                                        children: [(0, l.jsx)(ly, {
                                                            name: "SLOW_EMA_PERIOD",
                                                            children: (0, l.jsx)(lv, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "NUM",
                                                                    children: "26"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(lj, {
                                                            children: (0, l.jsx)(l_, {
                                                                type: "signal_ema_period",
                                                                deletable: "false",
                                                                movable: "false",
                                                                children: (0, l.jsx)(ly, {
                                                                    name: "SIGNAL_EMA_PERIOD",
                                                                    children: (0, l.jsx)(lv, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(lh, {
                                                                            name: "NUM",
                                                                            children: "9"
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Tick and candle analysis"),
                            id: "tick_analysis",
                            children: [(0, l.jsx)(l_, {
                                type: "tick_analysis"
                            }), (0, l.jsx)(l_, {
                                type: "tick"
                            }), (0, l.jsx)(l_, {
                                type: "last_digit"
                            }), (0, l.jsx)(l_, {
                                type: "lastDigitWithMarket"
                            }), (0, l.jsx)(l_, {
                                type: "stat"
                            }), (0, l.jsx)(l_, {
                                type: "stat_list"
                            }), (0, l.jsx)(l_, {
                                type: "ticks"
                            }), (0, l.jsx)(l_, {
                                type: "lastDigitList"
                            }), (0, l.jsx)(l_, {
                                type: "lastDigitListWithMarket"
                            }), (0, l.jsx)(l_, {
                                type: "check_direction"
                            }), (0, l.jsx)(l_, {
                                type: "downtrend_detector"
                            }), (0, l.jsx)(l_, {
                                type: "is_candle_black"
                            }), (0, l.jsxs)(l_, {
                                type: "read_ohlc",
                                children: [(0, l.jsx)(lh, {
                                    name: "OHLCFIELD_LIST",
                                    children: "open"
                                }), (0, l.jsx)(lh, {
                                    name: "CANDLEINTERVAL_LIST",
                                    children: "default"
                                }), (0, l.jsx)(ly, {
                                    name: "CANDLEINDEX",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "read_ohlc_obj"
                            }), (0, l.jsx)(l_, {
                                type: "ohlc_values"
                            }), (0, l.jsx)(l_, {
                                type: "ohlc_values_in_list"
                            }), (0, l.jsxs)(l_, {
                                type: "get_ohlc",
                                children: [(0, l.jsx)(lh, {
                                    name: "CANDLEINTERVAL_LIST",
                                    children: "default"
                                }), (0, l.jsx)(ly, {
                                    name: "CANDLEINDEX",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "ohlc"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Contract"),
                            id: "contract_details",
                            children: [(0, l.jsx)(l_, {
                                type: "contract_check_result"
                            }), (0, l.jsx)(l_, {
                                type: "read_details"
                            }), (0, l.jsx)(l_, {
                                type: "sell_price"
                            }), (0, l.jsx)(l_, {
                                type: "check_sell"
                            }), (0, l.jsx)(l_, {
                                type: "payout"
                            }), (0, l.jsx)(l_, {
                                type: "ask_price"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Stats"),
                            id: "stats",
                            children: [(0, l.jsx)(l_, {
                                type: "balance"
                            }), (0, l.jsx)(l_, {
                                type: "total_profit"
                            }), (0, l.jsx)(l_, {
                                type: "total_runs"
                            }), (0, l.jsxs)(l_, {
                                type: "digit_percentage",
                                children: [(0, l.jsx)(ly, {
                                    name: "DIGIT_VALUE",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "5"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "TICK_COUNT",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)(lu, {
                        id: "utility",
                        name: (0, A.NC)("Utility"),
                        children: [(0, l.jsx)(lu, {
                            name: (0, A.NC)("Custom functions"),
                            id: "custom_functions",
                            dynamic: "PROCEDURE"
                        }), (0, l.jsx)(lu, {
                            name: (0, A.NC)("Variables"),
                            id: "variables",
                            dynamic: "VARIABLE"
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Markets"),
                            id: "markets",
                            children: [(0, l.jsx)(l_, {
                                type: "all_markets",
                                children: (0, l.jsx)(lh, {
                                    name: "MARKET_LIST",
                                    children: "disable"
                                })
                            }), (0, l.jsx)(l_, {
                                type: "index_markets",
                                children: (0, l.jsx)(lh, {
                                    name: "MARKET_LIST",
                                    children: "disable"
                                })
                            }), (0, l.jsx)(l_, {
                                type: "one_s_markets",
                                children: (0, l.jsx)(lh, {
                                    name: "MARKET_LIST",
                                    children: "disable"
                                })
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Notifications"),
                            id: "notifications",
                            children: [(0, l.jsx)(l_, {
                                type: "text_print",
                                children: (0, l.jsx)(ly, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "money8gg_print",
                                children: (0, l.jsx)(ly, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            }), (0, l.jsxs)(l_, {
                                type: "text_prompt_ext",
                                children: [(0, l.jsx)(lh, {
                                    name: "TYPE",
                                    children: "TEXT"
                                }), (0, l.jsx)(ly, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "notify",
                                children: [(0, l.jsx)(lh, {
                                    name: "NOTIFICATION_TYPE",
                                    children: "success"
                                }), (0, l.jsx)(ly, {
                                    name: "MESSAGE",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "money8gg_notify",
                                children: [(0, l.jsx)(lh, {
                                    name: "NOTIFICATION_TYPE",
                                    children: "success"
                                }), (0, l.jsx)(ly, {
                                    name: "MESSAGE",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "notify_telegram",
                                children: [(0, l.jsx)(ly, {
                                    name: "TELEGRAM_ACCESS_TOKEN",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "TELEGRAM_CHAT_ID",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "TELEGRAM_MESSAGE",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "smart_even_odd_notify"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Time"),
                            id: "time",
                            children: [(0, l.jsx)(l_, {
                                type: "epoch"
                            }), (0, l.jsx)(l_, {
                                type: "timeout"
                            }), (0, l.jsx)(l_, {
                                type: "tick_delay"
                            }), (0, l.jsx)(l_, {
                                type: "totimestamp",
                                children: (0, l.jsx)(ly, {
                                    name: "DATETIME",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "yyyy-mm-dd hh:mm:ss"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "todatetime",
                                children: (0, l.jsx)(ly, {
                                    name: "TIMESTAMP",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                })
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Math"),
                            id: "math",
                            children: [(0, l.jsx)(l_, {
                                type: "math_number"
                            }), (0, l.jsxs)(l_, {
                                type: "math_arithmetic",
                                children: [(0, l.jsx)(lh, {
                                    name: "OP",
                                    children: "ADD"
                                }), (0, l.jsx)(ly, {
                                    name: "A",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "B",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "math_single",
                                children: [(0, l.jsx)(lh, {
                                    name: "OP",
                                    children: "ROOT"
                                }), (0, l.jsx)(ly, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "9"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "math_trig",
                                children: [(0, l.jsx)(lh, {
                                    name: "OP",
                                    children: "SIN"
                                }), (0, l.jsx)(ly, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "45"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "math_constant"
                            }), (0, l.jsxs)(l_, {
                                type: "math_number_property",
                                children: [(0, l.jsx)(lp, {
                                    divisor_input: "false"
                                }), (0, l.jsx)(lh, {
                                    name: "PROPERTY",
                                    children: "EVEN"
                                }), (0, l.jsx)(ly, {
                                    name: "NUMBER_TO_CHECK",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "math_change",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "item"
                                }), (0, l.jsx)(ly, {
                                    name: "DELTA",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "math_on_list"
                            }), (0, l.jsxs)(l_, {
                                type: "math_round",
                                children: [(0, l.jsx)(lh, {
                                    name: "OP",
                                    children: "ROUND"
                                }), (0, l.jsx)(ly, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "3.1"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "math_modulo",
                                children: [(0, l.jsx)(ly, {
                                    name: "DIVIDEND",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "64"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "DIVISOR",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "math_constrain",
                                children: [(0, l.jsx)(ly, {
                                    name: "Value",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "50"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "LOW",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "HIGH",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "100"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "math_random_int",
                                children: [(0, l.jsx)(ly, {
                                    name: "FROM",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "TO",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "100"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "math_random_float"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Text"),
                            id: "text",
                            children: [(0, l.jsx)(l_, {
                                type: "text",
                                children: (0, l.jsx)(lh, {
                                    name: "TEXT",
                                    children: "abc"
                                })
                            }), (0, l.jsxs)(l_, {
                                type: "text_join",
                                children: [(0, l.jsx)(lh, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "text"
                                }), (0, l.jsx)(lb, {
                                    name: "STACK",
                                    children: (0, l.jsx)(l_, {
                                        type: "text_statement",
                                        movable: "false",
                                        children: (0, l.jsx)(ly, {
                                            name: "TEXT",
                                            children: (0, l.jsx)(lv, {
                                                type: "text",
                                                children: (0, l.jsx)(lh, {
                                                    name: "TEXT",
                                                    children: "abc"
                                                })
                                            })
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "text_append",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "text"
                                }), (0, l.jsx)(ly, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "text_length",
                                children: (0, l.jsx)(ly, {
                                    name: "Value",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "text_isEmpty",
                                children: (0, l.jsx)(ly, {
                                    name: "Value",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT"
                                        })
                                    })
                                })
                            }), (0, l.jsxs)(l_, {
                                type: "text_indexOf",
                                children: [(0, l.jsx)(lh, {
                                    name: "END",
                                    children: "FIRST"
                                }), (0, l.jsx)(ly, {
                                    name: "Value",
                                    children: (0, l.jsx)(l_, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "text"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "FIND",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "text_charAt",
                                children: [(0, l.jsx)(lp, {
                                    at: "true"
                                }), (0, l.jsx)(lh, {
                                    name: "WHERE",
                                    children: "FROM_START"
                                }), (0, l.jsx)(ly, {
                                    name: "Value",
                                    children: (0, l.jsx)(l_, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "item"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "AT",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number_positive",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "1"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "text_getSubstring",
                                children: [(0, l.jsx)(lp, {
                                    at1: "true",
                                    at2: "true"
                                }), (0, l.jsx)(lh, {
                                    name: "WHERE1",
                                    children: "FROM_START"
                                }), (0, l.jsx)(lh, {
                                    name: "WHERE2",
                                    children: "FROM_START"
                                }), (0, l.jsx)(ly, {
                                    name: "STRING",
                                    children: (0, l.jsx)(l_, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "text"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "AT1",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number_positive",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "AT2",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number_positive",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "2"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "text_changeCase",
                                children: [(0, l.jsx)(lh, {
                                    name: "CASE",
                                    children: "UPPERCASE"
                                }), (0, l.jsx)(ly, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)(l_, {
                                type: "text_trim",
                                children: [(0, l.jsx)(lh, {
                                    name: "MODE",
                                    children: "BOTH"
                                }), (0, l.jsx)(ly, {
                                    name: "TEXT",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Logic"),
                            id: "logic",
                            children: [(0, l.jsx)(l_, {
                                type: "controls_if"
                            }), (0, l.jsx)(l_, {
                                type: "logic_compare"
                            }), (0, l.jsx)(l_, {
                                type: "logic_operation"
                            }), (0, l.jsx)(l_, {
                                type: "logic_negate"
                            }), (0, l.jsx)(l_, {
                                type: "logic_boolean"
                            }), (0, l.jsx)(l_, {
                                type: "logic_null"
                            }), (0, l.jsx)(l_, {
                                type: "logic_ternary"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Lists"),
                            id: "lists",
                            children: [(0, l.jsxs)(l_, {
                                type: "lists_create_with",
                                children: [(0, l.jsx)(lh, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "list"
                                }), (0, l.jsx)(lb, {
                                    name: "STACK",
                                    children: (0, l.jsx)(l_, {
                                        type: "lists_statement",
                                        movable: "false",
                                        children: (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "lists_statement",
                                                movable: "false"
                                            })
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "lists_repeat",
                                children: (0, l.jsx)(ly, {
                                    name: "NUM",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "5"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "lists_length"
                            }), (0, l.jsx)(l_, {
                                type: "lists_isEmpty"
                            }), (0, l.jsx)(l_, {
                                type: "lists_indexOf"
                            }), (0, l.jsx)(l_, {
                                type: "lists_getIndex"
                            }), (0, l.jsx)(l_, {
                                type: "lists_setIndex"
                            }), (0, l.jsx)(l_, {
                                type: "lists_getSublist"
                            }), (0, l.jsxs)(l_, {
                                type: "lists_split",
                                children: [(0, l.jsx)(lp, {
                                    mode: "SPLIT"
                                }), (0, l.jsx)(lh, {
                                    name: "MODE",
                                    children: "SPLIT"
                                }), (0, l.jsx)(ly, {
                                    name: "DELIM",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: ","
                                        })
                                    })
                                })]
                            }), (0, l.jsx)(l_, {
                                type: "lists_sort"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Loops"),
                            id: "loops",
                            children: [(0, l.jsx)(l_, {
                                type: "controls_repeat"
                            }), (0, l.jsx)(l_, {
                                type: "controls_repeat_ext"
                            }), (0, l.jsx)(l_, {
                                type: "controls_whileUntil"
                            }), (0, l.jsx)(l_, {
                                type: "controls_for"
                            }), (0, l.jsx)(l_, {
                                type: "controls_forEach"
                            }), (0, l.jsx)(l_, {
                                type: "controls_flow_statements"
                            })]
                        }), (0, l.jsxs)(lu, {
                            name: (0, A.NC)("Miscellaneous"),
                            id: "misc",
                            children: [(0, l.jsx)(l_, {
                                type: "loader"
                            }), (0, l.jsx)(l_, {
                                type: "block_holder"
                            }), (0, l.jsx)(l_, {
                                type: "multiple_trades",
                                children: (0, l.jsx)(ly, {
                                    name: "TRADE_COUNT",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "5"
                                        })
                                    })
                                })
                            }), (0, l.jsx)(l_, {
                                type: "console",
                                children: (0, l.jsx)(ly, {
                                    name: "MESSAGE",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    })
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(lx, {
                        id: "examples",
                        children: [(0, l.jsx)(lm, {
                            id: "sell_available",
                            children: (0, l.jsx)(l_, {
                                type: "during_purchase",
                                children: (0, l.jsx)(lb, {
                                    name: "DURING_PURCHASE_STACK",
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(ly, {
                                            name: "IF0",
                                            children: (0, l.jsx)(l_, {
                                                type: "check_sell"
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO0",
                                            children: (0, l.jsx)(l_, {
                                                type: "sell_at_market"
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "trade_again",
                            children: (0, l.jsx)(l_, {
                                type: "after_purchase",
                                children: (0, l.jsx)(lb, {
                                    name: "AFTERPURCHASE_STACK",
                                    children: (0, l.jsx)(l_, {
                                        type: "controls_if",
                                        children: (0, l.jsx)(ly, {
                                            name: "IF0",
                                            children: (0, l.jsxs)(l_, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(ly, {
                                                    name: "A",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "total_profit"
                                                    })
                                                }), (0, l.jsx)(ly, {
                                                    name: "B",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "target_profit"
                                                        })
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "sma_block_example",
                            children: (0, l.jsxs)(l_, {
                                type: "sma_statement",
                                children: [(0, l.jsx)(lh, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "sma"
                                }), (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST",
                                            children: (0, l.jsxs)(l_, {
                                                type: "ohlc_values",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OHLCFIELD_LIST",
                                                    children: "open"
                                                }), (0, l.jsx)(lh, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                })]
                                            })
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "sma_array",
                            children: (0, l.jsxs)(l_, {
                                type: "smaa_statement",
                                children: [(0, l.jsx)(lh, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "smaa"
                                }), (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsx)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "sma_block_example_1",
                            children: (0, l.jsxs)(l_, {
                                type: "sma_statement",
                                children: [(0, l.jsx)(lh, {
                                    name: "VARIABLE",
                                    variabletype: "",
                                    children: "sma"
                                }), (0, l.jsx)(lb, {
                                    name: "STATEMENT",
                                    children: (0, l.jsxs)(l_, {
                                        type: "input_list",
                                        deletable: "false",
                                        movable: "false",
                                        children: [(0, l.jsx)(ly, {
                                            name: "INPUT_LIST",
                                            children: (0, l.jsx)(l_, {
                                                type: "ticks"
                                            })
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsx)(l_, {
                                                type: "period",
                                                deletable: "false",
                                                movable: "false",
                                                children: (0, l.jsx)(ly, {
                                                    name: "PERIOD",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "in_candle_list_read",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "op"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(l_, {
                                        type: "read_ohlc",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(lh, {
                                            name: "CANDLEINTERVAL_LIST",
                                            children: "default"
                                        }), (0, l.jsx)(ly, {
                                            name: "CANDLEINDEX",
                                            children: (0, l.jsx)(lv, {
                                                type: "math_number",
                                                children: (0, l.jsx)(lh, {
                                                    name: "NUM",
                                                    children: "1"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "read_candle_value",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "op"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(l_, {
                                        type: "read_ohlc_obj",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(ly, {
                                            name: "OHLCOBJ",
                                            children: (0, l.jsxs)(l_, {
                                                type: "read_ohlc",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OHLCFIELD_LIST",
                                                    children: "open"
                                                }), (0, l.jsx)(lh, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                }), (0, l.jsx)(ly, {
                                                    name: "CANDLEINDEX",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "1"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "candle_list",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "candle_list"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(l_, {
                                        type: "ohlc_values",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(lh, {
                                            name: "CANDLEINTERVAL_LIST",
                                            children: "default"
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "candle_list_1",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "cl"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(l_, {
                                        type: "ohlc_values_in_list",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(ly, {
                                            name: "OHLCLIST",
                                            children: (0, l.jsx)(l_, {
                                                type: "ohlc",
                                                children: (0, l.jsx)(lh, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "get_candle",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "candle_open_price"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(l_, {
                                        type: "read_ohlc_obj",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OHLCFIELD_LIST",
                                            children: "epoch"
                                        }), (0, l.jsx)(ly, {
                                            name: "OHLCOBJ",
                                            children: (0, l.jsxs)(l_, {
                                                type: "get_ohlc",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "CANDLEINTERVAL_LIST",
                                                    children: "default"
                                                }), (0, l.jsx)(ly, {
                                                    name: "CANDLEINDEX",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "2"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "check_result",
                            children: (0, l.jsx)(l_, {
                                type: "after_purchase",
                                children: (0, l.jsx)(lb, {
                                    name: "AFTERPURCHASE_STACK",
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(ly, {
                                            name: "IF0",
                                            children: (0, l.jsx)(l_, {
                                                type: "contract_check_result",
                                                children: (0, l.jsx)(lh, {
                                                    name: "CHECK_RESULT",
                                                    children: "win"
                                                })
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO0",
                                            children: (0, l.jsx)(l_, {
                                                type: "trade_again"
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "sell_pl",
                            children: (0, l.jsx)(l_, {
                                type: "during_purchase",
                                children: (0, l.jsx)(lb, {
                                    name: "DURING_PURCHASE_STACK",
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(ly, {
                                            name: "IF0",
                                            children: (0, l.jsx)(l_, {
                                                type: "check_sell"
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO0",
                                            children: (0, l.jsxs)(l_, {
                                                type: "controls_if",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "IF0",
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "logic_compare",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "OP",
                                                            children: "EQ"
                                                        }), (0, l.jsx)(ly, {
                                                            name: "A",
                                                            children: (0, l.jsx)(l_, {
                                                                type: "sell_price"
                                                            })
                                                        }), (0, l.jsx)(ly, {
                                                            name: "B",
                                                            children: (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "stake"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), (0, l.jsx)(lb, {
                                                    name: "DO0",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "sell_at_market"
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "if-return",
                            children: (0, l.jsxs)(l_, {
                                type: "procedures_defreturn",
                                children: [(0, l.jsx)(lp, {
                                    children: (0, l.jsx)(lc, {
                                        name: "x"
                                    })
                                }), (0, l.jsx)(lh, {
                                    name: "NAME",
                                    children: "do something"
                                }), (0, l.jsx)(lb, {
                                    name: "STACK",
                                    children: (0, l.jsxs)(l_, {
                                        type: "procedures_ifreturn",
                                        children: [(0, l.jsx)(lp, {
                                            value: "1"
                                        }), (0, l.jsx)(ly, {
                                            name: "CONDITION",
                                            children: (0, l.jsxs)(l_, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(ly, {
                                                    name: "A",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                }), (0, l.jsx)(ly, {
                                                    name: "B",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(ly, {
                                            name: "VALUE",
                                            children: (0, l.jsx)(l_, {
                                                type: "text",
                                                children: (0, l.jsx)(lh, {
                                                    name: "TEXT",
                                                    children: "x must be positive or zero"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "RETURN",
                                    children: (0, l.jsxs)(l_, {
                                        type: "math_single",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OP",
                                            children: "ROOT"
                                        }), (0, l.jsxs)(ly, {
                                            name: "NUM",
                                            children: [(0, l.jsx)(lv, {
                                                type: "math_number",
                                                children: (0, l.jsx)(lh, {
                                                    name: "NUM",
                                                    children: "9"
                                                })
                                            }), (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "x"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "notify_telegram",
                            children: (0, l.jsxs)(l_, {
                                type: "notify_telegram",
                                children: [(0, l.jsxs)(ly, {
                                    name: "TELEGRAM_ACCESS_TOKEN",
                                    children: [(0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT"
                                        })
                                    }), (0, l.jsx)(l_, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "access_token"
                                        })
                                    })]
                                }), (0, l.jsxs)(ly, {
                                    name: "TELEGRAM_CHAT_ID",
                                    children: [(0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT"
                                        })
                                    }), (0, l.jsx)(l_, {
                                        type: "variables_get",
                                        children: (0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "chat_id"
                                        })
                                    })]
                                }), (0, l.jsx)(ly, {
                                    name: "TELEGRAM_MESSAGE",
                                    children: (0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "Enjoy!"
                                        })
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "epoch",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "candle"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsxs)(l_, {
                                        type: "read_ohlc",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OHLCFIELD_LIST",
                                            children: "open"
                                        }), (0, l.jsx)(lh, {
                                            name: "CANDLEINTERVAL_LIST",
                                            children: "default"
                                        }), (0, l.jsx)(ly, {
                                            name: "CANDLEINDEX",
                                            children: (0, l.jsx)(lv, {
                                                type: "math_number",
                                                children: (0, l.jsx)(lh, {
                                                    name: "NUM",
                                                    children: "1"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(lj, {
                                    children: (0, l.jsxs)(l_, {
                                        type: "variables_set",
                                        children: [(0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "Open Time"
                                        }), (0, l.jsx)(ly, {
                                            name: "VALUE",
                                            children: (0, l.jsxs)(l_, {
                                                type: "read_ohlc_obj",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OHLCFIELD_LIST",
                                                    children: "epoch"
                                                }), (0, l.jsx)(ly, {
                                                    name: "OHLCOBJ",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "candle"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsxs)(l_, {
                                                type: "variables_set",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "Open Time"
                                                }), (0, l.jsx)(ly, {
                                                    name: "VALUE",
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "math_arithmetic",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "OP",
                                                            children: "MINUS"
                                                        }), (0, l.jsxs)(ly, {
                                                            name: "A",
                                                            children: [(0, l.jsx)(lv, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "NUM",
                                                                    children: "1"
                                                                })
                                                            }), (0, l.jsx)(l_, {
                                                                type: "epoch"
                                                            })]
                                                        }), (0, l.jsxs)(ly, {
                                                            name: "B",
                                                            children: [(0, l.jsx)(lv, {
                                                                type: "math_number",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "NUM",
                                                                    children: "1"
                                                                })
                                                            }), (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "Open Time"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsx)(l_, {
                                                        type: "controls_if",
                                                        children: (0, l.jsx)(ly, {
                                                            name: "IF0",
                                                            children: (0, l.jsxs)(l_, {
                                                                type: "logic_compare",
                                                                children: [(0, l.jsx)(lh, {
                                                                    name: "OP",
                                                                    children: "GTE"
                                                                }), (0, l.jsx)(ly, {
                                                                    name: "A",
                                                                    children: (0, l.jsx)(l_, {
                                                                        type: "variables_get",
                                                                        children: (0, l.jsx)(lh, {
                                                                            name: "VAR",
                                                                            variabletype: "",
                                                                            children: "Time Since Candle Opened"
                                                                        })
                                                                    })
                                                                }), (0, l.jsx)(ly, {
                                                                    name: "B",
                                                                    children: (0, l.jsx)(l_, {
                                                                        type: "math_number",
                                                                        children: (0, l.jsx)(lh, {
                                                                            name: "NUM",
                                                                            children: "30"
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "totimestamp",
                            children: (0, l.jsx)(l_, {
                                type: "before_purchase",
                                children: (0, l.jsx)(lb, {
                                    name: "BEFOREPURCHASE_STACK",
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_if",
                                        children: [(0, l.jsx)(ly, {
                                            name: "IF0",
                                            children: (0, l.jsxs)(l_, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(ly, {
                                                    name: "A",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "epoch"
                                                    })
                                                }), (0, l.jsx)(ly, {
                                                    name: "B",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "totimestamp",
                                                        children: (0, l.jsx)(ly, {
                                                            name: "DATETIME",
                                                            children: (0, l.jsx)(lv, {
                                                                type: "text",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "TEXT",
                                                                    children: "1957-08-31 00:00:00"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO0",
                                            children: (0, l.jsx)(l_, {
                                                type: "purchase",
                                                children: (0, l.jsx)(lh, {
                                                    name: "PURCHASE_LIST",
                                                    children: "CALL"
                                                })
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "todatetime",
                            children: (0, l.jsxs)(l_, {
                                type: "notify",
                                children: [(0, l.jsx)(lh, {
                                    name: "NOTIFICATION_TYPE",
                                    children: "success"
                                }), (0, l.jsx)(lh, {
                                    name: "NOTIFICATION_SOUND",
                                    children: "silent"
                                }), (0, l.jsxs)(ly, {
                                    name: "MESSAGE",
                                    children: [(0, l.jsx)(lv, {
                                        type: "text",
                                        children: (0, l.jsx)(lh, {
                                            name: "TEXT",
                                            children: "abc"
                                        })
                                    }), (0, l.jsx)(l_, {
                                        type: "todatetime",
                                        children: (0, l.jsxs)(ly, {
                                            name: "TIMESTAMP",
                                            children: [(0, l.jsx)(lv, {
                                                type: "math_number",
                                                children: (0, l.jsx)(lh, {
                                                    name: "NUM",
                                                    children: "0"
                                                })
                                            }), (0, l.jsx)(l_, {
                                                type: "epoch"
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "constrain",
                            children: (0, l.jsxs)(l_, {
                                type: "math_constrain",
                                children: [(0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(l_, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "5"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "LOW",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "HIGH",
                                    children: (0, l.jsx)(lv, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "20"
                                        })
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "controls_if",
                            children: (0, l.jsxs)(l_, {
                                type: "controls_if",
                                children: [(0, l.jsx)(lp, {
                                    elseif: "1",
                                    else: "1"
                                }), (0, l.jsx)(ly, {
                                    name: "IF0",
                                    children: (0, l.jsxs)(l_, {
                                        type: "logic_compare",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OP",
                                            children: "EQ"
                                        }), (0, l.jsx)(ly, {
                                            name: "A",
                                            children: (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var1"
                                                })
                                            })
                                        }), (0, l.jsx)(ly, {
                                            name: "B",
                                            children: (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var2"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "IF1",
                                    children: (0, l.jsxs)(l_, {
                                        type: "logic_compare",
                                        children: [(0, l.jsx)(lh, {
                                            name: "OP",
                                            children: "EQ"
                                        }), (0, l.jsx)(ly, {
                                            name: "A",
                                            children: (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var3"
                                                })
                                            })
                                        }), (0, l.jsx)(ly, {
                                            name: "B",
                                            children: (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "var4"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "compare_logic",
                            children: (0, l.jsx)(l_, {
                                type: "logic_compare",
                                children: (0, l.jsx)(lh, {
                                    name: "OP",
                                    children: "EQ"
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "compare_logic_1",
                            children: (0, l.jsx)(l_, {
                                type: "logic_operation",
                                children: (0, l.jsx)(lh, {
                                    name: "OP",
                                    children: "AND"
                                })
                            })
                        }), (0, l.jsx)(lm, {
                            id: "repeat_while",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(l_, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                }), (0, l.jsx)(lj, {
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_whileUntil",
                                        children: [(0, l.jsx)(lh, {
                                            name: "MODE",
                                            children: "WHILE"
                                        }), (0, l.jsx)(ly, {
                                            name: "BOOL",
                                            children: (0, l.jsxs)(l_, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OP",
                                                    children: "LTE"
                                                }), (0, l.jsx)(ly, {
                                                    name: "A",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                }), (0, l.jsx)(ly, {
                                                    name: "B",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO",
                                            children: (0, l.jsxs)(l_, {
                                                type: "math_change",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "x"
                                                }), (0, l.jsx)(ly, {
                                                    name: "DELTA",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "1"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsxs)(ly, {
                                                            name: "MESSAGE",
                                                            children: [(0, l.jsx)(lv, {
                                                                type: "text",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            }), (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "repeat_until",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(l_, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "20"
                                        })
                                    })
                                }), (0, l.jsx)(lj, {
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_whileUntil",
                                        children: [(0, l.jsx)(lh, {
                                            name: "MODE",
                                            children: "UNTIL"
                                        }), (0, l.jsx)(ly, {
                                            name: "BOOL",
                                            children: (0, l.jsxs)(l_, {
                                                type: "logic_compare",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "OP",
                                                    children: "EQ"
                                                }), (0, l.jsx)(ly, {
                                                    name: "A",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        })
                                                    })
                                                }), (0, l.jsx)(ly, {
                                                    name: "B",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "10"
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO",
                                            children: (0, l.jsxs)(l_, {
                                                type: "math_change",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "x"
                                                }), (0, l.jsx)(ly, {
                                                    name: "DELTA",
                                                    children: (0, l.jsx)(lv, {
                                                        type: "math_number",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "NUM",
                                                            children: "-1"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsxs)(ly, {
                                                            name: "MESSAGE",
                                                            children: [(0, l.jsx)(lv, {
                                                                type: "text",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            }), (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "controls_for",
                            children: (0, l.jsxs)(l_, {
                                type: "controls_for",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "i"
                                }), (0, l.jsx)(ly, {
                                    name: "FROM",
                                    children: (0, l.jsx)(l_, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "0"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "TO",
                                    children: (0, l.jsx)(l_, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "10"
                                        })
                                    })
                                }), (0, l.jsx)(ly, {
                                    name: "BY",
                                    children: (0, l.jsx)(l_, {
                                        type: "math_number",
                                        children: (0, l.jsx)(lh, {
                                            name: "NUM",
                                            children: "2"
                                        })
                                    })
                                }), (0, l.jsx)(lb, {
                                    name: "DO",
                                    children: (0, l.jsxs)(l_, {
                                        type: "notify",
                                        children: [(0, l.jsx)(lh, {
                                            name: "NOTIFICATION_TYPE",
                                            children: "success"
                                        }), (0, l.jsx)(lh, {
                                            name: "NOTIFICATION_SOUND",
                                            children: "silent"
                                        }), (0, l.jsxs)(ly, {
                                            name: "MESSAGE",
                                            children: [(0, l.jsx)(lv, {
                                                type: "text",
                                                children: (0, l.jsx)(lh, {
                                                    name: "TEXT",
                                                    children: "abc"
                                                })
                                            }), (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "i"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "controls_forEach",
                            children: (0, l.jsxs)(l_, {
                                type: "lists_create_with",
                                children: [(0, l.jsx)(lh, {
                                    name: "VARIABLE",
                                    children: "list"
                                }), (0, l.jsx)(lb, {
                                    name: "STACK",
                                    children: (0, l.jsxs)(l_, {
                                        type: "lists_statement",
                                        children: [(0, l.jsx)(ly, {
                                            name: "VALUE",
                                            children: (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "item1"
                                                })
                                            })
                                        }), (0, l.jsx)(lj, {
                                            children: (0, l.jsxs)(l_, {
                                                type: "lists_statement",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "VALUE",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "item2"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsx)(l_, {
                                                        type: "lists_statement",
                                                        children: (0, l.jsx)(ly, {
                                                            name: "VALUE",
                                                            children: (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "item3"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(lj, {
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_forEach",
                                        children: [(0, l.jsx)(lh, {
                                            name: "VAR",
                                            variabletype: "",
                                            children: "i"
                                        }), (0, l.jsx)(ly, {
                                            name: "LIST",
                                            children: (0, l.jsx)(l_, {
                                                type: "variables_get",
                                                children: (0, l.jsx)(lh, {
                                                    name: "VAR",
                                                    variabletype: "",
                                                    children: "list"
                                                })
                                            })
                                        }), (0, l.jsx)(lb, {
                                            name: "DO",
                                            children: (0, l.jsxs)(l_, {
                                                type: "notify",
                                                children: [(0, l.jsx)(lh, {
                                                    name: "NOTIFICATION_TYPE",
                                                    children: "success"
                                                }), (0, l.jsx)(lh, {
                                                    name: "NOTIFICATION_SOUND",
                                                    children: "silent"
                                                }), (0, l.jsxs)(ly, {
                                                    name: "MESSAGE",
                                                    children: [(0, l.jsx)(lv, {
                                                        type: "text",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "TEXT",
                                                            children: "abc"
                                                        })
                                                    }), (0, l.jsx)(l_, {
                                                        type: "variables_get",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "i"
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "break_out",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(l_, {
                                        type: "logic_boolean",
                                        children: (0, l.jsx)(lh, {
                                            name: "BOOL",
                                            children: "TRUE"
                                        })
                                    })
                                }), (0, l.jsx)(lj, {
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_repeat",
                                        children: [(0, l.jsx)(lh, {
                                            name: "TIMES",
                                            children: "10"
                                        }), (0, l.jsx)(lb, {
                                            name: "DO",
                                            children: (0, l.jsxs)(l_, {
                                                type: "controls_if",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "IF0",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "logic_negate",
                                                        children: (0, l.jsx)(ly, {
                                                            name: "BOOL",
                                                            children: (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })
                                                        })
                                                    })
                                                }), (0, l.jsx)(lb, {
                                                    name: "DO0",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "controls_flow_statements",
                                                        children: (0, l.jsx)(lh, {
                                                            name: "FLOW",
                                                            children: "BREAK"
                                                        })
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsx)(ly, {
                                                            name: "MESSAGE",
                                                            children: (0, l.jsx)(lv, {
                                                                type: "text",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)(lm, {
                            id: "continue",
                            children: (0, l.jsxs)(l_, {
                                type: "variables_set",
                                children: [(0, l.jsx)(lh, {
                                    name: "VAR",
                                    variabletype: "",
                                    children: "x"
                                }), (0, l.jsx)(ly, {
                                    name: "VALUE",
                                    children: (0, l.jsx)(l_, {
                                        type: "logic_boolean",
                                        children: (0, l.jsx)(lh, {
                                            name: "BOOL",
                                            children: "FALSE"
                                        })
                                    })
                                }), (0, l.jsx)(lj, {
                                    children: (0, l.jsxs)(l_, {
                                        type: "controls_repeat",
                                        children: [(0, l.jsx)(lh, {
                                            name: "TIMES",
                                            children: "10"
                                        }), (0, l.jsx)(lb, {
                                            name: "DO",
                                            children: (0, l.jsxs)(l_, {
                                                type: "controls_if",
                                                children: [(0, l.jsx)(ly, {
                                                    name: "IF0",
                                                    children: (0, l.jsx)(l_, {
                                                        type: "logic_negate",
                                                        children: (0, l.jsx)(ly, {
                                                            name: "BOOL",
                                                            children: (0, l.jsx)(l_, {
                                                                type: "variables_get",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "VAR",
                                                                    variabletype: "",
                                                                    children: "x"
                                                                })
                                                            })
                                                        })
                                                    })
                                                }), (0, l.jsx)(lb, {
                                                    name: "DO0",
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "variables_set",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "VAR",
                                                            variabletype: "",
                                                            children: "x"
                                                        }), (0, l.jsx)(ly, {
                                                            name: "VALUE",
                                                            children: (0, l.jsx)(l_, {
                                                                type: "logic_boolean",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "BOOL",
                                                                    children: "TRUE"
                                                                })
                                                            })
                                                        }), (0, l.jsx)(lj, {
                                                            children: (0, l.jsx)(l_, {
                                                                type: "controls_flow_statements",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "FLOW",
                                                                    children: "CONTINUE"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                }), (0, l.jsx)(lj, {
                                                    children: (0, l.jsxs)(l_, {
                                                        type: "notify",
                                                        children: [(0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_TYPE",
                                                            children: "success"
                                                        }), (0, l.jsx)(lh, {
                                                            name: "NOTIFICATION_SOUND",
                                                            children: "silent"
                                                        }), (0, l.jsx)(ly, {
                                                            name: "MESSAGE",
                                                            children: (0, l.jsx)(lv, {
                                                                type: "text",
                                                                children: (0, l.jsx)(lh, {
                                                                    name: "TEXT",
                                                                    children: "abc"
                                                                })
                                                            })
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    })]
                })),
                lN = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, v.F)(), {
                        toolbox: t,
                        flyout: a,
                        quick_strategy: s
                    } = (0, p.oR)(), {
                        hasSubCategory: n,
                        is_search_loading: r,
                        onMount: o,
                        onSearch: d,
                        onSearchBlur: c,
                        onSearchClear: _,
                        onSearchKeyUp: u,
                        onToolboxItemClick: m,
                        onToolboxItemExpand: x,
                        onUnmount: h,
                        sub_category_index: j,
                        toolbox_dom: b
                    } = t, {
                        setFormVisibility: y
                    } = s, {
                        setVisibility: g,
                        selected_category: f
                    } = a, N = i.useRef(lf()), [C, w] = i.useState(!0);
                    return (i.useEffect(() => (o(N), () => h()), []), e) ? (0, l.jsxs)("div", {
                        className: "db-toolbox",
                        "data-testid": "dashboard__toolbox",
                        children: [(0, l.jsx)(n0, {
                            popover_message: (0, A.NC)("Click here to start building your Deriv Bot."),
                            button_id: "db-toolbar__get-started-button",
                            button_classname: "toolbar__btn toolbar__btn--icon toolbar__btn--start",
                            buttonOnClick: () => {
                                y(!0), (0, tK.m5)({
                                    subpage_name: "bot_builder",
                                    subform_source: "bot_builder",
                                    subform_name: "quick_strategy"
                                })
                            },
                            button_text: (0, A.NC)("Quick strategy")
                        }), (0, l.jsxs)("div", {
                            id: "gtm-toolbox",
                            className: "db-toolbox__content",
                            children: [(0, l.jsx)("div", {
                                className: "db-toolbox__header",
                                children: (0, l.jsxs)("div", {
                                    className: "db-toolbox__title",
                                    "data-testid": "db-toolbox__title",
                                    onClick: () => {
                                        w(!C), g(!1)
                                    },
                                    children: [(0, A.NC)("Blocks menu"), (0, l.jsx)("span", {
                                        className: R()("db-toolbox__title__chevron", {
                                            "db-toolbox__title__chevron--active": C
                                        }),
                                        children: (0, l.jsx)(ln.Z, {
                                            fill: "var(--text-general)"
                                        })
                                    })]
                                })
                            }), (0, l.jsxs)("div", {
                                className: R()("db-toolbox__content-wrapper", {
                                    active: C
                                }),
                                "data-testid": "db-toolbox__content-wrapper",
                                children: [(0, l.jsx)(lo, {
                                    is_search_loading: r,
                                    onSearch: d,
                                    onSearchBlur: c,
                                    onSearchClear: _,
                                    onSearchKeyUp: u
                                }), (0, l.jsx)("div", {
                                    className: "db-toolbox__category-menu",
                                    children: b && Array.from(b.childNodes).map((e, t) => {
                                        if ("CATEGORY" === e.tagName.toUpperCase()) {
                                            let a = n(e.children),
                                                s = j.includes(t);
                                            return (0, l.jsxs)("div", {
                                                className: R()("db-toolbox__row", {
                                                    "db-toolbox__row--active": (null == f ? void 0 : f.getAttribute("id")) === (null == e ? void 0 : e.id)
                                                }),
                                                children: [(0, l.jsx)("div", {
                                                    className: "db-toolbox__item",
                                                    onClick: () => {
                                                        a ? x(t) : m(e)
                                                    },
                                                    children: (0, l.jsxs)("div", {
                                                        className: "db-toolbox__category-text",
                                                        children: [(0, l.jsx)("div", {
                                                            className: "db-toolbox__label",
                                                            children: (0, A.NC)(e.getAttribute("name"))
                                                        }), a && (0, l.jsx)("div", {
                                                            className: R()("db-toolbox__category-arrow", {
                                                                "db-toolbox__category-arrow--active": s
                                                            }),
                                                            children: (0, l.jsx)(ln.Z, {
                                                                fill: "var(--text-general)"
                                                            })
                                                        })]
                                                    })
                                                }), a && s && Array.from(e.childNodes).map(e => (0, l.jsx)("div", {
                                                    className: R()("db-toolbox__sub-category-row", {
                                                        "db-toolbox__sub-category-row--active": (null == f ? void 0 : f.getAttribute("id")) === (null == e ? void 0 : e.id)
                                                    }),
                                                    onClick: () => {
                                                        m(e)
                                                    },
                                                    children: (0, l.jsx)(K.Z, {
                                                        size: "xxs",
                                                        children: e.getAttribute("name")
                                                    })
                                                }, `db-toolbox__sub-category-row--${e.getAttribute("id")}`))]
                                            }, `db-toolbox__row--${e.getAttribute("id")}`)
                                        }
                                        return null
                                    })
                                })]
                            })]
                        })]
                    }) : null
                }),
                lC = (0, r.Pi)(() => {
                    var e;
                    let {
                        blockly_store: t
                    } = (0, p.oR)(), {
                        onMount: a,
                        onUnmount: s,
                        is_loading: n
                    } = t;
                    return (i.useEffect(() => (a(), () => {
                        s()
                    }), []), n) ? null : (null === (e = window.Blockly) || void 0 === e ? void 0 : e.derivWorkspace) ? (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)(lN, {}), (0, l.jsx)(ls, {}), (0, l.jsx)(nK, {}), (0, l.jsx)(nQ, {})]
                    }) : null
                }),
                lw = (0, r.Pi)(() => {
                    let {
                        dashboard: e,
                        app: t,
                        run_panel: a,
                        toolbar: s,
                        quick_strategy: n,
                        blockly_store: r
                    } = (0, p.oR)(), {
                        active_tab: o,
                        active_tour: d,
                        is_preview_on_popup: c
                    } = e, {
                        is_open: _
                    } = n, {
                        is_running: u
                    } = a, {
                        is_loading: m
                    } = r, x = i.useRef(!1), h = i.useRef(!1), {
                        isDesktop: j
                    } = (0, v.F)(), {
                        onMount: b,
                        onUnmount: y
                    } = t, g = i.useRef(null), f = null;
                    i.useEffect(() => (b(), () => y()), [b, y]), i.useEffect(() => {
                        var e;
                        let t = null === (e = window.Blockly) || void 0 === e ? void 0 : e.derivWorkspace;
                        return t && u && !x.current ? (x.current = !0, t.addChangeListener(N)) : C(), () => {
                            t && x.current && C()
                        }
                    }, [u]);
                    let N = e => {
                            let {
                                is_reset_button_clicked: t
                            } = s;
                            "selected" === e.type || t ? t && C() : ((0, az.J)((0, aP.xG)().workspace_change), C())
                        },
                        C = () => {
                            var e, t;
                            x.current = !1, null === (t = window.Blockly) || void 0 === t || null === (e = t.derivWorkspace) || void 0 === e || e.removeChangeListener(N)
                        };
                    i.useEffect(() => {
                        var e;
                        let t = null === (e = window.Blockly) || void 0 === e ? void 0 : e.derivWorkspace;
                        t && !h.current && (h.current = !0, t.addChangeListener(w))
                    }, [m]);
                    let w = e => {
                            let {
                                is_reset_button_clicked: t,
                                setResetButtonState: a
                            } = s;
                            if ("undo" === e.type) {
                                f = null;
                                return
                            }
                            "delete" === e.type && !t && (f = e.blockId), "selected" === e.type && f === e.oldElementId && (k(), f = null), "change" === e.type && "AMOUNT_LIMITS" === e.name && "(min: 0.35 - max: 50000)" === e.newValue && t && a(!1)
                        },
                        k = () => {
                            (0, az.J)((0, aP.xG)().block_delete, {
                                label: (0, A.NC)("Undo"),
                                onClick: e => {
                                    window.Blockly.derivWorkspace.undo(), null == e || e()
                                }
                            })
                        };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: R()("bot-builder", {
                                "bot-builder--active": o === eO.ve.BOT_BUILDER && !c,
                                "bot-builder--inactive": c,
                                "bot-builder--tour-active": d
                            }),
                            children: (0, l.jsx)("div", {
                                id: "scratch_div",
                                ref: g,
                                children: (0, l.jsx)(lC, {})
                            })
                        }), o === eO.ve.BOT_BUILDER && (0, l.jsx)(sO, {
                            is_mobile: !j
                        }), (0, l.jsx)(ss, {}), (0, l.jsx)(so, {}), _ && (0, l.jsx)(nU, {})]
                    })
                });
            var lk = a("89250"),
                lT = a("46883");
            a("28443");
            let lE = {
                    R_10: "R_10",
                    R_25: "R_25",
                    R_50: "R_50",
                    R_75: "R_75",
                    R_100: "R_100",
                    "1HZ10V": "1HZ10V",
                    "1HZ15V": "1HZ15V",
                    "1HZ25V": "1HZ25V",
                    "1HZ30V": "1HZ30V",
                    "1HZ50V": "1HZ50V",
                    "1HZ75V": "1HZ75V",
                    "1HZ90V": "1HZ90V",
                    "1HZ100V": "1HZ100V"
                },
                lS = () => {
                    let e = (0, i.useRef)(null),
                        [t, s] = (0, i.useState)(null),
                        n = async e => {
                            if (!lE[e]) {
                                console.log(`Symbol ${e} is not a derived market, skipping bot sync`);
                                return
                            }
                            try {
                                let {
                                    updateBotMarketSymbol: t,
                                    enableSyncForCurrentBot: s
                                } = await a.e("9644").then(a.bind(a, 77171));
                                s(), t(e) ? (console.log(`Bot Builder market synced to ${e} from Trading View`), localStorage.setItem("trading_view_last_symbol", e)) : console.log(`No active bot loaded or sync failed for ${e}`)
                            } catch (e) {
                                console.error("Error syncing market with bot:", e)
                            }
                        },
                        r = e => {
                            try {
                                let t = new URL(e).pathname,
                                    a = e.match(/[?&]symbol=([^&]+)/i) || t.match(/\/symbol\/([^\/]+)/i) || t.match(/\/([A-Z0-9_]+)$/);
                                if (a && a[1]) {
                                    let e = a[1].toUpperCase();
                                    return lE[e] ? e : null
                                }
                            } catch (e) {
                                console.log("Error extracting symbol from URL:", e)
                            }
                            return null
                        },
                        o = () => {
                            let a = e.current;
                            if (!a) return;
                            let l = "",
                                i = setInterval(() => {
                                    try {
                                        var e;
                                        let i = (null === (e = a.contentWindow) || void 0 === e ? void 0 : e.location.href) || "";
                                        if (i && i !== l) {
                                            l = i;
                                            let e = r(i);
                                            e && e !== t && (console.log(`Trading View market changed to: ${e}`), s(e), n(e))
                                        }
                                    } catch (e) {}
                                }, 2e3);
                            return () => clearInterval(i)
                        };
                    return (0, i.useEffect)(() => {
                        let t = e.current;
                        if (!t) return;
                        let a = () => {
                            try {
                                var e;
                                let a = t.contentDocument || (null === (e = t.contentWindow) || void 0 === e ? void 0 : e.document);
                                if (a) {
                                    let e = a.createElement("style");
                                    e.textContent = `
                        /* Hide Deriv logo (top right) */
                        .ic-deriv, 
                        .deriv-logo,
                        [class*="logo"],
                        [data-testid*="logo"],
                        .topbar .logo,
                        .header .logo,
                        .toolbar .logo {
                            display: none !important;
                            visibility: hidden !important;
                        }
                        
                        /* Hide Try free demo button (top left) */
                        .btn-purchase,
                        .demo-button,
                        .try-demo,
                        [class*="demo"],
                        [data-testid*="demo"],
                        .btn[href*="signup"],
                        .btn[href*="demo"],
                        .topbar .btn-primary,
                        .header .btn-primary {
                            display: none !important;
                            visibility: hidden !important;
                        }
                        
                        /* Hide any signup related elements */
                        [class*="signup"],
                        [data-testid*="signup"],
                        .signup-container,
                        .cta-button {
                            display: none !important;
                            visibility: hidden !important;
                        }
                    `, a.head.appendChild(e);
                                    let t = a.createElement("script");
                                    t.textContent = `
                        (function() {
                            let lastSymbol = '';
                            const derivedMarkets = ${JSON.stringify(Object.keys(lE))};
                            
                            // Function to extract symbol from current context
                            function getCurrentSymbol() {
                                // Try multiple methods to get current symbol
                                const url = window.location.href;
                                const symbolMatch = url.match(/[?&]symbol=([^&]+)/i) || 
                                                   url.match(//symbol/([^/]+)/i);
                                
                                if (symbolMatch && symbolMatch[1]) {
                                    return symbolMatch[1].toUpperCase();
                                }
                                
                                // Try to get from chart title or active elements
                                const titleElement = document.querySelector('[data-name="legend-source-title"], .chart-title, .symbol-name');
                                if (titleElement && titleElement.textContent) {
                                    const titleSymbol = titleElement.textContent.trim().toUpperCase();
                                    if (derivedMarkets.includes(titleSymbol)) {
                                        return titleSymbol;
                                    }
                                }
                                
                                return null;
                            }
                            
                            // Monitor for symbol changes
                            function checkSymbolChange() {
                                const currentSymbol = getCurrentSymbol();
                                if (currentSymbol && currentSymbol !== lastSymbol && derivedMarkets.includes(currentSymbol)) {
                                    lastSymbol = currentSymbol;
                                    // Send message to parent window
                                    window.parent.postMessage({
                                        type: 'TRADING_VIEW_SYMBOL_CHANGE',
                                        symbol: currentSymbol
                                    }, '*');
                                }
                            }
                            
                            // Check on load and set up observers
                            checkSymbolChange();
                            
                            // Monitor URL changes
                            let lastUrl = window.location.href;
                            setInterval(() => {
                                if (window.location.href !== lastUrl) {
                                    lastUrl = window.location.href;
                                    setTimeout(checkSymbolChange, 500); // Delay to allow page to update
                                }
                            }, 1000);
                            
                            // Monitor DOM changes for chart updates
                            if (window.MutationObserver) {
                                const observer = new MutationObserver(() => {
                                    checkSymbolChange();
                                });
                                observer.observe(document.body, { 
                                    childList: true, 
                                    subtree: true, 
                                    attributes: true,
                                    attributeFilter: ['data-symbol', 'data-name']
                                });
                            }
                        })();
                    `, a.head.appendChild(t)
                                }
                            } catch (e) {
                                console.log("Could not inject styles/script into iframe due to cross-origin restrictions")
                            }
                            o()
                        };
                        return t.addEventListener("load", a), () => t.removeEventListener("load", a)
                    }, []), (0, i.useEffect)(() => {
                        let e = e => {
                            if (!!e.origin.includes("deriv.com")) {
                                if (e.data && "TRADING_VIEW_SYMBOL_CHANGE" === e.data.type) {
                                    let a = e.data.symbol;
                                    console.log(`Received symbol change from Trading View: ${a}`), a !== t && lE[a] && (s(a), n(a))
                                }
                            }
                        };
                        return window.addEventListener("message", e), () => window.removeEventListener("message", e)
                    }, [t]), (0, l.jsx)("div", {
                        className: "trading-view-container",
                        children: (0, l.jsx)("iframe", {
                            ref: e,
                            id: "trading-view-iframe",
                            className: "trading-view-iframe",
                            src: "https://charts.deriv.com/deriv?hide-signup=true&hide_logo=true&hide_topbar=true",
                            allowFullScreen: !0,
                            title: "Trading View Chart",
                            sandbox: "allow-same-origin allow-scripts allow-popups allow-forms"
                        })
                    })
                },
                lA = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        is_trading_view_modal_visible: t,
                        setTradingViewModalVisibility: a
                    } = e;
                    return (0, l.jsx)(i.Fragment, {
                        children: t && (0, l.jsx)(S, {
                            boundary: ".main",
                            header: (0, A.NC)("TradingView Chart"),
                            onClose: a,
                            modalWidth: 526,
                            modalHeight: 595,
                            minWidth: 526,
                            minHeight: 524,
                            enableResizing: !0,
                            children: (0, l.jsx)("div", {
                                style: {
                                    height: "calc(100% - 6rem)",
                                    padding: "0.5rem"
                                },
                                children: (0, l.jsx)(lS, {})
                            })
                        })
                    })
                });
            var lI = a("73981"),
                lR = a("76953"),
                lM = a("47376"),
                lO = a("6194"),
                lD = a("15622");
            let lL = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        is_chart_modal_visible: t,
                        setChartModalVisibility: a
                    } = e;
                    return (0, l.jsx)(i.Fragment, {
                        children: t && (0, l.jsx)(S, {
                            boundary: ".main",
                            header: (0, A.NC)("Chart"),
                            onClose: a,
                            modalWidth: 526,
                            modalHeight: 595,
                            minWidth: 526,
                            minHeight: 524,
                            enableResizing: !0,
                            children: (0, l.jsx)("div", {
                                className: "chart-modal-dialog",
                                "data-testid": "chart-modal-dialog",
                                children: (0, l.jsx)(lD.default, {
                                    show_digits_stats: !1
                                })
                            })
                        })
                    })
                }),
                lU = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, v.F)();
                    return (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(y.a, {}),
                        children: e && (0, l.jsx)(lL, {})
                    })
                }),
                lZ = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        active_tab: t,
                        active_tour: a,
                        setActiveTour: s,
                        setTourDialogVisibility: n
                    } = e, {
                        is_close_tour: r,
                        is_finished: o,
                        handleJoyrideCallback: d,
                        setIsCloseTour: c
                    } = sS();
                    return i.useEffect(() => {
                        (r || o) && (c(!1), s(""))
                    }, [r, o, s, c]), !(0, sd.$8)("onboard_tour_token") && t === eO.ve.DASHBOARD && n(!0), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(sE, {}), a && (0, l.jsx)(su, {
                            handleCallback: d,
                            steps: sb,
                            spotlightClicks: !0,
                            disableCloseOnEsc: !0,
                            disableOverlay: !1,
                            disableOverlayClose: !0
                        })]
                    })
                }),
                lB = {
                    content: [],
                    header: "",
                    img: "",
                    tour_step_key: 1
                },
                lF = (0, r.Pi)(() => {
                    let {
                        dashboard: e
                    } = (0, p.oR)(), {
                        onCloseTour: t,
                        onTourEnd: a,
                        setTourActiveStep: s,
                        active_tour: n,
                        active_tab: r,
                        setActiveTour: o
                    } = e, [d, c] = i.useState(1), [_, u] = i.useState(lB), {
                        content: m,
                        header: x,
                        img: h,
                        media: j,
                        tour_step_key: v
                    } = _, b = 1 === d ? (0, A.NC)("Start") : (0, A.NC)("Next"), y = 8 === d ? (0, A.NC)("Got it, thanks!") : b, g = "onboarding" === n;
                    return (i.useEffect(() => {
                        sf.forEach(e => {
                            e.tour_step_key === d && u(e), s(d)
                        })
                    }, [d]), i.useEffect(() => {
                        (0, sd.$8)("onboard_tour_token") || r !== eO.ve.DASHBOARD || o("onboarding")
                    }, [r, n]), n) ? (0, l.jsxs)("div", {
                        className: R()("dbot-slider", {
                            "dbot-slider--active": 1 === d,
                            "dbot-slider--tour-position": 1 !== d
                        }),
                        "data-testid": "onboarding-tour-mobile",
                        children: [1 !== v && (0, l.jsxs)("div", {
                            className: "dbot-slider__navbar",
                            children: [(0, l.jsx)(K.Z, {
                                color: "less-prominent",
                                weight: "less-prominent",
                                lineHeight: "s",
                                size: "xxs",
                                "data-testid": "dbot-onboard-slider__navbar",
                                children: `${v-1}/7`
                            }), (0, l.jsx)("span", {
                                onClick: t,
                                children: (0, l.jsx)(N.Z, {
                                    height: "20px",
                                    width: "20px",
                                    "data-testid": "exit-onboard-tour",
                                    className: "db-contract-card__result-icon",
                                    color: "secondary"
                                })
                            })]
                        }), x && (0, l.jsx)(K.Z, {
                            color: "prominent",
                            weight: "bold",
                            align: "center",
                            className: "dbot-slider__title",
                            as: "span",
                            lineHeight: "s",
                            size: "xs",
                            children: (0, A.NC)(x)
                        }), j && (0, l.jsx)("div", {
                            className: "dbot-slider__media",
                            children: (0, l.jsx)("video", {
                                autoPlay: !0,
                                loop: !0,
                                controls: !0,
                                preload: "auto",
                                playsInline: !0,
                                disablePictureInPicture: !0,
                                controlsList: "nodownload",
                                src: j
                            })
                        }), h && (0, l.jsx)("div", {
                            className: "dbot-slider__image",
                            children: (0, l.jsx)("img", {
                                src: h
                            })
                        }), m && (0, l.jsx)(l.Fragment, {
                            children: m.map(e => (0, l.jsx)(K.Z, {
                                align: "center",
                                color: "prominent",
                                className: "dbot-slider__content",
                                as: "div",
                                lineHeight: "s",
                                size: "xxs",
                                children: e
                            }, e))
                        }), (0, l.jsxs)("div", {
                            className: "dbot-slider__status",
                            children: [(0, l.jsx)("div", {
                                className: "dbot-slider__progress-bar",
                                children: (0, l.jsx)(sI, {
                                    step: d,
                                    steps_list: sf.map(e => e.tour_step_key.toString()),
                                    onStepChange: c
                                })
                            }), (0, l.jsxs)("div", {
                                className: "dbot-slider__button-group",
                                children: [1 === d && (0, l.jsx)(sR, {
                                    onClick: () => {
                                        t()
                                    },
                                    label: (0, A.NC)("Skip"),
                                    "data-testid": "skip-onboard-tour"
                                }), ![1, 2, 8].includes(d) && (0, l.jsx)(sR, {
                                    onClick: () => {
                                        c(d - 1)
                                    },
                                    label: (0, A.NC)("Previous"),
                                    "data-testid": "prev-onboard-tour"
                                }), (0, l.jsx)(sR, {
                                    type: "danger",
                                    onClick: () => {
                                        c(d + 1), a(d, g)
                                    },
                                    label: y,
                                    "data-testid": 8 === v ? "finish-onboard-tour" : "next-onboard-tour"
                                })]
                            })]
                        })]
                    }) : null
                }),
                lz = (0, r.Pi)(e => {
                    let {
                        is_mobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsx)(lF, {}) : (0, l.jsx)(lZ, {})
                    })
                }),
                lP = (0, r.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, v.F)(), {
                        dashboard: t
                    } = (0, p.oR)(), {
                        setActiveTab: a
                    } = t, [s] = (0, i.useState)([{
                        id: "MONEY8GG SPEED BOT",
                        name: "MONEY8GG SPEED BOT",
                        description: "A Bot that can be used in Any Market and has speed.",
                        filename: "2025 MONEY8GG SPEED BOT \uD83E\uDD11.xml"
                    }, {
                        id: "aibot",
                        name: "AI Trading Bot",
                        description: "An AI-powered trading bot that uses prediction lists for smart trading",
                        filename: "AI BOT.xml"
                    }, {
                        id: "Over Under Bot",
                        name: "Over Under Bot",
                        description: "A Over Under Bot that helps you trade over under.",
                        filename: "Over Under Magical Bot.xml"
                    }, {
                        id: "Under 8 Strategy",
                        name: "Under 8 Strategy",
                        description: "An AI-powered under 8 bot, requires you need is to check AI Analysis if the 8 and 9 % are less than 10 % for the last 100 ticks and  over 4 is above 50% run the bot ",
                        filename: "Under 8 Strategy.xml"
                    }, {
                        id: "Over 1 Strategy",
                        name: "Over 1 Strategy",
                        description: "An AI-powered under 8 bot, that requires you need is to check AI Analysis if the 0 and 1 % are less than 10 % for the last 100 ticks and  under 6 is above 50% run the bot ",
                        filename: "Over One Strategy.xml"
                    }, {
                        id: "Over 3 Strategy",
                        name: "Over 3 Strategy",
                        description: "An AI-powered Over 3 bot, that requires you need is to check DAnalysis if the 0 and 1 and 3  are less than 10 % for the last 1000 ticks ",
                        filename: "Over 3 Strategy.xml"
                    }, {
                        id: "Matches Bot",
                        name: "Matches Bot",
                        description: "An AI-powered under 8 bot, will assist you in matches strategy ",
                        filename: "Matches Bot.xml"
                    }, {
                        id: "Even ODD Bot",
                        name: "Even ODD Bot",
                        description: "An even odd bot to use for your even odd trades, it has take profit and martingale and stop loss. ",
                        filename: "Even ODD Bot.xml"
                    }, {
                        id: "Rise and Fall  Simple",
                        name: "Rise and Fall  Simple Bot",
                        description: "A Rise and Fall Trading Bot",
                        filename: "Rise and Fall  Simple.xml"
                    }, {
                        id: "Step Indices Bot",
                        name: "Step Indices Bot",
                        description: "Step Indices Bot",
                        filename: "Step Indices Bot.xml"
                    }, {
                        id: "Best Over Under Switcher",
                        name: "Best Over Under Switcher",
                        description: "bot switchs between over and under",
                        filename: "Best Over Under Switcher.xml"
                    }, {
                        id: "Maziwaa AI",
                        name: "Maziwaa AI",
                        description: "Maziwaa AI is used for Under 9 trades",
                        filename: "Maziwaa AI.xml"
                    }, {
                        id: "under7 Manual",
                        name: "Under 7 Manual",
                        description: "A Bot that waits for 2 digits under 7 and 1 above and takes one under 7 trade.",
                        filename: "Under7manual.xml"
                    }, {
                        id: "under7 Bulk",
                        name: "Under 7 Bulk",
                        description: "A Bot that waits for 2 digits under 7 and 1 above and takes multiple identical under 7 trades simultaneously (configurable count).",
                        filename: "Under 7 Bulk Best.xml"
                    }, {
                        id: "under7 Auto",
                        name: "Under 7 Auto",
                        description: "A Bot that waits for 2 digits under 7 and 1 above and takes continous under 7 trade.",
                        filename: "Under7continous.xml"
                    }, {
                        id: "Entry Bot",
                        name: "Entry Bot",
                        description: "A bot that only trades when the entry point is hit.",
                        filename: "Money8gg_Entry_Point_Bot.xml"
                    }, {
                        id: "Secret Strategy",
                        name: "Secret Strategy",
                        description: "This secret Strategy is a switcher for markets.",
                        filename: "Secret_Strategy.xml"
                    }, {
                        id: "Multipurpose",
                        name: "Multipurpose",
                        description: "This is a Martingale Bot that can be used in many markets.",
                        filename: "Multipurpose.xml"
                    }, {
                        id: "Percentage Auto Even/Odd",
                        name: "Percentage Auto Even/Odd",
                        description: "A Bot that trades even/odd if a particular percentage is hit",
                        filename: "percentage_Even_Odd.xml"
                    }, {
                        id: "Consecutive Even/Odd Bot",
                        name: "Consecutive Even/Odd Bot",
                        description: "This bot can be set to switch to the number of Even Odd trades you want.",
                        filename: "Consecutive_EVEN_ODD_BOT.xml"
                    }, {
                        id: "Christmas 2025 Even/Odd Bot",
                        name: "Christmas 2025 Even/Odd Bot",
                        description: "This bot switches from even to odd if you lose twice on either market.",
                        filename: "SWITCH_EVEN_ODD_MARKETS V2.xml"
                    }, {
                        id: "nomartingale",
                        name: "No Martingale",
                        description: "A simple trading bot that trades with fixed stake amounts without multiplying stakes",
                        filename: "Nomartingale.xml"
                    }, {
                        id: "aiwithentry",
                        name: "AI with Entry Point",
                        description: "An AI trading bot that lets you define entry points and martingale multipliers for strategic trading",
                        filename: "AiwithEntry.xml"
                    }, {
                        id: "accumulatorsbot",
                        name: "Accumulators Bot",
                        description: "A specialized trading bot for accumulators with entry point functionality",
                        filename: "Accumulators_Bot.xml"
                    }, {
                        id: "accumulatorsWithbarrier",
                        name: "Accumulators Barrier Bot",
                        description: "An accumulators bot that exists after every 4 ticks",
                        filename: "Accumulators_Bot_With_Barrier.xml"
                    }, {
                        id: "Martingale Bot",
                        name: "Martingale Bot",
                        description: "A Bot that has Martingale Only",
                        filename: "Martingale_Only.xml"
                    }, {
                        id: "Switching Bot",
                        name: "Switching Bot",
                        description: "A Bot that Switches Between all 1(s) Markets",
                        filename: "Switching_Markets.xml"
                    }]), n = async e => {
                        try {
                            let t = await fetch(`/xml/${e.filename}`);
                            if (!t.ok) throw Error(`Failed to load bot: ${t.statusText}`);
                            let s = await t.text();
                            await (0, D.load)({
                                block_string: s,
                                file_name: e.name,
                                workspace: window.Blockly.derivWorkspace,
                                from: D.save_types.LOCAL,
                                drop_event: null,
                                strategy_id: e.id,
                                showIncompatibleStrategyDialog: !0
                            }), a(eO.ve.BOT_BUILDER)
                        } catch (t) {
                            console.error(`Error loading bot ${e.name}:`, t)
                        }
                    };
                    return 0 === s.length ? null : (0, l.jsxs)("div", {
                        className: "custom-bots",
                        children: [(0, l.jsxs)("div", {
                            className: "custom-bots__title",
                            children: [(0, l.jsx)(K.Z, {
                                as: "h2",
                                color: "prominent",
                                size: e ? "sm" : "s",
                                lineHeight: "xxl",
                                weight: "bold",
                                children: (0, A.NC)("Custom Bots")
                            }), (0, l.jsx)(K.Z, {
                                as: "p",
                                color: "prominent",
                                lineHeight: "s",
                                size: e ? "s" : "xxs",
                                children: (0, A.NC)("Start trading with our pre-built custom bots.")
                            })]
                        }), (0, l.jsx)("div", {
                            className: "custom-bots__cards-container",
                            children: s.map(t => (0, l.jsx)("div", {
                                className: "custom-bots__card",
                                children: (0, l.jsxs)("div", {
                                    className: "custom-bots__card-content",
                                    children: [(0, l.jsx)("div", {
                                        className: "custom-bots__card-header",
                                        children: (0, l.jsx)(K.Z, {
                                            weight: "bold",
                                            size: e ? "sm" : "xs",
                                            color: "prominent",
                                            children: t.name
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "custom-bots__card-description",
                                        children: (0, l.jsx)(K.Z, {
                                            size: e ? "xs" : "xxs",
                                            color: "general",
                                            lineHeight: "m",
                                            children: t.description
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "custom-bots__card-action",
                                        children: (0, l.jsx)("button", {
                                            className: "custom-bots__load-button",
                                            onClick: () => n(t),
                                            children: (0, l.jsx)(K.Z, {
                                                size: e ? "xs" : "xxs",
                                                color: "colored-background",
                                                weight: "bold",
                                                children: (0, A.NC)("Load")
                                            })
                                        })
                                    })]
                                })
                            }, t.id))
                        })]
                    })
                }),
                lX = e => {
                    let {
                        dashboard_click_name: t,
                        subpage_name: a
                    } = e;
                    aH.Analytics.trackEvent("ce_bot_form", {
                        action: a$.om.DASHBOARD_CLICK,
                        form_name: a$.oH,
                        subpage_name: a,
                        dashboard_click_name: t
                    })
                };
            var lH = a("69483"),
                l$ = a.n(lH),
                lV = a("26961"),
                lG = a.n(lV);
            let lq = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        is_delete_modal_open: a,
                        onToggleDeleteDialog: s,
                        selected_strategy_id: n,
                        setDashboardStrategies: i,
                        loadStrategyToBuilder: r,
                        refreshStrategiesTheme: o,
                        resetBotBuilderStrategy: d
                    } = e, {
                        setOpenSettings: c
                    } = t, _ = async (e, t) => {
                        t.length ? (n === e && await r(null == t ? void 0 : t[0]), await o()) : d()
                    }, u = async e => {
                        let t = (await (0, D.getSavedWorkspaces)()).filter(t => t.id !== e);
                        i(t), l$().setItem("saved_workspaces", lG().compress(JSON.stringify(t))), await _(e, t), s(!1)
                    };
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)(aB.Z, {
                            title: (0, A.NC)("Delete bot"),
                            is_visible: a,
                            confirm_button_text: (0, A.NC)("Yes, delete"),
                            onConfirm: () => {
                                u(n), s(!1), c(aP.tx.BOT_DELETE)
                            },
                            cancel_button_text: (0, A.NC)("No"),
                            onCancel: () => {
                                s(!1)
                            },
                            is_mobile_full_width: !1,
                            className: "dc-dialog__delete-strategy--delete",
                            has_close_icon: !0,
                            children: [(0, l.jsx)("div", {
                                children: (0, l.jsxs)(K.Z, {
                                    color: "prominent",
                                    lineHeight: "s",
                                    size: "xs",
                                    children: [(0, A.NC)("Your bot will be permanently deleted when you hit "), (0, l.jsx)("strong", {
                                        children: (0, A.NC)("Yes, delete.")
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)(K.Z, {
                                    color: "prominent",
                                    lineHeight: "xl",
                                    size: "xs",
                                    children: (0, A.NC)("Are you sure you want to delete it?")
                                })
                            })]
                        })
                    })
                }),
                lY = e => {
                    let [t, a] = i.useState(!1), s = e => {
                        "ESCAPE" === e.key.toUpperCase() && a(!1)
                    }, n = t => {
                        var s;
                        !(null == e ? void 0 : null === (s = e.current) || void 0 === s ? void 0 : s.contains(t.target)) && a(!1)
                    };
                    return i.useEffect(() => (document.addEventListener("keydown", s, !0), document.addEventListener("click", n, !0), () => {
                        document.removeEventListener("keydown", s, !0), document.removeEventListener("click", n, !0)
                    }), []), {
                        is_dropdown_visible: t,
                        setDropdownVisibility: a
                    }
                };
            var lW = a("85127"),
                lK = a("37575"),
                lJ = a("33571");
            let lQ = {
                    OPEN: "open",
                    SAVE: "save",
                    DELETE: "delete",
                    INIT: "init"
                },
                l0 = [{
                    type: lQ.OPEN,
                    icon: (0, l.jsx)(lW.Z, {
                        fill: "var(--text-general)"
                    }),
                    label: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Open"
                    })
                }, {
                    type: lQ.DELETE,
                    icon: (0, l.jsx)(lK.Z, {
                        fill: "var(--text-general)"
                    }),
                    label: (0, l.jsx)(A.Xx, {
                        i18n_default_text: "Delete"
                    })
                }],
                l1 = (0, r.Pi)(e => {
                    let {
                        workspace: t,
                        index: a
                    } = e, {
                        dashboard: s,
                        load_modal: n,
                        save_modal: r
                    } = (0, p.oR)(), {
                        setActiveTab: o
                    } = s, {
                        toggleSaveModal: d,
                        updateBotName: c
                    } = r, {
                        dashboard_strategies: _ = [],
                        getSaveType: u,
                        getSelectedStrategyID: m,
                        loadFileFromRecent: x,
                        onToggleDeleteDialog: h,
                        previewed_strategy_id: j,
                        selected_strategy_id: b,
                        setSelectedStrategyId: y
                    } = n, g = i.useRef(null), f = i.useRef(null), N = i.useRef(!1), {
                        setDropdownVisibility: C,
                        is_dropdown_visible: w
                    } = lY(f), {
                        isDesktop: k
                    } = (0, v.F)();
                    i.useEffect(() => {
                        let e;
                        return (null == _ ? void 0 : _.length) && 0 === a && !N.current && (e = setTimeout(() => {
                            var e;
                            N.current = !0, null == g || null === (e = g.current) || void 0 === e || e.click()
                        }, 50)), () => {
                            e && clearTimeout(e)
                        }
                    }, [_, a]);
                    let T = async () => {
                            await x(), o(eO.ve.BOT_BUILDER), lX({
                                dashboard_click_name: "open",
                                subpage_name: "bot_builder"
                            })
                        },
                        E = () => {
                            c(null == t ? void 0 : t.name), d(), lX({
                                dashboard_click_name: "save",
                                subpage_name: "dashboard"
                            })
                        },
                        S = async e => {
                            switch (y(t.id), e) {
                                case lQ.OPEN:
                                    await T();
                                    break;
                                case lQ.SAVE:
                                    E();
                                    break;
                                case lQ.DELETE:
                                    h(!0), lX({
                                        dashboard_click_name: "delete",
                                        subpage_name: "dashboard"
                                    })
                            }
                        },
                        A = b === t.id && w,
                        I = k ? "xs" : "xxs";
                    return (0, l.jsxs)("div", {
                        className: R()("bot-list__item", {
                            "bot-list__item--selected": j === t.id,
                            "bot-list__item--loaded": _,
                            "bot-list__item--min": !!(null == _ ? void 0 : _.length) && !k
                        }),
                        ref: g,
                        onClick: e => {
                            e.stopPropagation(), w && C(!1), m(t.id), S(lQ.INIT)
                        },
                        children: [(0, l.jsx)("div", {
                            className: "bot-list__item__label",
                            children: (0, l.jsx)("div", {
                                className: "text-wrapper",
                                title: t.name,
                                children: (0, l.jsx)(K.Z, {
                                    align: "left",
                                    as: "p",
                                    size: I,
                                    lineHeight: "l",
                                    children: t.name
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "bot-list__item__time-stamp",
                            children: (0, l.jsx)(K.Z, {
                                align: "left",
                                as: "p",
                                size: I,
                                lineHeight: "l",
                                children: (0, D.timeSince)(t.timestamp)
                            })
                        }), (0, l.jsxs)("div", {
                            className: "bot-list__item__load-type",
                            children: [a6(t.save_type, "bot-list__item__load-type__icon--active"), (0, l.jsx)("div", {
                                className: "bot-list__item__load-type__icon--saved",
                                children: (0, l.jsx)(K.Z, {
                                    align: "left",
                                    as: "p",
                                    size: I,
                                    lineHeight: "l",
                                    children: u(t.save_type)
                                })
                            })]
                        }), k ? (0, l.jsx)("div", {
                            className: "bot-list__item__actions",
                            children: l0.map(e => (0, l.jsx)("div", {
                                className: "bot-list__item__actions__action-item",
                                onClick: t => {
                                    t.stopPropagation(), S(e.type)
                                },
                                children: (0, l.jsx)(B.Z, {
                                    alignment: "top",
                                    message: e.label,
                                    zIndex: "9999",
                                    children: e.icon
                                })
                            }, e.type))
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "bot-list__item__actions",
                                children: (0, l.jsx)("button", {
                                    ref: f,
                                    onClick: e => {
                                        e.stopPropagation(), C(!w), y(t.id)
                                    },
                                    tabIndex: 0,
                                    children: (0, l.jsx)(lJ.Z, {
                                        height: "20px",
                                        width: "20px"
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: R()("bot-list__item__responsive", {
                                    "bot-list__item__responsive--active": A,
                                    "bot-list__item__responsive--min": _.length <= 5
                                }),
                                children: l0.map(e => (0, l.jsxs)("div", {
                                    className: "bot-list__item__responsive__menu",
                                    onClick: t => {
                                        t.stopPropagation(), S(e.type)
                                    },
                                    children: [(0, l.jsx)("div", {
                                        className: "bot-list__item__responsive__menu__icon",
                                        children: e.icon
                                    }), (0, l.jsx)(K.Z, {
                                        color: "prominent",
                                        className: "bot-list__item__responsive__menu__item",
                                        as: "p",
                                        size: "xs",
                                        children: e.label
                                    })]
                                }, e.type))
                            })]
                        })]
                    }, t.id)
                }),
                l3 = [{
                    label: (0, A.NC)("Bot name"),
                    className: "bot-list__header__label"
                }, {
                    label: (0, A.NC)("Last modified"),
                    className: "bot-list__header__time-stamp"
                }, {
                    label: (0, A.NC)("Status"),
                    className: "bot-list__header__load-type"
                }],
                l8 = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        setDashboardStrategies: a,
                        dashboard_strategies: s
                    } = e, {
                        setStrategySaveType: n,
                        strategy_save_type: r
                    } = t, {
                        isDesktop: o
                    } = (0, v.F)(), d = i.useRef(!1), c = i.useRef(!1);
                    return (i.useEffect(() => {
                        n(""), (async () => {
                            a(await (0, D.getSavedWorkspaces)()), !c.current && (c.current = !0)
                        })()
                    }, [r]), i.useEffect(() => {
                        !(null == s ? void 0 : s.length) && !d.current && (d.current = !0)
                    }, []), null == s ? void 0 : s.length) ? (0, l.jsxs)("div", {
                        className: "bot-list__container",
                        children: [(0, l.jsxs)("div", {
                            className: "bot-list__wrapper",
                            children: [(0, l.jsx)("div", {
                                className: "bot-list__title",
                                children: (0, l.jsx)(K.Z, {
                                    size: o ? "s" : "xs",
                                    weight: "bold",
                                    children: (0, l.jsx)(A.Xx, {
                                        i18n_default_text: "Your bots:"
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: "bot-list__header",
                                children: l3.map(e => {
                                    let {
                                        label: t,
                                        className: a
                                    } = e;
                                    return (0, l.jsx)("div", {
                                        className: a,
                                        children: (0, l.jsx)(K.Z, {
                                            size: o ? "xs" : "xxs",
                                            weight: "bold",
                                            children: t
                                        })
                                    }, t)
                                })
                            }), (0, l.jsx)("div", {
                                className: "bot-list__table",
                                children: s.map(e => (0, l.jsx)(l1, {
                                    workspace: e
                                }, e.id))
                            })]
                        }), (0, l.jsx)(lq, {})]
                    }) : null
                }),
                l5 = (0, r.Pi)(e => {
                    let {
                        is_mobile: t,
                        has_dashboard_strategies: a
                    } = e, {
                        dashboard: s,
                        load_modal: n,
                        quick_strategy: r
                    } = (0, p.oR)(), {
                        toggleLoadModal: o,
                        setActiveTabIndex: d
                    } = n, {
                        isDesktop: c
                    } = (0, v.F)(), {
                        onCloseDialog: _,
                        dialog_options: u,
                        is_dialog_open: m,
                        setActiveTab: x,
                        setPreviewOnPopup: h
                    } = s, {
                        setFormVisibility: j
                    } = r, b = () => {
                        o(), d(t ? 0 : 1), x(eO.ve.BOT_BUILDER)
                    }, y = [{
                        id: "my-computer",
                        icon: (0, l.jsx)("div", {
                            style: {
                                fontSize: "48px",
                                lineHeight: "48px"
                            },
                            children: "\uD83D\uDCBB"
                        }),
                        content: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Load Bot"
                        }),
                        callback: () => {
                            b(), (0, tK.m5)({
                                subpage_name: "bot_builder",
                                subform_source: "dashboard",
                                subform_name: "load_strategy",
                                load_strategy_tab: "local"
                            })
                        }
                    }, {
                        id: "bot-builder",
                        icon: (0, l.jsx)("div", {
                            style: {
                                fontSize: "48px",
                                lineHeight: "48px"
                            },
                            children: "\uD83D\uDD27"
                        }),
                        content: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Bot builder"
                        }),
                        callback: () => {
                            x(eO.ve.BOT_BUILDER), lX({
                                dashboard_click_name: "bot_builder",
                                subpage_name: "bot_builder"
                            })
                        }
                    }, {
                        id: "best-bots",
                        icon: (0, l.jsx)("div", {
                            style: {
                                fontSize: "48px",
                                lineHeight: "48px"
                            },
                            children: "\uD83E\uDD16"
                        }),
                        content: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "Best Bots"
                        }),
                        callback: () => {
                            x(eO.ve.BEST_BOTS), lX({
                                dashboard_click_name: "best_bots",
                                subpage_name: "best_bots"
                            })
                        }
                    }, {
                        id: "ai-analysis",
                        icon: (0, l.jsx)("div", {
                            style: {
                                fontSize: "48px",
                                lineHeight: "48px"
                            },
                            children: "\uD83E\uDDE0"
                        }),
                        content: (0, l.jsx)(A.Xx, {
                            i18n_default_text: "AI Analysis"
                        }),
                        callback: () => {
                            x(eO.ve.PROFIT), lX({
                                dashboard_click_name: "ai_analysis",
                                subpage_name: "ai_analysis"
                            })
                        }
                    }];
                    return i.useMemo(() => (0, l.jsxs)("div", {
                        className: R()("tab__dashboard__table", {
                            "tab__dashboard__table--minimized": a && t
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: R()("tab__dashboard__table__tiles", {
                                "tab__dashboard__table__tiles--minimized": a && t
                            }),
                            id: "tab__dashboard__table__tiles",
                            children: [y.map(e => {
                                let {
                                    icon: s,
                                    content: n,
                                    callback: i,
                                    id: r
                                } = e;
                                return (0, l.jsxs)("div", {
                                    className: R()("tab__dashboard__table__block", {
                                        "tab__dashboard__table__block--minimized": a && t
                                    }),
                                    children: [(0, l.jsx)("div", {
                                        className: R()("tab__dashboard__table__images", {
                                            "tab__dashboard__table__images--minimized": a
                                        }),
                                        width: "8rem",
                                        height: "8rem",
                                        icon: s,
                                        id: r,
                                        onClick: () => {
                                            i()
                                        },
                                        children: s
                                    }), (0, l.jsx)(K.Z, {
                                        color: "prominent",
                                        size: t ? "xxs" : "xs",
                                        children: n
                                    })]
                                }, r)
                            }), c ? (0, l.jsx)(aj, {
                                is_modal_open: m,
                                className: "load-strategy__wrapper",
                                header: (0, A.NC)("Load strategy"),
                                onClickClose: () => {
                                    h(!1), _()
                                },
                                height_offset: "80px",
                                page_overlay: !0,
                                children: (0, l.jsx)("div", {
                                    label: "Google Drive",
                                    className: "google-drive-label",
                                    children: (0, l.jsx)(aW, {})
                                })
                            }) : (0, l.jsx)(aB.Z, {
                                title: u.title,
                                is_visible: m,
                                onCancel: _,
                                is_mobile_full_width: !0,
                                className: "dc-dialog__wrapper--google-drive",
                                has_close_icon: !0,
                                children: (0, l.jsx)(aW, {})
                            })]
                        }), (0, l.jsx)(l8, {})]
                    }), [m, a])
                }),
                l7 = (0, r.Pi)(() => {
                    let {
                        load_modal: e,
                        dashboard: t
                    } = (0, p.oR)(), {
                        dashboard_strategies: a
                    } = e, {
                        active_tab: s,
                        active_tour: n
                    } = t, r = !!(null == a ? void 0 : a.length), {
                        isDesktop: o
                    } = (0, v.F)(), [d, c] = (0, i.useState)(!0);
                    return ((0, i.useEffect)(() => {
                        let e = setTimeout(() => {
                            c(!1)
                        }, 2e3);
                        return () => clearTimeout(e)
                    }, []), d) ? (0, l.jsx)("div", {
                        className: "dashboard-loading",
                        children: (0, l.jsx)("div", {
                            className: "dashboard-loading__content",
                            children: (0, l.jsx)(K.Z, {
                                as: "h2",
                                color: "prominent",
                                size: o ? "lg" : "sm",
                                lineHeight: "xxl",
                                weight: "bold",
                                align: "center",
                                children: (0, A.NC)("Loading the best free bots...")
                            })
                        })
                    }) : (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: R()("tab__dashboard", {
                                "tab__dashboard--tour-active": n
                            }),
                            children: (0, l.jsxs)("div", {
                                className: "tab__dashboard__content",
                                children: [(0, l.jsxs)("div", {
                                    className: "quick-panel",
                                    children: [(0, l.jsxs)("div", {
                                        className: R()("tab__dashboard__header", {
                                            "tab__dashboard__header--listed": o && r
                                        }),
                                        children: [!r && (0, l.jsx)(K.Z, {
                                            className: "title",
                                            as: "h2",
                                            color: "prominent",
                                            size: o ? "sm" : "s",
                                            lineHeight: "xxl",
                                            weight: "bold",
                                            children: (0, A.NC)("Load or build your bot")
                                        }), (0, l.jsx)(K.Z, {
                                            as: "p",
                                            color: "prominent",
                                            lineHeight: "s",
                                            size: o ? "s" : "xxs",
                                            className: R()("subtitle", {
                                                "subtitle__has-list": r
                                            }),
                                            children: (0, A.NC)("Load bots that you can use to Trade.")
                                        })]
                                    }), (0, l.jsx)(l5, {
                                        has_dashboard_strategies: r,
                                        is_mobile: !o
                                    })]
                                }), (0, l.jsx)(lP, {})]
                            })
                        }), s === eO.ve.DASHBOARD && (0, l.jsx)(lz, {
                            is_mobile: !o
                        })]
                    })
                }),
                l2 = (0, r.Pi)(e => {
                    let {
                        handleTabChange: t
                    } = e, {
                        isDesktop: a
                    } = (0, v.F)(), {
                        dashboard: s
                    } = (0, p.oR)(), {
                        setActiveTab: n
                    } = s, [r] = (0, i.useState)([{
                        id: "MONEY8GG SPEED BOT",
                        name: "MONEY8GG SPEED BOT",
                        description: "A Bot that can be used in Any Market and has speed.",
                        filename: "2025 MONEY8GG SPEED BOT \uD83E\uDD11.xml"
                    }, {
                        id: "aibot",
                        name: "AI Trading Bot",
                        description: "An AI-powered trading bot that uses prediction lists for smart trading",
                        filename: "AI BOT.xml"
                    }, {
                        id: "Under 8 Strategy",
                        name: "Under 8 Strategy",
                        description: "An AI-powered under 8 bot, that requires you need is to check AI Analysis if the 8 and 9 % are less than 10 % for the last 20 ticks and  over 4 is above 50% run the bot ",
                        filename: "Under 8 Strategy.xml"
                    }, {
                        id: "Over 1 Strategy",
                        name: "Over 1 Strategy",
                        description: "An AI-powered under 8 bot, that requires you need is to check AI Analysis if the 0 and 1 % are less than 10 % for the last 100 ticks and  under 6 is above 50% run the bot ",
                        filename: "Over One Strategy.xml"
                    }, {
                        id: "Over 3 Strategy",
                        name: "Over 3 Strategy",
                        description: "An AI-powered Over 3 bot, that requires you need is to check DAnalysis if the 0 and 1 and 3  are less than 10 % for the last 1000 ticks ",
                        filename: "Over 3 Strategy.xml"
                    }, {
                        id: "Matches Bot",
                        name: "Matches Bot",
                        description: "An AI-powered under 8 bot, will assist you in matches strategy ",
                        filename: "Matches Bot.xml"
                    }, {
                        id: "Even ODD Bot",
                        name: "Even ODD Bot",
                        description: "An even odd bot to use for your even odd trades, it has take profit and martingale and stop loss. ",
                        filename: "Even ODD Bot.xml"
                    }, {
                        id: "Over Under Bot",
                        name: "Over Under Bot",
                        description: "A Over Under Bot that helps you trade over under.",
                        filename: "Over Under Magical Bot.xml"
                    }, {
                        id: "Rise and Fall  Simple",
                        name: "Rise and Fall  Simple Bot",
                        description: "A Rise and Fall Trading Bot",
                        filename: "Rise and Fall  Simple.xml"
                    }, {
                        id: "Step Indices Bot",
                        name: "Step Indices Bot",
                        description: "Step Indices Bot",
                        filename: "Step Indices Bot.xml"
                    }, {
                        id: "Best Over Under Switcher",
                        name: "Best Over Under Switcher",
                        description: "bot switchs between over and under",
                        filename: "Best Over Under Switcher.xml"
                    }, {
                        id: "Maziwaa AI",
                        name: "Maziwaa AI",
                        description: "Maziwaa AI is used for Under 9 trades",
                        filename: "Maziwaa AI.xml"
                    }, {
                        id: "under7 Manual",
                        name: "Under 7 Manual",
                        description: "A Bot that waits for 2 digits under 7 and 1 above and takes one under 7 trade.",
                        filename: "Under7manual.xml"
                    }, {
                        id: "under7 Bulk",
                        name: "Under 7 Bulk",
                        description: "A Bot that waits for 2 digits under 7 and 1 above and takes multiple identical under 7 trades simultaneously (configurable count).",
                        filename: "Under 7 Bulk Best.xml"
                    }, {
                        id: "under7 Auto",
                        name: "Under 7 Auto",
                        description: "A Bot that waits for 2 digits under 7 and 1 above and takes continous under 7 trade.",
                        filename: "Under7continous.xml"
                    }, {
                        id: "Entry Bot",
                        name: "Entry Bot",
                        description: "A bot that only trades when the entry point is hit.",
                        filename: "Money8gg_Entry_Point_Bot.xml"
                    }, {
                        id: "Secret Strategy",
                        name: "Secret Strategy",
                        description: "This secret Strategy is a switcher for markets.",
                        filename: "Secret_Strategy.xml"
                    }, {
                        id: "Multipurpose",
                        name: "Multipurpose",
                        description: "This is a Martingale Bot that can be used in many markets.",
                        filename: "Multipurpose.xml"
                    }, {
                        id: "Percentage Auto Even/Odd",
                        name: "Percentage Auto Even/Odd",
                        description: "A Bot that trades even/odd if a particular percentage is hit",
                        filename: "percentage_Even_Odd.xml"
                    }, {
                        id: "Consecutive Even/Odd Bot",
                        name: "Consecutive Even/Odd Bot",
                        description: "This bot can be set to switch to the number of Even Odd trades you want.",
                        filename: "Consecutive_EVEN_ODD_BOT.xml"
                    }, {
                        id: "Christmas 2025 Even/Odd Bot",
                        name: "Christmas 2025 Even/Odd Bot",
                        description: "This bot switches from even to odd if you lose twice on either market.",
                        filename: "SWITCH_EVEN_ODD_MARKETS V2.xml"
                    }, {
                        id: "nomartingale",
                        name: "No Martingale",
                        description: "A simple trading bot that trades with fixed stake amounts without multiplying stakes",
                        filename: "Nomartingale.xml"
                    }, {
                        id: "aiwithentry",
                        name: "AI with Entry Point",
                        description: "An AI trading bot that lets you define entry points and martingale multipliers for strategic trading",
                        filename: "AiwithEntry.xml"
                    }, {
                        id: "accumulatorsbot",
                        name: "Accumulators Bot",
                        description: "A specialized trading bot for accumulators with entry point functionality",
                        filename: "Accumulators_Bot.xml"
                    }, {
                        id: "accumulatorsWithbarrier",
                        name: "Accumulators Barrier Bot",
                        description: "An accumulators bot that exists after every 4 ticks",
                        filename: "Accumulators_Bot_With_Barrier.xml"
                    }, {
                        id: "Martingale Bot",
                        name: "Martingale Bot",
                        description: "A Bot that has Martingale Only",
                        filename: "Martingale_Only.xml"
                    }, {
                        id: "Switching Bot",
                        name: "Switching Bot",
                        description: "A Bot that Switches Between all 1(s) Markets",
                        filename: "Switching_Markets.xml"
                    }]), o = async e => {
                        try {
                            let t = await fetch(`/xml/${e.filename}`);
                            if (!t.ok) throw Error(`Failed to load bot: ${t.statusText}`);
                            let a = await t.text();
                            await (0, D.load)({
                                block_string: a,
                                file_name: e.name,
                                workspace: window.Blockly.derivWorkspace,
                                from: D.save_types.LOCAL,
                                drop_event: null,
                                strategy_id: e.id,
                                showIncompatibleStrategyDialog: !0
                            }), n(eO.ve.BOT_BUILDER)
                        } catch (t) {
                            console.error(`Error loading bot ${e.name}:`, t)
                        }
                    };
                    return 0 === r.length ? null : (0, l.jsxs)("div", {
                        className: "best-bots",
                        children: [(0, l.jsxs)("div", {
                            className: "best-bots__header",
                            children: [(0, l.jsx)(K.Z, {
                                as: "h1",
                                color: "prominent",
                                size: a ? "l" : "m",
                                lineHeight: "xxl",
                                weight: "bold",
                                children: (0, A.NC)("Best Bots")
                            }), (0, l.jsx)(K.Z, {
                                as: "p",
                                color: "prominent",
                                lineHeight: "s",
                                size: a ? "m" : "s",
                                children: (0, A.NC)("Discover our top-performing trading bots designed for maximum profitability.")
                            })]
                        }), (0, l.jsx)(e9.Z, {
                            children: (0, l.jsx)("div", {
                                className: "best-bots__grid-wrapper",
                                children: (0, l.jsx)("div", {
                                    className: "best-bots__grid",
                                    children: r.map(e => (0, l.jsxs)("div", {
                                        className: "best-bots__card",
                                        children: [(0, l.jsx)("div", {
                                            className: "best-bots__card-header",
                                            children: (0, l.jsx)(K.Z, {
                                                as: "h3",
                                                size: "m",
                                                weight: "bold",
                                                color: "prominent",
                                                children: e.name
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "best-bots__card-body",
                                            children: (0, l.jsx)(K.Z, {
                                                as: "p",
                                                size: "s",
                                                color: "general",
                                                lineHeight: "m",
                                                children: e.description
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: "best-bots__card-footer",
                                            children: (0, l.jsx)("button", {
                                                className: "best-bots__load-button",
                                                onClick: () => o(e),
                                                children: (0, l.jsx)(K.Z, {
                                                    size: "s",
                                                    color: "colored-background",
                                                    weight: "bold",
                                                    children: (0, A.NC)("Load Bot")
                                                })
                                            })
                                        })]
                                    }, e.id))
                                })
                            })
                        }), (0, l.jsx)(eH.Z, {
                            children: (0, l.jsx)("div", {
                                className: "best-bots__mobile-container",
                                children: (0, l.jsx)("div", {
                                    className: "best-bots__table-container",
                                    children: (0, l.jsxs)("table", {
                                        className: "best-bots__table",
                                        children: [(0, l.jsx)("thead", {
                                            children: (0, l.jsxs)("tr", {
                                                children: [(0, l.jsx)("th", {
                                                    children: (0, l.jsx)(K.Z, {
                                                        size: "xs",
                                                        weight: "bold",
                                                        children: (0, A.NC)("Bot Name")
                                                    })
                                                }), (0, l.jsx)("th", {
                                                    children: (0, l.jsx)(K.Z, {
                                                        size: "xs",
                                                        weight: "bold",
                                                        children: (0, A.NC)("Description")
                                                    })
                                                }), (0, l.jsx)("th", {
                                                    children: (0, l.jsx)(K.Z, {
                                                        size: "xs",
                                                        weight: "bold",
                                                        children: (0, A.NC)("Action")
                                                    })
                                                })]
                                            })
                                        }), (0, l.jsx)("tbody", {
                                            children: r.map(e => (0, l.jsxs)("tr", {
                                                children: [(0, l.jsx)("td", {
                                                    children: (0, l.jsx)(K.Z, {
                                                        weight: "bold",
                                                        size: "xs",
                                                        children: e.name
                                                    })
                                                }), (0, l.jsx)("td", {
                                                    children: (0, l.jsx)(K.Z, {
                                                        size: "xs",
                                                        children: e.description
                                                    })
                                                }), (0, l.jsx)("td", {
                                                    children: (0, l.jsx)("button", {
                                                        className: "best-bots__mobile-load-button",
                                                        onClick: () => o(e),
                                                        children: (0, l.jsx)(K.Z, {
                                                            size: "xs",
                                                            color: "colored-background",
                                                            weight: "bold",
                                                            children: (0, A.NC)("Load")
                                                        })
                                                    })
                                                })]
                                            }, e.id))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                }),
                l4 = () => (0, l.jsx)("div", {
                    className: "toolbar__section",
                    "data-testid": "dt_run_strategy",
                    children: (0, l.jsx)(t1, {
                        className: "toolbar__animation"
                    })
                }),
                l9 = (0, i.lazy)(() => Promise.resolve().then(a.bind(a, 15622))),
                l6 = (0, i.lazy)(() => a.e("9196").then(a.bind(a, 16917))),
                ie = (0, i.lazy)(() => Promise.all([a.e("9644"), a.e("5074")]).then(a.bind(a, 19783))),
                it = (0, i.lazy)(() => Promise.all([a.e("9644"), a.e("2728")]).then(a.bind(a, 78839))),
                ia = (0, i.lazy)(() => Promise.all([a.e("9644"), a.e("3437")]).then(a.bind(a, 81036))),
                is = (0, i.lazy)(() => a.e("447").then(a.bind(a, 23229))),
                il = (0, i.lazy)(() => a.e("6687").then(a.bind(a, 51187))),
                ii = (0, i.lazy)(() => a.e("1271").then(a.bind(a, 294))),
                ir = (0, r.Pi)(() => {
                    let {
                        connectionStatus: e
                    } = (0, h.T)(), {
                        dashboard: t,
                        load_modal: a,
                        run_panel: s,
                        quick_strategy: n,
                        summary_card: r
                    } = (0, p.oR)(), {
                        active_tab: o,
                        active_tour: d,
                        is_chart_modal_visible: c,
                        is_trading_view_modal_visible: _,
                        setActiveTab: u,
                        setWebSocketState: x,
                        setActiveTour: j,
                        setTourDialogVisibility: b
                    } = t, {
                        onEntered: y,
                        dashboard_strategies: g
                    } = a, {
                        is_dialog_open: f,
                        is_drawer_open: N,
                        dialog_options: C,
                        onCancelButtonClick: w,
                        onCloseDialog: k,
                        onOkButtonClick: T,
                        stopBot: E
                    } = s, {
                        is_open: S
                    } = n, {
                        cancel_button_text: I,
                        ok_button_text: M,
                        title: O,
                        message: U
                    } = C, {
                        clear: Z
                    } = r, {
                        DASHBOARD: B,
                        BOT_BUILDER: F,
                        TRADING_VIEW: z,
                        DANALYSIS: P,
                        AUTO_TRADES: X,
                        BEST_BOTS: H,
                        DTRADER: $,
                        FREEBOOKS: V,
                        TUTORIAL: G
                    } = eO.ve, [q, Y] = i.useState(() => localStorage.getItem("auto_trades_active_tab") || "rise-fall");
                    i.useEffect(() => {
                        let e = e => {
                            Y(e.detail.activeTab)
                        };
                        return window.addEventListener("autoTradesTabChange", e), () => {
                            window.removeEventListener("autoTradesTabChange", e)
                        }
                    }, []);
                    let W = o === X && "flip-even-odd" === q,
                        K = [B, H, $, V, G].includes(o) || W,
                        J = i.useRef(!0),
                        Q = ["dashboard", "best_bots", "bot_builder", "profit", "auto_trades", "danalysis", "trading_view", "manualtrading", "chart", "freebooks", "tutorial"],
                        {
                            isDesktop: ee
                        } = (0, v.F)(),
                        et = (0, lk.TH)(),
                        ea = (0, lk.s0)(),
                        es = o,
                        en = (e => {
                            var t;
                            if (!(es = null === (t = et.hash) || void 0 === t ? void 0 : t.split("#")[1])) return eO.ve.BEST_BOTS;
                            let a = Q.indexOf(String(es));
                            return -1 !== a ? a : eO.ve.BEST_BOTS
                        })(0);
                    i.useEffect(() => {
                        e !== ak.cR.OPENED && null !== document.getElementById("db-animation__stop-button") && (Z(), E(), D.api_base.setIsRunning(!1), x(!1))
                    }, [Z, e, x, E]), i.useEffect(() => {
                        if (S && b(!1), J.current) {
                            let e = Number(en);
                            u(e), !ee && el(e), J.current = !1
                        } else ea(`#${Q[o]||Q[eO.ve.BEST_BOTS]}`);
                        "" !== d && j("")
                    }, [o]), i.useEffect(() => {
                        let e = setTimeout(() => {
                            var e, t, a, s, n;
                            if (o === eO.ve.BOT_BUILDER && (null === (t = Blockly) || void 0 === t ? void 0 : null === (e = t.derivWorkspace) || void 0 === e ? void 0 : e.trashcan)) {
                                let e;
                                let t = window.innerHeight - 250;
                                e = N ? (0, L.rK)() ? 380 : window.innerWidth - 460 : (0, L.rK)() ? 20 : window.innerWidth - 100, null === (n = Blockly) || void 0 === n || null === (s = n.derivWorkspace) || void 0 === s || null === (a = s.trashcan) || void 0 === a || a.setTrashcanPosition(e, t)
                            }
                        }, 100);
                        return () => {
                            clearTimeout(e)
                        }
                    }, [o, N]), (0, i.useEffect)(() => {
                        let e;
                        return g.length > 0 && (e = setTimeout(() => {
                            (0, D.updateWorkspaceName)()
                        })), () => {
                            e && clearTimeout(e)
                        }
                    }, [g, o]);
                    let el = i.useCallback(e => {
                        u(e);
                        let t = eO.FK[e];
                        if (t) {
                            let e = document.getElementById(t);
                            setTimeout(() => {
                                null == e || e.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "center"
                                })
                            }, 10)
                        }
                    }, [o]);
                    return (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "main",
                            children: (0, l.jsx)("div", {
                                className: R()("main__container", {
                                    "main__container--active": d && o === eO.ve.DASHBOARD && !ee
                                }),
                                children: (0, l.jsxs)(lT.Z, {
                                    active_index: o,
                                    className: "main__tabs",
                                    onTabItemChange: y,
                                    onTabItemClick: el,
                                    top: !0,
                                    children: [(0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lI.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Dashboard"
                                            })]
                                        }),
                                        id: "id-dbot-dashboard",
                                        children: (0, l.jsx)(l7, {
                                            handleTabChange: el
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lR.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Best Bots"
                                            })]
                                        }),
                                        id: "id-best-bots",
                                        children: (0, l.jsx)(l2, {
                                            handleTabChange: el
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lR.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Bot Builder"
                                            })]
                                        }),
                                        id: "id-bot-builder"
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lM.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "AI Analysis"
                                            })]
                                        }),
                                        id: "id-profit",
                                        children: (0, l.jsx)("div", {
                                            className: "profit-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading profit analysis...")
                                                }),
                                                children: (0, l.jsx)(ie, {})
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lO.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Auto Trades"
                                            })]
                                        }),
                                        id: "id-auto-trades",
                                        children: (0, l.jsx)("div", {
                                            className: "auto-trades-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading auto trades...")
                                                }),
                                                children: (0, l.jsx)(it, {})
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lM.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "DAnalysis"
                                            })]
                                        }),
                                        id: "id-danalysis",
                                        children: (0, l.jsx)("div", {
                                            className: "danalysis-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading digit analysis...")
                                                }),
                                                children: (0, l.jsx)(ia, {})
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lM.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Trading View"
                                            })]
                                        }),
                                        id: "id-trading-view",
                                        children: (0, l.jsx)("div", {
                                            className: "trading-view-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading trading view...")
                                                }),
                                                children: (0, l.jsx)(ii, {
                                                    isVisible: o === z
                                                })
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lM.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Manual trading"
                                            })]
                                        }),
                                        id: "id-dtrader",
                                        onClick: () => u(eO.ve.DTRADER),
                                        children: (0, l.jsx)("div", {
                                            className: "dtrader-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading DTrader...")
                                                }),
                                                children: (0, l.jsx)(il, {})
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lM.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Charts"
                                            })]
                                        }),
                                        id: c || _ ? "id-charts--disabled" : "id-charts",
                                        children: (0, l.jsx)(i.Suspense, {
                                            fallback: (0, l.jsx)(m.Z, {
                                                message: (0, A.NC)("Please wait, loading chart...")
                                            }),
                                            children: (0, l.jsx)(l9, {
                                                show_digits_stats: !1
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(lI.Z, {
                                                height: "24px",
                                                width: "24px",
                                                fill: "var(--text-general)"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Free Books"
                                            })]
                                        }),
                                        id: "id-freebooks",
                                        children: (0, l.jsx)("div", {
                                            className: "freebooks-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading free books...")
                                                }),
                                                children: (0, l.jsx)(is, {})
                                            })
                                        })
                                    }), (0, l.jsx)("div", {
                                        label: (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(sJ.Z, {
                                                height: "16px",
                                                width: "16px",
                                                fill: "var(--text-general)",
                                                className: "icon-general-fill-g-path"
                                            }), (0, l.jsx)(A.Xx, {
                                                i18n_default_text: "Tutorials"
                                            })]
                                        }),
                                        id: "id-tutorials",
                                        children: (0, l.jsx)("div", {
                                            className: "tutorials-wrapper",
                                            children: (0, l.jsx)(i.Suspense, {
                                                fallback: (0, l.jsx)(m.Z, {
                                                    message: (0, A.NC)("Please wait, loading tutorials...")
                                                }),
                                                children: (0, l.jsx)(l6, {
                                                    handleTabChange: el
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        }), (0, l.jsxs)(e9.Z, {
                            children: [!K && (0, l.jsxs)("div", {
                                className: "main__run-strategy-wrapper",
                                children: [(0, l.jsx)(l4, {}), (0, l.jsx)(ap, {})]
                            }), (0, l.jsx)(lU, {}), (0, l.jsx)(lA, {})]
                        }), (0, l.jsx)(eH.Z, {
                            children: !S && !K && (0, l.jsx)(ap, {})
                        }), (0, l.jsx)(aB.Z, {
                            cancel_button_text: I || (0, A.NC)("Cancel"),
                            className: "dc-dialog__wrapper--fixed",
                            confirm_button_text: M || (0, A.NC)("Ok"),
                            has_close_icon: !0,
                            is_mobile_full_width: !1,
                            is_visible: f,
                            onCancel: w,
                            onClose: k,
                            onConfirm: T || k,
                            portal_element_id: "modal_root",
                            title: O,
                            children: U
                        })]
                    })
                });
            a("51156");
            let io = (0, r.Pi)(() => {
                var e, t, s, n, r;
                let [d, c] = i.useState(!1), [_, j] = i.useState(!0), v = (0, p.oR)(), {
                    app: y,
                    transactions: g,
                    common: f,
                    client: N
                } = v, {
                    showDigitalOptionsMaltainvestError: C
                } = y, {
                    is_dark_mode_on: w
                } = (0, aE.Z)(), {
                    recovered_transactions: k,
                    recoverPendingContracts: T
                } = g, E = i.useRef(!1), S = i.useRef(null), {
                    connectionStatus: I
                } = (0, h.T)(), {
                    initTrackJS: R
                } = aI();
                R(N.loginid), u({
                    is_client_store_initialized: (null == N ? void 0 : N.is_logged_in) ? !!(null == N ? void 0 : null === (e = N.account_settings) || void 0 === e ? void 0 : e.email) : !!N,
                    is_logged_in: null == N ? void 0 : N.is_logged_in,
                    loginid: null == N ? void 0 : N.loginid,
                    landing_company_shortcode: null == N ? void 0 : N.landing_company_shortcode,
                    currency: null == N ? void 0 : N.currency,
                    residence: null == N ? void 0 : N.residence,
                    email: null == N ? void 0 : null === (t = N.account_settings) || void 0 === t ? void 0 : t.email,
                    first_name: null == N ? void 0 : null === (s = N.account_settings) || void 0 === s ? void 0 : s.first_name,
                    last_name: null == N ? void 0 : null === (n = N.account_settings) || void 0 === n ? void 0 : n.last_name
                });
                let M = (0, aw.PO)() ? ? null;
                (0, aT.ZP)(M), (0, i.useEffect)(() => {
                    I === ak.cR.OPENED ? (c(!0), f.setSocketOpened(!0)) : I !== ak.cR.OPENED && f.setSocketOpened(!1)
                }, [f, I]);
                let {
                    current_language: O
                } = f, L = document.documentElement;
                i.useEffect(() => {
                    null == L || L.setAttribute("lang", O.toLowerCase()), null == L || L.setAttribute("dir", "ar" === O.toLowerCase() ? "rtl" : "ltr")
                }, [O, L]);
                let U = i.useCallback(e => {
                    let {
                        data: t
                    } = e;
                    if ((null == t ? void 0 : t.msg_type) === "proposal_open_contract" && !(null == t ? void 0 : t.error)) {
                        let {
                            proposal_open_contract: e
                        } = t;
                        (null == e ? void 0 : e.status) !== "open" && !(null == k ? void 0 : k.includes(null == e ? void 0 : e.contract_id)) && T(e)
                    }
                }, [k, T]);
                i.useEffect(() => {
                    (0, aD.setSmartChartsPublicPath)((0, x.MT8)("/js/smartcharts/"))
                }, []), i.useEffect(() => {
                    if (!E.current && N.is_logged_in && d && (null === D.api_base || void 0 === D.api_base ? void 0 : D.api_base.api)) {
                        var e;
                        E.current = !0, S.current = null === (e = D.api_base.api.onMessage()) || void 0 === e ? void 0 : e.subscribe(U)
                    }
                    return () => {
                        if (E.current && S.current) {
                            var e, t;
                            E.current = !1, null === (e = (t = S.current).unsubscribe) || void 0 === e || e.call(t)
                        }
                    }
                }, [d, N.is_logged_in, N.loginid, U, I]), i.useEffect(() => {
                    C(N, f)
                }, [N.is_options_blocked, null === (r = N.account_settings) || void 0 === r ? void 0 : r.country_code, N.clients_country]);
                let Z = () => {
                        D.ServerTime.init(f), y.setDBotEngineStores(), D.ApiHelpers.setInstance(y.api_helpers_store), Promise.resolve().then(a.bind(a, 18908)).then(e => {
                            let {
                                default: t
                            } = e;
                            t.init(v)
                        })
                    },
                    B = () => {
                        var e;
                        Z();
                        let t = () => {
                            let {
                                active_symbols: e
                            } = D.ApiHelpers.instance;
                            e.retrieveActiveSymbols(!0).then(() => {
                                j(!1)
                            })
                        };
                        if (null === D.ApiHelpers || void 0 === D.ApiHelpers ? void 0 : null === (e = D.ApiHelpers.instance) || void 0 === e ? void 0 : e.active_symbols) t();
                        else {
                            let e = setInterval(() => {
                                var a;
                                (null === D.ApiHelpers || void 0 === D.ApiHelpers ? void 0 : null === (a = D.ApiHelpers.instance) || void 0 === a ? void 0 : a.active_symbols) && (clearInterval(e), t())
                            }, 1e3)
                        }
                    };
                return (i.useEffect(() => {
                    d && (Z(), j(!0), !N.is_logged_in && B())
                }, [d]), i.useEffect(() => {
                    N.is_logged_in && N.is_landing_company_loaded && d && B()
                }, [N.is_landing_company_loaded, d, N.loginid]), (0, i.useEffect)(() => {
                    aR(!0), N && aO(N)
                }, []), null == f ? void 0 : f.error) ? null : _ ? (0, l.jsx)(m.Z, {
                    message: (0, A.NC)("Initializing your account...")
                }) : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(aL.f, {
                        theme: w ? "dark" : "light",
                        children: [(0, l.jsx)(aZ, {}), (0, l.jsxs)("div", {
                            className: "bot-dashboard bot",
                            "data-testid": "dt_bot_dashboard",
                            children: [(0, l.jsx)(aU, {}), (0, l.jsx)(ir, {}), (0, l.jsx)(lw, {}), (0, l.jsx)(aF, {}), (0, l.jsx)(aC, {}), (0, l.jsx)(o.Ix, {
                                limit: 3,
                                draggable: !1
                            }), (0, l.jsx)(b, {})]
                        })]
                    })
                })
            })
        },
        45927: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(85893),
                n = a(63387),
                l = a.n(n);
            let i = e => {
                let {
                    message: t,
                    className: a,
                    type: n
                } = e;
                return (0, s.jsx)("div", {
                    className: l()("dc-field", a, {
                        "dc-field--error": "error" === n,
                        "dc-field--warn": "warn" === n
                    }),
                    children: t
                })
            }
        },
        30394: function(e, t, a) {
            a.d(t, {
                Z: () => x
            });
            var s = a("85893"),
                n = a("67294"),
                l = a("63387"),
                i = a.n(l),
                r = a("82106"),
                o = a("86278"),
                d = a("14244"),
                c = a("26088"),
                _ = a("92868"),
                u = a("2502"),
                m = a("45452");
            let x = e => {
                let {
                    alignment: t,
                    children: a,
                    className: l,
                    classNameBubble: x,
                    classNameTarget: h,
                    classNameTargetIcon: p,
                    counter: j,
                    disable_message_icon: v,
                    disable_target_icon: b,
                    has_error: y,
                    icon: g,
                    id: f,
                    is_open: N,
                    is_bubble_hover_enabled: C,
                    margin: w = 0,
                    message: k,
                    onBubbleClose: T,
                    onBubbleOpen: E,
                    onClick: S = () => void 0,
                    relative_render: A = !1,
                    should_disable_pointer_events: I = !1,
                    should_show_cursor: R,
                    zIndex: M = "1",
                    data_testid: O,
                    arrow_styles: D
                } = e, L = n.useRef(), [U, Z] = n.useState(void 0), [B, F] = n.useState(!1), {
                    isDesktop: z
                } = (0, u.F)(), [P, X] = (0, o.X)(null, !0), [H, $] = (0, o.m)(), V = n.useMemo(() => !z && void 0 === N, [z, N]);
                n.useEffect(() => {
                    L.current && Z(L.current)
                }, [y]), n.useEffect(() => {
                    !X && V && F(!1)
                }, [X, V]);
                let G = () => {
                        E && E()
                    },
                    q = () => {
                        T && T()
                    },
                    Y = i()(p, g),
                    W = X && k && (!V || B);
                return (0, s.jsxs)("div", {
                    ref: P,
                    className: i()({
                        "dc-popover__wrapper": A
                    }),
                    onClick: e => {
                        S(e), V && F(!B)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [A && (0, s.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: M
                        },
                        children: (0, s.jsx)("div", {
                            ref: L,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (U || !A) && (0, s.jsx)(r.Popover, {
                        isOpen: N ? ? (W || C && $),
                        positions: [t],
                        padding: w + 8,
                        containerClassName: i()({
                            "react-tiny-popover-container--disabled-pointer-event": I,
                            "react-tiny-popover-cursor-option": R
                        }),
                        ...A ? {
                            parentElement: U,
                            contentLocation: e => {
                                let {
                                    childRect: a,
                                    popoverRect: s,
                                    nudgedLeft: n
                                } = e, l = document.body.clientWidth, i = a.right + (s.width - a.width / 2), r = 0, o = 0;
                                switch (t) {
                                    case "left":
                                        o = -1 * Math.abs((s.height > s.width ? n : s.width) + w), r = a.height > s.height ? (a.height - s.height) / 2 : -((s.height - a.height) / 2 * 1);
                                        break;
                                    case "right":
                                        o = s.width + w, r = a.height > s.height ? (a.height - s.height) / 2 : -((s.height - a.height) / 2 * 1);
                                        break;
                                    case "top":
                                        o = i > l ? -1 * Math.abs(i - l) : 0, r = -1 * Math.abs(s.height + w);
                                        break;
                                    case "bottom":
                                        o = i > l ? -1 * Math.abs(i - l) : 0, r = a.height + w
                                }
                                return {
                                    top: r,
                                    left: o
                                }
                            }
                        } : {
                            containerStyle: {
                                zIndex: M
                            }
                        },
                        content: e => {
                            let {
                                position: t,
                                childRect: a,
                                popoverRect: n
                            } = e;
                            return (0, s.jsx)(r.ArrowContainer, {
                                position: t,
                                childRect: a,
                                popoverRect: n,
                                arrowColor: y ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: A ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${y?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...D
                                },
                                children: (0, s.jsxs)("div", {
                                    id: f,
                                    onMouseEnter: G,
                                    onMouseLeave: q,
                                    className: i()(x, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": y
                                    }),
                                    ref: H,
                                    children: [!v && "info" === g && (0, s.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, s.jsx)(d.Z, {})
                                    }), y && (0, s.jsx)(m.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: k
                                    }) || (0, s.jsx)(m.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: k
                                    })]
                                })
                            })
                        },
                        children: (0, s.jsx)("div", {
                            "data-testid": O,
                            className: i()("dc-popover", l),
                            id: f,
                            children: (0, s.jsxs)("div", {
                                className: i()(h, "dc-popover__target"),
                                children: [!b && (0, s.jsxs)("i", {
                                    className: k ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === g && (0, s.jsx)(d.Z, {
                                        className: Y
                                    }), "question" === g && (0, s.jsx)(_.Z, {
                                        className: Y
                                    }), "dot" === g && (0, s.jsx)(c.Z, {
                                        className: Y
                                    }), "counter" === g && (0, s.jsx)("span", {
                                        className: Y,
                                        children: j
                                    })]
                                }), a]
                            })
                        })
                    })]
                })
            }
        },
        62873: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return n
                }
            });
            var s = a(46883);
            a(56803);
            let n = s.Z
        },
        46883: function(e, t, a) {
            a.d(t, {
                Z: () => u
            });
            var s = a("85893"),
                n = a("67294"),
                l = a("63387"),
                i = a.n(l);
            let r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => void 0,
                    t = n.useRef(!1);
                !t.current && (e(), t.current = !0)
            };
            var o = a("40150"),
                d = a("89606");
            let c = e => {
                    let {
                        className: t,
                        count: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: i()("dc-counter", t),
                        children: a
                    })
                },
                _ = e => {
                    let {
                        active_icon_color: t = "",
                        active_tab_ref: a,
                        bottom: l = !1,
                        className: r = "",
                        count: o,
                        header_content: _,
                        header_fit_content: u = !1,
                        icon_color: m = "",
                        icon_size: x = 0,
                        icon: h,
                        id: p = "",
                        is_active: j,
                        is_label_hidden: v,
                        is_scrollable: b,
                        label: y,
                        onClick: g,
                        setActiveLineStyle: f,
                        top: N
                    } = e;
                    n.useEffect(() => {
                        f()
                    }, [o, y, _, f]);
                    let C = i()("dc-tabs__item", {
                            "dc-tabs__active": j,
                            [`dc-tabs__active--${r}`]: r && j,
                            "dc-tabs__item--top": N,
                            "dc-tabs__item--bottom": l,
                            "dc-tabs__item--header-fit-content": u,
                            "dc-tabs__item--is-hidden": v,
                            [`dc-tabs__item--${r}`]: r,
                            "dc-tabs__item--is-scrollable-and-active": b && j
                        }),
                        w = j ? t : m;
                    return (0, s.jsxs)("li", {
                        id: p,
                        className: C,
                        style: {
                            color: w
                        },
                        onClick: g,
                        ref: a,
                        children: [h && (0, s.jsx)(d.J, {
                            icon: h,
                            size: x,
                            custom_color: w,
                            className: "dc-tabs__item__icon"
                        }), _ || y, !!o && (0, s.jsx)(c, {
                            className: "dc-tabs__item__counter",
                            count: o
                        })]
                    })
                };
            a("56803");
            let u = e => {
                let t, {
                        active_icon_color: a = "",
                        active_index: l = 0,
                        background_color: d = "",
                        bottom: c = !1,
                        center: u = !1,
                        children: m,
                        className: x = "",
                        fit_content: h = !1,
                        has_active_line: p = !0,
                        has_bottom_line: j = !0,
                        header_fit_content: v = !1,
                        history: b,
                        icon_color: y = "",
                        icon_size: g = 0,
                        is_100vw: f = !1,
                        is_full_width: N = !1,
                        is_overflow_hidden: C = !1,
                        is_scrollable: w = !1,
                        onTabItemClick: k,
                        should_update_hash: T = !1,
                        single_tab_has_no_label: E = !1,
                        top: S
                    } = e,
                    [A, I] = n.useState({}),
                    R = n.useRef(null),
                    M = n.useRef(null),
                    O = e => {
                        b.replace(`${b.location.pathname}${window.location.search}#${e}`)
                    },
                    D = n.useCallback(() => {
                        var e, t;
                        let a = null == M ? void 0 : null === (e = M.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                            s = null == R ? void 0 : null === (t = R.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        a && s ? I({
                            left: s.left - a.left,
                            width: s.width
                        }) : setTimeout(() => {
                            D()
                        }, 500)
                    }, []),
                    L = 0;
                r(() => {
                    if (L = l, T) {
                        let t = location.hash.slice(1),
                            a = m.findIndex(e => e && e.props && e.props.hash === t);
                        if (a > -1) L = a;
                        else {
                            var e;
                            let t = null === (e = m[L]) || void 0 === e ? void 0 : e.props,
                                a = t && t.hash;
                            a && O(a)
                        }
                    }
                    D()
                });
                let [U, Z] = n.useState(L);
                n.useEffect(() => {
                    U >= 0 && l !== U && (null == k || k(U)), D()
                }, [U, D]), n.useEffect(() => {
                    l >= 0 && l !== U && Z(l)
                }, [l]);
                let B = e => {
                        if (T) {
                            var t;
                            O(null === (t = m[e]) || void 0 === t ? void 0 : t.props["data-hash"])
                        }
                        Z(e), D()
                    },
                    F = m.filter(e => e);
                return t = w ? "unset" : h ? "150px" : `${(100/F.length).toFixed(2)}%`, (0, s.jsxs)("div", {
                    className: i()("dc-tabs", {
                        [`dc-tabs--${x}`]: x,
                        "dc-tabs--top": S,
                        "dc-tabs--100vw": f
                    }),
                    style: {
                        "--tab-width": `${t}`,
                        background: d
                    },
                    children: [(0, s.jsx)("div", {
                        className: i()({
                            [`dc-tabs__list--header--${x}`]: x
                        }),
                        children: (0, s.jsx)("ul", {
                            className: i()("dc-tabs__list", {
                                "dc-tabs__list--top": S,
                                "dc-tabs__list--border-bottom": j,
                                "dc-tabs__list--bottom": c,
                                "dc-tabs__list--center": u,
                                "dc-tabs__list--header-fit-content": v,
                                "dc-tabs__list--full-width": N,
                                [`dc-tabs__list--${x}`]: x,
                                "dc-tabs__list--overflow-hidden": C
                            }),
                            ref: M,
                            children: (0, s.jsxs)(o.Z, {
                                className: "dc-themed-scrollbars-wrapper",
                                is_only_horizontal: !0,
                                is_scrollbar_hidden: !0,
                                is_bypassed: !w,
                                children: [n.Children.map(m, (e, t) => {
                                    if (!e) return null;
                                    let {
                                        icon: n,
                                        label: l,
                                        id: i
                                    } = e.props, r = e.props["data-header-content"], o = e.props["data-count"];
                                    return (0, s.jsx)(_, {
                                        active_icon_color: a,
                                        className: x,
                                        count: o,
                                        icon: n,
                                        icon_color: y,
                                        icon_size: g,
                                        is_active: t === U,
                                        is_label_hidden: 1 === m.length && E,
                                        label: l,
                                        id: i,
                                        is_scrollable: w,
                                        top: S,
                                        bottom: c,
                                        header_fit_content: v,
                                        active_tab_ref: t === U ? R : null,
                                        header_content: r,
                                        onClick: () => B(t),
                                        setActiveLineStyle: D
                                    }, l)
                                }), p && !w && (0, s.jsx)("span", {
                                    className: i()("dc-tabs__active-line", {
                                        "dc-tabs__active-line--top": S,
                                        "dc-tabs__active-line--bottom": c,
                                        "dc-tabs__active-line--fit-content": h,
                                        "dc-tabs__active-line--header-fit-content": v,
                                        "dc-tabs__active-line--is-hidden": 1 === m.length && E
                                    }),
                                    style: A
                                })]
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: i()("dc-tabs__content", {
                            [`dc-tabs__content--${x}`]: x
                        }),
                        children: n.Children.map(m, (e, t) => {
                            if (!e) return null;
                            if (t === U) return e.props.children
                        })
                    })]
                })
            }
        },
        75324: function(e, t, a) {
            a.d(t, {
                Lv: function() {
                    return i
                },
                ZP: function() {
                    return r
                }
            });
            var s = a(67294),
                n = a(89471),
                l = a(32019);
            let i = () => {
                    let [e, t] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        let e = Date.now(),
                            a = setInterval(() => {
                                "function" == typeof window.Intercom ? (t(!0), clearInterval(a)) : Date.now() - e >= 5e3 && clearInterval(a)
                            }, 100);
                        return () => clearInterval(a)
                    }, []), e
                },
                r = e => {
                    let {
                        featureFlagValue: t
                    } = (0, l.Z)({
                        featureFlag: "enable_intercom_dbot"
                    }), a = (0, n.Gq)(t ? "https://static.deriv.com/scripts/intercom/v1.0.2.js" : null);
                    (0, s.useEffect)(() => {
                        var s;
                        let n;
                        if (!!t && "ready" === a && !!(null === (s = window) || void 0 === s ? void 0 : s.DerivInterCom)) return window.DerivInterCom.initialize({
                            hideLauncher: !0,
                            token: e
                        }), n = setInterval(() => {
                            var e;
                            (null === (e = window) || void 0 === e ? void 0 : e.Intercom) && clearInterval(n)
                        }, 500), () => {
                            clearInterval(n)
                        }
                    }, [t, a, e])
                }
        },
        83257: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = a(67294),
                n = a(78013);
            let l = () => {
                let {
                    ui: e
                } = (0, n.oR)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: a
                } = e;
                return {
                    toggleTheme: (0, s.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: a,
                    setDarkMode: t
                }
            }
        },
        15622: function(e, t, a) {
            a.r(t), a.d(t, {
                default: () => d
            });
            var s = a("85893"),
                n = a("67294"),
                l = a("96877"),
                i = a("57357"),
                r = a("78013"),
                o = a("44422");
            let d = (0, l.Pi)(e => {
                let {
                    prefix: t = "chart",
                    show_digits_stats: a
                } = e, {
                    client: l
                } = (0, r.oR)(), [d] = (0, n.useState)((0, i.Z)()), c = l.loginid ? `${t}-${l.loginid}` : `${t}-${d}`;
                return (0, s.jsx)(o.Z, {
                    show_digits_stats: a
                }, c)
            })
        },
        44422: function(e, t, a) {
            a.d(t, {
                Z: () => x
            });
            var s = a("85893"),
                n = a("67294"),
                l = a("63387"),
                i = a.n(l),
                r = a("96877"),
                o = a("49243"),
                d = a("78013"),
                c = a("47494"),
                _ = a("2502");
            let u = (0, n.memo)(e => {
                let {
                    updateChartType: t,
                    updateGranularity: a,
                    position: n,
                    isDesktop: l
                } = e;
                return (0, s.jsxs)(c.ToolbarWidget, {
                    position: n,
                    children: [(0, s.jsx)(c.ChartMode, {
                        portalNodeId: "modal_root",
                        onChartType: t,
                        onGranularity: a
                    }), l && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.StudyLegend, {
                            portalNodeId: "modal_root",
                            searchInputClassName: "data-hj-whitelist"
                        }), (0, s.jsx)(c.Views, {
                            portalNodeId: "modal_root",
                            onChartType: t,
                            onGranularity: a,
                            searchInputClassName: "data-hj-whitelist"
                        }), (0, s.jsx)(c.DrawTools, {
                            portalNodeId: "modal_root"
                        }), (0, s.jsx)(c.Share, {
                            portalNodeId: "modal_root"
                        })]
                    })]
                })
            });
            a("22798");
            let m = {},
                x = (0, r.Pi)(e => {
                    let {
                        show_digits_stats: t
                    } = e, {
                        common: a,
                        ui: l
                    } = (0, d.oR)(), {
                        chart_store: r,
                        run_panel: x,
                        dashboard: h
                    } = (0, d.oR)(), {
                        chart_type: p,
                        getMarketsOrder: j,
                        granularity: v,
                        onSymbolChange: b,
                        setChartStatus: y,
                        symbol: g,
                        updateChartType: f,
                        updateGranularity: N,
                        updateSymbol: C,
                        setChartSubscriptionId: w,
                        chart_subscription_id: k
                    } = r, T = (0, n.useRef)(k), {
                        isDesktop: E,
                        isMobile: S
                    } = (0, _.F)(), {
                        is_drawer_open: A
                    } = x, {
                        is_chart_modal_visible: I
                    } = h, R = {
                        assetInformation: !1,
                        countdown: !0,
                        isHighestLowestMarkerEnabled: !1,
                        language: a.current_language.toLowerCase(),
                        position: l.is_chart_layout_default ? "bottom" : "left",
                        theme: l.is_dark_mode_on ? "dark" : "light"
                    };
                    (0, n.useEffect)(() => () => {
                        o.Z.api.forgetAll("ticks")
                    }, []), (0, n.useEffect)(() => {
                        T.current = k
                    }, [k]), (0, n.useEffect)(() => {
                        !g && C()
                    }, [g, C]);
                    let M = e => {
                            e && o.Z.api.forget(e)
                        },
                        O = async (e, t) => {
                            var a, s, n;
                            try {
                                M(T.current);
                                let s = await o.Z.api.send(e);
                                w(null == s ? void 0 : s.subscription.id), s && t(s), 1 === e.subscribe && (m[null == s ? void 0 : s.subscription.id] = null === (a = o.Z.api.onMessage()) || void 0 === a ? void 0 : a.subscribe(e => {
                                    let {
                                        data: a
                                    } = e;
                                    t(a)
                                }))
                            } catch (e) {
                                (null == e ? void 0 : null === (s = e.error) || void 0 === s ? void 0 : s.code) === "MarketIsClosed" && t([]), console.log(null == e ? void 0 : null === (n = e.error) || void 0 === n ? void 0 : n.message)
                            }
                        };
                    if (!g) return null;
                    let D = !!(null === o.Z || void 0 === o.Z ? void 0 : o.Z.api);
                    return (0, s.jsx)("div", {
                        className: i()("dashboard__chart-wrapper", {
                            "dashboard__chart-wrapper--expanded": A && E,
                            "dashboard__chart-wrapper--modal": I && E
                        }),
                        dir: "ltr",
                        children: (0, s.jsx)(c.SmartChart, {
                            id: "dbot",
                            barriers: [],
                            showLastDigitStats: t,
                            chartControlsWidgets: null,
                            enabledChartFooter: !1,
                            chartStatusListener: e => y(!e),
                            toolbarWidget: () => (0, s.jsx)(u, {
                                updateChartType: f,
                                updateGranularity: N,
                                position: E ? "top" : "bottom",
                                isDesktop: E
                            }),
                            chartType: p,
                            isMobile: S,
                            enabledNavigationWidget: E,
                            granularity: v,
                            requestAPI: e => o.Z.api.send(e),
                            requestForget: () => {},
                            requestForgetStream: () => {},
                            requestSubscribe: O,
                            settings: R,
                            symbol: g,
                            topWidgets: () => (0, s.jsx)(c.ChartTitle, {
                                onChange: b
                            }),
                            isConnectionOpened: D,
                            getMarketsOrder: j,
                            isLive: !0,
                            leftMargin: 80
                        })
                    })
                })
        }
    }
]);