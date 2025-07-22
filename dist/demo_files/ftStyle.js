/** Shrinkwrap URL:
 *      /v2/bundles/js?modules=o-grid%404.5.3%2Co-header%407.8.13%2Co-footer%406.1.4%2Co-typography%405.12.0%2Co-colors%404.10.3%2Co-tooltip%403.5.1%2Co-tracking%401.7.3%2Co-viewport%403.3.3%2Co-fonts%403.3.2%2Co-video%404.1.10%2Co-share%406.5.0%2Co-toggle%401.2.1%2Co-cookie-message%404.7.3%2Co-autoinit%401.5.1&shrinkwrap=fontfaceobserver%402.1.0%2Cftdomdelegate%403.1.0%2Cfticons%401.23.2%2Cmathsass%400.10.1%2Co-assets%403.4.9%2Co-banner%402.3.0%2Co-brand%403.3.0%2Co-buttons%405.16.9%2Co-fetch-jsonp%402.3.0%2Co-icons%405.11.2%2Co-layers%402.1.6%2Co-loading%402.3.0%2Co-normalise%401.7.4%2Co-overlay%402.7.11%2Co-spacing%402.1.0%2Co-utils%401.1.7%2Co-visual-effects%402.1.1%2Csass-mq%405.0.1%2Csuperstore-sync%402.1.1&brand=master
 */
