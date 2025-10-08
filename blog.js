const jo = {};
! function ThemeScript() {
    var M = window,
        aQ = document,
        a = setTimeout,
        b9 = clearTimeout,
        cb = Date,
        b0 = Math,
        q = parseInt,
        t = btoa,
        K = escape,
        d = unescape,
        bP = encodeURIComponent,
        j = decodeURIComponent,
        ad = RegExp,
        bX = XMLHttpRequest,
        bm = alert,
        bC = localStorage,
        ax = JSON,
        a3 = Image,
        a5 = setInterval,
        cG = clearInterval,
        aE = "forEach",
        be = "innerHTML",
        bM = "tagName",
        w = "getElementById",
        o = "getElementsByClassName",
        bv = "querySelector",
        cw = "querySelectorAll",
        bt = "documentElement",
        ch = "childNodes",
        bJ = "createElement",
        B = "className",
        D = "replace",
        bW = "indexOf",
        m = "lastIndexOf",
        a4 = "EventListener",
        cc = "add",
        aM = "remove",
        ci = "id",
        bs = "key",
        aL = "type",
        af = "parse",
        cx = "length",
        W = "call",
        bF = "slice",
        C = "reset",
        az = "scroller",
        aq = "push",
        b4 = "Time",
        aa = "Date",
        a9 = "Month",
        a7 = "FullYear",
        ap = "clientX",
        ao = "clientY",
        h = "pageX",
        g = "pageY",
        aN = "scrollLeft",
        bN = "scrollTop",
        ac = "onreadystatechange",
        cf = "readyState",
        a2 = "Attribute",
        bk = "set",
        bB = "get",
        av = "post",
        a1 = "has",
        F = "checked",
        ar = "focus",
        b1 = "height",
        cd = "offsetWidth",
        ck = "offsetHeight",
        ay = "toFixed",
        aF = "pageYOffset",
        cy = "appendChild",
        bA = "firstChild",
        cj = "insert",
        bO = "Before",
        aC = "value",
        R = "safe",
        aI = "match",
        X = "href",
        bj = "src",
        U = "onload",
        al = "onerror",
        L = "target",
        bU = "closest",
        bf = "location",
        bb = "split",
        a8 = "trim",
        bY = "open",
        bh = "send",
        bl = "random",
        cF = "status",
        bp = "toString",
        aW = "parentElement",
        am = "activeElement",
        ca = "preventDefault",
        bc = "substr",
        cr = "setRequestHeader",
        aD = "responseText",
        cl = "response",
        ba = "body",
        aT = "title",
        ai = "test",
        aB = "container",
        aU = "ceil",
        aj = "floor",
        bu = "round",
        ag = "min",
        cu = "map",
        cm = "cookie",
        V = "contains",
        bg = "toUTCString",
        bR = "textContent",
        aw = "elementFromPoint",
        aS = "Item",
        bG = "nextSibling",
        cD = "load",
        bo = "true",
        x = "false",
        aY = "valid",
        bV = "scroll",
        G = "click",
        aX = "submit",
        bD = "blur",
        bL = "mousemove",
        p = "mouseup",
        Y = "touchstart",
        aV = "mousedown",
        a0 = "change",
        l = "complete",
        cE = "undefined",
        bq = "function",
        bx = "Content-Type",
        P = "text/html",
        b8 = "application/x-www-form-urlencoded",
        e = "pagination",
        ct = "loadCustomPosts",
        k = "custom_posts",
        O = "config",
        cC = "adsbygoogle",
        bE = "analytics",
        s = "",
        ce = "https://",
        Z = "www.blogger.com/",
        au = "-rw",
        bQ = "devicePixelRatio",
        b = "mount",
        cA = typeof isPreview !== cE ? isPreview : false,
        b2 = typeof siteUrl !== cE ? siteUrl[bc](0, siteUrl[cx] - 1)[D](/(^\w+:|^)\/\//, "") : "",
        aG = ce + b2,
        aO = typeof currentUrl !== cE ? currentUrl : "",
        r = typeof blogId !== cE ? blogId : "",
        cn = typeof blogTitle !== cE ? blogTitle : "",
        br = typeof titleSeparator !== cE ? titleSeparator : " - ",
        b6 = typeof pageTitle !== cE ? pageTitle : "Page",
        v = typeof analyticId !== cE ? analyticId : false,
        u = typeof caPubAdsense !== cE ? caPubAdsense[D](/^\D+/g, "") : false,
        aR = u ? "ca-pub-" + u : false,
        bK = typeof innerAdsDelimiter !== cE ? innerAdsDelimiter : "p,br,div",
        bI = typeof ignoreAdsDelimiter !== cE ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
        bd = typeof Callback === bq ? Callback : false;

    function J(cH, i) {
        return -1 < (" " + cH[B] + " ")[bW](" " + i + " ")
    }

    function I(cI, cH) {
        var i;
        J(cI, cH) || ("" != (i = cI[B]) && (cH = " " + cH), cI[B] = i + cH)
    }

    function bz(cH, i) {
        cH[B] = cH[B][D](new ad("(?:^|\\s)" + i + "(?!\\S)"), "")[a8]()
    }

    function bw(cH, i) {
        (J(cH, i) ? bz : I)(cH, i)
    }

    function aK(cH, i) {
        I(cH, "d-block"), a(function() {
            I(cH, i)
        }, 100)
    }

    function b7(cI, cH, i) {
        bz(cI, cH), a(function() {
            bz(cI, "d-block")
        }, i || 300)
    }

    function A(cI, cH) {
        for (var i = 0; i < cI[cx]; i++) {
            if (cI[i] === cH) {
                return !0
            }
        }
        return !1
    }

    function aH() {
        return (b0[bl]() + 1)[bp](36)[bc](7)
    }

    function co(cH, i) {
        return !!(cH = new ad("[?&]" + cH + "=([^&#=]*)"))[ai](i) && i[aI](cH)[1]
    }

    function S(cK, cO, cM, cN) {
        cK = q(cK), cO = q(cO), cM = q(cM), cN = q(cN);
        var i, cI, cJ = b0[aU](cK / cM);
        cO < 1 ? cO = 1 : cJ < cO && (cO = cJ), cI = cJ <= cN ? (i = 1, cJ) : (cK = b0[aj](cN / 2), cM = b0[aU](cN / 2) - 1, cO <= cK ? (i = 1, cN) : cJ <= cO + cM ? (i = cJ - cN + 1, cJ) : (i = cO - cK, cO + cM));
        for (var cH = (cO - 1) * cM, cN = b0[ag](cH + cM - 1, cK - 1), cP = [], cL = 0; cL < cI + 1 - i; cL++) {
            cP[aq](cL)
        }
        return cP = cP[cu](function(cQ) {
            return i + cQ
        }), {
            totalItems: cK,
            currentPage: cO,
            pageSize: cM,
            totalPages: cJ,
            startPage: i,
            endPage: cI,
            startIndex: cH,
            endIndex: cN,
            pages: cP
        }
    }

    function cs(cK) {
        for (var cI = cK.slice(), i = cI[cx] - 1; 0 < i; i--) {
            var cH = b0[aj](b0[bl]() * (i + 1)),
                cJ = cI[i];
            cI[i] = cI[cH], cI[cH] = cJ
        }
        return cI
    }

    function an(i) {
        try {
            return ax[af](i)
        } catch (i) {
            return !1
        }
    }! function(cH) {
        var i = new a3;
        i[U] = i[al] = function() {
            cH(2 == i[b1])
        }, i[bj] = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }(function(i) {
        i || (au = "")
    });
    var cv = aQ[w]("header"),
        bT = aQ[w]("search-toggle"),
        T = aQ[w]("search-header"),
        f = aQ[w]("navbar-toggle"),
        a6 = aQ[w]("navbar"),
        at = aQ[w]("back-to-top"),
        cz = aQ[w]("dark-toggler"),
        aZ = aQ[bv]("html"),
        bS = aQ[w]("comment-button"),
        ab = aQ[w]("threaded-comment-form"),
        cq = aQ[w]("comment-editor"),
        cp = aQ[w]("comment-editor-src"),
        N = aQ[w]("comment-script"),
        by = aQ[cw](".comment-reply"),
        H = aQ[cw](".entry-text noscript"),
        bZ = aQ[cw](".contact-form-blogger"),
        aA = aQ[w]("ads-post"),
        cg = aQ[w]("post-body"),
        aJ = aQ[bv](".related-posts"),
        aP = aQ[bv](".related-inline"),
        ae = co("page", aO),
        b5 = null !== bC && 1 == bC[bB + aS]("lazy");
    ! function(i) {
        M[cc + a4](bV, function() {
            var cI, cH = this[aF];
            cH < i && J(cv, "header-hidden") ? cI = a(function() {
                bz(cv, "header-hidden")
            }, 500) : i < cH && J(cv, "header-animate") && (b9(cI), I(cv, "header-hidden")), i = cH
        }, !1)
    }(0);
    var E = function(e) {
			  if (e.tagName !== "IMG") return;

			  let src = e.getAttribute("data-src");
			  if (!src) return;

			  // 1) Rewrite domain dulu (hanya kalau masih domain asli)
			  src = src
				.replace(/(https?:)?\/\/blogger\.googleusercontent\.com\//g, location.origin + "/cdn/data/")
				.replace(/(https?:)?\/\/[1-4]\.bp\.blogspot\.com\//g, location.origin + "/cdn/image/");

			  // 2) Kasus khusus YouTube
			  if (/(img\.youtube|i\.ytimg)/.test(src)) {
				src = src.substring(0, src.indexOf("/")) + "/mqdefault.jpg";
				e.setAttribute("data-src", src);
				return;
			  }

			  // 3) Hitung ukuran target (presisi ke container + ratio-XXxYY)
			  const container = e.parentElement || e;
			  const rect = container.getBoundingClientRect();

			  let w = rect.width || e.offsetWidth || 1600;
			  let h = rect.height || e.offsetHeight || 1200;

			  const cls = (container.getAttribute("class") || "") + " " + (e.getAttribute("class") || "");
			  const ratioMatch = cls.match(/ratio-(\d+)x(\d+)/);
			  if (ratioMatch) {
				const rw = parseInt(ratioMatch[1], 10);
				const rh = parseInt(ratioMatch[2], 10);
				if (rw && rh) h = (w * rh) / rw; // tinggi dihitung dari lebar sesuai ratio
			  }

			  // HiDPI scale
			  const scale = window.devicePixelRatio > 1 ? 2 : 1;
			  const rw = Math.max(1, (w * scale) | 0);
			  const rh = Math.max(1, (h * scale) | 0);

			  // Jika ada ratio â†’ pakai w-h-c, kalau tidak â†’ sNN
			  const resizeStr = ratioMatch ? `w${rw}-h${rh}-c` : `s${rw}`;

			  // 4) Ganti ukuran DI SEGMENT, pertahankan suffix (-c, -rw, dll) tanpa duplikasi
			  const reSegS      = /\/s\d{2,}((?:-[a-z]+)*)\//i;                 // /s72/, /s72-c/, /s72-c-rw/
			  const reSegWHC    = /\/w\d{2,}-h\d{2,}-c((?:-[a-z]+)*)\//i;       // /w320-h180-c/, /w320-h180-c-rw/
			  const reSegWH     = /\/w\d{2,}-h\d{2,}((?:-[a-z]+)*)\//i;         // /w320-h180/ (+ optional extra)
			  const reEqS       = /=s\d{2,}((?:-[a-z]+)*)/i;                    // =s72, =s72-c, =s72-c-rw

			  // helper: kalau resizeStr sudah ada "-c", hapus "-c" di tail supaya tidak dobel
			  const merge = (tail) => {
				if (!tail) return resizeStr;
				let t = tail;
				if (/-c\b/i.test(resizeStr)) t = t.replace(/-c\b/i, "");
				return resizeStr + t;
			  };

			  if (reSegWHC.test(src)) {
				// sudah w-h-c â†’ ganti angka, pertahankan extra suffix (selain -c)
				src = src.replace(reSegWHC, (_, tail) => `/${merge(tail)}/`);
			  } else if (reSegWH.test(src)) {
				// w-h tanpa -c â†’ tetap ganti ke resizeStr (yang mungkin punya -c)
				src = src.replace(reSegWH,  (_, tail) => `/${merge(tail)}/`);
			  } else if (reSegS.test(src)) {
				// sNN[-flags] â†’ ganti angka, pertahankan flags
				src = src.replace(reSegS,   (_, tail) => `/${merge(tail)}/`);
			  } else if (reEqS.test(src)) {
				// =sNN[-flags] â†’ ganti angka, pertahankan flags
				src = src.replace(reEqS,    (_, tail) => `=${merge(tail)}`);
			  } else {
				// Tidak ditemukan pola ukuran â†’ JANGAN nambah "=..." di belakang (biar URL valid)
				// (kalau mau paksa tambahin, pastikan sesuai format backend kamu)
			  }

			  e.setAttribute("data-src", src);
		};
        cB = function(cK) {
            var cH, cI, cQ, cN, cM, cP, cL, cO;

            function cJ(cU, cS, i) {
                var cR = aQ[bJ]("li"),
                    cT = aQ[bJ]("span");
                return I(cT, "btn btn-sm rounded-pill icon-center"), cT[be] = i || cU, cT[bk + a2]("data-page", cU), cU == cS ? I(cT, "btn-primary") : (I(cT, "btn-light hover-btn-primary"), cT[cc + a4](G, function(cW) {
    var cV;
    cW[ca](), 
    cO = cT[bB + a2]("data-page"),
    1 == cO && aO[bW]("/blog?updated-max=") > -1 ?  // <-- Kondisi baru: Hanya jika page=1 DAN URL punya /blog?updated-max=
        (M[bf][X] = aG + "/blog/") :  // Redirect ke /blog/
        (1 == cO ? (cV = cI ? aG + "/search" + cN + "?max-results=" + cH + "&page=" + cO : aG, M[bf][X] = cV) : (cV = (cO - 1) * cH, Defer.js(aG + "/feeds/posts/summary/" + cQ + "?start-index=" + cV + "&alt=json&callback=jo." + e + "_date&max-results=1")))
})), cR[cy](cT), cR
            }
            cK[bB + a2]("data-pagination") != x ? (cH = cK[bB + a2]("data-posts"), cI = cK[bB + a2]("data-label"), cQ = (cI = bP(cI)) ? "-/" + cI + "/" : "", cN = cI ? "/label/" + cI : "", Defer.js(aG + "/feeds/posts/summary/" + cQ + "?alt=json&callback=jo." + e + "_" + bs + "&max-results=1"), cM = co("max-results", aO), cP = co("page", aO), cL = cM || cH, cO = cP || 1, jo[e + "_" + bs] = function(cU) {
                var cS = cU.feed,
                    i = q(cS.openSearch$totalResults.$t);
                if (cH < i) {
                    var cU = S(i, cO, cL, 5),
                        cR = aQ[bJ]("ul"),
                        cS = cU.totalPages;
                    1 != cU.currentPage && (i = cJ(cU.currentPage - 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-l"/></svg>'), cR[cy](i)), A(cU.pages, 1) || (cV = cJ(1, cU.currentPage, "1 . ."), cR[cy](cV));
                    for (var cT = 0; cT < cU.pages[cx]; cT++) {
                        var cV = cJ(cU.pages[cT], cU.currentPage);
                        cR[cy](cV)
                    }
                    A(cU.pages, cS) || (cV = cJ(cS, cU.currentPage, ". . " + cS), cR[cy](cV)), cU.currentPage != cS && (cS = cJ(cU.currentPage + 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-r"/></svg>'), cR[cy](cS)), cK[be] = "", I(cR, "pagination mb-0"), cK[cy](cR), bz(cK, "visually-hidden")
                }
            }, jo[e + "_date"] = function(i) {
                i = i.feed.entry[0], i = (i = i.published.$t[bc](0, 19) + i.published.$t[bc](23, 29))[D]("+", "%2B"), i = aG + "/blog" + cN + "?updated-max=" + i + "&max-results=" + cL + "&page=" + cO;
                M[bf][X] = i
            }) : bz(cK, "visually-hidden")
        };

	    async function b3(cI, cH) {
	    try {
	        console.log('Fetching URL:', cI);
	        const response = await fetch(cI);
	        if (!response.ok) throw new Error('Status: ' + response.status);
	        const html = await response.text();
	        console.log('Response length:', html.length);
	        const regex = /<title>\s*(.*?)\s*<\/title>/i;
	        const cJ = html.match(regex);
	        if (cJ && cJ[1]) {
	            var rawTitle = cJ[1].trim();
	            var separator = br + cn;
	            if (rawTitle.indexOf(separator) !== -1) {
	                cH[be] = rawTitle.replace(separator, "");
	            } else {
	                cH[be] = rawTitle;
	            }
	            console.log('Title set:', cH[be]);
	        } else {
	            console.warn('No title match:', html.substr(0, 200));
	            cH[be] = 'Judul Default';
	        }
	    } catch (err) {
	        console.error('Fetch error:', err);
	        cH[be] = 'Error Fetch';
	    }
	}
    jo[ct] = function(cM) {
        var cH = aH(),
            cL = cM[bB + a2]("data-label"),
            cJ = cM[bB + a2]("data-widget-title"),
            cQ = cM[bB + a2]("data-items"),
            cK = cM[bB + a2]("data-shuffle"),
            cI = cM[bB + a2]("data-no-item"),
            i = cM[bB + a2]("data-func"),
            cP = cM[bB + a2]("data-callback"),
            cR = cI ? q(cQ) + 1 : cQ,
            cN = cL || cM[be],
            cO = cN[bb](","),
            cL = "",
            cN = cN[a8](),
            cO = cN[bb](",").filter(function(item) { return item[a8](); }).map(function(item) { return item[a8](); }),
            cL = cO[cx] > 1 ? "-/" + bP(cO[b0[aj](b0[bl]() * cO[cx])]) + "/?" : cN && cN != x ? "-/" + bP(cN) + "/?" : "?";
        Defer.js(aG + "/feeds/posts/summary/" + cL + "alt=json&callback=jo." + k + "_" + bs + "_" + cH + "&max-results=" + cR), jo[k + "_" + bs + "_" + cH] = function(cX) {
            var c1 = q(cX.feed.openSearch$totalResults.$t),
                cZ = cX.feed.category;
            if (0 < c1) {
                for (var c0 = {
                        title: cJ,
                        posts: [],
                        categories: cZ
                    }, cS = cX.feed.entry, cU = 0, cV = 0; cV < cS[cx]; ++cV) {
                    var cT, c2, cY = cS[cV],
                        cW = cY.link[cY.link[cx] - 1][X];
                    if (cU == cQ) {
                        break
                    }
                    cW != cI && (cU++, (cT = {}).grup_id = cH, cT.url = cW, cT.title = cY[aT].$t, cT.summary = cY.summary.$t[a8](), cT.img = cY.media$thumbnail && cY.media$thumbnail.url, cT.author = cY.author[0].name.$t, cT.comment = cY.thr$total && cY.thr$total.$t, cT.label = cY.category, c2 = cY.published.$t, cW = new cb(c2), cT.date_published = cW[bB + aa]() + "/" + (cW[bB + a9]() + 1) + "/" + cW[bB + a7](), cT.date_updated = cY.updated && cY.updated.$t ? (c2 = cY.updated.$t, cW = new cb(c2), cW[bB + aa]() + "/" + (cW[bB + a9]() + 1) + "/" + cW[bB + a7]()) : cT.date_published, c0.posts[aq](cT))
                }
                cX = M[i];
                typeof cX === bq && 0 < c0.posts[cx] && (cK && (c0.posts = cs(c0.posts)[bF](0, cK)), cM[be] = cX(c0)[a8](), bz(cM, "visually-hidden"), Defer.dom(".lazy-" + cH, 1, "loaded", E), !cP || typeof(cX = M[cP]) === bq && cX())
            }
        }
    };
    var y = function(cK) {
        for (var cI = cK[cw]("a"), i = 0; i < cI[cx]; ++i) {
            var cH = cI[i],
                cJ = cH[X],
                cL = aQ[bJ]("span");
            I(cL, "d-block fw-bold pt-2 text-primary"), cH[cy](cL), b3(cJ, cL)
        }
    };

    function ah() {
        (bT && bT[F] || f && f[F] ? bz : I)(cv, "header-animate")
    }

    function z(cI, i) {
        function cJ(cK) {
            cI[V](cK[L]) || (i(), cH())
        }
        var cH = function() {
            aQ[aM + a4](G, cJ)
        };
        aQ[cc + a4](G, cJ)
    }

    function Q(i) {
        i != cp[X] && (I(ab, "loader"), cp[X] = i, cq[bj] = i), J(ab, "d-none") && (bz(ab, "d-none"), i = N[aC][aI](/<script.*?src='(.*?)'/)[1], Defer.js(i, "comment-js", 500, function() {
            BLOG_CMT_createIframe(ce + Z + "rpc_relay.html")
        }))
    }
    bT && bT[cc + a4](a0, function() {
        ah(), this[F] && a(function() {
            aQ[w]("search-input")[ar]()
        }, 100), z(T, function() {
            bT[F] = !1, ah()
        })
    }), f && f[cc + a4](a0, function() {
        ah(), this[F] ? (aK(a6, "show"), z(a6, function() {
            f[F] = !1, ah(), b7(a6, "show")
        })) : b7(a6, "show")
    }), cz && cz[cc + a4](G, function(i) {
        i[ca](), bw(aZ, "dark-mode"), null !== bC && bC[bk + aS]("theme", J(aZ, "dark-mode") ? "dark" : "light")
    }), M[cc + a4](bV, function() {
        (1 <= this[aF] && null !== cv ? I : bz)(cv, "shadow-sm"), (1000 <= this[aF] && null !== at ? bz : I)(at, "d-none")
    }, !1), cq && cq[cc + a4](cD, function(i) {
        bz(ab, "loader")
    }), bS && bS[cc + a4](G, function(i) {
        i[ca](), Q(this[X]), "add-comment" != ab[aW][ci] && aQ[w]("add-comment")[cy](ab)
    });
    for (var bH = 0; bH < by[cx]; ++bH) {
        by[bH][cc + a4](G, function(i) {
            i[ca]();
            i = this[bB + a2]("data-comment-id");
            Q(this[X]), ab[aW][ci] != "c" + i && aQ[w]("c" + i)[cy](ab)
        })
    }
    for (bH = 0; bH < bZ[cx]; ++bH) {
        var bi = bZ[bH];
        bi[cc + a4](aX, function(cJ) {
            cJ[ca]();
            var cI = cJ[L];
            I(cI, "loading");
            var i = new FormData(cI),
                cH = "blogID=" + r;
            i[aE](function(cL, cK) {
                cH += "&" + bP(cK) + "=" + bP(cL)
            });
            cJ = ce + Z + "contact-form.do", i = new bX;
            i[bY](av, cJ), i[cr](bx, b8), i[bh](cH), i[ac] = function() {
                var cK;
                bz(cI, "loading"), 4 === this[cf] && 200 === this[cF] && "" != this[cl] && ((cK = an(this[aD][a8]())) && "true" == cK.details.emailSentStatus ? (cI[C](), bz(cI, "send-error"), I(cI, "send-success")) : (bz(cI, "send-success"), I(cI, "send-error")))
            }
        })
    }

    function c(cQ) {
        if (cQ && (aQ[aM + a4](bL, c), aQ[aM + a4](Y, c), aQ[aM + a4](bV, c)), Defer.dom(".custom-posts", 1, null, jo[ct], null, {
                rootMargin: "200%"
            }), 0 < H[cx]) {
            for (var cW = 0; cW < H[cx]; ++cW) {
                var cT = H[cW],
                    cU = cT[be],
                    cH = aQ[bJ]("textarea");
                cH[be] = cU[D](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"');
                cU = aQ[bJ]("div");
                cU[be] = cH.value, 0 == cW && I(cU, "feature-image full-width"), cT[aW][cj + bO](cU, cT)
            }
            Defer.dom('[lazyload="true"]', 1, "loaded", E, null, {
                rootMargin: "200%"
            })
        }
        if (null !== cg) {
            if (null !== aJ && null !== aP && (aP[be] = aJ[be], aP[bk + a2]("data-no-item", aJ[bB + a2]("data-no-item"))), null !== aA) {
                for (var cJ = cg[cw](bK + "," + bI), cL = aA[ch], cI = cL[cx], cX = [], cW = 0; cW < cJ[cx]; cW++) {
                    var cR = cJ[cW][bU](bI);
                    cR && cJ[cW] != cR || cX[aq](cJ[cW])
                }
                for (var cM, cW = 0; cW < cI; cW++) {
                    cW == cI - 1 ? cg[cy](cL[0]) : (cM = cW == cI - 1 ? cX[cx] - 1 : b0[bu](cX[cx] / cI) * cW, (cM = 0 == cW ? cX[0] : cX[cM][bG]) && cM[aW][cj + bO](cL[0], cM))
                }
            }

        }
        cA || (aR && (typeof adsbygoogle === cE && (adsbygoogle = []), Defer.js(ce + "pagead2.googlesyndication.com/pagead/js/" + cC + ".js?client=" + aR, cC, 100)), v && v != x && Defer.js(ce + "www.googletagmanager.com/gtag/js?id=" + v, bE, 100, function() {
            function i() {
                dataLayer[aq](arguments)
            }
            i("js", new Date), i(O, v)
        }), bd && bd())
    }
    ae && (aQ[aT] = aQ[aT][D](br, br + b6 + " " + ae + br)), Defer.dom(".lazyload", 1, "loaded", E), Defer.dom("#post-pager", 1, null, y, null, {
        rootMargin: "200%"
    }), Defer.dom("#pagination", 1, null, cB, null, {
        rootMargin: "200%"
    }), b5 ? c(!1) : (null !== bC && bC[bk + aS]("lazy", 1), aQ[cc + a4](bL, c), aQ[cc + a4](Y, c), aQ[cc + a4](bV, c))
}();
