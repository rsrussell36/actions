(function ($) {
  "use strict";

  var nav_offset_top = $(".header_top").height();
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($("header").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $("header").addClass("navbar_fixed");
        } else {
          $("header").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  function navbarFixedTwo() {
    if ($(".header_absolute").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll) {
          $(".header_absolute").addClass("navbar_fixed");
        } else {
          $(".header_absolute").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixedTwo();

  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  $(".main_slider").on("init", function (e, slick) {
    var $firstAnimatingElements = $("div.item:first-child").find(
      "[data-animation]"
    );
    doAnimations($firstAnimatingElements);
  });
  $(".main_slider").on(
    "beforeChange",
    function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        'div.item[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    }
  );
  var slideCount = null;

  $(".main_slider").each(function () {
    $(this).on("init", function (event, slick) {
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });
  });

  $(".main_slider").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      setCurrentSlideNumber(nextSlide);
    }
  );

  function setSlideCount() {
    var $el = $(".slide-count-wrap").find(".total");
    if (slideCount < 10) {
      $el.text("0" + slideCount);
    } else {
      $el.text(slideCount);
    }
  }

  function setCurrentSlideNumber(currentSlide) {
    var $el = $(".slide-count-wrap").find(".current");
    $el.text(currentSlide + 1);
  }

  $(".main_slider").slick({});

  function doAnimations(elements) {
    var animationEndEvents =
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data("delay");
      var $animationType = "animated " + $this.data("animation");
      $this.css({
        "animation-delay": $animationDelay,
        "-webkit-animation-delay": $animationDelay,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }

  /*-------------------------------------------------------------------------------
	  progress bar js
	-------------------------------------------------------------------------------*/
  //   $(".progress-element").each(function () {
  //     $(this).waypoint(
  //         function () {
  //             var progressBar = $(".progress-bar");
  //             progressBar.each(function (indx) {
  //                 $(this).css("width", $(this).attr("aria-valuenow") + "%");
  //             });
  //         }, {
  //             triggerOnce: true,
  //             offset: "bottom-in-view",
  //         }
  //     );
  // });

  /*-------------------------------------------------------------------------------
	  Counter js
	-------------------------------------------------------------------------------*/
  // function counterUp() {
  //   if ($(".counter").length) {
  //     $(".counter").counterUp({
  //       delay: 1,
  //       time: 500,
  //     });
  //   }
  // }

  // counterUp();

  $("div.skillbar-bg").appear(function () {
    $("div.skillbar-bg").each(function () {
      $(this)
        .find(".custom-skillbar")
        .delay(200)
        .animate(
          {
            width: $(this).attr("data-percent"),
          },
          1500
        );
    });
  });

  //*============ background image js ==============*/
  $("[data-bg-img]").each(function () {
    var bg = $(this).data("bg-img");
    $(this).css({
      background: "no-repeat center 0/cover url(" + bg + ")",
    });
  });

  //*============ background color js ==============*/
  $("[data-bg-color]").each(function () {
    var bg_color = $(this).data("bg-color");
    $(this).css({
      "background-color": bg_color,
    });
  });

  function parallaxJs() {
    const parallax = $(".parallaxie");
    if (parallax.length) {
      parallax.parallaxie({
        speed: 0.5,
      });
    }
  }
  parallaxJs();

  //*============ BUTTON ANIMATION js ==============*/
  $(".btn_hover")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });

  //maasonry js
  $(".portfolio_grid_wrapper").each(function () {
    var portfolioGridWrapper = $(".portfolio_grid_wrapper");
    if (portfolioGridWrapper.length) {
      $(this).AddonsGridLayout();
    }
  });

  $(".search").on("click", function () {
    if ($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
    } else {
      $(this).parent().addClass("open");
    }
    return false;
  });

  function Menu_js() {
    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").click(function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }
  }
  Menu_js();

  function menu_dropdown() {
    if ($(window).width() < 992) {
      $(".menu > li .mobile_dropdown_icon").on("click", function (event) {
        event.preventDefault();
        $(this).parent().find(".dropdown-menu").first().slideToggle(700);
        $(this).parent().siblings().find(".dropdown-menu").slideUp(700);
      });
    }
  }
  menu_dropdown();

  if ($("header").has("header")) {
    var nav = $("header");
    // var injectSpace = $('<div />').insertAfter(nav);
    $(window).on("load resize", function () {
      var headerHeight = nav.outerHeight();
      nav.css("height", headerHeight).show();
    });
  }

  /*--------------- Start popup-js--------*/
  function popupGallery() {
    if ($(".popup-youtube").length) {
      $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
      });
    }
  }
  popupGallery();

  function bodyScroll() {
    var bodyAnimation = $("body").data("scroll-animation");
    if (bodyAnimation === true) {
      new WOW({}).init();
    }
  }
  bodyScroll();
})(jQuery);
