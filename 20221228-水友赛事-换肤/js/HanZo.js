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

// 导航类别切换
function tabInit(ids) {
  var ids_a = ids.split("|");
  var tab_menu = $("." + ids_a[0]);
  var tab_list = $("." + ids_a[1]);
  tab_menu.find("li").each(function (index) {
    var clickTag = $(this).find(ids_a[3]);
    clickTag.click(function () {
			console.log(12313)
      var _index = index;
      $(this).parent().siblings().find(ids_a[3]).removeClass("on");
      $(this).addClass("on");
      $(this)
        .parents("div")
        .next()
        .find("." + ids_a[2])
        .hide()
        .eq(_index)
        .show();
      return false;
    });
  });
}

// 底部弹窗弹出、收起
function openDia(clickArg) {
  $(".fixMask").show();
  $(clickArg).addClass("fixShow");
  $(".fixMask,.fixDiaClose").on("click", function () {
    closeDia();
  });
}
function closeDia() {
  $(".fixShow").removeClass("fixShow");
  $(".fixMask").hide();
}

// 可输入文字限制
function txtLimit(argBox, argNum, maxLen) {
  var maxLen = maxLen;
  var iptBox = $(argBox);
  var iptNum = $(argNum);
  function test() {
    var iptVal = iptBox.val().replace(/(^\s+)|(\s+$)/g, "");
    var iptAll = iptVal.slice(0, maxLen);
    if (iptBox.length > 0) {
      iptNum.parents("em").addClass("on");
    } else {
      iptNum.parents("em").removeClass("on");
    }
    iptBox.val(iptAll);
    iptNum.text(iptAll.length);
  }
  iptBox.on("keyup", test);
}

$(function () {
  scrShow(".mouFixed .a3");
  $(window).scroll(function () {
    scrShow(".mouFixed .a3");
  });

  // 切换
  tabInit("tabMatchList|tabMatchWrap|tabMaCout|span");
  // 弹窗文字输出限制
  var textEach = $(".jiaruText");
  $.each(textEach, function () {
    var textIpt = $(this).find("textarea");
    var textErr = $(this).find("i");
    txtLimit(textIpt, textErr, "50");
  });
  // 根据类名 nowDate  定位到想要的阶段
  var tagUl = $(".dateList");
  $.each(tagUl, function () {
    var widthLen = 0;
    var widthUl = 0;
    var getLi = $(this).find(".nowDate").index();
    var allLi = $(this).find("li");
    for (var i = 0; i < allLi.length; i++) {
      widthUl += $(allLi[i]).outerWidth(true);
    }
    $(this).css("width", widthUl);
    if (getLi > -1) {
      var liTag = $(this).find("li");
      for (var i = 0; i < getLi; i++) {
        widthLen += $(liTag[i]).outerWidth(true);
      }
      $(this).parents(".dateWrap").scrollLeft(widthLen);
    }
  });
  // 判断有几栏
  tabFuc();
  function tabFuc() {
    var len = $(".tabMatchList li").length;
    if (len > 1) {
      $(".mouMatchNav").show();
    }
  }
  // 时间线宽度获取
  timeWidthFuc();
  function timeWidthFuc() {
    var liEach = $(".dateList li");
    var ulWidth = 0;
    $.each(liEach, function () {
      ulWidth += $(this).outerWidth(true);
      $(".dateList").css("width", ulWidth);
    });
  }

	// 预测部分 加减
	$('.fgMult li').on('click', function (e) {
		$(this).addClass('on').siblings().removeClass('on')
	})
	function opacFuc(deft) {
		var numTag = $('.fgMult li:last-child p')
		deft = deft || 0
		numText = +numTag.text()
		if (deft) {
			numText += 1
		} else {
			numText <= 6 ? numText = 6 : numText -= 1
		}
		numTag.text(numText)
	}
	$('.fgMult li:last-child .add').on('click', function () {
		opacFuc(1)
	})
	$('.fgMult li:last-child .jian').on('click', function () {
		opacFuc()
	})

	// 拖动li  定位当前栏
	navLocate('.mouNav','on')
	function navLocate(tag_name,avtive_name){
		var active_name = active_name || 'on'
		var navBox = $('.mouNav')
		var navEach = navBox.find('li')
		var navWidth = navEach.width()
		var scrollNum = 0
		if(navEach.length>4){
			$.each(navEach,function(i){
				var _that = $(this)
				if(_that.hasClass(avtive_name)){
					scrollNum =  (navEach.length-(navEach.length-_that.index()+1))*navWidth
					navBox.find('ul').css('width',navEach.width()*navEach.length)
					navBox.scrollLeft(scrollNum)
				}
			})
		}
	}

	
  // swiper 所有内容
  function swpFucRes() {
    return {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: "auto",
      observer: true,
      observeParents: true,
    };
  }
	var swpMationLength = $('.swpMation').find('.swiper-slide').length
	var swpReviewLength = $('.swpReview').find('.swiper-slide').length
	var swpTeamsLength = $('.swpTeams').find('.swiper-slide').length
	var swpFcastLength = $('.swpFcast').find('.swiper-slide').length
	var swpBannerLength = $('.swpBanner').find('.swiper-slide').length
	
	if(swpMationLength>1){
		var swpMation = new Swiper(".swpMation",swpFucRes());
	}
	if(swpReviewLength>1){
		var swpReview = new Swiper(".swpReview",swpFucRes());
	}
	if(swpBannerLength>1){
		var swpBanner = new Swiper(".swpBanner",swpFucRes());
	}
	if(swpFcastLength>1){
		var swpFcast = new Swiper(".swpFcast",swpFucRes());
	}
	if(swpTeamsLength>1){
		var swpTeams = new Swiper(".swpTeams",swpFucRes());
	}
	
  // swiper高度自适应
  var swpEach = $(".swiper-container");
  $.each(swpEach, function () {
    var slideNum = $(this).find(".swiper-slide");
    if (slideNum.length > 1) {
      slideNum.addClass("swiper-height");
    }
  });

});
