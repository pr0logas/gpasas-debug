var fullHash = '134$MPFW.CWE49F4IY8.HA.MA3Q5%VDWE49F4IY8.HA7C96C9IE4RF45EF2G7OA7X962G4UUE2G7F%63R61A64:65:6EL63Q5+ED:OE2G7E%6KA74R6FL65:6EL63Q5UUEWF7W1DZ2P*4D5T9LPE/7HGNTNN0+NTD9LXBP3SX8F55KJB1O8UP2T:RKSIJ8TJP$3$ 80/J55SPMMT9PXN32BDJ*O8WIP:2W63VG0 RJBARU:2-E61TTYJQ7I3K+43LFAI32JHU217FASFPI65S5BYFBV%A J0/MLZ+MCEHHM3+6BUZMCT34BT 86+S5YM21NM4-6*MCL:M0WR7:H:SR6P27QII%4+YMJKT7Y5GS6CR3$/8M*T//7G1T1HMX7S2K7 0842PGH41Q7J2IIBU5753PB/NUIKHQFF-+36S1$1WONJS8DF9B*I3Y0B*9W7*UJI0LG5C:JHESFVKZ%8$+P*ARLWFXHPM%UZ.F4M2FEDMDV9+LHMP$LFHQ8L7G8QB6+SPLK9HO'

function engine(hash) {
	console.log("Full Hash:")
	console.log(hash)
	var controlNum = parseInt(hash.substr(0, hash.indexOf("$"))),
		hashedPayload = hash.substr(hash.indexOf("$") + 1, controlNum);

		console.log("")
		console.log("Control num:")
		console.log(controlNum)
		console.log("")
		console.log("Payload:")
		console.log(hashedPayload)
		console.log("")
		console.log("Signature:")
		console.log(hash.substr(hash.indexOf("$") + 1 + controlNum))
		console.log("")

	var result = {
		payload: JSON.parse(i(hashedPayload)),
		payloadInBase45: hashedPayload,
		signature: i(hash.substr(hash.indexOf("$") + 1 + controlNum))
	}
	console.log(result)
	return result
}

var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",
	s = function(e, o) {
		//console.log([Math.floor(e / o), e % o])
		return [Math.floor(e / o), e % o]
	};

function t(e, o) {
	(null == o || o > e.length) && (o = e.length);
	for (var r = 0, t = new Array(o); r < o; r++) t[r] = e[r];
	//console.log(t)
	return t
}

function i(e) {
	for (var o = Array.from(e).map((
		function(e) {
		return n.indexOf(e)})), 
		a = [], 
		c = 0; 
		c < o.length; 
		c += 3)

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
		} 
		var d;
	return Buffer.from(a)
}


function o(e, o) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, o) {
                var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                if (null != r) {
                    var t, n, s = [], a = !0, c = !1;
                    try {
                        for (r = r.call(e); !(a = (t = r.next()).done) && (s.push(t.value),
                        !o || s.length !== o); a = !0)
                            ;
                    } catch (e) {
                        c = !0,
                        n = e
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (c)
                                throw n
                        }
                    }
                    return s
                }
            }(e, o) || r(e, o) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

engine(fullHash)