(self.webpackChunk = self.webpackChunk || []).push([
	[431], {
		431: function(e, r, t) {
			"use strict";

			function n(e, r, t, n, a, u, o) {
				try {
					var i = e[u](o),
						c = i.value
				} catch (e) {
					return void t(e)
				}
				i.done ? r(c) : Promise.resolve(c).then(n, a)
			}

			function a(e) {
				return function() {
					var r = this,
						t = arguments;
					return new Promise((function(a, u) {
						var o = e.apply(r, t);

						function i(e) {
							n(o, a, u, i, c, "next", e)
						}

						function c(e) {
							n(o, a, u, i, c, "throw", e)
						}
						i(void 0)
					}))
				}
			}
			t.r(r), t.d(r, {
				scan: function() {
					return h
				}
			});
			var u = t(384),
				o = t(859);

			function i(e) {
				return o.decode(e)
			}

			function c() {
				return (c = a(regeneratorRuntime.mark((function e(r, t, n) {
					return regeneratorRuntime.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.abrupt("return", s(r, t, n));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}

			function s(e, r, t) {
				return f.apply(this, arguments)
			}

			function f() {
				return (f = a(regeneratorRuntime.mark((function e(r, t, n) {
					return regeneratorRuntime.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.abrupt("return", crypto.subtle.verify({
									name: "RSASSA-PKCS1-v1_5"
								}, n, t, d(r)));
							case 1:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}

			function p() {
				return (p = a(regeneratorRuntime.mark((function e() {
					var r;
					return regeneratorRuntime.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return r = Uint8Array.from(atob(window.certificateKey), (function(e) {
									return e.charCodeAt(0)
								})), e.abrupt("return", crypto.subtle.importKey("spki", r, {
									name: "RSASSA-PKCS1-v1_5",
									hash: {
										name: "SHA-256"
									}
								}, !1, ["verify"]));
							case 2:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}

			function d(e) {
				for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), n = 0, a = e.length; n < a; n++) t[n] = e.charCodeAt(n);
				return r
			}

			function h() {
				var e = document.getElementById("output");
				if (e.paused || e.readyState < 2) return Promise.reject();
				var r = document.getElementById("snapshot").getContext("2d");
				r.drawImage(e, 0, 0);
				try {
					var t = function(e) {
						var r = u(e.data, e.width, e.height);
						return r ? r.data : null
					}(r.getImageData(0, 0, 1200, 800));
					if (null == t) throw Error("Code not detected");
					var n = function(e) {
							var r = parseInt(e.substr(0, e.indexOf("$"))),
								t = e.substr(e.indexOf("$") + 1, r);
							return {
								payload: JSON.parse(i(t)),
								payloadInBase45: t,
								signature: i(e.substr(e.indexOf("$") + 1 + r))
							}
						}(t),
						a = new Date(n.payload.vt).getTime() > (new Date).getTime();
					return function() {
						return p.apply(this, arguments)
					}().then((function(e) {
						return function(e, r, t) {
							return c.apply(this, arguments)
						}(n.payloadInBase45, n.signature, e)
					})).then((function(e) {
						return {
							isValid: a && e,
							payload: n.payload
						}
					})).catch((function(e) {
						return Promise.reject(e)
					}))
				} catch (e) {
					return Promise.reject(e)
				}
			}
			t.g.Buffer = t.g.Buffer || t(583).lW
		}
	}
]);