$(function () {
  $('#plans-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        }
      }
    ]
});



});

$(function () {
  // トップへ戻る
  const pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
   // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function () {
    // スムーススクロールの処理を書く
  });
});

$(function(){
  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function () {
    // 移動速度を指定（ミリ秒）
    let speed = 300;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate({
        scrollTop: position
      },
      speed
    );
    return false;
  });
});


$(function(){
  jQuery('#header-toggle').click(function(){
    jQuery(this).toggleClass('-active');
    jQuery('#header-nav-list').toggleClass('-active');
  })
});

$(function () {
  $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
  });
});

new WOW().init();