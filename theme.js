const jo = {};
! function() {
	var e, t = window,
		a = document,
		n = setTimeout,
		o = (clearTimeout, Date),
		r = Math,
		l = parseInt,
		i = (btoa, escape, unescape, encodeURIComponent),
		s = (decodeURIComponent, RegExp),
		c = XMLHttpRequest,
		d = (alert, localStorage),
		u = JSON,
		f = Image,
		g = (setInterval, clearInterval, "innerHTML"),
		m = "getElementById",
		p = "querySelector",
		h = "querySelectorAll",
		y = "createElement",
		b = "className",
		v = "replace",
		A = "lastIndexOf",
		w = "EventListener",
		k = "add",
		I = "remove",
		j = "key",
		x = "length",
		D = "slice",
		P = "push",
		S = "Attribute",
		$ = "set",
		C = "get",
		_ = "checked",
		R = "offsetWidth",
		B = "toFixed",
		M = "appendChild",
		T = "insert",
		E = "Before",
		U = "match",
		z = "href",
		L = "target",
		O = "location",
		q = "split",
		H = "trim",
		G = "open",
		N = "send",
		F = "random",
		W = "parentElement",
		Y = "preventDefault",
		J = "substr",
		Q = "setRequestHeader",
		X = "responseText",
		V = "title",
		K = "ceil",
		Z = "floor",
		ee = "Item",
		te = "load",
		ae = "false",
		ne = "scroll",
		oe = "click",
		re = "mousemove",
		le = "touchstart",
		ie = "change",
		se = "undefined",
		ce = "function",
		de = "Content-Type",
		ue = "pagination",
		fe = "loadCustomPosts",
		ge = "custom_posts",
		me = "adsbygoogle",
		pe = "https://",
		he = "www.blogger.com/",
		ye = "-rw",
		be = "devicePixelRatio",
		ve = typeof isPreview !== se && isPreview,
		Ae = typeof siteUrl !== se ? siteUrl[J](0, siteUrl[x] - 1)[v](/(^\w+:|^)\/\//, "") : "",
		we = pe + Ae,
		ke = typeof currentUrl !== se ? currentUrl : "",
		Ie = typeof blogId !== se ? blogId : "",
		je = typeof blogTitle !== se ? blogTitle : "",
		xe = typeof titleSeparator !== se ? titleSeparator : " - ",
		De = typeof pageTitle !== se ? pageTitle : "Page",
		Pe = typeof analyticId !== se && analyticId,
		Se = typeof caPubAdsense !== se && caPubAdsense[v](/^\D+/g, ""),
		$e = !!Se && "ca-pub-" + Se,
		Ce = typeof innerAdsDelimiter !== se ? innerAdsDelimiter : "p,br,div",
		_e = typeof ignoreAdsDelimiter !== se ? ignoreAdsDelimiter : "pre,ul,ol,table,blockquote",
		Re = typeof Callback === ce && Callback;

	function Be(e, t) {
		return -1 < (" " + e[b] + " ").indexOf(" " + t + " ")
	}

	function Me(e, t) {
		var a;
		Be(e, t) || ("" != (a = e[b]) && (t = " " + t), e[b] = a + t)
	}

	function Te(e, t) {
		e[b] = e[b][v](new s("(?:^|\\s)" + t + "(?!\\S)"), "")[H]()
	}

	function Ee(e, t, a) {
		Te(e, t), n(function() {
			Te(e, "d-block")
		}, a || 300)
	}

	function Ue(e, t) {
		for (var a = 0; a < e[x]; a++)
			if (e[a] === t) return !0;
		return !1
	}

	function ze(e, t) {
		return !!(e = new s("[?&]" + e + "=([^&#=]*)")).test(t) && t[U](e)[1]
	}

	function Le(e) {
		try {
			return u.parse(e)
		} catch (e) {
			return !1
		}
	}(e = new f).onload = e.onerror = function() {
		! function(e) {
			e || (ye = "")
		}(2 == e.height)
	}, e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	var Oe = a[m]("header"),
		qe = a[m]("search-toggle"),
		He = a[m]("search-header"),
		Ge = a[m]("navbar-toggle"),
		Ne = a[m]("navbar"),
		Fe = a[m]("back-to-top"),
		We = a[m]("dark-toggler"),
		Ye = a[p]("html"),
		Je = a[m]("comment-button"),
		Qe = a[m]("threaded-comment-form"),
		Xe = a[m]("comment-editor"),
		Ve = a[m]("comment-editor-src"),
		Ke = a[m]("comment-script"),
		Ze = a[h](".comment-reply"),
		et = a[h](".entry-text noscript"),
		tt = a[h](".contact-form-blogger"),
		at = a[m]("ads-post"),
		nt = a[m]("post-body"),
		ot = a[p](".related-posts"),
		rt = a[p](".related-inline"),
		lt = ze("page", ke),
		it = null !== d && 1 == d[C + ee]("lazy"),
		st = function(e) {
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

	function ct(e, t) {
		var a = new c;
		a[G](C, e), a[Q](de, "text/html"), a[N](null), a[k + w](te, function() {
			var e = a[X][U](/<title>(.*?)<\/title>/);
			t[g] = e[1][v](xe + je, "")
		})
	}
	jo[fe] = function(e) {
		var a = (r[F]() + 1).toString(36)[J](7),
			n = e[C + S]("data-label"),
			s = e[C + S]("data-widget-title"),
			c = e[C + S]("data-items"),
			d = e[C + S]("data-shuffle"),
			u = e[C + S]("data-no-item"),
			f = e[C + S]("data-func"),
			m = e[C + S]("data-callback"),
			p = u ? l(c) + 1 : c,
			h = n || e[g],
			y = h[q](",");
		h = (h || "").replace(/[\r\n\t]+/g, " ")[H]();
var __l = [];
if (h) {
    var __s = h[q](",");
    for (var __ii = 0; __ii < __s[x]; __ii++) {
        var __v = (__s[__ii] || "")[H]();
        if (__v !== "") __l[P](__v)
    }
}
n = __l[x] > 1 ? "-/" + i(__l[r[Z](r[F]() * __l[x])]) + "/?" : (h && h !== ae && h !== "") ? "-/" + i(h) + "/?" : "?";
		var orderby = e.getAttribute("data-orderby") || "";
		var orderQuery = orderby ? "orderby=" + orderby + "&sortorder=descending&" : "";
		Defer.js(we+"/feeds/posts/summary/"+n+orderQuery+"alt=json&callback=jo."+ge+"_"+j+"_"+a+"&max-results="+p), jo[ge + "_" + j + "_" + a] = function(n) {
			var i = l(n.feed.openSearch$totalResults.$t),
				p = n.feed.category;
			if (0 < i) {
				for (var h = {
						title: s,
						posts: [],
						categories: p
					}, y = n.feed.entry, b = 0, v = 0; v < y[x]; ++v) {
					var A, w, k = y[v],
						I = k.link[k.link[x] - 1][z];
					if (b == c) break;
						I != u && (
						  b++,
						  (A = {}),
						  A.grup_id = a,
						  A.url = I,
						  A.title = k[V].$t,
						  A.summary = k.summary.$t[H](),
						  A.img = k.media$thumbnail && k.media$thumbnail.url,
						  A.author = k.author[0].name.$t,
						  A.comment = k.thr$total && k.thr$total.$t,
						  A.label = k.category,

						  // tanggal published
						  (w = k.published.$t),
						  (pub = new o(w)),
						  A.date_published = pub[C + "Date"]() + "/" + (pub[C + "Month"]() + 1) + "/" + pub[C + "FullYear"](),

						  // tanggal updated
						  (w = k.updated.$t),
						  (upd = new o(w)),
						  A.date_updated = upd[C + "Date"]() + "/" + (upd[C + "Month"]() + 1) + "/" + upd[C + "FullYear"](),

						  h.posts[P](A)
						)
							}
				typeof(n = t[f]) === ce && 0 < h.posts[x] && (d && (h.posts = function(e) {
					for (var t = e.slice(), a = t[x] - 1; 0 < a; a--) {
						var n = r[Z](r[F]() * (a + 1)),
							o = t[a];
						t[a] = t[n], t[n] = o
					}
					return t
				}(h.posts)[D](0, d)), e[g] = n(h)[H](), Te(e, "visually-hidden"), Defer.dom(".lazy-" + a, 1, "loaded", st), !m || typeof(n = t[m]) === ce && n())
			}
		}
	};

	function dt() {
		(qe && qe[_] || Ge && Ge[_] ? Te : Me)(Oe, "header-animate")
	}

	function ut(e, t) {
		function n(a) {
			e.contains(a[L]) || (t(), o())
		}
		var o = function() {
			a[I + w](oe, n)
		};
		a[k + w](oe, n)
	}

	function ft(e) {
		e != Ve[z] && (Me(Qe, "loader"), Ve[z] = e, Xe.src = e), Be(Qe, "d-none") && (Te(Qe, "d-none"), e = Ke.value[U](/<script.*?src='(.*?)'/)[1], Defer.js(e, "comment-js", 500, function() {
			BLOG_CMT_createIframe(pe + he + "rpc_relay.html")
		}))
	}
	qe && qe[k + w](ie, function() {
		dt(), this[_] && n(function() {
			a[m]("search-input").focus()
		}, 100), ut(He, function() {
			qe[_] = !1, dt()
		})
	}), Ge && Ge[k + w](ie, function() {
		dt(), this[_] ? (function(e, t) {
			Me(e, "d-block"), n(function() {
				Me(e, t)
			}, 100)
		}(Ne, "show"), ut(Ne, function() {
			Ge[_] = !1, dt(), Ee(Ne, "show")
		})) : Ee(Ne, "show")
	}), We && We[k + w](oe, function(e) {
		e[Y](),
			function(e, t) {
				(Be(e, t) ? Te : Me)(e, t)
			}(Ye, "dark-mode"), null !== d && d[$ + ee]("theme", Be(Ye, "dark-mode") ? "dark" : "light")
	}), t[k + w](ne, function() {
		(1e3 <= this.pageYOffset && null !== Fe ? Te : Me)(Fe, "d-none")
	}, !1), Xe && Xe[k + w](te, function(e) {
		Te(Qe, "loader")
	}), Je && Je[k + w](oe, function(e) {
		e[Y](), ft(this[z]), "add-comment" != Qe[W].id && a[m]("add-comment")[M](Qe)
	});
	for (var gt = 0; gt < Ze[x]; ++gt) Ze[gt][k + w](oe, function(e) {
		e[Y](), e = this[C + S]("data-comment-id"), ft(this[z]), Qe[W].id != "c" + e && a[m]("c" + e)[M](Qe)
	});
	for (gt = 0; gt < tt[x]; ++gt) {
		tt[gt][k + w]("submit", function(e) {
			e[Y]();
			var t = e[L];
			Me(t, "loading");
			var a = new FormData(t),
				n = "blogID=" + Ie;
			a.forEach(function(e, t) {
				n += "&" + i(t) + "=" + i(e)
			}), e = pe + he + "contact-form.do", (a = new c)[G]("post", e), a[Q](de, "application/x-www-form-urlencoded"), a[N](n), a.onreadystatechange = function() {
				var e;
				Te(t, "loading"), 4 === this.readyState && 200 === this.status && "" != this.response && ((e = Le(this[X][H]())) && "true" == e.details.emailSentStatus ? (t.reset(), Te(t, "send-error"), Me(t, "send-success")) : (Te(t, "send-success"), Me(t, "send-error")))
			}
		})
	}

	function mt(e) {
		if (e && (a[I + w](re, mt), a[I + w](le, mt), a[I + w](ne, mt)), Defer.dom(".custom-posts", 1, null, jo[fe], null, {
				rootMargin: "200%"
			}), 0 < et[x]) {
			for (var t = 0; t < et[x]; ++t) {
				var n = et[t],
					o = n[g],
					l = a[y]("textarea");
				l[g] = o[v](/src="(.*?)"/g, 'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'), (o = a[y]("div"))[g] = l.value, 0 == t && Me(o, "feature-image full-width"), n[W][T + E](o, n)
			}
			Defer.dom('[lazyload="true"]', 1, "loaded", st, null, {
				rootMargin: "200%"
			})
		}
		if (null !== nt && (null !== ot && null !== rt && (rt[g] = ot[g], rt[$ + S]("data-no-item", ot[C + S]("data-no-item"))), null !== at)) {
			var i = nt[h](Ce + "," + _e),
				s = at.childNodes,
				c = s[x],
				d = [];
			for (t = 0; t < i[x]; t++) {
				var u = i[t].closest(_e);
				u && i[t] != u || d[P](i[t])
			}
			var f;
			for (t = 0; t < c; t++) t == c - 1 ? nt[M](s[0]) : (f = t == c - 1 ? d[x] - 1 : r.round(d[x] / c) * t, (f = 0 == t ? d[0] : d[f].nextSibling) && f[W][T + E](s[0], f))
		}
		ve || ($e && (typeof adsbygoogle === se && (adsbygoogle = []), Defer.js(pe + "pagead2.googlesyndication.com/pagead/js/" + me + ".js?client=" + $e, me, 100)), Pe && Pe != ae && Defer.js(pe + "www.googletagmanager.com/gtag/js?id=" + Pe, "analytics", 100, function() {
			function e() {
				dataLayer[P](arguments)
			}
			e("js", new Date), e("config", Pe)
		}), Re && Re())
	}
	lt && (a[V] = a[V][v](xe, xe + De + " " + lt + xe)), Defer.dom(".lazyload", 1, "loaded", st), Defer.dom("#post-pager", 1, null, function(e) {
		for (var t = e[h]("a"), n = 0; n < t[x]; ++n) {
			var o = t[n],
				r = o[z],
				l = a[y]("span");
			Me(l, "d-block fw-bold pt-2 text-primary"), o[M](l), ct(r, l)
		}
	}, null, {
		rootMargin: "200%"
	}), Defer.dom("#pagination", 1, null, function(e) {
		var n, o, s, c, d, u, f, m;

		function p(e, r, l) {
			var i = a[y]("li"),
				d = a[y]("span");
			return Me(d, "btn btn-sm rounded-pill "), d[g] = l || e, d[$ + S]("data-page", e), e == r ? Me(d, "btn-primary") : (Me(d, "btn-light hover-btn-primary"), d[k + w](oe, function(e) {
				var a;
				e[Y](), 1 == (m = d[C + S]("data-page")) ? (a = o ? we + "/blog" + c + "?max-results=" + n + "&page=" + m : we, t[O][z] = a) : (a = (m - 1) * n, Defer.js(we + "/feeds/posts/summary/" + s + "?start-index=" + a + "&alt=json&callback=jo." + ue + "_date&max-results=1"))
			})), i[M](d), i
		}
		e[C + S]("data-pagination") != ae ? (n = e[C + S]("data-posts"), o = e[C + S]("data-label"), s = (o = i(o)) ? "-/" + o + "/" : "", c = o ? "/label/" + o : "", Defer.js(we + "/feeds/posts/summary/" + s + "?alt=json&callback=jo." + ue + "_" + j + "&max-results=1"), d = ze("max-results", ke), u = ze("page", ke), f = d || n, m = u || 1, jo[ue + "_" + j] = function(t) {
			var o = t.feed,
				i = l(o.openSearch$totalResults.$t);
			if (n < i) {
				t = function(e, t, a, n) {
					e = l(e), t = l(t), a = l(a), n = l(n);
					var o, i, s = r[K](e / a);
					t < 1 ? t = 1 : s < t && (t = s), i = s <= n ? (o = 1, s) : (e = r[Z](n / 2), a = r[K](n / 2) - 1, t <= e ? (o = 1, n) : s <= t + a ? (o = s - n + 1, s) : (o = t - e, t + a));
					for (var c = (t - 1) * a, d = (n = r.min(c + a - 1, e - 1), []), u = 0; u < i + 1 - o; u++) d[P](u);
					return d = d.map(function(e) {
						return o + e
					}), {
						totalItems: e,
						currentPage: t,
						pageSize: a,
						totalPages: s,
						startPage: o,
						endPage: i,
						startIndex: c,
						endIndex: n,
						pages: d
					}
				}(i, m, f, 5);
				var s = a[y]("ul");
				o = t.totalPages;
				1 != t.currentPage && (i = p(t.currentPage - 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-l"/></svg>'), s[M](i)), Ue(t.pages, 1) || (d = p(1, t.currentPage, "1 . ."), s[M](d));
				for (var c = 0; c < t.pages[x]; c++) {
					var d = p(t.pages[c], t.currentPage);
					s[M](d)
				}
				Ue(t.pages, o) || (d = p(o, t.currentPage, ". . " + o), s[M](d)), t.currentPage != o && (o = p(t.currentPage + 1, "", '<svg aria-hidden="true" class="icon"><use xlink:href="#i-arrow-r"/></svg>'), s[M](o)), e[g] = "", Me(s, "pagination mb-0"), e[M](s), Te(e, "visually-hidden")
			}
		}, jo[ue + "_date"] = function(e) {
			e = (e = (e = e.feed.entry[0]).published.$t[J](0, 19) + e.published.$t[J](23, 29))[v]("+", "%2B"), e = we + "/blog" + c + "?updated-max=" + e + "&max-results=" + f + "&page=" + m, t[O][z] = e
		}) : Te(e, "visually-hidden")
	}, null, {
		rootMargin: "200%"
	}), it ? mt(!1) : (null !== d && d[$ + ee]("lazy", 1), a[k + w](re, mt), a[k + w](le, mt), a[k + w](ne, mt))

}();
