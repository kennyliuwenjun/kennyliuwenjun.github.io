;
/*!/src/js/v2/topBar.last.source.js*/
var TopBarConfig = {
    isAutoShow: !1,
    isAutoShowBan: {
        "nc.163.com": 1,
        "my.163.com": 1,
        "em.163.com": 1,
        "xyf.163.com": 1,
        "zlj.163.com": 1,
        "dpsg.163.com": 1,
        "tfmz.163.com": 1,
        "ssqq.163.com": 1,
        "sq.163.com": 1,
        "ltzs.163.com": 1,
        "yhl.163.com": 1,
        "mxxc.163.com": 1,
        "xsd.163.com": 1,
        "mtj.163.com": 1,
        "zzz.163.com": 1,
        "yj.163.com": 1,
        "f1racestars.163.com": 1
    },
    isAutoShowTime: 5e3,
    isAllHide: !1,
    payWordList: {
        "xyq.163.com": 1,
        "tx3.163.com": 1,
        "xy2.163.com": 1,
        "ty.163.com": 1,
        "tianyu.163.com": 1,
        "dh2.163.com": 1,
        "bw.163.com": 1,
        "xy3.163.com": 1,
        "qn2.163.com": 1,
        "x3.163.com": 1,
        "zmq.163.com": 1,
        "xdw.163.com": 1,
        "dtws2.163.com": 1,
        "dtws.163.com": 1,
        "lj.163.com": 1,
        "wh.163.com": 1,
        "wh2.163.com": 1,
        "jl.163.com": 1,
        "zh.163.com": 1,
        "ff.163.com": 1,
        "www.warcraftchina.com": 1,
        "www.diablo3.com.cn": 1,
        "tuji.163.com": 1,
        "db.163.com": 1,
        "www.battlenet.com.cn": 1,
        "www.heroesofthestorm.com.cn": 1,
        "www.starcraft2.com.cn": 1,
        "y3.163.com": 1,
        "wf.163.com": 1,
        "www.hearthstone.com.cn": 1,
        "xc.163.com": 1,
        "xqn.163.com": 1,
        "mjdj.163.com": 1
    },
    piaoLeftList: {
        "xyq.163.com": 1,
        "dh2.163.com": 1,
        "dtws.163.com": 1,
        "lj.163.com": 1,
        "ff.163.com": 1,
        "jl.163.com": 1,
        "zh.163.com": 1,
        "em.163.com": 1,
        "sm.163.com": 1,
        "zlj.163.com": 1,
        "ssqq.163.com": 1,
        "xy3.163.com": 1,
        "xy2.163.com": 1,
        "mhws.163.com": 1,
        "gfxm.163.com": 1,
        "bjx.163.com": 1,
        "hxjt.163.com": 1,
        "dhrx.163.com": 1,
        "mgzz.163.com": 1,
        "jlhx.163.com": 1,
        "pkzj.163.com": 1,
        "qnm.163.com": 1,
        "xqn.163.com": 1,
        "y3.163.com": 1
    }
}; !
function() {
    var t = function(t) {
        return document.getElementById(t)
    },
    e = function(e, o) {
        var a = t(e),
        n = o,
        r = !1,
        i = 180,
        p = 350,
        m = null;
        a.onmouseover = function() {
            r = !0,
            clearTimeout(m),
            m = setTimeout(function() {
                r && (a.className = n)
            },
            i)
        },
        a.onmouseout = function() {
            r = !1,
            clearTimeout(m),
            m = setTimeout(function() {
                r || (a.className = "")
            },
            p)
        }
    },
    o = function(t) {
        return t.replace(/(^\s*)|(\s*$)/g, "")
    },
    a = function(t, e, a) {
        if ("undefined" == typeof e) {
            var n = null;
            if (document.cookie && "" != document.cookie) for (var r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                var p = o(r[i]);
                if (p.substring(0, t.length + 1) == t + "=") {
                    n = decodeURIComponent(p.substring(t.length + 1));
                    break
                }
            }
            return n
        }
        a = a || {},
        null === e && (e = "", a.expires = -1);
        var m = "";
        if (a.expires && ("number" == typeof a.expires || a.expires.toUTCString)) {
            var l;
            "number" == typeof a.expires ? (l = new Date, l.setTime(l.getTime() + 24 * a.expires * 60 * 60 * 1e3)) : l = a.expires,
            m = "; expires=" + l.toUTCString()
        }
        var h = a.path ? "; path=" + a.path: "",
        s = a.domain ? "; domain=" + a.domain: "",
        c = a.secure ? "; secure": "";
        document.cookie = [t, "=", encodeURIComponent(e), m, h, s, c].join("")
    },
    n = function(e, o, n) {
        var r = t(e),
        i = t(n),
        p = o,
        m = !1,
        l = 180,
        h = 1,
        s = null; !
        function() {
            function e(t) {
                "undefined" == typeof ADBase ? window.onload = function() {
                    o(t)
                }: o(t)
            }

            function o(t) {
                if (t) {
                    var e = {
                        domain: window.location.hostname
                    };
                    jQuery.ajax({
                        url: "https://sixhorse.game.163.com/news/interfacepub/_fileexisted.do",
                        data: e,
                        dataType: "jsonp",
                        success: function(t) {
                            return t.succ ? void(0 == t.result.code ? n() : (i.push(d), m[window.location.hostname] && i.push(m[window.location.hostname]), n())) : n()
                        }
                    })
                } else n()
            }

            function n() {
                return i.length && ADBase ? void ADBase.config({
                    pos: i.join(","),
                    noCache: !0,
                    callback: function(e, o) {
                        if (!e) return ! 1;
                        var n = o[c],
                        i = o[d],
                        l = o[m[h]];
                        if (n && n[0] ? (n = n[0], t("NIE-topBar-news-link").href = n.url, t("NIE-topBar-abc-b").src = n.src, t("NIE-topBar-abc-s").src = n.thumbsrc, 1 != a("topbarnewsshow") && TopBarConfig.isAutoShow && !TopBarConfig.isAutoShowBan[window.location.host] && (r.className = p, s = setTimeout(function() {
                            r.className = ""
                        },
                        TopBarConfig.isAutoShowTime)), document.getElementById("NIE-topBar-news").style.display = "block", a("topbarnewsshow", "1", {
                            expires: 1
                        })) : document.getElementById("NIE-topBar-news").style.display = "none", i && i[0]) {
                            i = i[0];
                            var f = '<div id="js_piaochuang_left" style="position:fixed;_position:absolute;' + (TopBarConfig.piaoLeftList[h] ? "left": "right") + ':0;bottom:0;z-index:9999;"><a href="' + i.url + '" title="' + i.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + i.src + '" /></a>                    <a href="javascript:void(0)" title="\u5173\u95ed" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
                            jQuery(document.body).append(f)
                        }
                        if (l && l[0]) {
                            l = l[0];
                            var f = '<div id="js_piaochuang_right" style="position:fixed;_position:absolute;right:0;bottom:0;z-index:9999;"><a href="' + l.url + '" title="' + l.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + l.src + '" /></a>                    <a href="javascript:void(0)" title="\u5173\u95ed" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
                            jQuery(document.body).append(f)
                        }
                    }
                }) : !1
            }

            // var i = [],
            // m = {
            //     "xy2.163.com": "xindahuaxiyou2-piaochuang-3987",
            //     "dh2.163.com": "dahuaxiyou2_mianfeiban-changgui-4587"
            // },
            // l = {
            //     "my.163.com": {
            //         dingtiaoPos: "menghuanxiyoushouyou(g18)-changgui-434751",
            //         piaochuangPos: "menghuanxiyoushouyou(g18)-piaochuang-290966"
            //     },
            //     "yys.163.com": {
            //         dingtiaoPos: "yinyangshi(g37)-dingtiao-214014",
            //         piaochuangPos: "yinyangshi(g37)-piaochuang-678551"
            //     },
            //     "xyq.163.com": {
            //         dingtiaoPos: "tongyong-dingtiao-8379",
            //         piaochuangPos: "menghuanxiyou-piaochuang-602057"
            //     }
            // },
            // h = window.location.hostname,
            // c = "tongyong-dingtiao-8379",
            // d = "tongyong-piaochuang-9781";
            // l[h] && (c = l[h].dingtiaoPos, d = l[h].piaochuangPos),
            // TopBarConfig.isAllHide ? document.getElementById("NIE-topBar-news").style.display = "none": i.push(c);
            // var f = window.location.pathname,
            // g = (document.documentElement || document.body).clientWidth;
            // "/" == f || "/index.html" == f ? 1200 > g ? e() : "/index.html" == f ? (i.push(d), m[h] && i.push(m[h]), e()) : e(!0) : e()
        } ();
        
        // r.onmouseover = function() {
        //     m = !0,
        //     clearTimeout(s),
        //     s = setTimeout(function() {
        //         m && (r.className = p)
        //     },
        //     l)
        // },
        // r.onmouseout = function() {
        //     m = !1,
        //     clearTimeout(s),
        //     s = setTimeout(function() {
        //         m || (r.className = "")
        //     },
        //     h)
        // },
        // i.onclick = function() {
        //     m = !1,
        //     clearTimeout(s),
        //     r.className = ""
        // }
    },
    r = {
        xyq: "http://xyq.163.com/download/index.html",
        tx2: "http://tx2.163.com/reg/finish.html",
        pet: "http://pet.163.com/download/",
        csxy: "http://csxy.163.com/reg/client/",
        dt: "http://dt.163.com/download/",
        dt2: "http://dt2.163.com/download/",
        dtw: "http://dtw.163.com/download.html",
        xy2: "http://xy2.163.com/download/",
        xy3: "http://xy3.163.com/download/download.html",
        xdw: "http://xdw.163.com/download/",
        ff: "http://ff.163.com/download/",
        qn: "http://qn2.163.com/reg/client/",
        qn2: "http://qn2.163.com/reg/client/",
        jl: "http://jl.163.com/download/",
        fj: "http://fj.163.com/download.html",
        st: "http://st.163.com/yxxz/yxxz01.html",
        ball: "http://ball.163.com/",
        xyc: "http://xyc.netease.com/viewthread.php?tid=7666",
        rich: "http://rich.163.com/",
        ysg: "http://ysg.163.com/download/",
        zg: "http://server.zg.163.com/serverlist.php?from=niebar",
        sg: "http://client.sg.163.com/server_list.html",
        xjc: "http://game.xjc.163.com/",
        wh: "http://wh.163.com/download/",
        zh: "http://zh.163.com/download/"
    },
    i = {
        pet: "cwwg",
        jl: "jlmc",
        dt2: "dtws",
        sg: "sgtx_web",
        zg: "ch",
        ff: "newff",
        pk: "xyw",
        tx3: "tx2",
        mkey: "mtoken",
        dtws2: "dtws",
        qn2: "qn",
        xqn: "qn",
        tianyu: "ty",
        xdw: "xyw",
        y3: "dota",
        wf: "x9"
    },
    p = function() {
        for (var t = arguments,
        e = 0,
        o = t.length; o > e; e++) if ("undefined" == typeof t[e]) return ! 1;
        return ! 0
    },
    m = function() {
        var t = document.body.offsetWidth,
        e = document.getElementById("NIE-topBar-main"),
        o = e.getElementsByTagName("li")[5],
        a = e.getElementsByTagName("li")[1];
    },
    l = "undefined" != typeof nie && p(nie.config, nie.config.site) ? nie.config.site: window.location.href.replace(/^http:\/\/(.*)\.163\.com.*$/, "$1"),
    h = {
        xy2: "20100105dh2",
        tx3: "20110329tx2",
        qn: 1,
        zg: "canghai",
        dt: 1,
        xy3: 1,
        fkmm: 1,
        xyq: 1,
        zh: 1,
        lj: "ds",
        dota: "yxsg"
    },
    s = {
        xy2: "http://xy2.163.com/reg/",
        tx3: "http://tx3.163.com/reg/",
        xdw: "http://xdw.163.com/reg/",
        dtws2: "http://dtws2.163.com/reg/",
        wh: "http://wh.163.com/reg/",
        xyq: "http://xyq.163.com/reg/",
        y3: "http://y3.163.com/reg/",
        lj: "http://lj.163.com/reg/",
        x3: "http://x3.163.com/reg/",
        zd: "http://zd.163.com/reg/",
        zdcq: "http://zdcq.163.com/reg/",
        xy3: "http://xy3.163.com/reg/",
        zh: "http://zh.163.com/reg/",
        xc: "http://xc.163.com/reg/",
        jl: "http://jl.163.com/reg/",
        ff: "http://ff.163.com/reg/",
        zmq: "http://zmq.163.com/reg/",
        wf: "http://wf.163.com/reg/"
    },
    c = {
        xy2: "http://zs.163.com/xy2/"
    },
    d = {
        xy2: "\u65b0\u5927\u8bdd2\u52a9\u624b"
    };
    ecardLink = "http://ecard.163.com/script/index" + (p(h[l]) ? "?platform=" + (1 == h[l] ? l: h[l]) : ""),
    regProductID = p(i[l]) ? i[l] : l,
    regUrl = encodeURIComponent(p(r[l]) ? r[l] : "http://" + l + ".163.com"),
    regPage = s[l] ? s[l] : "http://reg.163.com/reg/reg.jsp?product=" + regProductID + "&url=" + regUrl + "&loginurl=" + regUrl,
    zsLink = c[l] ? c[l] : "http://zs.163.com/app/index.html",
    zsName = d[l] ? d[l] : "\u6e38\u620f\u4e91\u52a9\u624b",
    new
    function(t) {
        var e;
        document.all ? (e = document.createStyleSheet(), e.cssText = t) : (e = document.createElement("style"), e.type = "text/css", e.textContent = t);
        try {
            document.getElementsByTagName("head")[0].appendChild(e)
        } catch(o) {}
        e = null
    },
    new
    function() {
       
        t("global_gp_mid").style.display = "block";
        var o = Math.floor(Math.random() * 1),
        a = t("NIE-topBar-right").getElementsByTagName("a")[0];
        a.href = "",
        a.innerHTML = "",
        setInterval(function() {
            a.className = "fadeUp",
            o = (o + 1) % 1,
            setTimeout(function() {
                a.className = "none",
                a.href = "",
                a.innerHTML = "",
                setTimeout(function() {
                    a.className = "fadeUp2"
                },
                50)
            },
            400)
        },
        5e3),
        m(),
        window.addEventListener ? window.addEventListener("resize", m, !1) : window.attachEvent("onresize", m),
        t("NIE-topBar-more").onclick = function() {
            t("NIE-table").className.indexOf("moreAni") < 0 ? (t("NIE-table").className += " moreAni", t("NIE-topBar-more").innerHTML = ">>") : (t("NIE-table").className = "NIE-table", t("NIE-topBar-more").innerHTML = "\u66f4\u591a\u70ed\u95e8\u624b\u6e38")
        }
    },
    new e("NIE-topBar-menu", "NIE-topBar-menu-hover"),
    new n("NIE-topBar-news", "NIE-topBar-news-hover", "NIE-topBar-news-close"),
    r = s = i = h = regPage = regUrl = regProductID = null
} ();