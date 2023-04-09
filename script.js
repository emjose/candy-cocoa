"use strict";
const _0x12065e = _0x1f74;
(function (_0x4fa339, _0x2f0c43) {
	const _0x3110cf = _0x1f74,
		_0x1a24e1 = _0x4fa339();
	while (!![]) {
		try {
			const _0x4e6946 =
				(parseInt(_0x3110cf(0x13a)) / 0x1) * (-parseInt(_0x3110cf(0x139)) / 0x2) +
				(parseInt(_0x3110cf(0x130)) / 0x3) * (parseInt(_0x3110cf(0x140)) / 0x4) +
				(-parseInt(_0x3110cf(0x114)) / 0x5) * (-parseInt(_0x3110cf(0x11a)) / 0x6) +
				parseInt(_0x3110cf(0x11f)) / 0x7 +
				-parseInt(_0x3110cf(0x109)) / 0x8 +
				(-parseInt(_0x3110cf(0x10a)) / 0x9) * (-parseInt(_0x3110cf(0x110)) / 0xa) +
				(parseInt(_0x3110cf(0x124)) / 0xb) * (-parseInt(_0x3110cf(0x142)) / 0xc);
			if (_0x4e6946 === _0x2f0c43) break;
			else _0x1a24e1["push"](_0x1a24e1["shift"]());
		} catch (_0x14886f) {
			_0x1a24e1["push"](_0x1a24e1["shift"]());
		}
	}
})(_0x14aa, 0x8ba74);
const storedTheme =
	localStorage[_0x12065e(0x122)](_0x12065e(0x131)) ||
	(window[_0x12065e(0x11e)](_0x12065e(0x119))[_0x12065e(0x138)] ? _0x12065e(0x10e) : _0x12065e(0x125));
if (storedTheme) document[_0x12065e(0x121)][_0x12065e(0x10f)](_0x12065e(0x11b), storedTheme);
function switchMode() {
	const _0x13287f = _0x12065e,
		_0x1e0682 = document["documentElement"][_0x13287f(0x12a)]("data-theme"),
		_0x50a39b = _0x1e0682 === "light" ? "dark" : _0x13287f(0x125);
	document[_0x13287f(0x121)]["setAttribute"](_0x13287f(0x11b), _0x50a39b),
		localStorage["setItem"](_0x13287f(0x131), _0x50a39b),
		location["reload"]();
}
function _0x1f74(_0x537dcd, _0x312330) {
	const _0x14aaef = _0x14aa();
	return (
		(_0x1f74 = function (_0x1f744b, _0x1b03ee) {
			_0x1f744b = _0x1f744b - 0x106;
			let _0x48b074 = _0x14aaef[_0x1f744b];
			return _0x48b074;
		}),
		_0x1f74(_0x537dcd, _0x312330)
	);
}
document[_0x12065e(0x128)]("DOMContentLoaded", () => {
	const _0x39387f = _0x12065e,
		_0xd978eb = sessionStorage[_0x39387f(0x122)](_0x39387f(0x111));
	_0xd978eb && (window[_0x39387f(0x133)](0x0, _0xd978eb), sessionStorage[_0x39387f(0x13e)](_0x39387f(0x111)));
}),
	window["addEventListener"](_0x12065e(0x13f), () => {
		const _0x7d76b5 = _0x12065e;
		sessionStorage["setItem"](_0x7d76b5(0x111), window["scrollY"]);
	}),
	$(function () {
		const _0x1564b5 = _0x12065e;
		var _0x89f743 = $("#mainNavbar"),
			_0x2a3a30 = $(_0x1564b5(0x141)),
			_0x456a4b = $(_0x1564b5(0x129)),
			_0xea8697 = $(_0x1564b5(0x13d)),
			_0x325590 = document[_0x1564b5(0x121)][_0x1564b5(0x12a)](_0x1564b5(0x11b));
		$(document)[_0x1564b5(0x10c)](function () {
			const _0x36c29d = _0x1564b5;
			var _0x93bad3 = $(this)[_0x36c29d(0x11d)]() !== 0x0;
			_0x89f743["toggleClass"](_0x36c29d(0x127), _0x93bad3), _0x2a3a30["toggleClass"](_0x36c29d(0x12f), _0x93bad3);
			if (_0x93bad3 && _0x325590 === _0x36c29d(0x125))
				_0x456a4b[_0x36c29d(0x113)](_0x36c29d(0x11c), _0x36c29d(0x107)),
					_0xea8697[_0x36c29d(0x12d)](_0x36c29d(0x10d))[_0x36c29d(0x12b)](_0x36c29d(0x117));
			else
				_0x325590 === "light" &&
					(_0x456a4b[_0x36c29d(0x113)](_0x36c29d(0x11c), "var(--crimson)"),
					_0xea8697[_0x36c29d(0x12d)](_0x36c29d(0x117))[_0x36c29d(0x12b)](_0x36c29d(0x10d)));
		}),
			_0xea8697["removeClass"](_0x325590 === _0x1564b5(0x10e) ? "navbar-light" : _0x1564b5(0x117))[_0x1564b5(0x12b)](
				_0x325590 === _0x1564b5(0x10e) ? _0x1564b5(0x117) : _0x1564b5(0x10d)
			);
	});
