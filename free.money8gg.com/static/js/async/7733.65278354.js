"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["7733"], {
        43822: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tw
            });
            var l = n("85893"),
                i = n("67294"),
                o = n("67026"),
                a = n("92198"),
                r = n("89250"),
                s = n("88199"),
                c = n("30453"),
                d = n("37979"),
                u = n("2502"),
                h = n("33281"),
                m = n("66175"),
                g = n("22273"),
                _ = n("89471");
            let v = function() {
                let e = (0, r.TH)(),
                    t = (0, r.s0)();
                return {
                    deleteQueryString: function(n) {
                        let l = new URLSearchParams(e.search);
                        l.delete(n), t({
                            search: l.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            n = {};
                        return t.forEach((e, t) => {
                            n[t] = e
                        }), n
                    }(),
                    setQueryString: function(n) {
                        ! function(n) {
                            let l = new URLSearchParams(e.search);
                            Object.entries(n).forEach(e => {
                                let [t, n] = e;
                                void 0 === n ? l.delete(t) : l.set(t, n)
                            }), t({
                                search: l.toString()
                            }, {
                                replace: !0
                            })
                        }(n)
                    }
                }
            };

            function p(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: l
                } = v(), {
                    isDesktop: o
                } = (0, u.F)(), [a, r] = (0, _.Sx)(), s = () => {
                    if (!n.modal && r.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = n.modal;
                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];
                            r.setAll([]), t.forEach(e => {
                                r.set(e, !o)
                            }), r.set(n, !0)
                        }
                    }
                };
                return (0, i.useEffect)(() => {
                    s()
                }, []), (0, i.useEffect)(() => {
                    !(null == n ? void 0 : n.modal) && r.reset()
                }, [null == n ? void 0 : n.modal]), (0, _.OR)("popstate", () => {
                    s()
                }), {
                    hideModal: e => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) a.forEach((e, n) => {
                                r.set(n, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (n.length > 1) {
                                    let e = n.shift();
                                    n.forEach(e => {
                                        r.set(e, !1)
                                    }), n = [e ? ? ""], l({
                                        modal: e
                                    })
                                } else 1 === n.length ? l({
                                    modal: n[0]
                                }) : t("modal")
                            } else {
                                let e = n.pop(),
                                    i = n.slice(-1)[0];
                                i ? (r.set(e, !1), r.set(i, !0)) : r.set(e, !1), 0 === n.length ? t("modal") : l({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => a.get(e) || !1,
                    showModal: (e, t) => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(","),
                                a = n.slice(-1)[0];
                            if (a === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? r.set(a, !1) : r.set(a, (null == t ? void 0 : t.shouldStackModals) || !o), r.set(e, !0), n.push(e), l({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else r.set(e, !0), l({
                            modal: e
                        })
                    }
                }
            }
            let x = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial"],
                    n = t[Number(e)],
                    l = window.location.href.split("#")[0];
                return `${l}#${n}`
            };
            var b = n("32305"),
                f = n("96223"),
                y = n("3693"),
                w = n("98146"),
                j = n("64410"),
                C = n("918"),
                I = n("50051"),
                k = n("16496"),
                N = n("59001"),
                L = n("57218"),
                Z = n("12811"),
                S = n("28505"),
                z = n("73971"),
                E = n("99243"),
                M = n("63066"),
                T = n("96396"),
                D = n("14249"),
                R = n("45322"),
                F = n("34273"),
                A = n("473");
            let U = [{
                code: "EN",
                displayName: "English",
                icon: (0, l.jsx)(b.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(b.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(b.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, l.jsx)(f.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(f.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(f.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, l.jsx)(y.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(y.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(y.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, l.jsx)(w.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(w.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(w.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, l.jsx)(j.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(j.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(j.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, l.jsx)(C.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(C.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(C.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, l.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, l.jsx)(k.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(k.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(k.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, l.jsx)(N.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(N.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(N.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, l.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, l.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, l.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, l.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, l.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, l.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, l.jsx)(T.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(T.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(T.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, l.jsx)(D.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(D.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(D.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, l.jsx)(R.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(R.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(R.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, l.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, l.jsx)(A.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(A.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(A.Z, {
                    height: 14.67,
                    width: 22
                })
            }];
            var P = n("48059"),
                O = n("44412"),
                W = n("96877"),
                $ = n("83257"),
                H = n("53261"),
                q = n("21456"),
                B = n("64915");
            let V = (0, W.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, $.Z)(), {
                    localize: n
                } = (0, P.T_)();
                return (0, l.jsx)(B.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, l.jsx)(q.Z, {
                        iconSize: "xs"
                    }) : (0, l.jsx)(H.Z, {
                        iconSize: "xs"
                    })
                })
            });
            var G = n("79655"),
                X = n("45452"),
                J = n("12838");
            let K = () => {
                    let e = J.fV.getValue(J.sE.configServerURL);
                    return e ? (0, l.jsxs)(X.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, l.jsx)(G.rU, {
                            className: "app-footer__endpoint-text",
                            to: m.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                Y = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                Q = () => {
                    let [e, t] = (0, i.useState)(!1), {
                        exit: n,
                        request: l,
                        screenChange: o,
                        screenElement: a
                    } = Y, r = (0, i.useCallback)(() => t(a.some(e => document[e])), [a]);
                    return (0, i.useEffect)(() => (o.forEach(e => {
                        document.addEventListener(e, r, !1)
                    }), () => {
                        o.forEach(e => {
                            document.removeEventListener(e, r, !1)
                        })
                    }), [r, o]), {
                        toggleFullScreenMode: i => {
                            null == i || i.stopPropagation();
                            let o = n.find(e => document[e]),
                                a = l.find(e => document.documentElement[e]);
                            e && o ? document[o]() : a ? document.documentElement[a]() : t(!1)
                        }
                    }
                };
            var ee = n("69914");
            let et = () => {
                let {
                    toggleFullScreenMode: e
                } = Q(), {
                    localize: t
                } = (0, P.T_)();
                return (0, l.jsx)(B.u, {
                    as: "button",
                    className: "app-footer__icon",
                    onClick: e,
                    tooltipContent: t("Full screen"),
                    children: (0, l.jsx)(ee.Z, {
                        iconSize: "xs"
                    })
                })
            };
            var en = n("11218");
            let el = () => {
                    let {
                        localize: e
                    } = (0, P.T_)();
                    return (0, l.jsx)(B.u, {
                        as: "a",
                        className: "app-footer__icon",
                        href: m.xOw.help_center,
                        target: "_blank",
                        tooltipContent: e("Help centre"),
                        children: (0, l.jsx)(en.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                ei = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: o
                    } = (0, P.T_)(), a = (0, i.useMemo)(() => {
                        var e;
                        return null === (e = U.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == n
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [n]);
                    return (0, l.jsxs)(B.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: o("Language"),
                        children: [a, (0, l.jsx)(X.Z, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                eo = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                ea = () => {
                    let [e, t] = (0, i.useState)(eo()), n = () => t(!0), l = () => t(!1);
                    return (0, i.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", l), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", l)
                    }), []), e
                },
                er = () => {
                    let [e, t] = (0, i.useState)("online"), n = ea();
                    return (0, i.useEffect)(() => {
                        n ? t("online") : t("offline")
                    }, [n]), e
                },
                es = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, P.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                ec = () => {
                    let e = er(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, i.useMemo)(() => es()[e], [e]);
                    return (0, l.jsx)(B.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, P.NC)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, l.jsx)("div", {
                            className: (0, o.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var ed = n("30381"),
                eu = n.n(ed),
                eh = n("78013"),
                em = n("27179"),
                eg = n("83606");
            let e_ = (0, W.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        common: t
                    } = (0, eh.oR)() ? ? {
                        common: {
                            server_time: eu()()
                        }
                    };
                    return (0, l.jsx)(B.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_server_time",
                        tooltipContent: t.server_time.format(em.kT),
                        children: (0, l.jsx)(eg.x, {
                            size: e ? "xs" : "sm",
                            children: t.server_time.format(em.Yp)
                        })
                    })
                }),
                ev = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, P.T_)(), {
                        hideModal: i,
                        isModalOpenFor: o,
                        showModal: a
                    } = p(), {
                        data: r
                    } = (0, g.Z)(!0);
                    return (0, l.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, l.jsx)(et, {}), (0, l.jsx)(ei, {
                            openLanguageSettingModal: () => a("DesktopLanguagesModal")
                        }), (0, l.jsx)(el, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(V, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(e_, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(ec, {}), (0, l.jsx)(K, {}), o("DesktopLanguagesModal") && (0, l.jsx)(O.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: U,
                            onClose: i,
                            onLanguageSwitch: e => {
                                n(e), i(), window.location.replace(x()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var ep = n("8015");
            let ex = {
                    aud: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, i.lazy)(() => n.e("3609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                eb = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, o = n ? ex.virtual : ex[null == t ? void 0 : t.toLowerCase()] || ex.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(o, {
                            iconSize: "sm"
                        })
                    })
                };
            var ef = n("79649");
            let ey = e => {
                var t;
                let {
                    allBalanceData: n
                } = e, {
                    accountList: o,
                    activeLoginid: a
                } = (0, ef.T)(), r = (0, i.useMemo)(() => null == o ? void 0 : o.find(e => e.loginid === a), [a, o]), s = null == n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : t[(null == r ? void 0 : r.loginid) ? ? ""];
                return {
                    data: (0, i.useMemo)(() => {
                        var e, t;
                        return r ? { ...r,
                            balance: (0, m.oC5)(null == s ? void 0 : null === (e = s.balance) || void 0 === e ? void 0 : e.toFixed((0, m.i4S)(s.currency))) ? ? "0",
                            currencyLabel: (null == r ? void 0 : r.is_virtual) ? (0, P.NC)("Demo") : null == r ? void 0 : r.currency,
                            icon: (0, l.jsx)(eb, {
                                currency: null == r ? void 0 : null === (t = r.currency) || void 0 === t ? void 0 : t.toLowerCase(),
                                isVirtual: !!(null == r ? void 0 : r.is_virtual)
                            }),
                            isVirtual: !!(null == r ? void 0 : r.is_virtual),
                            isActive: (null == r ? void 0 : r.loginid) === a
                        } : void 0
                    }, [r, a, n])
                }
            };
            var ew = n("96194"),
                ej = n("42913"),
                eC = n("77898"),
                eI = n("16857");
            let ek = () => {
                let {
                    isDesktop: e
                } = (0, u.F)();
                return e ? (0, l.jsx)("a", {
                    href: "https://money8gg.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, l.jsx)("img", {
                        src: "/moneyLogo.svg",
                        alt: "Money8gg Logo",
                        className: "app-header__logo"
                    })
                }) : null
            };
            var eN = n("24561");
            let eL = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, l.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eZ = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;
                    return (0, l.jsx)(eN.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, l.jsx)(eL, {
                            isMobile: t
                        })
                    })
                };
            var eS = n("30394"),
                ez = n("42457"),
                eE = n("62304"),
                eM = n("63387"),
                eT = n.n(eM);
            let eD = e => {
                let {
                    width: t,
                    height: n
                } = e;
                return (0, l.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };
            var eR = n("18286"),
                eF = n("85273"),
                eA = n("44884"),
                eU = n("37410"),
                eP = n("37528");
            let eO = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, l.jsx)(eU.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eW = e => Number(e.replace(/,/g, "")),
                e$ = () => (0, l.jsx)(eP.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eH = e => {
                    var t;
                    let {
                        oAuthLogout: n,
                        loginid: i,
                        is_logging_out: o
                    } = e, a = JSON.parse(localStorage.getItem("clientAccounts") || "{}"), r = i ? null === (t = a[i]) || void 0 === t ? void 0 : t.currency : "";
                    (null == i ? void 0 : i.includes("CR")) || null == i || i.includes("MF");
                    let {
                        has_wallet: s = !1
                    } = (0, eR.Z)() || {}, c = new URLSearchParams(window.location.search).get("account"), d = (null == i ? void 0 : i.startsWith("VRTC")) || "demo" === c || !1, u = (0, eF.mv)("cfds", s, d) || m.xOw.traders_hub, h = u;
                    try {
                        let e = new URL(u);
                        d ? e.searchParams.set("account", "demo") : r && e.searchParams.set("account", r), e.toString()
                    } catch (e) {
                        console.error("Error parsing redirect URL:", e)
                    }
                    return (0, l.jsxs)("div", {
                        className: "",
                        children: [(0, l.jsx)(e$, {}), (0, l.jsx)("div", {
                            className: eT()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !0
                            }),
                            children: (0, l.jsx)(eE.T.Footer, {
                                children: o ? (0, l.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, l.jsx)(eD, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, l.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: n,
                                    children: [(0, l.jsx)(X.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, P.NC)("Logout")
                                    }), (0, l.jsx)(eA.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })
                        })]
                    })
                },
                eq = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: i,
                        isVirtual: a,
                        activeLoginId: r,
                        oAuthLogout: c,
                        is_logging_out: d
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(eE.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, P.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, l.jsx)("span", {
                                className: (0, o.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(eE.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && i(e.loginid)
                                    },
                                    onResetBalance: a && r === e.loginid && 1e4 !== eW(e.balance) ? () => {
                                        var e;
                                        null === s.api_base || void 0 === s.api_base || null === (e = s.api_base.api) || void 0 === e || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, l.jsx)(e$, {}), (0, l.jsx)(eH, {
                            loginid: r,
                            oAuthLogout: c,
                            is_logging_out: d
                        })]
                    })
                },
                eB = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedMFAccountList: i,
                        switchAccount: a,
                        is_low_risk_country: r
                    } = e, s = (null == i ? void 0 : i.length) !== 0 && r ? (0, P.NC)("Eu Deriv accounts") : (0, P.NC)("Deriv accounts");
                    return (0, l.jsx)(eE.T.AccountsPanel, {
                        isOpen: !0,
                        title: s,
                        className: "account-switcher-panel",
                        children: i.map(e => (e.currencyLabel = (0, P.NC)("Multipliers"), (0, l.jsx)("span", {
                            className: (0, o.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, l.jsx)(eE.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && a(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
                };
            var eV = n("11527");
            let eG = e => {
                    var t, n;
                    let {
                        isVirtual: i,
                        tabs_labels: o,
                        is_low_risk_country: a
                    } = e, {
                        has_wallet: r = !1
                    } = (0, eR.Z)() || {}, s = new URLSearchParams(window.location.search).get("account"), c = i || "demo" === s || !1;
                    return a ? (0, l.jsx)(eE.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, P.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, l.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, l.jsx)(eE.T.AccountsItem, {
                                account: eO,
                                onSelectAccount: () => {}
                            }), (0, l.jsx)(e$, {}), (0, l.jsx)(eV.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => {
                                    let e = (0, eF.mv)("tradershub", r, c) || m.xOw.traders_hub;
                                    try {
                                        let t = new URL(e);
                                        c && t.searchParams.set("account", "demo"), e = t.toString()
                                    } catch (e) {
                                        console.error("Error parsing redirect URL:", e)
                                    }
                                    location.replace(e)
                                },
                                children: (0, l.jsx)(P.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, i ? null == o ? void 0 : null === (n = o.real) || void 0 === n ? void 0 : n.toLowerCase() : null == o ? void 0 : null === (t = o.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                eX = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: i,
                        modifiedMFAccountList: a,
                        is_low_risk_country: r,
                        switchAccount: s
                    } = e;
                    if (!r && i && (null == i ? void 0 : i.length) === 0) return null;
                    let c = (null == a ? void 0 : a.length) === 0 ? (0, P.NC)("Deriv accounts") : (0, P.NC)("Non-Eu Deriv account");
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(eE.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: i.map(e => (0, l.jsx)("span", {
                                className: (0, o.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(eE.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && s(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                eJ = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: i,
                        isVirtual: o,
                        tabs_labels: a,
                        is_low_risk_country: r,
                        oAuthLogout: s,
                        loginid: c,
                        is_logging_out: d
                    } = e, u = t && (null == t ? void 0 : t.length) > 0, h = n && (null == n ? void 0 : n.length) > 0;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [u ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eX, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: r
                            }), (0, l.jsx)(e$, {})]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eG, {
                                is_low_risk_country: r,
                                isVirtual: o,
                                tabs_labels: a
                            }), (0, l.jsx)(e$, {})]
                        }), h && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eB, {
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: r
                            }), (0, l.jsx)(e$, {})]
                        }), (0, l.jsx)(eH, {
                            oAuthLogout: s,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var eK = n("17481");
            let eY = (0, i.lazy)(() => n.e("8691").then(n.bind(n, 76697))),
                eQ = {
                    demo: (0, P.NC)("Demo"),
                    real: (0, P.NC)("Real")
                },
                e0 = e => {
                    var t;
                    let {
                        isVirtual: n,
                        modifiedCRAccountList: o,
                        modifiedMFAccountList: a,
                        modifiedVRTCRAccountList: r,
                        switchAccount: s,
                        activeLoginId: d,
                        client: u
                    } = e, {
                        oAuthLogout: h
                    } = (0, c.q)({
                        handleLogout: async () => u.logout(),
                        client: u
                    }), m = (0, eK.Gz)().includes((null === (t = u.account_settings) || void 0 === t ? void 0 : t.country_code) ? ? ""), g = !!n;
                    return ((0, i.useEffect)(() => {
                        var e, t;
                        let l = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];
                        !n && l && (l.style.maxHeight = "70vh", null === (t = (0, ez._)(".deriv-accordion__content", l)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [n]), g) ? (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(eq, {
                            modifiedVRTCRAccountList: r,
                            switchAccount: s,
                            activeLoginId: d,
                            isVirtual: g,
                            tabs_labels: eQ,
                            oAuthLogout: h,
                            is_logging_out: u.is_logging_out
                        })
                    }) : (0, l.jsx)(eJ, {
                        modifiedCRAccountList: o,
                        modifiedMFAccountList: a,
                        switchAccount: s,
                        isVirtual: g,
                        tabs_labels: eQ,
                        is_low_risk_country: m,
                        oAuthLogout: h,
                        loginid: d,
                        is_logging_out: u.is_logging_out
                    })
                },
                e1 = (0, W.Pi)(e => {
                    var t, n;
                    let {
                        activeAccount: o
                    } = e, {
                        isDesktop: a
                    } = (0, u.F)(), {
                        accountList: r
                    } = (0, ef.T)(), {
                        ui: c,
                        run_panel: d,
                        client: g
                    } = (0, eh.oR)(), {
                        accounts: _
                    } = g, {
                        toggleAccountsDialog: v,
                        is_accounts_switcher_on: p,
                        account_switcher_disabled_message: x
                    } = c, {
                        is_stop_button_visible: b
                    } = d, f = Object.keys(_).some(e => "wallet" === _[e].account_category), y = (0, i.useMemo)(() => null == r ? void 0 : r.map(e => {
                        var t, n, i, a, r, s, c, d;
                        return { ...e,
                            balance: (0, m.oC5)((null === (a = g.all_accounts_balance) || void 0 === a ? void 0 : null === (i = a.accounts) || void 0 === i ? void 0 : null === (n = i[null == e ? void 0 : e.loginid]) || void 0 === n ? void 0 : null === (t = n.balance) || void 0 === t ? void 0 : t.toFixed((0, m.i4S)(e.currency))) ? ? "0"),
                            currencyLabel: (null == e ? void 0 : e.is_virtual) ? eQ.demo : (null === (c = g.website_status) || void 0 === c ? void 0 : null === (s = c.currencies_config) || void 0 === s ? void 0 : null === (r = s[null == e ? void 0 : e.currency]) || void 0 === r ? void 0 : r.name) ? ? (null == e ? void 0 : e.currency),
                            icon: (0, l.jsx)(eb, {
                                currency: null == e ? void 0 : null === (d = e.currency) || void 0 === d ? void 0 : d.toLowerCase(),
                                isVirtual: !!(null == e ? void 0 : e.is_virtual)
                            }),
                            isVirtual: !!(null == e ? void 0 : e.is_virtual),
                            isActive: (null == e ? void 0 : e.loginid) === (null == o ? void 0 : o.loginid)
                        }
                    }), [r, null === (t = g.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (n = g.website_status) || void 0 === n ? void 0 : n.currencies_config, null == o ? void 0 : o.loginid]), w = (0, i.useMemo)(() => (null == y ? void 0 : y.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("CR")
                    })) ? ? [], [y]), j = (0, i.useMemo)(() => (null == y ? void 0 : y.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("MF")
                    })) ? ? [], [y]), C = (0, i.useMemo)(() => (null == y ? void 0 : y.filter(e => {
                        var t;
                        return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("VRT")
                    })) ? ? [], [y]), I = async e => {
                        if (e.toString() === (null == o ? void 0 : o.loginid)) return;
                        let t = JSON.parse(localStorage.getItem("accountsList") ? ? "{}")[e];
                        if (!t) return;
                        localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString());
                        let n = document.querySelector(".dtrader-iframe");
                        n && n.contentWindow && (n.contentWindow.postMessage({
                            type: "ACCOUNT_CHANGED",
                            newLoginId: e.toString(),
                            authToken: t,
                            clientAccounts: localStorage.getItem("clientAccounts")
                        }, "https://dtradertest.money8gg.com"), console.log(`Account switched to ${e}, notified DTrader iframe`)), await (null === s.api_base || void 0 === s.api_base ? void 0 : s.api_base.init(!0));
                        let l = new URLSearchParams(window.location.search),
                            i = y.find(t => t.loginid === e.toString());
                        if (!i) return;
                        let a = i.is_virtual ? "demo" : i.currency;
                        l.set("account", a), window.history.pushState({}, "", `${window.location.pathname}?${l.toString()}`)
                    };
                    return o && (f ? (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(h.a, {}),
                        children: (0, l.jsx)(eY, {
                            is_dialog_on: p,
                            toggleDialog: v
                        })
                    }) : (0, l.jsx)(eS.Z, {
                        className: "run-panel__info",
                        classNameBubble: "run-panel__info--bubble",
                        alignment: "bottom",
                        message: x,
                        zIndex: "5",
                        children: (0, l.jsxs)(eE.T, {
                            activeAccount: o,
                            isDisabled: b,
                            tabsLabels: eQ,
                            modalContentStyle: {
                                content: {
                                    top: a ? "30%" : "50%",
                                    borderRadius: "10px"
                                }
                            },
                            children: [(0, l.jsx)(eE.T.Tab, {
                                title: eQ.real,
                                children: (0, l.jsx)(e0, {
                                    modifiedCRAccountList: w,
                                    modifiedMFAccountList: j,
                                    switchAccount: I,
                                    activeLoginId: null == o ? void 0 : o.loginid,
                                    client: g
                                })
                            }), (0, l.jsx)(eE.T.Tab, {
                                title: eQ.demo,
                                children: (0, l.jsx)(e0, {
                                    modifiedVRTCRAccountList: C,
                                    switchAccount: I,
                                    isVirtual: !0,
                                    activeLoginId: null == o ? void 0 : o.loginid,
                                    client: g
                                })
                            })]
                        })
                    }))
                });
            var e6 = n("31784"),
                e3 = n("17934"),
                e2 = n("41301"),
                e9 = n("68782");
            let e7 = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: i
                } = (0, u.F)();
                return (0, l.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, l.jsx)(e9.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, l.jsx)(eg.x, {
                        className: "ml-[1.6rem]",
                        size: i ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var e4 = n("21087"),
                e8 = n("39523"),
                e5 = n("75324"),
                te = n("74541");
            let tt = () => {
                    let [e, t] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        var e;
                        null === (e = window.LiveChatWidget) || void 0 === e || e.on("ready", e => {
                            "online" === e.state.availability && t(!0)
                        })
                    }, []), {
                        is_livechat_available: e
                    }
                },
                tn = (0, W.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        is_livechat_available: t
                    } = tt(), n = (0, e5.Lv)();
                    if (!t && !n) return null;
                    setInterval(() => {
                        if (n) {
                            var e;
                            null === (e = window.LiveChatWidget) || void 0 === e || e.call("destroy")
                        }
                    }, 10);
                    let i = () => {
                        var e;
                        n ? window.Intercom("show") : null === (e = window.LiveChatWidget) || void 0 === e || e.call("maximize")
                    };
                    return e ? (0, l.jsx)("div", {
                        onKeyDown: i,
                        onClick: i,
                        children: (0, l.jsx)(B.u, {
                            as: "button",
                            className: "app-footer__icon",
                            tooltipContent: (0, P.NC)("Live chat"),
                            children: (0, l.jsx)(te.Z, {
                                iconSize: "xs"
                            })
                        })
                    }) : (0, l.jsx)(te.Z, {
                        iconSize: "xs",
                        className: "mobile-menu__content__items--right-margin"
                    })
                });
            var tl = n("96819"),
                ti = n("68534"),
                to = n("64217"),
                ta = n("93217");
            let tr = e => {
                    let {
                        localize: t
                    } = (0, P.T_)(), {
                        is_dark_mode_on: n,
                        toggleTheme: i
                    } = (0, $.Z)(), {
                        oAuthLogout: o
                    } = (0, c.q)({
                        handleLogout: async () => null == e ? void 0 : e.logout(),
                        client: e
                    }), {
                        data: a
                    } = (0, g.Z)(!0), {
                        is_livechat_available: r
                    } = tt(), s = (0, e5.Lv)();
                    return {
                        config: [
                            [{
                                as: "a",
                                href: "https://money8gg.com",
                                label: t("Money8GG"),
                                LeftComponent: () => (0, l.jsx)("img", {
                                    src: "/moneyLogo.svg",
                                    alt: "Money8GG Logo",
                                    width: "16",
                                    height: "16",
                                    style: {
                                        marginRight: "8px"
                                    }
                                })
                            }, {
                                as: "a",
                                href: "https://money.money8gg.com",
                                label: t("Deposit/Withdraw"),
                                LeftComponent: tl.Z,
                                target: "_blank"
                            }, {
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: ti.Z,
                                RightComponent: (0, l.jsx)(ta.Z, {
                                    value: n,
                                    onChange: i
                                })
                            }].filter(Boolean), [{
                                as: "button",
                                label: t("Risk Disclaimer"),
                                LeftComponent: to.Z,
                                onClick: () => {
                                    let e = new CustomEvent("openRiskDisclaimerModal");
                                    document.dispatchEvent(e)
                                }
                            }, r || s ? {
                                as: "button",
                                label: t("Live chat"),
                                LeftComponent: tn,
                                onClick: () => {
                                    var e;
                                    s ? window.Intercom("show") : null === (e = window.LiveChatWidget) || void 0 === e || e.call("maximize")
                                }
                            } : null].filter(Boolean), (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eA.Z,
                                onClick: o,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                ts = (0, W.Pi)(e => {
                    let {
                        onOpenSubmenu: t
                    } = e, {
                        isDesktop: n
                    } = (0, u.F)(), {
                        client: i
                    } = (0, eh.oR)(), a = n ? "sm" : "md", {
                        config: r
                    } = tr(i);
                    return (0, l.jsx)("div", {
                        className: "mobile-menu__content",
                        children: (0, l.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: r.map((e, n) => {
                                let i = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, l.jsx)("div", {
                                    className: (0, o.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !i
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: n,
                                            RightComponent: i,
                                            as: r,
                                            href: s,
                                            label: c,
                                            onClick: d,
                                            submenu: u,
                                            target: h,
                                            isActive: m
                                        } = e, g = "Deriv.com" === c;
                                        return "a" === r ? (0, l.jsx)(e8.s, {
                                            as: "a",
                                            className: (0, o.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !g,
                                                "mobile-menu__content__items__item--active": m
                                            }),
                                            disableHover: !0,
                                            href: s,
                                            leftComponent: (0, l.jsx)(n, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: h,
                                            children: (0, l.jsx)(eg.x, {
                                                size: a,
                                                children: c
                                            })
                                        }, c) : (0, l.jsx)(e8.s, {
                                            as: "button",
                                            className: (0, o.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !g,
                                                "mobile-menu__content__items__item--active": m
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, l.jsx)(n, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: () => {
                                                u && t ? t(u) : d && d()
                                            },
                                            rightComponent: u ? (0, l.jsx)(e4.Z, {
                                                className: "mobile-menu__content__items--chevron",
                                                iconSize: "xs"
                                            }) : i,
                                            children: (0, l.jsx)(eg.x, {
                                                size: a,
                                                children: c
                                            })
                                        }, c)
                                    })
                                }, n)
                            })
                        })
                    })
                }),
                tc = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: o,
                        localize: a
                    } = (0, P.T_)(), {
                        isDesktop: r
                    } = (0, u.F)(), s = (0, i.useMemo)(() => {
                        var e;
                        return null === (e = U.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === o
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [o]);
                    return (0, l.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, l.jsx)(eg.x, {
                            size: r ? "md" : "lg",
                            weight: "bold",
                            children: a("Menu")
                        }), !t && (0, l.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [s, (0, l.jsx)(eg.x, {
                                className: "ml-[0.4rem]",
                                size: r ? "xs" : "sm",
                                weight: "bold",
                                children: o
                            })]
                        })]
                    })
                };
            var td = n("21654"),
                tu = n("66153"),
                th = n("88339");
            let tm = () => {
                let {
                    localize: e
                } = (0, P.T_)(), t = [{
                    icon: td.Z,
                    label: e("Open positions"),
                    href: m.xOw.positions
                }, {
                    icon: tu.Z,
                    label: e("Trade table"),
                    href: m.xOw.profit
                }, {
                    icon: th.Z,
                    label: e("Statement"),
                    href: m.xOw.statement
                }];
                return (0, l.jsx)("div", {
                    className: "mobile-menu__content__items",
                    children: (0, l.jsx)("div", {
                        className: "mobile-menu__content__items--padding",
                        children: t.map(e => {
                            let {
                                icon: t,
                                label: n,
                                href: i
                            } = e;
                            return (0, l.jsx)(e8.s, {
                                as: "a",
                                className: "mobile-menu__content__items__item mobile-menu__content__items__icons",
                                disableHover: !0,
                                href: i,
                                leftComponent: (0, l.jsx)(t, {
                                    className: "mobile-menu__content__items--right-margin",
                                    iconSize: "xs"
                                }),
                                children: (0, l.jsx)(eg.x, {
                                    size: "sm",
                                    children: n
                                })
                            }, n)
                        })
                    })
                })
            };
            var tg = n("89816");
            let t_ = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsx)("button", {
                        onClick: t,
                        children: (0, l.jsx)(tg.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                tv = () => {
                    let [e, t] = (0, i.useState)(!1), [n, o] = (0, i.useState)(null), [a, r] = (0, i.useState)(!1), {
                        currentLang: s = "EN",
                        localize: c,
                        switchLanguage: d
                    } = (0, P.T_)(), {
                        hideModal: h,
                        isModalOpenFor: m,
                        showModal: g
                    } = p(), {
                        isDesktop: _
                    } = (0, u.F)();
                    (0, i.useEffect)(() => {
                        let e = () => {
                            r(!0)
                        };
                        return document.addEventListener("openRiskDisclaimerModal", e), () => {
                            document.removeEventListener("openRiskDisclaimerModal", e)
                        }
                    }, []);
                    let v = () => {
                            t(!1), o(null)
                        },
                        b = !!m("MobileLanguagesDrawer");
                    return _ ? null : (0, l.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, l.jsx)("div", {
                            className: "mobile-menu__toggle",
                            children: (0, l.jsx)(t_, {
                                onClick: () => t(!0)
                            })
                        }), (0, l.jsxs)(e3.d, {
                            isOpen: e,
                            onCloseDrawer: v,
                            width: "29.5rem",
                            children: [(0, l.jsx)(e3.d.Header, {
                                onCloseDrawer: v,
                                children: (0, l.jsx)(tc, {
                                    hideLanguageSetting: b,
                                    openLanguageSetting: () => g("MobileLanguagesDrawer")
                                })
                            }), (0, l.jsx)(e3.d.Content, {
                                children: b ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, l.jsx)(e7, {
                                            buttonText: c("Language"),
                                            onClick: h
                                        })
                                    }), (0, l.jsx)(e2.I, {
                                        isOpen: !0,
                                        languages: U,
                                        onClose: h,
                                        onLanguageSwitch: e => {
                                            d(e), window.location.replace(x()), window.location.reload()
                                        },
                                        selectedLanguage: s,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : "reports" === n ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, l.jsx)(e7, {
                                            buttonText: c("Reports"),
                                            onClick: () => o(null)
                                        })
                                    }), (0, l.jsx)(tm, {})]
                                }) : (0, l.jsx)(ts, {
                                    onOpenSubmenu: e => o(e)
                                })
                            }), (0, l.jsxs)(e3.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, l.jsx)(e_, {}), (0, l.jsx)(ec, {})]
                            })]
                        }), (0, l.jsx)(e6.Z, {
                            is_open: a,
                            title: c("Risk Disclaimer"),
                            onClose: () => r(!1),
                            className: "risk-disclaimer-modal",
                            has_close_icon: !0,
                            children: (0, l.jsxs)("div", {
                                className: "risk-disclaimer-modal__content",
                                children: [(0, l.jsx)(X.Z, {
                                    size: _ ? "s" : "xs",
                                    lineHeight: "m",
                                    children: c("Trading involves significant risks and is not suitable for all investors. Money8GG offers automated trading bots that can help with execution, but cannot guarantee profits. Please consider the following before using our platform:")
                                }), (0, l.jsxs)("ul", {
                                    className: "risk-disclaimer-modal__list",
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: _ ? "s" : "xs",
                                            lineHeight: "m",
                                            children: c("You may lose part or all of your invested capital. Never trade with money you cannot afford to lose.")
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: _ ? "s" : "xs",
                                            lineHeight: "m",
                                            children: c("Past performance of any trading system or methodology is not necessarily indicative of future results.")
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: _ ? "s" : "xs",
                                            lineHeight: "m",
                                            children: c("Automated trading carries specific risks including system failures, connectivity issues, and bot configuration errors.")
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: _ ? "s" : "xs",
                                            lineHeight: "m",
                                            children: c("It is your responsibility to understand how the platform works, test your strategy, and monitor your bot's performance.")
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "risk-disclaimer-modal__footer",
                                    children: (0, l.jsx)(eV.z, {
                                        primary: !0,
                                        onClick: () => r(!1),
                                        children: c("I understand")
                                    })
                                })]
                            })
                        })]
                    })
                },
                tp = () => {
                    let {
                        localize: e
                    } = (0, P.T_)(), {
                        isDesktop: t
                    } = (0, u.F)(), [n, o] = (0, i.useState)(!1), a = () => {
                        o(!1)
                    };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(ep.Z, {
                            secondary: !0,
                            className: "risk-disclaimer-button",
                            onClick: () => {
                                o(!0)
                            },
                            children: e("Risk Disclaimer")
                        }), (0, l.jsx)(e6.Z, {
                            is_open: n,
                            title: e("Risk Disclaimer"),
                            onClose: a,
                            className: "risk-disclaimer-modal",
                            has_close_icon: !0,
                            children: (0, l.jsxs)("div", {
                                className: "risk-disclaimer-modal__content",
                                children: [(0, l.jsx)(X.Z, {
                                    size: t ? "s" : "xs",
                                    lineHeight: "m",
                                    children: e('Deriv offers complex derivatives, such as options and contracts for difference ("CFDs"). These products may not be suitable for all clients, and trading them puts you at risk. Please make sure that you understand the following risks before trading Deriv products:')
                                }), (0, l.jsxs)("ul", {
                                    className: "risk-disclaimer-modal__list",
                                    children: [(0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: t ? "s" : "xs",
                                            lineHeight: "m",
                                            children: e("You may lose some or all of the money you invest in the trade.")
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: t ? "s" : "xs",
                                            lineHeight: "m",
                                            children: e("If your trade involves currency conversion, exchange rates will affect your profit and loss.")
                                        })
                                    }), (0, l.jsx)("li", {
                                        children: (0, l.jsx)(X.Z, {
                                            size: t ? "s" : "xs",
                                            lineHeight: "m",
                                            children: e("You should never trade with borrowed money or with money you cannot afford to lose.")
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: "risk-disclaimer-modal__footer",
                                    children: (0, l.jsx)(ep.Z, {
                                        primary: !0,
                                        onClick: a,
                                        children: e("I understand")
                                    })
                                })]
                            })
                        })]
                    })
                },
                tx = () => (0, l.jsx)("button", {
                    onClick: () => {
                        window.open("https://t.me/money8ggtrades", "_blank")
                    },
                    className: "telegram-banner",
                    style: {
                        backgroundColor: "#0088cc",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        padding: "6px 12px",
                        fontSize: "13px",
                        fontWeight: "500",
                        cursor: "pointer",
                        marginLeft: "8px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        minHeight: "32px",
                        transition: "all 0.2s ease"
                    },
                    onMouseEnter: e => {
                        e.currentTarget.style.backgroundColor = "#006bb3", e.currentTarget.style.transform = "scale(1.02)"
                    },
                    onMouseLeave: e => {
                        e.currentTarget.style.backgroundColor = "#0088cc", e.currentTarget.style.transform = "scale(1)"
                    },
                    children: "Join Telegram"
                }),
                tb = () => {
                    let {
                        localize: e
                    } = (0, P.T_)();
                    return (0, l.jsx)(ep.Z, {
                        primary: !0,
                        className: "withdraw-deposit-button",
                        onClick: () => {
                            window.open("https://money.money8gg.com", "_blank")
                        },
                        style: {
                            backgroundColor: "red",
                            fontWeight: "bold"
                        },
                        children: e("Withdraw/Deposit Instantly")
                    })
                },
                tf = (0, W.Pi)(() => {
                    let {
                        isGBLoaded: e,
                        isGBAvailable: t
                    } = (0, ew.Z)(), {
                        isDesktop: n
                    } = (0, u.F)(), {
                        isAuthorizing: i,
                        activeLoginid: a
                    } = (0, ef.T)(), {
                        client: r
                    } = (0, eh.oR)() ? ? {}, {
                        data: s
                    } = ey({
                        allBalanceData: null == r ? void 0 : r.all_accounts_balance
                    }), {
                        accounts: h,
                        getCurrency: g
                    } = r ? ? {}, _ = Object.keys(h ? ? {}).some(e => (null == h ? void 0 : h[e].account_category) === "wallet");
                    null == g || g();
                    let {
                        localize: v
                    } = (0, P.T_)(), {
                        isOAuth2Enabled: p,
                        isSingleLoggingIn: x
                    } = (0, c.q)();
                    return (0, l.jsxs)(eC.h, {
                        className: (0, o.Z)("app-header", {
                            "app-header--desktop": n,
                            "app-header--mobile": !n
                        }),
                        children: [(0, l.jsxs)(eI.i, {
                            variant: "left",
                            children: [(0, l.jsx)(ek, {}), (0, l.jsx)(tv, {}), n && (0, l.jsx)(tp, {}), n && (0, l.jsx)(tb, {}), n && (0, l.jsx)(tx, {})]
                        }), !n && (0, l.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1
                            },
                            children: (0, l.jsx)(B.u, {
                                as: "a",
                                href: "https://t.me/money8ggtrades",
                                target: "_blank",
                                tooltipContent: v("Join our Telegram"),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "8px",
                                    borderRadius: "4px",
                                    backgroundColor: "#0088cc",
                                    transition: "all 0.2s ease"
                                },
                                children: (0, l.jsx)(ej.Z, {
                                    iconSize: "sm",
                                    style: {
                                        color: "white"
                                    }
                                })
                            })
                        }), (0, l.jsx)(eI.i, {
                            variant: "right",
                            children: i || x ? (0, l.jsx)(eZ, {
                                isLoggedIn: !0,
                                isMobile: !n,
                                speed: 3
                            }) : a ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(e1, {
                                    activeAccount: s
                                }), n && null]
                            }) : (0, l.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, l.jsx)(ep.Z, {
                                    tertiary: !0,
                                    onClick: async () => {
                                        if (p) {
                                            let e = new URLSearchParams(window.location.search).get("account") ? ? "",
                                                t = sessionStorage.getItem("query_param_currency") || e || "USD";
                                            try {
                                                await (0, d.P6)({
                                                    redirectCallbackUri: `${window.location.origin}/callback`,
                                                    ...t ? {
                                                        state: {
                                                            account: t
                                                        }
                                                    } : {}
                                                }).catch(e => {
                                                    console.error(e)
                                                })
                                            } catch (e) {
                                                console.error(e)
                                            }
                                        } else window.location.replace((0, m.O2o)())
                                    },
                                    children: (0, l.jsx)(P.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, l.jsx)(ep.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        window.open(m.xOw.signup)
                                    },
                                    children: (0, l.jsx)(P.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                })]
                            })
                        })]
                    })
                }),
                ty = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ? ? "light", {
                        ui: o
                    } = (0, eh.oR)() ? ? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: a
                    } = o, {
                        isDesktop: r,
                        isMobile: s,
                        isTablet: c
                    } = (0, u.F)();
                    return (0, i.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, i.useEffect)(() => {
                        s ? a("mobile") : c ? a("tablet") : a("desktop")
                    }, [r, s, c, a]), (0, l.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tw = () => {
                    var e;
                    let t;
                    let {
                        isDesktop: n
                    } = (0, u.F)(), {
                        isOAuth2Enabled: g,
                        isSingleLoggingIn: _
                    } = (0, c.q)(), v = "/callback" === window.location.pathname, p = "true" === a.Z.get("logged_state"), x = window.location.pathname.includes("endpoint"), b = JSON.parse(localStorage.getItem("clientAccounts") ? ? "{}"), f = new URLSearchParams(window.location.search), y = f.get("account") ? ? "", w = JSON.parse(localStorage.getItem("accountsList") ? ? "{}"), j = Object.keys(w).length > 0, C = Object.values(b).some(e => e.currency === y) || "demo" === y || "" === y, [I, k] = (0, i.useState)(C);
                    (0, i.useEffect)(() => (window.setClientHasCurrency = k, () => {
                        delete window.setClientHasCurrency
                    }), []);
                    let N = [...m.g$d, ...m.bs3],
                        L = N.includes(null === (e = f.get("account") ? ? "") || void 0 === e ? void 0 : e.toUpperCase()),
                        Z = [],
                        S = e => {
                            let {
                                data: n
                            } = e;
                            if ("authorize" === n.msg_type) {
                                var l;
                                let e = ((null == n ? void 0 : null === (l = n.authorize) || void 0 === l ? void 0 : l.account_list) || []).filter(e => 0 === e.is_disabled);
                                Z.push(e || []);
                                let i = new Set(Object.values(b).map(e => e.currency)),
                                    o = Z.flat(),
                                    a = "",
                                    r = o.some(e => i.has(e.currency) ? (e.currency, !1) : (console.log("Missing currency:", e.currency), sessionStorage.setItem("query_param_currency", e.currency), !0)),
                                    s = !1,
                                    c = "";
                                for (let t of e)
                                    if (t.loginid && !w[t.loginid]) {
                                        s = !0, (c = t.currency || "") && sessionStorage.setItem("query_param_currency", c);
                                        break
                                    }
                                if (r || s) k(!1);
                                else {
                                    let t = (null == e ? void 0 : e.find(e => e.currency === y)) || (null == e ? void 0 : e[0]),
                                        n = sessionStorage.getItem("query_param_currency") || (null == t ? void 0 : t.currency) || "USD";
                                    n = `account=${n}`, k(!0), !new URLSearchParams(window.location.search).has("account") && window.history.pushState({}, "", `${window.location.pathname}?${n}`), k(!0)
                                }
                                t && (null == t || t.unsubscribe())
                            }
                        };
                    return (0, i.useEffect)(() => {
                        L && s.api_base.api && (t = s.api_base.api.onMessage().subscribe(S))
                    }, []), (0, i.useEffect)(() => {
                        y && sessionStorage.setItem("query_param_currency", y);
                        let e = g && !x && !v && !I;
                        if (p && !j && g && !x && !v || e) {
                            let e = sessionStorage.getItem("query_param_currency") || y || "USD";
                            e && sessionStorage.setItem("query_param_currency", e);
                            try {
                                (0, d.P6)({
                                    redirectCallbackUri: `${window.location.origin}/callback`,
                                    ...e ? {
                                        state: {
                                            account: e
                                        }
                                    } : {}
                                }).catch(e => {
                                    console.error(e)
                                })
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }, [p, j, g, x, v, I]), (0, l.jsxs)("div", {
                        className: (0, o.Z)("layout", {
                            responsive: n
                        }),
                        children: [!v && (0, l.jsx)(tf, {}), (0, l.jsxs)(ty, {
                            children: [_ && (0, l.jsx)(h.a, {
                                isFullScreen: !0
                            }), !_ && (0, l.jsx)(r.j3, {})]
                        }), !v && n && (0, l.jsx)(ev, {})]
                    })
                }
        },
        31784: function(e, t, n) {
            n.d(t, {
                Z: () => _
            });
            var l = n("85893"),
                i = n("67294"),
                o = n("63387"),
                a = n.n(o),
                r = n("73935"),
                s = n("81262"),
                c = n("1051"),
                d = n("14117"),
                u = n("76298"),
                h = n("29490");
            let m = e => {
                    let {
                        children: t,
                        className: n,
                        close_icon_color: o,
                        elements_to_ignore: s,
                        has_close_icon: m = !0,
                        has_return_icon: g = !1,
                        header: _,
                        header_background_color: v,
                        height: p,
                        id: x,
                        is_confirmation_modal: b,
                        is_open: f,
                        is_risk_warning_visible: y,
                        is_title_centered: w,
                        is_vertical_bottom: j,
                        is_vertical_centered: C,
                        is_vertical_top: I,
                        onMount: k,
                        onReturn: N,
                        onUnmount: L,
                        portalId: Z = "modal_root",
                        renderTitle: S,
                        should_close_on_click_outside: z,
                        should_header_stick_body: E = !0,
                        small: M,
                        title: T,
                        toggleModal: D,
                        width: R
                    } = e, F = i.useRef(document.createElement("div")), A = Z && document.getElementById(Z), U = i.useRef(A || document.getElementById(Z)), P = i.useRef(null), O = [".dc-datepicker__picker", ".dc-mobile-dialog", ".dc-dropdown-list", ".dc-dropdown__list", ".modal_root"], W = () => {
                        var e;
                        return null === (e = U.current) || void 0 === e ? void 0 : e.querySelectorAll(O.join(", ")).length
                    };
                    (0, c.t)(P, () => {
                        f && (null == D || D())
                    }, e => {
                        var t, n;
                        let l = null === (t = document.getElementById("popup_root")) || void 0 === t ? void 0 : t.hasChildNodes(),
                            i = e.path ? ? (null === (n = e.composedPath) || void 0 === n ? void 0 : n.call(e));
                        return z || m && !W() && f && !l && !(s && (null == i ? void 0 : i.find(e => s.includes(e))))
                    }), i.useEffect(() => {
                        var e, t;
                        return F.current.classList.add("dc-modal"), null == U || null === (t = U.current) || void 0 === t || null === (e = t.appendChild) || void 0 === e || e.call(t, F.current), null == k || k(), () => {
                            let e = null == U ? void 0 : U.current,
                                t = null == F ? void 0 : F.current;
                            e && t && (null == e ? void 0 : e.contains(t)) && (null == e || e.removeChild(t)), null == L || L()
                        }
                    }, []);
                    let $ = i.useCallback(e => {
                        "Escape" === e.key && (null == D || D())
                    }, [D]);
                    i.useEffect(() => (window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $)), [$]);
                    let H = S ? S() : null;
                    return r.createPortal((0, l.jsxs)("div", {
                        ref: P,
                        id: x,
                        className: a()("dc-modal__container", {
                            [`dc-modal__container_${n}`]: n,
                            "dc-modal__container--risk-message": y,
                            "dc-modal__container--small": M,
                            "dc-modal__container--is-vertical-centered": C,
                            "dc-modal__container--is-vertical-bottom": j,
                            "dc-modal__container--is-vertical-top": I,
                            "dc-modal__container--is-confirmation-modal": b
                        }),
                        style: {
                            height: p || "auto",
                            width: R || "auto"
                        },
                        children: [!y && (_ || T || H) && (0, l.jsxs)("div", {
                            className: a()("dc-modal-header", {
                                "dc-modal-header__border-bottom": !E,
                                [`dc-modal-header--${n}`]: n,
                                "dc-modal-header--is-title-centered": w
                            }),
                            style: {
                                background: v
                            },
                            children: [H && (0, l.jsx)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: a()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${n}`]: n
                                }),
                                children: H
                            }), T && (0, l.jsxs)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: a()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${n}`]: n
                                }),
                                children: [g && (0, l.jsx)(d.Z, {
                                    onClick: N,
                                    className: "dc-modal-header__icon"
                                }), T]
                            }), _ && (0, l.jsx)("div", {
                                className: a()("dc-modal-header__section", {
                                    [`dc-modal-header__section--${n}`]: n
                                }),
                                children: _
                            }), m && (0, l.jsx)("div", {
                                onClick: D,
                                className: "dc-modal-header__close",
                                role: "button",
                                children: (0, l.jsx)(u.Z, {
                                    height: "20px",
                                    width: "20px",
                                    color: o,
                                    "data-testid": "dt_modal_close_icon",
                                    fill: "var(--text-general)",
                                    className: "icon-general-fill-path"
                                })
                            })]
                        }), t]
                    }), F.current)
                },
                g = e => {
                    let {
                        children: t,
                        className: n,
                        close_icon_color: i,
                        elements_to_ignore: o,
                        exit_classname: a,
                        has_close_icon: r = !0,
                        has_return_icon: c = !1,
                        header: d,
                        header_background_color: u,
                        height: h,
                        id: g,
                        is_confirmation_modal: _,
                        is_open: v,
                        is_risk_warning_visible: p,
                        is_title_centered: x,
                        is_vertical_bottom: b,
                        is_vertical_centered: f,
                        is_vertical_top: y,
                        onEntered: w,
                        onExited: j,
                        onMount: C,
                        onReturn: I,
                        onUnmount: k,
                        portalId: N = "modal_root",
                        renderTitle: L,
                        should_close_on_click_outside: Z = !1,
                        should_header_stick_body: S = !0,
                        small: z,
                        title: E,
                        transition_timeout: M,
                        toggleModal: T,
                        width: D
                    } = e;
                    return (0, l.jsx)(s.Z, {
                        appear: !0,
                        in: v,
                        timeout: M || 250,
                        classNames: {
                            appear: "dc-modal__container--enter",
                            enter: "dc-modal__container--enter",
                            enterDone: "dc-modal__container--enter-done",
                            exit: a || "dc-modal__container--exit"
                        },
                        unmountOnExit: !0,
                        onEntered: w,
                        onExited: j,
                        children: (0, l.jsx)(m, {
                            className: n,
                            close_icon_color: i,
                            should_header_stick_body: S,
                            has_return_icon: c,
                            header: d,
                            header_background_color: u,
                            id: g,
                            is_open: v,
                            is_risk_warning_visible: p,
                            is_confirmation_modal: _,
                            is_vertical_bottom: b,
                            is_vertical_centered: f,
                            is_vertical_top: y,
                            is_title_centered: x,
                            title: E,
                            toggleModal: T,
                            has_close_icon: r,
                            height: h,
                            onMount: C,
                            onReturn: I,
                            onUnmount: k,
                            portalId: N,
                            renderTitle: L,
                            should_close_on_click_outside: Z,
                            small: z,
                            width: D,
                            elements_to_ignore: o,
                            children: t
                        })
                    })
                };
            g.Body = e => {
                let {
                    children: t,
                    className: n
                } = e;
                return (0, l.jsx)("div", {
                    className: a()("dc-modal-body", n),
                    children: t
                })
            }, g.Footer = e => {
                let {
                    children: t,
                    className: n,
                    has_separator: o,
                    is_bypassed: r
                } = e;
                return r ? (0, l.jsx)(i.Fragment, {
                    children: t
                }) : (0, l.jsx)("div", {
                    "data-testid": "dt_modal_footer",
                    className: a()("dc-modal-footer", {
                        "dc-modal-footer--separator": o
                    }, n),
                    children: t
                })
            };
            let _ = g
        },
        30394: function(e, t, n) {
            n.d(t, {
                Z: () => g
            });
            var l = n("85893"),
                i = n("67294"),
                o = n("63387"),
                a = n.n(o),
                r = n("82106"),
                s = n("86278"),
                c = n("14244"),
                d = n("26088"),
                u = n("92868"),
                h = n("2502"),
                m = n("45452");
            let g = e => {
                let {
                    alignment: t,
                    children: n,
                    className: o,
                    classNameBubble: g,
                    classNameTarget: _,
                    classNameTargetIcon: v,
                    counter: p,
                    disable_message_icon: x,
                    disable_target_icon: b,
                    has_error: f,
                    icon: y,
                    id: w,
                    is_open: j,
                    is_bubble_hover_enabled: C,
                    margin: I = 0,
                    message: k,
                    onBubbleClose: N,
                    onBubbleOpen: L,
                    onClick: Z = () => void 0,
                    relative_render: S = !1,
                    should_disable_pointer_events: z = !1,
                    should_show_cursor: E,
                    zIndex: M = "1",
                    data_testid: T,
                    arrow_styles: D
                } = e, R = i.useRef(), [F, A] = i.useState(void 0), [U, P] = i.useState(!1), {
                    isDesktop: O
                } = (0, h.F)(), [W, $] = (0, s.X)(null, !0), [H, q] = (0, s.m)(), B = i.useMemo(() => !O && void 0 === j, [O, j]);
                i.useEffect(() => {
                    R.current && A(R.current)
                }, [f]), i.useEffect(() => {
                    !$ && B && P(!1)
                }, [$, B]);
                let V = () => {
                        L && L()
                    },
                    G = () => {
                        N && N()
                    },
                    X = a()(v, y),
                    J = $ && k && (!B || U);
                return (0, l.jsxs)("div", {
                    ref: W,
                    className: a()({
                        "dc-popover__wrapper": S
                    }),
                    onClick: e => {
                        Z(e), B && P(!U)
                    },
                    "data-testid": "dt_popover_wrapper",
                    children: [S && (0, l.jsx)("div", {
                        className: "dc-popover__container",
                        style: {
                            zIndex: M
                        },
                        children: (0, l.jsx)("div", {
                            ref: R,
                            className: "dc-popover__container-relative",
                            "data-testid": "dt_popover_relative_container"
                        })
                    }), (F || !S) && (0, l.jsx)(r.Popover, {
                        isOpen: j ? ? (J || C && q),
                        positions: [t],
                        padding: I + 8,
                        containerClassName: a()({
                            "react-tiny-popover-container--disabled-pointer-event": z,
                            "react-tiny-popover-cursor-option": E
                        }),
                        ...S ? {
                            parentElement: F,
                            contentLocation: e => {
                                let {
                                    childRect: n,
                                    popoverRect: l,
                                    nudgedLeft: i
                                } = e, o = document.body.clientWidth, a = n.right + (l.width - n.width / 2), r = 0, s = 0;
                                switch (t) {
                                    case "left":
                                        s = -1 * Math.abs((l.height > l.width ? i : l.width) + I), r = n.height > l.height ? (n.height - l.height) / 2 : -((l.height - n.height) / 2 * 1);
                                        break;
                                    case "right":
                                        s = l.width + I, r = n.height > l.height ? (n.height - l.height) / 2 : -((l.height - n.height) / 2 * 1);
                                        break;
                                    case "top":
                                        s = a > o ? -1 * Math.abs(a - o) : 0, r = -1 * Math.abs(l.height + I);
                                        break;
                                    case "bottom":
                                        s = a > o ? -1 * Math.abs(a - o) : 0, r = n.height + I
                                }
                                return {
                                    top: r,
                                    left: s
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
                                childRect: n,
                                popoverRect: i
                            } = e;
                            return (0, l.jsx)(r.ArrowContainer, {
                                position: t,
                                childRect: n,
                                popoverRect: i,
                                arrowColor: f ? "var(--status-danger)" : "var(--general-active)",
                                arrowSize: 5,
                                arrowStyle: S ? {
                                    borderTop: "10px solid transparent",
                                    borderLeft: "10px solid transparent",
                                    borderRight: `10px solid ${f?"var(--status-danger)":"var(--general-active)"}`,
                                    transform: "rotate(315deg)",
                                    right: "0px",
                                    top: "5px",
                                    height: "10px",
                                    margin: "auto",
                                    bottom: "0px"
                                } : { ...D
                                },
                                children: (0, l.jsxs)("div", {
                                    id: w,
                                    onMouseEnter: V,
                                    onMouseLeave: G,
                                    className: a()(g, "dc-popover__bubble", {
                                        "dc-popover__bubble--error": f
                                    }),
                                    ref: H,
                                    children: [!x && "info" === y && (0, l.jsx)("i", {
                                        className: "dc-popover__bubble__icon",
                                        children: (0, l.jsx)(c.Z, {})
                                    }), f && (0, l.jsx)(m.Z, {
                                        size: "xxs",
                                        color: "colored-background",
                                        children: k
                                    }) || (0, l.jsx)(m.Z, {
                                        lineHeight: "md",
                                        size: "xxs",
                                        className: "dc-popover__bubble__text",
                                        children: k
                                    })]
                                })
                            })
                        },
                        children: (0, l.jsx)("div", {
                            "data-testid": T,
                            className: a()("dc-popover", o),
                            id: w,
                            children: (0, l.jsxs)("div", {
                                className: a()(_, "dc-popover__target"),
                                children: [!b && (0, l.jsxs)("i", {
                                    className: k ? "dc-popover__target__icon" : "dc-popover__target__icon--disabled",
                                    children: ["info" === y && (0, l.jsx)(c.Z, {
                                        className: X
                                    }), "question" === y && (0, l.jsx)(u.Z, {
                                        className: X
                                    }), "dot" === y && (0, l.jsx)(d.Z, {
                                        className: X
                                    }), "counter" === y && (0, l.jsx)("span", {
                                        className: X,
                                        children: p
                                    })]
                                }), n]
                            })
                        })
                    })]
                })
            }
        },
        86278: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return i
                },
                m: function() {
                    return o
                }
            });
            var l = n(67294);
            let i = (e, t) => {
                    let [n, i] = l.useState(!1), o = l.useRef(null), a = e || o, r = () => i(!0), s = () => i(!1);
                    return l.useEffect(() => {
                        let e = a.current;
                        if (e) return t ? (e.addEventListener("mouseenter", r), e.addEventListener("mouseleave", s)) : (e.addEventListener("mouseover", r), e.addEventListener("mouseout", s)), () => {
                            t ? (e.removeEventListener("mouseenter", r), e.removeEventListener("mouseleave", s)) : (e.removeEventListener("mouseover", r), e.removeEventListener("mouseout", s))
                        }
                    }, [a, t]), [a, n]
                },
                o = () => {
                    let [e, t] = l.useState(!1), n = l.useCallback(() => t(!0), []), i = l.useCallback(() => t(!1), []), o = l.useRef(null);
                    return [l.useCallback(e => {
                        o.current && (o.current.removeEventListener("mouseover", n), o.current.removeEventListener("mouseout", i)), o.current = e, o.current && (o.current.addEventListener("mouseover", n), o.current.addEventListener("mouseout", i))
                    }, [n, i]), e]
                }
        },
        75324: function(e, t, n) {
            n.d(t, {
                Lv: function() {
                    return a
                },
                ZP: function() {
                    return r
                }
            });
            var l = n(67294),
                i = n(89471),
                o = n(32019);
            let a = () => {
                    let [e, t] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let e = Date.now(),
                            n = setInterval(() => {
                                "function" == typeof window.Intercom ? (t(!0), clearInterval(n)) : Date.now() - e >= 5e3 && clearInterval(n)
                            }, 100);
                        return () => clearInterval(n)
                    }, []), e
                },
                r = e => {
                    let {
                        featureFlagValue: t
                    } = (0, o.Z)({
                        featureFlag: "enable_intercom_dbot"
                    }), n = (0, i.Gq)(t ? "https://static.deriv.com/scripts/intercom/v1.0.2.js" : null);
                    (0, l.useEffect)(() => {
                        var l;
                        let i;
                        if (!!t && "ready" === n && !!(null === (l = window) || void 0 === l ? void 0 : l.DerivInterCom)) return window.DerivInterCom.initialize({
                            hideLauncher: !0,
                            token: e
                        }), i = setInterval(() => {
                            var e;
                            (null === (e = window) || void 0 === e ? void 0 : e.Intercom) && clearInterval(i)
                        }, 500), () => {
                            clearInterval(i)
                        }
                    }, [t, n, e])
                }
        },
        18286: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var l = n(67294),
                i = n(78013);
            let o = {
                    Demo: {
                        dark: "IcWalletDerivDemoDark",
                        light: "IcWalletDerivDemoLight"
                    },
                    USD: {
                        dark: "IcWalletCurrencyUsd",
                        light: "IcWalletCurrencyUsd"
                    },
                    EUR: {
                        dark: "IcWalletCurrencyEur",
                        light: "IcWalletCurrencyEur"
                    },
                    AUD: {
                        dark: "IcWalletCurrencyAud",
                        light: "IcWalletCurrencyAud"
                    },
                    GBP: {
                        dark: "IcWalletCurrencyGbp",
                        light: "IcWalletCurrencyGbp"
                    },
                    BTC: {
                        dark: "IcWalletBitcoinDark",
                        light: "IcWalletBitcoinLight"
                    },
                    ETH: {
                        dark: "IcWalletEthereumDark",
                        light: "IcWalletEthereumLight"
                    },
                    USDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    eUSDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    tUSDT: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    UST: {
                        dark: "IcWalletTetherDark",
                        light: "IcWalletTetherLight"
                    },
                    LTC: {
                        dark: "IcWalletLiteCoinDark",
                        light: "IcWalletLiteCoinLight"
                    },
                    USDC: {
                        dark: "IcWalletUsdCoinDark",
                        light: "IcWalletUsdCoinLight"
                    },
                    XRP: {
                        dark: "IcWalletXrpDark",
                        light: "IcWalletXrpLight"
                    }
                },
                a = () => {
                    let e = (0, i.oR)(),
                        {
                            accounts: t,
                            all_accounts_balance: n
                        } = (null == e ? void 0 : e.client) || {
                            accounts: {},
                            all_accounts_balance: {
                                accounts: {}
                            }
                        },
                        a = (0, l.useMemo)(() => {
                            var l, i;
                            return e && (null === (i = Object.keys(t)) || void 0 === i ? void 0 : null === (l = i.filter(e => (null == t ? void 0 : t[e].account_category) === "wallet")) || void 0 === l ? void 0 : l.map(e => {
                                var l, i, a, r, s, c;
                                let d = null == t ? void 0 : t[e],
                                    u = d.currency,
                                    h = !!d.is_disabled,
                                    m = !!d.is_virtual,
                                    g = null === (l = d.landing_company_name) || void 0 === l ? void 0 : l.replace("maltainvest", "malta"),
                                    _ = null == d ? void 0 : null === (a = d.linked_to) || void 0 === a ? void 0 : null === (i = a.find(e => (null == e ? void 0 : e.platform) === "dtrade")) || void 0 === i ? void 0 : i.loginid,
                                    v = null == n ? void 0 : null === (s = n.accounts) || void 0 === s ? void 0 : null === (r = s[_ ? ? ""]) || void 0 === r ? void 0 : r.balance,
                                    p = !!(null == t ? void 0 : null === (c = t[_ ? ? ""]) || void 0 === c ? void 0 : c.is_disabled),
                                    x = m ? "Demo" : u || "",
                                    b = o[x],
                                    f = {
                                        header: {
                                            dark: `wallet-header__${x.toLowerCase()}-bg--dark`,
                                            light: `wallet-header__${x.toLowerCase()}-bg`
                                        },
                                        card: {
                                            dark: `wallet-card__${x.toLowerCase()}-bg--dark`,
                                            light: `wallet-card__${x.toLowerCase()}-bg`
                                        }
                                    };
                                return { ...d,
                                    dtrade_loginid: _,
                                    dtrade_balance: v,
                                    icons: b,
                                    icon_type: m && "demo",
                                    is_disabled: h,
                                    is_virtual: m,
                                    is_malta_wallet: "malta" === g,
                                    landing_company_name: g,
                                    loginid: e,
                                    gradients: f,
                                    is_dtrader_account_disabled: p
                                }
                            })) || []
                        }, [e, t, null == n ? void 0 : n.accounts]),
                        r = (0, l.useMemo)(() => a && 0 !== a.length ? [...a].sort((e, t) => e.is_virtual !== t.is_virtual ? e.is_virtual ? 1 : -1 : (e.currency || "USD").localeCompare(t.currency || "USD")) : [], [a]);
                    return {
                        data: r,
                        has_wallet: r && r.length > 0
                    }
                }
        },
        83257: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var l = n(67294),
                i = n(78013);
            let o = () => {
                let {
                    ui: e
                } = (0, i.oR)() ? ? {
                    ui: {
                        setDarkMode: () => {},
                        is_dark_mode_on: !1
                    }
                }, {
                    setDarkMode: t,
                    is_dark_mode_on: n
                } = e;
                return {
                    toggleTheme: (0, l.useCallback)(() => {
                        let e = document.querySelector("body");
                        e && (e.classList.contains("theme--dark") ? (localStorage.setItem("theme", "light"), e.classList.remove("theme--dark"), e.classList.add("theme--light"), t(!1)) : (localStorage.setItem("theme", "dark"), e.classList.remove("theme--light"), e.classList.add("theme--dark"), t(!0)))
                    }, [t]),
                    is_dark_mode_on: n,
                    setDarkMode: t
                }
            }
        },
        85273: function(e, t, n) {
            n.d(t, {
                Lg: () => c,
                mv: () => u
            });
            var l = n("66175"),
                i = n("24797");
            let o = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname,
                    t = {
                        is_staging_deriv_app: /^staging-app\.deriv\.(com|me|be)$/i.test(e),
                        is_deriv_app: /^app\.deriv\.(com|me|be)$/i.test(e),
                        is_test_link: /^(.*)\.binary\.sx$/i.test(e),
                        is_test_deriv_app: /^test-app\.deriv\.com$/i.test(e)
                    };
                return { ...t,
                    is_staging: t.is_staging_deriv_app,
                    is_test_link: t.is_test_link
                }
            };
            var a = n("83571");
            let r = () => {
                    let {
                        is_staging_deriv_app: e,
                        is_test_link: t,
                        is_test_deriv_app: n
                    } = o(), l = i.L.DERIV_HOST_NAME;
                    return e || t || n ? `https://staging-hub.${l}` : `https://hub.${l}`
                },
                s = e => {
                    let t = r(),
                        n = "home";
                    "cfds" === e ? n = "cfds" : "reports" === e ? n = "reports" : "cashier" === e && (n = "cashier");
                    let l = `${t}/tradershub/redirect?action=redirect_to&redirect_to=${n}`,
                        i = new URLSearchParams(window.location.search).get("account"),
                        o = "demo" === i ? "demo" : i;
                    return o ? `${l}&account=${o}` : l
                },
                c = () => {
                    let e = r(),
                        t = `${e}/tradershub/redirect?action=redirect_to&redirect_to=wallet`,
                        n = new URLSearchParams(window.location.search).get("account"),
                        l = "demo" === n ? "demo" : n;
                    return l ? `${t}&account=${l}` : t
                },
                d = e => {
                    let t = !!(null === a.Analytics || void 0 === a.Analytics ? void 0 : a.Analytics.getFeatureValue("hub_enabled_country_list_bot", {}));
                    return e && t
                },
                u = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (d(t)) return s(e);
                    let i = l.xOw.traders_hub;
                    if (n) {
                        let e = new URL(i);
                        return e.searchParams.set("account", "demo"), e.toString()
                    }
                    return i
                }
        }
    }
]);