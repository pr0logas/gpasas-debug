/*! For license information please see 798.main.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
	[798], {
		859: function(e, o, r) {
			e.exports = r(902)
		},
		902: function(e) {
			function o(e, o) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, o) {
					var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
					if (null != r) {
						var t, n, s = [],
							a = !0,
							c = !1;
						try {
							for (r = r.call(e); !(a = (t = r.next()).done) && (s.push(t.value), !o || s.length !== o); a = !0);
						} catch (e) {
							c = !0, n = e
						} finally {
							try {
								a || null == r.return || r.return()
							} finally {
								if (c) throw n
							}
						}
						return s
					}
				}(e, o) || r(e, o) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function r(e, o) {
				if (e) {
					if ("string" == typeof e) return t(e, o);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, o) : void 0
				}
			}

			function t(e, o) {
				(null == o || o > e.length) && (o = e.length);
				for (var r = 0, t = new Array(o); r < o; r++) t[r] = e[r];
				return t
			}
			var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
				s = function(e, o) {
					return [Math.floor(e / o), e % o]
				};
			e.exports = {
				encode: function(e) {
					"string" == typeof e && (e = Buffer.from(e));
					for (var r = "", t = 0; t < e.length; t += 2)
						if (e.length - t > 1) {
							var a = (e[t] << 8) + e[t + 1],
								c = o(s(a, 2025), 2),
								i = c[0],
								l = c[1],
								d = o(s(l, 45), 2),
								u = d[0],
								f = d[1];
							r += n[f] + n[u] + n[i]
						} else {
							var B = o(s(e[t], 45), 2),
								k = B[0],
								h = B[1];
							r += n[h] + n[k]
						} return r
				},
				decode: function(e) {
					for (var o = Array.from(e).map((function(e) {
							return n.indexOf(e)
						})), a = [], c = 0; c < o.length; c += 3)
						if (o.length - c >= 3) {
							var i = o[c] + 45 * o[c + 1] + 45 * o[c + 2] * 45;
							a.push.apply(a, function(e) {
								if (Array.isArray(e)) return t(e)
							}(d = s(i, 256)) || function(e) {
								if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
							}(d) || r(d) || function() {
								throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
							}())
						} else {
							var l = o[c] + 45 * o[c + 1];
							a.push(l)
						} var d;
					return Buffer.from(a)
				}
			}
		},
		305: function(e, o) {
			"use strict";
			o.byteLength = function(e) {
				var o = i(e),
					r = o[0],
					t = o[1];
				return 3 * (r + t) / 4 - t
			}, o.toByteArray = function(e) {
				var o, r, s = i(e),
					a = s[0],
					c = s[1],
					l = new n(function(e, o, r) {
						return 3 * (o + r) / 4 - r
					}(0, a, c)),
					d = 0,
					u = c > 0 ? a - 4 : a;
				for (r = 0; r < u; r += 4) o = t[e.charCodeAt(r)] << 18 | t[e.charCodeAt(r + 1)] << 12 | t[e.charCodeAt(r + 2)] << 6 | t[e.charCodeAt(r + 3)], l[d++] = o >> 16 & 255, l[d++] = o >> 8 & 255, l[d++] = 255 & o;
				return 2 === c && (o = t[e.charCodeAt(r)] << 2 | t[e.charCodeAt(r + 1)] >> 4, l[d++] = 255 & o), 1 === c && (o = t[e.charCodeAt(r)] << 10 | t[e.charCodeAt(r + 1)] << 4 | t[e.charCodeAt(r + 2)] >> 2, l[d++] = o >> 8 & 255, l[d++] = 255 & o), l
			}, o.fromByteArray = function(e) {
				for (var o, t = e.length, n = t % 3, s = [], a = 16383, c = 0, i = t - n; c < i; c += a) s.push(l(e, c, c + a > i ? i : c + a));
				return 1 === n ? (o = e[t - 1], s.push(r[o >> 2] + r[o << 4 & 63] + "==")) : 2 === n && (o = (e[t - 2] << 8) + e[t - 1], s.push(r[o >> 10] + r[o >> 4 & 63] + r[o << 2 & 63] + "=")), s.join("")
			};
			for (var r = [], t = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a) r[a] = s[a], t[s.charCodeAt(a)] = a;

			function i(e) {
				var o = e.length;
				if (o % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
				var r = e.indexOf("=");
				return -1 === r && (r = o), [r, r === o ? 0 : 4 - r % 4]
			}

			function l(e, o, t) {
				for (var n, s, a = [], c = o; c < t; c += 3) n = (e[c] << 16 & 16711680) + (e[c + 1] << 8 & 65280) + (255 & e[c + 2]), a.push(r[(s = n) >> 18 & 63] + r[s >> 12 & 63] + r[s >> 6 & 63] + r[63 & s]);
				return a.join("")
			}
			t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63
		},
		583: function(e, o, r) {
			"use strict";

			function t(e, o) {
				if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
			}

			function n(e, o) {
				for (var r = 0; r < o.length; r++) {
					var t = o[r];
					t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
				}
			}

			function s(e, o) {
				return (s = Object.setPrototypeOf || function(e, o) {
					return e.__proto__ = o, e
				})(e, o)
			}

			function a(e, o) {
				return !o || "object" !== l(o) && "function" != typeof o ? c(e) : o
			}

			function c(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function i(e) {
				return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				})(e)
			}

			function l(e) {
				return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			var d = r(305),
				u = r(847),
				f = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
			o.lW = h, o.h2 = 50;
			var B = 2147483647;

			function k(e) {
				if (e > B) throw new RangeError('The value "' + e + '" is invalid for option "size"');
				var o = new Uint8Array(e);
				return Object.setPrototypeOf(o, h.prototype), o
			}

			function h(e, o, r) {
				if ("number" == typeof e) {
					if ("string" == typeof o) throw new TypeError('The "string" argument must be of type string. Received type number');
					return p(e)
				}
				return m(e, o, r)
			}

			function m(e, o, r) {
				if ("string" == typeof e) return function(e, o) {
					if ("string" == typeof o && "" !== o || (o = "utf8"), !h.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
					var r = 0 | P(e, o),
						t = k(r),
						n = t.write(e, o);
					return n !== r && (t = t.slice(0, n)), t
				}(e, o);
				if (ArrayBuffer.isView(e)) return function(e) {
					if (re(e, Uint8Array)) {
						var o = new Uint8Array(e);
						return y(o.buffer, o.byteOffset, o.byteLength)
					}
					return C(e)
				}(e);
				if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + l(e));
				if (re(e, ArrayBuffer) || e && re(e.buffer, ArrayBuffer)) return y(e, o, r);
				if ("undefined" != typeof SharedArrayBuffer && (re(e, SharedArrayBuffer) || e && re(e.buffer, SharedArrayBuffer))) return y(e, o, r);
				if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
				var t = e.valueOf && e.valueOf();
				if (null != t && t !== e) return h.from(t, o, r);
				var n = function(e) {
					if (h.isBuffer(e)) {
						var o = 0 | v(e.length),
							r = k(o);
						return 0 === r.length || e.copy(r, 0, 0, o), r
					}
					return void 0 !== e.length ? "number" != typeof e.length || te(e.length) ? k(0) : C(e) : "Buffer" === e.type && Array.isArray(e.data) ? C(e.data) : void 0
				}(e);
				if (n) return n;
				if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return h.from(e[Symbol.toPrimitive]("string"), o, r);
				throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + l(e))
			}

			function w(e) {
				if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
				if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
			}

			function p(e) {
				return w(e), k(e < 0 ? 0 : 0 | v(e))
			}

			function C(e) {
				for (var o = e.length < 0 ? 0 : 0 | v(e.length), r = k(o), t = 0; t < o; t += 1) r[t] = 255 & e[t];
				return r
			}

			function y(e, o, r) {
				if (o < 0 || e.byteLength < o) throw new RangeError('"offset" is outside of buffer bounds');
				if (e.byteLength < o + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
				var t;
				return t = void 0 === o && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, o) : new Uint8Array(e, o, r), Object.setPrototypeOf(t, h.prototype), t
			}

			function v(e) {
				if (e >= B) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + B.toString(16) + " bytes");
				return 0 | e
			}

			function P(e, o) {
				if (h.isBuffer(e)) return e.length;
				if (ArrayBuffer.isView(e) || re(e, ArrayBuffer)) return e.byteLength;
				if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + l(e));
				var r = e.length,
					t = arguments.length > 2 && !0 === arguments[2];
				if (!t && 0 === r) return 0;
				for (var n = !1;;) switch (o) {
					case "ascii":
					case "latin1":
					case "binary":
						return r;
					case "utf8":
					case "utf-8":
						return Q(e).length;
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return 2 * r;
					case "hex":
						return r >>> 1;
					case "base64":
						return ee(e).length;
					default:
						if (n) return t ? -1 : Q(e).length;
						o = ("" + o).toLowerCase(), n = !0
				}
			}

			function g(e, o, r) {
				var t = !1;
				if ((void 0 === o || o < 0) && (o = 0), o > this.length) return "";
				if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
				if ((r >>>= 0) <= (o >>>= 0)) return "";
				for (e || (e = "utf8");;) switch (e) {
					case "hex":
						return T(this, o, r);
					case "utf8":
					case "utf-8":
						return U(this, o, r);
					case "ascii":
						return N(this, o, r);
					case "latin1":
					case "binary":
						return _(this, o, r);
					case "base64":
						return S(this, o, r);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return j(this, o, r);
					default:
						if (t) throw new TypeError("Unknown encoding: " + e);
						e = (e + "").toLowerCase(), t = !0
				}
			}

			function b(e, o, r) {
				var t = e[o];
				e[o] = e[r], e[r] = t
			}

			function M(e, o, r, t, n) {
				if (0 === e.length) return -1;
				if ("string" == typeof r ? (t = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), te(r = +r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
					if (n) return -1;
					r = e.length - 1
				} else if (r < 0) {
					if (!n) return -1;
					r = 0
				}
				if ("string" == typeof o && (o = h.from(o, t)), h.isBuffer(o)) return 0 === o.length ? -1 : x(e, o, r, t, n);
				if ("number" == typeof o) return o &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, o, r) : Uint8Array.prototype.lastIndexOf.call(e, o, r) : x(e, [o], r, t, n);
				throw new TypeError("val must be string, number or Buffer")
			}

			function x(e, o, r, t, n) {
				var s, a = 1,
					c = e.length,
					i = o.length;
				if (void 0 !== t && ("ucs2" === (t = String(t).toLowerCase()) || "ucs-2" === t || "utf16le" === t || "utf-16le" === t)) {
					if (e.length < 2 || o.length < 2) return -1;
					a = 2, c /= 2, i /= 2, r /= 2
				}

				function l(e, o) {
					return 1 === a ? e[o] : e.readUInt16BE(o * a)
				}
				if (n) {
					var d = -1;
					for (s = r; s < c; s++)
						if (l(e, s) === l(o, -1 === d ? 0 : s - d)) {
							if (-1 === d && (d = s), s - d + 1 === i) return d * a
						} else -1 !== d && (s -= s - d), d = -1
				} else
					for (r + i > c && (r = c - i), s = r; s >= 0; s--) {
						for (var u = !0, f = 0; f < i; f++)
							if (l(e, s + f) !== l(o, f)) {
								u = !1;
								break
							} if (u) return s
					}
				return -1
			}

			function E(e, o, r, t) {
				r = Number(r) || 0;
				var n = e.length - r;
				t ? (t = Number(t)) > n && (t = n) : t = n;
				var s, a = o.length;
				for (t > a / 2 && (t = a / 2), s = 0; s < t; ++s) {
					var c = parseInt(o.substr(2 * s, 2), 16);
					if (te(c)) return s;
					e[r + s] = c
				}
				return s
			}

			function I(e, o, r, t) {
				return oe(Q(o, e.length - r), e, r, t)
			}

			function L(e, o, r, t) {
				return oe(function(e) {
					for (var o = [], r = 0; r < e.length; ++r) o.push(255 & e.charCodeAt(r));
					return o
				}(o), e, r, t)
			}

			function A(e, o, r, t) {
				return oe(ee(o), e, r, t)
			}

			function O(e, o, r, t) {
				return oe(function(e, o) {
					for (var r, t, n, s = [], a = 0; a < e.length && !((o -= 2) < 0); ++a) t = (r = e.charCodeAt(a)) >> 8, n = r % 256, s.push(n), s.push(t);
					return s
				}(o, e.length - r), e, r, t)
			}

			function S(e, o, r) {
				return 0 === o && r === e.length ? d.fromByteArray(e) : d.fromByteArray(e.slice(o, r))
			}

			function U(e, o, r) {
				r = Math.min(e.length, r);
				for (var t = [], n = o; n < r;) {
					var s = e[n],
						a = null,
						c = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
					if (n + c <= r) {
						var i = void 0,
							l = void 0,
							d = void 0,
							u = void 0;
						switch (c) {
							case 1:
								s < 128 && (a = s);
								break;
							case 2:
								128 == (192 & (i = e[n + 1])) && (u = (31 & s) << 6 | 63 & i) > 127 && (a = u);
								break;
							case 3:
								i = e[n + 1], l = e[n + 2], 128 == (192 & i) && 128 == (192 & l) && (u = (15 & s) << 12 | (63 & i) << 6 | 63 & l) > 2047 && (u < 55296 || u > 57343) && (a = u);
								break;
							case 4:
								i = e[n + 1], l = e[n + 2], d = e[n + 3], 128 == (192 & i) && 128 == (192 & l) && 128 == (192 & d) && (u = (15 & s) << 18 | (63 & i) << 12 | (63 & l) << 6 | 63 & d) > 65535 && u < 1114112 && (a = u)
						}
					}
					null === a ? (a = 65533, c = 1) : a > 65535 && (a -= 65536, t.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), t.push(a), n += c
				}
				return function(e) {
					var o = e.length;
					if (o <= R) return String.fromCharCode.apply(String, e);
					for (var r = "", t = 0; t < o;) r += String.fromCharCode.apply(String, e.slice(t, t += R));
					return r
				}(t)
			}
			h.TYPED_ARRAY_SUPPORT = function() {
				try {
					var e = new Uint8Array(1),
						o = {
							foo: function() {
								return 42
							}
						};
					return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(e, o), 42 === e.foo()
				} catch (e) {
					return !1
				}
			}(), h.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(h.prototype, "parent", {
				enumerable: !0,
				get: function() {
					if (h.isBuffer(this)) return this.buffer
				}
			}), Object.defineProperty(h.prototype, "offset", {
				enumerable: !0,
				get: function() {
					if (h.isBuffer(this)) return this.byteOffset
				}
			}), h.poolSize = 8192, h.from = function(e, o, r) {
				return m(e, o, r)
			}, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array), h.alloc = function(e, o, r) {
				return function(e, o, r) {
					return w(e), e <= 0 ? k(e) : void 0 !== o ? "string" == typeof r ? k(e).fill(o, r) : k(e).fill(o) : k(e)
				}(e, o, r)
			}, h.allocUnsafe = function(e) {
				return p(e)
			}, h.allocUnsafeSlow = function(e) {
				return p(e)
			}, h.isBuffer = function(e) {
				return null != e && !0 === e._isBuffer && e !== h.prototype
			}, h.compare = function(e, o) {
				if (re(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), re(o, Uint8Array) && (o = h.from(o, o.offset, o.byteLength)), !h.isBuffer(e) || !h.isBuffer(o)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
				if (e === o) return 0;
				for (var r = e.length, t = o.length, n = 0, s = Math.min(r, t); n < s; ++n)
					if (e[n] !== o[n]) {
						r = e[n], t = o[n];
						break
					} return r < t ? -1 : t < r ? 1 : 0
			}, h.isEncoding = function(e) {
				switch (String(e).toLowerCase()) {
					case "hex":
					case "utf8":
					case "utf-8":
					case "ascii":
					case "latin1":
					case "binary":
					case "base64":
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return !0;
					default:
						return !1
				}
			}, h.concat = function(e, o) {
				if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
				if (0 === e.length) return h.alloc(0);
				var r;
				if (void 0 === o)
					for (o = 0, r = 0; r < e.length; ++r) o += e[r].length;
				var t = h.allocUnsafe(o),
					n = 0;
				for (r = 0; r < e.length; ++r) {
					var s = e[r];
					if (re(s, Uint8Array)) n + s.length > t.length ? (h.isBuffer(s) || (s = h.from(s)), s.copy(t, n)) : Uint8Array.prototype.set.call(t, s, n);
					else {
						if (!h.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
						s.copy(t, n)
					}
					n += s.length
				}
				return t
			}, h.byteLength = P, h.prototype._isBuffer = !0, h.prototype.swap16 = function() {
				var e = this.length;
				if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
				for (var o = 0; o < e; o += 2) b(this, o, o + 1);
				return this
			}, h.prototype.swap32 = function() {
				var e = this.length;
				if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
				for (var o = 0; o < e; o += 4) b(this, o, o + 3), b(this, o + 1, o + 2);
				return this
			}, h.prototype.swap64 = function() {
				var e = this.length;
				if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
				for (var o = 0; o < e; o += 8) b(this, o, o + 7), b(this, o + 1, o + 6), b(this, o + 2, o + 5), b(this, o + 3, o + 4);
				return this
			}, h.prototype.toString = function() {
				var e = this.length;
				return 0 === e ? "" : 0 === arguments.length ? U(this, 0, e) : g.apply(this, arguments)
			}, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(e) {
				if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
				return this === e || 0 === h.compare(this, e)
			}, h.prototype.inspect = function() {
				var e = "",
					r = o.h2;
				return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
			}, f && (h.prototype[f] = h.prototype.inspect), h.prototype.compare = function(e, o, r, t, n) {
				if (re(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + l(e));
				if (void 0 === o && (o = 0), void 0 === r && (r = e ? e.length : 0), void 0 === t && (t = 0), void 0 === n && (n = this.length), o < 0 || r > e.length || t < 0 || n > this.length) throw new RangeError("out of range index");
				if (t >= n && o >= r) return 0;
				if (t >= n) return -1;
				if (o >= r) return 1;
				if (this === e) return 0;
				for (var s = (n >>>= 0) - (t >>>= 0), a = (r >>>= 0) - (o >>>= 0), c = Math.min(s, a), i = this.slice(t, n), d = e.slice(o, r), u = 0; u < c; ++u)
					if (i[u] !== d[u]) {
						s = i[u], a = d[u];
						break
					} return s < a ? -1 : a < s ? 1 : 0
			}, h.prototype.includes = function(e, o, r) {
				return -1 !== this.indexOf(e, o, r)
			}, h.prototype.indexOf = function(e, o, r) {
				return M(this, e, o, r, !0)
			}, h.prototype.lastIndexOf = function(e, o, r) {
				return M(this, e, o, r, !1)
			}, h.prototype.write = function(e, o, r, t) {
				if (void 0 === o) t = "utf8", r = this.length, o = 0;
				else if (void 0 === r && "string" == typeof o) t = o, r = this.length, o = 0;
				else {
					if (!isFinite(o)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
					o >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === t && (t = "utf8")) : (t = r, r = void 0)
				}
				var n = this.length - o;
				if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || o < 0) || o > this.length) throw new RangeError("Attempt to write outside buffer bounds");
				t || (t = "utf8");
				for (var s = !1;;) switch (t) {
					case "hex":
						return E(this, e, o, r);
					case "utf8":
					case "utf-8":
						return I(this, e, o, r);
					case "ascii":
					case "latin1":
					case "binary":
						return L(this, e, o, r);
					case "base64":
						return A(this, e, o, r);
					case "ucs2":
					case "ucs-2":
					case "utf16le":
					case "utf-16le":
						return O(this, e, o, r);
					default:
						if (s) throw new TypeError("Unknown encoding: " + t);
						t = ("" + t).toLowerCase(), s = !0
				}
			}, h.prototype.toJSON = function() {
				return {
					type: "Buffer",
					data: Array.prototype.slice.call(this._arr || this, 0)
				}
			};
			var R = 4096;

			function N(e, o, r) {
				var t = "";
				r = Math.min(e.length, r);
				for (var n = o; n < r; ++n) t += String.fromCharCode(127 & e[n]);
				return t
			}

			function _(e, o, r) {
				var t = "";
				r = Math.min(e.length, r);
				for (var n = o; n < r; ++n) t += String.fromCharCode(e[n]);
				return t
			}

			function T(e, o, r) {
				var t = e.length;
				(!o || o < 0) && (o = 0), (!r || r < 0 || r > t) && (r = t);
				for (var n = "", s = o; s < r; ++s) n += ne[e[s]];
				return n
			}

			function j(e, o, r) {
				for (var t = e.slice(o, r), n = "", s = 0; s < t.length - 1; s += 2) n += String.fromCharCode(t[s] + 256 * t[s + 1]);
				return n
			}

			function z(e, o, r) {
				if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
				if (e + o > r) throw new RangeError("Trying to access beyond buffer length")
			}

			function X(e, o, r, t, n, s) {
				if (!h.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
				if (o > n || o < s) throw new RangeError('"value" argument is out of bounds');
				if (r + t > e.length) throw new RangeError("Index out of range")
			}

			function F(e, o, r, t, n) {
				J(o, t, n, e, r, 7);
				var s = Number(o & BigInt(4294967295));
				e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s;
				var a = Number(o >> BigInt(32) & BigInt(4294967295));
				return e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, r
			}

			function D(e, o, r, t, n) {
				J(o, t, n, e, r, 7);
				var s = Number(o & BigInt(4294967295));
				e[r + 7] = s, s >>= 8, e[r + 6] = s, s >>= 8, e[r + 5] = s, s >>= 8, e[r + 4] = s;
				var a = Number(o >> BigInt(32) & BigInt(4294967295));
				return e[r + 3] = a, a >>= 8, e[r + 2] = a, a >>= 8, e[r + 1] = a, a >>= 8, e[r] = a, r + 8
			}

			function G(e, o, r, t, n, s) {
				if (r + t > e.length) throw new RangeError("Index out of range");
				if (r < 0) throw new RangeError("Index out of range")
			}

			function Z(e, o, r, t, n) {
				return o = +o, r >>>= 0, n || G(e, 0, r, 4), u.write(e, o, r, t, 23, 4), r + 4
			}

			function V(e, o, r, t, n) {
				return o = +o, r >>>= 0, n || G(e, 0, r, 8), u.write(e, o, r, t, 52, 8), r + 8
			}
			h.prototype.slice = function(e, o) {
				var r = this.length;
				(e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (o = void 0 === o ? r : ~~o) < 0 ? (o += r) < 0 && (o = 0) : o > r && (o = r), o < e && (o = e);
				var t = this.subarray(e, o);
				return Object.setPrototypeOf(t, h.prototype), t
			}, h.prototype.readUintLE = h.prototype.readUIntLE = function(e, o, r) {
				e >>>= 0, o >>>= 0, r || z(e, o, this.length);
				for (var t = this[e], n = 1, s = 0; ++s < o && (n *= 256);) t += this[e + s] * n;
				return t
			}, h.prototype.readUintBE = h.prototype.readUIntBE = function(e, o, r) {
				e >>>= 0, o >>>= 0, r || z(e, o, this.length);
				for (var t = this[e + --o], n = 1; o > 0 && (n *= 256);) t += this[e + --o] * n;
				return t
			}, h.prototype.readUint8 = h.prototype.readUInt8 = function(e, o) {
				return e >>>= 0, o || z(e, 1, this.length), this[e]
			}, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(e, o) {
				return e >>>= 0, o || z(e, 2, this.length), this[e] | this[e + 1] << 8
			}, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(e, o) {
				return e >>>= 0, o || z(e, 2, this.length), this[e] << 8 | this[e + 1]
			}, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(e, o) {
				return e >>>= 0, o || z(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
			}, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(e, o) {
				return e >>>= 0, o || z(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
			}, h.prototype.readBigUInt64LE = se((function(e) {
				W(e >>>= 0, "offset");
				var o = this[e],
					r = this[e + 7];
				void 0 !== o && void 0 !== r || $(e, this.length - 8);
				var t = o + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 24),
					n = this[++e] + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + r * Math.pow(2, 24);
				return BigInt(t) + (BigInt(n) << BigInt(32))
			})), h.prototype.readBigUInt64BE = se((function(e) {
				W(e >>>= 0, "offset");
				var o = this[e],
					r = this[e + 7];
				void 0 !== o && void 0 !== r || $(e, this.length - 8);
				var t = o * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + this[++e],
					n = this[++e] * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + r;
				return (BigInt(t) << BigInt(32)) + BigInt(n)
			})), h.prototype.readIntLE = function(e, o, r) {
				e >>>= 0, o >>>= 0, r || z(e, o, this.length);
				for (var t = this[e], n = 1, s = 0; ++s < o && (n *= 256);) t += this[e + s] * n;
				return t >= (n *= 128) && (t -= Math.pow(2, 8 * o)), t
			}, h.prototype.readIntBE = function(e, o, r) {
				e >>>= 0, o >>>= 0, r || z(e, o, this.length);
				for (var t = o, n = 1, s = this[e + --t]; t > 0 && (n *= 256);) s += this[e + --t] * n;
				return s >= (n *= 128) && (s -= Math.pow(2, 8 * o)), s
			}, h.prototype.readInt8 = function(e, o) {
				return e >>>= 0, o || z(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
			}, h.prototype.readInt16LE = function(e, o) {
				e >>>= 0, o || z(e, 2, this.length);
				var r = this[e] | this[e + 1] << 8;
				return 32768 & r ? 4294901760 | r : r
			}, h.prototype.readInt16BE = function(e, o) {
				e >>>= 0, o || z(e, 2, this.length);
				var r = this[e + 1] | this[e] << 8;
				return 32768 & r ? 4294901760 | r : r
			}, h.prototype.readInt32LE = function(e, o) {
				return e >>>= 0, o || z(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
			}, h.prototype.readInt32BE = function(e, o) {
				return e >>>= 0, o || z(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
			}, h.prototype.readBigInt64LE = se((function(e) {
				W(e >>>= 0, "offset");
				var o = this[e],
					r = this[e + 7];
				void 0 !== o && void 0 !== r || $(e, this.length - 8);
				var t = this[e + 4] + this[e + 5] * Math.pow(2, 8) + this[e + 6] * Math.pow(2, 16) + (r << 24);
				return (BigInt(t) << BigInt(32)) + BigInt(o + this[++e] * Math.pow(2, 8) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 24))
			})), h.prototype.readBigInt64BE = se((function(e) {
				W(e >>>= 0, "offset");
				var o = this[e],
					r = this[e + 7];
				void 0 !== o && void 0 !== r || $(e, this.length - 8);
				var t = (o << 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + this[++e];
				return (BigInt(t) << BigInt(32)) + BigInt(this[++e] * Math.pow(2, 24) + this[++e] * Math.pow(2, 16) + this[++e] * Math.pow(2, 8) + r)
			})), h.prototype.readFloatLE = function(e, o) {
				return e >>>= 0, o || z(e, 4, this.length), u.read(this, e, !0, 23, 4)
			}, h.prototype.readFloatBE = function(e, o) {
				return e >>>= 0, o || z(e, 4, this.length), u.read(this, e, !1, 23, 4)
			}, h.prototype.readDoubleLE = function(e, o) {
				return e >>>= 0, o || z(e, 8, this.length), u.read(this, e, !0, 52, 8)
			}, h.prototype.readDoubleBE = function(e, o) {
				return e >>>= 0, o || z(e, 8, this.length), u.read(this, e, !1, 52, 8)
			}, h.prototype.writeUintLE = h.prototype.writeUIntLE = function(e, o, r, t) {
				e = +e, o >>>= 0, r >>>= 0, t || X(this, e, o, r, Math.pow(2, 8 * r) - 1, 0);
				var n = 1,
					s = 0;
				for (this[o] = 255 & e; ++s < r && (n *= 256);) this[o + s] = e / n & 255;
				return o + r
			}, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(e, o, r, t) {
				e = +e, o >>>= 0, r >>>= 0, t || X(this, e, o, r, Math.pow(2, 8 * r) - 1, 0);
				var n = r - 1,
					s = 1;
				for (this[o + n] = 255 & e; --n >= 0 && (s *= 256);) this[o + n] = e / s & 255;
				return o + r
			}, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 1, 255, 0), this[o] = 255 & e, o + 1
			}, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 2, 65535, 0), this[o] = 255 & e, this[o + 1] = e >>> 8, o + 2
			}, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 2, 65535, 0), this[o] = e >>> 8, this[o + 1] = 255 & e, o + 2
			}, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 4, 4294967295, 0), this[o + 3] = e >>> 24, this[o + 2] = e >>> 16, this[o + 1] = e >>> 8, this[o] = 255 & e, o + 4
			}, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 4, 4294967295, 0), this[o] = e >>> 24, this[o + 1] = e >>> 16, this[o + 2] = e >>> 8, this[o + 3] = 255 & e, o + 4
			}, h.prototype.writeBigUInt64LE = se((function(e) {
				var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return F(this, e, o, BigInt(0), BigInt("0xffffffffffffffff"))
			})), h.prototype.writeBigUInt64BE = se((function(e) {
				var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return D(this, e, o, BigInt(0), BigInt("0xffffffffffffffff"))
			})), h.prototype.writeIntLE = function(e, o, r, t) {
				if (e = +e, o >>>= 0, !t) {
					var n = Math.pow(2, 8 * r - 1);
					X(this, e, o, r, n - 1, -n)
				}
				var s = 0,
					a = 1,
					c = 0;
				for (this[o] = 255 & e; ++s < r && (a *= 256);) e < 0 && 0 === c && 0 !== this[o + s - 1] && (c = 1), this[o + s] = (e / a >> 0) - c & 255;
				return o + r
			}, h.prototype.writeIntBE = function(e, o, r, t) {
				if (e = +e, o >>>= 0, !t) {
					var n = Math.pow(2, 8 * r - 1);
					X(this, e, o, r, n - 1, -n)
				}
				var s = r - 1,
					a = 1,
					c = 0;
				for (this[o + s] = 255 & e; --s >= 0 && (a *= 256);) e < 0 && 0 === c && 0 !== this[o + s + 1] && (c = 1), this[o + s] = (e / a >> 0) - c & 255;
				return o + r
			}, h.prototype.writeInt8 = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[o] = 255 & e, o + 1
			}, h.prototype.writeInt16LE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 2, 32767, -32768), this[o] = 255 & e, this[o + 1] = e >>> 8, o + 2
			}, h.prototype.writeInt16BE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 2, 32767, -32768), this[o] = e >>> 8, this[o + 1] = 255 & e, o + 2
			}, h.prototype.writeInt32LE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 4, 2147483647, -2147483648), this[o] = 255 & e, this[o + 1] = e >>> 8, this[o + 2] = e >>> 16, this[o + 3] = e >>> 24, o + 4
			}, h.prototype.writeInt32BE = function(e, o, r) {
				return e = +e, o >>>= 0, r || X(this, e, o, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[o] = e >>> 24, this[o + 1] = e >>> 16, this[o + 2] = e >>> 8, this[o + 3] = 255 & e, o + 4
			}, h.prototype.writeBigInt64LE = se((function(e) {
				var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return F(this, e, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
			})), h.prototype.writeBigInt64BE = se((function(e) {
				var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return D(this, e, o, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
			})), h.prototype.writeFloatLE = function(e, o, r) {
				return Z(this, e, o, !0, r)
			}, h.prototype.writeFloatBE = function(e, o, r) {
				return Z(this, e, o, !1, r)
			}, h.prototype.writeDoubleLE = function(e, o, r) {
				return V(this, e, o, !0, r)
			}, h.prototype.writeDoubleBE = function(e, o, r) {
				return V(this, e, o, !1, r)
			}, h.prototype.copy = function(e, o, r, t) {
				if (!h.isBuffer(e)) throw new TypeError("argument should be a Buffer");
				if (r || (r = 0), t || 0 === t || (t = this.length), o >= e.length && (o = e.length), o || (o = 0), t > 0 && t < r && (t = r), t === r) return 0;
				if (0 === e.length || 0 === this.length) return 0;
				if (o < 0) throw new RangeError("targetStart out of bounds");
				if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
				if (t < 0) throw new RangeError("sourceEnd out of bounds");
				t > this.length && (t = this.length), e.length - o < t - r && (t = e.length - o + r);
				var n = t - r;
				return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(o, r, t) : Uint8Array.prototype.set.call(e, this.subarray(r, t), o), n
			}, h.prototype.fill = function(e, o, r, t) {
				if ("string" == typeof e) {
					if ("string" == typeof o ? (t = o, o = 0, r = this.length) : "string" == typeof r && (t = r, r = this.length), void 0 !== t && "string" != typeof t) throw new TypeError("encoding must be a string");
					if ("string" == typeof t && !h.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
					if (1 === e.length) {
						var n = e.charCodeAt(0);
						("utf8" === t && n < 128 || "latin1" === t) && (e = n)
					}
				} else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
				if (o < 0 || this.length < o || this.length < r) throw new RangeError("Out of range index");
				if (r <= o) return this;
				var s;
				if (o >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
					for (s = o; s < r; ++s) this[s] = e;
				else {
					var a = h.isBuffer(e) ? e : h.from(e, t),
						c = a.length;
					if (0 === c) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
					for (s = 0; s < r - o; ++s) this[s + o] = a[s % c]
				}
				return this
			};
			var Y = {};

			function K(e, o, r) {
				Y[e] = function(r) {
					! function(e, o) {
						if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(o && o.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), o && s(e, o)
					}(k, r);
					var l, d, u, f, B = (u = k, f = function() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (e) {
							return !1
						}
					}(), function() {
						var e, o = i(u);
						if (f) {
							var r = i(this).constructor;
							e = Reflect.construct(o, arguments, r)
						} else e = o.apply(this, arguments);
						return a(this, e)
					});

					function k() {
						var r;
						return t(this, k), r = B.call(this), Object.defineProperty(c(r), "message", {
							value: o.apply(c(r), arguments),
							writable: !0,
							configurable: !0
						}), r.name = "".concat(r.name, " [").concat(e, "]"), r.stack, delete r.name, r
					}
					return l = k, (d = [{
						key: "code",
						get: function() {
							return e
						},
						set: function(e) {
							Object.defineProperty(this, "code", {
								configurable: !0,
								enumerable: !0,
								value: e,
								writable: !0
							})
						}
					}, {
						key: "toString",
						value: function() {
							return "".concat(this.name, " [").concat(e, "]: ").concat(this.message)
						}
					}]) && n(l.prototype, d), k
				}(r)
			}

			function q(e) {
				for (var o = "", r = e.length, t = "-" === e[0] ? 1 : 0; r >= t + 4; r -= 3) o = "_".concat(e.slice(r - 3, r)).concat(o);
				return "".concat(e.slice(0, r)).concat(o)
			}

			function J(e, o, r, t, n, s) {
				if (e > r || e < o) {
					var a, c = "bigint" == typeof o ? "n" : "";
					throw a = s > 3 ? 0 === o || o === BigInt(0) ? ">= 0".concat(c, " and < 2").concat(c, " ** ").concat(8 * (s + 1)).concat(c) : ">= -(2".concat(c, " ** ").concat(8 * (s + 1) - 1).concat(c, ") and < 2 ** ") + "".concat(8 * (s + 1) - 1).concat(c) : ">= ".concat(o).concat(c, " and <= ").concat(r).concat(c), new Y.ERR_OUT_OF_RANGE("value", a, e)
				}! function(e, o, r) {
					W(o, "offset"), void 0 !== e[o] && void 0 !== e[o + r] || $(o, e.length - (r + 1))
				}(t, n, s)
			}

			function W(e, o) {
				if ("number" != typeof e) throw new Y.ERR_INVALID_ARG_TYPE(o, "number", e)
			}

			function $(e, o, r) {
				if (Math.floor(e) !== e) throw W(e, r), new Y.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
				if (o < 0) throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;
				throw new Y.ERR_OUT_OF_RANGE(r || "offset", ">= ".concat(r ? 1 : 0, " and <= ").concat(o), e)
			}
			K("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
				return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds"
			}), RangeError), K("ERR_INVALID_ARG_TYPE", (function(e, o) {
				return 'The "'.concat(e, '" argument must be of type number. Received type ').concat(l(o))
			}), TypeError), K("ERR_OUT_OF_RANGE", (function(e, o, r) {
				var t = 'The value of "'.concat(e, '" is out of range.'),
					n = r;
				return Number.isInteger(r) && Math.abs(r) > Math.pow(2, 32) ? n = q(String(r)) : "bigint" == typeof r && (n = String(r), (r > Math.pow(BigInt(2), BigInt(32)) || r < -Math.pow(BigInt(2), BigInt(32))) && (n = q(n)), n += "n"), t + " It must be ".concat(o, ". Received ").concat(n)
			}), RangeError);
			var H = /[^+/0-9A-Za-z-_]/g;

			function Q(e, o) {
				var r;
				o = o || 1 / 0;
				for (var t = e.length, n = null, s = [], a = 0; a < t; ++a) {
					if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
						if (!n) {
							if (r > 56319) {
								(o -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							if (a + 1 === t) {
								(o -= 3) > -1 && s.push(239, 191, 189);
								continue
							}
							n = r;
							continue
						}
						if (r < 56320) {
							(o -= 3) > -1 && s.push(239, 191, 189), n = r;
							continue
						}
						r = 65536 + (n - 55296 << 10 | r - 56320)
					} else n && (o -= 3) > -1 && s.push(239, 191, 189);
					if (n = null, r < 128) {
						if ((o -= 1) < 0) break;
						s.push(r)
					} else if (r < 2048) {
						if ((o -= 2) < 0) break;
						s.push(r >> 6 | 192, 63 & r | 128)
					} else if (r < 65536) {
						if ((o -= 3) < 0) break;
						s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
					} else {
						if (!(r < 1114112)) throw new Error("Invalid code point");
						if ((o -= 4) < 0) break;
						s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
					}
				}
				return s
			}

			function ee(e) {
				return d.toByteArray(function(e) {
					if ((e = (e = e.split("=")[0]).trim().replace(H, "")).length < 2) return "";
					for (; e.length % 4 != 0;) e += "=";
					return e
				}(e))
			}

			function oe(e, o, r, t) {
				var n;
				for (n = 0; n < t && !(n + r >= o.length || n >= e.length); ++n) o[n + r] = e[n];
				return n
			}

			function re(e, o) {
				return e instanceof o || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === o.name
			}

			function te(e) {
				return e != e
			}
			var ne = function() {
				for (var e = "0123456789abcdef", o = new Array(256), r = 0; r < 16; ++r)
					for (var t = 16 * r, n = 0; n < 16; ++n) o[t + n] = e[r] + e[n];
				return o
			}();

			function se(e) {
				return "undefined" == typeof BigInt ? ae : e
			}

			function ae() {
				throw new Error("BigInt not supported")
			}
		},
		847: function(e, o) {
			o.read = function(e, o, r, t, n) {
				var s, a, c = 8 * n - t - 1,
					i = (1 << c) - 1,
					l = i >> 1,
					d = -7,
					u = r ? n - 1 : 0,
					f = r ? -1 : 1,
					B = e[o + u];
				for (u += f, s = B & (1 << -d) - 1, B >>= -d, d += c; d > 0; s = 256 * s + e[o + u], u += f, d -= 8);
				for (a = s & (1 << -d) - 1, s >>= -d, d += t; d > 0; a = 256 * a + e[o + u], u += f, d -= 8);
				if (0 === s) s = 1 - l;
				else {
					if (s === i) return a ? NaN : 1 / 0 * (B ? -1 : 1);
					a += Math.pow(2, t), s -= l
				}
				return (B ? -1 : 1) * a * Math.pow(2, s - t)
			}, o.write = function(e, o, r, t, n, s) {
				var a, c, i, l = 8 * s - n - 1,
					d = (1 << l) - 1,
					u = d >> 1,
					f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
					B = t ? 0 : s - 1,
					k = t ? 1 : -1,
					h = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
				for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (c = isNaN(o) ? 1 : 0, a = d) : (a = Math.floor(Math.log(o) / Math.LN2), o * (i = Math.pow(2, -a)) < 1 && (a--, i *= 2), (o += a + u >= 1 ? f / i : f * Math.pow(2, 1 - u)) * i >= 2 && (a++, i /= 2), a + u >= d ? (c = 0, a = d) : a + u >= 1 ? (c = (o * i - 1) * Math.pow(2, n), a += u) : (c = o * Math.pow(2, u - 1) * Math.pow(2, n), a = 0)); n >= 8; e[r + B] = 255 & c, B += k, c /= 256, n -= 8);
				for (a = a << n | c, l += n; l > 0; e[r + B] = 255 & a, B += k, a /= 256, l -= 8);
				e[r + B - k] |= 128 * h
			}
		},
		384: function(e, o, r) {
			var t, n, s, a;

			function c(e) {
				return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			e = r.nmd(e), "undefined" != typeof self && self, a = function() {
				return function(e) {
					var o = {};

					function r(t) {
						if (o[t]) return o[t].exports;
						var n = o[t] = {
							i: t,
							l: !1,
							exports: {}
						};
						return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
					}
					return r.m = e, r.c = o, r.d = function(e, o, t) {
						r.o(e, o) || Object.defineProperty(e, o, {
							configurable: !1,
							enumerable: !0,
							get: t
						})
					}, r.n = function(e) {
						var o = e && e.__esModule ? function() {
							return e.default
						} : function() {
							return e
						};
						return r.d(o, "a", o), o
					}, r.o = function(e, o) {
						return Object.prototype.hasOwnProperty.call(e, o)
					}, r.p = "", r(r.s = 3)
				}([function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = function() {
						function e(e, o) {
							this.width = o, this.height = e.length / o, this.data = e
						}
						return e.createEmpty = function(o, r) {
							return new e(new Uint8ClampedArray(o * r), o)
						}, e.prototype.get = function(e, o) {
							return !(e < 0 || e >= this.width || o < 0 || o >= this.height || !this.data[o * this.width + e])
						}, e.prototype.set = function(e, o, r) {
							this.data[o * this.width + e] = r ? 1 : 0
						}, e.prototype.setRegion = function(e, o, r, t, n) {
							for (var s = o; s < o + t; s++)
								for (var a = e; a < e + r; a++) this.set(a, s, !!n)
						}, e
					}();
					o.BitMatrix = t
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(2);
					o.addOrSubtractGF = function(e, o) {
						return e ^ o
					};
					var n = function() {
						function e(e, o, r) {
							this.primitive = e, this.size = o, this.generatorBase = r, this.expTable = new Array(this.size), this.logTable = new Array(this.size);
							for (var n = 1, s = 0; s < this.size; s++) this.expTable[s] = n, (n *= 2) >= this.size && (n = (n ^ this.primitive) & this.size - 1);
							for (s = 0; s < this.size - 1; s++) this.logTable[this.expTable[s]] = s;
							this.zero = new t.default(this, Uint8ClampedArray.from([0])), this.one = new t.default(this, Uint8ClampedArray.from([1]))
						}
						return e.prototype.multiply = function(e, o) {
							return 0 === e || 0 === o ? 0 : this.expTable[(this.logTable[e] + this.logTable[o]) % (this.size - 1)]
						}, e.prototype.inverse = function(e) {
							if (0 === e) throw new Error("Can't invert 0");
							return this.expTable[this.size - this.logTable[e] - 1]
						}, e.prototype.buildMonomial = function(e, o) {
							if (e < 0) throw new Error("Invalid monomial degree less than 0");
							if (0 === o) return this.zero;
							var r = new Uint8ClampedArray(e + 1);
							return r[0] = o, new t.default(this, r)
						}, e.prototype.log = function(e) {
							if (0 === e) throw new Error("Can't take log(0)");
							return this.logTable[e]
						}, e.prototype.exp = function(e) {
							return this.expTable[e]
						}, e
					}();
					o.default = n
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(1),
						n = function() {
							function e(e, o) {
								if (0 === o.length) throw new Error("No coefficients.");
								this.field = e;
								var r = o.length;
								if (r > 1 && 0 === o[0]) {
									for (var t = 1; t < r && 0 === o[t];) t++;
									if (t === r) this.coefficients = e.zero.coefficients;
									else {
										this.coefficients = new Uint8ClampedArray(r - t);
										for (var n = 0; n < this.coefficients.length; n++) this.coefficients[n] = o[t + n]
									}
								} else this.coefficients = o
							}
							return e.prototype.degree = function() {
								return this.coefficients.length - 1
							}, e.prototype.isZero = function() {
								return 0 === this.coefficients[0]
							}, e.prototype.getCoefficient = function(e) {
								return this.coefficients[this.coefficients.length - 1 - e]
							}, e.prototype.addOrSubtract = function(o) {
								var r;
								if (this.isZero()) return o;
								if (o.isZero()) return this;
								var n = this.coefficients,
									s = o.coefficients;
								n.length > s.length && (n = (r = [s, n])[0], s = r[1]);
								for (var a = new Uint8ClampedArray(s.length), c = s.length - n.length, i = 0; i < c; i++) a[i] = s[i];
								for (i = c; i < s.length; i++) a[i] = t.addOrSubtractGF(n[i - c], s[i]);
								return new e(this.field, a)
							}, e.prototype.multiply = function(o) {
								if (0 === o) return this.field.zero;
								if (1 === o) return this;
								for (var r = this.coefficients.length, t = new Uint8ClampedArray(r), n = 0; n < r; n++) t[n] = this.field.multiply(this.coefficients[n], o);
								return new e(this.field, t)
							}, e.prototype.multiplyPoly = function(o) {
								if (this.isZero() || o.isZero()) return this.field.zero;
								for (var r = this.coefficients, n = r.length, s = o.coefficients, a = s.length, c = new Uint8ClampedArray(n + a - 1), i = 0; i < n; i++)
									for (var l = r[i], d = 0; d < a; d++) c[i + d] = t.addOrSubtractGF(c[i + d], this.field.multiply(l, s[d]));
								return new e(this.field, c)
							}, e.prototype.multiplyByMonomial = function(o, r) {
								if (o < 0) throw new Error("Invalid degree less than 0");
								if (0 === r) return this.field.zero;
								for (var t = this.coefficients.length, n = new Uint8ClampedArray(t + o), s = 0; s < t; s++) n[s] = this.field.multiply(this.coefficients[s], r);
								return new e(this.field, n)
							}, e.prototype.evaluateAt = function(e) {
								var o = 0;
								if (0 === e) return this.getCoefficient(0);
								var r = this.coefficients.length;
								if (1 === e) return this.coefficients.forEach((function(e) {
									o = t.addOrSubtractGF(o, e)
								})), o;
								o = this.coefficients[0];
								for (var n = 1; n < r; n++) o = t.addOrSubtractGF(this.field.multiply(e, o), this.coefficients[n]);
								return o
							}, e
						}();
					o.default = n
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(4),
						n = r(5),
						s = r(11),
						a = r(12);

					function c(e) {
						var o = a.locate(e);
						if (!o) return null;
						for (var r = 0, t = o; r < t.length; r++) {
							var c = t[r],
								i = s.extract(e, c),
								l = n.decode(i.matrix);
							if (l) return {
								binaryData: l.bytes,
								data: l.text,
								chunks: l.chunks,
								version: l.version,
								location: {
									topRightCorner: i.mappingFunction(c.dimension, 0),
									topLeftCorner: i.mappingFunction(0, 0),
									bottomRightCorner: i.mappingFunction(c.dimension, c.dimension),
									bottomLeftCorner: i.mappingFunction(0, c.dimension),
									topRightFinderPattern: c.topRight,
									topLeftFinderPattern: c.topLeft,
									bottomLeftFinderPattern: c.bottomLeft,
									bottomRightAlignmentPattern: c.alignmentPattern
								}
							}
						}
						return null
					}
					var i = {
						inversionAttempts: "attemptBoth"
					};

					function l(e, o, r, n) {
						void 0 === n && (n = {});
						var s = i;
						Object.keys(s || {}).forEach((function(e) {
							s[e] = n[e] || s[e]
						}));
						var a = "attemptBoth" === s.inversionAttempts || "invertFirst" === s.inversionAttempts,
							l = "onlyInvert" === s.inversionAttempts || "invertFirst" === s.inversionAttempts,
							d = t.binarize(e, o, r, a),
							u = d.binarized,
							f = d.inverted,
							B = c(l ? f : u);
						return B || "attemptBoth" !== s.inversionAttempts && "invertFirst" !== s.inversionAttempts || (B = c(l ? u : f)), B
					}
					l.default = l, o.default = l
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(0);

					function n(e, o, r) {
						return e < o ? o : e > r ? r : e
					}
					var s = function() {
						function e(e, o) {
							this.width = e, this.data = new Uint8ClampedArray(e * o)
						}
						return e.prototype.get = function(e, o) {
							return this.data[o * this.width + e]
						}, e.prototype.set = function(e, o, r) {
							this.data[o * this.width + e] = r
						}, e
					}();
					o.binarize = function(e, o, r, a) {
						if (e.length !== o * r * 4) throw new Error("Malformed data passed to binarizer.");
						for (var c = new s(o, r), i = 0; i < o; i++)
							for (var l = 0; l < r; l++) {
								var d = e[4 * (l * o + i) + 0],
									u = e[4 * (l * o + i) + 1],
									f = e[4 * (l * o + i) + 2];
								c.set(i, l, .2126 * d + .7152 * u + .0722 * f)
							}
						for (var B = Math.ceil(o / 8), k = Math.ceil(r / 8), h = new s(B, k), m = 0; m < k; m++)
							for (var w = 0; w < B; w++) {
								var p = 0,
									C = 1 / 0,
									y = 0;
								for (l = 0; l < 8; l++)
									for (i = 0; i < 8; i++) {
										var v = c.get(8 * w + i, 8 * m + l);
										p += v, C = Math.min(C, v), y = Math.max(y, v)
									}
								var P = p / Math.pow(8, 2);
								if (y - C <= 24 && (P = C / 2, m > 0 && w > 0)) {
									var g = (h.get(w, m - 1) + 2 * h.get(w - 1, m) + h.get(w - 1, m - 1)) / 4;
									C < g && (P = g)
								}
								h.set(w, m, P)
							}
						var b = t.BitMatrix.createEmpty(o, r),
							M = null;
						for (a && (M = t.BitMatrix.createEmpty(o, r)), m = 0; m < k; m++)
							for (w = 0; w < B; w++) {
								for (var x = n(w, 2, B - 3), E = n(m, 2, k - 3), I = (p = 0, -2); I <= 2; I++)
									for (var L = -2; L <= 2; L++) p += h.get(x + I, E + L);
								var A = p / 25;
								for (I = 0; I < 8; I++)
									for (L = 0; L < 8; L++) {
										i = 8 * w + I, l = 8 * m + L;
										var O = c.get(i, l);
										b.set(i, l, O <= A), a && M.set(i, l, !(O <= A))
									}
							}
						return a ? {
							binarized: b,
							inverted: M
						} : {
							binarized: b
						}
					}
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(0),
						n = r(6),
						s = r(9),
						a = r(10);

					function c(e, o) {
						for (var r = e ^ o, t = 0; r;) t++, r &= r - 1;
						return t
					}

					function i(e, o) {
						return o << 1 | e
					}
					var l = [{
							bits: 21522,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 0
							}
						}, {
							bits: 20773,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 1
							}
						}, {
							bits: 24188,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 2
							}
						}, {
							bits: 23371,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 3
							}
						}, {
							bits: 17913,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 4
							}
						}, {
							bits: 16590,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 5
							}
						}, {
							bits: 20375,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 6
							}
						}, {
							bits: 19104,
							formatInfo: {
								errorCorrectionLevel: 1,
								dataMask: 7
							}
						}, {
							bits: 30660,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 0
							}
						}, {
							bits: 29427,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 1
							}
						}, {
							bits: 32170,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 2
							}
						}, {
							bits: 30877,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 3
							}
						}, {
							bits: 26159,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 4
							}
						}, {
							bits: 25368,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 5
							}
						}, {
							bits: 27713,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 6
							}
						}, {
							bits: 26998,
							formatInfo: {
								errorCorrectionLevel: 0,
								dataMask: 7
							}
						}, {
							bits: 5769,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 0
							}
						}, {
							bits: 5054,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 1
							}
						}, {
							bits: 7399,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 2
							}
						}, {
							bits: 6608,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 3
							}
						}, {
							bits: 1890,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 4
							}
						}, {
							bits: 597,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 5
							}
						}, {
							bits: 3340,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 6
							}
						}, {
							bits: 2107,
							formatInfo: {
								errorCorrectionLevel: 3,
								dataMask: 7
							}
						}, {
							bits: 13663,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 0
							}
						}, {
							bits: 12392,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 1
							}
						}, {
							bits: 16177,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 2
							}
						}, {
							bits: 14854,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 3
							}
						}, {
							bits: 9396,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 4
							}
						}, {
							bits: 8579,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 5
							}
						}, {
							bits: 11994,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 6
							}
						}, {
							bits: 11245,
							formatInfo: {
								errorCorrectionLevel: 2,
								dataMask: 7
							}
						}],
						d = [function(e) {
							return (e.y + e.x) % 2 == 0
						}, function(e) {
							return e.y % 2 == 0
						}, function(e) {
							return e.x % 3 == 0
						}, function(e) {
							return (e.y + e.x) % 3 == 0
						}, function(e) {
							return (Math.floor(e.y / 2) + Math.floor(e.x / 3)) % 2 == 0
						}, function(e) {
							return e.x * e.y % 2 + e.x * e.y % 3 == 0
						}, function(e) {
							return (e.y * e.x % 2 + e.y * e.x % 3) % 2 == 0
						}, function(e) {
							return ((e.y + e.x) % 2 + e.y * e.x % 3) % 2 == 0
						}];

					function u(e) {
						var o = function(e) {
							var o = e.height,
								r = Math.floor((o - 17) / 4);
							if (r <= 6) return a.VERSIONS[r - 1];
							for (var t = 0, n = 5; n >= 0; n--)
								for (var s = o - 9; s >= o - 11; s--) t = i(e.get(s, n), t);
							var l = 0;
							for (s = 5; s >= 0; s--)
								for (n = o - 9; n >= o - 11; n--) l = i(e.get(s, n), l);
							for (var d, u = 1 / 0, f = 0, B = a.VERSIONS; f < B.length; f++) {
								var k = B[f];
								if (k.infoBits === t || k.infoBits === l) return k;
								var h = c(t, k.infoBits);
								h < u && (d = k, u = h), (h = c(l, k.infoBits)) < u && (d = k, u = h)
							}
							return u <= 3 ? d : void 0
						}(e);
						if (!o) return null;
						var r = function(e) {
							for (var o = 0, r = 0; r <= 8; r++) 6 !== r && (o = i(e.get(r, 8), o));
							for (var t = 7; t >= 0; t--) 6 !== t && (o = i(e.get(8, t), o));
							var n = e.height,
								s = 0;
							for (t = n - 1; t >= n - 7; t--) s = i(e.get(8, t), s);
							for (r = n - 8; r < n; r++) s = i(e.get(r, 8), s);
							for (var a = 1 / 0, d = null, u = 0, f = l; u < f.length; u++) {
								var B = f[u],
									k = B.bits,
									h = B.formatInfo;
								if (k === o || k === s) return h;
								var m = c(o, k);
								m < a && (d = h, a = m), o !== s && (m = c(s, k)) < a && (d = h, a = m)
							}
							return a <= 3 ? d : null
						}(e);
						if (!r) return null;
						var u = function(e, o, r) {
							var t = o.errorCorrectionLevels[r],
								n = [],
								s = 0;
							if (t.ecBlocks.forEach((function(e) {
									for (var o = 0; o < e.numBlocks; o++) n.push({
										numDataCodewords: e.dataCodewordsPerBlock,
										codewords: []
									}), s += e.dataCodewordsPerBlock + t.ecCodewordsPerBlock
								})), e.length < s) return null;
							e = e.slice(0, s);
							for (var a = t.ecBlocks[0].dataCodewordsPerBlock, c = 0; c < a; c++)
								for (var i = 0, l = n; i < l.length; i++) l[i].codewords.push(e.shift());
							if (t.ecBlocks.length > 1) {
								var d = t.ecBlocks[0].numBlocks,
									u = t.ecBlocks[1].numBlocks;
								for (c = 0; c < u; c++) n[d + c].codewords.push(e.shift())
							}
							for (; e.length > 0;)
								for (var f = 0, B = n; f < B.length; f++) B[f].codewords.push(e.shift());
							return n
						}(function(e, o, r) {
							for (var n = d[r.dataMask], s = e.height, a = function(e) {
									var o = 17 + 4 * e.versionNumber,
										r = t.BitMatrix.createEmpty(o, o);
									r.setRegion(0, 0, 9, 9, !0), r.setRegion(o - 8, 0, 8, 9, !0), r.setRegion(0, o - 8, 9, 8, !0);
									for (var n = 0, s = e.alignmentPatternCenters; n < s.length; n++)
										for (var a = s[n], c = 0, i = e.alignmentPatternCenters; c < i.length; c++) {
											var l = i[c];
											6 === a && 6 === l || 6 === a && l === o - 7 || a === o - 7 && 6 === l || r.setRegion(a - 2, l - 2, 5, 5, !0)
										}
									return r.setRegion(6, 9, 1, o - 17, !0), r.setRegion(9, 6, o - 17, 1, !0), e.versionNumber > 6 && (r.setRegion(o - 11, 0, 3, 6, !0), r.setRegion(0, o - 11, 6, 3, !0)), r
								}(o), c = [], l = 0, u = 0, f = !0, B = s - 1; B > 0; B -= 2) {
								6 === B && B--;
								for (var k = 0; k < s; k++)
									for (var h = f ? s - 1 - k : k, m = 0; m < 2; m++) {
										var w = B - m;
										if (!a.get(w, h)) {
											u++;
											var p = e.get(w, h);
											n({
												y: h,
												x: w
											}) && (p = !p), l = i(p, l), 8 === u && (c.push(l), u = 0, l = 0)
										}
									}
								f = !f
							}
							return c
						}(e, o, r), o, r.errorCorrectionLevel);
						if (!u) return null;
						for (var f = u.reduce((function(e, o) {
								return e + o.numDataCodewords
							}), 0), B = new Uint8ClampedArray(f), k = 0, h = 0, m = u; h < m.length; h++) {
							var w = m[h],
								p = s.decode(w.codewords, w.codewords.length - w.numDataCodewords);
							if (!p) return null;
							for (var C = 0; C < w.numDataCodewords; C++) B[k++] = p[C]
						}
						try {
							return n.decode(B, o.versionNumber)
						} catch (e) {
							return null
						}
					}
					o.decode = function(e) {
						if (null == e) return null;
						var o = u(e);
						if (o) return o;
						for (var r = 0; r < e.width; r++)
							for (var t = r + 1; t < e.height; t++) e.get(r, t) !== e.get(t, r) && (e.set(r, t, !e.get(r, t)), e.set(t, r, !e.get(t, r)));
						return u(e)
					}
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t, n, s = r(7),
						a = r(8);

					function c(e, o) {
						for (var r = [], t = "", n = [10, 12, 14][o], s = e.readBits(n); s >= 3;) {
							if ((l = e.readBits(10)) >= 1e3) throw new Error("Invalid numeric value above 999");
							var a = Math.floor(l / 100),
								c = Math.floor(l / 10) % 10,
								i = l % 10;
							r.push(48 + a, 48 + c, 48 + i), t += a.toString() + c.toString() + i.toString(), s -= 3
						}
						if (2 === s) {
							if ((l = e.readBits(7)) >= 100) throw new Error("Invalid numeric value above 99");
							a = Math.floor(l / 10), c = l % 10, r.push(48 + a, 48 + c), t += a.toString() + c.toString()
						} else if (1 === s) {
							var l;
							if ((l = e.readBits(4)) >= 10) throw new Error("Invalid numeric value above 9");
							r.push(48 + l), t += l.toString()
						}
						return {
							bytes: r,
							text: t
						}
					}! function(e) {
						e.Numeric = "numeric", e.Alphanumeric = "alphanumeric", e.Byte = "byte", e.Kanji = "kanji", e.ECI = "eci"
					}(t = o.Mode || (o.Mode = {})),
					function(e) {
						e[e.Terminator = 0] = "Terminator", e[e.Numeric = 1] = "Numeric", e[e.Alphanumeric = 2] = "Alphanumeric", e[e.Byte = 4] = "Byte", e[e.Kanji = 8] = "Kanji", e[e.ECI = 7] = "ECI"
					}(n || (n = {}));
					var i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

					function l(e, o) {
						for (var r = [], t = "", n = [9, 11, 13][o], s = e.readBits(n); s >= 2;) {
							var a = e.readBits(11),
								c = Math.floor(a / 45),
								l = a % 45;
							r.push(i[c].charCodeAt(0), i[l].charCodeAt(0)), t += i[c] + i[l], s -= 2
						}
						return 1 === s && (c = e.readBits(6), r.push(i[c].charCodeAt(0)), t += i[c]), {
							bytes: r,
							text: t
						}
					}

					function d(e, o) {
						for (var r = [], t = "", n = [8, 16, 16][o], s = e.readBits(n), a = 0; a < s; a++) {
							var c = e.readBits(8);
							r.push(c)
						}
						try {
							t += decodeURIComponent(r.map((function(e) {
								return "%" + ("0" + e.toString(16)).substr(-2)
							})).join(""))
						} catch (e) {}
						return {
							bytes: r,
							text: t
						}
					}

					function u(e, o) {
						for (var r = [], t = "", n = [8, 10, 12][o], s = e.readBits(n), c = 0; c < s; c++) {
							var i = e.readBits(13),
								l = Math.floor(i / 192) << 8 | i % 192;
							l += l < 7936 ? 33088 : 49472, r.push(l >> 8, 255 & l), t += String.fromCharCode(a.shiftJISTable[l])
						}
						return {
							bytes: r,
							text: t
						}
					}
					o.decode = function(e, o) {
						for (var r, a, i, f, B = new s.BitStream(e), k = o <= 9 ? 0 : o <= 26 ? 1 : 2, h = {
								text: "",
								bytes: [],
								chunks: [],
								version: o
							}; B.available() >= 4;) {
							var m = B.readBits(4);
							if (m === n.Terminator) return h;
							if (m === n.ECI) 0 === B.readBits(1) ? h.chunks.push({
								type: t.ECI,
								assignmentNumber: B.readBits(7)
							}) : 0 === B.readBits(1) ? h.chunks.push({
								type: t.ECI,
								assignmentNumber: B.readBits(14)
							}) : 0 === B.readBits(1) ? h.chunks.push({
								type: t.ECI,
								assignmentNumber: B.readBits(21)
							}) : h.chunks.push({
								type: t.ECI,
								assignmentNumber: -1
							});
							else if (m === n.Numeric) {
								var w = c(B, k);
								h.text += w.text, (r = h.bytes).push.apply(r, w.bytes), h.chunks.push({
									type: t.Numeric,
									text: w.text
								})
							} else if (m === n.Alphanumeric) {
								var p = l(B, k);
								h.text += p.text, (a = h.bytes).push.apply(a, p.bytes), h.chunks.push({
									type: t.Alphanumeric,
									text: p.text
								})
							} else if (m === n.Byte) {
								var C = d(B, k);
								h.text += C.text, (i = h.bytes).push.apply(i, C.bytes), h.chunks.push({
									type: t.Byte,
									bytes: C.bytes,
									text: C.text
								})
							} else if (m === n.Kanji) {
								var y = u(B, k);
								h.text += y.text, (f = h.bytes).push.apply(f, y.bytes), h.chunks.push({
									type: t.Kanji,
									bytes: y.bytes,
									text: y.text
								})
							}
						}
						if (0 === B.available() || 0 === B.readBits(B.available())) return h
					}
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = function() {
						function e(e) {
							this.byteOffset = 0, this.bitOffset = 0, this.bytes = e
						}
						return e.prototype.readBits = function(e) {
							if (e < 1 || e > 32 || e > this.available()) throw new Error("Cannot read " + e.toString() + " bits");
							var o = 0;
							if (this.bitOffset > 0) {
								var r = 8 - this.bitOffset,
									t = e < r ? e : r,
									n = 255 >> 8 - t << (s = r - t);
								o = (this.bytes[this.byteOffset] & n) >> s, e -= t, this.bitOffset += t, 8 === this.bitOffset && (this.bitOffset = 0, this.byteOffset++)
							}
							if (e > 0) {
								for (; e >= 8;) o = o << 8 | 255 & this.bytes[this.byteOffset], this.byteOffset++, e -= 8;
								var s;
								e > 0 && (n = 255 >> (s = 8 - e) << s, o = o << e | (this.bytes[this.byteOffset] & n) >> s, this.bitOffset += e)
							}
							return o
						}, e.prototype.available = function() {
							return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
						}, e
					}();
					o.BitStream = t
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					}), o.shiftJISTable = {
						32: 32,
						33: 33,
						34: 34,
						35: 35,
						36: 36,
						37: 37,
						38: 38,
						39: 39,
						40: 40,
						41: 41,
						42: 42,
						43: 43,
						44: 44,
						45: 45,
						46: 46,
						47: 47,
						48: 48,
						49: 49,
						50: 50,
						51: 51,
						52: 52,
						53: 53,
						54: 54,
						55: 55,
						56: 56,
						57: 57,
						58: 58,
						59: 59,
						60: 60,
						61: 61,
						62: 62,
						63: 63,
						64: 64,
						65: 65,
						66: 66,
						67: 67,
						68: 68,
						69: 69,
						70: 70,
						71: 71,
						72: 72,
						73: 73,
						74: 74,
						75: 75,
						76: 76,
						77: 77,
						78: 78,
						79: 79,
						80: 80,
						81: 81,
						82: 82,
						83: 83,
						84: 84,
						85: 85,
						86: 86,
						87: 87,
						88: 88,
						89: 89,
						90: 90,
						91: 91,
						92: 165,
						93: 93,
						94: 94,
						95: 95,
						96: 96,
						97: 97,
						98: 98,
						99: 99,
						100: 100,
						101: 101,
						102: 102,
						103: 103,
						104: 104,
						105: 105,
						106: 106,
						107: 107,
						108: 108,
						109: 109,
						110: 110,
						111: 111,
						112: 112,
						113: 113,
						114: 114,
						115: 115,
						116: 116,
						117: 117,
						118: 118,
						119: 119,
						120: 120,
						121: 121,
						122: 122,
						123: 123,
						124: 124,
						125: 125,
						126: 8254,
						33088: 12288,
						33089: 12289,
						33090: 12290,
						33091: 65292,
						33092: 65294,
						33093: 12539,
						33094: 65306,
						33095: 65307,
						33096: 65311,
						33097: 65281,
						33098: 12443,
						33099: 12444,
						33100: 180,
						33101: 65344,
						33102: 168,
						33103: 65342,
						33104: 65507,
						33105: 65343,
						33106: 12541,
						33107: 12542,
						33108: 12445,
						33109: 12446,
						33110: 12291,
						33111: 20189,
						33112: 12293,
						33113: 12294,
						33114: 12295,
						33115: 12540,
						33116: 8213,
						33117: 8208,
						33118: 65295,
						33119: 92,
						33120: 12316,
						33121: 8214,
						33122: 65372,
						33123: 8230,
						33124: 8229,
						33125: 8216,
						33126: 8217,
						33127: 8220,
						33128: 8221,
						33129: 65288,
						33130: 65289,
						33131: 12308,
						33132: 12309,
						33133: 65339,
						33134: 65341,
						33135: 65371,
						33136: 65373,
						33137: 12296,
						33138: 12297,
						33139: 12298,
						33140: 12299,
						33141: 12300,
						33142: 12301,
						33143: 12302,
						33144: 12303,
						33145: 12304,
						33146: 12305,
						33147: 65291,
						33148: 8722,
						33149: 177,
						33150: 215,
						33152: 247,
						33153: 65309,
						33154: 8800,
						33155: 65308,
						33156: 65310,
						33157: 8806,
						33158: 8807,
						33159: 8734,
						33160: 8756,
						33161: 9794,
						33162: 9792,
						33163: 176,
						33164: 8242,
						33165: 8243,
						33166: 8451,
						33167: 65509,
						33168: 65284,
						33169: 162,
						33170: 163,
						33171: 65285,
						33172: 65283,
						33173: 65286,
						33174: 65290,
						33175: 65312,
						33176: 167,
						33177: 9734,
						33178: 9733,
						33179: 9675,
						33180: 9679,
						33181: 9678,
						33182: 9671,
						33183: 9670,
						33184: 9633,
						33185: 9632,
						33186: 9651,
						33187: 9650,
						33188: 9661,
						33189: 9660,
						33190: 8251,
						33191: 12306,
						33192: 8594,
						33193: 8592,
						33194: 8593,
						33195: 8595,
						33196: 12307,
						33208: 8712,
						33209: 8715,
						33210: 8838,
						33211: 8839,
						33212: 8834,
						33213: 8835,
						33214: 8746,
						33215: 8745,
						33224: 8743,
						33225: 8744,
						33226: 172,
						33227: 8658,
						33228: 8660,
						33229: 8704,
						33230: 8707,
						33242: 8736,
						33243: 8869,
						33244: 8978,
						33245: 8706,
						33246: 8711,
						33247: 8801,
						33248: 8786,
						33249: 8810,
						33250: 8811,
						33251: 8730,
						33252: 8765,
						33253: 8733,
						33254: 8757,
						33255: 8747,
						33256: 8748,
						33264: 8491,
						33265: 8240,
						33266: 9839,
						33267: 9837,
						33268: 9834,
						33269: 8224,
						33270: 8225,
						33271: 182,
						33276: 9711,
						33359: 65296,
						33360: 65297,
						33361: 65298,
						33362: 65299,
						33363: 65300,
						33364: 65301,
						33365: 65302,
						33366: 65303,
						33367: 65304,
						33368: 65305,
						33376: 65313,
						33377: 65314,
						33378: 65315,
						33379: 65316,
						33380: 65317,
						33381: 65318,
						33382: 65319,
						33383: 65320,
						33384: 65321,
						33385: 65322,
						33386: 65323,
						33387: 65324,
						33388: 65325,
						33389: 65326,
						33390: 65327,
						33391: 65328,
						33392: 65329,
						33393: 65330,
						33394: 65331,
						33395: 65332,
						33396: 65333,
						33397: 65334,
						33398: 65335,
						33399: 65336,
						33400: 65337,
						33401: 65338,
						33409: 65345,
						33410: 65346,
						33411: 65347,
						33412: 65348,
						33413: 65349,
						33414: 65350,
						33415: 65351,
						33416: 65352,
						33417: 65353,
						33418: 65354,
						33419: 65355,
						33420: 65356,
						33421: 65357,
						33422: 65358,
						33423: 65359,
						33424: 65360,
						33425: 65361,
						33426: 65362,
						33427: 65363,
						33428: 65364,
						33429: 65365,
						33430: 65366,
						33431: 65367,
						33432: 65368,
						33433: 65369,
						33434: 65370,
						33439: 12353,
						33440: 12354,
						33441: 12355,
						33442: 12356,
						33443: 12357,
						33444: 12358,
						33445: 12359,
						33446: 12360,
						33447: 12361,
						33448: 12362,
						33449: 12363,
						33450: 12364,
						33451: 12365,
						33452: 12366,
						33453: 12367,
						33454: 12368,
						33455: 12369,
						33456: 12370,
						33457: 12371,
						33458: 12372,
						33459: 12373,
						33460: 12374,
						33461: 12375,
						33462: 12376,
						33463: 12377,
						33464: 12378,
						33465: 12379,
						33466: 12380,
						33467: 12381,
						33468: 12382,
						33469: 12383,
						33470: 12384,
						33471: 12385,
						33472: 12386,
						33473: 12387,
						33474: 12388,
						33475: 12389,
						33476: 12390,
						33477: 12391,
						33478: 12392,
						33479: 12393,
						33480: 12394,
						33481: 12395,
						33482: 12396,
						33483: 12397,
						33484: 12398,
						33485: 12399,
						33486: 12400,
						33487: 12401,
						33488: 12402,
						33489: 12403,
						33490: 12404,
						33491: 12405,
						33492: 12406,
						33493: 12407,
						33494: 12408,
						33495: 12409,
						33496: 12410,
						33497: 12411,
						33498: 12412,
						33499: 12413,
						33500: 12414,
						33501: 12415,
						33502: 12416,
						33503: 12417,
						33504: 12418,
						33505: 12419,
						33506: 12420,
						33507: 12421,
						33508: 12422,
						33509: 12423,
						33510: 12424,
						33511: 12425,
						33512: 12426,
						33513: 12427,
						33514: 12428,
						33515: 12429,
						33516: 12430,
						33517: 12431,
						33518: 12432,
						33519: 12433,
						33520: 12434,
						33521: 12435,
						33600: 12449,
						33601: 12450,
						33602: 12451,
						33603: 12452,
						33604: 12453,
						33605: 12454,
						33606: 12455,
						33607: 12456,
						33608: 12457,
						33609: 12458,
						33610: 12459,
						33611: 12460,
						33612: 12461,
						33613: 12462,
						33614: 12463,
						33615: 12464,
						33616: 12465,
						33617: 12466,
						33618: 12467,
						33619: 12468,
						33620: 12469,
						33621: 12470,
						33622: 12471,
						33623: 12472,
						33624: 12473,
						33625: 12474,
						33626: 12475,
						33627: 12476,
						33628: 12477,
						33629: 12478,
						33630: 12479,
						33631: 12480,
						33632: 12481,
						33633: 12482,
						33634: 12483,
						33635: 12484,
						33636: 12485,
						33637: 12486,
						33638: 12487,
						33639: 12488,
						33640: 12489,
						33641: 12490,
						33642: 12491,
						33643: 12492,
						33644: 12493,
						33645: 12494,
						33646: 12495,
						33647: 12496,
						33648: 12497,
						33649: 12498,
						33650: 12499,
						33651: 12500,
						33652: 12501,
						33653: 12502,
						33654: 12503,
						33655: 12504,
						33656: 12505,
						33657: 12506,
						33658: 12507,
						33659: 12508,
						33660: 12509,
						33661: 12510,
						33662: 12511,
						33664: 12512,
						33665: 12513,
						33666: 12514,
						33667: 12515,
						33668: 12516,
						33669: 12517,
						33670: 12518,
						33671: 12519,
						33672: 12520,
						33673: 12521,
						33674: 12522,
						33675: 12523,
						33676: 12524,
						33677: 12525,
						33678: 12526,
						33679: 12527,
						33680: 12528,
						33681: 12529,
						33682: 12530,
						33683: 12531,
						33684: 12532,
						33685: 12533,
						33686: 12534,
						33695: 913,
						33696: 914,
						33697: 915,
						33698: 916,
						33699: 917,
						33700: 918,
						33701: 919,
						33702: 920,
						33703: 921,
						33704: 922,
						33705: 923,
						33706: 924,
						33707: 925,
						33708: 926,
						33709: 927,
						33710: 928,
						33711: 929,
						33712: 931,
						33713: 932,
						33714: 933,
						33715: 934,
						33716: 935,
						33717: 936,
						33718: 937,
						33727: 945,
						33728: 946,
						33729: 947,
						33730: 948,
						33731: 949,
						33732: 950,
						33733: 951,
						33734: 952,
						33735: 953,
						33736: 954,
						33737: 955,
						33738: 956,
						33739: 957,
						33740: 958,
						33741: 959,
						33742: 960,
						33743: 961,
						33744: 963,
						33745: 964,
						33746: 965,
						33747: 966,
						33748: 967,
						33749: 968,
						33750: 969,
						33856: 1040,
						33857: 1041,
						33858: 1042,
						33859: 1043,
						33860: 1044,
						33861: 1045,
						33862: 1025,
						33863: 1046,
						33864: 1047,
						33865: 1048,
						33866: 1049,
						33867: 1050,
						33868: 1051,
						33869: 1052,
						33870: 1053,
						33871: 1054,
						33872: 1055,
						33873: 1056,
						33874: 1057,
						33875: 1058,
						33876: 1059,
						33877: 1060,
						33878: 1061,
						33879: 1062,
						33880: 1063,
						33881: 1064,
						33882: 1065,
						33883: 1066,
						33884: 1067,
						33885: 1068,
						33886: 1069,
						33887: 1070,
						33888: 1071,
						33904: 1072,
						33905: 1073,
						33906: 1074,
						33907: 1075,
						33908: 1076,
						33909: 1077,
						33910: 1105,
						33911: 1078,
						33912: 1079,
						33913: 1080,
						33914: 1081,
						33915: 1082,
						33916: 1083,
						33917: 1084,
						33918: 1085,
						33920: 1086,
						33921: 1087,
						33922: 1088,
						33923: 1089,
						33924: 1090,
						33925: 1091,
						33926: 1092,
						33927: 1093,
						33928: 1094,
						33929: 1095,
						33930: 1096,
						33931: 1097,
						33932: 1098,
						33933: 1099,
						33934: 1100,
						33935: 1101,
						33936: 1102,
						33937: 1103,
						33951: 9472,
						33952: 9474,
						33953: 9484,
						33954: 9488,
						33955: 9496,
						33956: 9492,
						33957: 9500,
						33958: 9516,
						33959: 9508,
						33960: 9524,
						33961: 9532,
						33962: 9473,
						33963: 9475,
						33964: 9487,
						33965: 9491,
						33966: 9499,
						33967: 9495,
						33968: 9507,
						33969: 9523,
						33970: 9515,
						33971: 9531,
						33972: 9547,
						33973: 9504,
						33974: 9519,
						33975: 9512,
						33976: 9527,
						33977: 9535,
						33978: 9501,
						33979: 9520,
						33980: 9509,
						33981: 9528,
						33982: 9538,
						34975: 20124,
						34976: 21782,
						34977: 23043,
						34978: 38463,
						34979: 21696,
						34980: 24859,
						34981: 25384,
						34982: 23030,
						34983: 36898,
						34984: 33909,
						34985: 33564,
						34986: 31312,
						34987: 24746,
						34988: 25569,
						34989: 28197,
						34990: 26093,
						34991: 33894,
						34992: 33446,
						34993: 39925,
						34994: 26771,
						34995: 22311,
						34996: 26017,
						34997: 25201,
						34998: 23451,
						34999: 22992,
						35e3: 34427,
						35001: 39156,
						35002: 32098,
						35003: 32190,
						35004: 39822,
						35005: 25110,
						35006: 31903,
						35007: 34999,
						35008: 23433,
						35009: 24245,
						35010: 25353,
						35011: 26263,
						35012: 26696,
						35013: 38343,
						35014: 38797,
						35015: 26447,
						35016: 20197,
						35017: 20234,
						35018: 20301,
						35019: 20381,
						35020: 20553,
						35021: 22258,
						35022: 22839,
						35023: 22996,
						35024: 23041,
						35025: 23561,
						35026: 24799,
						35027: 24847,
						35028: 24944,
						35029: 26131,
						35030: 26885,
						35031: 28858,
						35032: 30031,
						35033: 30064,
						35034: 31227,
						35035: 32173,
						35036: 32239,
						35037: 32963,
						35038: 33806,
						35039: 34915,
						35040: 35586,
						35041: 36949,
						35042: 36986,
						35043: 21307,
						35044: 20117,
						35045: 20133,
						35046: 22495,
						35047: 32946,
						35048: 37057,
						35049: 30959,
						35050: 19968,
						35051: 22769,
						35052: 28322,
						35053: 36920,
						35054: 31282,
						35055: 33576,
						35056: 33419,
						35057: 39983,
						35058: 20801,
						35059: 21360,
						35060: 21693,
						35061: 21729,
						35062: 22240,
						35063: 23035,
						35064: 24341,
						35065: 39154,
						35066: 28139,
						35067: 32996,
						35068: 34093,
						35136: 38498,
						35137: 38512,
						35138: 38560,
						35139: 38907,
						35140: 21515,
						35141: 21491,
						35142: 23431,
						35143: 28879,
						35144: 32701,
						35145: 36802,
						35146: 38632,
						35147: 21359,
						35148: 40284,
						35149: 31418,
						35150: 19985,
						35151: 30867,
						35152: 33276,
						35153: 28198,
						35154: 22040,
						35155: 21764,
						35156: 27421,
						35157: 34074,
						35158: 39995,
						35159: 23013,
						35160: 21417,
						35161: 28006,
						35162: 29916,
						35163: 38287,
						35164: 22082,
						35165: 20113,
						35166: 36939,
						35167: 38642,
						35168: 33615,
						35169: 39180,
						35170: 21473,
						35171: 21942,
						35172: 23344,
						35173: 24433,
						35174: 26144,
						35175: 26355,
						35176: 26628,
						35177: 27704,
						35178: 27891,
						35179: 27945,
						35180: 29787,
						35181: 30408,
						35182: 31310,
						35183: 38964,
						35184: 33521,
						35185: 34907,
						35186: 35424,
						35187: 37613,
						35188: 28082,
						35189: 30123,
						35190: 30410,
						35191: 39365,
						35192: 24742,
						35193: 35585,
						35194: 36234,
						35195: 38322,
						35196: 27022,
						35197: 21421,
						35198: 20870,
						35200: 22290,
						35201: 22576,
						35202: 22852,
						35203: 23476,
						35204: 24310,
						35205: 24616,
						35206: 25513,
						35207: 25588,
						35208: 27839,
						35209: 28436,
						35210: 28814,
						35211: 28948,
						35212: 29017,
						35213: 29141,
						35214: 29503,
						35215: 32257,
						35216: 33398,
						35217: 33489,
						35218: 34199,
						35219: 36960,
						35220: 37467,
						35221: 40219,
						35222: 22633,
						35223: 26044,
						35224: 27738,
						35225: 29989,
						35226: 20985,
						35227: 22830,
						35228: 22885,
						35229: 24448,
						35230: 24540,
						35231: 25276,
						35232: 26106,
						35233: 27178,
						35234: 27431,
						35235: 27572,
						35236: 29579,
						35237: 32705,
						35238: 35158,
						35239: 40236,
						35240: 40206,
						35241: 40644,
						35242: 23713,
						35243: 27798,
						35244: 33659,
						35245: 20740,
						35246: 23627,
						35247: 25014,
						35248: 33222,
						35249: 26742,
						35250: 29281,
						35251: 20057,
						35252: 20474,
						35253: 21368,
						35254: 24681,
						35255: 28201,
						35256: 31311,
						35257: 38899,
						35258: 19979,
						35259: 21270,
						35260: 20206,
						35261: 20309,
						35262: 20285,
						35263: 20385,
						35264: 20339,
						35265: 21152,
						35266: 21487,
						35267: 22025,
						35268: 22799,
						35269: 23233,
						35270: 23478,
						35271: 23521,
						35272: 31185,
						35273: 26247,
						35274: 26524,
						35275: 26550,
						35276: 27468,
						35277: 27827,
						35278: 28779,
						35279: 29634,
						35280: 31117,
						35281: 31166,
						35282: 31292,
						35283: 31623,
						35284: 33457,
						35285: 33499,
						35286: 33540,
						35287: 33655,
						35288: 33775,
						35289: 33747,
						35290: 34662,
						35291: 35506,
						35292: 22057,
						35293: 36008,
						35294: 36838,
						35295: 36942,
						35296: 38686,
						35297: 34442,
						35298: 20420,
						35299: 23784,
						35300: 25105,
						35301: 29273,
						35302: 30011,
						35303: 33253,
						35304: 33469,
						35305: 34558,
						35306: 36032,
						35307: 38597,
						35308: 39187,
						35309: 39381,
						35310: 20171,
						35311: 20250,
						35312: 35299,
						35313: 22238,
						35314: 22602,
						35315: 22730,
						35316: 24315,
						35317: 24555,
						35318: 24618,
						35319: 24724,
						35320: 24674,
						35321: 25040,
						35322: 25106,
						35323: 25296,
						35324: 25913,
						35392: 39745,
						35393: 26214,
						35394: 26800,
						35395: 28023,
						35396: 28784,
						35397: 30028,
						35398: 30342,
						35399: 32117,
						35400: 33445,
						35401: 34809,
						35402: 38283,
						35403: 38542,
						35404: 35997,
						35405: 20977,
						35406: 21182,
						35407: 22806,
						35408: 21683,
						35409: 23475,
						35410: 23830,
						35411: 24936,
						35412: 27010,
						35413: 28079,
						35414: 30861,
						35415: 33995,
						35416: 34903,
						35417: 35442,
						35418: 37799,
						35419: 39608,
						35420: 28012,
						35421: 39336,
						35422: 34521,
						35423: 22435,
						35424: 26623,
						35425: 34510,
						35426: 37390,
						35427: 21123,
						35428: 22151,
						35429: 21508,
						35430: 24275,
						35431: 25313,
						35432: 25785,
						35433: 26684,
						35434: 26680,
						35435: 27579,
						35436: 29554,
						35437: 30906,
						35438: 31339,
						35439: 35226,
						35440: 35282,
						35441: 36203,
						35442: 36611,
						35443: 37101,
						35444: 38307,
						35445: 38548,
						35446: 38761,
						35447: 23398,
						35448: 23731,
						35449: 27005,
						35450: 38989,
						35451: 38990,
						35452: 25499,
						35453: 31520,
						35454: 27179,
						35456: 27263,
						35457: 26806,
						35458: 39949,
						35459: 28511,
						35460: 21106,
						35461: 21917,
						35462: 24688,
						35463: 25324,
						35464: 27963,
						35465: 28167,
						35466: 28369,
						35467: 33883,
						35468: 35088,
						35469: 36676,
						35470: 19988,
						35471: 39993,
						35472: 21494,
						35473: 26907,
						35474: 27194,
						35475: 38788,
						35476: 26666,
						35477: 20828,
						35478: 31427,
						35479: 33970,
						35480: 37340,
						35481: 37772,
						35482: 22107,
						35483: 40232,
						35484: 26658,
						35485: 33541,
						35486: 33841,
						35487: 31909,
						35488: 21e3,
						35489: 33477,
						35490: 29926,
						35491: 20094,
						35492: 20355,
						35493: 20896,
						35494: 23506,
						35495: 21002,
						35496: 21208,
						35497: 21223,
						35498: 24059,
						35499: 21914,
						35500: 22570,
						35501: 23014,
						35502: 23436,
						35503: 23448,
						35504: 23515,
						35505: 24178,
						35506: 24185,
						35507: 24739,
						35508: 24863,
						35509: 24931,
						35510: 25022,
						35511: 25563,
						35512: 25954,
						35513: 26577,
						35514: 26707,
						35515: 26874,
						35516: 27454,
						35517: 27475,
						35518: 27735,
						35519: 28450,
						35520: 28567,
						35521: 28485,
						35522: 29872,
						35523: 29976,
						35524: 30435,
						35525: 30475,
						35526: 31487,
						35527: 31649,
						35528: 31777,
						35529: 32233,
						35530: 32566,
						35531: 32752,
						35532: 32925,
						35533: 33382,
						35534: 33694,
						35535: 35251,
						35536: 35532,
						35537: 36011,
						35538: 36996,
						35539: 37969,
						35540: 38291,
						35541: 38289,
						35542: 38306,
						35543: 38501,
						35544: 38867,
						35545: 39208,
						35546: 33304,
						35547: 20024,
						35548: 21547,
						35549: 23736,
						35550: 24012,
						35551: 29609,
						35552: 30284,
						35553: 30524,
						35554: 23721,
						35555: 32747,
						35556: 36107,
						35557: 38593,
						35558: 38929,
						35559: 38996,
						35560: 39e3,
						35561: 20225,
						35562: 20238,
						35563: 21361,
						35564: 21916,
						35565: 22120,
						35566: 22522,
						35567: 22855,
						35568: 23305,
						35569: 23492,
						35570: 23696,
						35571: 24076,
						35572: 24190,
						35573: 24524,
						35574: 25582,
						35575: 26426,
						35576: 26071,
						35577: 26082,
						35578: 26399,
						35579: 26827,
						35580: 26820,
						35648: 27231,
						35649: 24112,
						35650: 27589,
						35651: 27671,
						35652: 27773,
						35653: 30079,
						35654: 31048,
						35655: 23395,
						35656: 31232,
						35657: 32e3,
						35658: 24509,
						35659: 35215,
						35660: 35352,
						35661: 36020,
						35662: 36215,
						35663: 36556,
						35664: 36637,
						35665: 39138,
						35666: 39438,
						35667: 39740,
						35668: 20096,
						35669: 20605,
						35670: 20736,
						35671: 22931,
						35672: 23452,
						35673: 25135,
						35674: 25216,
						35675: 25836,
						35676: 27450,
						35677: 29344,
						35678: 30097,
						35679: 31047,
						35680: 32681,
						35681: 34811,
						35682: 35516,
						35683: 35696,
						35684: 25516,
						35685: 33738,
						35686: 38816,
						35687: 21513,
						35688: 21507,
						35689: 21931,
						35690: 26708,
						35691: 27224,
						35692: 35440,
						35693: 30759,
						35694: 26485,
						35695: 40653,
						35696: 21364,
						35697: 23458,
						35698: 33050,
						35699: 34384,
						35700: 36870,
						35701: 19992,
						35702: 20037,
						35703: 20167,
						35704: 20241,
						35705: 21450,
						35706: 21560,
						35707: 23470,
						35708: 24339,
						35709: 24613,
						35710: 25937,
						35712: 26429,
						35713: 27714,
						35714: 27762,
						35715: 27875,
						35716: 28792,
						35717: 29699,
						35718: 31350,
						35719: 31406,
						35720: 31496,
						35721: 32026,
						35722: 31998,
						35723: 32102,
						35724: 26087,
						35725: 29275,
						35726: 21435,
						35727: 23621,
						35728: 24040,
						35729: 25298,
						35730: 25312,
						35731: 25369,
						35732: 28192,
						35733: 34394,
						35734: 35377,
						35735: 36317,
						35736: 37624,
						35737: 28417,
						35738: 31142,
						35739: 39770,
						35740: 20136,
						35741: 20139,
						35742: 20140,
						35743: 20379,
						35744: 20384,
						35745: 20689,
						35746: 20807,
						35747: 31478,
						35748: 20849,
						35749: 20982,
						35750: 21332,
						35751: 21281,
						35752: 21375,
						35753: 21483,
						35754: 21932,
						35755: 22659,
						35756: 23777,
						35757: 24375,
						35758: 24394,
						35759: 24623,
						35760: 24656,
						35761: 24685,
						35762: 25375,
						35763: 25945,
						35764: 27211,
						35765: 27841,
						35766: 29378,
						35767: 29421,
						35768: 30703,
						35769: 33016,
						35770: 33029,
						35771: 33288,
						35772: 34126,
						35773: 37111,
						35774: 37857,
						35775: 38911,
						35776: 39255,
						35777: 39514,
						35778: 20208,
						35779: 20957,
						35780: 23597,
						35781: 26241,
						35782: 26989,
						35783: 23616,
						35784: 26354,
						35785: 26997,
						35786: 29577,
						35787: 26704,
						35788: 31873,
						35789: 20677,
						35790: 21220,
						35791: 22343,
						35792: 24062,
						35793: 37670,
						35794: 26020,
						35795: 27427,
						35796: 27453,
						35797: 29748,
						35798: 31105,
						35799: 31165,
						35800: 31563,
						35801: 32202,
						35802: 33465,
						35803: 33740,
						35804: 34943,
						35805: 35167,
						35806: 35641,
						35807: 36817,
						35808: 37329,
						35809: 21535,
						35810: 37504,
						35811: 20061,
						35812: 20534,
						35813: 21477,
						35814: 21306,
						35815: 29399,
						35816: 29590,
						35817: 30697,
						35818: 33510,
						35819: 36527,
						35820: 39366,
						35821: 39368,
						35822: 39378,
						35823: 20855,
						35824: 24858,
						35825: 34398,
						35826: 21936,
						35827: 31354,
						35828: 20598,
						35829: 23507,
						35830: 36935,
						35831: 38533,
						35832: 20018,
						35833: 27355,
						35834: 37351,
						35835: 23633,
						35836: 23624,
						35904: 25496,
						35905: 31391,
						35906: 27795,
						35907: 38772,
						35908: 36705,
						35909: 31402,
						35910: 29066,
						35911: 38536,
						35912: 31874,
						35913: 26647,
						35914: 32368,
						35915: 26705,
						35916: 37740,
						35917: 21234,
						35918: 21531,
						35919: 34219,
						35920: 35347,
						35921: 32676,
						35922: 36557,
						35923: 37089,
						35924: 21350,
						35925: 34952,
						35926: 31041,
						35927: 20418,
						35928: 20670,
						35929: 21009,
						35930: 20804,
						35931: 21843,
						35932: 22317,
						35933: 29674,
						35934: 22411,
						35935: 22865,
						35936: 24418,
						35937: 24452,
						35938: 24693,
						35939: 24950,
						35940: 24935,
						35941: 25001,
						35942: 25522,
						35943: 25658,
						35944: 25964,
						35945: 26223,
						35946: 26690,
						35947: 28179,
						35948: 30054,
						35949: 31293,
						35950: 31995,
						35951: 32076,
						35952: 32153,
						35953: 32331,
						35954: 32619,
						35955: 33550,
						35956: 33610,
						35957: 34509,
						35958: 35336,
						35959: 35427,
						35960: 35686,
						35961: 36605,
						35962: 38938,
						35963: 40335,
						35964: 33464,
						35965: 36814,
						35966: 39912,
						35968: 21127,
						35969: 25119,
						35970: 25731,
						35971: 28608,
						35972: 38553,
						35973: 26689,
						35974: 20625,
						35975: 27424,
						35976: 27770,
						35977: 28500,
						35978: 31348,
						35979: 32080,
						35980: 34880,
						35981: 35363,
						35982: 26376,
						35983: 20214,
						35984: 20537,
						35985: 20518,
						35986: 20581,
						35987: 20860,
						35988: 21048,
						35989: 21091,
						35990: 21927,
						35991: 22287,
						35992: 22533,
						35993: 23244,
						35994: 24314,
						35995: 25010,
						35996: 25080,
						35997: 25331,
						35998: 25458,
						35999: 26908,
						36e3: 27177,
						36001: 29309,
						36002: 29356,
						36003: 29486,
						36004: 30740,
						36005: 30831,
						36006: 32121,
						36007: 30476,
						36008: 32937,
						36009: 35211,
						36010: 35609,
						36011: 36066,
						36012: 36562,
						36013: 36963,
						36014: 37749,
						36015: 38522,
						36016: 38997,
						36017: 39443,
						36018: 40568,
						36019: 20803,
						36020: 21407,
						36021: 21427,
						36022: 24187,
						36023: 24358,
						36024: 28187,
						36025: 28304,
						36026: 29572,
						36027: 29694,
						36028: 32067,
						36029: 33335,
						36030: 35328,
						36031: 35578,
						36032: 38480,
						36033: 20046,
						36034: 20491,
						36035: 21476,
						36036: 21628,
						36037: 22266,
						36038: 22993,
						36039: 23396,
						36040: 24049,
						36041: 24235,
						36042: 24359,
						36043: 25144,
						36044: 25925,
						36045: 26543,
						36046: 28246,
						36047: 29392,
						36048: 31946,
						36049: 34996,
						36050: 32929,
						36051: 32993,
						36052: 33776,
						36053: 34382,
						36054: 35463,
						36055: 36328,
						36056: 37431,
						36057: 38599,
						36058: 39015,
						36059: 40723,
						36060: 20116,
						36061: 20114,
						36062: 20237,
						36063: 21320,
						36064: 21577,
						36065: 21566,
						36066: 23087,
						36067: 24460,
						36068: 24481,
						36069: 24735,
						36070: 26791,
						36071: 27278,
						36072: 29786,
						36073: 30849,
						36074: 35486,
						36075: 35492,
						36076: 35703,
						36077: 37264,
						36078: 20062,
						36079: 39881,
						36080: 20132,
						36081: 20348,
						36082: 20399,
						36083: 20505,
						36084: 20502,
						36085: 20809,
						36086: 20844,
						36087: 21151,
						36088: 21177,
						36089: 21246,
						36090: 21402,
						36091: 21475,
						36092: 21521,
						36160: 21518,
						36161: 21897,
						36162: 22353,
						36163: 22434,
						36164: 22909,
						36165: 23380,
						36166: 23389,
						36167: 23439,
						36168: 24037,
						36169: 24039,
						36170: 24055,
						36171: 24184,
						36172: 24195,
						36173: 24218,
						36174: 24247,
						36175: 24344,
						36176: 24658,
						36177: 24908,
						36178: 25239,
						36179: 25304,
						36180: 25511,
						36181: 25915,
						36182: 26114,
						36183: 26179,
						36184: 26356,
						36185: 26477,
						36186: 26657,
						36187: 26775,
						36188: 27083,
						36189: 27743,
						36190: 27946,
						36191: 28009,
						36192: 28207,
						36193: 28317,
						36194: 30002,
						36195: 30343,
						36196: 30828,
						36197: 31295,
						36198: 31968,
						36199: 32005,
						36200: 32024,
						36201: 32094,
						36202: 32177,
						36203: 32789,
						36204: 32771,
						36205: 32943,
						36206: 32945,
						36207: 33108,
						36208: 33167,
						36209: 33322,
						36210: 33618,
						36211: 34892,
						36212: 34913,
						36213: 35611,
						36214: 36002,
						36215: 36092,
						36216: 37066,
						36217: 37237,
						36218: 37489,
						36219: 30783,
						36220: 37628,
						36221: 38308,
						36222: 38477,
						36224: 38917,
						36225: 39321,
						36226: 39640,
						36227: 40251,
						36228: 21083,
						36229: 21163,
						36230: 21495,
						36231: 21512,
						36232: 22741,
						36233: 25335,
						36234: 28640,
						36235: 35946,
						36236: 36703,
						36237: 40633,
						36238: 20811,
						36239: 21051,
						36240: 21578,
						36241: 22269,
						36242: 31296,
						36243: 37239,
						36244: 40288,
						36245: 40658,
						36246: 29508,
						36247: 28425,
						36248: 33136,
						36249: 29969,
						36250: 24573,
						36251: 24794,
						36252: 39592,
						36253: 29403,
						36254: 36796,
						36255: 27492,
						36256: 38915,
						36257: 20170,
						36258: 22256,
						36259: 22372,
						36260: 22718,
						36261: 23130,
						36262: 24680,
						36263: 25031,
						36264: 26127,
						36265: 26118,
						36266: 26681,
						36267: 26801,
						36268: 28151,
						36269: 30165,
						36270: 32058,
						36271: 33390,
						36272: 39746,
						36273: 20123,
						36274: 20304,
						36275: 21449,
						36276: 21766,
						36277: 23919,
						36278: 24038,
						36279: 24046,
						36280: 26619,
						36281: 27801,
						36282: 29811,
						36283: 30722,
						36284: 35408,
						36285: 37782,
						36286: 35039,
						36287: 22352,
						36288: 24231,
						36289: 25387,
						36290: 20661,
						36291: 20652,
						36292: 20877,
						36293: 26368,
						36294: 21705,
						36295: 22622,
						36296: 22971,
						36297: 23472,
						36298: 24425,
						36299: 25165,
						36300: 25505,
						36301: 26685,
						36302: 27507,
						36303: 28168,
						36304: 28797,
						36305: 37319,
						36306: 29312,
						36307: 30741,
						36308: 30758,
						36309: 31085,
						36310: 25998,
						36311: 32048,
						36312: 33756,
						36313: 35009,
						36314: 36617,
						36315: 38555,
						36316: 21092,
						36317: 22312,
						36318: 26448,
						36319: 32618,
						36320: 36001,
						36321: 20916,
						36322: 22338,
						36323: 38442,
						36324: 22586,
						36325: 27018,
						36326: 32948,
						36327: 21682,
						36328: 23822,
						36329: 22524,
						36330: 30869,
						36331: 40442,
						36332: 20316,
						36333: 21066,
						36334: 21643,
						36335: 25662,
						36336: 26152,
						36337: 26388,
						36338: 26613,
						36339: 31364,
						36340: 31574,
						36341: 32034,
						36342: 37679,
						36343: 26716,
						36344: 39853,
						36345: 31545,
						36346: 21273,
						36347: 20874,
						36348: 21047,
						36416: 23519,
						36417: 25334,
						36418: 25774,
						36419: 25830,
						36420: 26413,
						36421: 27578,
						36422: 34217,
						36423: 38609,
						36424: 30352,
						36425: 39894,
						36426: 25420,
						36427: 37638,
						36428: 39851,
						36429: 30399,
						36430: 26194,
						36431: 19977,
						36432: 20632,
						36433: 21442,
						36434: 23665,
						36435: 24808,
						36436: 25746,
						36437: 25955,
						36438: 26719,
						36439: 29158,
						36440: 29642,
						36441: 29987,
						36442: 31639,
						36443: 32386,
						36444: 34453,
						36445: 35715,
						36446: 36059,
						36447: 37240,
						36448: 39184,
						36449: 26028,
						36450: 26283,
						36451: 27531,
						36452: 20181,
						36453: 20180,
						36454: 20282,
						36455: 20351,
						36456: 21050,
						36457: 21496,
						36458: 21490,
						36459: 21987,
						36460: 22235,
						36461: 22763,
						36462: 22987,
						36463: 22985,
						36464: 23039,
						36465: 23376,
						36466: 23629,
						36467: 24066,
						36468: 24107,
						36469: 24535,
						36470: 24605,
						36471: 25351,
						36472: 25903,
						36473: 23388,
						36474: 26031,
						36475: 26045,
						36476: 26088,
						36477: 26525,
						36478: 27490,
						36480: 27515,
						36481: 27663,
						36482: 29509,
						36483: 31049,
						36484: 31169,
						36485: 31992,
						36486: 32025,
						36487: 32043,
						36488: 32930,
						36489: 33026,
						36490: 33267,
						36491: 35222,
						36492: 35422,
						36493: 35433,
						36494: 35430,
						36495: 35468,
						36496: 35566,
						36497: 36039,
						36498: 36060,
						36499: 38604,
						36500: 39164,
						36501: 27503,
						36502: 20107,
						36503: 20284,
						36504: 20365,
						36505: 20816,
						36506: 23383,
						36507: 23546,
						36508: 24904,
						36509: 25345,
						36510: 26178,
						36511: 27425,
						36512: 28363,
						36513: 27835,
						36514: 29246,
						36515: 29885,
						36516: 30164,
						36517: 30913,
						36518: 31034,
						36519: 32780,
						36520: 32819,
						36521: 33258,
						36522: 33940,
						36523: 36766,
						36524: 27728,
						36525: 40575,
						36526: 24335,
						36527: 35672,
						36528: 40235,
						36529: 31482,
						36530: 36600,
						36531: 23437,
						36532: 38635,
						36533: 19971,
						36534: 21489,
						36535: 22519,
						36536: 22833,
						36537: 23241,
						36538: 23460,
						36539: 24713,
						36540: 28287,
						36541: 28422,
						36542: 30142,
						36543: 36074,
						36544: 23455,
						36545: 34048,
						36546: 31712,
						36547: 20594,
						36548: 26612,
						36549: 33437,
						36550: 23649,
						36551: 34122,
						36552: 32286,
						36553: 33294,
						36554: 20889,
						36555: 23556,
						36556: 25448,
						36557: 36198,
						36558: 26012,
						36559: 29038,
						36560: 31038,
						36561: 32023,
						36562: 32773,
						36563: 35613,
						36564: 36554,
						36565: 36974,
						36566: 34503,
						36567: 37034,
						36568: 20511,
						36569: 21242,
						36570: 23610,
						36571: 26451,
						36572: 28796,
						36573: 29237,
						36574: 37196,
						36575: 37320,
						36576: 37675,
						36577: 33509,
						36578: 23490,
						36579: 24369,
						36580: 24825,
						36581: 20027,
						36582: 21462,
						36583: 23432,
						36584: 25163,
						36585: 26417,
						36586: 27530,
						36587: 29417,
						36588: 29664,
						36589: 31278,
						36590: 33131,
						36591: 36259,
						36592: 37202,
						36593: 39318,
						36594: 20754,
						36595: 21463,
						36596: 21610,
						36597: 23551,
						36598: 25480,
						36599: 27193,
						36600: 32172,
						36601: 38656,
						36602: 22234,
						36603: 21454,
						36604: 21608,
						36672: 23447,
						36673: 23601,
						36674: 24030,
						36675: 20462,
						36676: 24833,
						36677: 25342,
						36678: 27954,
						36679: 31168,
						36680: 31179,
						36681: 32066,
						36682: 32333,
						36683: 32722,
						36684: 33261,
						36685: 33311,
						36686: 33936,
						36687: 34886,
						36688: 35186,
						36689: 35728,
						36690: 36468,
						36691: 36655,
						36692: 36913,
						36693: 37195,
						36694: 37228,
						36695: 38598,
						36696: 37276,
						36697: 20160,
						36698: 20303,
						36699: 20805,
						36700: 21313,
						36701: 24467,
						36702: 25102,
						36703: 26580,
						36704: 27713,
						36705: 28171,
						36706: 29539,
						36707: 32294,
						36708: 37325,
						36709: 37507,
						36710: 21460,
						36711: 22809,
						36712: 23487,
						36713: 28113,
						36714: 31069,
						36715: 32302,
						36716: 31899,
						36717: 22654,
						36718: 29087,
						36719: 20986,
						36720: 34899,
						36721: 36848,
						36722: 20426,
						36723: 23803,
						36724: 26149,
						36725: 30636,
						36726: 31459,
						36727: 33308,
						36728: 39423,
						36729: 20934,
						36730: 24490,
						36731: 26092,
						36732: 26991,
						36733: 27529,
						36734: 28147,
						36736: 28310,
						36737: 28516,
						36738: 30462,
						36739: 32020,
						36740: 24033,
						36741: 36981,
						36742: 37255,
						36743: 38918,
						36744: 20966,
						36745: 21021,
						36746: 25152,
						36747: 26257,
						36748: 26329,
						36749: 28186,
						36750: 24246,
						36751: 32210,
						36752: 32626,
						36753: 26360,
						36754: 34223,
						36755: 34295,
						36756: 35576,
						36757: 21161,
						36758: 21465,
						36759: 22899,
						36760: 24207,
						36761: 24464,
						36762: 24661,
						36763: 37604,
						36764: 38500,
						36765: 20663,
						36766: 20767,
						36767: 21213,
						36768: 21280,
						36769: 21319,
						36770: 21484,
						36771: 21736,
						36772: 21830,
						36773: 21809,
						36774: 22039,
						36775: 22888,
						36776: 22974,
						36777: 23100,
						36778: 23477,
						36779: 23558,
						36780: 23567,
						36781: 23569,
						36782: 23578,
						36783: 24196,
						36784: 24202,
						36785: 24288,
						36786: 24432,
						36787: 25215,
						36788: 25220,
						36789: 25307,
						36790: 25484,
						36791: 25463,
						36792: 26119,
						36793: 26124,
						36794: 26157,
						36795: 26230,
						36796: 26494,
						36797: 26786,
						36798: 27167,
						36799: 27189,
						36800: 27836,
						36801: 28040,
						36802: 28169,
						36803: 28248,
						36804: 28988,
						36805: 28966,
						36806: 29031,
						36807: 30151,
						36808: 30465,
						36809: 30813,
						36810: 30977,
						36811: 31077,
						36812: 31216,
						36813: 31456,
						36814: 31505,
						36815: 31911,
						36816: 32057,
						36817: 32918,
						36818: 33750,
						36819: 33931,
						36820: 34121,
						36821: 34909,
						36822: 35059,
						36823: 35359,
						36824: 35388,
						36825: 35412,
						36826: 35443,
						36827: 35937,
						36828: 36062,
						36829: 37284,
						36830: 37478,
						36831: 37758,
						36832: 37912,
						36833: 38556,
						36834: 38808,
						36835: 19978,
						36836: 19976,
						36837: 19998,
						36838: 20055,
						36839: 20887,
						36840: 21104,
						36841: 22478,
						36842: 22580,
						36843: 22732,
						36844: 23330,
						36845: 24120,
						36846: 24773,
						36847: 25854,
						36848: 26465,
						36849: 26454,
						36850: 27972,
						36851: 29366,
						36852: 30067,
						36853: 31331,
						36854: 33976,
						36855: 35698,
						36856: 37304,
						36857: 37664,
						36858: 22065,
						36859: 22516,
						36860: 39166,
						36928: 25325,
						36929: 26893,
						36930: 27542,
						36931: 29165,
						36932: 32340,
						36933: 32887,
						36934: 33394,
						36935: 35302,
						36936: 39135,
						36937: 34645,
						36938: 36785,
						36939: 23611,
						36940: 20280,
						36941: 20449,
						36942: 20405,
						36943: 21767,
						36944: 23072,
						36945: 23517,
						36946: 23529,
						36947: 24515,
						36948: 24910,
						36949: 25391,
						36950: 26032,
						36951: 26187,
						36952: 26862,
						36953: 27035,
						36954: 28024,
						36955: 28145,
						36956: 30003,
						36957: 30137,
						36958: 30495,
						36959: 31070,
						36960: 31206,
						36961: 32051,
						36962: 33251,
						36963: 33455,
						36964: 34218,
						36965: 35242,
						36966: 35386,
						36967: 36523,
						36968: 36763,
						36969: 36914,
						36970: 37341,
						36971: 38663,
						36972: 20154,
						36973: 20161,
						36974: 20995,
						36975: 22645,
						36976: 22764,
						36977: 23563,
						36978: 29978,
						36979: 23613,
						36980: 33102,
						36981: 35338,
						36982: 36805,
						36983: 38499,
						36984: 38765,
						36985: 31525,
						36986: 35535,
						36987: 38920,
						36988: 37218,
						36989: 22259,
						36990: 21416,
						36992: 36887,
						36993: 21561,
						36994: 22402,
						36995: 24101,
						36996: 25512,
						36997: 27700,
						36998: 28810,
						36999: 30561,
						37e3: 31883,
						37001: 32736,
						37002: 34928,
						37003: 36930,
						37004: 37204,
						37005: 37648,
						37006: 37656,
						37007: 38543,
						37008: 29790,
						37009: 39620,
						37010: 23815,
						37011: 23913,
						37012: 25968,
						37013: 26530,
						37014: 36264,
						37015: 38619,
						37016: 25454,
						37017: 26441,
						37018: 26905,
						37019: 33733,
						37020: 38935,
						37021: 38592,
						37022: 35070,
						37023: 28548,
						37024: 25722,
						37025: 23544,
						37026: 19990,
						37027: 28716,
						37028: 30045,
						37029: 26159,
						37030: 20932,
						37031: 21046,
						37032: 21218,
						37033: 22995,
						37034: 24449,
						37035: 24615,
						37036: 25104,
						37037: 25919,
						37038: 25972,
						37039: 26143,
						37040: 26228,
						37041: 26866,
						37042: 26646,
						37043: 27491,
						37044: 28165,
						37045: 29298,
						37046: 29983,
						37047: 30427,
						37048: 31934,
						37049: 32854,
						37050: 22768,
						37051: 35069,
						37052: 35199,
						37053: 35488,
						37054: 35475,
						37055: 35531,
						37056: 36893,
						37057: 37266,
						37058: 38738,
						37059: 38745,
						37060: 25993,
						37061: 31246,
						37062: 33030,
						37063: 38587,
						37064: 24109,
						37065: 24796,
						37066: 25114,
						37067: 26021,
						37068: 26132,
						37069: 26512,
						37070: 30707,
						37071: 31309,
						37072: 31821,
						37073: 32318,
						37074: 33034,
						37075: 36012,
						37076: 36196,
						37077: 36321,
						37078: 36447,
						37079: 30889,
						37080: 20999,
						37081: 25305,
						37082: 25509,
						37083: 25666,
						37084: 25240,
						37085: 35373,
						37086: 31363,
						37087: 31680,
						37088: 35500,
						37089: 38634,
						37090: 32118,
						37091: 33292,
						37092: 34633,
						37093: 20185,
						37094: 20808,
						37095: 21315,
						37096: 21344,
						37097: 23459,
						37098: 23554,
						37099: 23574,
						37100: 24029,
						37101: 25126,
						37102: 25159,
						37103: 25776,
						37104: 26643,
						37105: 26676,
						37106: 27849,
						37107: 27973,
						37108: 27927,
						37109: 26579,
						37110: 28508,
						37111: 29006,
						37112: 29053,
						37113: 26059,
						37114: 31359,
						37115: 31661,
						37116: 32218,
						37184: 32330,
						37185: 32680,
						37186: 33146,
						37187: 33307,
						37188: 33337,
						37189: 34214,
						37190: 35438,
						37191: 36046,
						37192: 36341,
						37193: 36984,
						37194: 36983,
						37195: 37549,
						37196: 37521,
						37197: 38275,
						37198: 39854,
						37199: 21069,
						37200: 21892,
						37201: 28472,
						37202: 28982,
						37203: 20840,
						37204: 31109,
						37205: 32341,
						37206: 33203,
						37207: 31950,
						37208: 22092,
						37209: 22609,
						37210: 23720,
						37211: 25514,
						37212: 26366,
						37213: 26365,
						37214: 26970,
						37215: 29401,
						37216: 30095,
						37217: 30094,
						37218: 30990,
						37219: 31062,
						37220: 31199,
						37221: 31895,
						37222: 32032,
						37223: 32068,
						37224: 34311,
						37225: 35380,
						37226: 38459,
						37227: 36961,
						37228: 40736,
						37229: 20711,
						37230: 21109,
						37231: 21452,
						37232: 21474,
						37233: 20489,
						37234: 21930,
						37235: 22766,
						37236: 22863,
						37237: 29245,
						37238: 23435,
						37239: 23652,
						37240: 21277,
						37241: 24803,
						37242: 24819,
						37243: 25436,
						37244: 25475,
						37245: 25407,
						37246: 25531,
						37248: 25805,
						37249: 26089,
						37250: 26361,
						37251: 24035,
						37252: 27085,
						37253: 27133,
						37254: 28437,
						37255: 29157,
						37256: 20105,
						37257: 30185,
						37258: 30456,
						37259: 31379,
						37260: 31967,
						37261: 32207,
						37262: 32156,
						37263: 32865,
						37264: 33609,
						37265: 33624,
						37266: 33900,
						37267: 33980,
						37268: 34299,
						37269: 35013,
						37270: 36208,
						37271: 36865,
						37272: 36973,
						37273: 37783,
						37274: 38684,
						37275: 39442,
						37276: 20687,
						37277: 22679,
						37278: 24974,
						37279: 33235,
						37280: 34101,
						37281: 36104,
						37282: 36896,
						37283: 20419,
						37284: 20596,
						37285: 21063,
						37286: 21363,
						37287: 24687,
						37288: 25417,
						37289: 26463,
						37290: 28204,
						37291: 36275,
						37292: 36895,
						37293: 20439,
						37294: 23646,
						37295: 36042,
						37296: 26063,
						37297: 32154,
						37298: 21330,
						37299: 34966,
						37300: 20854,
						37301: 25539,
						37302: 23384,
						37303: 23403,
						37304: 23562,
						37305: 25613,
						37306: 26449,
						37307: 36956,
						37308: 20182,
						37309: 22810,
						37310: 22826,
						37311: 27760,
						37312: 35409,
						37313: 21822,
						37314: 22549,
						37315: 22949,
						37316: 24816,
						37317: 25171,
						37318: 26561,
						37319: 33333,
						37320: 26965,
						37321: 38464,
						37322: 39364,
						37323: 39464,
						37324: 20307,
						37325: 22534,
						37326: 23550,
						37327: 32784,
						37328: 23729,
						37329: 24111,
						37330: 24453,
						37331: 24608,
						37332: 24907,
						37333: 25140,
						37334: 26367,
						37335: 27888,
						37336: 28382,
						37337: 32974,
						37338: 33151,
						37339: 33492,
						37340: 34955,
						37341: 36024,
						37342: 36864,
						37343: 36910,
						37344: 38538,
						37345: 40667,
						37346: 39899,
						37347: 20195,
						37348: 21488,
						37349: 22823,
						37350: 31532,
						37351: 37261,
						37352: 38988,
						37353: 40441,
						37354: 28381,
						37355: 28711,
						37356: 21331,
						37357: 21828,
						37358: 23429,
						37359: 25176,
						37360: 25246,
						37361: 25299,
						37362: 27810,
						37363: 28655,
						37364: 29730,
						37365: 35351,
						37366: 37944,
						37367: 28609,
						37368: 35582,
						37369: 33592,
						37370: 20967,
						37371: 34552,
						37372: 21482,
						37440: 21481,
						37441: 20294,
						37442: 36948,
						37443: 36784,
						37444: 22890,
						37445: 33073,
						37446: 24061,
						37447: 31466,
						37448: 36799,
						37449: 26842,
						37450: 35895,
						37451: 29432,
						37452: 40008,
						37453: 27197,
						37454: 35504,
						37455: 20025,
						37456: 21336,
						37457: 22022,
						37458: 22374,
						37459: 25285,
						37460: 25506,
						37461: 26086,
						37462: 27470,
						37463: 28129,
						37464: 28251,
						37465: 28845,
						37466: 30701,
						37467: 31471,
						37468: 31658,
						37469: 32187,
						37470: 32829,
						37471: 32966,
						37472: 34507,
						37473: 35477,
						37474: 37723,
						37475: 22243,
						37476: 22727,
						37477: 24382,
						37478: 26029,
						37479: 26262,
						37480: 27264,
						37481: 27573,
						37482: 30007,
						37483: 35527,
						37484: 20516,
						37485: 30693,
						37486: 22320,
						37487: 24347,
						37488: 24677,
						37489: 26234,
						37490: 27744,
						37491: 30196,
						37492: 31258,
						37493: 32622,
						37494: 33268,
						37495: 34584,
						37496: 36933,
						37497: 39347,
						37498: 31689,
						37499: 30044,
						37500: 31481,
						37501: 31569,
						37502: 33988,
						37504: 36880,
						37505: 31209,
						37506: 31378,
						37507: 33590,
						37508: 23265,
						37509: 30528,
						37510: 20013,
						37511: 20210,
						37512: 23449,
						37513: 24544,
						37514: 25277,
						37515: 26172,
						37516: 26609,
						37517: 27880,
						37518: 34411,
						37519: 34935,
						37520: 35387,
						37521: 37198,
						37522: 37619,
						37523: 39376,
						37524: 27159,
						37525: 28710,
						37526: 29482,
						37527: 33511,
						37528: 33879,
						37529: 36015,
						37530: 19969,
						37531: 20806,
						37532: 20939,
						37533: 21899,
						37534: 23541,
						37535: 24086,
						37536: 24115,
						37537: 24193,
						37538: 24340,
						37539: 24373,
						37540: 24427,
						37541: 24500,
						37542: 25074,
						37543: 25361,
						37544: 26274,
						37545: 26397,
						37546: 28526,
						37547: 29266,
						37548: 30010,
						37549: 30522,
						37550: 32884,
						37551: 33081,
						37552: 33144,
						37553: 34678,
						37554: 35519,
						37555: 35548,
						37556: 36229,
						37557: 36339,
						37558: 37530,
						37559: 38263,
						37560: 38914,
						37561: 40165,
						37562: 21189,
						37563: 25431,
						37564: 30452,
						37565: 26389,
						37566: 27784,
						37567: 29645,
						37568: 36035,
						37569: 37806,
						37570: 38515,
						37571: 27941,
						37572: 22684,
						37573: 26894,
						37574: 27084,
						37575: 36861,
						37576: 37786,
						37577: 30171,
						37578: 36890,
						37579: 22618,
						37580: 26626,
						37581: 25524,
						37582: 27131,
						37583: 20291,
						37584: 28460,
						37585: 26584,
						37586: 36795,
						37587: 34086,
						37588: 32180,
						37589: 37716,
						37590: 26943,
						37591: 28528,
						37592: 22378,
						37593: 22775,
						37594: 23340,
						37595: 32044,
						37596: 29226,
						37597: 21514,
						37598: 37347,
						37599: 40372,
						37600: 20141,
						37601: 20302,
						37602: 20572,
						37603: 20597,
						37604: 21059,
						37605: 35998,
						37606: 21576,
						37607: 22564,
						37608: 23450,
						37609: 24093,
						37610: 24213,
						37611: 24237,
						37612: 24311,
						37613: 24351,
						37614: 24716,
						37615: 25269,
						37616: 25402,
						37617: 25552,
						37618: 26799,
						37619: 27712,
						37620: 30855,
						37621: 31118,
						37622: 31243,
						37623: 32224,
						37624: 33351,
						37625: 35330,
						37626: 35558,
						37627: 36420,
						37628: 36883,
						37696: 37048,
						37697: 37165,
						37698: 37336,
						37699: 40718,
						37700: 27877,
						37701: 25688,
						37702: 25826,
						37703: 25973,
						37704: 28404,
						37705: 30340,
						37706: 31515,
						37707: 36969,
						37708: 37841,
						37709: 28346,
						37710: 21746,
						37711: 24505,
						37712: 25764,
						37713: 36685,
						37714: 36845,
						37715: 37444,
						37716: 20856,
						37717: 22635,
						37718: 22825,
						37719: 23637,
						37720: 24215,
						37721: 28155,
						37722: 32399,
						37723: 29980,
						37724: 36028,
						37725: 36578,
						37726: 39003,
						37727: 28857,
						37728: 20253,
						37729: 27583,
						37730: 28593,
						37731: 3e4,
						37732: 38651,
						37733: 20814,
						37734: 21520,
						37735: 22581,
						37736: 22615,
						37737: 22956,
						37738: 23648,
						37739: 24466,
						37740: 26007,
						37741: 26460,
						37742: 28193,
						37743: 30331,
						37744: 33759,
						37745: 36077,
						37746: 36884,
						37747: 37117,
						37748: 37709,
						37749: 30757,
						37750: 30778,
						37751: 21162,
						37752: 24230,
						37753: 22303,
						37754: 22900,
						37755: 24594,
						37756: 20498,
						37757: 20826,
						37758: 20908,
						37760: 20941,
						37761: 20992,
						37762: 21776,
						37763: 22612,
						37764: 22616,
						37765: 22871,
						37766: 23445,
						37767: 23798,
						37768: 23947,
						37769: 24764,
						37770: 25237,
						37771: 25645,
						37772: 26481,
						37773: 26691,
						37774: 26812,
						37775: 26847,
						37776: 30423,
						37777: 28120,
						37778: 28271,
						37779: 28059,
						37780: 28783,
						37781: 29128,
						37782: 24403,
						37783: 30168,
						37784: 31095,
						37785: 31561,
						37786: 31572,
						37787: 31570,
						37788: 31958,
						37789: 32113,
						37790: 21040,
						37791: 33891,
						37792: 34153,
						37793: 34276,
						37794: 35342,
						37795: 35588,
						37796: 35910,
						37797: 36367,
						37798: 36867,
						37799: 36879,
						37800: 37913,
						37801: 38518,
						37802: 38957,
						37803: 39472,
						37804: 38360,
						37805: 20685,
						37806: 21205,
						37807: 21516,
						37808: 22530,
						37809: 23566,
						37810: 24999,
						37811: 25758,
						37812: 27934,
						37813: 30643,
						37814: 31461,
						37815: 33012,
						37816: 33796,
						37817: 36947,
						37818: 37509,
						37819: 23776,
						37820: 40199,
						37821: 21311,
						37822: 24471,
						37823: 24499,
						37824: 28060,
						37825: 29305,
						37826: 30563,
						37827: 31167,
						37828: 31716,
						37829: 27602,
						37830: 29420,
						37831: 35501,
						37832: 26627,
						37833: 27233,
						37834: 20984,
						37835: 31361,
						37836: 26932,
						37837: 23626,
						37838: 40182,
						37839: 33515,
						37840: 23493,
						37841: 37193,
						37842: 28702,
						37843: 22136,
						37844: 23663,
						37845: 24775,
						37846: 25958,
						37847: 27788,
						37848: 35930,
						37849: 36929,
						37850: 38931,
						37851: 21585,
						37852: 26311,
						37853: 37389,
						37854: 22856,
						37855: 37027,
						37856: 20869,
						37857: 20045,
						37858: 20970,
						37859: 34201,
						37860: 35598,
						37861: 28760,
						37862: 25466,
						37863: 37707,
						37864: 26978,
						37865: 39348,
						37866: 32260,
						37867: 30071,
						37868: 21335,
						37869: 26976,
						37870: 36575,
						37871: 38627,
						37872: 27741,
						37873: 20108,
						37874: 23612,
						37875: 24336,
						37876: 36841,
						37877: 21250,
						37878: 36049,
						37879: 32905,
						37880: 34425,
						37881: 24319,
						37882: 26085,
						37883: 20083,
						37884: 20837,
						37952: 22914,
						37953: 23615,
						37954: 38894,
						37955: 20219,
						37956: 22922,
						37957: 24525,
						37958: 35469,
						37959: 28641,
						37960: 31152,
						37961: 31074,
						37962: 23527,
						37963: 33905,
						37964: 29483,
						37965: 29105,
						37966: 24180,
						37967: 24565,
						37968: 25467,
						37969: 25754,
						37970: 29123,
						37971: 31896,
						37972: 20035,
						37973: 24316,
						37974: 20043,
						37975: 22492,
						37976: 22178,
						37977: 24745,
						37978: 28611,
						37979: 32013,
						37980: 33021,
						37981: 33075,
						37982: 33215,
						37983: 36786,
						37984: 35223,
						37985: 34468,
						37986: 24052,
						37987: 25226,
						37988: 25773,
						37989: 35207,
						37990: 26487,
						37991: 27874,
						37992: 27966,
						37993: 29750,
						37994: 30772,
						37995: 23110,
						37996: 32629,
						37997: 33453,
						37998: 39340,
						37999: 20467,
						38e3: 24259,
						38001: 25309,
						38002: 25490,
						38003: 25943,
						38004: 26479,
						38005: 30403,
						38006: 29260,
						38007: 32972,
						38008: 32954,
						38009: 36649,
						38010: 37197,
						38011: 20493,
						38012: 22521,
						38013: 23186,
						38014: 26757,
						38016: 26995,
						38017: 29028,
						38018: 29437,
						38019: 36023,
						38020: 22770,
						38021: 36064,
						38022: 38506,
						38023: 36889,
						38024: 34687,
						38025: 31204,
						38026: 30695,
						38027: 33833,
						38028: 20271,
						38029: 21093,
						38030: 21338,
						38031: 25293,
						38032: 26575,
						38033: 27850,
						38034: 30333,
						38035: 31636,
						38036: 31893,
						38037: 33334,
						38038: 34180,
						38039: 36843,
						38040: 26333,
						38041: 28448,
						38042: 29190,
						38043: 32283,
						38044: 33707,
						38045: 39361,
						38046: 40614,
						38047: 20989,
						38048: 31665,
						38049: 30834,
						38050: 31672,
						38051: 32903,
						38052: 31560,
						38053: 27368,
						38054: 24161,
						38055: 32908,
						38056: 30033,
						38057: 30048,
						38058: 20843,
						38059: 37474,
						38060: 28300,
						38061: 30330,
						38062: 37271,
						38063: 39658,
						38064: 20240,
						38065: 32624,
						38066: 25244,
						38067: 31567,
						38068: 38309,
						38069: 40169,
						38070: 22138,
						38071: 22617,
						38072: 34532,
						38073: 38588,
						38074: 20276,
						38075: 21028,
						38076: 21322,
						38077: 21453,
						38078: 21467,
						38079: 24070,
						38080: 25644,
						38081: 26001,
						38082: 26495,
						38083: 27710,
						38084: 27726,
						38085: 29256,
						38086: 29359,
						38087: 29677,
						38088: 30036,
						38089: 32321,
						38090: 33324,
						38091: 34281,
						38092: 36009,
						38093: 31684,
						38094: 37318,
						38095: 29033,
						38096: 38930,
						38097: 39151,
						38098: 25405,
						38099: 26217,
						38100: 30058,
						38101: 30436,
						38102: 30928,
						38103: 34115,
						38104: 34542,
						38105: 21290,
						38106: 21329,
						38107: 21542,
						38108: 22915,
						38109: 24199,
						38110: 24444,
						38111: 24754,
						38112: 25161,
						38113: 25209,
						38114: 25259,
						38115: 26e3,
						38116: 27604,
						38117: 27852,
						38118: 30130,
						38119: 30382,
						38120: 30865,
						38121: 31192,
						38122: 32203,
						38123: 32631,
						38124: 32933,
						38125: 34987,
						38126: 35513,
						38127: 36027,
						38128: 36991,
						38129: 38750,
						38130: 39131,
						38131: 27147,
						38132: 31800,
						38133: 20633,
						38134: 23614,
						38135: 24494,
						38136: 26503,
						38137: 27608,
						38138: 29749,
						38139: 30473,
						38140: 32654,
						38208: 40763,
						38209: 26570,
						38210: 31255,
						38211: 21305,
						38212: 30091,
						38213: 39661,
						38214: 24422,
						38215: 33181,
						38216: 33777,
						38217: 32920,
						38218: 24380,
						38219: 24517,
						38220: 30050,
						38221: 31558,
						38222: 36924,
						38223: 26727,
						38224: 23019,
						38225: 23195,
						38226: 32016,
						38227: 30334,
						38228: 35628,
						38229: 20469,
						38230: 24426,
						38231: 27161,
						38232: 27703,
						38233: 28418,
						38234: 29922,
						38235: 31080,
						38236: 34920,
						38237: 35413,
						38238: 35961,
						38239: 24287,
						38240: 25551,
						38241: 30149,
						38242: 31186,
						38243: 33495,
						38244: 37672,
						38245: 37618,
						38246: 33948,
						38247: 34541,
						38248: 39981,
						38249: 21697,
						38250: 24428,
						38251: 25996,
						38252: 27996,
						38253: 28693,
						38254: 36007,
						38255: 36051,
						38256: 38971,
						38257: 25935,
						38258: 29942,
						38259: 19981,
						38260: 20184,
						38261: 22496,
						38262: 22827,
						38263: 23142,
						38264: 23500,
						38265: 20904,
						38266: 24067,
						38267: 24220,
						38268: 24598,
						38269: 25206,
						38270: 25975,
						38272: 26023,
						38273: 26222,
						38274: 28014,
						38275: 29238,
						38276: 31526,
						38277: 33104,
						38278: 33178,
						38279: 33433,
						38280: 35676,
						38281: 36e3,
						38282: 36070,
						38283: 36212,
						38284: 38428,
						38285: 38468,
						38286: 20398,
						38287: 25771,
						38288: 27494,
						38289: 33310,
						38290: 33889,
						38291: 34154,
						38292: 37096,
						38293: 23553,
						38294: 26963,
						38295: 39080,
						38296: 33914,
						38297: 34135,
						38298: 20239,
						38299: 21103,
						38300: 24489,
						38301: 24133,
						38302: 26381,
						38303: 31119,
						38304: 33145,
						38305: 35079,
						38306: 35206,
						38307: 28149,
						38308: 24343,
						38309: 25173,
						38310: 27832,
						38311: 20175,
						38312: 29289,
						38313: 39826,
						38314: 20998,
						38315: 21563,
						38316: 22132,
						38317: 22707,
						38318: 24996,
						38319: 25198,
						38320: 28954,
						38321: 22894,
						38322: 31881,
						38323: 31966,
						38324: 32027,
						38325: 38640,
						38326: 25991,
						38327: 32862,
						38328: 19993,
						38329: 20341,
						38330: 20853,
						38331: 22592,
						38332: 24163,
						38333: 24179,
						38334: 24330,
						38335: 26564,
						38336: 20006,
						38337: 34109,
						38338: 38281,
						38339: 38491,
						38340: 31859,
						38341: 38913,
						38342: 20731,
						38343: 22721,
						38344: 30294,
						38345: 30887,
						38346: 21029,
						38347: 30629,
						38348: 34065,
						38349: 31622,
						38350: 20559,
						38351: 22793,
						38352: 29255,
						38353: 31687,
						38354: 32232,
						38355: 36794,
						38356: 36820,
						38357: 36941,
						38358: 20415,
						38359: 21193,
						38360: 23081,
						38361: 24321,
						38362: 38829,
						38363: 20445,
						38364: 33303,
						38365: 37610,
						38366: 22275,
						38367: 25429,
						38368: 27497,
						38369: 29995,
						38370: 35036,
						38371: 36628,
						38372: 31298,
						38373: 21215,
						38374: 22675,
						38375: 24917,
						38376: 25098,
						38377: 26286,
						38378: 27597,
						38379: 31807,
						38380: 33769,
						38381: 20515,
						38382: 20472,
						38383: 21253,
						38384: 21574,
						38385: 22577,
						38386: 22857,
						38387: 23453,
						38388: 23792,
						38389: 23791,
						38390: 23849,
						38391: 24214,
						38392: 25265,
						38393: 25447,
						38394: 25918,
						38395: 26041,
						38396: 26379,
						38464: 27861,
						38465: 27873,
						38466: 28921,
						38467: 30770,
						38468: 32299,
						38469: 32990,
						38470: 33459,
						38471: 33804,
						38472: 34028,
						38473: 34562,
						38474: 35090,
						38475: 35370,
						38476: 35914,
						38477: 37030,
						38478: 37586,
						38479: 39165,
						38480: 40179,
						38481: 40300,
						38482: 20047,
						38483: 20129,
						38484: 20621,
						38485: 21078,
						38486: 22346,
						38487: 22952,
						38488: 24125,
						38489: 24536,
						38490: 24537,
						38491: 25151,
						38492: 26292,
						38493: 26395,
						38494: 26576,
						38495: 26834,
						38496: 20882,
						38497: 32033,
						38498: 32938,
						38499: 33192,
						38500: 35584,
						38501: 35980,
						38502: 36031,
						38503: 37502,
						38504: 38450,
						38505: 21536,
						38506: 38956,
						38507: 21271,
						38508: 20693,
						38509: 21340,
						38510: 22696,
						38511: 25778,
						38512: 26420,
						38513: 29287,
						38514: 30566,
						38515: 31302,
						38516: 37350,
						38517: 21187,
						38518: 27809,
						38519: 27526,
						38520: 22528,
						38521: 24140,
						38522: 22868,
						38523: 26412,
						38524: 32763,
						38525: 20961,
						38526: 30406,
						38528: 25705,
						38529: 30952,
						38530: 39764,
						38531: 40635,
						38532: 22475,
						38533: 22969,
						38534: 26151,
						38535: 26522,
						38536: 27598,
						38537: 21737,
						38538: 27097,
						38539: 24149,
						38540: 33180,
						38541: 26517,
						38542: 39850,
						38543: 26622,
						38544: 40018,
						38545: 26717,
						38546: 20134,
						38547: 20451,
						38548: 21448,
						38549: 25273,
						38550: 26411,
						38551: 27819,
						38552: 36804,
						38553: 20397,
						38554: 32365,
						38555: 40639,
						38556: 19975,
						38557: 24930,
						38558: 28288,
						38559: 28459,
						38560: 34067,
						38561: 21619,
						38562: 26410,
						38563: 39749,
						38564: 24051,
						38565: 31637,
						38566: 23724,
						38567: 23494,
						38568: 34588,
						38569: 28234,
						38570: 34001,
						38571: 31252,
						38572: 33032,
						38573: 22937,
						38574: 31885,
						38575: 27665,
						38576: 30496,
						38577: 21209,
						38578: 22818,
						38579: 28961,
						38580: 29279,
						38581: 30683,
						38582: 38695,
						38583: 40289,
						38584: 26891,
						38585: 23167,
						38586: 23064,
						38587: 20901,
						38588: 21517,
						38589: 21629,
						38590: 26126,
						38591: 30431,
						38592: 36855,
						38593: 37528,
						38594: 40180,
						38595: 23018,
						38596: 29277,
						38597: 28357,
						38598: 20813,
						38599: 26825,
						38600: 32191,
						38601: 32236,
						38602: 38754,
						38603: 40634,
						38604: 25720,
						38605: 27169,
						38606: 33538,
						38607: 22916,
						38608: 23391,
						38609: 27611,
						38610: 29467,
						38611: 30450,
						38612: 32178,
						38613: 32791,
						38614: 33945,
						38615: 20786,
						38616: 26408,
						38617: 40665,
						38618: 30446,
						38619: 26466,
						38620: 21247,
						38621: 39173,
						38622: 23588,
						38623: 25147,
						38624: 31870,
						38625: 36016,
						38626: 21839,
						38627: 24758,
						38628: 32011,
						38629: 38272,
						38630: 21249,
						38631: 20063,
						38632: 20918,
						38633: 22812,
						38634: 29242,
						38635: 32822,
						38636: 37326,
						38637: 24357,
						38638: 30690,
						38639: 21380,
						38640: 24441,
						38641: 32004,
						38642: 34220,
						38643: 35379,
						38644: 36493,
						38645: 38742,
						38646: 26611,
						38647: 34222,
						38648: 37971,
						38649: 24841,
						38650: 24840,
						38651: 27833,
						38652: 30290,
						38720: 35565,
						38721: 36664,
						38722: 21807,
						38723: 20305,
						38724: 20778,
						38725: 21191,
						38726: 21451,
						38727: 23461,
						38728: 24189,
						38729: 24736,
						38730: 24962,
						38731: 25558,
						38732: 26377,
						38733: 26586,
						38734: 28263,
						38735: 28044,
						38736: 29494,
						38737: 29495,
						38738: 30001,
						38739: 31056,
						38740: 35029,
						38741: 35480,
						38742: 36938,
						38743: 37009,
						38744: 37109,
						38745: 38596,
						38746: 34701,
						38747: 22805,
						38748: 20104,
						38749: 20313,
						38750: 19982,
						38751: 35465,
						38752: 36671,
						38753: 38928,
						38754: 20653,
						38755: 24188,
						38756: 22934,
						38757: 23481,
						38758: 24248,
						38759: 25562,
						38760: 25594,
						38761: 25793,
						38762: 26332,
						38763: 26954,
						38764: 27096,
						38765: 27915,
						38766: 28342,
						38767: 29076,
						38768: 29992,
						38769: 31407,
						38770: 32650,
						38771: 32768,
						38772: 33865,
						38773: 33993,
						38774: 35201,
						38775: 35617,
						38776: 36362,
						38777: 36965,
						38778: 38525,
						38779: 39178,
						38780: 24958,
						38781: 25233,
						38782: 27442,
						38784: 27779,
						38785: 28020,
						38786: 32716,
						38787: 32764,
						38788: 28096,
						38789: 32645,
						38790: 34746,
						38791: 35064,
						38792: 26469,
						38793: 33713,
						38794: 38972,
						38795: 38647,
						38796: 27931,
						38797: 32097,
						38798: 33853,
						38799: 37226,
						38800: 20081,
						38801: 21365,
						38802: 23888,
						38803: 27396,
						38804: 28651,
						38805: 34253,
						38806: 34349,
						38807: 35239,
						38808: 21033,
						38809: 21519,
						38810: 23653,
						38811: 26446,
						38812: 26792,
						38813: 29702,
						38814: 29827,
						38815: 30178,
						38816: 35023,
						38817: 35041,
						38818: 37324,
						38819: 38626,
						38820: 38520,
						38821: 24459,
						38822: 29575,
						38823: 31435,
						38824: 33870,
						38825: 25504,
						38826: 30053,
						38827: 21129,
						38828: 27969,
						38829: 28316,
						38830: 29705,
						38831: 30041,
						38832: 30827,
						38833: 31890,
						38834: 38534,
						38835: 31452,
						38836: 40845,
						38837: 20406,
						38838: 24942,
						38839: 26053,
						38840: 34396,
						38841: 20102,
						38842: 20142,
						38843: 20698,
						38844: 20001,
						38845: 20940,
						38846: 23534,
						38847: 26009,
						38848: 26753,
						38849: 28092,
						38850: 29471,
						38851: 30274,
						38852: 30637,
						38853: 31260,
						38854: 31975,
						38855: 33391,
						38856: 35538,
						38857: 36988,
						38858: 37327,
						38859: 38517,
						38860: 38936,
						38861: 21147,
						38862: 32209,
						38863: 20523,
						38864: 21400,
						38865: 26519,
						38866: 28107,
						38867: 29136,
						38868: 29747,
						38869: 33256,
						38870: 36650,
						38871: 38563,
						38872: 40023,
						38873: 40607,
						38874: 29792,
						38875: 22593,
						38876: 28057,
						38877: 32047,
						38878: 39006,
						38879: 20196,
						38880: 20278,
						38881: 20363,
						38882: 20919,
						38883: 21169,
						38884: 23994,
						38885: 24604,
						38886: 29618,
						38887: 31036,
						38888: 33491,
						38889: 37428,
						38890: 38583,
						38891: 38646,
						38892: 38666,
						38893: 40599,
						38894: 40802,
						38895: 26278,
						38896: 27508,
						38897: 21015,
						38898: 21155,
						38899: 28872,
						38900: 35010,
						38901: 24265,
						38902: 24651,
						38903: 24976,
						38904: 28451,
						38905: 29001,
						38906: 31806,
						38907: 32244,
						38908: 32879,
						38976: 34030,
						38977: 36899,
						38978: 37676,
						38979: 21570,
						38980: 39791,
						38981: 27347,
						38982: 28809,
						38983: 36034,
						38984: 36335,
						38985: 38706,
						38986: 21172,
						38987: 23105,
						38988: 24266,
						38989: 24324,
						38990: 26391,
						38991: 27004,
						38992: 27028,
						38993: 28010,
						38994: 28431,
						38995: 29282,
						38996: 29436,
						38997: 31725,
						38998: 32769,
						38999: 32894,
						39e3: 34635,
						39001: 37070,
						39002: 20845,
						39003: 40595,
						39004: 31108,
						39005: 32907,
						39006: 37682,
						39007: 35542,
						39008: 20525,
						39009: 21644,
						39010: 35441,
						39011: 27498,
						39012: 36036,
						39013: 33031,
						39014: 24785,
						39015: 26528,
						39016: 40434,
						39017: 20121,
						39018: 20120,
						39019: 39952,
						39020: 35435,
						39021: 34241,
						39022: 34152,
						39023: 26880,
						39024: 28286,
						39025: 30871,
						39026: 33109,
						39071: 24332,
						39072: 19984,
						39073: 19989,
						39074: 20010,
						39075: 20017,
						39076: 20022,
						39077: 20028,
						39078: 20031,
						39079: 20034,
						39080: 20054,
						39081: 20056,
						39082: 20098,
						39083: 20101,
						39084: 35947,
						39085: 20106,
						39086: 33298,
						39087: 24333,
						39088: 20110,
						39089: 20126,
						39090: 20127,
						39091: 20128,
						39092: 20130,
						39093: 20144,
						39094: 20147,
						39095: 20150,
						39096: 20174,
						39097: 20173,
						39098: 20164,
						39099: 20166,
						39100: 20162,
						39101: 20183,
						39102: 20190,
						39103: 20205,
						39104: 20191,
						39105: 20215,
						39106: 20233,
						39107: 20314,
						39108: 20272,
						39109: 20315,
						39110: 20317,
						39111: 20311,
						39112: 20295,
						39113: 20342,
						39114: 20360,
						39115: 20367,
						39116: 20376,
						39117: 20347,
						39118: 20329,
						39119: 20336,
						39120: 20369,
						39121: 20335,
						39122: 20358,
						39123: 20374,
						39124: 20760,
						39125: 20436,
						39126: 20447,
						39127: 20430,
						39128: 20440,
						39129: 20443,
						39130: 20433,
						39131: 20442,
						39132: 20432,
						39133: 20452,
						39134: 20453,
						39135: 20506,
						39136: 20520,
						39137: 20500,
						39138: 20522,
						39139: 20517,
						39140: 20485,
						39141: 20252,
						39142: 20470,
						39143: 20513,
						39144: 20521,
						39145: 20524,
						39146: 20478,
						39147: 20463,
						39148: 20497,
						39149: 20486,
						39150: 20547,
						39151: 20551,
						39152: 26371,
						39153: 20565,
						39154: 20560,
						39155: 20552,
						39156: 20570,
						39157: 20566,
						39158: 20588,
						39159: 20600,
						39160: 20608,
						39161: 20634,
						39162: 20613,
						39163: 20660,
						39164: 20658,
						39232: 20681,
						39233: 20682,
						39234: 20659,
						39235: 20674,
						39236: 20694,
						39237: 20702,
						39238: 20709,
						39239: 20717,
						39240: 20707,
						39241: 20718,
						39242: 20729,
						39243: 20725,
						39244: 20745,
						39245: 20737,
						39246: 20738,
						39247: 20758,
						39248: 20757,
						39249: 20756,
						39250: 20762,
						39251: 20769,
						39252: 20794,
						39253: 20791,
						39254: 20796,
						39255: 20795,
						39256: 20799,
						39257: 20800,
						39258: 20818,
						39259: 20812,
						39260: 20820,
						39261: 20834,
						39262: 31480,
						39263: 20841,
						39264: 20842,
						39265: 20846,
						39266: 20864,
						39267: 20866,
						39268: 22232,
						39269: 20876,
						39270: 20873,
						39271: 20879,
						39272: 20881,
						39273: 20883,
						39274: 20885,
						39275: 20886,
						39276: 20900,
						39277: 20902,
						39278: 20898,
						39279: 20905,
						39280: 20906,
						39281: 20907,
						39282: 20915,
						39283: 20913,
						39284: 20914,
						39285: 20912,
						39286: 20917,
						39287: 20925,
						39288: 20933,
						39289: 20937,
						39290: 20955,
						39291: 20960,
						39292: 34389,
						39293: 20969,
						39294: 20973,
						39296: 20976,
						39297: 20981,
						39298: 20990,
						39299: 20996,
						39300: 21003,
						39301: 21012,
						39302: 21006,
						39303: 21031,
						39304: 21034,
						39305: 21038,
						39306: 21043,
						39307: 21049,
						39308: 21071,
						39309: 21060,
						39310: 21067,
						39311: 21068,
						39312: 21086,
						39313: 21076,
						39314: 21098,
						39315: 21108,
						39316: 21097,
						39317: 21107,
						39318: 21119,
						39319: 21117,
						39320: 21133,
						39321: 21140,
						39322: 21138,
						39323: 21105,
						39324: 21128,
						39325: 21137,
						39326: 36776,
						39327: 36775,
						39328: 21164,
						39329: 21165,
						39330: 21180,
						39331: 21173,
						39332: 21185,
						39333: 21197,
						39334: 21207,
						39335: 21214,
						39336: 21219,
						39337: 21222,
						39338: 39149,
						39339: 21216,
						39340: 21235,
						39341: 21237,
						39342: 21240,
						39343: 21241,
						39344: 21254,
						39345: 21256,
						39346: 30008,
						39347: 21261,
						39348: 21264,
						39349: 21263,
						39350: 21269,
						39351: 21274,
						39352: 21283,
						39353: 21295,
						39354: 21297,
						39355: 21299,
						39356: 21304,
						39357: 21312,
						39358: 21318,
						39359: 21317,
						39360: 19991,
						39361: 21321,
						39362: 21325,
						39363: 20950,
						39364: 21342,
						39365: 21353,
						39366: 21358,
						39367: 22808,
						39368: 21371,
						39369: 21367,
						39370: 21378,
						39371: 21398,
						39372: 21408,
						39373: 21414,
						39374: 21413,
						39375: 21422,
						39376: 21424,
						39377: 21430,
						39378: 21443,
						39379: 31762,
						39380: 38617,
						39381: 21471,
						39382: 26364,
						39383: 29166,
						39384: 21486,
						39385: 21480,
						39386: 21485,
						39387: 21498,
						39388: 21505,
						39389: 21565,
						39390: 21568,
						39391: 21548,
						39392: 21549,
						39393: 21564,
						39394: 21550,
						39395: 21558,
						39396: 21545,
						39397: 21533,
						39398: 21582,
						39399: 21647,
						39400: 21621,
						39401: 21646,
						39402: 21599,
						39403: 21617,
						39404: 21623,
						39405: 21616,
						39406: 21650,
						39407: 21627,
						39408: 21632,
						39409: 21622,
						39410: 21636,
						39411: 21648,
						39412: 21638,
						39413: 21703,
						39414: 21666,
						39415: 21688,
						39416: 21669,
						39417: 21676,
						39418: 21700,
						39419: 21704,
						39420: 21672,
						39488: 21675,
						39489: 21698,
						39490: 21668,
						39491: 21694,
						39492: 21692,
						39493: 21720,
						39494: 21733,
						39495: 21734,
						39496: 21775,
						39497: 21780,
						39498: 21757,
						39499: 21742,
						39500: 21741,
						39501: 21754,
						39502: 21730,
						39503: 21817,
						39504: 21824,
						39505: 21859,
						39506: 21836,
						39507: 21806,
						39508: 21852,
						39509: 21829,
						39510: 21846,
						39511: 21847,
						39512: 21816,
						39513: 21811,
						39514: 21853,
						39515: 21913,
						39516: 21888,
						39517: 21679,
						39518: 21898,
						39519: 21919,
						39520: 21883,
						39521: 21886,
						39522: 21912,
						39523: 21918,
						39524: 21934,
						39525: 21884,
						39526: 21891,
						39527: 21929,
						39528: 21895,
						39529: 21928,
						39530: 21978,
						39531: 21957,
						39532: 21983,
						39533: 21956,
						39534: 21980,
						39535: 21988,
						39536: 21972,
						39537: 22036,
						39538: 22007,
						39539: 22038,
						39540: 22014,
						39541: 22013,
						39542: 22043,
						39543: 22009,
						39544: 22094,
						39545: 22096,
						39546: 29151,
						39547: 22068,
						39548: 22070,
						39549: 22066,
						39550: 22072,
						39552: 22123,
						39553: 22116,
						39554: 22063,
						39555: 22124,
						39556: 22122,
						39557: 22150,
						39558: 22144,
						39559: 22154,
						39560: 22176,
						39561: 22164,
						39562: 22159,
						39563: 22181,
						39564: 22190,
						39565: 22198,
						39566: 22196,
						39567: 22210,
						39568: 22204,
						39569: 22209,
						39570: 22211,
						39571: 22208,
						39572: 22216,
						39573: 22222,
						39574: 22225,
						39575: 22227,
						39576: 22231,
						39577: 22254,
						39578: 22265,
						39579: 22272,
						39580: 22271,
						39581: 22276,
						39582: 22281,
						39583: 22280,
						39584: 22283,
						39585: 22285,
						39586: 22291,
						39587: 22296,
						39588: 22294,
						39589: 21959,
						39590: 22300,
						39591: 22310,
						39592: 22327,
						39593: 22328,
						39594: 22350,
						39595: 22331,
						39596: 22336,
						39597: 22351,
						39598: 22377,
						39599: 22464,
						39600: 22408,
						39601: 22369,
						39602: 22399,
						39603: 22409,
						39604: 22419,
						39605: 22432,
						39606: 22451,
						39607: 22436,
						39608: 22442,
						39609: 22448,
						39610: 22467,
						39611: 22470,
						39612: 22484,
						39613: 22482,
						39614: 22483,
						39615: 22538,
						39616: 22486,
						39617: 22499,
						39618: 22539,
						39619: 22553,
						39620: 22557,
						39621: 22642,
						39622: 22561,
						39623: 22626,
						39624: 22603,
						39625: 22640,
						39626: 27584,
						39627: 22610,
						39628: 22589,
						39629: 22649,
						39630: 22661,
						39631: 22713,
						39632: 22687,
						39633: 22699,
						39634: 22714,
						39635: 22750,
						39636: 22715,
						39637: 22712,
						39638: 22702,
						39639: 22725,
						39640: 22739,
						39641: 22737,
						39642: 22743,
						39643: 22745,
						39644: 22744,
						39645: 22757,
						39646: 22748,
						39647: 22756,
						39648: 22751,
						39649: 22767,
						39650: 22778,
						39651: 22777,
						39652: 22779,
						39653: 22780,
						39654: 22781,
						39655: 22786,
						39656: 22794,
						39657: 22800,
						39658: 22811,
						39659: 26790,
						39660: 22821,
						39661: 22828,
						39662: 22829,
						39663: 22834,
						39664: 22840,
						39665: 22846,
						39666: 31442,
						39667: 22869,
						39668: 22864,
						39669: 22862,
						39670: 22874,
						39671: 22872,
						39672: 22882,
						39673: 22880,
						39674: 22887,
						39675: 22892,
						39676: 22889,
						39744: 22904,
						39745: 22913,
						39746: 22941,
						39747: 20318,
						39748: 20395,
						39749: 22947,
						39750: 22962,
						39751: 22982,
						39752: 23016,
						39753: 23004,
						39754: 22925,
						39755: 23001,
						39756: 23002,
						39757: 23077,
						39758: 23071,
						39759: 23057,
						39760: 23068,
						39761: 23049,
						39762: 23066,
						39763: 23104,
						39764: 23148,
						39765: 23113,
						39766: 23093,
						39767: 23094,
						39768: 23138,
						39769: 23146,
						39770: 23194,
						39771: 23228,
						39772: 23230,
						39773: 23243,
						39774: 23234,
						39775: 23229,
						39776: 23267,
						39777: 23255,
						39778: 23270,
						39779: 23273,
						39780: 23254,
						39781: 23290,
						39782: 23291,
						39783: 23308,
						39784: 23307,
						39785: 23318,
						39786: 23346,
						39787: 23248,
						39788: 23338,
						39789: 23350,
						39790: 23358,
						39791: 23363,
						39792: 23365,
						39793: 23360,
						39794: 23377,
						39795: 23381,
						39796: 23386,
						39797: 23387,
						39798: 23397,
						39799: 23401,
						39800: 23408,
						39801: 23411,
						39802: 23413,
						39803: 23416,
						39804: 25992,
						39805: 23418,
						39806: 23424,
						39808: 23427,
						39809: 23462,
						39810: 23480,
						39811: 23491,
						39812: 23495,
						39813: 23497,
						39814: 23508,
						39815: 23504,
						39816: 23524,
						39817: 23526,
						39818: 23522,
						39819: 23518,
						39820: 23525,
						39821: 23531,
						39822: 23536,
						39823: 23542,
						39824: 23539,
						39825: 23557,
						39826: 23559,
						39827: 23560,
						39828: 23565,
						39829: 23571,
						39830: 23584,
						39831: 23586,
						39832: 23592,
						39833: 23608,
						39834: 23609,
						39835: 23617,
						39836: 23622,
						39837: 23630,
						39838: 23635,
						39839: 23632,
						39840: 23631,
						39841: 23409,
						39842: 23660,
						39843: 23662,
						39844: 20066,
						39845: 23670,
						39846: 23673,
						39847: 23692,
						39848: 23697,
						39849: 23700,
						39850: 22939,
						39851: 23723,
						39852: 23739,
						39853: 23734,
						39854: 23740,
						39855: 23735,
						39856: 23749,
						39857: 23742,
						39858: 23751,
						39859: 23769,
						39860: 23785,
						39861: 23805,
						39862: 23802,
						39863: 23789,
						39864: 23948,
						39865: 23786,
						39866: 23819,
						39867: 23829,
						39868: 23831,
						39869: 23900,
						39870: 23839,
						39871: 23835,
						39872: 23825,
						39873: 23828,
						39874: 23842,
						39875: 23834,
						39876: 23833,
						39877: 23832,
						39878: 23884,
						39879: 23890,
						39880: 23886,
						39881: 23883,
						39882: 23916,
						39883: 23923,
						39884: 23926,
						39885: 23943,
						39886: 23940,
						39887: 23938,
						39888: 23970,
						39889: 23965,
						39890: 23980,
						39891: 23982,
						39892: 23997,
						39893: 23952,
						39894: 23991,
						39895: 23996,
						39896: 24009,
						39897: 24013,
						39898: 24019,
						39899: 24018,
						39900: 24022,
						39901: 24027,
						39902: 24043,
						39903: 24050,
						39904: 24053,
						39905: 24075,
						39906: 24090,
						39907: 24089,
						39908: 24081,
						39909: 24091,
						39910: 24118,
						39911: 24119,
						39912: 24132,
						39913: 24131,
						39914: 24128,
						39915: 24142,
						39916: 24151,
						39917: 24148,
						39918: 24159,
						39919: 24162,
						39920: 24164,
						39921: 24135,
						39922: 24181,
						39923: 24182,
						39924: 24186,
						39925: 40636,
						39926: 24191,
						39927: 24224,
						39928: 24257,
						39929: 24258,
						39930: 24264,
						39931: 24272,
						39932: 24271,
						4e4: 24278,
						40001: 24291,
						40002: 24285,
						40003: 24282,
						40004: 24283,
						40005: 24290,
						40006: 24289,
						40007: 24296,
						40008: 24297,
						40009: 24300,
						40010: 24305,
						40011: 24307,
						40012: 24304,
						40013: 24308,
						40014: 24312,
						40015: 24318,
						40016: 24323,
						40017: 24329,
						40018: 24413,
						40019: 24412,
						40020: 24331,
						40021: 24337,
						40022: 24342,
						40023: 24361,
						40024: 24365,
						40025: 24376,
						40026: 24385,
						40027: 24392,
						40028: 24396,
						40029: 24398,
						40030: 24367,
						40031: 24401,
						40032: 24406,
						40033: 24407,
						40034: 24409,
						40035: 24417,
						40036: 24429,
						40037: 24435,
						40038: 24439,
						40039: 24451,
						40040: 24450,
						40041: 24447,
						40042: 24458,
						40043: 24456,
						40044: 24465,
						40045: 24455,
						40046: 24478,
						40047: 24473,
						40048: 24472,
						40049: 24480,
						40050: 24488,
						40051: 24493,
						40052: 24508,
						40053: 24534,
						40054: 24571,
						40055: 24548,
						40056: 24568,
						40057: 24561,
						40058: 24541,
						40059: 24755,
						40060: 24575,
						40061: 24609,
						40062: 24672,
						40064: 24601,
						40065: 24592,
						40066: 24617,
						40067: 24590,
						40068: 24625,
						40069: 24603,
						40070: 24597,
						40071: 24619,
						40072: 24614,
						40073: 24591,
						40074: 24634,
						40075: 24666,
						40076: 24641,
						40077: 24682,
						40078: 24695,
						40079: 24671,
						40080: 24650,
						40081: 24646,
						40082: 24653,
						40083: 24675,
						40084: 24643,
						40085: 24676,
						40086: 24642,
						40087: 24684,
						40088: 24683,
						40089: 24665,
						40090: 24705,
						40091: 24717,
						40092: 24807,
						40093: 24707,
						40094: 24730,
						40095: 24708,
						40096: 24731,
						40097: 24726,
						40098: 24727,
						40099: 24722,
						40100: 24743,
						40101: 24715,
						40102: 24801,
						40103: 24760,
						40104: 24800,
						40105: 24787,
						40106: 24756,
						40107: 24560,
						40108: 24765,
						40109: 24774,
						40110: 24757,
						40111: 24792,
						40112: 24909,
						40113: 24853,
						40114: 24838,
						40115: 24822,
						40116: 24823,
						40117: 24832,
						40118: 24820,
						40119: 24826,
						40120: 24835,
						40121: 24865,
						40122: 24827,
						40123: 24817,
						40124: 24845,
						40125: 24846,
						40126: 24903,
						40127: 24894,
						40128: 24872,
						40129: 24871,
						40130: 24906,
						40131: 24895,
						40132: 24892,
						40133: 24876,
						40134: 24884,
						40135: 24893,
						40136: 24898,
						40137: 24900,
						40138: 24947,
						40139: 24951,
						40140: 24920,
						40141: 24921,
						40142: 24922,
						40143: 24939,
						40144: 24948,
						40145: 24943,
						40146: 24933,
						40147: 24945,
						40148: 24927,
						40149: 24925,
						40150: 24915,
						40151: 24949,
						40152: 24985,
						40153: 24982,
						40154: 24967,
						40155: 25004,
						40156: 24980,
						40157: 24986,
						40158: 24970,
						40159: 24977,
						40160: 25003,
						40161: 25006,
						40162: 25036,
						40163: 25034,
						40164: 25033,
						40165: 25079,
						40166: 25032,
						40167: 25027,
						40168: 25030,
						40169: 25018,
						40170: 25035,
						40171: 32633,
						40172: 25037,
						40173: 25062,
						40174: 25059,
						40175: 25078,
						40176: 25082,
						40177: 25076,
						40178: 25087,
						40179: 25085,
						40180: 25084,
						40181: 25086,
						40182: 25088,
						40183: 25096,
						40184: 25097,
						40185: 25101,
						40186: 25100,
						40187: 25108,
						40188: 25115,
						40256: 25118,
						40257: 25121,
						40258: 25130,
						40259: 25134,
						40260: 25136,
						40261: 25138,
						40262: 25139,
						40263: 25153,
						40264: 25166,
						40265: 25182,
						40266: 25187,
						40267: 25179,
						40268: 25184,
						40269: 25192,
						40270: 25212,
						40271: 25218,
						40272: 25225,
						40273: 25214,
						40274: 25234,
						40275: 25235,
						40276: 25238,
						40277: 25300,
						40278: 25219,
						40279: 25236,
						40280: 25303,
						40281: 25297,
						40282: 25275,
						40283: 25295,
						40284: 25343,
						40285: 25286,
						40286: 25812,
						40287: 25288,
						40288: 25308,
						40289: 25292,
						40290: 25290,
						40291: 25282,
						40292: 25287,
						40293: 25243,
						40294: 25289,
						40295: 25356,
						40296: 25326,
						40297: 25329,
						40298: 25383,
						40299: 25346,
						40300: 25352,
						40301: 25327,
						40302: 25333,
						40303: 25424,
						40304: 25406,
						40305: 25421,
						40306: 25628,
						40307: 25423,
						40308: 25494,
						40309: 25486,
						40310: 25472,
						40311: 25515,
						40312: 25462,
						40313: 25507,
						40314: 25487,
						40315: 25481,
						40316: 25503,
						40317: 25525,
						40318: 25451,
						40320: 25449,
						40321: 25534,
						40322: 25577,
						40323: 25536,
						40324: 25542,
						40325: 25571,
						40326: 25545,
						40327: 25554,
						40328: 25590,
						40329: 25540,
						40330: 25622,
						40331: 25652,
						40332: 25606,
						40333: 25619,
						40334: 25638,
						40335: 25654,
						40336: 25885,
						40337: 25623,
						40338: 25640,
						40339: 25615,
						40340: 25703,
						40341: 25711,
						40342: 25718,
						40343: 25678,
						40344: 25898,
						40345: 25749,
						40346: 25747,
						40347: 25765,
						40348: 25769,
						40349: 25736,
						40350: 25788,
						40351: 25818,
						40352: 25810,
						40353: 25797,
						40354: 25799,
						40355: 25787,
						40356: 25816,
						40357: 25794,
						40358: 25841,
						40359: 25831,
						40360: 33289,
						40361: 25824,
						40362: 25825,
						40363: 25260,
						40364: 25827,
						40365: 25839,
						40366: 25900,
						40367: 25846,
						40368: 25844,
						40369: 25842,
						40370: 25850,
						40371: 25856,
						40372: 25853,
						40373: 25880,
						40374: 25884,
						40375: 25861,
						40376: 25892,
						40377: 25891,
						40378: 25899,
						40379: 25908,
						40380: 25909,
						40381: 25911,
						40382: 25910,
						40383: 25912,
						40384: 30027,
						40385: 25928,
						40386: 25942,
						40387: 25941,
						40388: 25933,
						40389: 25944,
						40390: 25950,
						40391: 25949,
						40392: 25970,
						40393: 25976,
						40394: 25986,
						40395: 25987,
						40396: 35722,
						40397: 26011,
						40398: 26015,
						40399: 26027,
						40400: 26039,
						40401: 26051,
						40402: 26054,
						40403: 26049,
						40404: 26052,
						40405: 26060,
						40406: 26066,
						40407: 26075,
						40408: 26073,
						40409: 26080,
						40410: 26081,
						40411: 26097,
						40412: 26482,
						40413: 26122,
						40414: 26115,
						40415: 26107,
						40416: 26483,
						40417: 26165,
						40418: 26166,
						40419: 26164,
						40420: 26140,
						40421: 26191,
						40422: 26180,
						40423: 26185,
						40424: 26177,
						40425: 26206,
						40426: 26205,
						40427: 26212,
						40428: 26215,
						40429: 26216,
						40430: 26207,
						40431: 26210,
						40432: 26224,
						40433: 26243,
						40434: 26248,
						40435: 26254,
						40436: 26249,
						40437: 26244,
						40438: 26264,
						40439: 26269,
						40440: 26305,
						40441: 26297,
						40442: 26313,
						40443: 26302,
						40444: 26300,
						40512: 26308,
						40513: 26296,
						40514: 26326,
						40515: 26330,
						40516: 26336,
						40517: 26175,
						40518: 26342,
						40519: 26345,
						40520: 26352,
						40521: 26357,
						40522: 26359,
						40523: 26383,
						40524: 26390,
						40525: 26398,
						40526: 26406,
						40527: 26407,
						40528: 38712,
						40529: 26414,
						40530: 26431,
						40531: 26422,
						40532: 26433,
						40533: 26424,
						40534: 26423,
						40535: 26438,
						40536: 26462,
						40537: 26464,
						40538: 26457,
						40539: 26467,
						40540: 26468,
						40541: 26505,
						40542: 26480,
						40543: 26537,
						40544: 26492,
						40545: 26474,
						40546: 26508,
						40547: 26507,
						40548: 26534,
						40549: 26529,
						40550: 26501,
						40551: 26551,
						40552: 26607,
						40553: 26548,
						40554: 26604,
						40555: 26547,
						40556: 26601,
						40557: 26552,
						40558: 26596,
						40559: 26590,
						40560: 26589,
						40561: 26594,
						40562: 26606,
						40563: 26553,
						40564: 26574,
						40565: 26566,
						40566: 26599,
						40567: 27292,
						40568: 26654,
						40569: 26694,
						40570: 26665,
						40571: 26688,
						40572: 26701,
						40573: 26674,
						40574: 26702,
						40576: 26803,
						40577: 26667,
						40578: 26713,
						40579: 26723,
						40580: 26743,
						40581: 26751,
						40582: 26783,
						40583: 26767,
						40584: 26797,
						40585: 26772,
						40586: 26781,
						40587: 26779,
						40588: 26755,
						40589: 27310,
						40590: 26809,
						40591: 26740,
						40592: 26805,
						40593: 26784,
						40594: 26810,
						40595: 26895,
						40596: 26765,
						40597: 26750,
						40598: 26881,
						40599: 26826,
						40600: 26888,
						40601: 26840,
						40602: 26914,
						40603: 26918,
						40604: 26849,
						40605: 26892,
						40606: 26829,
						40607: 26836,
						40608: 26855,
						40609: 26837,
						40610: 26934,
						40611: 26898,
						40612: 26884,
						40613: 26839,
						40614: 26851,
						40615: 26917,
						40616: 26873,
						40617: 26848,
						40618: 26863,
						40619: 26920,
						40620: 26922,
						40621: 26906,
						40622: 26915,
						40623: 26913,
						40624: 26822,
						40625: 27001,
						40626: 26999,
						40627: 26972,
						40628: 27e3,
						40629: 26987,
						40630: 26964,
						40631: 27006,
						40632: 26990,
						40633: 26937,
						40634: 26996,
						40635: 26941,
						40636: 26969,
						40637: 26928,
						40638: 26977,
						40639: 26974,
						40640: 26973,
						40641: 27009,
						40642: 26986,
						40643: 27058,
						40644: 27054,
						40645: 27088,
						40646: 27071,
						40647: 27073,
						40648: 27091,
						40649: 27070,
						40650: 27086,
						40651: 23528,
						40652: 27082,
						40653: 27101,
						40654: 27067,
						40655: 27075,
						40656: 27047,
						40657: 27182,
						40658: 27025,
						40659: 27040,
						40660: 27036,
						40661: 27029,
						40662: 27060,
						40663: 27102,
						40664: 27112,
						40665: 27138,
						40666: 27163,
						40667: 27135,
						40668: 27402,
						40669: 27129,
						40670: 27122,
						40671: 27111,
						40672: 27141,
						40673: 27057,
						40674: 27166,
						40675: 27117,
						40676: 27156,
						40677: 27115,
						40678: 27146,
						40679: 27154,
						40680: 27329,
						40681: 27171,
						40682: 27155,
						40683: 27204,
						40684: 27148,
						40685: 27250,
						40686: 27190,
						40687: 27256,
						40688: 27207,
						40689: 27234,
						40690: 27225,
						40691: 27238,
						40692: 27208,
						40693: 27192,
						40694: 27170,
						40695: 27280,
						40696: 27277,
						40697: 27296,
						40698: 27268,
						40699: 27298,
						40700: 27299,
						40768: 27287,
						40769: 34327,
						40770: 27323,
						40771: 27331,
						40772: 27330,
						40773: 27320,
						40774: 27315,
						40775: 27308,
						40776: 27358,
						40777: 27345,
						40778: 27359,
						40779: 27306,
						40780: 27354,
						40781: 27370,
						40782: 27387,
						40783: 27397,
						40784: 34326,
						40785: 27386,
						40786: 27410,
						40787: 27414,
						40788: 39729,
						40789: 27423,
						40790: 27448,
						40791: 27447,
						40792: 30428,
						40793: 27449,
						40794: 39150,
						40795: 27463,
						40796: 27459,
						40797: 27465,
						40798: 27472,
						40799: 27481,
						40800: 27476,
						40801: 27483,
						40802: 27487,
						40803: 27489,
						40804: 27512,
						40805: 27513,
						40806: 27519,
						40807: 27520,
						40808: 27524,
						40809: 27523,
						40810: 27533,
						40811: 27544,
						40812: 27541,
						40813: 27550,
						40814: 27556,
						40815: 27562,
						40816: 27563,
						40817: 27567,
						40818: 27570,
						40819: 27569,
						40820: 27571,
						40821: 27575,
						40822: 27580,
						40823: 27590,
						40824: 27595,
						40825: 27603,
						40826: 27615,
						40827: 27628,
						40828: 27627,
						40829: 27635,
						40830: 27631,
						40832: 40638,
						40833: 27656,
						40834: 27667,
						40835: 27668,
						40836: 27675,
						40837: 27684,
						40838: 27683,
						40839: 27742,
						40840: 27733,
						40841: 27746,
						40842: 27754,
						40843: 27778,
						40844: 27789,
						40845: 27802,
						40846: 27777,
						40847: 27803,
						40848: 27774,
						40849: 27752,
						40850: 27763,
						40851: 27794,
						40852: 27792,
						40853: 27844,
						40854: 27889,
						40855: 27859,
						40856: 27837,
						40857: 27863,
						40858: 27845,
						40859: 27869,
						40860: 27822,
						40861: 27825,
						40862: 27838,
						40863: 27834,
						40864: 27867,
						40865: 27887,
						40866: 27865,
						40867: 27882,
						40868: 27935,
						40869: 34893,
						40870: 27958,
						40871: 27947,
						40872: 27965,
						40873: 27960,
						40874: 27929,
						40875: 27957,
						40876: 27955,
						40877: 27922,
						40878: 27916,
						40879: 28003,
						40880: 28051,
						40881: 28004,
						40882: 27994,
						40883: 28025,
						40884: 27993,
						40885: 28046,
						40886: 28053,
						40887: 28644,
						40888: 28037,
						40889: 28153,
						40890: 28181,
						40891: 28170,
						40892: 28085,
						40893: 28103,
						40894: 28134,
						40895: 28088,
						40896: 28102,
						40897: 28140,
						40898: 28126,
						40899: 28108,
						40900: 28136,
						40901: 28114,
						40902: 28101,
						40903: 28154,
						40904: 28121,
						40905: 28132,
						40906: 28117,
						40907: 28138,
						40908: 28142,
						40909: 28205,
						40910: 28270,
						40911: 28206,
						40912: 28185,
						40913: 28274,
						40914: 28255,
						40915: 28222,
						40916: 28195,
						40917: 28267,
						40918: 28203,
						40919: 28278,
						40920: 28237,
						40921: 28191,
						40922: 28227,
						40923: 28218,
						40924: 28238,
						40925: 28196,
						40926: 28415,
						40927: 28189,
						40928: 28216,
						40929: 28290,
						40930: 28330,
						40931: 28312,
						40932: 28361,
						40933: 28343,
						40934: 28371,
						40935: 28349,
						40936: 28335,
						40937: 28356,
						40938: 28338,
						40939: 28372,
						40940: 28373,
						40941: 28303,
						40942: 28325,
						40943: 28354,
						40944: 28319,
						40945: 28481,
						40946: 28433,
						40947: 28748,
						40948: 28396,
						40949: 28408,
						40950: 28414,
						40951: 28479,
						40952: 28402,
						40953: 28465,
						40954: 28399,
						40955: 28466,
						40956: 28364,
						161: 65377,
						162: 65378,
						163: 65379,
						164: 65380,
						165: 65381,
						166: 65382,
						167: 65383,
						168: 65384,
						169: 65385,
						170: 65386,
						171: 65387,
						172: 65388,
						173: 65389,
						174: 65390,
						175: 65391,
						176: 65392,
						177: 65393,
						178: 65394,
						179: 65395,
						180: 65396,
						181: 65397,
						182: 65398,
						183: 65399,
						184: 65400,
						185: 65401,
						186: 65402,
						187: 65403,
						188: 65404,
						189: 65405,
						190: 65406,
						191: 65407,
						192: 65408,
						193: 65409,
						194: 65410,
						195: 65411,
						196: 65412,
						197: 65413,
						198: 65414,
						199: 65415,
						200: 65416,
						201: 65417,
						202: 65418,
						203: 65419,
						204: 65420,
						205: 65421,
						206: 65422,
						207: 65423,
						208: 65424,
						209: 65425,
						210: 65426,
						211: 65427,
						212: 65428,
						213: 65429,
						214: 65430,
						215: 65431,
						216: 65432,
						217: 65433,
						218: 65434,
						219: 65435,
						220: 65436,
						221: 65437,
						222: 65438,
						223: 65439,
						57408: 28478,
						57409: 28435,
						57410: 28407,
						57411: 28550,
						57412: 28538,
						57413: 28536,
						57414: 28545,
						57415: 28544,
						57416: 28527,
						57417: 28507,
						57418: 28659,
						57419: 28525,
						57420: 28546,
						57421: 28540,
						57422: 28504,
						57423: 28558,
						57424: 28561,
						57425: 28610,
						57426: 28518,
						57427: 28595,
						57428: 28579,
						57429: 28577,
						57430: 28580,
						57431: 28601,
						57432: 28614,
						57433: 28586,
						57434: 28639,
						57435: 28629,
						57436: 28652,
						57437: 28628,
						57438: 28632,
						57439: 28657,
						57440: 28654,
						57441: 28635,
						57442: 28681,
						57443: 28683,
						57444: 28666,
						57445: 28689,
						57446: 28673,
						57447: 28687,
						57448: 28670,
						57449: 28699,
						57450: 28698,
						57451: 28532,
						57452: 28701,
						57453: 28696,
						57454: 28703,
						57455: 28720,
						57456: 28734,
						57457: 28722,
						57458: 28753,
						57459: 28771,
						57460: 28825,
						57461: 28818,
						57462: 28847,
						57463: 28913,
						57464: 28844,
						57465: 28856,
						57466: 28851,
						57467: 28846,
						57468: 28895,
						57469: 28875,
						57470: 28893,
						57472: 28889,
						57473: 28937,
						57474: 28925,
						57475: 28956,
						57476: 28953,
						57477: 29029,
						57478: 29013,
						57479: 29064,
						57480: 29030,
						57481: 29026,
						57482: 29004,
						57483: 29014,
						57484: 29036,
						57485: 29071,
						57486: 29179,
						57487: 29060,
						57488: 29077,
						57489: 29096,
						57490: 29100,
						57491: 29143,
						57492: 29113,
						57493: 29118,
						57494: 29138,
						57495: 29129,
						57496: 29140,
						57497: 29134,
						57498: 29152,
						57499: 29164,
						57500: 29159,
						57501: 29173,
						57502: 29180,
						57503: 29177,
						57504: 29183,
						57505: 29197,
						57506: 29200,
						57507: 29211,
						57508: 29224,
						57509: 29229,
						57510: 29228,
						57511: 29232,
						57512: 29234,
						57513: 29243,
						57514: 29244,
						57515: 29247,
						57516: 29248,
						57517: 29254,
						57518: 29259,
						57519: 29272,
						57520: 29300,
						57521: 29310,
						57522: 29314,
						57523: 29313,
						57524: 29319,
						57525: 29330,
						57526: 29334,
						57527: 29346,
						57528: 29351,
						57529: 29369,
						57530: 29362,
						57531: 29379,
						57532: 29382,
						57533: 29380,
						57534: 29390,
						57535: 29394,
						57536: 29410,
						57537: 29408,
						57538: 29409,
						57539: 29433,
						57540: 29431,
						57541: 20495,
						57542: 29463,
						57543: 29450,
						57544: 29468,
						57545: 29462,
						57546: 29469,
						57547: 29492,
						57548: 29487,
						57549: 29481,
						57550: 29477,
						57551: 29502,
						57552: 29518,
						57553: 29519,
						57554: 40664,
						57555: 29527,
						57556: 29546,
						57557: 29544,
						57558: 29552,
						57559: 29560,
						57560: 29557,
						57561: 29563,
						57562: 29562,
						57563: 29640,
						57564: 29619,
						57565: 29646,
						57566: 29627,
						57567: 29632,
						57568: 29669,
						57569: 29678,
						57570: 29662,
						57571: 29858,
						57572: 29701,
						57573: 29807,
						57574: 29733,
						57575: 29688,
						57576: 29746,
						57577: 29754,
						57578: 29781,
						57579: 29759,
						57580: 29791,
						57581: 29785,
						57582: 29761,
						57583: 29788,
						57584: 29801,
						57585: 29808,
						57586: 29795,
						57587: 29802,
						57588: 29814,
						57589: 29822,
						57590: 29835,
						57591: 29854,
						57592: 29863,
						57593: 29898,
						57594: 29903,
						57595: 29908,
						57596: 29681,
						57664: 29920,
						57665: 29923,
						57666: 29927,
						57667: 29929,
						57668: 29934,
						57669: 29938,
						57670: 29936,
						57671: 29937,
						57672: 29944,
						57673: 29943,
						57674: 29956,
						57675: 29955,
						57676: 29957,
						57677: 29964,
						57678: 29966,
						57679: 29965,
						57680: 29973,
						57681: 29971,
						57682: 29982,
						57683: 29990,
						57684: 29996,
						57685: 30012,
						57686: 30020,
						57687: 30029,
						57688: 30026,
						57689: 30025,
						57690: 30043,
						57691: 30022,
						57692: 30042,
						57693: 30057,
						57694: 30052,
						57695: 30055,
						57696: 30059,
						57697: 30061,
						57698: 30072,
						57699: 30070,
						57700: 30086,
						57701: 30087,
						57702: 30068,
						57703: 30090,
						57704: 30089,
						57705: 30082,
						57706: 30100,
						57707: 30106,
						57708: 30109,
						57709: 30117,
						57710: 30115,
						57711: 30146,
						57712: 30131,
						57713: 30147,
						57714: 30133,
						57715: 30141,
						57716: 30136,
						57717: 30140,
						57718: 30129,
						57719: 30157,
						57720: 30154,
						57721: 30162,
						57722: 30169,
						57723: 30179,
						57724: 30174,
						57725: 30206,
						57726: 30207,
						57728: 30204,
						57729: 30209,
						57730: 30192,
						57731: 30202,
						57732: 30194,
						57733: 30195,
						57734: 30219,
						57735: 30221,
						57736: 30217,
						57737: 30239,
						57738: 30247,
						57739: 30240,
						57740: 30241,
						57741: 30242,
						57742: 30244,
						57743: 30260,
						57744: 30256,
						57745: 30267,
						57746: 30279,
						57747: 30280,
						57748: 30278,
						57749: 30300,
						57750: 30296,
						57751: 30305,
						57752: 30306,
						57753: 30312,
						57754: 30313,
						57755: 30314,
						57756: 30311,
						57757: 30316,
						57758: 30320,
						57759: 30322,
						57760: 30326,
						57761: 30328,
						57762: 30332,
						57763: 30336,
						57764: 30339,
						57765: 30344,
						57766: 30347,
						57767: 30350,
						57768: 30358,
						57769: 30355,
						57770: 30361,
						57771: 30362,
						57772: 30384,
						57773: 30388,
						57774: 30392,
						57775: 30393,
						57776: 30394,
						57777: 30402,
						57778: 30413,
						57779: 30422,
						57780: 30418,
						57781: 30430,
						57782: 30433,
						57783: 30437,
						57784: 30439,
						57785: 30442,
						57786: 34351,
						57787: 30459,
						57788: 30472,
						57789: 30471,
						57790: 30468,
						57791: 30505,
						57792: 30500,
						57793: 30494,
						57794: 30501,
						57795: 30502,
						57796: 30491,
						57797: 30519,
						57798: 30520,
						57799: 30535,
						57800: 30554,
						57801: 30568,
						57802: 30571,
						57803: 30555,
						57804: 30565,
						57805: 30591,
						57806: 30590,
						57807: 30585,
						57808: 30606,
						57809: 30603,
						57810: 30609,
						57811: 30624,
						57812: 30622,
						57813: 30640,
						57814: 30646,
						57815: 30649,
						57816: 30655,
						57817: 30652,
						57818: 30653,
						57819: 30651,
						57820: 30663,
						57821: 30669,
						57822: 30679,
						57823: 30682,
						57824: 30684,
						57825: 30691,
						57826: 30702,
						57827: 30716,
						57828: 30732,
						57829: 30738,
						57830: 31014,
						57831: 30752,
						57832: 31018,
						57833: 30789,
						57834: 30862,
						57835: 30836,
						57836: 30854,
						57837: 30844,
						57838: 30874,
						57839: 30860,
						57840: 30883,
						57841: 30901,
						57842: 30890,
						57843: 30895,
						57844: 30929,
						57845: 30918,
						57846: 30923,
						57847: 30932,
						57848: 30910,
						57849: 30908,
						57850: 30917,
						57851: 30922,
						57852: 30956,
						57920: 30951,
						57921: 30938,
						57922: 30973,
						57923: 30964,
						57924: 30983,
						57925: 30994,
						57926: 30993,
						57927: 31001,
						57928: 31020,
						57929: 31019,
						57930: 31040,
						57931: 31072,
						57932: 31063,
						57933: 31071,
						57934: 31066,
						57935: 31061,
						57936: 31059,
						57937: 31098,
						57938: 31103,
						57939: 31114,
						57940: 31133,
						57941: 31143,
						57942: 40779,
						57943: 31146,
						57944: 31150,
						57945: 31155,
						57946: 31161,
						57947: 31162,
						57948: 31177,
						57949: 31189,
						57950: 31207,
						57951: 31212,
						57952: 31201,
						57953: 31203,
						57954: 31240,
						57955: 31245,
						57956: 31256,
						57957: 31257,
						57958: 31264,
						57959: 31263,
						57960: 31104,
						57961: 31281,
						57962: 31291,
						57963: 31294,
						57964: 31287,
						57965: 31299,
						57966: 31319,
						57967: 31305,
						57968: 31329,
						57969: 31330,
						57970: 31337,
						57971: 40861,
						57972: 31344,
						57973: 31353,
						57974: 31357,
						57975: 31368,
						57976: 31383,
						57977: 31381,
						57978: 31384,
						57979: 31382,
						57980: 31401,
						57981: 31432,
						57982: 31408,
						57984: 31414,
						57985: 31429,
						57986: 31428,
						57987: 31423,
						57988: 36995,
						57989: 31431,
						57990: 31434,
						57991: 31437,
						57992: 31439,
						57993: 31445,
						57994: 31443,
						57995: 31449,
						57996: 31450,
						57997: 31453,
						57998: 31457,
						57999: 31458,
						58e3: 31462,
						58001: 31469,
						58002: 31472,
						58003: 31490,
						58004: 31503,
						58005: 31498,
						58006: 31494,
						58007: 31539,
						58008: 31512,
						58009: 31513,
						58010: 31518,
						58011: 31541,
						58012: 31528,
						58013: 31542,
						58014: 31568,
						58015: 31610,
						58016: 31492,
						58017: 31565,
						58018: 31499,
						58019: 31564,
						58020: 31557,
						58021: 31605,
						58022: 31589,
						58023: 31604,
						58024: 31591,
						58025: 31600,
						58026: 31601,
						58027: 31596,
						58028: 31598,
						58029: 31645,
						58030: 31640,
						58031: 31647,
						58032: 31629,
						58033: 31644,
						58034: 31642,
						58035: 31627,
						58036: 31634,
						58037: 31631,
						58038: 31581,
						58039: 31641,
						58040: 31691,
						58041: 31681,
						58042: 31692,
						58043: 31695,
						58044: 31668,
						58045: 31686,
						58046: 31709,
						58047: 31721,
						58048: 31761,
						58049: 31764,
						58050: 31718,
						58051: 31717,
						58052: 31840,
						58053: 31744,
						58054: 31751,
						58055: 31763,
						58056: 31731,
						58057: 31735,
						58058: 31767,
						58059: 31757,
						58060: 31734,
						58061: 31779,
						58062: 31783,
						58063: 31786,
						58064: 31775,
						58065: 31799,
						58066: 31787,
						58067: 31805,
						58068: 31820,
						58069: 31811,
						58070: 31828,
						58071: 31823,
						58072: 31808,
						58073: 31824,
						58074: 31832,
						58075: 31839,
						58076: 31844,
						58077: 31830,
						58078: 31845,
						58079: 31852,
						58080: 31861,
						58081: 31875,
						58082: 31888,
						58083: 31908,
						58084: 31917,
						58085: 31906,
						58086: 31915,
						58087: 31905,
						58088: 31912,
						58089: 31923,
						58090: 31922,
						58091: 31921,
						58092: 31918,
						58093: 31929,
						58094: 31933,
						58095: 31936,
						58096: 31941,
						58097: 31938,
						58098: 31960,
						58099: 31954,
						58100: 31964,
						58101: 31970,
						58102: 39739,
						58103: 31983,
						58104: 31986,
						58105: 31988,
						58106: 31990,
						58107: 31994,
						58108: 32006,
						58176: 32002,
						58177: 32028,
						58178: 32021,
						58179: 32010,
						58180: 32069,
						58181: 32075,
						58182: 32046,
						58183: 32050,
						58184: 32063,
						58185: 32053,
						58186: 32070,
						58187: 32115,
						58188: 32086,
						58189: 32078,
						58190: 32114,
						58191: 32104,
						58192: 32110,
						58193: 32079,
						58194: 32099,
						58195: 32147,
						58196: 32137,
						58197: 32091,
						58198: 32143,
						58199: 32125,
						58200: 32155,
						58201: 32186,
						58202: 32174,
						58203: 32163,
						58204: 32181,
						58205: 32199,
						58206: 32189,
						58207: 32171,
						58208: 32317,
						58209: 32162,
						58210: 32175,
						58211: 32220,
						58212: 32184,
						58213: 32159,
						58214: 32176,
						58215: 32216,
						58216: 32221,
						58217: 32228,
						58218: 32222,
						58219: 32251,
						58220: 32242,
						58221: 32225,
						58222: 32261,
						58223: 32266,
						58224: 32291,
						58225: 32289,
						58226: 32274,
						58227: 32305,
						58228: 32287,
						58229: 32265,
						58230: 32267,
						58231: 32290,
						58232: 32326,
						58233: 32358,
						58234: 32315,
						58235: 32309,
						58236: 32313,
						58237: 32323,
						58238: 32311,
						58240: 32306,
						58241: 32314,
						58242: 32359,
						58243: 32349,
						58244: 32342,
						58245: 32350,
						58246: 32345,
						58247: 32346,
						58248: 32377,
						58249: 32362,
						58250: 32361,
						58251: 32380,
						58252: 32379,
						58253: 32387,
						58254: 32213,
						58255: 32381,
						58256: 36782,
						58257: 32383,
						58258: 32392,
						58259: 32393,
						58260: 32396,
						58261: 32402,
						58262: 32400,
						58263: 32403,
						58264: 32404,
						58265: 32406,
						58266: 32398,
						58267: 32411,
						58268: 32412,
						58269: 32568,
						58270: 32570,
						58271: 32581,
						58272: 32588,
						58273: 32589,
						58274: 32590,
						58275: 32592,
						58276: 32593,
						58277: 32597,
						58278: 32596,
						58279: 32600,
						58280: 32607,
						58281: 32608,
						58282: 32616,
						58283: 32617,
						58284: 32615,
						58285: 32632,
						58286: 32642,
						58287: 32646,
						58288: 32643,
						58289: 32648,
						58290: 32647,
						58291: 32652,
						58292: 32660,
						58293: 32670,
						58294: 32669,
						58295: 32666,
						58296: 32675,
						58297: 32687,
						58298: 32690,
						58299: 32697,
						58300: 32686,
						58301: 32694,
						58302: 32696,
						58303: 35697,
						58304: 32709,
						58305: 32710,
						58306: 32714,
						58307: 32725,
						58308: 32724,
						58309: 32737,
						58310: 32742,
						58311: 32745,
						58312: 32755,
						58313: 32761,
						58314: 39132,
						58315: 32774,
						58316: 32772,
						58317: 32779,
						58318: 32786,
						58319: 32792,
						58320: 32793,
						58321: 32796,
						58322: 32801,
						58323: 32808,
						58324: 32831,
						58325: 32827,
						58326: 32842,
						58327: 32838,
						58328: 32850,
						58329: 32856,
						58330: 32858,
						58331: 32863,
						58332: 32866,
						58333: 32872,
						58334: 32883,
						58335: 32882,
						58336: 32880,
						58337: 32886,
						58338: 32889,
						58339: 32893,
						58340: 32895,
						58341: 32900,
						58342: 32902,
						58343: 32901,
						58344: 32923,
						58345: 32915,
						58346: 32922,
						58347: 32941,
						58348: 20880,
						58349: 32940,
						58350: 32987,
						58351: 32997,
						58352: 32985,
						58353: 32989,
						58354: 32964,
						58355: 32986,
						58356: 32982,
						58357: 33033,
						58358: 33007,
						58359: 33009,
						58360: 33051,
						58361: 33065,
						58362: 33059,
						58363: 33071,
						58364: 33099,
						58432: 38539,
						58433: 33094,
						58434: 33086,
						58435: 33107,
						58436: 33105,
						58437: 33020,
						58438: 33137,
						58439: 33134,
						58440: 33125,
						58441: 33126,
						58442: 33140,
						58443: 33155,
						58444: 33160,
						58445: 33162,
						58446: 33152,
						58447: 33154,
						58448: 33184,
						58449: 33173,
						58450: 33188,
						58451: 33187,
						58452: 33119,
						58453: 33171,
						58454: 33193,
						58455: 33200,
						58456: 33205,
						58457: 33214,
						58458: 33208,
						58459: 33213,
						58460: 33216,
						58461: 33218,
						58462: 33210,
						58463: 33225,
						58464: 33229,
						58465: 33233,
						58466: 33241,
						58467: 33240,
						58468: 33224,
						58469: 33242,
						58470: 33247,
						58471: 33248,
						58472: 33255,
						58473: 33274,
						58474: 33275,
						58475: 33278,
						58476: 33281,
						58477: 33282,
						58478: 33285,
						58479: 33287,
						58480: 33290,
						58481: 33293,
						58482: 33296,
						58483: 33302,
						58484: 33321,
						58485: 33323,
						58486: 33336,
						58487: 33331,
						58488: 33344,
						58489: 33369,
						58490: 33368,
						58491: 33373,
						58492: 33370,
						58493: 33375,
						58494: 33380,
						58496: 33378,
						58497: 33384,
						58498: 33386,
						58499: 33387,
						58500: 33326,
						58501: 33393,
						58502: 33399,
						58503: 33400,
						58504: 33406,
						58505: 33421,
						58506: 33426,
						58507: 33451,
						58508: 33439,
						58509: 33467,
						58510: 33452,
						58511: 33505,
						58512: 33507,
						58513: 33503,
						58514: 33490,
						58515: 33524,
						58516: 33523,
						58517: 33530,
						58518: 33683,
						58519: 33539,
						58520: 33531,
						58521: 33529,
						58522: 33502,
						58523: 33542,
						58524: 33500,
						58525: 33545,
						58526: 33497,
						58527: 33589,
						58528: 33588,
						58529: 33558,
						58530: 33586,
						58531: 33585,
						58532: 33600,
						58533: 33593,
						58534: 33616,
						58535: 33605,
						58536: 33583,
						58537: 33579,
						58538: 33559,
						58539: 33560,
						58540: 33669,
						58541: 33690,
						58542: 33706,
						58543: 33695,
						58544: 33698,
						58545: 33686,
						58546: 33571,
						58547: 33678,
						58548: 33671,
						58549: 33674,
						58550: 33660,
						58551: 33717,
						58552: 33651,
						58553: 33653,
						58554: 33696,
						58555: 33673,
						58556: 33704,
						58557: 33780,
						58558: 33811,
						58559: 33771,
						58560: 33742,
						58561: 33789,
						58562: 33795,
						58563: 33752,
						58564: 33803,
						58565: 33729,
						58566: 33783,
						58567: 33799,
						58568: 33760,
						58569: 33778,
						58570: 33805,
						58571: 33826,
						58572: 33824,
						58573: 33725,
						58574: 33848,
						58575: 34054,
						58576: 33787,
						58577: 33901,
						58578: 33834,
						58579: 33852,
						58580: 34138,
						58581: 33924,
						58582: 33911,
						58583: 33899,
						58584: 33965,
						58585: 33902,
						58586: 33922,
						58587: 33897,
						58588: 33862,
						58589: 33836,
						58590: 33903,
						58591: 33913,
						58592: 33845,
						58593: 33994,
						58594: 33890,
						58595: 33977,
						58596: 33983,
						58597: 33951,
						58598: 34009,
						58599: 33997,
						58600: 33979,
						58601: 34010,
						58602: 34e3,
						58603: 33985,
						58604: 33990,
						58605: 34006,
						58606: 33953,
						58607: 34081,
						58608: 34047,
						58609: 34036,
						58610: 34071,
						58611: 34072,
						58612: 34092,
						58613: 34079,
						58614: 34069,
						58615: 34068,
						58616: 34044,
						58617: 34112,
						58618: 34147,
						58619: 34136,
						58620: 34120,
						58688: 34113,
						58689: 34306,
						58690: 34123,
						58691: 34133,
						58692: 34176,
						58693: 34212,
						58694: 34184,
						58695: 34193,
						58696: 34186,
						58697: 34216,
						58698: 34157,
						58699: 34196,
						58700: 34203,
						58701: 34282,
						58702: 34183,
						58703: 34204,
						58704: 34167,
						58705: 34174,
						58706: 34192,
						58707: 34249,
						58708: 34234,
						58709: 34255,
						58710: 34233,
						58711: 34256,
						58712: 34261,
						58713: 34269,
						58714: 34277,
						58715: 34268,
						58716: 34297,
						58717: 34314,
						58718: 34323,
						58719: 34315,
						58720: 34302,
						58721: 34298,
						58722: 34310,
						58723: 34338,
						58724: 34330,
						58725: 34352,
						58726: 34367,
						58727: 34381,
						58728: 20053,
						58729: 34388,
						58730: 34399,
						58731: 34407,
						58732: 34417,
						58733: 34451,
						58734: 34467,
						58735: 34473,
						58736: 34474,
						58737: 34443,
						58738: 34444,
						58739: 34486,
						58740: 34479,
						58741: 34500,
						58742: 34502,
						58743: 34480,
						58744: 34505,
						58745: 34851,
						58746: 34475,
						58747: 34516,
						58748: 34526,
						58749: 34537,
						58750: 34540,
						58752: 34527,
						58753: 34523,
						58754: 34543,
						58755: 34578,
						58756: 34566,
						58757: 34568,
						58758: 34560,
						58759: 34563,
						58760: 34555,
						58761: 34577,
						58762: 34569,
						58763: 34573,
						58764: 34553,
						58765: 34570,
						58766: 34612,
						58767: 34623,
						58768: 34615,
						58769: 34619,
						58770: 34597,
						58771: 34601,
						58772: 34586,
						58773: 34656,
						58774: 34655,
						58775: 34680,
						58776: 34636,
						58777: 34638,
						58778: 34676,
						58779: 34647,
						58780: 34664,
						58781: 34670,
						58782: 34649,
						58783: 34643,
						58784: 34659,
						58785: 34666,
						58786: 34821,
						58787: 34722,
						58788: 34719,
						58789: 34690,
						58790: 34735,
						58791: 34763,
						58792: 34749,
						58793: 34752,
						58794: 34768,
						58795: 38614,
						58796: 34731,
						58797: 34756,
						58798: 34739,
						58799: 34759,
						58800: 34758,
						58801: 34747,
						58802: 34799,
						58803: 34802,
						58804: 34784,
						58805: 34831,
						58806: 34829,
						58807: 34814,
						58808: 34806,
						58809: 34807,
						58810: 34830,
						58811: 34770,
						58812: 34833,
						58813: 34838,
						58814: 34837,
						58815: 34850,
						58816: 34849,
						58817: 34865,
						58818: 34870,
						58819: 34873,
						58820: 34855,
						58821: 34875,
						58822: 34884,
						58823: 34882,
						58824: 34898,
						58825: 34905,
						58826: 34910,
						58827: 34914,
						58828: 34923,
						58829: 34945,
						58830: 34942,
						58831: 34974,
						58832: 34933,
						58833: 34941,
						58834: 34997,
						58835: 34930,
						58836: 34946,
						58837: 34967,
						58838: 34962,
						58839: 34990,
						58840: 34969,
						58841: 34978,
						58842: 34957,
						58843: 34980,
						58844: 34992,
						58845: 35007,
						58846: 34993,
						58847: 35011,
						58848: 35012,
						58849: 35028,
						58850: 35032,
						58851: 35033,
						58852: 35037,
						58853: 35065,
						58854: 35074,
						58855: 35068,
						58856: 35060,
						58857: 35048,
						58858: 35058,
						58859: 35076,
						58860: 35084,
						58861: 35082,
						58862: 35091,
						58863: 35139,
						58864: 35102,
						58865: 35109,
						58866: 35114,
						58867: 35115,
						58868: 35137,
						58869: 35140,
						58870: 35131,
						58871: 35126,
						58872: 35128,
						58873: 35148,
						58874: 35101,
						58875: 35168,
						58876: 35166,
						58944: 35174,
						58945: 35172,
						58946: 35181,
						58947: 35178,
						58948: 35183,
						58949: 35188,
						58950: 35191,
						58951: 35198,
						58952: 35203,
						58953: 35208,
						58954: 35210,
						58955: 35219,
						58956: 35224,
						58957: 35233,
						58958: 35241,
						58959: 35238,
						58960: 35244,
						58961: 35247,
						58962: 35250,
						58963: 35258,
						58964: 35261,
						58965: 35263,
						58966: 35264,
						58967: 35290,
						58968: 35292,
						58969: 35293,
						58970: 35303,
						58971: 35316,
						58972: 35320,
						58973: 35331,
						58974: 35350,
						58975: 35344,
						58976: 35340,
						58977: 35355,
						58978: 35357,
						58979: 35365,
						58980: 35382,
						58981: 35393,
						58982: 35419,
						58983: 35410,
						58984: 35398,
						58985: 35400,
						58986: 35452,
						58987: 35437,
						58988: 35436,
						58989: 35426,
						58990: 35461,
						58991: 35458,
						58992: 35460,
						58993: 35496,
						58994: 35489,
						58995: 35473,
						58996: 35493,
						58997: 35494,
						58998: 35482,
						58999: 35491,
						59e3: 35524,
						59001: 35533,
						59002: 35522,
						59003: 35546,
						59004: 35563,
						59005: 35571,
						59006: 35559,
						59008: 35556,
						59009: 35569,
						59010: 35604,
						59011: 35552,
						59012: 35554,
						59013: 35575,
						59014: 35550,
						59015: 35547,
						59016: 35596,
						59017: 35591,
						59018: 35610,
						59019: 35553,
						59020: 35606,
						59021: 35600,
						59022: 35607,
						59023: 35616,
						59024: 35635,
						59025: 38827,
						59026: 35622,
						59027: 35627,
						59028: 35646,
						59029: 35624,
						59030: 35649,
						59031: 35660,
						59032: 35663,
						59033: 35662,
						59034: 35657,
						59035: 35670,
						59036: 35675,
						59037: 35674,
						59038: 35691,
						59039: 35679,
						59040: 35692,
						59041: 35695,
						59042: 35700,
						59043: 35709,
						59044: 35712,
						59045: 35724,
						59046: 35726,
						59047: 35730,
						59048: 35731,
						59049: 35734,
						59050: 35737,
						59051: 35738,
						59052: 35898,
						59053: 35905,
						59054: 35903,
						59055: 35912,
						59056: 35916,
						59057: 35918,
						59058: 35920,
						59059: 35925,
						59060: 35938,
						59061: 35948,
						59062: 35960,
						59063: 35962,
						59064: 35970,
						59065: 35977,
						59066: 35973,
						59067: 35978,
						59068: 35981,
						59069: 35982,
						59070: 35988,
						59071: 35964,
						59072: 35992,
						59073: 25117,
						59074: 36013,
						59075: 36010,
						59076: 36029,
						59077: 36018,
						59078: 36019,
						59079: 36014,
						59080: 36022,
						59081: 36040,
						59082: 36033,
						59083: 36068,
						59084: 36067,
						59085: 36058,
						59086: 36093,
						59087: 36090,
						59088: 36091,
						59089: 36100,
						59090: 36101,
						59091: 36106,
						59092: 36103,
						59093: 36111,
						59094: 36109,
						59095: 36112,
						59096: 40782,
						59097: 36115,
						59098: 36045,
						59099: 36116,
						59100: 36118,
						59101: 36199,
						59102: 36205,
						59103: 36209,
						59104: 36211,
						59105: 36225,
						59106: 36249,
						59107: 36290,
						59108: 36286,
						59109: 36282,
						59110: 36303,
						59111: 36314,
						59112: 36310,
						59113: 36300,
						59114: 36315,
						59115: 36299,
						59116: 36330,
						59117: 36331,
						59118: 36319,
						59119: 36323,
						59120: 36348,
						59121: 36360,
						59122: 36361,
						59123: 36351,
						59124: 36381,
						59125: 36382,
						59126: 36368,
						59127: 36383,
						59128: 36418,
						59129: 36405,
						59130: 36400,
						59131: 36404,
						59132: 36426,
						59200: 36423,
						59201: 36425,
						59202: 36428,
						59203: 36432,
						59204: 36424,
						59205: 36441,
						59206: 36452,
						59207: 36448,
						59208: 36394,
						59209: 36451,
						59210: 36437,
						59211: 36470,
						59212: 36466,
						59213: 36476,
						59214: 36481,
						59215: 36487,
						59216: 36485,
						59217: 36484,
						59218: 36491,
						59219: 36490,
						59220: 36499,
						59221: 36497,
						59222: 36500,
						59223: 36505,
						59224: 36522,
						59225: 36513,
						59226: 36524,
						59227: 36528,
						59228: 36550,
						59229: 36529,
						59230: 36542,
						59231: 36549,
						59232: 36552,
						59233: 36555,
						59234: 36571,
						59235: 36579,
						59236: 36604,
						59237: 36603,
						59238: 36587,
						59239: 36606,
						59240: 36618,
						59241: 36613,
						59242: 36629,
						59243: 36626,
						59244: 36633,
						59245: 36627,
						59246: 36636,
						59247: 36639,
						59248: 36635,
						59249: 36620,
						59250: 36646,
						59251: 36659,
						59252: 36667,
						59253: 36665,
						59254: 36677,
						59255: 36674,
						59256: 36670,
						59257: 36684,
						59258: 36681,
						59259: 36678,
						59260: 36686,
						59261: 36695,
						59262: 36700,
						59264: 36706,
						59265: 36707,
						59266: 36708,
						59267: 36764,
						59268: 36767,
						59269: 36771,
						59270: 36781,
						59271: 36783,
						59272: 36791,
						59273: 36826,
						59274: 36837,
						59275: 36834,
						59276: 36842,
						59277: 36847,
						59278: 36999,
						59279: 36852,
						59280: 36869,
						59281: 36857,
						59282: 36858,
						59283: 36881,
						59284: 36885,
						59285: 36897,
						59286: 36877,
						59287: 36894,
						59288: 36886,
						59289: 36875,
						59290: 36903,
						59291: 36918,
						59292: 36917,
						59293: 36921,
						59294: 36856,
						59295: 36943,
						59296: 36944,
						59297: 36945,
						59298: 36946,
						59299: 36878,
						59300: 36937,
						59301: 36926,
						59302: 36950,
						59303: 36952,
						59304: 36958,
						59305: 36968,
						59306: 36975,
						59307: 36982,
						59308: 38568,
						59309: 36978,
						59310: 36994,
						59311: 36989,
						59312: 36993,
						59313: 36992,
						59314: 37002,
						59315: 37001,
						59316: 37007,
						59317: 37032,
						59318: 37039,
						59319: 37041,
						59320: 37045,
						59321: 37090,
						59322: 37092,
						59323: 25160,
						59324: 37083,
						59325: 37122,
						59326: 37138,
						59327: 37145,
						59328: 37170,
						59329: 37168,
						59330: 37194,
						59331: 37206,
						59332: 37208,
						59333: 37219,
						59334: 37221,
						59335: 37225,
						59336: 37235,
						59337: 37234,
						59338: 37259,
						59339: 37257,
						59340: 37250,
						59341: 37282,
						59342: 37291,
						59343: 37295,
						59344: 37290,
						59345: 37301,
						59346: 37300,
						59347: 37306,
						59348: 37312,
						59349: 37313,
						59350: 37321,
						59351: 37323,
						59352: 37328,
						59353: 37334,
						59354: 37343,
						59355: 37345,
						59356: 37339,
						59357: 37372,
						59358: 37365,
						59359: 37366,
						59360: 37406,
						59361: 37375,
						59362: 37396,
						59363: 37420,
						59364: 37397,
						59365: 37393,
						59366: 37470,
						59367: 37463,
						59368: 37445,
						59369: 37449,
						59370: 37476,
						59371: 37448,
						59372: 37525,
						59373: 37439,
						59374: 37451,
						59375: 37456,
						59376: 37532,
						59377: 37526,
						59378: 37523,
						59379: 37531,
						59380: 37466,
						59381: 37583,
						59382: 37561,
						59383: 37559,
						59384: 37609,
						59385: 37647,
						59386: 37626,
						59387: 37700,
						59388: 37678,
						59456: 37657,
						59457: 37666,
						59458: 37658,
						59459: 37667,
						59460: 37690,
						59461: 37685,
						59462: 37691,
						59463: 37724,
						59464: 37728,
						59465: 37756,
						59466: 37742,
						59467: 37718,
						59468: 37808,
						59469: 37804,
						59470: 37805,
						59471: 37780,
						59472: 37817,
						59473: 37846,
						59474: 37847,
						59475: 37864,
						59476: 37861,
						59477: 37848,
						59478: 37827,
						59479: 37853,
						59480: 37840,
						59481: 37832,
						59482: 37860,
						59483: 37914,
						59484: 37908,
						59485: 37907,
						59486: 37891,
						59487: 37895,
						59488: 37904,
						59489: 37942,
						59490: 37931,
						59491: 37941,
						59492: 37921,
						59493: 37946,
						59494: 37953,
						59495: 37970,
						59496: 37956,
						59497: 37979,
						59498: 37984,
						59499: 37986,
						59500: 37982,
						59501: 37994,
						59502: 37417,
						59503: 38e3,
						59504: 38005,
						59505: 38007,
						59506: 38013,
						59507: 37978,
						59508: 38012,
						59509: 38014,
						59510: 38017,
						59511: 38015,
						59512: 38274,
						59513: 38279,
						59514: 38282,
						59515: 38292,
						59516: 38294,
						59517: 38296,
						59518: 38297,
						59520: 38304,
						59521: 38312,
						59522: 38311,
						59523: 38317,
						59524: 38332,
						59525: 38331,
						59526: 38329,
						59527: 38334,
						59528: 38346,
						59529: 28662,
						59530: 38339,
						59531: 38349,
						59532: 38348,
						59533: 38357,
						59534: 38356,
						59535: 38358,
						59536: 38364,
						59537: 38369,
						59538: 38373,
						59539: 38370,
						59540: 38433,
						59541: 38440,
						59542: 38446,
						59543: 38447,
						59544: 38466,
						59545: 38476,
						59546: 38479,
						59547: 38475,
						59548: 38519,
						59549: 38492,
						59550: 38494,
						59551: 38493,
						59552: 38495,
						59553: 38502,
						59554: 38514,
						59555: 38508,
						59556: 38541,
						59557: 38552,
						59558: 38549,
						59559: 38551,
						59560: 38570,
						59561: 38567,
						59562: 38577,
						59563: 38578,
						59564: 38576,
						59565: 38580,
						59566: 38582,
						59567: 38584,
						59568: 38585,
						59569: 38606,
						59570: 38603,
						59571: 38601,
						59572: 38605,
						59573: 35149,
						59574: 38620,
						59575: 38669,
						59576: 38613,
						59577: 38649,
						59578: 38660,
						59579: 38662,
						59580: 38664,
						59581: 38675,
						59582: 38670,
						59583: 38673,
						59584: 38671,
						59585: 38678,
						59586: 38681,
						59587: 38692,
						59588: 38698,
						59589: 38704,
						59590: 38713,
						59591: 38717,
						59592: 38718,
						59593: 38724,
						59594: 38726,
						59595: 38728,
						59596: 38722,
						59597: 38729,
						59598: 38748,
						59599: 38752,
						59600: 38756,
						59601: 38758,
						59602: 38760,
						59603: 21202,
						59604: 38763,
						59605: 38769,
						59606: 38777,
						59607: 38789,
						59608: 38780,
						59609: 38785,
						59610: 38778,
						59611: 38790,
						59612: 38795,
						59613: 38799,
						59614: 38800,
						59615: 38812,
						59616: 38824,
						59617: 38822,
						59618: 38819,
						59619: 38835,
						59620: 38836,
						59621: 38851,
						59622: 38854,
						59623: 38856,
						59624: 38859,
						59625: 38876,
						59626: 38893,
						59627: 40783,
						59628: 38898,
						59629: 31455,
						59630: 38902,
						59631: 38901,
						59632: 38927,
						59633: 38924,
						59634: 38968,
						59635: 38948,
						59636: 38945,
						59637: 38967,
						59638: 38973,
						59639: 38982,
						59640: 38991,
						59641: 38987,
						59642: 39019,
						59643: 39023,
						59644: 39024,
						59712: 39025,
						59713: 39028,
						59714: 39027,
						59715: 39082,
						59716: 39087,
						59717: 39089,
						59718: 39094,
						59719: 39108,
						59720: 39107,
						59721: 39110,
						59722: 39145,
						59723: 39147,
						59724: 39171,
						59725: 39177,
						59726: 39186,
						59727: 39188,
						59728: 39192,
						59729: 39201,
						59730: 39197,
						59731: 39198,
						59732: 39204,
						59733: 39200,
						59734: 39212,
						59735: 39214,
						59736: 39229,
						59737: 39230,
						59738: 39234,
						59739: 39241,
						59740: 39237,
						59741: 39248,
						59742: 39243,
						59743: 39249,
						59744: 39250,
						59745: 39244,
						59746: 39253,
						59747: 39319,
						59748: 39320,
						59749: 39333,
						59750: 39341,
						59751: 39342,
						59752: 39356,
						59753: 39391,
						59754: 39387,
						59755: 39389,
						59756: 39384,
						59757: 39377,
						59758: 39405,
						59759: 39406,
						59760: 39409,
						59761: 39410,
						59762: 39419,
						59763: 39416,
						59764: 39425,
						59765: 39439,
						59766: 39429,
						59767: 39394,
						59768: 39449,
						59769: 39467,
						59770: 39479,
						59771: 39493,
						59772: 39490,
						59773: 39488,
						59774: 39491,
						59776: 39486,
						59777: 39509,
						59778: 39501,
						59779: 39515,
						59780: 39511,
						59781: 39519,
						59782: 39522,
						59783: 39525,
						59784: 39524,
						59785: 39529,
						59786: 39531,
						59787: 39530,
						59788: 39597,
						59789: 39600,
						59790: 39612,
						59791: 39616,
						59792: 39631,
						59793: 39633,
						59794: 39635,
						59795: 39636,
						59796: 39646,
						59797: 39647,
						59798: 39650,
						59799: 39651,
						59800: 39654,
						59801: 39663,
						59802: 39659,
						59803: 39662,
						59804: 39668,
						59805: 39665,
						59806: 39671,
						59807: 39675,
						59808: 39686,
						59809: 39704,
						59810: 39706,
						59811: 39711,
						59812: 39714,
						59813: 39715,
						59814: 39717,
						59815: 39719,
						59816: 39720,
						59817: 39721,
						59818: 39722,
						59819: 39726,
						59820: 39727,
						59821: 39730,
						59822: 39748,
						59823: 39747,
						59824: 39759,
						59825: 39757,
						59826: 39758,
						59827: 39761,
						59828: 39768,
						59829: 39796,
						59830: 39827,
						59831: 39811,
						59832: 39825,
						59833: 39830,
						59834: 39831,
						59835: 39839,
						59836: 39840,
						59837: 39848,
						59838: 39860,
						59839: 39872,
						59840: 39882,
						59841: 39865,
						59842: 39878,
						59843: 39887,
						59844: 39889,
						59845: 39890,
						59846: 39907,
						59847: 39906,
						59848: 39908,
						59849: 39892,
						59850: 39905,
						59851: 39994,
						59852: 39922,
						59853: 39921,
						59854: 39920,
						59855: 39957,
						59856: 39956,
						59857: 39945,
						59858: 39955,
						59859: 39948,
						59860: 39942,
						59861: 39944,
						59862: 39954,
						59863: 39946,
						59864: 39940,
						59865: 39982,
						59866: 39963,
						59867: 39973,
						59868: 39972,
						59869: 39969,
						59870: 39984,
						59871: 40007,
						59872: 39986,
						59873: 40006,
						59874: 39998,
						59875: 40026,
						59876: 40032,
						59877: 40039,
						59878: 40054,
						59879: 40056,
						59880: 40167,
						59881: 40172,
						59882: 40176,
						59883: 40201,
						59884: 40200,
						59885: 40171,
						59886: 40195,
						59887: 40198,
						59888: 40234,
						59889: 40230,
						59890: 40367,
						59891: 40227,
						59892: 40223,
						59893: 40260,
						59894: 40213,
						59895: 40210,
						59896: 40257,
						59897: 40255,
						59898: 40254,
						59899: 40262,
						59900: 40264,
						59968: 40285,
						59969: 40286,
						59970: 40292,
						59971: 40273,
						59972: 40272,
						59973: 40281,
						59974: 40306,
						59975: 40329,
						59976: 40327,
						59977: 40363,
						59978: 40303,
						59979: 40314,
						59980: 40346,
						59981: 40356,
						59982: 40361,
						59983: 40370,
						59984: 40388,
						59985: 40385,
						59986: 40379,
						59987: 40376,
						59988: 40378,
						59989: 40390,
						59990: 40399,
						59991: 40386,
						59992: 40409,
						59993: 40403,
						59994: 40440,
						59995: 40422,
						59996: 40429,
						59997: 40431,
						59998: 40445,
						59999: 40474,
						6e4: 40475,
						60001: 40478,
						60002: 40565,
						60003: 40569,
						60004: 40573,
						60005: 40577,
						60006: 40584,
						60007: 40587,
						60008: 40588,
						60009: 40594,
						60010: 40597,
						60011: 40593,
						60012: 40605,
						60013: 40613,
						60014: 40617,
						60015: 40632,
						60016: 40618,
						60017: 40621,
						60018: 38753,
						60019: 40652,
						60020: 40654,
						60021: 40655,
						60022: 40656,
						60023: 40660,
						60024: 40668,
						60025: 40670,
						60026: 40669,
						60027: 40672,
						60028: 40677,
						60029: 40680,
						60030: 40687,
						60032: 40692,
						60033: 40694,
						60034: 40695,
						60035: 40697,
						60036: 40699,
						60037: 40700,
						60038: 40701,
						60039: 40711,
						60040: 40712,
						60041: 30391,
						60042: 40725,
						60043: 40737,
						60044: 40748,
						60045: 40766,
						60046: 40778,
						60047: 40786,
						60048: 40788,
						60049: 40803,
						60050: 40799,
						60051: 40800,
						60052: 40801,
						60053: 40806,
						60054: 40807,
						60055: 40812,
						60056: 40810,
						60057: 40823,
						60058: 40818,
						60059: 40822,
						60060: 40853,
						60061: 40860,
						60062: 40864,
						60063: 22575,
						60064: 27079,
						60065: 36953,
						60066: 29796,
						60067: 20956,
						60068: 29081
					}
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(1),
						n = r(2);
					o.decode = function(e, o) {
						var r = new Uint8ClampedArray(e.length);
						r.set(e);
						for (var s = new t.default(285, 256, 0), a = new n.default(s, r), c = new Uint8ClampedArray(o), i = !1, l = 0; l < o; l++) {
							var d = a.evaluateAt(s.exp(l + s.generatorBase));
							c[c.length - 1 - l] = d, 0 !== d && (i = !0)
						}
						if (!i) return r;
						var u = new n.default(s, c),
							f = function(e, o, r, t) {
								var n;
								o.degree() < r.degree() && (o = (n = [r, o])[0], r = n[1]);
								for (var s = o, a = r, c = e.zero, i = e.one; a.degree() >= t / 2;) {
									var l = s,
										d = c;
									if (c = i, (s = a).isZero()) return null;
									a = l;
									for (var u = e.zero, f = s.getCoefficient(s.degree()), B = e.inverse(f); a.degree() >= s.degree() && !a.isZero();) {
										var k = a.degree() - s.degree(),
											h = e.multiply(a.getCoefficient(a.degree()), B);
										u = u.addOrSubtract(e.buildMonomial(k, h)), a = a.addOrSubtract(s.multiplyByMonomial(k, h))
									}
									if (i = u.multiplyPoly(c).addOrSubtract(d), a.degree() >= s.degree()) return null
								}
								var m = i.getCoefficient(0);
								if (0 === m) return null;
								var w = e.inverse(m);
								return [i.multiply(w), a.multiply(w)]
							}(s, s.buildMonomial(o, 1), u, o);
						if (null === f) return null;
						var B = function(e, o) {
							var r = o.degree();
							if (1 === r) return [o.getCoefficient(1)];
							for (var t = new Array(r), n = 0, s = 1; s < e.size && n < r; s++) 0 === o.evaluateAt(s) && (t[n] = e.inverse(s), n++);
							return n !== r ? null : t
						}(s, f[0]);
						if (null == B) return null;
						for (var k = function(e, o, r) {
								for (var n = r.length, s = new Array(n), a = 0; a < n; a++) {
									for (var c = e.inverse(r[a]), i = 1, l = 0; l < n; l++) a !== l && (i = e.multiply(i, t.addOrSubtractGF(1, e.multiply(r[l], c))));
									s[a] = e.multiply(o.evaluateAt(c), e.inverse(i)), 0 !== e.generatorBase && (s[a] = e.multiply(s[a], c))
								}
								return s
							}(s, f[1], B), h = 0; h < B.length; h++) {
							var m = r.length - 1 - s.log(B[h]);
							if (m < 0) return null;
							r[m] = t.addOrSubtractGF(r[m], k[h])
						}
						return r
					}
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					}), o.VERSIONS = [{
						infoBits: null,
						versionNumber: 1,
						alignmentPatternCenters: [],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 7,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 19
							}]
						}, {
							ecCodewordsPerBlock: 10,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 16
							}]
						}, {
							ecCodewordsPerBlock: 13,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 13
							}]
						}, {
							ecCodewordsPerBlock: 17,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 9
							}]
						}]
					}, {
						infoBits: null,
						versionNumber: 2,
						alignmentPatternCenters: [6, 18],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 10,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 34
							}]
						}, {
							ecCodewordsPerBlock: 16,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 28
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 22
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: null,
						versionNumber: 3,
						alignmentPatternCenters: [6, 22],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 15,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 55
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 44
							}]
						}, {
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 17
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 13
							}]
						}]
					}, {
						infoBits: null,
						versionNumber: 4,
						alignmentPatternCenters: [6, 26],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 20,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 80
							}]
						}, {
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 32
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 24
							}]
						}, {
							ecCodewordsPerBlock: 16,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 9
							}]
						}]
					}, {
						infoBits: null,
						versionNumber: 5,
						alignmentPatternCenters: [6, 30],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 108
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 43
							}]
						}, {
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 16
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 11
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 12
							}]
						}]
					}, {
						infoBits: null,
						versionNumber: 6,
						alignmentPatternCenters: [6, 34],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 68
							}]
						}, {
							ecCodewordsPerBlock: 16,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 27
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 19
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 15
							}]
						}]
					}, {
						infoBits: 31892,
						versionNumber: 7,
						alignmentPatternCenters: [6, 22, 38],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 20,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 78
							}]
						}, {
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 31
							}]
						}, {
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 14
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 15
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 13
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 14
							}]
						}]
					}, {
						infoBits: 34236,
						versionNumber: 8,
						alignmentPatternCenters: [6, 24, 42],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 97
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 38
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 39
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 18
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 19
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 14
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 15
							}]
						}]
					}, {
						infoBits: 39577,
						versionNumber: 9,
						alignmentPatternCenters: [6, 26, 46],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 116
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 36
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 37
							}]
						}, {
							ecCodewordsPerBlock: 20,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 16
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 17
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 12
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 13
							}]
						}]
					}, {
						infoBits: 42195,
						versionNumber: 10,
						alignmentPatternCenters: [6, 28, 50],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 18,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 68
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 69
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 43
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 44
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 19
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 20
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 48118,
						versionNumber: 11,
						alignmentPatternCenters: [6, 30, 54],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 20,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 81
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 50
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 51
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 22
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 23
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 12
							}, {
								numBlocks: 8,
								dataCodewordsPerBlock: 13
							}]
						}]
					}, {
						infoBits: 51042,
						versionNumber: 12,
						alignmentPatternCenters: [6, 32, 58],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 92
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 93
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 36
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 37
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 20
							}, {
								numBlocks: 6,
								dataCodewordsPerBlock: 21
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 7,
								dataCodewordsPerBlock: 14
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 15
							}]
						}]
					}, {
						infoBits: 55367,
						versionNumber: 13,
						alignmentPatternCenters: [6, 34, 62],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 107
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 8,
								dataCodewordsPerBlock: 37
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 38
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 8,
								dataCodewordsPerBlock: 20
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 21
							}]
						}, {
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 12,
								dataCodewordsPerBlock: 11
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 12
							}]
						}]
					}, {
						infoBits: 58893,
						versionNumber: 14,
						alignmentPatternCenters: [6, 26, 46, 66],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 115
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 116
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 40
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 41
							}]
						}, {
							ecCodewordsPerBlock: 20,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 16
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 17
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 12
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 13
							}]
						}]
					}, {
						infoBits: 63784,
						versionNumber: 15,
						alignmentPatternCenters: [6, 26, 48, 70],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 22,
							ecBlocks: [{
								numBlocks: 5,
								dataCodewordsPerBlock: 87
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 88
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 5,
								dataCodewordsPerBlock: 41
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 42
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 5,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 12
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 13
							}]
						}]
					}, {
						infoBits: 68472,
						versionNumber: 16,
						alignmentPatternCenters: [6, 26, 50, 74],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 5,
								dataCodewordsPerBlock: 98
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 99
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 7,
								dataCodewordsPerBlock: 45
							}, {
								numBlocks: 3,
								dataCodewordsPerBlock: 46
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 15,
								dataCodewordsPerBlock: 19
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 20
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 13,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 70749,
						versionNumber: 17,
						alignmentPatternCenters: [6, 30, 54, 78],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 107
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 108
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 10,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 22
							}, {
								numBlocks: 15,
								dataCodewordsPerBlock: 23
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 14
							}, {
								numBlocks: 17,
								dataCodewordsPerBlock: 15
							}]
						}]
					}, {
						infoBits: 76311,
						versionNumber: 18,
						alignmentPatternCenters: [6, 30, 56, 82],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 5,
								dataCodewordsPerBlock: 120
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 121
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 9,
								dataCodewordsPerBlock: 43
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 44
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 22
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 23
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 14
							}, {
								numBlocks: 19,
								dataCodewordsPerBlock: 15
							}]
						}]
					}, {
						infoBits: 79154,
						versionNumber: 19,
						alignmentPatternCenters: [6, 30, 58, 86],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 113
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 114
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 44
							}, {
								numBlocks: 11,
								dataCodewordsPerBlock: 45
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 21
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 22
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 9,
								dataCodewordsPerBlock: 13
							}, {
								numBlocks: 16,
								dataCodewordsPerBlock: 14
							}]
						}]
					}, {
						infoBits: 84390,
						versionNumber: 20,
						alignmentPatternCenters: [6, 34, 62, 90],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 107
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 108
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 41
							}, {
								numBlocks: 13,
								dataCodewordsPerBlock: 42
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 15,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 15,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 10,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 87683,
						versionNumber: 21,
						alignmentPatternCenters: [6, 28, 50, 72, 94],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 116
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 117
							}]
						}, {
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 42
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 22
							}, {
								numBlocks: 6,
								dataCodewordsPerBlock: 23
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 19,
								dataCodewordsPerBlock: 16
							}, {
								numBlocks: 6,
								dataCodewordsPerBlock: 17
							}]
						}]
					}, {
						infoBits: 92361,
						versionNumber: 22,
						alignmentPatternCenters: [6, 26, 50, 74, 98],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 111
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 112
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 46
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 7,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 16,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 24,
							ecBlocks: [{
								numBlocks: 34,
								dataCodewordsPerBlock: 13
							}]
						}]
					}, {
						infoBits: 96236,
						versionNumber: 23,
						alignmentPatternCenters: [6, 30, 54, 74, 102],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 121
							}, {
								numBlocks: 5,
								dataCodewordsPerBlock: 122
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 16,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 102084,
						versionNumber: 24,
						alignmentPatternCenters: [6, 28, 54, 80, 106],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 117
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 118
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 45
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 46
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 16,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 30,
								dataCodewordsPerBlock: 16
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 17
							}]
						}]
					}, {
						infoBits: 102881,
						versionNumber: 25,
						alignmentPatternCenters: [6, 32, 58, 84, 110],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 26,
							ecBlocks: [{
								numBlocks: 8,
								dataCodewordsPerBlock: 106
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 107
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 8,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 13,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 7,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 22,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 22,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 13,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 110507,
						versionNumber: 26,
						alignmentPatternCenters: [6, 30, 58, 86, 114],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 10,
								dataCodewordsPerBlock: 114
							}, {
								numBlocks: 2,
								dataCodewordsPerBlock: 115
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 19,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 28,
								dataCodewordsPerBlock: 22
							}, {
								numBlocks: 6,
								dataCodewordsPerBlock: 23
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 33,
								dataCodewordsPerBlock: 16
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 17
							}]
						}]
					}, {
						infoBits: 110734,
						versionNumber: 27,
						alignmentPatternCenters: [6, 34, 62, 90, 118],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 8,
								dataCodewordsPerBlock: 122
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 123
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 22,
								dataCodewordsPerBlock: 45
							}, {
								numBlocks: 3,
								dataCodewordsPerBlock: 46
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 8,
								dataCodewordsPerBlock: 23
							}, {
								numBlocks: 26,
								dataCodewordsPerBlock: 24
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 12,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 28,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 117786,
						versionNumber: 28,
						alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 117
							}, {
								numBlocks: 10,
								dataCodewordsPerBlock: 118
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 3,
								dataCodewordsPerBlock: 45
							}, {
								numBlocks: 23,
								dataCodewordsPerBlock: 46
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 31,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 31,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 119615,
						versionNumber: 29,
						alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 7,
								dataCodewordsPerBlock: 116
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 117
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 21,
								dataCodewordsPerBlock: 45
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 46
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 1,
								dataCodewordsPerBlock: 23
							}, {
								numBlocks: 37,
								dataCodewordsPerBlock: 24
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 19,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 26,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 126325,
						versionNumber: 30,
						alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 5,
								dataCodewordsPerBlock: 115
							}, {
								numBlocks: 10,
								dataCodewordsPerBlock: 116
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 19,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 10,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 15,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 25,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 23,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 25,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 127568,
						versionNumber: 31,
						alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 13,
								dataCodewordsPerBlock: 115
							}, {
								numBlocks: 3,
								dataCodewordsPerBlock: 116
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 29,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 42,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 23,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 28,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 133589,
						versionNumber: 32,
						alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 115
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 10,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 23,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 10,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 35,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 19,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 35,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 136944,
						versionNumber: 33,
						alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 115
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 116
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 14,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 21,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 29,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 19,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 11,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 46,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 141498,
						versionNumber: 34,
						alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 13,
								dataCodewordsPerBlock: 115
							}, {
								numBlocks: 6,
								dataCodewordsPerBlock: 116
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 14,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 23,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 44,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 59,
								dataCodewordsPerBlock: 16
							}, {
								numBlocks: 1,
								dataCodewordsPerBlock: 17
							}]
						}]
					}, {
						infoBits: 145311,
						versionNumber: 35,
						alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 12,
								dataCodewordsPerBlock: 121
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 122
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 12,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 26,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 39,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 22,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 41,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 150283,
						versionNumber: 36,
						alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 121
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 122
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 6,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 34,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 46,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 10,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 2,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 64,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 152622,
						versionNumber: 37,
						alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 17,
								dataCodewordsPerBlock: 122
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 123
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 29,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 49,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 10,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 24,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 46,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 158308,
						versionNumber: 38,
						alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 4,
								dataCodewordsPerBlock: 122
							}, {
								numBlocks: 18,
								dataCodewordsPerBlock: 123
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 13,
								dataCodewordsPerBlock: 46
							}, {
								numBlocks: 32,
								dataCodewordsPerBlock: 47
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 48,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 14,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 42,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 32,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 161089,
						versionNumber: 39,
						alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 20,
								dataCodewordsPerBlock: 117
							}, {
								numBlocks: 4,
								dataCodewordsPerBlock: 118
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 40,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 7,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 43,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 22,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 10,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 67,
								dataCodewordsPerBlock: 16
							}]
						}]
					}, {
						infoBits: 167017,
						versionNumber: 40,
						alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
						errorCorrectionLevels: [{
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 19,
								dataCodewordsPerBlock: 118
							}, {
								numBlocks: 6,
								dataCodewordsPerBlock: 119
							}]
						}, {
							ecCodewordsPerBlock: 28,
							ecBlocks: [{
								numBlocks: 18,
								dataCodewordsPerBlock: 47
							}, {
								numBlocks: 31,
								dataCodewordsPerBlock: 48
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 34,
								dataCodewordsPerBlock: 24
							}, {
								numBlocks: 34,
								dataCodewordsPerBlock: 25
							}]
						}, {
							ecCodewordsPerBlock: 30,
							ecBlocks: [{
								numBlocks: 20,
								dataCodewordsPerBlock: 15
							}, {
								numBlocks: 61,
								dataCodewordsPerBlock: 16
							}]
						}]
					}]
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = r(0);

					function n(e, o, r, t) {
						var n = e.x - o.x + r.x - t.x,
							s = e.y - o.y + r.y - t.y;
						if (0 === n && 0 === s) return {
							a11: o.x - e.x,
							a12: o.y - e.y,
							a13: 0,
							a21: r.x - o.x,
							a22: r.y - o.y,
							a23: 0,
							a31: e.x,
							a32: e.y,
							a33: 1
						};
						var a = o.x - r.x,
							c = t.x - r.x,
							i = o.y - r.y,
							l = t.y - r.y,
							d = a * l - c * i,
							u = (n * l - c * s) / d,
							f = (a * s - n * i) / d;
						return {
							a11: o.x - e.x + u * o.x,
							a12: o.y - e.y + u * o.y,
							a13: u,
							a21: t.x - e.x + f * t.x,
							a22: t.y - e.y + f * t.y,
							a23: f,
							a31: e.x,
							a32: e.y,
							a33: 1
						}
					}
					o.extract = function(e, o) {
						for (var r, s, a = (s = function(e, o, r, t) {
								var s = n({
									x: 3.5,
									y: 3.5
								}, o, r, t);
								return {
									a11: s.a22 * s.a33 - s.a23 * s.a32,
									a12: s.a13 * s.a32 - s.a12 * s.a33,
									a13: s.a12 * s.a23 - s.a13 * s.a22,
									a21: s.a23 * s.a31 - s.a21 * s.a33,
									a22: s.a11 * s.a33 - s.a13 * s.a31,
									a23: s.a13 * s.a21 - s.a11 * s.a23,
									a31: s.a21 * s.a32 - s.a22 * s.a31,
									a32: s.a12 * s.a31 - s.a11 * s.a32,
									a33: s.a11 * s.a22 - s.a12 * s.a21
								}
							}(0, {
								x: o.dimension - 3.5,
								y: 3.5
							}, {
								x: o.dimension - 6.5,
								y: o.dimension - 6.5
							}, {
								x: 3.5,
								y: o.dimension - 3.5
							}), {
								a11: (r = n(o.topLeft, o.topRight, o.alignmentPattern, o.bottomLeft)).a11 * s.a11 + r.a21 * s.a12 + r.a31 * s.a13,
								a12: r.a12 * s.a11 + r.a22 * s.a12 + r.a32 * s.a13,
								a13: r.a13 * s.a11 + r.a23 * s.a12 + r.a33 * s.a13,
								a21: r.a11 * s.a21 + r.a21 * s.a22 + r.a31 * s.a23,
								a22: r.a12 * s.a21 + r.a22 * s.a22 + r.a32 * s.a23,
								a23: r.a13 * s.a21 + r.a23 * s.a22 + r.a33 * s.a23,
								a31: r.a11 * s.a31 + r.a21 * s.a32 + r.a31 * s.a33,
								a32: r.a12 * s.a31 + r.a22 * s.a32 + r.a32 * s.a33,
								a33: r.a13 * s.a31 + r.a23 * s.a32 + r.a33 * s.a33
							}), c = t.BitMatrix.createEmpty(o.dimension, o.dimension), i = function(e, o) {
								var r = a.a13 * e + a.a23 * o + a.a33;
								return {
									x: (a.a11 * e + a.a21 * o + a.a31) / r,
									y: (a.a12 * e + a.a22 * o + a.a32) / r
								}
							}, l = 0; l < o.dimension; l++)
							for (var d = 0; d < o.dimension; d++) {
								var u = i(d + .5, l + .5);
								c.set(d, l, e.get(Math.floor(u.x), Math.floor(u.y)))
							}
						return {
							matrix: c,
							mappingFunction: i
						}
					}
				}, function(e, o, r) {
					"use strict";
					Object.defineProperty(o, "__esModule", {
						value: !0
					});
					var t = function(e, o) {
						return Math.sqrt(Math.pow(o.x - e.x, 2) + Math.pow(o.y - e.y, 2))
					};

					function n(e) {
						return e.reduce((function(e, o) {
							return e + o
						}))
					}

					function s(e, o, r, n) {
						var s, a, c, i, l = [{
								x: Math.floor(e.x),
								y: Math.floor(e.y)
							}],
							d = Math.abs(o.y - e.y) > Math.abs(o.x - e.x);
						d ? (s = Math.floor(e.y), a = Math.floor(e.x), c = Math.floor(o.y), i = Math.floor(o.x)) : (s = Math.floor(e.x), a = Math.floor(e.y), c = Math.floor(o.x), i = Math.floor(o.y));
						for (var u = Math.abs(c - s), f = Math.abs(i - a), B = Math.floor(-u / 2), k = s < c ? 1 : -1, h = a < i ? 1 : -1, m = !0, w = s, p = a; w !== c + k; w += k) {
							var C = d ? p : w,
								y = d ? w : p;
							if (r.get(C, y) !== m && (m = !m, l.push({
									x: C,
									y: y
								}), l.length === n + 1)) break;
							if ((B += f) > 0) {
								if (p === i) break;
								p += h, B -= u
							}
						}
						for (var v = [], P = 0; P < n; P++) l[P] && l[P + 1] ? v.push(t(l[P], l[P + 1])) : v.push(0);
						return v
					}

					function a(e, o, r, t) {
						var n, a = o.y - e.y,
							c = o.x - e.x,
							i = s(e, o, r, Math.ceil(t / 2)),
							l = s(e, {
								x: e.x - c,
								y: e.y - a
							}, r, Math.ceil(t / 2)),
							d = i.shift() + l.shift() - 1;
						return (n = l.concat(d)).concat.apply(n, i)
					}

					function c(e, o) {
						var r = n(e) / n(o),
							t = 0;
						return o.forEach((function(o, n) {
							t += Math.pow(e[n] - o * r, 2)
						})), {
							averageSize: r,
							error: t
						}
					}

					function i(e, o, r) {
						try {
							var t = a(e, {
									x: -1,
									y: e.y
								}, r, o.length),
								n = a(e, {
									x: e.x,
									y: -1
								}, r, o.length),
								s = a(e, {
									x: Math.max(0, e.x - e.y) - 1,
									y: Math.max(0, e.y - e.x) - 1
								}, r, o.length),
								i = a(e, {
									x: Math.min(r.width, e.x + e.y) + 1,
									y: Math.min(r.height, e.y + e.x) + 1
								}, r, o.length),
								l = c(t, o),
								d = c(n, o),
								u = c(s, o),
								f = c(i, o),
								B = Math.sqrt(l.error * l.error + d.error * d.error + u.error * u.error + f.error * f.error),
								k = (l.averageSize + d.averageSize + u.averageSize + f.averageSize) / 4;
							return B + (Math.pow(l.averageSize - k, 2) + Math.pow(d.averageSize - k, 2) + Math.pow(u.averageSize - k, 2) + Math.pow(f.averageSize - k, 2)) / k
						} catch (e) {
							return 1 / 0
						}
					}

					function l(e, o) {
						for (var r = Math.round(o.x); e.get(r, Math.round(o.y));) r--;
						for (var t = Math.round(o.x); e.get(t, Math.round(o.y));) t++;
						for (var n = (r + t) / 2, s = Math.round(o.y); e.get(Math.round(n), s);) s--;
						for (var a = Math.round(o.y); e.get(Math.round(n), a);) a++;
						return {
							x: n,
							y: (s + a) / 2
						}
					}

					function d(e, o, r, s, c) {
						var l, d, u;
						try {
							l = function(e, o, r, s) {
								var c = (n(a(e, r, s, 5)) / 7 + n(a(e, o, s, 5)) / 7 + n(a(r, e, s, 5)) / 7 + n(a(o, e, s, 5)) / 7) / 4;
								if (c < 1) throw new Error("Invalid module size");
								var i = Math.round(t(e, o) / c),
									l = Math.round(t(e, r) / c),
									d = Math.floor((i + l) / 2) + 7;
								switch (d % 4) {
									case 0:
										d++;
										break;
									case 2:
										d--
								}
								return {
									dimension: d,
									moduleSize: c
								}
							}(s, r, c, e), d = l.dimension, u = l.moduleSize
						} catch (e) {
							return null
						}
						var f = r.x - s.x + c.x,
							B = r.y - s.y + c.y,
							k = (t(s, c) + t(s, r)) / 2 / u,
							h = 1 - 3 / k,
							m = {
								x: s.x + h * (f - s.x),
								y: s.y + h * (B - s.y)
							},
							w = o.map((function(o) {
								var r = (o.top.startX + o.top.endX + o.bottom.startX + o.bottom.endX) / 4,
									s = (o.top.y + o.bottom.y + 1) / 2;
								if (e.get(Math.floor(r), Math.floor(s))) return n([o.top.endX - o.top.startX, o.bottom.endX - o.bottom.startX, o.bottom.y - o.top.y + 1]), {
									x: r,
									y: s,
									score: i({
										x: Math.floor(r),
										y: Math.floor(s)
									}, [1, 1, 1], e) + t({
										x: r,
										y: s
									}, m)
								}
							})).filter((function(e) {
								return !!e
							})).sort((function(e, o) {
								return e.score - o.score
							}));
						return {
							alignmentPattern: k >= 15 && w.length ? w[0] : m,
							dimension: d
						}
					}
					o.locate = function(e) {
						for (var o = [], r = [], s = [], a = [], c = function(t) {
								for (var c = 0, i = !1, l = [0, 0, 0, 0, 0], d = function(o) {
										var s = e.get(o, t);
										if (s === i) c++;
										else {
											l = [l[1], l[2], l[3], l[4], c], c = 1, i = s;
											var d = n(l) / 7,
												u = Math.abs(l[0] - d) < d && Math.abs(l[1] - d) < d && Math.abs(l[2] - 3 * d) < 3 * d && Math.abs(l[3] - d) < d && Math.abs(l[4] - d) < d && !s,
												f = n(l.slice(-3)) / 3,
												B = Math.abs(l[2] - f) < f && Math.abs(l[3] - f) < f && Math.abs(l[4] - f) < f && s;
											if (u) {
												var k = o - l[3] - l[4],
													h = k - l[2],
													m = {
														startX: h,
														endX: k,
														y: t
													};
												(w = r.filter((function(e) {
													return h >= e.bottom.startX && h <= e.bottom.endX || k >= e.bottom.startX && h <= e.bottom.endX || h <= e.bottom.startX && k >= e.bottom.endX && l[2] / (e.bottom.endX - e.bottom.startX) < 1.5 && l[2] / (e.bottom.endX - e.bottom.startX) > .5
												}))).length > 0 ? w[0].bottom = m : r.push({
													top: m,
													bottom: m
												})
											}
											if (B) {
												var w, p = o - l[4],
													C = p - l[3];
												m = {
													startX: C,
													y: t,
													endX: p
												}, (w = a.filter((function(e) {
													return C >= e.bottom.startX && C <= e.bottom.endX || p >= e.bottom.startX && C <= e.bottom.endX || C <= e.bottom.startX && p >= e.bottom.endX && l[2] / (e.bottom.endX - e.bottom.startX) < 1.5 && l[2] / (e.bottom.endX - e.bottom.startX) > .5
												}))).length > 0 ? w[0].bottom = m : a.push({
													top: m,
													bottom: m
												})
											}
										}
									}, u = -1; u <= e.width; u++) d(u);
								o.push.apply(o, r.filter((function(e) {
									return e.bottom.y !== t && e.bottom.y - e.top.y >= 2
								}))), r = r.filter((function(e) {
									return e.bottom.y === t
								})), s.push.apply(s, a.filter((function(e) {
									return e.bottom.y !== t
								}))), a = a.filter((function(e) {
									return e.bottom.y === t
								}))
							}, u = 0; u <= e.height; u++) c(u);
						o.push.apply(o, r.filter((function(e) {
							return e.bottom.y - e.top.y >= 2
						}))), s.push.apply(s, a);
						var f = o.filter((function(e) {
							return e.bottom.y - e.top.y >= 2
						})).map((function(o) {
							var r = (o.top.startX + o.top.endX + o.bottom.startX + o.bottom.endX) / 4,
								t = (o.top.y + o.bottom.y + 1) / 2;
							if (e.get(Math.round(r), Math.round(t))) {
								var s = [o.top.endX - o.top.startX, o.bottom.endX - o.bottom.startX, o.bottom.y - o.top.y + 1],
									a = n(s) / s.length;
								return {
									score: i({
										x: Math.round(r),
										y: Math.round(t)
									}, [1, 1, 3, 1, 1], e),
									x: r,
									y: t,
									size: a
								}
							}
						})).filter((function(e) {
							return !!e
						})).sort((function(e, o) {
							return e.score - o.score
						})).map((function(e, o, r) {
							if (o > 4) return null;
							var t = r.filter((function(e, r) {
								return o !== r
							})).map((function(o) {
								return {
									x: o.x,
									y: o.y,
									score: o.score + Math.pow(o.size - e.size, 2) / e.size,
									size: o.size
								}
							})).sort((function(e, o) {
								return e.score - o.score
							}));
							if (t.length < 2) return null;
							var n = e.score + t[0].score + t[1].score;
							return {
								points: [e].concat(t.slice(0, 2)),
								score: n
							}
						})).filter((function(e) {
							return !!e
						})).sort((function(e, o) {
							return e.score - o.score
						}));
						if (0 === f.length) return null;
						var B = function(e, o, r) {
								var n, s, a, c, i, l, d, u = t(e, o),
									f = t(o, r),
									B = t(e, r);
								return f >= u && f >= B ? (i = (n = [o, e, r])[0], l = n[1], d = n[2]) : B >= f && B >= u ? (i = (s = [e, o, r])[0], l = s[1], d = s[2]) : (i = (a = [e, r, o])[0], l = a[1], d = a[2]), (d.x - l.x) * (i.y - l.y) - (d.y - l.y) * (i.x - l.x) < 0 && (i = (c = [d, i])[0], d = c[1]), {
									bottomLeft: i,
									topLeft: l,
									topRight: d
								}
							}(f[0].points[0], f[0].points[1], f[0].points[2]),
							k = B.topRight,
							h = B.topLeft,
							m = B.bottomLeft,
							w = d(e, s, k, h, m),
							p = [];
						w && p.push({
							alignmentPattern: {
								x: w.alignmentPattern.x,
								y: w.alignmentPattern.y
							},
							bottomLeft: {
								x: m.x,
								y: m.y
							},
							dimension: w.dimension,
							topLeft: {
								x: h.x,
								y: h.y
							},
							topRight: {
								x: k.x,
								y: k.y
							}
						});
						var C = l(e, k),
							y = l(e, h),
							v = l(e, m),
							P = d(e, s, C, y, v);
						return P && p.push({
							alignmentPattern: {
								x: P.alignmentPattern.x,
								y: P.alignmentPattern.y
							},
							bottomLeft: {
								x: v.x,
								y: v.y
							},
							topLeft: {
								x: y.x,
								y: y.y
							},
							topRight: {
								x: C.x,
								y: C.y
							},
							dimension: P.dimension
						}), 0 === p.length ? null : p
					}
				}]).default
			}, "object" === c(o) && "object" === c(e) ? e.exports = a() : (n = [], void 0 === (s = "function" == typeof(t = a) ? t.apply(o, n) : t) || (e.exports = s))
		}
	}
]);