// 消息滚动
function AutoPlayScroll(args) {
  var scrUl = $(args);
  var scrLen = scrUl.find("li").length;
  if (scrLen <= 1) {
    return;
  }
  var scrHgt = scrUl.find("li:eq(0)").height();
  scrUl.animate({ "margin-top": -scrHgt + "px" }, 500, function () {
    $(this).css({ "margin-top": "0" }).find("li:eq(0)").appendTo(this);
  });
}

// 定位
function goTo(div, top) {
  // $('html,body').stop();
  var top = parseInt(div.offset().top) - (top || 0) - 200;
  $("html,body").animate({ scrollTop: (0, top) }, 800);
  window.event && (window.event.returnValue = false);
  return false;
}

// 首屏不出现
function scrShow(id) {
  var scrollY = $(window).scrollTop();
  var scrHeight = $(window).height();
  if (scrollY > scrHeight / 2) {
    $(id).show();
  } else {
    $(id).hide();
  }
}

// 导航切换
function tabInit(ids) {
  var ids_a = ids.split("|");
  var tab_menu = $("." + ids_a[0]);
  var tab_list = $("." + ids_a[1]);
  tab_menu.find("li").each(function (index) {
    $(this).click(function () {
      $(this).parent().find("li").removeClass(ids_a[3]);
      $(this).addClass(ids_a[3]);
      var _index = $(this).index();
      $(this)
        .parent()
        .next()
        .find("." + ids_a[2])
        .hide()
        .eq(_index)
        .show();
      return false;
    });
  });
}

$(function () {
  scrShow(".mouFixed .a2");
  $(window).scroll(function () {
    scrShow(".mouFixed .a2");
  });
  var scroll_time = setInterval(function () {
    AutoPlayScroll(".newsList");
  }, 3000);

  // select选项卡
  // $(document).click(function(e){
  // 	var e = e || window.Event
  // 	var el = e.target ||  e.srcElement
  // 	while(el){
  // 		if(el.className && el.className.indexOf('seltit')>-1){
  // 			var eClick = $(el).parents('.select')
  // 			$('.select').removeClass('selectOpen')
  // 			eClick.hasClass('selectOpen') ? eClick.removeClass('selectOpen') : eClick.addClass('selectOpen')
  // 			return
  // 		}
  // 		if(el.nodeName === 'P' && el.parentNode && el.parentNode.className.indexOf('selcont')>-1){
  // 			eTagA = $(el)
  // 			eTagA.parents('.select').removeClass('selectOpen')
  // 			eTagA.addClass('on').siblings().removeClass('on')
  // 			eTagP = eTagA.parents('.selcont').siblings('div').find('p')
  // 			console.log(eTagP)
  // 			eTagP.text(eTagA.text())
  // 			return
  // 		}
  // 		el = el.parentNode
  // 		$(".select").removeClass('selectOpen');
  // 	}
  // })

  var eachSelect = $(".select");
  $.each(eachSelect, function (e, i) {
    $(i)
      .find(".seltit")
      .click(function () {
        var emThis = $(this).parents(".select");
        if (emThis.hasClass("selectOpen")) {
          emThis.removeClass("selectOpen");
        } else {
          $(".select").removeClass("selectOpen");
          emThis.addClass("selectOpen");
        }
      });
    $(i)
      .find(".selcont p")
      .click(function () {
        var cosTxt = $(this).text();
        var emCont = $(this).parents(".selcont");
        var emBox = emCont.siblings(".seltit");
        var emWrap = emBox.parents(".select");
        emBox.find("p").text(cosTxt);
        emWrap.removeClass("selectOpen");
      });
  });

  //
  // -------- 筛选
  $(".fixBoMask,.fixBoInfo .fixClose").click(function () {
    $(".fixBoMask").hide();
    $(".fixBoInfo").removeClass("fixBoShow");
  });
  function fixShow(_id) {
    $(".fixBoMask").show();
    $(_id).addClass("fixBoShow");
  }
  $("#btnSxuan").click(function () {
    fixShow("#fixScreen");
  });
  $(".single dd span").click(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".multi dd span").click(function () {
    $(this).toggleClass("on");
  });
  $(".chooseRes p em").click(function () {
    $(this).parents("p").remove();
    if ($(".chooseRes p").length < 1) {
      $(".chooseRes").hide();
    }
  });

  // 创建切换
  tabInit("ctNav|ctWrap|ctCount|on");

  // 输入清空

  // 搜索框

  // 搜索交互内容
  $(".iptbox input").on("input propertychange focus", function (e) {
    inputLen = $(this).val().length;
    if (inputLen > 0) {
      $(".iptbox .clear").show();
    } else {
      $(".iptbox .clear").hide();
    }
  });

  $(document).click(function (e) {
    var el = $(e.target);
    if (el.closest(".iptbox").length) {
      if (el[0].className == "clear") {
        $(".iptbox input").focus().val("");
        $(".iptbox .clear").hide();
      }
    } else {
      $(".iptbox .clear").hide();
    }
  });

  // 内页高度计算
  function pageView() {
    var barHigh = $(".fixBarNav").height();
    var boxHigh = $(window).height();
    $(".pageScroll").css("height", boxHigh - barHigh);
  }
  pageView();

  // 1108

  // 创建切换
  tabInit("grupNav|grupWrap|grupCount|on");
	// 输入框
  var eachIpt = $(".newInputs .iptBox");
  $.each(eachIpt, function (i, e) {
    var iptTag = $(e).find("input");
    var clearTag = $(e).find(".newclear");
    iptTag.on("input propertychange focus", function (t) {
      inputLen = $(this).val().length;
			console.log(inputLen)
      if (inputLen > 0) {
				$(this).siblings('.newclear').show();
      } else {
        $(this).siblings('.newclear').hide();
      }
    });
    clearTag.click(function () {
      $(this).siblings().focus().val("");
      $(this).hide();
    });
  });
});
