System.register(["./index-legacy-CTLJpGt0.js"], (function(t, n) {
	"use strict";
	var e, o, a, r, i, l, s, u, c, d, f, m, p;
	return {
		setters: [function(t) {
			e = t.r, o = t.p, a = t.o, r = t.a, i = t.c, l = t.t, s = t.b, u = t.d, c = t.n, d = t
				.e, f = t.F, m = t.f, p = t.g
		}],
		execute: function() {
			var g = document.createElement("style");
			g.textContent =
				".game-container{position:absolute;left:0;top:0;width:100%;height:100%;border:1px solid black;overflow:hidden;box-sizing:border-box;background-image:url(" +
				new URL("bg1-BxhE2HRr.png", n.meta.url).href + "),url(" + new URL("bg1-BxhE2HRr.png", n
					.meta.url).href + "),url(" + new URL("bg1-BxhE2HRr.png", n.meta.url).href +
				");background-color:#a0daff;background-repeat:repeat-x;background-size:200% 100%;animation:var(--animation);transition:transform .2s ease-out}@keyframes scrollRight{0%{background-position:0% 100%,200% 100%,400% 100%}to{background-position:200% 100%,400% 100%,0% 100%}}@media screen and (orientation: portrait){.game-container{position:absolute;width:100vh;height:100vw;top:0;left:100vw;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);transform-origin:0% 0%}}.score{position:absolute;left:20px;top:20px}#person{width:100px;position:absolute;left:var(--left);bottom:6%;transform:translate(0)}.jumping{animation:jump 1.5s ease-out}@keyframes jump{0%{transform:translate(0)}50%{transform:translateY(-180%)}to{transform:translate(0)}}.startBtn{position:absolute;z-index:5;left:50%;top:50%;background-color:coral;color:#fff;border:none;padding:10px 30px;border-radius:10px;cursor:pointer}.btn{width:80px;height:80px;border-radius:50%;line-height:80px;background-color:coral;position:absolute;right:40px;bottom:40px;color:#fff;font-size:18px;z-index:5}.mu{position:absolute;background:url(" +
				new URL("mu-D9mGyFWB.png", n.meta.url).href +
				") no-repeat center;background-size:100% 100%;width:30px;bottom:6%}.zhuan{position:absolute;background:url(" +
				new URL("zhuan-CP0SWseg.png", n.meta.url).href +
				") no-repeat center;background-size:100% 100%;width:100px;height:60px;bottom:200px}@media screen and (orientation: portrait){.zhuan{bottom:160px}}\n",
				document.head.appendChild(g);
			var h = {
					class: "score"
				},
				b = ["src"],
				v = {
					class: ""
				},
				x = ["id"],
				k = ["id"];
			t("default", {
				__name: "game",
				setup: function(t) {
					var n = e({
						personImg: o,
						interval: null,
						addDataInterval: null,
						moveInterval: null,
						score: 0,
						bottom: 6,
						left: 50,
						dataList: [],
						overFlag: !1,
						animation: "auto",
						showStartBtn: !0,
						num: document.documentElement.clientHeight / 3.7,
						width: document.documentElement.clientWidth,
						flag: !1,
						jumpInterval: null
					});

					function g() {
						var t = n.dataList.length;
						n.dataList.push({
							height: y(30, 80),
							left: 100,
							color: ["#ff0000", "#068bfb", "#800080", "#FFA500",
								"#00ff00", "#0000FF", "#00ffff", "#754c0c",
								"#b27787", "#FFFF00"
							][y(0, 9)] || "#FFA500",
							id: "p" + t,
							type: 1 == y(0, 2) ? "wood" : "brick"
						})
					}

					function w() {
						n.dataList = [], n.score = 0, n.showStartBtn = !1;
						var t = n.width > 1e3 ? 15 : 6.5;
						n.animation = "scrollRight ".concat(t, "s linear infinite"), n
							.personImg = p, n.overFlag = !1, g(), n.addDataInterval =
							setInterval((function() {
								n.dataList.length <= 10 ? g() : clearInterval(n
									.addDataInterval)
							}), 2e3),
							function() {
								var t = n.width > 1e3 ? 80 : 30;
								n.interval = setInterval((function() {
									n.dataList = n.dataList.map((function(t) {
										return t.left = t.left - 1,
											t
									})).filter((function(t) {
										if (2 == t.left && n
											.score++, t.left >= -30)
											return !0
									})), n.overFlag
								}), t)
							}()
					}

					function y(t, n) {
						return Math.floor(Math.random() * (n - t)) + t
					}
					return a((function() {})),
						function(t, e) {
							return r(), i("div", {
								class: "game-container",
								style: c({
									"--animation": n.animation,
									"--num": "-" + n.num + "px",
									"--num2": n.num + "px"
								})
							}, [n.showStartBtn ? (r(), i("button", {
									key: 0,
									class: "startBtn",
									onClick: e[0] || (e[0] = function(t) {
										return w()
									})
								}, l(n.score > 0 ? "重新开始" : "开始"), 1)) : s("", !0),
								n.showStartBtn ? s("", !0) : (r(), i("button", {
									key: 1,
									class: "btn",
									onClick: e[1] || (e[1] = function(t) {
										return function() {
											if (!n.flag) {
												var t = document
													.getElementById(
														"person"
														);
												n.flag = !0, t
													.addEventListener(
														"animationend",
														(function() {
															n.flag = !
																1
														}), {
															once:
																!
																0
														})
											}
										}()
									})
								}, "跳")), u("span", h, "得分：" + l(n.score), 1), u(
									"img", {
										id: "person",
										style: c({
											"--left": n.left + "px"
										}),
										class: d({
											jumping: n.flag
										}),
										src: n.personImg
									}, null, 14, b), u("div", v, [(r(!0), i(f, null,
									m(n.dataList, (function(t, n) {
										return r(), i(f, {
											key: n
										}, ["wood" == t
											.type ? (
											r(), i("div", {
														key: 0,
														class: "mu",
														id: t
															.id,
														style: c(
															"height: "
															.concat(
																t
																.height,
																"px;left: "
																)
															.concat(
																t
																.left,
																"%;"
																)
															)
													},
													null,
													12,
													x)
												) : (
											r(), i("div", {
														key: 1,
														class: "zhuan",
														id: t
															.id,
														style: c(
															"left: "
															.concat(
																t
																.left,
																"%;"
																)
															)
													},
													null,
													12,
													k))
										], 64)
									})), 128))])
							], 4)
						}
				}
			})
		}
	}
}));