function _0x14aa() {
	const _0x40b034 = [
		"%cThank\x20you\x20for\x20checking\x20out\x20my\x20work!",
		"removeClass",
		"gradient",
		"corner-scrolled",
		"96pIOVJC",
		"theme",
		"main",
		"scrollTo",
		"color:\x20white;\x20background:\x20rgba(238,58,136,1);\x20font-size:\x2018px;\x20padding:\x2012px;\x20margin:\x206px\x200\x206px\x2014px",
		"%cHave\x20a\x20wonderful\x20day!",
		"font-size:\x2014px;\x20color:\x20#fff;\x20width:\x20200px;\x20padding:\x208px;\x20margin:\x206px\x200\x206px\x2014px;\x20border-radius:\x204px;\x20background:\x20rgba(238,58,136,1);\x20background:\x20linear-gradient(109.6deg,\x20rgba(238,58,136,1)\x2011.2%,\x20rgba(128,162,245,1)\x2091.1%)",
		"%cGithub\x20\x20\x20\x20%chttps://bit.ly/3iwQC6U",
		"matches",
		"58qdorgi",
		"16319PYlHPs",
		"clear",
		"font-size:\x2014px;\x20padding:\x2016px;\x20margin:\x206px\x200\x206px\x200;\x20color:\x20rgba(238,58,136,1)",
		".first-button",
		"removeItem",
		"beforeunload",
		"86596vMroRx",
		".github-corner",
		"12tpZndu",
		"log",
		"padding:\x2012px",
		"color:\x20rgba(238,58,136,1)",
		"white",
		"secondary",
		"4450672pgoPOg",
		"36VBSKKP",
		"register",
		"scroll",
		"navbar-light",
		"dark",
		"setAttribute",
		"1351970sxcUHo",
		"scrollPosition",
		"serviceWorker",
		"css",
		"5UDrUlU",
		"%cThe\x20README\x20\x20\x20%chttps://bit.ly/3Wy2Ugv",
		"%c❤️",
		"navbar-dark",
		"%cHello\x20World!\x20I\x27m\x20Emmanuel.",
		"(prefers-color-scheme:\x20dark)",
		"1074006cqQRAD",
		"data-theme",
		"color",
		"scrollTop",
		"matchMedia",
		"1407210Byykfj",
		"join",
		"documentElement",
		"getItem",
		"catch",
		"131802chVCnW",
		"light",
		"/sw.js",
		"scrolled",
		"addEventListener",
		".white-nav",
		"getAttribute",
		"addClass",
	];
	_0x14aa = function () {
		return _0x40b034;
	};
	return _0x14aa();
}
const swRegistration = () => {
	const _0x5c5306 = _0x12065e,
		_0x234a5a = ["font-size:\x2020px", _0x5c5306(0x144), "margin:\x204px\x200\x204px\x204px", _0x5c5306(0x106)][
			_0x5c5306(0x120)
		](";");
	"serviceWorker" in navigator &&
		navigator[_0x5c5306(0x112)]
			[_0x5c5306(0x10b)](_0x5c5306(0x126))
			["then"]((_0x254bd6) => console[_0x5c5306(0x143)](_0x5c5306(0x116), _0x234a5a))
			[_0x5c5306(0x123)]((_0x95fc03) => console["log"](_0x95fc03));
};
function consoleText() {
	const _0x882481 = _0x12065e;
	console[_0x882481(0x13b)]();
	const _0x4115c6 = {};
	(_0x4115c6["main"] = _0x882481(0x134)),
		(_0x4115c6[_0x882481(0x108)] = _0x882481(0x13c)),
		(_0x4115c6[_0x882481(0x12e)] = _0x882481(0x136));
	const _0x55feba = _0x4115c6;
	console[_0x882481(0x143)](_0x882481(0x118), _0x55feba[_0x882481(0x132)]),
		console[_0x882481(0x143)](_0x882481(0x12c), _0x55feba[_0x882481(0x108)]),
		console[_0x882481(0x143)](
			"%cPortfolio\x20%chttps://bit.ly/3QQr1Ux",
			_0x55feba[_0x882481(0x12e)],
			_0x55feba["secondary"]
		),
		console["log"](
			"%cLinkedin\x20\x20%chttps://bit.ly/3cygAD4",
			_0x55feba[_0x882481(0x12e)],
			_0x55feba[_0x882481(0x108)]
		),
		console[_0x882481(0x143)](_0x882481(0x137), _0x55feba[_0x882481(0x12e)], _0x55feba[_0x882481(0x108)]),
		console["log"](_0x882481(0x115), _0x55feba["gradient"], _0x55feba["secondary"]),
		console[_0x882481(0x143)](_0x882481(0x135), _0x55feba["secondary"]);
}
swRegistration(), consoleText();
