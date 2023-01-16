// var w = window,
//   d = document.documentElement,
//   c,
//   dpr = window.devicePixelRatio;
// function init_viewport() {
//   var dWidth = d.scrollWidth;
//   dWidth > 750 && (dWidth = 750);
//   var a = (dWidth / 7.5).toFixed(2);
//   d.style.fontSize = a + "px";
//   document.documentElement.setAttribute("data-dpr", dpr);
//   var b = parseFloat(w.getComputedStyle(d, null).fontSize);
//   var ua = navigator.userAgent;
//   if (/QQ\//i.test(ua) && /MQQBrowser/i.test(ua)) {
//     return;
//   }
// }
// init_viewport();
// w.addEventListener(
//   "resize",
//   function () {
//     clearTimeout(c), (c = setTimeout(init_viewport, 300));
//   },
//   !1
// );

// QQ
function setFontSize(){
	var w=window,
			d=document.documentElement,
			c;
	function setSize(){
			var deviceWidth = d.clientWidth;
			deviceWidth > 750 && (deviceWidth = 750);
			var a=(deviceWidth / 7.5).toFixed(2);
			d.style.fontSize = a + "px"; 
			var b = parseFloat(w.getComputedStyle(d, null).fontSize).toFixed(2);
	}
	setSize();
	w.addEventListener("resize", function () {
			clearTimeout(c),
			c = setTimeout(setSize, 300)
	}, !1)
}

(function(){
	setFontSize();
	var ua = window.navigator.userAgent;
	if(/\sQQ\//i.test(ua)){setFontSize()}
})();
