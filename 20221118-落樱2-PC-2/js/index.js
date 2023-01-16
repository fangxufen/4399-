$(function () {
  // 侧边栏
  $(".side-right").on("click", function () {
    $(".sidebar").css("right", '-1.47rem')
    $(this).hide()
    $(".side-left").show()
  })
  $(".side-left").on("click", function () {
    $(".sidebar").css("right", '0')
    $(this).hide()
    $(".side-right").show()
  })
  // 视频点击 1屏
  $(".section1 .video-play").on("click", function () {
    $(".screen-video").removeClass("screen-video-unshow")
  })
  $(".section7 .audio-play").on("click", function () {
    $(".screen-video").removeClass("screen-video-unshow")
  })
  // 弹框视频点击
  // $(".frame-4 .audio-play").on("click", function () {
  //   console.log(9999)
  //   $(".frame-4 .screen-video").removeClass("screen-video-unshow")
  // })

  // 视频关闭
  $(".video-mp4-close").on("click", function () {
    $(".screen-video").addClass("screen-video-unshow")
  })

  // 视频查看更多
  $(".section7 .seemore").on("click", function () {
    $('.screen7-frame4-box').show()
  })
  // 关闭更多视频
  $(".screen7-frame4-box .frame-close").on("click", function () {
    $('.screen7-frame4-box').hide()
  })

  // 播放暂停
  $(".mp3top").on("click", function () {
    console.log(333)
    $(this).css("display", "none")
    $(".mp3play").css("display", "block")
    $(".whole-show .mp3play").css("display", "none")
  })
  $(".mp3play").on("click", function () {
    $(this).css("display", "none")
    $(".mp3top").css("display", "block")
    $(".whole-show .mp3play").css("display", "none")
  })

  $(".swiper-game-link2 .swiper-slide").on("click", function () {
    var t = $(this).index()
    $(".screen3-content .screen3-con-whole").eq(t).removeClass("whole-show").siblings().addClass("whole-show")
    console.log(t)
    $(this).addClass("swiper-slide-x").siblings().removeClass("swiper-slide-x");
  })

  // 鼠标移入
  $(".screen7-frame4 .audio-content .audio-content-item").on("mouseover", function () {
    $(".screen7-frame4 .audio-content-item .audio-play").eq($(this).index()).show()
  })
  // 鼠标移出
  $(".screen7-frame4 .audio-content .audio-content-item").on("mouseout", function () {
    $(".screen7-frame4 .audio-content-item .audio-play").eq($(this).index()).hide()
  })

  // 更多视频鼠标移入
  $(".audio-content .audio-content-item").on("mouseover", function () {
    $(".audio-content-item .audio-play").eq($(this).index()).show()
  })
  // 更多视频鼠标移出
  $(".audio-content .audio-content-item").on("mouseout", function () {
    $(".audio-content-item .audio-play").eq($(this).index()).hide()
  })
  //
  $(".audio-title .title7").on("click", function () {
    $(this).addClass('title7-active').siblings().removeClass('title7-active')
    $('.audio-content-box .audio-content').eq($(this).index()).removeClass('audio-unshow').siblings().addClass("audio-unshow")
    console.log($(this).index())
  })


  $('.tips2 .tips-back').on("click", function () {
    window.parent.location.reload();
  })
  $('.tips1 .tips-back').on("click", function () {
    window.parent.location.reload();
  })

  scrollMode('.con-text', 22)

})

function scrollMode(argTag, n, direction = 'y') {	// id、滚动数值、方向
  var _n = 0
  $(argTag).on('mousewheel', function (e) {
    var _this = $(this);
    var eDelta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || e.originalEvent.delta && (e.originalEvent.delta > 0 ? -1 : 1)
    if (eDelta > 0) {
      _n -= n
      if (_n < 0) {
        _n = 0
      }
      if (direction == 'y') {
        _this.scrollTop(_n)
      } else {
        _this.scrollLeft(_n)
      }
    } else {
      _n += n;
      if (direction == 'y') {
        _this.scrollTop(_n);
        if (_n > _this.scrollTop()) {
          _n = _this.scrollTop()
        }
      } else {
        _this.scrollLeft(_n);
        if (_n > _this.scrollLeft()) {
          _n = _this.scrollLeft()
        }
      }
    }
    return false;
  })
}