!(function (t) {
	function e(o) {
		if (n[o]) return n[o].exports;
		var i = (n[o] = { i: o, l: !1, exports: {} });
		return t[o].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
	}
	var n = {};
	(e.m = t),
		(e.c = n),
		(e.d = function (t, n, o) {
			e.o(t, n) ||
				Object.defineProperty(t, n, {
					configurable: !1,
					enumerable: !0,
					get: o,
				});
		}),
		(e.n = function (t) {
			var n =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return e.d(n, 'a', n), n;
		}),
		(e.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(e.p = ''),
		e((e.s = 66));
})([
	function (t, e) {
		var n = Object;
		t.exports = {
			create: n.create,
			getProto: n.getPrototypeOf,
			isEnum: {}.propertyIsEnumerable,
			getDesc: n.getOwnPropertyDescriptor,
			setDesc: n.defineProperty,
			setDescs: n.defineProperties,
			getKeys: n.keys,
			getNames: n.getOwnPropertyNames,
			getSymbols: n.getOwnPropertySymbols,
			each: [].forEach,
		};
	},
	function (t, e, n) {
		'use strict';
		(e.__esModule = !0),
			(e.default = function (t, e) {
				if (!(t instanceof e))
					throw new TypeError('Cannot call a class as a function');
			});
	},
	function (t, e, n) {
		'use strict';
		e.__esModule = !0;
		var o = n(60),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o);
		e.default = (function () {
			function t(t, e) {
				for (var n = 0; n < e.length; n++) {
					var o = e[n];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						(0, i.default)(t, o.key, o);
				}
			}
			return function (e, n, o) {
				return n && t(e.prototype, n), o && t(e, o), e;
			};
		})();
	},
	function (t, e) {
		var n = (t.exports = { version: '1.2.6' });
		'number' == typeof __e && (__e = n);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i() {
			if (x.get('developer') && window.console)
				for (var t = 0; t < arguments.length; t++)
					window.console.log(arguments[t]);
		}
		function r(t, e) {
			return (
				e || (e = 'undefined'),
				(void 0 === t ? 'undefined' : (0, C.default)(t)) === e
			);
		}
		function s(t, e) {
			e || ((e = t), (t = {}));
			var n = void 0,
				o = void 0,
				i = void 0;
			for (n in e)
				(o = t[n]),
					(i = e[n]),
					t !== i &&
						void 0 !== i &&
						null !== i &&
						(t[n] = o !== Object(o) || r(o, 'function') ? i : s(o, i));
			return t;
		}
		function a(t) {
			return window.encodeURIComponent
				? window.encodeURIComponent(t)
				: window.escape(t);
		}
		function l(t) {
			return window.decodeURIComponent
				? window.decodeURIComponent(t)
				: window.unescape(t);
		}
		function u(t, e, n) {
			t.addEventListener
				? t.addEventListener(e, n, !1)
				: t.attachEvent('on' + e, n);
		}
		function c(t, e, n) {
			n = n || {};
			try {
				window.dispatchEvent(
					new CustomEvent(t + '.' + e, { detail: n, bubbles: !0 })
				);
			} catch (t) {}
		}
		function d(t) {
			r(t, 'function') && M.push(t);
		}
		function h() {
			for (var t = 0; t < M.length; t++) M[t]();
		}
		function f(t) {
			return document.cookie.match(t) &&
				'' !== RegExp.$1 &&
				'null' !== RegExp.$1
				? RegExp.$1
				: null;
		}
		function p(t) {
			return document.location.href.match(t) && '' !== RegExp.$1
				? RegExp.$1
				: null;
		}
		function v(t) {
			if ('string' != typeof t) return null;
			var e = void 0,
				n = t.split('.'),
				o = window;
			for (e = 0; e < n.length; e += 1) {
				if (void 0 === o[n[e]]) return null;
				o = o[n[e]];
			}
			return '' !== o ? o : null;
		}
		function g(t) {
			return 'string' == typeof t ? t.trim() : t;
		}
		function m(t, e) {
			for (var n in t)
				e[n]
					? console.warn("You can't set a custom property called " + n)
					: (e[n] = t[n]);
		}
		function y(t, e) {
			return e.reduce(function (e, n) {
				return (0,
				_.default)({}, e, t[n] ? (0, b.default)({}, n, t[n]) : void 0);
			}, {});
		}
		var E = n(127),
			b = o(E),
			w = n(22),
			_ = o(w),
			k = n(47),
			C = o(k),
			x = n(15),
			L = n(131),
			M = [];
		t.exports = {
			log: i,
			is: r,
			isUndefined: r,
			merge: s,
			encode: a,
			decode: l,
			guid: L,
			addEvent: u,
			broadcast: c,
			onPage: d,
			triggerPage: h,
			getValueFromCookie: f,
			getValueFromUrl: p,
			getValueFromJsVariable: v,
			sanitise: g,
			assignIfUndefined: m,
			whitelistProps: y,
		};
	},
	function (t, e, n) {
		var o = n(52)('wks'),
			i = n(38),
			r = n(6).Symbol;
		t.exports = function (t) {
			return o[t] || (o[t] = (r && r[t]) || (r || i)('Symbol.' + t));
		};
	},
	function (t, e) {
		var n = (t.exports =
			'undefined' != typeof window && window.Math == Math
				? window
				: 'undefined' != typeof self && self.Math == Math
				? self
				: Function('return this')());
		'number' == typeof __g && (__g = n);
	},
	function (t, e, n) {
		t.exports = { default: n(69), __esModule: !0 };
	},
	function (t, e, n) {
		var o = n(6),
			i = n(3),
			r = n(10),
			s = function (t, e, n) {
				var a,
					l,
					u,
					c = t & s.F,
					d = t & s.G,
					h = t & s.S,
					f = t & s.P,
					p = t & s.B,
					v = t & s.W,
					g = d ? i : i[e] || (i[e] = {}),
					m = d ? o : h ? o[e] : (o[e] || {}).prototype;
				d && (n = e);
				for (a in n)
					((l = !c && m && a in m) && a in g) ||
						((u = l ? m[a] : n[a]),
						(g[a] =
							d && 'function' != typeof m[a]
								? n[a]
								: p && l
								? r(u, o)
								: v && m[a] == u
								? (function (t) {
										var e = function (e) {
											return this instanceof t ? new t(e) : t(e);
										};
										return (e.prototype = t.prototype), e;
								  })(u)
								: f && 'function' == typeof u
								? r(Function.call, u)
								: u),
						f && ((g.prototype || (g.prototype = {}))[a] = u));
			};
		(s.F = 1),
			(s.G = 2),
			(s.S = 4),
			(s.P = 8),
			(s.B = 16),
			(s.W = 32),
			(t.exports = s);
	},
	function (t, e, n) {
		t.exports = { default: n(72), __esModule: !0 };
	},
	function (t, e, n) {
		var o = n(33);
		t.exports = function (t, e, n) {
			if ((o(t), void 0 === e)) return t;
			switch (n) {
				case 1:
					return function (n) {
						return t.call(e, n);
					};
				case 2:
					return function (n, o) {
						return t.call(e, n, o);
					};
				case 3:
					return function (n, o, i) {
						return t.call(e, n, o, i);
					};
			}
			return function () {
				return t.apply(e, arguments);
			};
		};
	},
	function (t, e, n) {
		var o = n(14);
		t.exports = function (t) {
			if (!o(t)) throw TypeError(t + ' is not an object!');
			return t;
		};
	},
	function (t, e, n) {
		t.exports = { default: n(103), __esModule: !0 };
	},
	function (t, e, n) {
		t.exports = !n(16)(function () {
			return (
				7 !=
				Object.defineProperty({}, 'a', {
					get: function () {
						return 7;
					},
				}).a
			);
		});
	},
	function (t, e) {
		t.exports = function (t) {
			return 'object' == typeof t ? null !== t : 'function' == typeof t;
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			if (void 0 === t) return t;
			switch (Object.prototype.toString.call(t)) {
				case '[object Object]':
					return JSON.parse((0, l.default)(t));
				case '[object Array]':
					return [].slice.call(t);
				default:
					return t;
			}
		}
		function i(t, e) {
			u[t] = o(e);
		}
		function r(t) {
			return o(u[t]);
		}
		function s(t) {
			delete u[t];
		}
		var a = n(30),
			l = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(a),
			u = {};
		t.exports = { set: i, get: r, destroy: s };
	},
	function (t, e) {
		t.exports = function (t) {
			try {
				return !!t();
			} catch (t) {
				return !0;
			}
		};
	},
	function (t, e, n) {
		var o = n(0),
			i = n(37);
		t.exports = n(13)
			? function (t, e, n) {
					return o.setDesc(t, e, i(1, n));
			  }
			: function (t, e, n) {
					return (t[e] = n), t;
			  };
	},
	function (t, e) {
		t.exports = {};
	},
	function (t, e, n) {
		var o = n(0).setDesc,
			i = n(26),
			r = n(5)('toStringTag');
		t.exports = function (t, e, n) {
			t &&
				!i((t = n ? t : t.prototype), r) &&
				o(t, r, { configurable: !0, value: e });
		};
	},
	function (t, e) {
		var n = {}.toString;
		t.exports = function (t) {
			return n.call(t).slice(8, -1);
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			'number' == typeof arguments[0]
				? (o('scroll', arguments[0]),
				  o('resize', arguments[1]),
				  o('orientation', arguments[2]),
				  o('visibility', arguments[3]))
				: e && (g[t] = e);
		}
		function i() {
			if (!v.resize) {
				var t = p(function (t) {
					h.broadcast('resize', { viewport: h.getSize(), originalEvent: t });
				}, g.resize);
				window.addEventListener('resize', t),
					(v.resize = { eventType: 'resize', handler: t });
			}
		}
		function r() {
			if (!v.orientation) {
				var t = p(function (t) {
					h.broadcast('orientation', {
						viewport: h.getSize(),
						orientation: h.getOrientation(),
						originalEvent: t,
					});
				}, g.orientation);
				window.addEventListener('orientationchange', t),
					(v.orientation = { eventType: 'orientationchange', handler: t });
			}
		}
		function s() {
			if (!v.visibility) {
				var t = h.detectVisiblityAPI().eventType,
					e = p(function (t) {
						h.broadcast('visibility', {
							hidden: h.getVisibility(),
							originalEvent: t,
						});
					}, g.visibility);
				window.addEventListener(t, e),
					(v.visibility = { eventType: t, handler: e });
			}
		}
		function a() {
			if (!v.scroll) {
				var t = f(function (t) {
					var e = h.getScrollPosition();
					h.broadcast('scroll', {
						viewport: h.getSize(),
						scrollHeight: e.height,
						scrollLeft: e.left,
						scrollTop: e.top,
						scrollWidth: e.width,
						originalEvent: t,
					});
				}, g.scroll);
				window.addEventListener('scroll', t),
					(v.scroll = { eventType: 'scroll', handler: t });
			}
		}
		function l(t) {
			('resize' !== t && 'all' !== t) || i(),
				('scroll' !== t && 'all' !== t) || a(),
				('orientation' !== t && 'all' !== t) || r(),
				('visibility' !== t && 'all' !== t) || s();
		}
		function u(t) {
			'all' === t
				? (0, d.default)(v).forEach(u)
				: v[t] &&
				  (window.removeEventListener(v[t].eventType, v[t].handler),
				  delete v[t]);
		}
		var c = n(7),
			d = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(c),
			h = n(100),
			f = h.throttle,
			p = h.debounce,
			v = {},
			g = { resize: 100, orientation: 100, visibility: 100, scroll: 100 };
		t.exports = {
			debug: function () {
				h.debug();
			},
			listenTo: l,
			stopListeningTo: u,
			setThrottleInterval: o,
			getOrientation: h.getOrientation,
			getSize: h.getSize,
			getScrollPosition: h.getScrollPosition,
			getVisibility: h.getVisibility,
		};
	},
	function (t, e, n) {
		t.exports = { default: n(128), __esModule: !0 };
	},
	function (t, e, n) {
		'use strict';
		function o() {
			return (d = c.guid());
		}
		function i() {
			return d || o(), d;
		}
		function r(t, e) {
			c.isUndefined(e) && (e = function () {});
			var n = l.session(),
				o = {
					async: !0,
					callback: e || function () {},
					context: { id: t.id || c.guid(), root_id: i() },
					user: {
						passport_id:
							c.getValueFromCookie(/USERID=([0-9]+):/) ||
							c.getValueFromCookie(/PID=([0-9]+)\_/),
						ft_session: c.getValueFromCookie(/FTSession=([^;]+)/),
						ft_session_s: c.getValueFromCookie(/FTSession_s=([^;]+)/),
					},
					device: {
						spoor_session: n.id,
						spoor_session_is_new: n.isNew,
						spoor_id: a.userID(),
					},
				},
				r = u.get('config') || {};
			return (
				r.context && c.merge(o.context, r.context),
				r.user && c.merge(o.user, r.user),
				r.device && c.merge(o.device, r.device),
				c.merge(o, t),
				c.log('Core.Track', o),
				s.addAndRun(o),
				o
			);
		}
		var s = n(63),
			a = n(61),
			l = n(62),
			u = n(15),
			c = n(4),
			d = void 0;
		t.exports = { setRootID: o, getRootID: i, track: r };
	},
	function (t, e) {
		t.exports = function (t) {
			if (void 0 == t) throw TypeError("Can't call method on  " + t);
			return t;
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(73)(!0);
		n(34)(
			String,
			'String',
			function (t) {
				(this._t = String(t)), (this._i = 0);
			},
			function () {
				var t,
					e = this._t,
					n = this._i;
				return n >= e.length
					? { value: void 0, done: !0 }
					: ((t = o(e, n)), (this._i += t.length), { value: t, done: !1 });
			}
		);
	},
	function (t, e) {
		var n = {}.hasOwnProperty;
		t.exports = function (t, e) {
			return n.call(t, e);
		};
	},
	function (t, e, n) {
		var o = n(58),
			i = n(24);
		t.exports = function (t) {
			return o(i(t));
		};
	},
	function (t, e, n) {
		var o = n(10),
			i = n(53),
			r = n(54),
			s = n(11),
			a = n(55),
			l = n(39);
		t.exports = function (t, e, n, u) {
			var c,
				d,
				h,
				f = l(t),
				p = o(n, u, e ? 2 : 1),
				v = 0;
			if ('function' != typeof f) throw TypeError(t + ' is not iterable!');
			if (r(f))
				for (c = a(t.length); c > v; v++)
					e ? p(s((d = t[v]))[0], d[1]) : p(t[v]);
			else for (h = f.call(t); !(d = h.next()).done; ) i(h, p, d.value, e);
		};
	},
	function (t, e, n) {
		'use strict';
		Object.defineProperty(e, '__esModule', { value: !0 });
		var o = n(88),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function t() {
				i.default.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', r),
			(e.default = i.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		t.exports = { default: n(126), __esModule: !0 };
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i() {
			var t = document.createElement('B'),
				e = document.documentElement,
				n = void 0;
			return (
				(t.innerHTML = '\x3c!--[if IE 8]><b id="ie8test"></b><![endif]--\x3e'),
				e.appendChild(t),
				(n = !!document.getElementById('ie8test')),
				e.removeChild(t),
				n
			);
		}
		function r() {
			return a('after');
		}
		function s() {
			return a('before');
		}
		function a(t) {
			try {
				var e = window
					.getComputedStyle(document.documentElement, ':' + t)
					.getPropertyValue('content');
				return (
					(e = e
						.replace(/'/g, '')
						.replace(/\\/g, '')
						.replace(/^"/, '')
						.replace(/"$/, '')),
					JSON.parse(e)
				);
			} catch (t) {
				return {};
			}
		}
		function l() {
			return y() ? 'L' : r().layout;
		}
		function u() {
			return y() ? '20px' : r().gutter;
		}
		function c() {
			var t = s();
			if (t.hasOwnProperty('layouts')) {
				var e = t.layouts,
					n = new g.default(
						[].concat(
							(0, p.default)(
								(0, h.default)(e).map(function (t) {
									return [t, e[t]];
								})
							),
							[['default', '240px']]
						)
					),
					o = function (t) {
						return Number(t.replace('px', '') - 1) + 'px';
					},
					i = function (t, e) {
						var n = function (t) {
								t.matches &&
									window.dispatchEvent(
										new CustomEvent('o-grid.layoutChange', {
											detail: { layout: e },
										})
									);
							},
							o = window.matchMedia(t);
						o.addListener(n), n(o);
					};
				n.forEach(function (t, e) {
					switch (e) {
						case 'S':
							i(
								'(min-width: ' + t + ') and (max-width: ' + o(n.get('M')) + ')',
								e
							);
							break;
						case 'M':
							i(
								'(min-width: ' + t + ') and (max-width: ' + o(n.get('L')) + ')',
								e
							);
							break;
						case 'L':
							i(
								'(min-width: ' +
									t +
									') and (max-width: ' +
									o(n.get('XL')) +
									')',
								e
							);
							break;
						case 'XL':
							i('(min-width: ' + t + ')', e);
							break;
						case 'default':
						default:
							i('(max-width: ' + o(n.get('S')) + ')', e);
					}
				});
			} else
				console.error(
					'To enable grid layout change events, include oGridSurfaceLayoutSizes in your Sass'
				);
		}
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.enableLayoutChangeEvents =
				e.getGridBreakpoints =
				e.getCurrentGutter =
				e.getCurrentLayout =
				e.setMinSupportedIeVersion =
					void 0);
		var d = n(7),
			h = o(d),
			f = n(50),
			p = o(f),
			v = n(41),
			g = o(v),
			m = 8,
			y = (function () {
				var t = void 0;
				return function () {
					return !(m > 8) && (void 0 === t && (t = i()), t);
				};
			})(),
			E = function (t) {
				m = t;
			};
		(e.setMinSupportedIeVersion = E),
			(e.getCurrentLayout = l),
			(e.getCurrentGutter = u),
			(e.getGridBreakpoints = s),
			(e.enableLayoutChangeEvents = c),
			(e.default = {
				setMinSupportedIeVersion: E,
				getCurrentLayout: l,
				getCurrentGutter: u,
				getGridBreakpoints: s,
				enableLayoutChangeEvents: c,
			});
	},
	function (t, e, n) {
		var o = n(24);
		t.exports = function (t) {
			return Object(o(t));
		};
	},
	function (t, e) {
		t.exports = function (t) {
			if ('function' != typeof t) throw TypeError(t + ' is not a function!');
			return t;
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(35),
			i = n(8),
			r = n(36),
			s = n(17),
			a = n(26),
			l = n(18),
			u = n(74),
			c = n(19),
			d = n(0).getProto,
			h = n(5)('iterator'),
			f = !([].keys && 'next' in [].keys()),
			p = function () {
				return this;
			};
		t.exports = function (t, e, n, v, g, m, y) {
			u(n, e, v);
			var E,
				b,
				w = function (t) {
					if (!f && t in x) return x[t];
					switch (t) {
						case 'keys':
						case 'values':
							return function () {
								return new n(this, t);
							};
					}
					return function () {
						return new n(this, t);
					};
				},
				_ = e + ' Iterator',
				k = 'values' == g,
				C = !1,
				x = t.prototype,
				L = x[h] || x['@@iterator'] || (g && x[g]),
				M = L || w(g);
			if (L) {
				var A = d(M.call(new t()));
				c(A, _, !0),
					!o && a(x, '@@iterator') && s(A, h, p),
					k &&
						'values' !== L.name &&
						((C = !0),
						(M = function () {
							return L.call(this);
						}));
			}
			if (
				((o && !y) || (!f && !C && x[h]) || s(x, h, M),
				(l[e] = M),
				(l[_] = p),
				g)
			)
				if (
					((E = {
						values: k ? M : w('values'),
						keys: m ? M : w('keys'),
						entries: k ? w('entries') : M,
					}),
					y)
				)
					for (b in E) b in x || r(x, b, E[b]);
				else i(i.P + i.F * (f || C), e, E);
			return E;
		};
	},
	function (t, e) {
		t.exports = !0;
	},
	function (t, e, n) {
		t.exports = n(17);
	},
	function (t, e) {
		t.exports = function (t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e,
			};
		};
	},
	function (t, e) {
		var n = 0,
			o = Math.random();
		t.exports = function (t) {
			return 'Symbol('.concat(
				void 0 === t ? '' : t,
				')_',
				(++n + o).toString(36)
			);
		};
	},
	function (t, e, n) {
		var o = n(40),
			i = n(5)('iterator'),
			r = n(18);
		t.exports = n(3).getIteratorMethod = function (t) {
			if (void 0 != t) return t[i] || t['@@iterator'] || r[o(t)];
		};
	},
	function (t, e, n) {
		var o = n(20),
			i = n(5)('toStringTag'),
			r =
				'Arguments' ==
				o(
					(function () {
						return arguments;
					})()
				);
		t.exports = function (t) {
			var e, n, s;
			return void 0 === t
				? 'Undefined'
				: null === t
				? 'Null'
				: 'string' == typeof (n = (e = Object(t))[i])
				? n
				: r
				? o(e)
				: 'Object' == (s = o(e)) && 'function' == typeof e.callee
				? 'Arguments'
				: s;
		};
	},
	function (t, e, n) {
		t.exports = { default: n(76), __esModule: !0 };
	},
	function (t, e) {},
	function (t, e, n) {
		n(77);
		var o = n(18);
		o.NodeList = o.HTMLCollection = o.Array;
	},
	function (t, e, n) {
		var o = n(36);
		t.exports = function (t, e) {
			for (var n in e) o(t, n, e[n]);
			return t;
		};
	},
	function (t, e) {
		t.exports = function (t, e, n) {
			if (!(t instanceof e)) throw TypeError(n + ": use the 'new' operator!");
			return t;
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			var n = void 0;
			return function () {
				var o = this,
					i = arguments,
					r = function () {
						(n = null), t.apply(o, i);
					};
				clearTimeout(n), (n = setTimeout(r, e));
			};
		}
		function i(t, e) {
			var n = void 0;
			return function () {
				var o = this;
				if (!n) {
					var i = arguments,
						r = function () {
							(n = null), t.apply(o, i);
						};
					n = setTimeout(r, e);
				}
			};
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		(e.debounce = o), (e.throttle = i);
	},
	function (t, e, n) {
		'use strict';
		var o = n(115).default;
		(e.default = function (t) {
			return t && t.constructor === o ? 'symbol' : typeof t;
		}),
			(e.__esModule = !0);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			(this.listenerMap = [{}, {}]),
				t && this.root(t),
				(this.handle = o.prototype.handle.bind(this)),
				(this._removedListeners = []);
		}
		function i(t, e) {
			return t.toLowerCase() === e.tagName.toLowerCase();
		}
		function r(t, e) {
			return this.rootElement === window
				? e === document || e === document.documentElement || e === window
				: this.rootElement === e;
		}
		function s(t, e) {
			return t === e.id;
		}
		(t.exports = o),
			(o.prototype.root = function (t) {
				var e,
					n = this.listenerMap;
				if (this.rootElement) {
					for (e in n[1])
						n[1].hasOwnProperty(e) &&
							this.rootElement.removeEventListener(e, this.handle, !0);
					for (e in n[0])
						n[0].hasOwnProperty(e) &&
							this.rootElement.removeEventListener(e, this.handle, !1);
				}
				if (!t || !t.addEventListener)
					return this.rootElement && delete this.rootElement, this;
				this.rootElement = t;
				for (e in n[1])
					n[1].hasOwnProperty(e) &&
						this.rootElement.addEventListener(e, this.handle, !0);
				for (e in n[0])
					n[0].hasOwnProperty(e) &&
						this.rootElement.addEventListener(e, this.handle, !1);
				return this;
			}),
			(o.prototype.captureForType = function (t) {
				return (
					-1 !==
					['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(t)
				);
			}),
			(o.prototype.on = function (t, e, n, o) {
				var l, u, c, d;
				if (!t) throw new TypeError('Invalid event type: ' + t);
				if (
					('function' == typeof e && ((o = n), (n = e), (e = null)),
					void 0 === o && (o = this.captureForType(t)),
					'function' != typeof n)
				)
					throw new TypeError('Handler must be a type of Function');
				return (
					(l = this.rootElement),
					(u = this.listenerMap[o ? 1 : 0]),
					u[t] || (l && l.addEventListener(t, this.handle, o), (u[t] = [])),
					e
						? /^[a-z]+$/i.test(e)
							? ((d = e), (c = i))
							: /^#[a-z0-9\-_]+$/i.test(e)
							? ((d = e.slice(1)), (c = s))
							: ((d = e), (c = a))
						: ((d = null), (c = r.bind(this))),
					u[t].push({ selector: e, handler: n, matcher: c, matcherParam: d }),
					this
				);
			}),
			(o.prototype.off = function (t, e, n, o) {
				var i, r, s, a, l;
				if (
					('function' == typeof e && ((o = n), (n = e), (e = null)),
					void 0 === o)
				)
					return this.off(t, e, n, !0), this.off(t, e, n, !1), this;
				if (((s = this.listenerMap[o ? 1 : 0]), !t)) {
					for (l in s) s.hasOwnProperty(l) && this.off(l, e, n);
					return this;
				}
				if (!(a = s[t]) || !a.length) return this;
				for (i = a.length - 1; i >= 0; i--)
					(r = a[i]),
						(e && e !== r.selector) ||
							(n && n !== r.handler) ||
							(this._removedListeners.push(r), a.splice(i, 1));
				return (
					a.length ||
						(delete s[t],
						this.rootElement &&
							this.rootElement.removeEventListener(t, this.handle, o)),
					this
				);
			}),
			(o.prototype.handle = function (t) {
				var e,
					n,
					o,
					i,
					r,
					s = t.type,
					a = [];
				if (!0 !== t.ftLabsDelegateIgnore) {
					switch (
						((r = t.target),
						3 === r.nodeType && (r = r.parentNode),
						r.correspondingUseElement && (r = r.correspondingUseElement),
						(o = this.rootElement),
						t.eventPhase || (t.target !== t.currentTarget ? 3 : 2))
					) {
						case 1:
							a = this.listenerMap[1][s];
							break;
						case 2:
							this.listenerMap[0] &&
								this.listenerMap[0][s] &&
								(a = a.concat(this.listenerMap[0][s])),
								this.listenerMap[1] &&
									this.listenerMap[1][s] &&
									(a = a.concat(this.listenerMap[1][s]));
							break;
						case 3:
							a = this.listenerMap[0][s];
					}
					var l = [];
					for (n = a.length; r && n; ) {
						for (e = 0; e < n && (i = a[e]); e++)
							r.tagName &&
							['button', 'input', 'select', 'textarea'].indexOf(
								r.tagName.toLowerCase()
							) > -1 &&
							r.hasAttribute('disabled')
								? (l = [])
								: i.matcher.call(r, i.matcherParam, r) && l.push([t, r, i]);
						if (r === o) break;
						if (
							((n = a.length),
							(r = r.parentElement || r.parentNode) instanceof HTMLDocument)
						)
							break;
					}
					var u;
					for (e = 0; e < l.length; e++)
						if (
							!(this._removedListeners.indexOf(l[e][2]) > -1) &&
							!1 === this.fire.apply(this, l[e])
						) {
							(l[e][0].ftLabsDelegateIgnore = !0),
								l[e][0].preventDefault(),
								(u = !1);
							break;
						}
					return u;
				}
			}),
			(o.prototype.fire = function (t, e, n) {
				return n.handler.call(e, t, e);
			});
		var a = (function (t) {
			if (t) {
				var e = t.prototype;
				return (
					e.matches ||
					e.matchesSelector ||
					e.webkitMatchesSelector ||
					e.mozMatchesSelector ||
					e.msMatchesSelector ||
					e.oMatchesSelector
				);
			}
		})(Element);
		o.prototype.destroy = function () {
			this.off(), this.root();
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(30),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function (t, e) {
				var o = void 0,
					i = n(4);
				if (i.isUndefined(t)) {
					var r = new Error('You must specify a name for the store.');
					throw (
						(i.broadcast('oErrors', 'log', {
							error: r.message,
							info: { module: 'o-tracking' },
						}),
						r)
					);
				}
				if (
					((this.config = i.merge({ storage: 'best', expires: 31536e7 }, e)),
					(this.data = null),
					(this.storageKey = this.config.hasOwnProperty('nameOverride')
						? this.config.nameOverride
						: ['o-tracking', t].join('_')),
					(this.storage = (function (t, e) {
						function n(t) {
							t += '=';
							var n = e.document.cookie.split(';'),
								o = void 0,
								r = void 0;
							for (o = 0; o < n.length; o += 1)
								if (((r = n[o].replace(/^\s+|\s+$/g, '')), 0 === r.indexOf(t)))
									return i.decode(r.substring(t.length, r.length));
							return null;
						}
						function o(n, o, r) {
							var s = void 0,
								a = '',
								l = void 0;
							i.is(r, 'number') &&
								((s = new Date()),
								s.setTime(s.getTime() + r),
								(a = 'expires=' + s.toGMTString() + ';')),
								(l =
									i.encode(n) +
									'=' +
									i.encode(o) +
									';' +
									a +
									'path=/;' +
									(t.domain ? 'domain=.' + t.domain + ';' : '')),
								(e.document.cookie = l);
						}
						function r(t) {
							o(t, '', -1);
						}
						var s = 'o-tracking_InternalTest';
						if ('cookie' !== t.storage)
							try {
								if (
									e.localStorage &&
									(e.localStorage.setItem(s, 'TEST'),
									'TEST' === e.localStorage.getItem(s))
								)
									return (
										e.localStorage.removeItem(s),
										{
											_type: 'localStorage',
											load: function (t) {
												return e.localStorage.getItem(t);
											},
											save: function (t, n) {
												return e.localStorage.setItem(t, n);
											},
											remove: function (t) {
												return e.localStorage.removeItem(t);
											},
										}
									);
							} catch (t) {
								i.broadcast('oErrors', 'log', {
									error: t.message,
									info: { module: 'o-tracking' },
								});
							}
						return (
							o(s, 'TEST'),
							'TEST' === n(s)
								? (r(s), { _type: 'cookie', load: n, save: o, remove: r })
								: {
										_type: 'none',
										load: function () {},
										save: function () {},
										remove: function () {},
								  }
						);
					})(this.config, window)),
					(o = this.storage.load(this.storageKey)))
				)
					try {
						this.data = JSON.parse(o);
					} catch (t) {
						i.broadcast('oErrors', 'log', {
							error: t.message,
							module: 'o-tracking',
						}),
							(this.data = o);
					}
				return this;
			};
		(r.prototype.read = function () {
			return this.data;
		}),
			(r.prototype.write = function (t) {
				return (
					(this.data = t),
					this.storage.save(
						this.storageKey,
						'string' == typeof this.data
							? this.data
							: (0, i.default)(this.data),
						this.config.expires
					),
					this
				);
			}),
			(r.prototype.destroy = function () {
				return (this.data = null), this.storage.remove(this.storageKey), this;
			}),
			(t.exports = r);
	},
	function (t, e, n) {
		'use strict';
		e.__esModule = !0;
		var o = n(9),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o);
		e.default = function (t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
				return n;
			}
			return (0, i.default)(t);
		};
	},
	function (t, e) {
		var n = Math.ceil,
			o = Math.floor;
		t.exports = function (t) {
			return isNaN((t = +t)) ? 0 : (t > 0 ? o : n)(t);
		};
	},
	function (t, e, n) {
		var o = n(6),
			i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
		t.exports = function (t) {
			return i[t] || (i[t] = {});
		};
	},
	function (t, e, n) {
		var o = n(11);
		t.exports = function (t, e, n, i) {
			try {
				return i ? e(o(n)[0], n[1]) : e(n);
			} catch (e) {
				var r = t.return;
				throw (void 0 !== r && o(r.call(t)), e);
			}
		};
	},
	function (t, e, n) {
		var o = n(18),
			i = n(5)('iterator'),
			r = Array.prototype;
		t.exports = function (t) {
			return void 0 !== t && (o.Array === t || r[i] === t);
		};
	},
	function (t, e, n) {
		var o = n(51),
			i = Math.min;
		t.exports = function (t) {
			return t > 0 ? i(o(t), 9007199254740991) : 0;
		};
	},
	function (t, e, n) {
		var o = n(5)('iterator'),
			i = !1;
		try {
			var r = [7][o]();
			(r.return = function () {
				i = !0;
			}),
				Array.from(r, function () {
					throw 2;
				});
		} catch (t) {}
		t.exports = function (t, e) {
			if (!e && !i) return !1;
			var n = !1;
			try {
				var r = [7],
					s = r[o]();
				(s.next = function () {
					return { done: (n = !0) };
				}),
					(r[o] = function () {
						return s;
					}),
					t(r);
			} catch (t) {}
			return n;
		};
	},
	function (t, e) {
		t.exports = function (t, e) {
			return { value: e, done: !!t };
		};
	},
	function (t, e, n) {
		var o = n(20);
		t.exports = Object('z').propertyIsEnumerable(0)
			? Object
			: function (t) {
					return 'String' == o(t) ? t.split('') : Object(t);
			  };
	},
	function (t, e, n) {
		'use strict';
		var o = n(3),
			i = n(0),
			r = n(13),
			s = n(5)('species');
		t.exports = function (t) {
			var e = o[t];
			r &&
				e &&
				!e[s] &&
				i.setDesc(e, s, {
					configurable: !0,
					get: function () {
						return this;
					},
				});
		};
	},
	function (t, e, n) {
		t.exports = { default: n(86), __esModule: !0 };
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			var n = {
				storage: 'cookie',
				name: 'spoor-id',
				nameOverride: 'spoor-id',
				value: null,
				domain: location.hostname.match(/^(?:.+\.)?ft\.com$/) ? 'ft.com' : null,
			};
			e && (n.domain = e), (a = new u(n.name, n));
			var o = a.read();
			return o || (o = t), i(o);
		}
		function i(t) {
			return (s = t), s || (s = l.guid()), a.write(s), s;
		}
		function r() {
			a.destroy();
		}
		var s = void 0,
			a = void 0,
			l = n(4),
			u = n(49);
		t.exports = {
			init: o,
			setUser: i,
			userID: function () {
				return s;
			},
			destroy: r,
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			var e = new Date();
			e.setTime(e.getTime() + s.config.expires),
				s.write({ value: t, expiry: e.valueOf() });
		}
		function i() {
			var t = s.read(),
				e = void 0,
				n = !1;
			if (t) {
				var i = new Date().valueOf();
				parseInt(t.expiry, 10) >= i && (e = t.value);
			}
			return e || ((e = l.guid()), (n = !0)), o(e), { id: e, isNew: n };
		}
		function r(t) {
			l.is(t, 'string') && (t = { name: t }), l.isUndefined(t) && (t = {});
			var e = l.merge(a, t);
			return (
				'cookie' === e.storage && t.name && (e.nameOverride = e.name),
				(s = new u(e.name, e)),
				i()
			);
		}
		var s = void 0,
			a = { storage: 'best', name: 'session', expires: 18e5 },
			l = n(4),
			u = n(49);
		t.exports = { init: r, session: i };
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i() {
			return (
				navigator.sendBeacon &&
				p.default &&
				(v.get('config') || {}).useSendBeacon
			);
		}
		function r(t, e) {
			var n = t.queueTime,
				o = new Date().getTime() - n,
				r = i()
					? y.get('sendBeacon')()
					: window.XMLHttpRequest &&
					  'withCredentials' in new window.XMLHttpRequest()
					? y.get('xhr')()
					: y.get('image')(),
				s = t.callback,
				a = (v.get('config') && v.get('config').system) || {},
				l = g.merge(a, {
					api_key: v.get('api_key'),
					version: v.get('version'),
					source: v.get('source'),
					transport: r.name,
				});
			(t = g.merge({ system: l }, t)),
				o > 1e3 &&
					o < 31104e6 &&
					((t.time = t.time || {}), (t.time.offset = o)),
				delete t.callback,
				delete t.async,
				delete t.type,
				delete t.queueTime,
				g.log('user_callback', s),
				g.log('PreSend', t);
			var u = (0, h.default)(t);
			r.complete(function (o) {
				if (
					(g.is(s, 'function') && (s.call(t), g.log('calling user_callback')),
					o)
				)
					if (E() && 'xhr' === r.name) {
						var i = y.get('image')();
						(t.system.transport = [t.system.transport, i.name].join('-')),
							i.send(c, (0, h.default)(t)),
							i.complete(function () {
								e && e();
							});
					} else
						(t.queueTime = n),
							w.add(t).save(),
							g.broadcast('oErrors', 'log', {
								error: o.message,
								info: { module: 'o-tracking' },
							});
				else e && e();
			});
			var c = b;
			if (t && t.category && t.action) {
				var d = 'type=' + t.category + ':' + t.action;
				c = c.indexOf('?') > -1 ? c + '&' + d : c + '?' + d;
			}
			(v.get('developer') && v.get('no_send')) || r.send(c, u);
		}
		function s(t) {
			(t.queueTime = new Date().getTime()),
				i() ? r(t) : w.add(t).save(),
				g.log('AddedToQueue', w);
		}
		function a(t) {
			g.isUndefined(t) && (t = function () {});
			var e = w.all();
			if (e.length > 200) {
				var n = {};
				e.forEach(function (t) {
					var e = [t.category, t.action].join(':');
					n.hasOwnProperty(e) || (n[e] = 0), (n[e] += 1);
				}),
					w.replace([]),
					w.add({
						category: 'o-tracking',
						action: 'queue-bug',
						context: {
							url: document.url,
							queue_length: e.length,
							counts: n,
							storage: w.storage.storage._type,
						},
					});
			}
			var o = function () {
					a(), t();
				},
				i = w.shift();
			return i ? r(i, o) : t();
		}
		function l(t) {
			s(t), a();
		}
		function u() {
			v.get('config') && v.get('config').server && (b = v.get('config').server);
		}
		function c() {
			return (
				(w = new m('requests')),
				u(),
				g.addEvent(window, 'online', function () {
					a();
				}),
				a(),
				w
			);
		}
		var d = n(30),
			h = o(d),
			f = n(12),
			p = o(f),
			v = n(15),
			g = n(4),
			m = n(64),
			y = n(132),
			E = function () {
				return !!window.MSInputMethodContext && !!document.documentMode;
			},
			b = 'https://spoor-api.ft.com/px.gif',
			w = void 0;
		t.exports = {
			init: c,
			setDomain: u,
			getDomain: function () {
				return b;
			},
			add: s,
			run: a,
			addAndRun: l,
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(4),
			i = n(49),
			r = function (t) {
				if (o.isUndefined(t)) {
					var e = new Error('You must specify a name for the queue.');
					throw (
						(o.broadcast('oErrors', 'log', {
							error: e.message,
							info: { module: 'o-tracking' },
						}),
						e)
					);
				}
				return (
					(this.queue = []),
					(this.storage = new i(t)),
					this.storage.read() && (this.queue = this.storage.read()),
					this
				);
			};
		(r.prototype.all = function () {
			if (0 === this.queue.length) return [];
			for (var t = [], e = 0; e < this.queue.length; e += 1)
				t.push(this.queue[e].item);
			return t;
		}),
			(r.prototype.first = function () {
				return 0 === this.queue.length ? null : this.queue[0].item;
			}),
			(r.prototype.last = function () {
				return 0 === this.queue.length ? null : this.queue.slice(-1)[0].item;
			}),
			(r.prototype.add = function (t) {
				function e(t) {
					n.queue.push({ created_at: new Date().valueOf(), item: t });
				}
				var n = this,
					i = void 0;
				if (o.is(t, 'object') && t.constructor.toString().match(/array/i))
					for (i = 0; i < t.length; i += 1) e(t[i]);
				else e(t);
				return n;
			}),
			(r.prototype.replace = function (t) {
				if (o.is(t, 'object') && t.constructor.toString().match(/array/i))
					return (this.queue = []), this.add(t).save(), this;
				var e = new Error('Argument invalid, must be an array.');
				throw (
					(o.broadcast('oErrors', 'log', {
						error: e.message,
						info: { module: 'o-tracking' },
					}),
					e)
				);
			}),
			(r.prototype.shift = function () {
				if (0 === this.queue.length) return null;
				var t = this.queue.shift().item;
				return this.save(), t;
			}),
			(r.prototype.save = function () {
				return this.storage.write(this.queue), this;
			}),
			(t.exports = r);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i(t) {
			for (
				var e = document,
					n = t,
					o = n.getAttribute('data-trackable')
						? '[data-trackable="' + n.getAttribute('data-trackable') + '"]'
						: n.nodeName,
					i = [],
					r = {};
				t && t !== e;

			) {
				var a = h(t),
					c = (0, l.default)(t.attributes),
					v = f(c, a);
				v['data-trackable'] && (v = (0, s.default)(v, d(t, n, o))), i.push(v);
				var g = p(c, a, t === n);
				u.assignIfUndefined(g, r), (t = t.parentNode);
			}
			return { trace: i, customContext: r };
		}
		var r = n(22),
			s = o(r),
			a = n(9),
			l = o(a),
			u = n(4),
			c = ['nodeName', 'className', 'id', 'href', 'text', 'role'],
			d = function (t, e, n) {
				var o = (0, l.default)(t.querySelectorAll(n)),
					i = o.findIndex(function (t) {
						return t === e;
					});
				if (-1 !== i) return { siblings: o.length, position: i };
			},
			h = function (t) {
				return c.reduce(function (e, n) {
					return (
						t[n]
							? (e[n] = u.sanitise(t[n]))
							: t.getAttribute(n)
							? (e[n] = u.sanitise(t.getAttribute(n)))
							: t.hasAttribute(n) && (e[n] = t.hasAttribute(n)),
						e
					);
				}, {});
			},
			f = function (t, e) {
				return (
					t
						.filter(function (t) {
							return t.name.match(/^data-trackable|^data-o-|^aria-/i);
						})
						.forEach(function (t) {
							e[t.name] = t.value;
						}),
					e
				);
			},
			p = function (t, e, n) {
				var o = {};
				return (
					n &&
						c.forEach(function (t) {
							void 0 !== e[t] && 'id' !== t && (o[t] = e[t]);
						}),
					t
						.filter(function (t) {
							return t.name.match(/^data-trackable-context-/i);
						})
						.forEach(function (t) {
							o[t.name.replace('data-trackable-context-', '')] = t.value;
						}),
					o
				);
			};
		t.exports = i;
	},
	function (t, e, n) {
		'use strict';
		n(67)
			.setGlobalPathPrefix(
				'https://www.ft.com/__origami/service/build/v2/files/'
			)
			.setModuleVersions({
				'o-grid': '4.5.3',
				'o-header': '7.8.13',
				'o-footer': '6.1.4',
				'o-typography': '5.12.0',
				'o-tooltip': '3.5.1',
				'o-tracking': '1.7.3',
				'o-viewport': '3.3.3',
				'o-video': '4.1.10',
				'o-share': '6.5.0',
				'o-toggle': '1.2.1',
				'o-cookie-message': '4.7.3',
				'o-autoinit': '1.5.1',
			}),
			n(68);
		var o = {
			'o-grid': n(31),
			'o-header': n(84),
			'o-footer': n(97),
			'o-typography': n(101),
			'o-tooltip': n(122),
			'o-tracking': n(125),
			'o-viewport': n(21),
			'o-video': n(140),
			'o-share': n(148),
			'o-toggle': n(29),
			'o-cookie-message': n(150),
			'o-autoinit': n(155),
		};
		window.Origami = o;
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t.replace(/^\/+/, '').replace(/\/+$/, '');
		}
		function i(t) {
			return void 0 !== t && (l = t), this;
		}
		function r(t) {
			for (var e in t) e && (u[e] = o(t[e]));
			return this;
		}
		function s(t) {
			for (var e in t) e && (c[e] = o(t[e]));
			return this;
		}
		function a(t, e) {
			var n = o(t);
			return (
				void 0 !== c[e]
					? (n = c[e] + '/' + n)
					: ((n = e + '/' + n), l && (n = l + n)),
				n
			);
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var l = '/bower_components/',
			u = {},
			c = {};
		(e.default = {
			setGlobalPathPrefix: i,
			setModuleVersions: r,
			setModulePaths: s,
			resolve: a,
		}),
			(e.setGlobalPathPrefix = i),
			(e.setModuleVersions = r),
			(e.setModulePaths = s),
			(e.resolve = a);
	},
	function (t, e) {
		t.exports = {
			name: '__MAIN__',
			dependencies: {
				'o-grid': 'o-grid#^4.3.3',
				'o-header': 'o-header#^7.2.9',
				'o-footer': 'o-footer#^6.0.2',
				'o-typography': 'o-typography#^5.1.1',
				'o-colors': 'o-colors#^4.1.1',
				'o-tooltip': 'o-tooltip#^3.1.1',
				'o-tracking': 'o-tracking#^1.0.0',
				'o-viewport': 'o-viewport#^3.0.0',
				'o-fonts': 'o-fonts#^3.0.1',
				'o-video': 'o-video#^4.1.2',
				'o-share': 'o-share#^6.0.1',
				'o-toggle': 'o-toggle#^1.1.10',
				'o-cookie-message': 'o-cookie-message#^4.7.3',
				'o-autoinit': 'o-autoinit#^1.0.0',
			},
		};
	},
	function (t, e, n) {
		n(70), (t.exports = n(3).Object.keys);
	},
	function (t, e, n) {
		var o = n(32);
		n(71)('keys', function (t) {
			return function (e) {
				return t(o(e));
			};
		});
	},
	function (t, e, n) {
		var o = n(8),
			i = n(3),
			r = n(16);
		t.exports = function (t, e) {
			var n = (i.Object || {})[t] || Object[t],
				s = {};
			(s[t] = e(n)),
				o(
					o.S +
						o.F *
							r(function () {
								n(1);
							}),
					'Object',
					s
				);
		};
	},
	function (t, e, n) {
		n(25), n(75), (t.exports = n(3).Array.from);
	},
	function (t, e, n) {
		var o = n(51),
			i = n(24);
		t.exports = function (t) {
			return function (e, n) {
				var r,
					s,
					a = String(i(e)),
					l = o(n),
					u = a.length;
				return l < 0 || l >= u
					? t
						? ''
						: void 0
					: ((r = a.charCodeAt(l)),
					  r < 55296 ||
					  r > 56319 ||
					  l + 1 === u ||
					  (s = a.charCodeAt(l + 1)) < 56320 ||
					  s > 57343
							? t
								? a.charAt(l)
								: r
							: t
							? a.slice(l, l + 2)
							: s - 56320 + ((r - 55296) << 10) + 65536);
			};
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(0),
			i = n(37),
			r = n(19),
			s = {};
		n(17)(s, n(5)('iterator'), function () {
			return this;
		}),
			(t.exports = function (t, e, n) {
				(t.prototype = o.create(s, { next: i(1, n) })), r(t, e + ' Iterator');
			});
	},
	function (t, e, n) {
		'use strict';
		var o = n(10),
			i = n(8),
			r = n(32),
			s = n(53),
			a = n(54),
			l = n(55),
			u = n(39);
		i(
			i.S +
				i.F *
					!n(56)(function (t) {
						Array.from(t);
					}),
			'Array',
			{
				from: function (t) {
					var e,
						n,
						i,
						c,
						d = r(t),
						h = 'function' == typeof this ? this : Array,
						f = arguments,
						p = f.length,
						v = p > 1 ? f[1] : void 0,
						g = void 0 !== v,
						m = 0,
						y = u(d);
					if (
						(g && (v = o(v, p > 2 ? f[2] : void 0, 2)),
						void 0 == y || (h == Array && a(y)))
					)
						for (e = l(d.length), n = new h(e); e > m; m++)
							n[m] = g ? v(d[m], m) : d[m];
					else
						for (c = y.call(d), n = new h(); !(i = c.next()).done; m++)
							n[m] = g ? s(c, v, [i.value, m], !0) : i.value;
					return (n.length = m), n;
				},
			}
		);
	},
	function (t, e, n) {
		n(42), n(25), n(43), n(79), n(82), (t.exports = n(3).Map);
	},
	function (t, e, n) {
		'use strict';
		var o = n(78),
			i = n(57),
			r = n(18),
			s = n(27);
		(t.exports = n(34)(
			Array,
			'Array',
			function (t, e) {
				(this._t = s(t)), (this._i = 0), (this._k = e);
			},
			function () {
				var t = this._t,
					e = this._k,
					n = this._i++;
				return !t || n >= t.length
					? ((this._t = void 0), i(1))
					: 'keys' == e
					? i(0, n)
					: 'values' == e
					? i(0, t[n])
					: i(0, [n, t[n]]);
			},
			'values'
		)),
			(r.Arguments = r.Array),
			o('keys'),
			o('values'),
			o('entries');
	},
	function (t, e) {
		t.exports = function () {};
	},
	function (t, e, n) {
		'use strict';
		var o = n(80);
		n(81)(
			'Map',
			function (t) {
				return function () {
					return t(this, arguments.length > 0 ? arguments[0] : void 0);
				};
			},
			{
				get: function (t) {
					var e = o.getEntry(this, t);
					return e && e.v;
				},
				set: function (t, e) {
					return o.def(this, 0 === t ? 0 : t, e);
				},
			},
			o,
			!0
		);
	},
	function (t, e, n) {
		'use strict';
		var o = n(0),
			i = n(17),
			r = n(44),
			s = n(10),
			a = n(45),
			l = n(24),
			u = n(28),
			c = n(34),
			d = n(57),
			h = n(38)('id'),
			f = n(26),
			p = n(14),
			v = n(59),
			g = n(13),
			m = Object.isExtensible || p,
			y = g ? '_s' : 'size',
			E = 0,
			b = function (t, e) {
				if (!p(t))
					return 'symbol' == typeof t
						? t
						: ('string' == typeof t ? 'S' : 'P') + t;
				if (!f(t, h)) {
					if (!m(t)) return 'F';
					if (!e) return 'E';
					i(t, h, ++E);
				}
				return 'O' + t[h];
			},
			w = function (t, e) {
				var n,
					o = b(e);
				if ('F' !== o) return t._i[o];
				for (n = t._f; n; n = n.n) if (n.k == e) return n;
			};
		t.exports = {
			getConstructor: function (t, e, n, i) {
				var c = t(function (t, r) {
					a(t, c, e),
						(t._i = o.create(null)),
						(t._f = void 0),
						(t._l = void 0),
						(t[y] = 0),
						void 0 != r && u(r, n, t[i], t);
				});
				return (
					r(c.prototype, {
						clear: function () {
							for (var t = this, e = t._i, n = t._f; n; n = n.n)
								(n.r = !0), n.p && (n.p = n.p.n = void 0), delete e[n.i];
							(t._f = t._l = void 0), (t[y] = 0);
						},
						delete: function (t) {
							var e = this,
								n = w(e, t);
							if (n) {
								var o = n.n,
									i = n.p;
								delete e._i[n.i],
									(n.r = !0),
									i && (i.n = o),
									o && (o.p = i),
									e._f == n && (e._f = o),
									e._l == n && (e._l = i),
									e[y]--;
							}
							return !!n;
						},
						forEach: function (t) {
							for (
								var e,
									n = s(t, arguments.length > 1 ? arguments[1] : void 0, 3);
								(e = e ? e.n : this._f);

							)
								for (n(e.v, e.k, this); e && e.r; ) e = e.p;
						},
						has: function (t) {
							return !!w(this, t);
						},
					}),
					g &&
						o.setDesc(c.prototype, 'size', {
							get: function () {
								return l(this[y]);
							},
						}),
					c
				);
			},
			def: function (t, e, n) {
				var o,
					i,
					r = w(t, e);
				return (
					r
						? (r.v = n)
						: ((t._l = r =
								{
									i: (i = b(e, !0)),
									k: e,
									v: n,
									p: (o = t._l),
									n: void 0,
									r: !1,
								}),
						  t._f || (t._f = r),
						  o && (o.n = r),
						  t[y]++,
						  'F' !== i && (t._i[i] = r)),
					t
				);
			},
			getEntry: w,
			setStrong: function (t, e, n) {
				c(
					t,
					e,
					function (t, e) {
						(this._t = t), (this._k = e), (this._l = void 0);
					},
					function () {
						for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
						return t._t && (t._l = n = n ? n.n : t._t._f)
							? 'keys' == e
								? d(0, n.k)
								: 'values' == e
								? d(0, n.v)
								: d(0, [n.k, n.v])
							: ((t._t = void 0), d(1));
					},
					n ? 'entries' : 'values',
					!n,
					!0
				),
					v(e);
			},
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(0),
			i = n(6),
			r = n(8),
			s = n(16),
			a = n(17),
			l = n(44),
			u = n(28),
			c = n(45),
			d = n(14),
			h = n(19),
			f = n(13);
		t.exports = function (t, e, n, p, v, g) {
			var m = i[t],
				y = m,
				E = v ? 'set' : 'add',
				b = y && y.prototype,
				w = {};
			return (
				f &&
				'function' == typeof y &&
				(g ||
					(b.forEach &&
						!s(function () {
							new y().entries().next();
						})))
					? ((y = e(function (e, n) {
							c(e, y, t), (e._c = new m()), void 0 != n && u(n, v, e[E], e);
					  })),
					  o.each.call(
							'add,clear,delete,forEach,get,has,set,keys,values,entries'.split(
								','
							),
							function (t) {
								var e = 'add' == t || 'set' == t;
								t in b &&
									(!g || 'clear' != t) &&
									a(y.prototype, t, function (n, o) {
										if (!e && g && !d(n)) return 'get' == t && void 0;
										var i = this._c[t](0 === n ? 0 : n, o);
										return e ? this : i;
									});
							}
					  ),
					  'size' in b &&
							o.setDesc(y.prototype, 'size', {
								get: function () {
									return this._c.size;
								},
							}))
					: ((y = p.getConstructor(e, t, v, E)), l(y.prototype, n)),
				h(y, t),
				(w[t] = y),
				r(r.G + r.W + r.F, w),
				g || p.setStrong(y, t, v),
				y
			);
		};
	},
	function (t, e, n) {
		var o = n(8);
		o(o.P, 'Map', { toJSON: n(83)('Map') });
	},
	function (t, e, n) {
		var o = n(28),
			i = n(40);
		t.exports = function (t) {
			return function () {
				if (i(this) != t) throw TypeError(t + "#toJSON isn't generic");
				var e = [];
				return o(this, !1, e.push, e), e;
			};
		};
	},
	function (t, e, n) {
		'use strict';
		Object.defineProperty(e, '__esModule', { value: !0 });
		var o = n(85),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function t() {
				i.default.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', r),
			(e.default = i.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = n(87),
			u = o(l),
			c = n(93),
			d = o(c),
			h = n(94),
			f = o(h),
			p = n(95),
			v = o(p),
			g = n(96),
			m = o(g),
			y = (function () {
				function t(e) {
					(0, r.default)(this, t),
						e
							? 'string' == typeof e && (e = document.querySelector(e))
							: (e = document.querySelector('[data-o-component="o-header"]')),
						e.hasAttribute('data-o-header--js') ||
							((this.headerEl = e),
							u.default.init(this.headerEl),
							d.default.init(this.headerEl),
							f.default.init(this.headerEl),
							v.default.init(this.headerEl),
							m.default.init(this.headerEl),
							this.headerEl.removeAttribute('data-o-header--no-js'),
							this.headerEl.setAttribute('data-o-header--js', ''));
				}
				return (
					(0, a.default)(t, null, [
						{
							key: 'init',
							value: function (e) {
								return (
									e || (e = document.body),
									e instanceof HTMLElement || (e = document.querySelector(e)),
									/\bo-header\b/.test(e.getAttribute('data-o-component'))
										? new t(e)
										: [].map
												.call(
													e.querySelectorAll('[data-o-component="o-header"]'),
													function (e) {
														if (!e.hasAttribute('data-o-header--js'))
															return new t(e);
													}
												)
												.filter(function (t) {
													return void 0 !== t;
												})
								);
							},
						},
					]),
					t
				);
			})();
		(e.default = y), (t.exports = e.default);
	},
	function (t, e, n) {
		var o = n(0);
		t.exports = function (t, e, n) {
			return o.setDesc(t, e, n);
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			var e = t.querySelector('[data-o-header-search]'),
				n = e && t.querySelectorAll('[aria-controls="' + e.id + '"]');
			if (null !== n && 0 !== n.length)
				for (
					var o = [],
						i = function (t, n) {
							'open' === t
								? (o.push(n.currentTarget),
								  e.querySelector('[name="q"]').focus())
								: o.length && o.pop().focus();
						},
						s = 0,
						a = n.length;
					s < a;
					s++
				)
					new r.default(n[s], { target: e, callback: i });
		}
		Object.defineProperty(e, '__esModule', { value: !0 }), (e.init = void 0);
		var i = n(29),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i);
		(e.init = o), (e.default = { init: o });
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(89),
			r = o(i),
			s = n(41),
			a = o(s),
			l = n(1),
			u = o(l),
			c = n(2),
			d = o(c),
			h = n(92),
			f = o(h),
			p = (function () {
				function t(e, n) {
					(0, u.default)(this, t),
						t._targets || (t._targets = new a.default()),
						e &&
							(e instanceof HTMLElement || (e = document.querySelector(e)),
							e.hasAttribute('data-o-toggle--js') ||
								(n ||
									((n = {}),
									Array.prototype.forEach.call(e.attributes, function (t) {
										if (0 === t.name.indexOf('data-o-toggle')) {
											var e = t.name.replace('data-o-toggle-', '');
											try {
												n[e] = JSON.parse(t.value.replace(/\'/g, '"'));
											} catch (o) {
												n[e] = t.value;
											}
										}
									})),
								(this.callback = n.callback),
								'string' == typeof this.callback &&
									(this.callback = new Function(this.callback)),
								(this.toggleEl = e),
								'A' === this.toggleEl.nodeName &&
									this.toggleEl.setAttribute('role', 'button'),
								(this.toggle = this.toggle.bind(this)),
								this.toggleEl.addEventListener('click', this.toggle),
								this.toggleEl.setAttribute('data-o-toggle--js', 'true'),
								(this.targetEl = n.target),
								this.targetEl instanceof HTMLElement ||
									(this.targetEl = document.querySelector(this.targetEl)),
								void 0 === t._targets.get(this.targetEl)
									? ((this.target = new t.Target(this)),
									  t._targets.set(this.targetEl, this.target))
									: (this.target = t._targets.get(this.targetEl)),
								this.target.addToggle(this),
								this.target.close()));
				}
				return (
					(0, d.default)(
						t,
						[
							{
								key: 'open',
								value: function () {
									this.toggleEl.setAttribute('aria-expanded', 'true');
								},
							},
							{
								key: 'close',
								value: function () {
									this.toggleEl.setAttribute('aria-expanded', 'false');
								},
							},
							{
								key: 'toggle',
								value: function (t) {
									if (
										(this.target.toggle(),
										t && t.preventDefault(),
										this.callback)
									) {
										var e = this.target.isOpen() ? 'open' : 'close';
										this.callback(e, t);
									}
								},
							},
							{
								key: 'destroy',
								value: function () {
									this.toggleEl.removeEventListener('click', this.toggle),
										this.toggleEl.removeAttribute('aria-expanded'),
										this.toggleEl.removeAttribute('role'),
										this.toggleEl.removeAttribute('data-o-toggle--js'),
										this.target.removeToggle(this),
										(this.target = void 0),
										(this.toggleEl = void 0),
										(this.callback = void 0);
								},
							},
						],
						[
							{
								key: 'init',
								value: function (e, n) {
									e
										? e instanceof HTMLElement ||
										  (e = document.querySelector(e))
										: (e = document.body);
									var o = e.querySelectorAll('[data-o-component="o-toggle"]'),
										i = [],
										s = !0,
										a = !1,
										l = void 0;
									try {
										for (
											var u, c = (0, r.default)(o);
											!(s = (u = c.next()).done);
											s = !0
										) {
											var d = u.value;
											d.hasAttribute('data-o-toggle--js') ||
												i.push(new t(d, n));
										}
									} catch (t) {
										(a = !0), (l = t);
									} finally {
										try {
											!s && c.return && c.return();
										} finally {
											if (a) throw l;
										}
									}
									return i;
								},
							},
						]
					),
					t
				);
			})();
		(p.Target = f.default), (e.default = p), (t.exports = e.default);
	},
	function (t, e, n) {
		t.exports = { default: n(90), __esModule: !0 };
	},
	function (t, e, n) {
		n(43), n(25), (t.exports = n(91));
	},
	function (t, e, n) {
		var o = n(11),
			i = n(39);
		t.exports = n(3).getIterator = function (t) {
			var e = i(t);
			if ('function' != typeof e) throw TypeError(t + ' is not iterable!');
			return o(e.call(t));
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = (function () {
				function t(e) {
					(0, r.default)(this, t),
						(this.targetEl = e.targetEl),
						(this.toggles = []);
				}
				return (
					(0, a.default)(t, [
						{
							key: 'addToggle',
							value: function (t) {
								this.toggles.push(t);
							},
						},
						{
							key: 'removeToggle',
							value: function (t) {
								var e = this.toggles.indexOf(t);
								(this.toggles = this.toggles
									.slice(0, e)
									.concat(this.toggles.slice(e + 1))),
									0 === this.toggles.length && this.open();
							},
						},
						{
							key: 'open',
							value: function () {
								this.targetEl.setAttribute('aria-hidden', 'false'),
									this.targetEl.classList.add('o-toggle--active'),
									this.toggles.forEach(function (t) {
										t.open();
									});
							},
						},
						{
							key: 'close',
							value: function () {
								this.targetEl.setAttribute('aria-hidden', 'true'),
									this.targetEl.classList.remove('o-toggle--active'),
									this.toggles.forEach(function (t) {
										t.close();
									});
							},
						},
						{
							key: 'toggle',
							value: function () {
								this.isOpen() ? this.close() : this.open();
							},
						},
						{
							key: 'isOpen',
							value: function () {
								return this.targetEl.classList.contains('o-toggle--active');
							},
						},
					]),
					t
				);
			})();
		(e.default = l), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			var n = void 0;
			t.addEventListener('mouseenter', function () {
				clearTimeout(n),
					i(e) ||
						(n = setTimeout(function () {
							h.length ? (s(h[0]), r(e, !1)) : r(e, !0);
						}, c));
			}),
				t.addEventListener('mouseleave', function () {
					clearTimeout(n),
						(n = setTimeout(function () {
							return i(e) && s(e);
						}, d));
				});
		}
		function i(t) {
			return -1 !== h.indexOf(t);
		}
		function r(t, e) {
			e && t.classList.add('o-header__mega--animation'),
				t.setAttribute('aria-hidden', 'false'),
				t.setAttribute('aria-expanded', 'true'),
				t.dispatchEvent(
					new CustomEvent('oHeader.MegaMenuShow', { bubbles: !0 })
				),
				h.push(t);
		}
		function s(t) {
			t.classList.remove('o-header__mega--animation'),
				t.setAttribute('aria-hidden', 'true'),
				t.setAttribute('aria-expanded', 'false'),
				t.dispatchEvent(
					new CustomEvent('oHeader.MegaMenuHide', { bubbles: !0 })
				),
				h.splice(h.indexOf(t), 1);
		}
		function a(t) {
			var e = (0, u.default)(t.querySelectorAll('[data-o-header-mega]')),
				n = e.map(function (t) {
					return t.parentNode;
				});
			e.forEach(function (t) {
				t.setAttribute('aria-hidden', 'true'),
					t.setAttribute('aria-expanded', 'false');
			}),
				n.forEach(function (t, n) {
					return o(t, e[n]);
				});
		}
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.hide = e.show = e.init = void 0);
		var l = n(9),
			u = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(l),
			c = 300,
			d = 400,
			h = [];
		(e.init = a),
			(e.show = r),
			(e.hide = s),
			(e.default = { init: a, show: r, hide: s });
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i(t, e, n) {
			var o = void 0,
				i = function (t) {
					27 === t.keyCode && e();
				},
				r = function (n) {
					t.contains(n.target) || e();
				},
				s = function () {
					clearTimeout(o);
				},
				a = function () {
					window.innerWidth >= t.offsetWidth && (o = setTimeout(e, p));
				},
				l = function (e) {
					var n = e.relatedTarget || e.target;
					t.contains(n) || t.focus();
				},
				u = function (t) {
					if (9 === t.keyCode) {
						var e = n[0],
							o = n[n.length - 1];
						t.shiftKey || t.target !== o
							? t.shiftKey && t.target === e && (o.focus(), t.preventDefault())
							: (e.focus(), t.preventDefault());
					}
				},
				c = function () {
					clearTimeout(o),
						t.removeEventListener('mouseenter', s),
						t.removeEventListener('mouseleave', a),
						document.removeEventListener('click', r),
						document.removeEventListener('touchstart', r),
						document.removeEventListener('keydown', i),
						document.removeEventListener('focusin', l),
						document.removeEventListener('focusout', l),
						t.removeEventListener('keydown', u);
				};
			return {
				addEvents: function () {
					t.addEventListener('mouseenter', s),
						t.addEventListener('mouseleave', a),
						document.addEventListener('click', r),
						document.addEventListener('touchstart', r),
						document.addEventListener('keydown', i),
						document.addEventListener('focusin', l),
						document.addEventListener('focusout', l),
						t.addEventListener('keydown', u);
				},
				removeEvents: c,
				handleMouseleave: a,
			};
		}
		function r(t, e) {
			function n(n, o) {
				'close' === n
					? (a(t, !1, e), r.removeEvents(), s.focus())
					: (a(t, !0, e),
					  setTimeout(r.addEvents, f),
					  (s = o.currentTarget),
					  setTimeout(function () {
							var e = t.querySelector('a, button, input, select');
							e ? e.focus() : t.focus();
					  })),
					t.classList.toggle('o-header__drawer--closing', 'close' === n),
					t.classList.toggle('o-header__drawer--opening', 'open' === n);
			}
			var o = (0, c.default)(
					document.body.querySelectorAll('[aria-controls="' + t.id + '"]')
				),
				r = void 0,
				s = void 0;
			o.forEach(function (o) {
				var s = new h.default(o, { target: t, callback: n });
				r || (r = i(t, s.toggle, e));
			}),
				(t.tabIndex = -1);
		}
		function s(t) {
			var e = t.querySelectorAll('[id^="o-header-drawer-child-"]');
			(0, c.default)(e).forEach(function (e) {
				var n = t.querySelector('[aria-controls="' + e.id + '"]');
				e.setAttribute('aria-hidden', 'true'),
					new h.default(n, {
						target: e,
						callback: function (t) {
							n.textContent = n.textContent.replace(
								/fewer|more/,
								'open' === t ? 'fewer' : 'more'
							);
						},
					});
			});
		}
		function a(t, e, n) {
			e
				? n.forEach(function (t) {
						t.removeAttribute('tabindex');
				  })
				: n.forEach(function (t) {
						t.setAttribute('tabindex', '-1');
				  });
		}
		function l() {
			var t = document.body.querySelector('[data-o-header-drawer]');
			if (t) {
				var e = (0, c.default)(t.querySelectorAll('a, button, input, select'));
				a(t, !1, e),
					s(t),
					r(t, e),
					setTimeout(function () {
						t.removeAttribute('data-o-header-drawer--no-js'),
							t.setAttribute('data-o-header-drawer--js', 'true');
					});
			}
		}
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.handleCloseEvents = e.init = void 0);
		var u = n(9),
			c = o(u),
			d = n(29),
			h = o(d),
			f = 300,
			p = 1e3;
		(e.default = { init: l, handleCloseEvents: i }),
			(e.init = l),
			(e.handleCloseEvents = i);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			function e(t) {
				return t.className.match(/left|right/).pop();
			}
			function n() {
				(u = l.scrollWidth),
					s.forEach(function (t) {
						if ('left' === e(t)) t.disabled = 0 === l.scrollLeft;
						else {
							var n = u - c - l.scrollLeft;
							t.disabled = n <= 1;
						}
					});
			}
			function o(t) {
				var o = 100;
				if ('left' === e(t.currentTarget))
					o = -1 * (l.scrollLeft > o ? o : l.scrollLeft);
				else {
					var i = u - c - l.scrollLeft;
					o = i > o ? o : i;
				}
				(l.scrollLeft = l.scrollLeft + o), n();
			}
			var i = t.querySelector('[data-o-header-subnav]');
			if (null !== i) {
				var s = (0, r.default)(i.getElementsByTagName('button')),
					l = i.querySelector('[data-o-header-subnav-wrapper]'),
					u = void 0,
					c = l.clientWidth;
				l.addEventListener('scroll', a.throttle(n, 100)),
					window.addEventListener('oViewport.resize', n),
					s.forEach(function (t) {
						t.onclick = o;
					}),
					(function () {
						var t = l.querySelector('[aria-current]');
						if (t) {
							var e = t.getBoundingClientRect().right;
							if (e > c) {
								var o = e - c;
								(o = o > c / 2 ? e : c / 2), l.scrollTo(o, 0);
							}
						}
						n();
					})();
			}
		}
		Object.defineProperty(e, '__esModule', { value: !0 }), (e.init = void 0);
		var i = n(9),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i),
			s = n(46),
			a = (function (t) {
				if (t && t.__esModule) return t;
				var e = {};
				if (null != t)
					for (var n in t)
						Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				return (e.default = t), e;
			})(s);
		(e.init = o), (e.default = { init: o });
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			function e() {
				var e = window.pageYOffset || window.scrollY,
					n = e > a;
				if (
					(t.classList.toggle('o-header--sticky-active', n),
					n !== c &&
						((c = n),
						t.dispatchEvent(
							new CustomEvent('oHeader.Sticky', {
								bubbles: !0,
								detail: { isActive: n },
							})
						)),
					Math.abs(e - l) > 20)
				) {
					var o = l < e;
					t.classList.toggle('o-header--sticky-scroll-down', n && o),
						t.classList.toggle('o-header--sticky-scroll-up', n && !o);
				}
				l = e;
			}
			function n() {
				(a = window.innerHeight / 2),
					(u = window.requestAnimationFrame(function () {
						e(), n();
					}));
			}
			function o() {
				u && window.cancelAnimationFrame(u);
			}
			function r() {
				window.removeEventListener('scroll', r),
					window.addEventListener('scroll', d),
					n();
			}
			function s() {
				o(),
					window.removeEventListener('scroll', d),
					window.addEventListener('scroll', r);
			}
			if (t.hasAttribute('data-o-header--sticky')) {
				var a = void 0,
					l = void 0,
					u = void 0,
					c = void 0,
					d = (0, i.debounce)(s, 300);
				window.addEventListener('scroll', r), e();
			}
		}
		Object.defineProperty(e, '__esModule', { value: !0 }), (e.init = void 0);
		var i = n(46);
		(e.init = o), (e.default = { init: o });
	},
	function (t, e, n) {
		'use strict';
		Object.defineProperty(e, '__esModule', { value: !0 });
		var o = n(98),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function t() {
				i.default.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', r),
			(e.default = i.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = n(29),
			u = o(l),
			c = n(99),
			d = o(c),
			h = ['default', 'XS', 'S'],
			f = (function () {
				function t(e) {
					var n = this;
					(0, r.default)(this, t),
						e
							? 'string' == typeof e && (e = document.querySelector(e))
							: (e = document.querySelector('[data-o-component="o-footer"]')),
						(this.footerEl = e),
						(0, d.default)(function (e) {
							var o = t.shouldCollapse(e);
							return o && !n._toggles
								? n.setup()
								: !o && n._toggles
								? n.destroy()
								: void 0;
						}),
						this.footerEl.removeAttribute('data-o-footer--no-js'),
						this.footerEl.setAttribute('data-o-footer--js', '');
				}
				return (
					(0, a.default)(
						t,
						[
							{
								key: 'setup',
								value: function () {
									var t = this;
									this._toggles = [];
									var e = this.footerEl.querySelectorAll('[aria-controls]');
									Array.prototype.forEach.call(e, function (e) {
										var n = document.getElementById(
											e.getAttribute('aria-controls')
										);
										e.setAttribute('role', 'button'),
											e.setAttribute('tabindex', '0'),
											t._toggles.push(new u.default(e, { target: n }));
									});
								},
							},
							{
								key: 'destroy',
								value: function () {
									this._toggles.forEach(function (t) {
										return t.destroy();
									}),
										(this._toggles = null);
								},
							},
						],
						[
							{
								key: 'shouldCollapse',
								value: function (t) {
									return -1 !== h.indexOf(t);
								},
							},
							{
								key: 'init',
								value: function (e) {
									e
										? 'string' == typeof e && (e = document.querySelector(e))
										: (e = document.body);
									var n = e.querySelector('[data-o-component="o-footer"]');
									if (n) return new t(n);
								},
							},
							{
								key: 'collapsibleBreakpoints',
								get: function () {
									return h;
								},
							},
						]
					),
					t
				);
			})();
		(e.default = f), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i(t) {
			l.default.listenTo('resize');
			var e = s.default.getCurrentLayout();
			document.body.addEventListener('oViewport.resize', function () {
				var n = s.default.getCurrentLayout();
				n !== e && (t(n), (e = n));
			}),
				t(e);
		}
		Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = i);
		var r = n(31),
			s = o(r),
			a = n(21),
			l = o(a);
		t.exports = e.default;
	},
	function (t, e, n) {
		'use strict';
		function o(t, e, n) {
			(n = n || document.body),
				h && console.log('o-viewport', t, e),
				n.dispatchEvent(
					new CustomEvent('oViewport.' + t, { detail: e, bubbles: !0 })
				);
		}
		function i(t) {
			return t
				? document.documentElement.clientHeight
				: Math.max(
						document.documentElement.clientHeight,
						window.innerHeight || 0
				  );
		}
		function r(t) {
			return t
				? document.documentElement.clientWidth
				: Math.max(
						document.documentElement.clientWidth,
						window.innerWidth || 0
				  );
		}
		function s(e) {
			return { height: t.exports.getHeight(e), width: t.exports.getWidth(e) };
		}
		function a() {
			var t = document.documentElement,
				e = document.body,
				n = 'CSS1Compat' === (document.compatMode || ''),
				o = n ? t.scrollLeft : e.scrollLeft,
				i = n ? t.scrollTop : e.scrollTop;
			return {
				height: e.scrollHeight,
				width: e.scrollWidth,
				left: window.pageXOffset || window.scrollX || o,
				top: window.pageYOffset || window.scrollY || i,
			};
		}
		function l() {
			var t =
				window.screen.orientation ||
				window.screen.mozOrientation ||
				window.screen.msOrientation ||
				void 0;
			return t
				? 'string' == typeof t
					? t.split('-')[0]
					: t.type.split('-')[0]
				: window.matchMedia
				? window.matchMedia('(orientation: portrait)').matches
					? 'portrait'
					: 'landscape'
				: i() >= r()
				? 'portrait'
				: 'landscape';
		}
		function u() {
			var t = void 0,
				e = void 0;
			return (
				void 0 !== document.hidden
					? ((t = 'hidden'), (e = 'visibilitychange'))
					: void 0 !== document.mozHidden
					? ((t = 'mozHidden'), (e = 'mozvisibilitychange'))
					: void 0 !== document.msHidden
					? ((t = 'msHidden'), (e = 'msvisibilitychange'))
					: void 0 !== document.webkitHidden &&
					  ((t = 'webkitHidden'), (e = 'webkitvisibilitychange')),
				{ hiddenName: t, eventType: e }
			);
		}
		function c() {
			var t = u().hiddenName;
			return document[t];
		}
		var d = n(46),
			h = void 0;
		t.exports = {
			debug: function () {
				h = !0;
			},
			broadcast: o,
			getWidth: r,
			getHeight: i,
			getSize: s,
			getScrollPosition: a,
			getVisibility: c,
			getOrientation: l,
			detectVisiblityAPI: u,
			debounce: d.debounce,
			throttle: d.throttle,
		};
	},
	function (t, e, n) {
		'use strict';
		Object.defineProperty(e, '__esModule', { value: !0 });
		var o = n(102),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function t() {
				i.default.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', r),
			(e.default = i.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(7),
			r = o(i),
			s = n(12),
			a = o(s),
			l = n(1),
			u = o(l),
			c = n(2),
			d = o(c),
			h = n(113),
			f = o(h),
			p = (function () {
				function t(e, n) {
					(0, u.default)(this, t),
						(this.typographyEl = e),
						(this.opts = n || t.getOptions(e)),
						void 0 === this.opts.loadOnInit && (this.opts.loadOnInit = !0),
						void 0 === this.opts.rejectOnFontLoadFailure &&
							(this.opts.rejectOnFontLoadFailure = !1),
						(this.opts = t.checkOptions(this.opts)),
						(this.hasRun = !1),
						(this.fontConfigs = [
							{
								family: 'FinancierDisplayWeb',
								weight: 'normal',
								label: 'display',
							},
							{ family: 'MetricWeb', weight: 'normal', label: 'sans' },
							{ family: 'MetricWeb', weight: 600, label: 'sansBold' },
							{
								family: 'FinancierDisplayWeb',
								weight: 700,
								label: 'displayBold',
							},
						]),
						this.opts.loadOnInit && this.loadFonts();
				}
				return (
					(0, d.default)(
						t,
						[
							{
								key: 'checkFontsLoaded',
								value: function () {
									return new RegExp(
										'(^|s)' + this.opts.fontLoadedCookieName + '=1(;|$)'
									).test(document.cookie);
								},
							},
							{
								key: 'setCookie',
								value: function () {
									var t = /.ft.com$/.test(location.hostname)
										? '.ft.com'
										: location.hostname;
									document.cookie =
										this.opts.fontLoadedCookieName +
										'=1;domain=' +
										t +
										';path=/;max-age=604800';
								},
							},
							{
								key: 'removeLoadingClasses',
								value: function () {
									var t = this;
									this.fontConfigs.forEach(function (e) {
										t.typographyEl.classList.remove(
											'' + t.opts.fontLoadingPrefix + e.label
										);
									});
								},
							},
							{
								key: 'loadFonts',
								value: function () {
									var t = this;
									if (this.hasRun) return a.default.resolve();
									if (this.checkFontsLoaded())
										return (
											this.removeLoadingClasses(),
											this.setCookie(),
											(this.hasRun = !0),
											a.default.resolve()
										);
									var e = this.fontConfigs.map(function (e) {
										return new f.default(e.family, { weight: e.weight })
											.load()
											.then(function () {
												t.typographyEl.classList.remove(
													'' + t.opts.fontLoadingPrefix + e.label
												);
											});
									});
									return a.default
										.all(e)
										.then(function () {
											t.setCookie(), (t.hasRun = !0);
										})
										.catch(function (e) {
											if (t.opts.rejectOnFontLoadFailure) throw e;
										});
								},
							},
						],
						[
							{
								key: 'getOptions',
								value: function (t) {
									var e = Object(t.dataset);
									return (0, r.default)(e).reduce(function (t, n) {
										if ('oComponent' === n) return t;
										var o = n.replace(
											/^oTypography(\w)(\w+)$/,
											function (t, e, n) {
												return e.toLowerCase() + n;
											}
										);
										try {
											t[o] = JSON.parse(e[n].replace(/\'/g, '"'));
										} catch (i) {
											t[o] = e[n];
										}
										return t;
									}, {});
								},
							},
							{
								key: 'checkOptions',
								value: function (t) {
									return (
										t.fontLoadingPrefix ||
											(t.fontLoadingPrefix = 'o-typography--loading-'),
										t.fontLoadedCookieName ||
											(t.fontLoadedCookieName =
												t.fontLoadedStorageName || 'o-typography-fonts-loaded'),
										t
									);
								},
							},
							{
								key: 'init',
								value: function (e, n) {
									if (
										(e || (e = document.documentElement),
										e instanceof HTMLElement || (e = document.querySelector(e)),
										e instanceof HTMLElement &&
											e.matches('[data-o-component=o-typography]'))
									)
										return new t(e, n);
								},
							},
						]
					),
					t
				);
			})();
		(e.default = p), (t.exports = e.default);
	},
	function (t, e, n) {
		n(42), n(25), n(43), n(104), (t.exports = n(3).Promise);
	},
	function (t, e, n) {
		'use strict';
		var o,
			i = n(0),
			r = n(35),
			s = n(6),
			a = n(10),
			l = n(40),
			u = n(8),
			c = n(14),
			d = n(11),
			h = n(33),
			f = n(45),
			p = n(28),
			v = n(105).set,
			g = n(106),
			m = n(5)('species'),
			y = n(107),
			E = n(108),
			b = s.process,
			w = 'process' == l(b),
			_ = s.Promise,
			k = function () {},
			C = function (t) {
				var e,
					n = new _(k);
				return (
					t &&
						(n.constructor = function (t) {
							t(k, k);
						}),
					(e = _.resolve(n)).catch(k),
					e === n
				);
			},
			x = (function () {
				function t(e) {
					var n = new _(e);
					return v(n, t.prototype), n;
				}
				var e = !1;
				try {
					if (
						((e = _ && _.resolve && C()),
						v(t, _),
						(t.prototype = i.create(_.prototype, {
							constructor: { value: t },
						})),
						t.resolve(5).then(function () {}) instanceof t || (e = !1),
						e && n(13))
					) {
						var o = !1;
						_.resolve(
							i.setDesc({}, 'then', {
								get: function () {
									o = !0;
								},
							})
						),
							(e = o);
					}
				} catch (t) {
					e = !1;
				}
				return e;
			})(),
			L = function (t, e) {
				return !(!r || t !== _ || e !== o) || g(t, e);
			},
			M = function (t) {
				var e = d(t)[m];
				return void 0 != e ? e : t;
			},
			A = function (t) {
				var e;
				return !(!c(t) || 'function' != typeof (e = t.then)) && e;
			},
			T = function (t) {
				var e, n;
				(this.promise = new t(function (t, o) {
					if (void 0 !== e || void 0 !== n)
						throw TypeError('Bad Promise constructor');
					(e = t), (n = o);
				})),
					(this.resolve = h(e)),
					(this.reject = h(n));
			},
			O = function (t) {
				try {
					t();
				} catch (t) {
					return { error: t };
				}
			},
			S = function (t, e) {
				if (!t.n) {
					t.n = !0;
					var n = t.c;
					E(function () {
						for (var o = t.v, i = 1 == t.s, r = 0; n.length > r; )
							!(function (e) {
								var n,
									r,
									s = i ? e.ok : e.fail,
									a = e.resolve,
									l = e.reject;
								try {
									s
										? (i || (t.h = !0),
										  (n = !0 === s ? o : s(o)),
										  n === e.promise
												? l(TypeError('Promise-chain cycle'))
												: (r = A(n))
												? r.call(n, a, l)
												: a(n))
										: l(o);
								} catch (t) {
									l(t);
								}
							})(n[r++]);
						(n.length = 0),
							(t.n = !1),
							e &&
								setTimeout(function () {
									var e,
										n,
										i = t.p;
									P(i) &&
										(w
											? b.emit('unhandledRejection', o, i)
											: (e = s.onunhandledrejection)
											? e({ promise: i, reason: o })
											: (n = s.console) &&
											  n.error &&
											  n.error('Unhandled promise rejection', o)),
										(t.a = void 0);
								}, 1);
					});
				}
			},
			P = function (t) {
				var e,
					n = t._d,
					o = n.a || n.c,
					i = 0;
				if (n.h) return !1;
				for (; o.length > i; )
					if (((e = o[i++]), e.fail || !P(e.promise))) return !1;
				return !0;
			},
			D = function (t) {
				var e = this;
				e.d ||
					((e.d = !0),
					(e = e.r || e),
					(e.v = t),
					(e.s = 2),
					(e.a = e.c.slice()),
					S(e, !0));
			},
			I = function (t) {
				var e,
					n = this;
				if (!n.d) {
					(n.d = !0), (n = n.r || n);
					try {
						if (n.p === t) throw TypeError("Promise can't be resolved itself");
						(e = A(t))
							? E(function () {
									var o = { r: n, d: !1 };
									try {
										e.call(t, a(I, o, 1), a(D, o, 1));
									} catch (t) {
										D.call(o, t);
									}
							  })
							: ((n.v = t), (n.s = 1), S(n, !1));
					} catch (t) {
						D.call({ r: n, d: !1 }, t);
					}
				}
			};
		x ||
			((_ = function (t) {
				h(t);
				var e = (this._d = {
					p: f(this, _, 'Promise'),
					c: [],
					a: void 0,
					s: 0,
					d: !1,
					v: void 0,
					h: !1,
					n: !1,
				});
				try {
					t(a(I, e, 1), a(D, e, 1));
				} catch (t) {
					D.call(e, t);
				}
			}),
			n(44)(_.prototype, {
				then: function (t, e) {
					var n = new T(y(this, _)),
						o = n.promise,
						i = this._d;
					return (
						(n.ok = 'function' != typeof t || t),
						(n.fail = 'function' == typeof e && e),
						i.c.push(n),
						i.a && i.a.push(n),
						i.s && S(i, !1),
						o
					);
				},
				catch: function (t) {
					return this.then(void 0, t);
				},
			})),
			u(u.G + u.W + u.F * !x, { Promise: _ }),
			n(19)(_, 'Promise'),
			n(59)('Promise'),
			(o = n(3).Promise),
			u(u.S + u.F * !x, 'Promise', {
				reject: function (t) {
					var e = new T(this);
					return (0, e.reject)(t), e.promise;
				},
			}),
			u(u.S + u.F * (!x || C(!0)), 'Promise', {
				resolve: function (t) {
					if (t instanceof _ && L(t.constructor, this)) return t;
					var e = new T(this);
					return (0, e.resolve)(t), e.promise;
				},
			}),
			u(
				u.S +
					u.F *
						!(
							x &&
							n(56)(function (t) {
								_.all(t).catch(function () {});
							})
						),
				'Promise',
				{
					all: function (t) {
						var e = M(this),
							n = new T(e),
							o = n.resolve,
							r = n.reject,
							s = [],
							a = O(function () {
								p(t, !1, s.push, s);
								var n = s.length,
									a = Array(n);
								n
									? i.each.call(s, function (t, i) {
											var s = !1;
											e.resolve(t).then(function (t) {
												s || ((s = !0), (a[i] = t), --n || o(a));
											}, r);
									  })
									: o(a);
							});
						return a && r(a.error), n.promise;
					},
					race: function (t) {
						var e = M(this),
							n = new T(e),
							o = n.reject,
							i = O(function () {
								p(t, !1, function (t) {
									e.resolve(t).then(n.resolve, o);
								});
							});
						return i && o(i.error), n.promise;
					},
				}
			);
	},
	function (t, e, n) {
		var o = n(0).getDesc,
			i = n(14),
			r = n(11),
			s = function (t, e) {
				if ((r(t), !i(e) && null !== e))
					throw TypeError(e + ": can't set as prototype!");
			};
		t.exports = {
			set:
				Object.setPrototypeOf ||
				('__proto__' in {}
					? (function (t, e, i) {
							try {
								(i = n(10)(
									Function.call,
									o(Object.prototype, '__proto__').set,
									2
								)),
									i(t, []),
									(e = !(t instanceof Array));
							} catch (t) {
								e = !0;
							}
							return function (t, n) {
								return s(t, n), e ? (t.__proto__ = n) : i(t, n), t;
							};
					  })({}, !1)
					: void 0),
			check: s,
		};
	},
	function (t, e) {
		t.exports =
			Object.is ||
			function (t, e) {
				return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
			};
	},
	function (t, e, n) {
		var o = n(11),
			i = n(33),
			r = n(5)('species');
		t.exports = function (t, e) {
			var n,
				s = o(t).constructor;
			return void 0 === s || void 0 == (n = o(s)[r]) ? e : i(n);
		};
	},
	function (t, e, n) {
		var o,
			i,
			r,
			s = n(6),
			a = n(109).set,
			l = s.MutationObserver || s.WebKitMutationObserver,
			u = s.process,
			c = s.Promise,
			d = 'process' == n(20)(u),
			h = function () {
				var t, e, n;
				for (d && (t = u.domain) && ((u.domain = null), t.exit()); o; )
					(e = o.domain),
						(n = o.fn),
						e && e.enter(),
						n(),
						e && e.exit(),
						(o = o.next);
				(i = void 0), t && t.enter();
			};
		if (d)
			r = function () {
				u.nextTick(h);
			};
		else if (l) {
			var f = 1,
				p = document.createTextNode('');
			new l(h).observe(p, { characterData: !0 }),
				(r = function () {
					p.data = f = -f;
				});
		} else
			r =
				c && c.resolve
					? function () {
							c.resolve().then(h);
					  }
					: function () {
							a.call(s, h);
					  };
		t.exports = function (t) {
			var e = { fn: t, next: void 0, domain: d && u.domain };
			i && (i.next = e), o || ((o = e), r()), (i = e);
		};
	},
	function (t, e, n) {
		var o,
			i,
			r,
			s = n(10),
			a = n(110),
			l = n(111),
			u = n(112),
			c = n(6),
			d = c.process,
			h = c.setImmediate,
			f = c.clearImmediate,
			p = c.MessageChannel,
			v = 0,
			g = {},
			m = function () {
				var t = +this;
				if (g.hasOwnProperty(t)) {
					var e = g[t];
					delete g[t], e();
				}
			},
			y = function (t) {
				m.call(t.data);
			};
		(h && f) ||
			((h = function (t) {
				for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
				return (
					(g[++v] = function () {
						a('function' == typeof t ? t : Function(t), e);
					}),
					o(v),
					v
				);
			}),
			(f = function (t) {
				delete g[t];
			}),
			'process' == n(20)(d)
				? (o = function (t) {
						d.nextTick(s(m, t, 1));
				  })
				: p
				? ((i = new p()),
				  (r = i.port2),
				  (i.port1.onmessage = y),
				  (o = s(r.postMessage, r, 1)))
				: c.addEventListener &&
				  'function' == typeof postMessage &&
				  !c.importScripts
				? ((o = function (t) {
						c.postMessage(t + '', '*');
				  }),
				  c.addEventListener('message', y, !1))
				: (o =
						'onreadystatechange' in u('script')
							? function (t) {
									l.appendChild(u('script')).onreadystatechange = function () {
										l.removeChild(this), m.call(t);
									};
							  }
							: function (t) {
									setTimeout(s(m, t, 1), 0);
							  })),
			(t.exports = { set: h, clear: f });
	},
	function (t, e) {
		t.exports = function (t, e, n) {
			var o = void 0 === n;
			switch (e.length) {
				case 0:
					return o ? t() : t.call(n);
				case 1:
					return o ? t(e[0]) : t.call(n, e[0]);
				case 2:
					return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
				case 3:
					return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
				case 4:
					return o
						? t(e[0], e[1], e[2], e[3])
						: t.call(n, e[0], e[1], e[2], e[3]);
			}
			return t.apply(n, e);
		};
	},
	function (t, e, n) {
		t.exports = n(6).document && document.documentElement;
	},
	function (t, e, n) {
		var o = n(14),
			i = n(6).document,
			r = o(i) && o(i.createElement);
		t.exports = function (t) {
			return r ? i.createElement(t) : {};
		};
	},
	function (t, e, n) {
		'use strict';
		(function (t) {
			function e(t) {
				return t && t.__esModule ? t : { default: t };
			}
			var o = n(47),
				i = e(o),
				r = n(12),
				s = e(r);
			!(function () {
				function e(t, e) {
					document.addEventListener
						? t.addEventListener('scroll', e, !1)
						: t.attachEvent('scroll', e);
				}
				function n(t) {
					document.body
						? t()
						: document.addEventListener
						? document.addEventListener('DOMContentLoaded', function e() {
								document.removeEventListener('DOMContentLoaded', e), t();
						  })
						: document.attachEvent('onreadystatechange', function e() {
								('interactive' != document.readyState &&
									'complete' != document.readyState) ||
									(document.detachEvent('onreadystatechange', e), t());
						  });
				}
				function o(t) {
					(this.a = document.createElement('div')),
						this.a.setAttribute('aria-hidden', 'true'),
						this.a.appendChild(document.createTextNode(t)),
						(this.b = document.createElement('span')),
						(this.c = document.createElement('span')),
						(this.h = document.createElement('span')),
						(this.f = document.createElement('span')),
						(this.g = -1),
						(this.b.style.cssText =
							'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
						(this.c.style.cssText =
							'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
						(this.f.style.cssText =
							'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;'),
						(this.h.style.cssText =
							'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;'),
						this.b.appendChild(this.h),
						this.c.appendChild(this.f),
						this.a.appendChild(this.b),
						this.a.appendChild(this.c);
				}
				function r(t, e) {
					t.a.style.cssText =
						'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' +
						e +
						';';
				}
				function a(t) {
					var e = t.a.offsetWidth,
						n = e + 100;
					return (
						(t.f.style.width = n + 'px'),
						(t.c.scrollLeft = n),
						(t.b.scrollLeft = t.b.scrollWidth + 100),
						t.g !== e && ((t.g = e), !0)
					);
				}
				function l(t, n) {
					function o() {
						var t = i;
						a(t) && t.a.parentNode && n(t.g);
					}
					var i = t;
					e(t.b, o), e(t.c, o), a(t);
				}
				function u(t, e) {
					var n = e || {};
					(this.family = t),
						(this.style = n.style || 'normal'),
						(this.weight = n.weight || 'normal'),
						(this.stretch = n.stretch || 'normal');
				}
				function c() {
					if (null === v)
						if (d() && /Apple/.test(window.navigator.vendor)) {
							var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
								window.navigator.userAgent
							);
							v = !!t && 603 > parseInt(t[1], 10);
						} else v = !1;
					return v;
				}
				function d() {
					return null === m && (m = !!document.fonts), m;
				}
				function h() {
					if (null === g) {
						var t = document.createElement('div');
						try {
							t.style.font = 'condensed 100px sans-serif';
						} catch (t) {}
						g = '' !== t.style.font;
					}
					return g;
				}
				function f(t, e) {
					return [t.style, t.weight, h() ? t.stretch : '', '100px', e].join(
						' '
					);
				}
				var p = null,
					v = null,
					g = null,
					m = null;
				(u.prototype.load = function (t, e) {
					var i = this,
						a = t || 'BESbswy',
						u = 0,
						h = e || 3e3,
						v = new Date().getTime();
					return new s.default(function (t, e) {
						if (d() && !c()) {
							var g = new s.default(function (t, e) {
									function n() {
										new Date().getTime() - v >= h
											? e(Error(h + 'ms timeout exceeded'))
											: document.fonts
													.load(f(i, '"' + i.family + '"'), a)
													.then(function (e) {
														1 <= e.length ? t() : setTimeout(n, 25);
													}, e);
									}
									n();
								}),
								m = new s.default(function (t, e) {
									u = setTimeout(function () {
										e(Error(h + 'ms timeout exceeded'));
									}, h);
								});
							s.default.race([m, g]).then(function () {
								clearTimeout(u), t(i);
							}, e);
						} else
							n(function () {
								function n() {
									var e;
									(e =
										(-1 != m && -1 != y) ||
										(-1 != m && -1 != E) ||
										(-1 != y && -1 != E)) &&
										((e = m != y && m != E && y != E) ||
											(null === p &&
												((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
													window.navigator.userAgent
												)),
												(p =
													!!e &&
													(536 > parseInt(e[1], 10) ||
														(536 === parseInt(e[1], 10) &&
															11 >= parseInt(e[2], 10))))),
											(e =
												p &&
												((m == b && y == b && E == b) ||
													(m == w && y == w && E == w) ||
													(m == _ && y == _ && E == _)))),
										(e = !e)),
										e &&
											(k.parentNode && k.parentNode.removeChild(k),
											clearTimeout(u),
											t(i));
								}
								function s() {
									if (new Date().getTime() - v >= h)
										k.parentNode && k.parentNode.removeChild(k),
											e(Error(h + 'ms timeout exceeded'));
									else {
										var t = document.hidden;
										(!0 !== t && void 0 !== t) ||
											((m = c.a.offsetWidth),
											(y = d.a.offsetWidth),
											(E = g.a.offsetWidth),
											n()),
											(u = setTimeout(s, 50));
									}
								}
								var c = new o(a),
									d = new o(a),
									g = new o(a),
									m = -1,
									y = -1,
									E = -1,
									b = -1,
									w = -1,
									_ = -1,
									k = document.createElement('div');
								(k.dir = 'ltr'),
									r(c, f(i, 'sans-serif')),
									r(d, f(i, 'serif')),
									r(g, f(i, 'monospace')),
									k.appendChild(c.a),
									k.appendChild(d.a),
									k.appendChild(g.a),
									document.body.appendChild(k),
									(b = c.a.offsetWidth),
									(w = d.a.offsetWidth),
									(_ = g.a.offsetWidth),
									s(),
									l(c, function (t) {
										(m = t), n();
									}),
									r(c, f(i, '"' + i.family + '",sans-serif')),
									l(d, function (t) {
										(y = t), n();
									}),
									r(d, f(i, '"' + i.family + '",serif')),
									l(g, function (t) {
										(E = t), n();
									}),
									r(g, f(i, '"' + i.family + '",monospace'));
							});
					});
				}),
					'object' === (0, i.default)(t)
						? (t.exports = u)
						: ((window.FontFaceObserver = u),
						  (window.FontFaceObserver.prototype.load = u.prototype.load));
			})();
		}.call(e, n(114)(t)));
	},
	function (t, e) {
		t.exports = function (t) {
			return (
				t.webpackPolyfill ||
					((t.deprecate = function () {}),
					(t.paths = []),
					t.children || (t.children = []),
					Object.defineProperty(t, 'loaded', {
						enumerable: !0,
						get: function () {
							return t.l;
						},
					}),
					Object.defineProperty(t, 'id', {
						enumerable: !0,
						get: function () {
							return t.i;
						},
					}),
					(t.webpackPolyfill = 1)),
				t
			);
		};
	},
	function (t, e, n) {
		t.exports = { default: n(116), __esModule: !0 };
	},
	function (t, e, n) {
		n(117), n(42), (t.exports = n(3).Symbol);
	},
	function (t, e, n) {
		'use strict';
		var o = n(0),
			i = n(6),
			r = n(26),
			s = n(13),
			a = n(8),
			l = n(36),
			u = n(16),
			c = n(52),
			d = n(19),
			h = n(38),
			f = n(5),
			p = n(118),
			v = n(119),
			g = n(120),
			m = n(121),
			y = n(11),
			E = n(27),
			b = n(37),
			w = o.getDesc,
			_ = o.setDesc,
			k = o.create,
			C = v.get,
			x = i.Symbol,
			L = i.JSON,
			M = L && L.stringify,
			A = !1,
			T = f('_hidden'),
			O = o.isEnum,
			S = c('symbol-registry'),
			P = c('symbols'),
			D = 'function' == typeof x,
			I = Object.prototype,
			j =
				s &&
				u(function () {
					return (
						7 !=
						k(
							_({}, 'a', {
								get: function () {
									return _(this, 'a', { value: 7 }).a;
								},
							})
						).a
					);
				})
					? function (t, e, n) {
							var o = w(I, e);
							o && delete I[e], _(t, e, n), o && t !== I && _(I, e, o);
					  }
					: _,
			H = function (t) {
				var e = (P[t] = k(x.prototype));
				return (
					(e._k = t),
					s &&
						A &&
						j(I, t, {
							configurable: !0,
							set: function (e) {
								r(this, T) && r(this[T], t) && (this[T][t] = !1),
									j(this, t, b(1, e));
							},
						}),
					e
				);
			},
			N = function (t) {
				return 'symbol' == typeof t;
			},
			R = function (t, e, n) {
				return n && r(P, e)
					? (n.enumerable
							? (r(t, T) && t[T][e] && (t[T][e] = !1),
							  (n = k(n, { enumerable: b(0, !1) })))
							: (r(t, T) || _(t, T, b(1, {})), (t[T][e] = !0)),
					  j(t, e, n))
					: _(t, e, n);
			},
			q = function (t, e) {
				y(t);
				for (var n, o = g((e = E(e))), i = 0, r = o.length; r > i; )
					R(t, (n = o[i++]), e[n]);
				return t;
			},
			B = function (t, e) {
				return void 0 === e ? k(t) : q(k(t), e);
			},
			F = function (t) {
				var e = O.call(this, t);
				return (
					!(e || !r(this, t) || !r(P, t) || (r(this, T) && this[T][t])) || e
				);
			},
			U = function (t, e) {
				var n = w((t = E(t)), e);
				return !n || !r(P, e) || (r(t, T) && t[T][e]) || (n.enumerable = !0), n;
			},
			W = function (t) {
				for (var e, n = C(E(t)), o = [], i = 0; n.length > i; )
					r(P, (e = n[i++])) || e == T || o.push(e);
				return o;
			},
			V = function (t) {
				for (var e, n = C(E(t)), o = [], i = 0; n.length > i; )
					r(P, (e = n[i++])) && o.push(P[e]);
				return o;
			},
			z = function (t) {
				if (void 0 !== t && !N(t)) {
					for (var e, n, o = [t], i = 1, r = arguments; r.length > i; )
						o.push(r[i++]);
					return (
						(e = o[1]),
						'function' == typeof e && (n = e),
						(!n && m(e)) ||
							(e = function (t, e) {
								if ((n && (e = n.call(this, t, e)), !N(e))) return e;
							}),
						(o[1] = e),
						M.apply(L, o)
					);
				}
			},
			J = u(function () {
				var t = x();
				return (
					'[null]' != M([t]) || '{}' != M({ a: t }) || '{}' != M(Object(t))
				);
			});
		D ||
			((x = function () {
				if (N(this)) throw TypeError('Symbol is not a constructor');
				return H(h(arguments.length > 0 ? arguments[0] : void 0));
			}),
			l(x.prototype, 'toString', function () {
				return this._k;
			}),
			(N = function (t) {
				return t instanceof x;
			}),
			(o.create = B),
			(o.isEnum = F),
			(o.getDesc = U),
			(o.setDesc = R),
			(o.setDescs = q),
			(o.getNames = v.get = W),
			(o.getSymbols = V),
			s && !n(35) && l(I, 'propertyIsEnumerable', F, !0));
		var K = {
			for: function (t) {
				return r(S, (t += '')) ? S[t] : (S[t] = x(t));
			},
			keyFor: function (t) {
				return p(S, t);
			},
			useSetter: function () {
				A = !0;
			},
			useSimple: function () {
				A = !1;
			},
		};
		o.each.call(
			'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
				','
			),
			function (t) {
				var e = f(t);
				K[t] = D ? e : H(e);
			}
		),
			(A = !0),
			a(a.G + a.W, { Symbol: x }),
			a(a.S, 'Symbol', K),
			a(a.S + a.F * !D, 'Object', {
				create: B,
				defineProperty: R,
				defineProperties: q,
				getOwnPropertyDescriptor: U,
				getOwnPropertyNames: W,
				getOwnPropertySymbols: V,
			}),
			L && a(a.S + a.F * (!D || J), 'JSON', { stringify: z }),
			d(x, 'Symbol'),
			d(Math, 'Math', !0),
			d(i.JSON, 'JSON', !0);
	},
	function (t, e, n) {
		var o = n(0),
			i = n(27);
		t.exports = function (t, e) {
			for (var n, r = i(t), s = o.getKeys(r), a = s.length, l = 0; a > l; )
				if (r[(n = s[l++])] === e) return n;
		};
	},
	function (t, e, n) {
		var o = n(27),
			i = n(0).getNames,
			r = {}.toString,
			s =
				'object' == typeof window && Object.getOwnPropertyNames
					? Object.getOwnPropertyNames(window)
					: [],
			a = function (t) {
				try {
					return i(t);
				} catch (t) {
					return s.slice();
				}
			};
		t.exports.get = function (t) {
			return s && '[object Window]' == r.call(t) ? a(t) : i(o(t));
		};
	},
	function (t, e, n) {
		var o = n(0);
		t.exports = function (t) {
			var e = o.getKeys(t),
				n = o.getSymbols;
			if (n)
				for (var i, r = n(t), s = o.isEnum, a = 0; r.length > a; )
					s.call(t, (i = r[a++])) && e.push(i);
			return e;
		};
	},
	function (t, e, n) {
		var o = n(20);
		t.exports =
			Array.isArray ||
			function (t) {
				return 'Array' == o(t);
			};
	},
	function (t, e, n) {
		'use strict';
		Object.defineProperty(e, '__esModule', { value: !0 });
		var o = n(123),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function t() {
				i.default.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', r),
			(e.default = i.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(9),
			r = o(i),
			s = n(7),
			a = o(s),
			l = n(41),
			u = o(l),
			c = n(1),
			d = o(c),
			h = n(2),
			f = o(h),
			p = n(48),
			v = o(p),
			g = n(21),
			m = o(g),
			y = n(31),
			E = o(y),
			b = n(124),
			w = o(b),
			_ = (function () {
				function t(e, n) {
					(0, d.default)(this, t),
						t._tooltips || (t._tooltips = new u.default()),
						(this.opts = n || t.getOptions(e)),
						(this.opts = t.checkOptions(this.opts)),
						n && n.content
							? (this.tooltipEl = t.constructElement(e, n))
							: (this.tooltipEl = e),
						t._tooltips.set(this.tooltipEl, this),
						(this.targetNode = document.getElementById(this.opts.target)),
						(this.target = new t.Target(this.targetNode)),
						(this.tooltipPosition = this._getConfiguredTooltipPosition()),
						(this.tooltipAlignment = null),
						(this.visible = !1),
						(this.delegates = {
							target: new v.default(this.target.targetEl),
							doc: new v.default(),
							tooltip: new v.default(),
						}),
						this.opts.showOnClick &&
							this.delegates.target.on('click', this.show.bind(this)),
						this.opts.toggleOnClick &&
							this.delegates.target.on('click', this.toggle.bind(this)),
						this.opts.showOnHover &&
							(this.delegates.target.on('mouseover', this.show.bind(this)),
							this.delegates.target.on('mouseout', this.close.bind(this))),
						this.opts.showOnFocus &&
							(this.delegates.target.on('focusin', this.show.bind(this)),
							this.delegates.target.on('focusout', this.close.bind(this))),
						m.default.listenTo('resize'),
						this.render(),
						this.opts.showOnConstruction
							? (this.show(),
							  this.opts.closeAfter && this.closeAfter(this.opts.closeAfter))
							: this.opts.showAfter && this.showAfter(this.opts.showAfter);
				}
				return (
					(0, f.default)(t, null, [
						{
							key: '_getCurrentLayout',
							value: function () {
								return E.default.getCurrentLayout();
							},
						},
					]),
					(0, f.default)(
						t,
						[
							{
								key: 'render',
								value: function () {
									this.opts.appendToBody
										? document.getElementById(this.opts.target + t.idSuffix) ||
										  document.body.appendChild(this.tooltipEl)
										: this.targetNode &&
										  this.targetNode.nextSibling !== this.tooltipEl &&
										  (this.targetNode.nextSibling
												? this.targetNode.parentNode.insertBefore(
														this.tooltipEl,
														this.targetNode.nextSibling
												  )
												: this.targetNode.parentNode.appendChild(
														this.tooltipEl
												  )),
										this.tooltipEl.setAttribute('role', 'tooltip'),
										this.tooltipEl.classList.add('o-tooltip'),
										this.opts.zIndex &&
											(this.tooltipEl.style.zIndex = this.opts.zIndex);
									var e = document.createElement('button');
									(e.className = 'o-tooltip-close'),
										e.setAttribute('aria-label', 'Close tooltip'),
										e.setAttribute('title', 'Close tooltip'),
										this.tooltipEl.appendChild(e);
								},
							},
							{
								key: 'show',
								value: function () {
									this.delegates.doc.root(document.body),
										this.delegates.tooltip.root(this.tooltipEl),
										this.tooltipEl.dispatchEvent(
											new CustomEvent('oTooltip.show')
										),
										(this.closeHandler = this.close.bind(this)),
										this.delegates.tooltip.on(
											'click',
											'.o-tooltip-close',
											this.closeHandler
										),
										this.delegates.tooltip.on(
											'touchend',
											'.o-tooltip-close',
											this.closeHandler
										),
										(this.closeOnKeyUpHandler = this.closeOnKeyUp.bind(this)),
										this.delegates.doc.on('keyup', this.closeOnKeyUpHandler),
										(this.resizeListenerHandler =
											this.resizeListener.bind(this)),
										this.delegates.doc.on(
											'oViewport.resize',
											'body',
											this.resizeListenerHandler
										),
										this.drawTooltip(),
										(this.visible = !0),
										clearTimeout(this.showTimeout),
										(this.tooltipEl.style.display = 'block'),
										(this.tooltipEl.style.opacity = 1),
										this.tooltipEl.classList.add('visible');
								},
							},
							{
								key: 'toggle',
								value: function () {
									this.visible ? this.close() : this.show();
								},
							},
							{
								key: 'closeAfter',
								value: function (t) {
									var e = this;
									this.closeTimeout = setTimeout(function () {
										e.close();
									}, 1e3 * t);
								},
							},
							{
								key: 'showAfter',
								value: function (t) {
									var e = this;
									this.showTimeout = setTimeout(function () {
										e.show();
									}, 1e3 * t);
								},
							},
							{
								key: 'destroy',
								value: function () {
									!0 === this.visible && this.close(),
										this.tooltipEl &&
											this.tooltipEl.parentElement &&
											this.opts &&
											this.opts.content &&
											this.tooltipEl.parentElement.removeChild(this.tooltipEl),
										t._tooltips.delete(this.tooltipEl),
										0 === t._tooltips.size &&
											(m.default.stopListeningTo('resize'), delete t._tooltips);
								},
							},
							{
								key: 'close',
								value: function (t, e) {
									var n = this;
									return (
										(!(arguments.length > 2 && void 0 !== arguments[2]) ||
											arguments[2]) &&
											this.tooltipEl.dispatchEvent(
												new CustomEvent('oTooltip.close')
											),
										this.delegates.doc.destroy(),
										this.delegates.tooltip.destroy(),
										clearTimeout(this.closeTimeout),
										(this.visible = !1),
										(this.tooltipEl.style.opacity = 0),
										this.tooltipEl.classList.remove('visible'),
										this.tooltipEl.addEventListener(
											'transitionend',
											function () {
												!1 === n.visible &&
													(n.tooltipEl.style.display = 'none');
											},
											{ once: !0 }
										),
										this.opts.showOnClick &&
											this.delegates.target.on(
												'click',
												null,
												this.show.bind(this)
											),
										!1
									);
								},
							},
							{
								key: 'closeOnKeyUp',
								value: function (t) {
									27 === t.keyCode && this.close();
								},
							},
							{
								key: 'resizeListener',
								value: function () {
									var t = this;
									this.visible &&
										window.requestAnimationFrame(function () {
											t.drawTooltip();
										});
								},
							},
							{
								key: 'drawTooltip',
								value: function () {
									this.tooltipEl.style.display = 'block';
									for (
										var e = 0,
											n = {},
											o = this._getConfiguredTooltipPosition(),
											i = 'middle',
											r = !0;
										e < 5 && r;

									) {
										switch ((e++, o)) {
											case 'above':
												var s = this._evaulateTooltip('above');
												(n = s.tooltipRect),
													(i = s.alignment),
													(r = s.isOutOfBounds);
												break;
											case 'right':
												var a = this._evaulateTooltip('right');
												(n = a.tooltipRect),
													(i = a.alignment),
													(r = a.isOutOfBounds);
												break;
											case 'below':
												var l = this._evaulateTooltip('below');
												(n = l.tooltipRect),
													(i = l.alignment),
													(r = l.isOutOfBounds);
												break;
											case 'left':
												var u = this._evaulateTooltip('left');
												(n = u.tooltipRect),
													(i = u.alignment),
													(r = u.isOutOfBounds);
												break;
											default:
												throw t.throwError(
													'drawTooltip entered the default case, which is not expected.'
												);
										}
										r && e < 5 && (o = t._rotateOrientation(o));
									}
									e >= 5 &&
										console.warn(
											'There is not enough space in the client window to draw the tooltip.'
										),
										(this.tooltipRect = n),
										(this.tooltipAlignment = i),
										(this.tooltipPosition = o);
									var c =
											this.target.targetEl.offsetParent &&
											this.target.targetEl.offsetParent.getBoundingClientRect()
												.left,
										d =
											this.target.targetEl.offsetParent &&
											this.target.targetEl.offsetParent.getBoundingClientRect()
												.top;
									this.opts.appendToBody
										? ((this.tooltipEl.id = this.opts.target + t.idSuffix),
										  (this.tooltipEl.style.top =
												this.tooltipRect.top +
												document.documentElement.scrollTop +
												'px'),
										  (this.tooltipEl.style.left =
												this.tooltipRect.left +
												document.documentElement.scrollLeft +
												'px'))
										: ((this.tooltipEl.style.top =
												this.tooltipRect.top - d + 'px'),
										  (this.tooltipEl.style.left =
												this.tooltipRect.left - c + 'px')),
										this._setArrow();
								},
							},
							{
								key: 'width',
								value: function () {
									return this.tooltipEl.offsetWidth;
								},
							},
							{
								key: 'height',
								value: function () {
									return this.tooltipEl.offsetHeight;
								},
							},
							{
								key: '_evaulateTooltip',
								value: function (t) {
									for (
										var e = 'above' === t || 'below' === t ? 'y' : 'x',
											n =
												'y' === e
													? ['middle', 'right', 'left']
													: ['middle', 'top', 'bottom'],
											o = !0,
											i = void 0,
											r = void 0,
											s = 0;
										s < n.length && !0 === o;
										s++
									)
										(r = n[s]),
											(i = this._calculateTooltipRectangle(t, r)),
											(o = this._tooltipIsOutOfBounds(i));
									return (
										o &&
											((r = 'middle'),
											(i = this._calculateTooltipRectangle(t, r))),
										{ tooltipRect: i, alignment: r, isOutOfBounds: o }
									);
								},
							},
							{
								key: '_calculateTooltipRectangle',
								value: function (e, n) {
									var o = {},
										i = 'above' === e || 'below' === e ? 'y' : 'x';
									return (
										'y' === i &&
											('left' === n &&
												(o.left = this.target.right - this.width()),
											'right' === n && (o.left = this.target.left),
											'middle' === n &&
												(o.left = this.target.centrePoint.x - this.width() / 2),
											'above' === e &&
												(o.top =
													this.target.top - this.height() - t.arrowDepth),
											'below' === e &&
												(o.top = this.target.bottom + t.arrowDepth)),
										'x' === i &&
											('top' === n && (o.top = this.target.top),
											'bottom' === n &&
												(o.top = this.target.bottom - this.height()),
											'middle' === n &&
												(o.top = this.target.centrePoint.y - this.height() / 2),
											'right' === e &&
												(o.left = this.target.right + t.arrowDepth),
											'left' === e &&
												(o.left =
													this.target.left - this.width() - t.arrowDepth)),
										(o.right = o.left + this.width()),
										(o.bottom = o.top + this.height()),
										o
									);
								},
							},
							{
								key: 'calculateTooltipRect',
								value: function (t) {
									return (
										console.warn('`calculateTooltipRect` is deprecated.'),
										this._calculateTooltipRectangle(t, 'middle')
									);
								},
							},
							{
								key: '_getConfiguredTooltipPosition',
								value: function () {
									var e = this.opts,
										n = e.position,
										o = e.positionS,
										i = e.positionM,
										r = e.positionL,
										s = e.positionXl;
									switch (t._getCurrentLayout()) {
										case 'S':
											return o || n;
										case 'M':
											return i || o || n;
										case 'L':
											return r || i || o || n;
										case 'XL':
											return s || r || i || o || n;
										default:
											return n;
									}
								},
							},
							{
								key: '_setArrow',
								value: function () {
									var e,
										n = [
											'o-tooltip--arrow-left',
											'o-tooltip--arrow-right',
											'o-tooltip--arrow-above',
											'o-tooltip--arrow-below',
											'o-tooltip-arrow--align-top',
											'o-tooltip-arrow--align-bottom',
											'o-tooltip-arrow--align-left',
											'o-tooltip-arrow--align-right',
											'o-tooltip-arrow--align-middle',
										];
									(e = this.tooltipEl.classList).remove.apply(e, n),
										this.tooltipEl.classList.add(
											'o-tooltip--arrow-' +
												t.positionToArrowPositionMap[this.tooltipPosition]
										),
										this.tooltipEl.classList.add(
											'o-tooltip-arrow--align-' +
												t.alignmentToArrowAlignmentMap[this.tooltipAlignment]
										);
								},
							},
							{
								key: '_tooltipIsOutOfBounds',
								value: function (e) {
									var n = t._pointIsOutOfBounds(e.top, 'y', this.opts),
										o = t._pointIsOutOfBounds(e.bottom, 'y', this.opts),
										i = t._pointIsOutOfBounds(e.left, 'x', this.opts),
										r = t._pointIsOutOfBounds(e.right, 'x', this.opts);
									return n || o || i || r;
								},
							},
						],
						[
							{
								key: 'getOptions',
								value: function (t) {
									var e = t.dataset;
									return (0, a.default)(e).reduce(function (t, n) {
										if ('oComponent' === n) return t;
										var o = n.replace(
											/^oTooltip(\w)(\w+)$/,
											function (t, e, n) {
												return e.toLowerCase() + n;
											}
										);
										try {
											t[o] = JSON.parse(e[n].replace(/\'/g, '"'));
										} catch (i) {
											t[o] = e[n];
										}
										return t;
									}, {});
								},
							},
							{
								key: 'checkOptions',
								value: function (e) {
									return (
										e.target ||
											t.throwError(
												'tooltip.target is not set. An target for the tooltip to point at must be provided'
											),
										e.position
											? -1 === t.validTooltipPositions.indexOf(e.position) &&
											  t.throwError(
													'Invalid value for tooltip position. Valid values are:' +
														t.validTooltipPositions.toString() +
														' or nothing which will default to a value of `below`'
											  )
											: (e.position = 'below'),
										e
									);
								},
							},
							{
								key: 'constructElement',
								value: function (t, e) {
									var n = document.createElement('div');
									return (
										t.setAttribute('id', e.target),
										n.setAttribute('data-o-component', 'o-tooltip'),
										n.insertAdjacentHTML(
											'afterbegin',
											"<div class='o-tooltip-content'>" + e.content + '</div>'
										),
										n
									);
								},
							},
							{
								key: '_pointIsOutOfBounds',
								value: function (t, e, n) {
									if (t < 0) return !0;
									if (n.showOnConstruction) {
										if ('y' === e && t > document.body.clientHeight) return !0;
										if ('x' === e && t > document.body.clientWidth) return !0;
									} else {
										if ('y' === e && t > document.documentElement.clientHeight)
											return !0;
										if ('x' === e && t > document.documentElement.clientWidth)
											return !0;
									}
									return !1;
								},
							},
							{
								key: '_rotateOrientation',
								value: function (t) {
									return {
										above: 'right',
										right: 'below',
										below: 'left',
										left: 'above',
									}[t];
								},
							},
							{
								key: 'throwError',
								value: function (t) {
									throw new Error('"o-tooltip error": ' + t);
								},
							},
							{
								key: 'init',
								value: function (e, n) {
									return (
										e || (e = document.body),
										e instanceof HTMLElement || (e = document.querySelector(e)),
										e instanceof HTMLElement &&
										/\bo-tooltip\b/.test(e.getAttribute('data-o-component'))
											? new t(e, n)
											: (0, r.default)(
													e.querySelectorAll('[data-o-component="o-tooltip"]'),
													function (e) {
														return new t(e, n);
													}
											  )
									);
								},
							},
						]
					),
					t
				);
			})();
		(_.idSuffix = '-tooltip'),
			(_.arrowDepth = 10),
			(_.positionToArrowPositionMap = {
				above: 'below',
				below: 'above',
				left: 'right',
				right: 'left',
			}),
			(_.alignmentToArrowAlignmentMap = {
				top: 'top',
				bottom: 'bottom',
				right: 'left',
				left: 'right',
				middle: 'middle',
			}),
			(_.validArrowAlignments = ['top', 'bottom', 'left', 'right']),
			(_.validTooltipPositions = ['above', 'below', 'left', 'right']),
			(_.Target = w.default),
			(e.default = _),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = (function () {
				function t(e) {
					(0, r.default)(this, t), (this.targetEl = e);
				}
				return (
					(0, a.default)(t, [
						{
							key: 'offsetTop',
							get: function () {
								return this.targetEl.offsetTop;
							},
						},
						{
							key: 'left',
							get: function () {
								return this.targetEl.getBoundingClientRect().left;
							},
						},
						{
							key: 'right',
							get: function () {
								return this.left + this.width;
							},
						},
						{
							key: 'top',
							get: function () {
								return this.targetEl.getBoundingClientRect().top;
							},
						},
						{
							key: 'bottom',
							get: function () {
								return this.top + this.height;
							},
						},
						{
							key: 'width',
							get: function () {
								return this.targetEl.getBoundingClientRect().width;
							},
						},
						{
							key: 'height',
							get: function () {
								return this.targetEl.getBoundingClientRect().height;
							},
						},
						{
							key: 'centrePoint',
							get: function () {
								return {
									x: this.left + this.width / 2,
									y: this.top + this.height / 2,
								};
							},
						},
					]),
					t
				);
			})();
		(e.default = l), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o() {
			(this.version = h),
				(this.source = f),
				(this.api_key = p),
				(this.initialised = !1);
		}
		function i() {
			v.init(), document.removeEventListener('o.DOMContentLoaded', i);
		}
		var r = n(7),
			s = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(r),
			a = n(15),
			l = n(61),
			u = n(62),
			c = n(63),
			d = n(23),
			h = '1.4.2',
			f = 'o-tracking',
			p = 'qUb9maKfKbtpRsdp0p2J7uWxRPGJEP';
		(o.prototype.developer = function (t) {
			t
				? a.set('developer', !0)
				: (a.destroy('developer', null), a.destroy('no_send', null));
		}),
			(o.prototype.destroy = function () {
				this.developer(!1),
					(this.initialised = !1),
					a.destroy('config'),
					a.destroy('page_sent');
			}),
			(o.prototype.toString = function () {
				return 'oTracking version ' + h;
			}),
			(o.prototype.event = n(136)),
			(o.prototype.page = n(137)),
			(o.prototype.view = n(138)),
			(o.prototype.click = n(139)),
			(o.prototype.link = {
				init: function (t) {
					return o.prototype.click.init('link');
				},
			}),
			(o.prototype.utils = n(4)),
			(o.prototype.getRootID = d.getRootID),
			(o.prototype.init = function (t) {
				if (this.initialised) return this;
				var e = Boolean(this._getDeclarativeConfigElement());
				if (
					((t = t || {}),
					e && (t = this._getDeclarativeConfig(t)),
					0 === (0, s.default)(t).length && t.constructor === Object)
				)
					return null;
				a.set('version', this.version),
					a.set('source', this.source),
					a.set('api_key', this.api_key),
					a.set('page_sent', !1);
				var n = !!t && t.cookieDomain;
				return (
					l.init(!1, n),
					this.updateConfig(t),
					u.init(t.session),
					c.init(),
					this.event.init(),
					this.page.init(),
					(this.initialised = !0),
					this
				);
			}),
			(o.prototype.updateConfig = function (t) {
				var e = a.get('config') || {};
				(e = this.utils.merge(e, t)),
					a.set('config', e),
					e.developer &&
						(this.developer(e.developer), e.noSend && a.set('no_send', !0)),
					e.user && e.user.user_id && l.setUser(e.user.user_id),
					c.setDomain();
			}),
			(o.prototype._getDeclarativeConfigElement = function () {
				return document.querySelector('script[data-o-tracking-config]');
			}),
			(o.prototype._getDeclarativeConfig = function (t) {
				var e = this._getDeclarativeConfigElement(),
					n = void 0;
				if (!e) return !1;
				n = e.textContent || e.innerText || e.innerHTML;
				var o = void 0;
				try {
					o = JSON.parse(n);
				} catch (t) {
					var i = new Error(
						'Invalid JSON configuration syntax, check validity for o-tracking configuration: "' +
							t.message +
							'"'
					);
					throw (
						(this.utils.broadcast('oErrors', 'log', {
							error: i.message,
							info: { module: 'o-tracking' },
						}),
						i)
					);
				}
				for (var r in o) o.hasOwnProperty(r) && (t[r] = t[r] || o[r]);
				return t;
			});
		var v = new o();
		document.addEventListener('o.DOMContentLoaded', i), (t.exports = v);
	},
	function (t, e, n) {
		var o = n(3);
		t.exports = function (t) {
			return ((o.JSON && o.JSON.stringify) || JSON.stringify).apply(
				JSON,
				arguments
			);
		};
	},
	function (t, e, n) {
		'use strict';
		e.__esModule = !0;
		var o = n(60),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o);
		e.default = function (t, e, n) {
			return (
				e in t
					? (0, i.default)(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0,
					  })
					: (t[e] = n),
				t
			);
		};
	},
	function (t, e, n) {
		n(129), (t.exports = n(3).Object.assign);
	},
	function (t, e, n) {
		var o = n(8);
		o(o.S + o.F, 'Object', { assign: n(130) });
	},
	function (t, e, n) {
		var o = n(0),
			i = n(32),
			r = n(58);
		t.exports = n(16)(function () {
			var t = Object.assign,
				e = {},
				n = {},
				o = Symbol(),
				i = 'abcdefghijklmnopqrst';
			return (
				(e[o] = 7),
				i.split('').forEach(function (t) {
					n[t] = t;
				}),
				7 != t({}, e)[o] || Object.keys(t({}, n)).join('') != i
			);
		})
			? function (t, e) {
					for (
						var n = i(t),
							s = arguments,
							a = s.length,
							l = 1,
							u = o.getKeys,
							c = o.getSymbols,
							d = o.isEnum;
						a > l;

					)
						for (
							var h,
								f = r(s[l++]),
								p = c ? u(f).concat(c(f)) : u(f),
								v = p.length,
								g = 0;
							v > g;

						)
							d.call(f, (h = p[g++])) && (n[h] = f[h]);
					return n;
			  }
			: Object.assign;
	},
	function (t, e, n) {
		'use strict';
		!(function (e) {
			var n = 0,
				o = Math.pow(36, 4),
				i = function (t, e) {
					var n = '000000000' + t;
					return n.substr(n.length - e);
				},
				r = function () {
					return i(((Math.random() * o) << 0).toString(36), 4);
				},
				s = function () {
					return (n = n < o ? n : 0), ++n - 1;
				},
				a = function () {
					var t,
						e = new Date().getTime().toString(36),
						n = a.fingerprint(),
						o = r() + r();
					return (t = i(s().toString(36), 4)), 'c' + e + t + n + o;
				};
			(a.slug = function () {
				var t,
					e = new Date().getTime().toString(36),
					n = a.fingerprint().slice(0, 1) + a.fingerprint().slice(-1),
					o = r().slice(-2);
				return (t = s().toString(36).slice(-4)), e.slice(-2) + t + n + o;
			}),
				(a.globalCount = function () {
					var t = (function () {
						var t,
							e = 0;
						for (t in window) e++;
						return e;
					})();
					return (
						(a.globalCount = function () {
							return t;
						}),
						t
					);
				}),
				(a.fingerprint = function () {
					return i(
						(navigator.mimeTypes.length + navigator.userAgent.length).toString(
							36
						) + a.globalCount().toString(36),
						4
					);
				}),
				(t.exports = a);
		})();
	},
	function (t, e, n) {
		'use strict';
		t.exports = {
			xhr: n(133),
			sendBeacon: n(134),
			image: n(135),
			get: function (t) {
				return this.mock || this[t];
			},
		};
	},
	function (t, e, n) {
		'use strict';
		t.exports = function () {
			var t = new window.XMLHttpRequest();
			return {
				name: 'xhr',
				send: function (e, n) {
					t.open('POST', e, !0),
						(t.withCredentials = !0),
						t.setRequestHeader('Content-type', 'application/json'),
						t.send(n);
				},
				complete: function (e) {
					(t.onerror = function () {
						e(this);
					}),
						(t.onload = function () {
							t.status >= 200 && t.status < 300
								? e()
								: e('Incorrect response: ' + t.status);
						});
				},
			};
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(12),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o);
		t.exports = function () {
			var t = void 0,
				e = void 0,
				n = new i.default(function (n, o) {
					(t = n), (e = o);
				});
			return {
				name: 'sendBeacon',
				send: function (n, o) {
					navigator.sendBeacon(n, o)
						? t()
						: e(new Error('Failed to send beacon event: ' + o.toString()));
				},
				complete: function (t) {
					t && n.then(t, t);
				},
			};
		};
	},
	function (t, e, n) {
		'use strict';
		var o = n(4);
		t.exports = function () {
			var t = new Image(1, 1);
			return {
				name: 'image',
				send: function (e, n) {
					(e = e.replace(
						'https://spoor-api.ft.com/ingest',
						'https://spoor-api.ft.com/px.gif'
					)),
						(t.src =
							e + (e.indexOf('?') > -1 ? '&' : '?') + 'data=' + o.encode(n));
				},
				complete: function (e) {
					t.addEventListener
						? (t.addEventListener('error', e),
						  t.addEventListener('load', function () {
								return e();
						  }))
						: (t.attachEvent('onerror', e),
						  t.attachEvent('onload', function () {
								return e();
						  }));
				},
			};
		};
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			if (u.is(t.detail.category) || u.is(t.detail.action)) {
				throw (
					(u.broadcast('oErrors', 'log', {
						error: 'Missing category or action values',
						info: { module: 'o-tracking' },
					}),
					'Missing category or action values')
				);
			}
			var n = u.merge(c(), {
				category: t.detail.category,
				action: t.detail.action,
				context: t.detail,
			});
			delete n.context.category, delete n.context.action;
			var o = i(t);
			o
				? ((n.context.component_name = o.getAttribute('data-o-component')),
				  (n.context.component_id = n.context.component_id || r(o)))
				: ((n.context.component_name = n.context.component_name),
				  (n.context.component_id = n.context.component_id)),
				l.track(n, e);
		}
		function i(t) {
			var e = t.target || t.srcElement;
			if (e && e.getAttribute('data-o-component')) return e;
		}
		function r(t) {
			var e = s(t);
			if (void 0 !== e) {
				var n = e[0],
					o = (function (t) {
						var e = t.parentElement;
						if (e) {
							for (var o = 0; o < e.childNodes.length; o++)
								if (e.childNodes[o] === n) return o;
							return -1;
						}
						return 0;
					})(n);
				return a(
					e.reduceRight(function (t, e) {
						if (!e.nodeName) return t + ' - ' + e.constructor.name + '\n';
						var n = e.nodeName.toLowerCase();
						return 0 === n.indexOf('#')
							? t + '<' + n + '>'
							: t + '<' + n + ' id="' + (e.id || '') + '">';
					}, '') +
						'_siblingIndex=' +
						o
				);
			}
		}
		function s(t) {
			for (var e = []; t; ) e.push(t), (t = t.parentElement);
			return e;
		}
		function a(t) {
			for (var e = t.length, n = 1 ^ e, o = 0, i = void 0; e >= 4; )
				(i =
					(255 & t.charCodeAt(o)) |
					((255 & t.charCodeAt(++o)) << 8) |
					((255 & t.charCodeAt(++o)) << 16) |
					((255 & t.charCodeAt(++o)) << 24)),
					(i =
						1540483477 * (65535 & i) +
						(((1540483477 * (i >>> 16)) & 65535) << 16)),
					(i ^= i >>> 24),
					(i =
						1540483477 * (65535 & i) +
						(((1540483477 * (i >>> 16)) & 65535) << 16)),
					(n =
						(1540483477 * (65535 & n) +
							(((1540483477 * (n >>> 16)) & 65535) << 16)) ^
						i),
					(e -= 4),
					++o;
			switch (e) {
				case 3:
					n ^= (255 & t.charCodeAt(o + 2)) << 16;
					break;
				case 2:
					n ^= (255 & t.charCodeAt(o + 1)) << 8;
					break;
				case 1:
					(n ^= 255 & t.charCodeAt(o)),
						(n =
							1540483477 * (65535 & n) +
							(((1540483477 * (n >>> 16)) & 65535) << 16));
			}
			return (
				(n ^= n >>> 13),
				(n =
					1540483477 * (65535 & n) +
					(((1540483477 * (n >>> 16)) & 65535) << 16)),
				(n ^= n >>> 15) >>> 0
			);
		}
		var l = n(23),
			u = n(4),
			c = function () {
				return { category: 'event', action: 'generic', context: {} };
			};
		(t.exports = o),
			(t.exports.init = function () {
				u.addEvent(window, 'oTracking.event', o);
			});
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			(t = s.merge(l(), { context: t })),
				a.get('page_viewed') && r.setRootID(),
				r.track(t, e),
				a.set('page_viewed', !0),
				s.triggerPage();
		}
		function i(t) {
			o(t.detail);
		}
		var r = n(23),
			s = n(4),
			a = n(15);
		a.set('page_viewed', !1);
		var l = function () {
			return {
				category: 'page',
				action: 'view',
				context: { url: document.URL, referrer: document.referrer },
				async: !0,
			};
		};
		(t.exports = o),
			(t.exports.init = function () {
				s.addEvent(window, 'oTracking.page', i);
			});
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		var i = n(50),
			r = o(i),
			s = n(47),
			a = o(s),
			l = n(23),
			u = n(65),
			c = n(4),
			d = ['componentContentId', 'type', 'subtype', 'component'],
			h = function (t, e, n) {
				var o = u(e),
					i = o.trace,
					r = o.customContext,
					s = void 0;
				if (n.getContextData) {
					if ('function' != typeof n.getContextData)
						throw new Error('opts.getContextData is not a function');
					var l = n.getContextData(e);
					if ('object' !== (void 0 === l ? 'undefined' : (0, a.default)(l)))
						throw new Error(
							'opts.getContextData function should return {Object}'
						);
					s = c.whitelistProps(l, d);
				} else s = {};
				(s.domPathTokens = i),
					(s.url = window.document.location.href || null),
					c.assignIfUndefined(r, s),
					(t.context = s);
			},
			f = function () {
				function t(t) {
					var n = this;
					t.forEach(function (t) {
						if (t.isIntersecting || t.intersectionRatio > 0) {
							var o = {
									action: e.action || 'view',
									category: e.category || 'component',
								},
								i = t.target;
							h(o, i, e), l.track(o), n.unobserve(i);
						}
					});
				}
				var e =
					arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				if (!window.IntersectionObserver)
					return void console.warn(
						'o-tracking: Unable to track component view events as "window.IntersectionObserver" is not supported.'
					);
				var n = e.selector || '[data-o-tracking-view]',
					o = [].concat((0, r.default)(document.querySelectorAll(n)));
				if (o.length) {
					var i = new IntersectionObserver(t, { threshold: [1] });
					o.forEach(function (t) {
						return i.observe(t);
					});
				}
			};
		t.exports = { init: f };
	},
	function (t, e, n) {
		'use strict';
		var o = n(48),
			i = n(64),
			r = n(23),
			s = n(4),
			a = n(15),
			l = n(65),
			u = void 0,
			c = ['ctrlKey', 'altKey', 'shiftKey', 'metaKey'],
			d = function (t) {
				var e = t.context.domPathTokens[0],
					n = e.href || null,
					o = e['data-o-tracking-skip-queue'],
					i = (o && 'true' === o.toLowerCase()) || !1;
				n && n.indexOf(window.document.location.hostname) > -1 && !i
					? ((t.context.source_id = r.getRootID()), u.add(t).save())
					: ((t.async = !1), r.track(t));
			},
			h = function (t) {
				return c.reduce(function (e, n) {
					try {
						t[n] && (e[n] = s.sanitise(t[n]));
					} catch (t) {
						console.log(t);
					}
					return e;
				}, {});
			},
			f = function (t) {
				return function (e, n) {
					if ('true' !== n.getAttribute('data-o-tracking-do-not-track')) {
						var o = h(e),
							i = l(n),
							r = i.trace,
							u = i.customContext;
						(o.domPathTokens = r),
							(o.url = window.document.location.href || null),
							s.assignIfUndefined(u, o),
							(t.context = o);
						var c = s.merge(a.get('config'), t);
						d(c);
					}
				};
			},
			p = function t(e) {
				var n = function (e) {
						t();
					},
					o = u.shift();
				o && r.track(o, n);
			},
			v = function (t, e) {
				e = e || 'a, button, input, [role="button"]';
				var n = { action: 'click', category: t || 'o-tracking' };
				new o(document.body).on('click', e, f(n), !0),
					(u = new i('clicks')),
					p(),
					s.onPage(p);
			};
		t.exports = { init: v };
	},
	function (t, e, n) {
		'use strict';
		Object.defineProperty(e, '__esModule', { value: !0 });
		var o = n(141),
			i = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(o),
			r = function t() {
				i.default.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', r),
			(e.default = i.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i(t, e) {
			(t.opts.advertising &&
				t.videoAds &&
				t.videoAds.adsLoaded &&
				!t.videoAds.adsCompleted) ||
				(('progress' !== e.type || s(t.getProgress())) &&
					r(e.type, t, {
						progress: t.getProgress(),
						duration: t.getDuration(),
						textTrackMode: t.getTrackMode(),
					}));
		}
		function r(t, e) {
			var n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
				o = new CustomEvent('oTracking.event', {
					detail: (0, E.default)(
						{
							category: 'video',
							action: t,
							advertising: e.opts.advertising,
							contentId: e.opts.id,
						},
						n
					),
					bubbles: !0,
				});
			document.body.dispatchEvent(o);
		}
		function s(t) {
			return [
				8, 9, 10, 11, 12, 23, 24, 25, 26, 27, 48, 49, 50, 51, 52, 73, 74, 75,
				76, 77, 100,
			].includes(t);
		}
		function a(t, e) {
			var n = this;
			e.forEach(function (e) {
				t.videoEl.addEventListener(e, i.bind(n, t));
			});
		}
		function l(t, e) {
			var n =
				'https://www.ft.com/__origami/service/image/v2/images/raw/' +
				encodeURIComponent(t) +
				'?source=o-video&quality=low';
			return e && (n += '&fit=scale-down&width=' + e), n;
		}
		function u(t) {
			var e = {};
			return (
				Array.prototype.forEach.call(t, function (t) {
					if (0 === t.name.indexOf('data-o-video')) {
						var n = t.name
							.replace('data-o-video-', '')
							.replace(/-([a-z])/g, function (t, e) {
								return e.toUpperCase();
							});
						try {
							e[n] =
								'placeholderInfo' === n
									? JSON.parse(t.value.replace(/\'/g, '"'))
									: JSON.parse(t.value);
						} catch (o) {
							e[n] = t.value;
						}
					}
				}),
				e
			);
		}
		function c() {
			this.updateAmountWatched(),
				r('watched', this, {
					amount: this.getAmountWatched(0),
					amountPercentage: this.getAmountWatchedPercentage(0),
				});
		}
		function d(t) {
			t.detail.hidden
				? this.updateAmountWatched()
				: this.videoEl.paused || this.markPlayStart();
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var h = n(12),
			f = o(h),
			p = n(1),
			v = o(p),
			g = n(2),
			m = o(g),
			y = n(22),
			E = o(y),
			b = n(21),
			w = o(b),
			_ = n(142),
			k = o(_),
			C = n(143),
			x = o(C),
			L = n(145),
			M = o(L),
			A = n(146),
			T = o(A),
			O = n(147),
			S = o(O),
			P = 'onbeforeunload' in window ? 'beforeunload' : 'unload',
			D = {
				advertising: !1,
				allProgress: !1,
				autorender: !0,
				classes: [],
				optimumwidth: null,
				placeholder: !1,
				placeholderInfo: ['title'],
				placeholderHint: '',
				playsinline: !1,
				showCaptions: !0,
				data: null,
			},
			I = (function () {
				function t(e, n) {
					(0, v.default)(this, t),
						(this.containerEl = e),
						(this.amountWatched = 0),
						(this.fireWatchedEvent = c.bind(this)),
						(this.visibilityListener = d.bind(this)),
						(this.opts = (0, E.default)(
							{},
							D,
							n,
							u(this.containerEl.attributes)
						)),
						'string' == typeof this.opts.classes &&
							(this.opts.classes = this.opts.classes.split(' ')),
						-1 === this.opts.classes.indexOf('o-video__video') &&
							this.opts.classes.push('o-video__video'),
						(this.targeting = {
							site: '/5887/ft.com',
							position: 'video',
							sizes: '592x333|400x225',
							videoId: this.opts.id,
						}),
						this.opts.advertising && (this.videoAds = new M.default(this)),
						this.containerEl.setAttribute('data-o-video-js', ''),
						!0 === this.opts.autorender && this.init();
				}
				return (
					(0, m.default)(
						t,
						[
							{
								key: 'getData',
								value: function () {
									var t = this;
									return (
										this.opts.data
											? f.default.resolve(this.opts.data)
											: (0, k.default)(
													'https://next-media-api.ft.com/v1/' + this.opts.id
											  ).then(function (e) {
													if (e.ok) return e.json();
													throw Error(
														'Next Media API responded with a ' +
															e.status +
															' (' +
															e.statusText +
															') for id ' +
															t.opts.id
													);
											  })
									).then(function (e) {
										(t.videoData = e),
											(t.posterImage =
												e.mainImageUrl &&
												l(e.mainImageUrl, t.opts.optimumwidth)),
											(t.rendition = (0, x.default)(e.renditions, t.opts));
									});
								},
							},
							{
								key: 'renderVideo',
								value: function () {
									this.rendition &&
										(this.opts.placeholder
											? this.addPlaceholder()
											: this.addVideo());
								},
							},
							{
								key: 'init',
								value: function () {
									var t = this;
									return (
										this.opts.advertising
											? M.default.loadAdsLibrary()
											: f.default.resolve()
									)
										.catch(function () {
											t.opts.advertising = !1;
										})
										.then(function () {
											return t.getData();
										})
										.then(function () {
											return t.renderVideo();
										});
								},
							},
							{
								key: 'addVideo',
								value: function () {
									(this.liveRegionEl = document.createElement('div')),
										this.liveRegionEl.setAttribute('aria-live', 'assertive'),
										this.liveRegionEl.classList.add('o-video__live-region'),
										(this.videoEl = document.createElement('video')),
										(this.videoEl.controls = !0),
										(this.videoEl.className = Array.isArray(this.opts.classes)
											? this.opts.classes.join(' ')
											: this.opts.classes),
										this.containerEl.classList.add('o-video--player'),
										this.opts.playsinline &&
											(this.videoEl.setAttribute('playsinline', 'true'),
											this.videoEl.setAttribute('webkit-playsinline', 'true')),
										this.videoEl.controlsList &&
											this.videoEl.controlsList.add('nodownload'),
										this.updateVideo(),
										this.placeholderEl &&
											!this.opts.advertising &&
											(this.videoEl.autoplay = this.videoEl.autostart = !0),
										this.containerEl.appendChild(this.liveRegionEl),
										this.containerEl.appendChild(this.videoEl),
										a(this, [
											'playing',
											'pause',
											'ended',
											'progress',
											'seeked',
											'error',
											'stalled',
										]),
										this.videoEl.addEventListener(
											'playing',
											this.pauseOtherVideos.bind(this)
										),
										this.videoEl.addEventListener(
											'playing',
											this.markPlayStart.bind(this)
										),
										this.videoEl.addEventListener(
											'pause',
											this.updateAmountWatched.bind(this)
										),
										this.videoEl.addEventListener(
											'suspend',
											this.clearCurrentlyPlaying.bind(this)
										),
										this.videoEl.addEventListener(
											'ended',
											this.clearCurrentlyPlaying.bind(this)
										),
										this.opts.advertising && this.videoAds.setUpAds(),
										window.addEventListener(P, this.fireWatchedEvent),
										w.default.listenTo('visibility'),
										window.addEventListener(
											'oViewport.visibility',
											this.visibilityListener
										);
								},
							},
							{
								key: 'addCaptions',
								value: function () {
									if (!1 !== this.opts.showCaptions) {
										if (void 0 === this.videoData)
											throw new Error(
												'Please call `getData()` before calling `addCaptions()` directly.'
											);
										var t = this.videoEl.querySelector('track');
										if (
											(t && this.videoEl.removeChild(t),
											this.videoData.captionsUrl)
										) {
											var e = document.createElement('track');
											e.setAttribute('label', 'English'),
												e.setAttribute('kind', 'captions'),
												e.setAttribute('srclang', 'en'),
												e.setAttribute('src', this.videoData.captionsUrl),
												e.setAttribute('crossorigin', 'true'),
												this.videoEl.setAttribute('crossorigin', 'true'),
												this.videoEl.appendChild(e);
										}
									}
								},
							},
							{
								key: 'updateVideo',
								value: function () {
									this.posterImage
										? (this.videoEl.poster = this.posterImage)
										: this.videoEl.removeAttribute('poster'),
										(this.videoEl.src = this.rendition && this.rendition.url),
										this.addCaptions();
								},
							},
							{
								key: 'addPlaceholder',
								value: function () {
									(this.placeholderEl = document.createElement('div')),
										(this.placeholderEl.className = 'o-video__placeholder'),
										(this.placeholderImageEl = document.createElement('img')),
										(this.placeholderImageEl.className =
											'o-video__placeholder-image'),
										this.placeholderImageEl.setAttribute(
											'role',
											'presentation'
										),
										this.placeholderImageEl.setAttribute('alt', ''),
										this.placeholderEl.appendChild(this.placeholderImageEl),
										this.opts.placeholderInfo.length &&
											(this.infoPanel = new T.default(this));
									var t = document.createElement('button');
									(t.className = 'o-video__play-button'),
										(this.playButtonIconEl = document.createElement('span')),
										(this.playButtonIconEl.className =
											'o-video__play-button-icon'),
										(this.playButtonIconEl.textContent =
											this.opts.placeholderHint),
										t.appendChild(this.playButtonIconEl),
										this.placeholderEl.appendChild(t),
										this.placeholderEl.addEventListener(
											'click',
											this.play.bind(this)
										),
										this.updatePlaceholder(),
										this.containerEl.appendChild(this.placeholderEl);
								},
							},
							{
								key: 'play',
								value: function () {
									this.placeholderEl
										? (this.addVideo(),
										  this.videoEl.focus(),
										  this.containerEl.removeChild(this.placeholderEl),
										  this.infoPanel && this.infoPanel.teardown(),
										  delete this.placeholderEl,
										  delete this.placeholderImageEl)
										: this.videoEl.play();
								},
							},
							{
								key: 'updatePlaceholder',
								value: function () {
									this.posterImage &&
										(this.placeholderImageEl.src = this.posterImage),
										this.infoPanel && this.infoPanel.update(),
										this.playButtonIconEl &&
											this.playButtonIconEl.setAttribute(
												'aria-label',
												'Play video ' + this.videoData.title
											);
								},
							},
							{
								key: 'update',
								value: function (t) {
									var e = this;
									return (
										this.videoEl && this.videoEl.pause(),
										this.clearCurrentlyPlaying(),
										(this.opts = (0, E.default)(this.opts, { data: null }, t)),
										this.videoEl || this.placeholderEl
											? this.getData().then(function () {
													e.placeholderEl
														? e.updatePlaceholder()
														: e.updateVideo();
											  })
											: this.init()
									);
								},
							},
							{
								key: 'getProgress',
								value: function () {
									return this.videoEl.duration
										? parseInt(
												(100 * this.videoEl.currentTime) /
													this.videoEl.duration,
												10
										  )
										: 0;
								},
							},
							{
								key: 'getDuration',
								value: function () {
									return this.videoEl.duration
										? parseInt(this.videoEl.duration, 10)
										: 0;
								},
							},
							{
								key: 'getTrackMode',
								value: function () {
									return this.videoEl.textTracks && this.videoEl.textTracks[0]
										? this.videoEl.textTracks[0].mode
										: void 0;
								},
							},
							{
								key: 'getAmountWatched',
								value: function (t) {
									var e = this.amountWatched / 1e3;
									return void 0 !== t ? +e.toFixed(t) : e;
								},
							},
							{
								key: 'getAmountWatchedPercentage',
								value: function (t) {
									var e =
										this.videoEl && this.videoEl.duration
											? (100 / this.videoEl.duration) * this.getAmountWatched()
											: 0;
									return void 0 !== t ? +e.toFixed(t) : e;
								},
							},
							{
								key: 'pauseOtherVideos',
								value: function () {
									this.currentlyPlayingVideo &&
										this.currentlyPlayingVideo !== this.videoEl &&
										this.currentlyPlayingVideo.pause(),
										(this.currentlyPlayingVideo = this.videoEl);
								},
							},
							{
								key: 'clearCurrentlyPlaying',
								value: function () {
									this.currentlyPlayingVideo !== this.videoEl &&
										(this.currentlyPlayingVideo = null);
								},
							},
							{
								key: 'markPlayStart',
								value: function () {
									this.playStart = Date.now();
								},
							},
							{
								key: 'updateAmountWatched',
								value: function () {
									void 0 !== this.playStart &&
										((this.amountWatched += Date.now() - this.playStart),
										(this.playStart = void 0));
								},
							},
							{
								key: 'resetAmountWatched',
								value: function () {
									this.amountWatched = 0;
								},
							},
							{
								key: 'destroy',
								value: function () {
									window.removeEventListener(P, this.fireWatchedEvent),
										window.removeEventListener(
											'oViewport.visibility',
											this.visibilityListener
										);
								},
							},
						],
						[
							{
								key: 'init',
								value: function (e, n) {
									var o = [];
									e
										? 'string' == typeof e && (e = document.querySelector(e))
										: (e = document.body);
									for (
										var i = e.querySelectorAll(
												':not([data-o-video-js])[data-o-component~="o-video"]'
											),
											r = 0;
										r < i.length;
										r++
									)
										o.push(new t(i[r], n));
									return o;
								},
							},
						]
					),
					t
				);
			})();
		(I.Playlist = S.default), (e.default = I), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 }),
			(e.jsonpFetch = void 0);
		var i = n(12),
			r = o(i),
			s = n(7),
			a = o(s),
			l = [],
			u = function () {
				var t = 'jsonpCallback_' + (l.length + 1);
				return l.push(t), t;
			},
			c = 'withCredentials' in new XMLHttpRequest() ? fetch : d,
			d = function (t, e) {
				var n = { timeout: 2e3 };
				return (
					(e = e || {}),
					(0, a.default)(n).forEach(function (t) {
						e.hasOwnProperty(t) || (e[t] = n[t]);
					}),
					new r.default(function (n, o) {
						var i = u(),
							s = void 0;
						(window.FT = window.FT || {}),
							(window.FT[i] = function (t) {
								var e = t.status ? t.status : 200;
								n({
									ok: 2 === Math.floor(e / 100),
									status: e,
									json: function () {
										return r.default.resolve(t.body || t);
									},
								}),
									s && clearTimeout(s);
							});
						var a = document.createElement('script');
						(a.defer = !0),
							(a.src =
								t + (t.indexOf('?') > -1 ? '&' : '?') + 'callback=FT.' + i),
							document.body.appendChild(a),
							(s = setTimeout(function () {
								o(new Error('JSONP request to ' + t + ' timed out'));
							}, e.timeout));
					})
				);
			};
		(e.default = c), (e.jsonpFetch = d);
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			var n = e || {},
				o = n.optimumvideowidth,
				i = n.supportedFormats || (0, r.default)(),
				s = void 0,
				a = t
					.filter(function (t) {
						return i.indexOf(t.codec.toLowerCase()) > -1;
					})
					.sort(function (t, e) {
						return t.pixelWidth - e.pixelWidth;
					});
			return o
				? (a.some(function (t) {
						return t.pixelWidth >= o && ((s = t), !0);
				  }),
				  s || a.pop())
				: a.pop();
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(144),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i);
		(e.default = o), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o() {
			var t = document.createElement('video'),
				e = [];
			try {
				(0, r.default)(s).forEach(function (n) {
					s[n].some(function (e) {
						return t.canPlayType(e);
					}) && e.push(n);
				});
			} catch (t) {}
			return e;
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(7),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i),
			s = {
				mpeg4: ['video/mp4; codecs="mp4v.20.8"'],
				h264: [
					'video/mp4; codecs="avc1.42E01E"',
					'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
				],
				ogg: ['video/ogg; codecs="theora"'],
				webm: ['video/webm; codecs="vp8, vorbis"'],
			};
		(e.default = o), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function i() {
			var t = document.createElement('div');
			return t.classList.add('o-video__overlay'), t;
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var r = n(12),
			s = o(r),
			a = n(1),
			l = o(a),
			u = n(2),
			c = o(u),
			d = !1,
			h = (function () {
				function t(e) {
					(0, l.default)(this, t),
						(this.video = e),
						(this.adsLoaded = !1),
						(this.videoLoaded = !1),
						(this.loadingStateDisplayed = !1),
						(this.adsCompleted = !1);
				}
				return (
					(0, c.default)(
						t,
						[
							{
								key: 'getVideoBrand',
								value: function () {
									return (
										!!(
											this.video.videoData &&
											this.video.videoData.brand &&
											this.video.videoData.brand.name
										) && this.video.videoData.brand.name
									);
								},
							},
							{
								key: 'setUpAds',
								value: function () {
									(this.adContainerEl = document.createElement('div')),
										this.video.containerEl.appendChild(this.adContainerEl),
										(this.adDisplayContainer =
											new google.ima.AdDisplayContainer(
												this.adContainerEl,
												this.video.videoEl
											)),
										(this.adsLoader = new google.ima.AdsLoader(
											this.adDisplayContainer
										)),
										(this.adsManagerLoadedHandler =
											this.adsManagerLoadedHandler.bind(this)),
										(this.adErrorHandler = this.adErrorHandler.bind(this)),
										(this.adEventHandler = this.adEventHandler.bind(this)),
										(this.contentPauseRequestHandler =
											this.contentPauseRequestHandler.bind(this)),
										(this.contentResumeRequestHandler =
											this.contentResumeRequestHandler.bind(this)),
										(this.getAdProgress = this.getAdProgress.bind(this)),
										this.adsLoader.addEventListener(
											google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
											this.adsManagerLoadedHandler,
											!1
										),
										this.adsLoader.addEventListener(
											google.ima.AdErrorEvent.Type.AD_ERROR,
											this.adErrorHandler,
											!1
										),
										this.requestAds(),
										(this.playAdEventHandler =
											this.playAdEventHandler.bind(this)),
										this.video.opts.placeholder
											? this.playAdEventHandler()
											: ((this.overlayEl = i()),
											  this.video.containerEl.appendChild(this.overlayEl),
											  this.overlayEl.addEventListener(
													'click',
													this.playAdEventHandler
											  ));
								},
							},
							{
								key: 'requestAds',
								value: function () {
									var t = new google.ima.AdsRequest(),
										e =
											'pos=' +
											this.video.targeting.position +
											'&ttid=' +
											this.video.targeting.videoId,
										n = this.getVideoBrand();
									n && (e += '&brand=' + n);
									var o =
										'http://pubads.g.doubleclick.net/gampad/ads?env=vp&gdfp_req=1&impl=s&output=xml_vast2&iu=' +
										this.video.targeting.site +
										'&sz=' +
										this.video.targeting.sizes +
										'&unviewed_position_start=1&scp=' +
										encodeURIComponent(e);
									(t.adTagUrl = o),
										(t.linearAdSlotWidth = 592),
										(t.linearAdSlotHeight = 333),
										(t.nonLinearAdSlotWidth = 592),
										(t.nonLinearAdSlotHeight = 150);
									var i = {
											detail: {
												category: 'video',
												action: 'adRequested',
												contentId: this.video.opts.id,
											},
											bubbles: !0,
										},
										r = new CustomEvent('oTracking.event', i);
									document.body.dispatchEvent(r), this.adsLoader.requestAds(t);
								},
							},
							{
								key: 'adsManagerLoadedHandler',
								value: function (t) {
									var e = new google.ima.AdsRenderingSettings();
									(e.restoreCustomPlaybackStateOnAdBreakComplete = !0),
										(this.adsManager = t.getAdsManager(this.video.videoEl, e)),
										this.adsManager.addEventListener(
											google.ima.AdErrorEvent.Type.AD_ERROR,
											this.adErrorHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
											this.contentPauseRequestHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
											this.contentResumeRequestHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
											this.adEventHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.LOADED,
											this.adEventHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.STARTED,
											this.adEventHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.COMPLETE,
											this.adEventHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.SKIPPED,
											this.adEventHandler
										),
										this.adsManager.addEventListener(
											google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED,
											this.adEventHandler
										),
										(this.adsLoaded = !0),
										this.startAds();
								},
							},
							{
								key: 'startAds',
								value: function () {
									if (this.videoLoaded && this.loadingStateDisplayed) {
										if (this.video.opts.advertising) {
											if (!this.adsLoaded) return;
										} else this.playUserVideo();
										this.loadingStateEl &&
											(this.loadingStateEl.parentNode.removeChild(
												this.loadingStateEl
											),
											(this.loadingStateEl = null));
										try {
											this.adsManager.init(
												this.video.videoEl.clientWidth,
												this.video.videoEl.clientHeight,
												google.ima.ViewMode.NORMAL
											),
												this.adsManager.start();
										} catch (t) {
											this.reportError(t), this.playUserVideo();
										}
									}
								},
							},
							{
								key: 'playAdEventHandler',
								value: function () {
									var t = this;
									this.adContainerEl.classList.add('o-video__ad'),
										this.adDisplayContainer.initialize(),
										(this.loadingStateEl = document.createElement('span')),
										this.loadingStateEl.setAttribute('role', 'progressbar'),
										this.loadingStateEl.setAttribute(
											'aria-valuetext',
											'Loading'
										),
										(this.loadingStateEl.className = 'o-video__loading-state'),
										this.adContainerEl.appendChild(this.loadingStateEl),
										setTimeout(function () {
											(t.loadingStateDisplayed = !0), t.startAds();
										}, 2e3);
									var e = function e() {
										(t.videoLoaded = !0),
											t.startAds(),
											t.video.videoEl.removeEventListener('loadedmetadata', e);
									};
									this.video.videoEl.addEventListener('loadedmetadata', e),
										this.video.videoEl.load(),
										this.overlayEl &&
											(this.overlayEl.removeEventListener(
												'click',
												this.playAdEventHandler
											),
											this.video.containerEl.removeChild(this.overlayEl)),
										delete this.overlayEl;
								},
							},
							{
								key: 'adEventHandler',
								value: function (t) {
									var e = t.getAd(),
										n = {
											detail: {
												advertising: !0,
												category: 'video',
												contentId: this.video.opts.id,
												progress: 0,
												adDuration: e.getDuration(),
												adMinDuration: e.getMinSuggestedDuration(),
												adTitle: e.getTitle(),
												adProgress: this.getAdProgress(),
											},
											bubbles: !0,
										};
									switch (t.type) {
										case google.ima.AdEvent.Type.LOADED:
											e.isLinear() || this.playUserVideo();
											break;
										case google.ima.AdEvent.Type.STARTED:
											n.detail.action = 'adStart';
											var o = new CustomEvent('oTracking.event', n);
											document.body.dispatchEvent(o),
												e.isLinear(),
												(this.video.liveRegionEl.innerHTML =
													'Video will play after ad in ' +
													n.detail.adDuration +
													' seconds');
											break;
										case google.ima.AdEvent.Type.COMPLETE:
											n.detail.action = 'adComplete';
											var i = new CustomEvent('oTracking.event', n);
											document.body.dispatchEvent(i),
												e.isLinear(),
												(this.video.liveRegionEl.innerHTML = '');
											break;
										case google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED:
											n.detail.action = 'adSkippable';
											var r = new CustomEvent('oTracking.event', n);
											document.body.dispatchEvent(r);
											break;
										case google.ima.AdEvent.Type.SKIPPED:
											n.detail.action = 'adSkip';
											var s = new CustomEvent('oTracking.event', n);
											document.body.dispatchEvent(s);
											break;
										case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
											n.detail.action = 'allAdsCompleted';
											var a = new CustomEvent('oTracking.event', n);
											document.body.dispatchEvent(a);
											break;
										default:
											throw new Error(
												'adEvent has type ' +
													t.type +
													', which is not handled by adEventHandler'
											);
									}
								},
							},
							{
								key: 'reportError',
								value: function (t) {
									document.body.dispatchEvent(
										new CustomEvent('oErrors.log', {
											bubbles: !0,
											detail: { error: t },
										})
									);
								},
							},
							{
								key: 'adErrorHandler',
								value: function (t) {
									var e =
											'getError' in t && 'function' == typeof t.getError
												? t.getError()
												: t,
										n =
											e.getErrorCode() +
											', ' +
											e.getType() +
											', ' +
											e.getMessage() +
											', ' +
											e.getVastErrorCode();
									this.reportError(new Error(n)),
										this.adsManager && this.adsManager.destroy(),
										this.video.containerEl.removeChild(this.adContainerEl),
										this.overlayEl &&
											(this.overlayEl.removeEventListener(
												'click',
												this.playAdEventHandler
											),
											this.video.containerEl.removeChild(this.overlayEl),
											delete this.overlayEl),
										this.video.placeholderEl &&
											this.video.placeholderEl.removeEventListener(
												'click',
												this.playAdEventHandler
											),
										(this.video.opts.advertising = !1),
										this.startAds();
								},
							},
							{
								key: 'contentPauseRequestHandler',
								value: function () {
									(this.adsCompleted = !1), this.video.videoEl.pause();
								},
							},
							{
								key: 'contentResumeRequestHandler',
								value: function () {
									this.video.containerEl.removeChild(this.adContainerEl),
										(this.adsCompleted = !0),
										this.playUserVideo();
								},
							},
							{
								key: 'playUserVideo',
								value: function () {
									this.video.addCaptions(), this.video.videoEl.play();
								},
							},
							{
								key: 'getAdProgress',
								value: function () {
									if (!this.adsManager || !this.adsManager.getCurrentAd())
										return 0;
									var t = this.adsManager.getCurrentAd().getDuration(),
										e = this.adsManager.getRemainingTime();
									return parseInt((100 * (t - e)) / t, 10);
								},
							},
						],
						[
							{
								key: 'loadAdsLibrary',
								value: function () {
									return new s.default(function (t, e) {
										var n = document.querySelector(
											'[src="//imasdk.googleapis.com/js/sdkloader/ima3.js"]'
										);
										n ||
											((n = document.createElement('script')),
											n.setAttribute('type', 'text/javascript'),
											n.setAttribute(
												'src',
												'//imasdk.googleapis.com/js/sdkloader/ima3.js'
											),
											n.setAttribute('async', !0),
											n.setAttribute('defer', !0),
											document.getElementsByTagName('head')[0].appendChild(n)),
											d || (window.google && window.google.ima)
												? t()
												: (n.addEventListener('load', function () {
														(d = !0), t();
												  }),
												  n.addEventListener('error', function (t) {
														e(t);
												  }));
									});
								},
							},
						]
					),
					t
				);
			})();
		(e.default = h), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = (function () {
				function t(e) {
					(0, r.default)(this, t),
						(this.video = e),
						(this.opts = this.video.opts.placeholderInfo.reduce(function (
							t,
							e
						) {
							return (t[e] = !0), t;
						},
						{})),
						(this.infoEl = document.createElement('div')),
						(this.infoEl.className = 'o-video__info'),
						this.opts.brand &&
							((this.brandEl = document.createElement('span')),
							(this.brandEl.className = 'o-video__info-brand'),
							this.infoEl.appendChild(this.brandEl)),
						this.opts.title &&
							((this.titleEl = document.createElement('h4')),
							(this.titleEl.className = 'o-video__info-title'),
							this.infoEl.appendChild(this.titleEl)),
						this.opts.description &&
							((this.descriptionEl = document.createElement('p')),
							(this.descriptionEl.className = 'o-video__info-description'),
							this.infoEl.appendChild(this.descriptionEl)),
						this.update(),
						this.video.placeholderEl.appendChild(this.infoEl);
				}
				return (
					(0, a.default)(t, [
						{
							key: 'update',
							value: function () {
								if (this.brandEl) {
									var t =
										this.video.videoData.brand &&
										this.video.videoData.brand.name;
									this.brandEl.textContent = t;
								}
								this.titleEl &&
									(this.titleEl.textContent = this.video.videoData.title),
									this.descriptionEl &&
										(this.descriptionEl.textContent =
											this.video.videoData.standfirst);
							},
						},
						{
							key: 'teardown',
							value: function () {
								this.video.placeholderEl.removeChild(this.infoEl),
									delete this.infoEl,
									delete this.brandEl,
									delete this.titleEl,
									delete this.descriptionEl;
							},
						},
					]),
					t
				);
			})();
		(e.default = l), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = (function () {
				function t(e) {
					(0, r.default)(this, t), (this.opts = e);
					var n = e.player.videoData ? e.player.videoData.id : e.player.opts.id;
					(this.currentIndex = n ? e.queue.indexOf(n.toString()) : -1),
						(this.cache = {}),
						this.opts.autoplay &&
							(this.opts.player.containerEl.addEventListener(
								'ended',
								this.next.bind(this),
								!0
							),
							-1 === this.currentIndex && this.next());
				}
				return (
					(0, a.default)(t, [
						{
							key: 'next',
							value: function () {
								this.goto(this.currentIndex + 1);
							},
						},
						{
							key: 'prev',
							value: function () {
								this.goto(this.currentIndex - 1);
							},
						},
						{
							key: 'goto',
							value: function (t) {
								var e = this;
								t < 0
									? (this.currentIndex = this.opts.queue.length - 1)
									: t >= this.opts.queue.length
									? (this.currentIndex = 0)
									: (this.currentIndex = t);
								var n =
									this.opts.player.videoData && this.opts.player.videoData.id;
								n &&
									!this.cache[n] &&
									(this.cache[n] = this.opts.player.videoData),
									this.opts.player.fireWatchedEvent(),
									this.opts.player.resetAmountWatched();
								var o = this.opts.queue[this.currentIndex],
									i = { id: o, data: this.cache[o] };
								return this.opts.player.update(i).then(function () {
									e.opts.player.videoEl && e.opts.player.videoEl.play();
								});
							},
						},
					]),
					t
				);
			})();
		(e.default = l), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		var o = n(149),
			i = function t() {
				o.init(), document.removeEventListener('o.DOMContentLoaded', t);
			};
		document.addEventListener('o.DOMContentLoaded', i), (t.exports = o);
	},
	function (t, e, n) {
		'use strict';
		function o(t, e) {
			function n(t) {
				var e =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n =
						arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: 'oShare';
				c.rootEl.dispatchEvent(
					new CustomEvent(n + '.' + t, { detail: e, bubbles: !0 })
				);
			}
			function o(t) {
				var e = t.target.closest('li.o-share__action');
				if (c.rootEl.contains(e) && e.querySelector('a[href]')) {
					t.preventDefault(), t.stopPropagation();
					var o = e.querySelector('a[href]').href;
					n(
						'event',
						{
							category: 'share',
							action: 'click',
							button: e.textContent.trim().toLowerCase(),
						},
						'oTracking'
					),
						i(o);
				}
			}
			function i(t) {
				t &&
					(d[t] && !d[t].closed
						? d[t].focus()
						: ((d[t] = window.open(t, '', 'width=646,height=436')),
						  (d[t].opener = null)),
					n('open', { share: c, action: 'social', url: t }));
			}
			function r(t) {
				var n = a[t];
				return (n = n
					.replace('{{url}}', e.url)
					.replace('{{title}}', encodeURIComponent(e.title))
					.replace('{{titleExtra}}', encodeURIComponent(e.titleExtra))
					.replace('{{summary}}', encodeURIComponent(e.summary))
					.replace(
						'{{relatedTwitterAccounts}}',
						encodeURIComponent(e.relatedTwitterAccounts)
					));
			}
			function l() {
				u();
				for (
					var t = document.createElement('ul'), n = 0;
					n < e.links.length;
					n++
				) {
					var o = document.createElement('li'),
						i = document.createElement('span'),
						s = document.createElement('a');
					o.classList.add('o-share__action', 'o-share__action--' + e.links[n]),
						i.classList.add('o-share__text'),
						s.classList.add('o-share__icon', 'o-share__icon--' + e.links[n]),
						(s.href = r(e.links[n])),
						s.appendChild(i),
						o.appendChild(s),
						t.appendChild(o);
				}
				c.rootEl.appendChild(t);
			}
			function u() {
				var t = document.createElement('a');
				(t.href = e.url),
					(e.url = t.protocol + '//' + t.host + t.pathname + t.search + t.hash);
			}
			var c = this,
				d = {};
			!(function () {
				t
					? t instanceof HTMLElement || (t = document.querySelector(t))
					: (t = document.body);
				var i = new s(t);
				i.on('click', o),
					t.setAttribute('data-o-share--js', ''),
					(c.rootDomDelegate = i),
					(c.rootEl = t),
					0 === t.children.length &&
						(e ||
							((e = {}),
							(e.links = t.hasAttribute('data-o-share-links')
								? t.getAttribute('data-o-share-links').split(' ')
								: []),
							(e.url = t.getAttribute('data-o-share-url') || ''),
							(e.title = t.getAttribute('data-o-share-title') || ''),
							(e.titleExtra = t.getAttribute('data-o-share-titleExtra') || ''),
							(e.summary = t.getAttribute('data-o-share-summary') || ''),
							(e.relatedTwitterAccounts =
								t.getAttribute('data-o-share-relatedTwitterAccounts') || '')),
						l()),
					n('ready', { share: c });
			})();
		}
		var i = n(9),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i),
			s = n(48),
			a = {
				twitter:
					'https://twitter.com/intent/tweet?url={{url}}&text={{title}}&related={{relatedTwitterAccounts}}&via=FT',
				facebook: 'http://www.facebook.com/sharer.php?u={{url}}',
				linkedin:
					'http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}+%7C+{{titleExtra}}&summary={{summary}}&source=Financial+Times',
				googleplus: 'https://plus.google.com/share?url={{url}}',
				pinterest:
					'http://www.pinterest.com/pin/create/button/?url={{url}}&description={{title}}',
				whatsapp:
					'whatsapp://send?text={{title}}%20({{titleExtra}})%20-%20{{url}}',
				link: '{{url}}',
			};
		(o.prototype.destroy = function () {
			this.rootDomDelegate.destroy();
			for (var t = 0; t < this.rootEl.children; t++)
				this.rootEl.removeChild(this.rootEl.children[t]);
			this.rootEl.removeAttribute('data-o-share--js'), (this.rootEl = void 0);
		}),
			(o.init = function (t) {
				return (
					t || (t = document.body),
					t instanceof HTMLElement || (t = document.querySelector(t)),
					t instanceof HTMLElement && t.matches('[data-o-component=o-share]')
						? new o(t)
						: (0, r.default)(
								t.querySelectorAll('[data-o-component=o-share]'),
								function (t) {
									return new o(t);
								}
						  )
				);
			}),
			(t.exports = o);
	},
	function (t, e, n) {
		'use strict';
		function o() {
			r.default.init(), document.removeEventListener('o.DOMContentLoaded', o);
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(151),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i);
		document.addEventListener('o.DOMContentLoaded', o),
			(e.default = r.default),
			(t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(7),
			r = o(i),
			s = n(22),
			a = o(s),
			l = n(1),
			u = o(l),
			c = n(2),
			d = o(c),
			h = n(152),
			f = n(153),
			p = (function () {
				function t(e, n) {
					(0, u.default)(this, t),
						(this.cookieMessageElement = e),
						(this.options = (0, a.default)(
							{},
							t.defaultOptions,
							n || t.getOptionsFromDom(e)
						)),
						(this.options.theme = this.options.theme ? 'alternative' : null);
					
					if (this.cookieMessageElement) {
						this.shouldShowCookieMessage()
							? (this.createCookieMessage(),
							  this.showCookieMessage(),
							  this.displayPrivacyMessage('top'))
							: (this.removeCookieMessage(),
							  this.displayPrivacyMessage('bottom'));
					}
				}
				return (
					(0, d.default)(t, null, [
						{
							key: 'defaultOptions',
							get: function () {
								var t = 'ft.com',
									e = 'manage-cookies';
								/\.ft\.com$/i.test(window.location.hostname) ||
									((t = window.location.hostname.replace(/^(.*?)\./, '')),
									(e = 'cookies'));
								var n = window.location.href;
								return {
									cookieMessageClass: 'o-cookie-message',
									theme: null,
									acceptUrl:
										'https://consent.' +
										t +
										'/__consent/consent-record-cookie?cookieDomain=.' +
										t,
									acceptUrlFallback:
										'https://consent.' +
										t +
										'/__consent/consent-record-cookie?redirect=' +
										n +
										'&cookieDomain=.' +
										t,
									manageCookiesUrl:
										'https://cookies.' +
										t +
										'/preferences/' +
										e +
										'?redirect=' +
										n +
										'&cookieDomain=.' +
										t,
									consentCookieName: 'FTCookieConsentGDPR',
									privacyMessage: !1,
								};
							},
						},
					]),
					(0, d.default)(
						t,
						[
							{
								key: 'displayPrivacyMessage',
								value: function (t) {
									if (this.options.privacyMessage)
										return new f(
											this.cookieMessageElement,
											this.options.cookieMessageClass,
											t
										);
								},
							},
							{
								key: 'createCookieMessage',
								value: function () {
									if (this.cookieMessageElement) {
										this.banner ||
											(this.banner = new h(this.cookieMessageElement, {
												autoOpen: !0,
												suppressCloseButton: !0,
												theme: this.options.theme,
												bannerClass: this.options.cookieMessageClass,
												bannerClosedClass:
													this.options.cookieMessageClass + '--closed',
												outerClass: this.options.cookieMessageClass + '__outer',
												innerClass: this.options.cookieMessageClass + '__inner',
												contentClass:
													this.options.cookieMessageClass + '__content',
												contentLongClass:
													this.options.cookieMessageClass + '__content--long',
												contentShortClass:
													this.options.cookieMessageClass + '__content--short',
												actionsClass:
													this.options.cookieMessageClass + '__actions',
												actionClass: this.options.cookieMessageClass + '__action',
												actionSecondaryClass:
													this.options.cookieMessageClass + '__action--secondary',
												buttonClass: this.options.cookieMessageClass + '__button',
												linkClass: this.options.cookieMessageClass + '__link',
												contentLong:
													'\n\t\t\t\t\t<header class="' +
													this.options.cookieMessageClass +
													'__heading">\n\t\t\t\t\t\t<h1>Cookies on the FT</h1>\n\t\t\t\t\t</header>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tWe use <a href="http://help.ft.com/help/legal-privacy/cookies/" class="o-cookie-message__link o-cookie-message__link--external" target="_blank" rel="noopener">cookies</a>\n\t\t\t\t\t\tfor a number of reasons, such as keeping FT Sites reliable and secure, personalising\n\t\t\t\t\t\tcontent and ads, providing social media features and to analyse how our Sites are used.\n\t\t\t\t\t</p>\n\t\t\t\t',
												buttonLabel: 'Accept & continue',
												buttonUrl: this.options.acceptUrlFallback,
												linkLabel: 'Manage cookies',
												linkUrl: this.options.manageCookiesUrl,
											}));
									}
								},
							},
							{
								key: 'updateConsent',
								value: function () {
									var t = this,
										e = document.querySelector(
											'.' + this.banner.options.buttonClass
										);
									e &&
										e.addEventListener('click', function (e) {
											return (
												e.preventDefault(),
												t.dispatchEvent('oCookieMessage.act'),
												t.removeCookieMessage(),
												fetch(t.options.acceptUrl, {
													method: 'get',
													credentials: 'include',
												})
											);
										});
								},
							},
							{
								key: 'shouldShowCookieMessage',
								value: function () {
									return !document.cookie.includes(
										'' + this.options.consentCookieName
									);
								},
							},
							{
								key: 'showCookieMessage',
								value: function () {
									if (this.cookieMessageElement) {
										this.cookieMessageElement.classList.add(
											this.options.cookieMessageClass + '--active'
										),
											this.dispatchEvent('oCookieMessage.view'),
											this.updateConsent();
									}
								},
							},
							{
								key: 'removeCookieMessage',
								value: function () {
									if (this.cookieMessageElement && this.cookieMessageElement.parentNode) {
										this.dispatchEvent('oCookieMessage.close'),
											this.cookieMessageElement.parentNode.removeChild(
												this.cookieMessageElement
											);
									}
								},
							},
							{
								key: 'dispatchEvent',
								value: function (t) {
									var e = new CustomEvent(t, { bubbles: !0 });
									this.cookieMessageElement.dispatchEvent(e);
								},
							},
						],
						[
							{
								key: 'getOptionsFromDom',
								value: function (t) {
									return t instanceof HTMLElement
										? (0, r.default)(t.dataset).reduce(function (e, n) {
												if ('oComponent' === n) return e;
												var o = n.replace(
														/^oCookieMessage(\w)(\w+)$/,
														function (t, e, n) {
															return e.toLowerCase() + n;
														}
													),
													i = t.dataset[n];
												try {
													e[o] = JSON.parse(i.replace(/\'/g, '"'));
												} catch (t) {
													e[o] = i;
												}
												return e;
										  }, {})
										: {};
								},
							},
							{
								key: 'init',
								value: function (e, n) {
									return (
										e || (e = document.body),
										e instanceof HTMLElement || (e = document.querySelector(e)),
										e instanceof HTMLElement &&
										/\bo-cookie-message\b/.test(
											e.getAttribute('data-o-component')
										)
											? new t(e, n)
											: new t(
													e.querySelector(
														'[data-o-component="o-cookie-message"]'
													),
													n
											  )
									);
								},
							},
						]
					),
					t
				);
			})();
		(e.default = p), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(9),
			r = o(i),
			s = n(7),
			a = o(s),
			l = n(22),
			u = o(l),
			c = n(1),
			d = o(c),
			h = n(2),
			f = o(h),
			p = (function () {
				function t(e, n) {
					(0, d.default)(this, t), (this.bannerElement = e);
					var o = n && n.bannerClass ? n.bannerClass : 'o-banner';
					this.options = (0, u.default)(
						{},
						{
							autoOpen: !0,
							suppressCloseButton: !1,
							closeExistingBanners: !0,
							appendTo: document.body,
							bannerClass: o,
							bannerClosedClass: o + '--closed',
							outerClass: o + '__outer',
							innerClass: o + '__inner',
							contentClass: o + '__content',
							contentLongClass: o + '__content--long',
							contentShortClass: o + '__content--short',
							actionsClass: o + '__actions',
							actionClass: o + '__action',
							actionSecondaryClass: o + '__action--secondary',
							buttonClass: o + '__button',
							linkClass: o + '__link',
							closeButtonClass: o + '__close',
							contentLong: '&hellip;',
							contentShort: null,
							buttonLabel: 'OK',
							buttonUrl: '#',
							linkLabel: null,
							linkUrl: '#',
							closeButtonLabel: 'Close',
							theme: null,
						},
						n || t.getOptionsFromDom(e)
					);
					try {
						if (
							('string' == typeof this.options.appendTo &&
								(this.options.appendTo = document.querySelector(
									this.options.appendTo
								)),
							this.options.appendTo instanceof HTMLElement != !0)
						)
							throw new Error('It is not an Node instance.');
					} catch (t) {
						throw new Error(
							'Cound not find the element to append the banner to: ' +
								t.message,
							this
						);
					}
					this.render(),
						this.options.closeExistingBanners
							? (t._bannerInstances.forEach(function (t) {
									return t.close();
							  }),
							  (t._bannerInstances = [this]))
							: t._bannerInstances.push(this),
						this.options.autoOpen ? this.open() : this.close();
				}
				return (
					(0, f.default)(
						t,
						[
							{
								key: 'render',
								value: function () {
									this.bannerElement instanceof HTMLElement
										? '' === this.bannerElement.innerHTML.trim()
											? (this.bannerElement = this.buildBannerElement(
													this.bannerElement
											  ))
											: this.bannerElement.querySelector(
													'.' + this.options.outerClass
											  ) ||
											  ((this.options.contentLong =
													this.bannerElement.innerHTML),
											  (this.options.contentShort = null),
											  (this.bannerElement = this.buildBannerElement(
													this.bannerElement
											  )))
										: ((this.bannerElement = this.buildBannerElement()),
										  this.options.appendTo.appendChild(this.bannerElement)),
										(this.innerElement = this.bannerElement.querySelector(
											'[data-o-banner-inner]'
										)),
										this.options.suppressCloseButton ||
											((this.closeButtonElement =
												this.buildCloseButtonElement()),
											this.innerElement.appendChild(this.closeButtonElement));
								},
							},
							{
								key: 'open',
								value: function () {
									this.bannerElement.classList.remove(
										this.options.bannerClosedClass
									),
										this.bannerElement.dispatchEvent(
											new CustomEvent('o.bannerOpened')
										);
								},
							},
							{
								key: 'close',
								value: function () {
									this.bannerElement.classList.add(
										this.options.bannerClosedClass
									),
										this.bannerElement.dispatchEvent(
											new CustomEvent('o.bannerClosed')
										);
								},
							},
							{
								key: 'buildBannerElement',
								value: function (t) {
									var e = this;
									(t = t || document.createElement('div')),
										(t.innerHTML = ''),
										t.classList.add(this.options.bannerClass);
									var n = [];
									this.options.theme &&
										(n = Array.isArray(this.options.theme)
											? this.options.theme
											: [this.options.theme]),
										n.forEach(function (n) {
											t.classList.add(e.options.bannerClass + '--' + n);
										});
									var o = void 0;
									o = this.options.contentShort
										? '\n\t\t\t\t<div class="' +
										  this.options.contentClass +
										  ' ' +
										  this.options.contentLongClass +
										  '">\n\t\t\t\t\t' +
										  this.options.contentLong +
										  '\n\t\t\t\t</div>\n\t\t\t\t<div class="' +
										  this.options.contentClass +
										  ' ' +
										  this.options.contentShortClass +
										  '">\n\t\t\t\t\t' +
										  this.options.contentShort +
										  '\n\t\t\t\t</div>\n\t\t\t'
										: '\n\t\t\t\t<div class="' +
										  this.options.contentClass +
										  '">\n\t\t\t\t\t' +
										  this.options.contentLong +
										  '\n\t\t\t\t</div>\n\t\t\t';
									var i = '';
									return (
										this.options.linkLabel &&
											(i =
												'\n\t\t\t\t<div class="' +
												this.options.actionClass +
												' ' +
												this.options.actionSecondaryClass +
												'">\n\t\t\t\t\t<a href="' +
												this.options.linkUrl +
												'" class="' +
												this.options.linkClass +
												'">' +
												this.options.linkLabel +
												'</a>\n\t\t\t\t</div>\n\t\t\t'),
										(t.innerHTML =
											'\n\t\t\t<div class="' +
											this.options.outerClass +
											'">\n\t\t\t\t<div class="' +
											this.options.innerClass +
											'" data-o-banner-inner="">\n\t\t\t\t\t' +
											o +
											'\n\t\t\t\t\t<div class="' +
											this.options.actionsClass +
											'">\n\t\t\t\t\t\t<div class="' +
											this.options.actionClass +
											'">\n\t\t\t\t\t\t\t<a href="' +
											this.options.buttonUrl +
											'" class="' +
											this.options.buttonClass +
											'">' +
											this.options.buttonLabel +
											'</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t' +
											i +
											'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'),
										t
									);
								},
							},
							{
								key: 'buildCloseButtonElement',
								value: function () {
									var t = this,
										e = document.createElement('button');
									return (
										(e.className = this.options.closeButtonClass),
										e.setAttribute('aria-label', this.options.closeButtonLabel),
										e.setAttribute('title', this.options.closeButtonLabel),
										e.addEventListener('click', function (e) {
											t.close(), e.preventDefault();
										}),
										e
									);
								},
							},
						],
						[
							{
								key: 'getOptionsFromDom',
								value: function (t) {
									return t instanceof HTMLElement
										? (0, a.default)(t.dataset).reduce(function (e, n) {
												if ('oComponent' === n) return e;
												var o = n.replace(
														/^oBanner(\w)(\w+)$/,
														function (t, e, n) {
															return e.toLowerCase() + n;
														}
													),
													i = t.dataset[n];
												try {
													e[o] = JSON.parse(i.replace(/\'/g, '"'));
												} catch (t) {
													e[o] = i;
												}
												return e;
										  }, {})
										: {};
								},
							},
							{
								key: 'init',
								value: function (e, n) {
									return (
										e || (e = document.body),
										e instanceof HTMLElement || (e = document.querySelector(e)),
										e instanceof HTMLElement &&
										/\bo-banner\b/.test(e.getAttribute('data-o-component'))
											? new t(e, n)
											: (0, r.default)(
													e.querySelectorAll('[data-o-component="o-banner"]'),
													function (e) {
														return new t(e, n);
													}
											  )
									);
								},
							},
						]
					),
					t
				);
			})();
		(p._bannerInstances = []), (e.default = p), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			return t && t.__esModule ? t : { default: t };
		}
		Object.defineProperty(e, '__esModule', { value: !0 });
		var i = n(1),
			r = o(i),
			s = n(2),
			a = o(s),
			l = n(154),
			u = n(21),
			c = (function () {
				function t(e, n, o) {
					(0, r.default)(this, t),
						(this.cookieMessageEl = e),
						(this.options = { position: o, baseClass: n }),
						l.local.get('PRIVACY_POLICY_DISMISSED') ||
							((this.policyMessageEl = this.buildElement()), this.render());
				}
				return (
					(0, a.default)(t, [
						{
							key: 'buildElement',
							value: function () {
								var t = document.createElement('div');
								return (
									t.classList.add(
										'privacy-policy-message',
										this.options.baseClass + '__inner'
									),
									(t.innerHTML =
										'\n\t\t\t<h5>Privacy</h5>\n\t\t\t<p>\n\t\t\t\tWe take your privacy as seriously as we take our journalism. Please review our updated\n\t\t\t\t<a href="https://help.ft.com/help/legal-privacy/privacy/" class="' +
										this.options.baseClass +
										'__link ' +
										this.options.baseClass +
										'__link--external" target="_blank" rel="noopener">privacy</a> and\n\t\t\t\t<a href="https://help.ft.com/help/legal-privacy/cookies/" class="' +
										this.options.baseClass +
										'__link ' +
										this.options.baseClass +
										'__link--external" target="_blank" rel="noopener">cookie</a> policies.\n\t\t\t</p>\n\t\t'),
									t.append(this.buildCloseButtonElement()),
									t
								);
							},
						},
						{
							key: 'buildCloseButtonElement',
							value: function () {
								var t = this,
									e = document.createElement('button');
								return (
									(e.className = this.options.baseClass + '__close'),
									e.setAttribute('role', 'button'),
									e.setAttribute('aria-label', 'Close'),
									e.setAttribute('title', 'Close'),
									e.addEventListener('click', function (e) {
										l.local.set('PRIVACY_POLICY_DISMISSED', !0),
											t.removePrivacyPolicyMessage(),
											e.preventDefault();
									}),
									e
								);
							},
						},
						{
							key: 'removePrivacyPolicyMessage',
							value: function () {
								this.policyMessageEl.parentNode.removeChild(
									this.policyMessageEl
								);
							},
						},
						{
							key: 'repositionOnResize',
							value: function () {
								var t = this;
								u.listenTo('resize'),
									document.body.addEventListener(
										'oViewport.resize',
										function () {
											t.policyMessageEl.style.bottom =
												t.cookieMessageEl.clientHeight + 20 + 'px';
										}
									);
							},
						},
						{
							key: 'render',
							value: function () {
								'top' === this.options.position
									? (this.repositionOnResize(),
									  (this.policyMessageEl.style.bottom =
											this.cookieMessageEl.clientHeight + 'px'),
									  document.body.insertBefore(
											this.policyMessageEl,
											this.cookieMessageEl
									  ))
									: ((this.policyMessageEl.style.bottom = 0),
									  document.body.append(this.policyMessageEl)),
									this.policyMessageEl.classList.add(
										'privacy-policy-message__' + this.options.position
									);
							},
						},
					]),
					t
				);
			})();
		(e.default = c), (t.exports = e.default);
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			try {
				this.storage = window[t];
			} catch (t) {
				a = !1;
			}
			(this.keys = {}),
				(this.store = {}),
				window.addEventListener(
					'storage',
					function (t) {
						this.keys[t.key] &&
							((this.keys[t.key] = !0),
							(this.store[t.key] = JSON.parse(t.newValue)));
					}.bind(this)
				);
		}
		var i = n(30),
			r = (function (t) {
				return t && t.__esModule ? t : { default: t };
			})(i),
			s = function (t) {
				return String(t).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
			},
			a = !0;
		(o.prototype.get = function (t) {
			if (1 !== arguments.length)
				throw Error(
					'get expects 1 argument, ' + arguments.length + ' given; ' + t
				);
			if (!this.keys[t] && a) {
				var e;
				try {
					e = this.storage[t];
				} catch (t) {
					a = !1;
				}
				e && (e = JSON.parse(e)), (this.store[t] = e), (this.keys[t] = !0);
			}
			return this.store[t];
		}),
			(o.prototype.set = function (t, e) {
				if (2 !== arguments.length)
					throw Error(
						'set expects 2 arguments, ' + arguments.length + ' given; ' + t
					);
				if (a)
					try {
						this.storage[t] = (0, r.default)(e);
					} catch (t) {
						if (22 !== t.code) throw t;
						a = !1;
					}
				return (this.store[t] = e), (this.keys[t] = !0), e;
			}),
			(o.prototype.unset = function (t) {
				delete this.store[t], delete this.keys[t], this.storage.removeItem(t);
			}),
			(o.prototype.clear = function (t) {
				if (!t)
					return (
						a && this.storage.clear(), (this.store = {}), void (this.keys = {})
					);
				t = s(t);
				var e = new RegExp('^' + t);
				for (var n in this.keys) n.match(e) && this.unset(n);
			}),
			(t.exports.isPersisting = function () {
				return a;
			}),
			(t.exports.local = new o('localStorage')),
			(t.exports.session = new o('sessionStorage'));
	},
	function (t, e, n) {
		'use strict';
		function o(t) {
			t in i ||
				((i[t] = !0), document.dispatchEvent(new CustomEvent('o.' + t)));
		}
		var i = {};
		window.addEventListener('load', o.bind(null, 'load')),
			window.addEventListener('load', o.bind(null, 'DOMContentLoaded')),
			document.addEventListener(
				'DOMContentLoaded',
				o.bind(null, 'DOMContentLoaded')
			),
			(document.onreadystatechange = function () {
				'complete' === document.readyState
					? (o('DOMContentLoaded'), o('load'))
					: 'interactive' !== document.readyState ||
					  document.attachEvent ||
					  o('DOMContentLoaded');
			}),
			'complete' === document.readyState
				? (o('DOMContentLoaded'), o('load'))
				: 'interactive' !== document.readyState ||
				  document.attachEvent ||
				  o('DOMContentLoaded');
	},
]);
