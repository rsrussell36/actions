(function ($) {
  "use strict";

  var init = function () {

    var $gallerySlider = $('.blog_gallary_slider'),
      go_top = $('.go-top'),
      $breadcrumb = $('.breadcrumb-inner'),
      $preloader1 = $('.preloader-style1'),
      $preloader2 = $('.preloader-style2');

    if ($gallerySlider.length > 0) {
      $($gallerySlider).slick({});
    }
    var $videoAudio = $('video, audio');
    if ($videoAudio.length > 0) {
      $($videoAudio).mediaelementplayer({});
    }

    $("[data-bg-color]").each(function () {
      var bg_color = $(this).data("bg-color");
      $(this).css({
        "background-color": bg_color,
      });
    });

    $("[data-bg-image]").each(function () {
      var bg_image = $(this).data("bg-image");
      $(this).css({
        background: "no-repeat scroll center 0/cover url(" + bg_image + ")",
      });
    });

    if ($breadcrumb.length > 0) {
      $($breadcrumb).each(function () {
        var _this = $(this),
          bg_image_url = _this.data('breadcrumb');
        _this.css({
          background: "no-repeat scroll center 0/cover url(" + bg_image_url + ")",
        });
      });
    }
    if (go_top.length > 0) {
      $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
      });
      $('.go-top').on('click', function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    }
    if ($preloader1.length > 0) {
      jQuery(window).on('load', function () {
        setTimeout(function () {
          $('.preloader-style1').fadeOut();
        }, 1000);

      });
    }
    if ($preloader2.length > 0) {
      jQuery(window).on('load', function () {
        setTimeout(function () {
          $('.preloader-style2').fadeOut()
        }, 1000);

      });
    }
  }
  init();

  //Recent Project
  var recentProject = function () {
    var $recenSlider = $('.recent-projects-slider');
    if ($recenSlider.length > 0) {
      $($recenSlider).slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  };
  recentProject();

  //Counterup
  var funFact = function () {
    var $counterup = $(".counter");
    if ($($counterup).length) {
      $($counterup).counterUp({
        delay: 10,
        time: 1000,
      });
    }
  };
  funFact();

  //Progress
  var progressBar = function () {
    var $progressSelector = $('.skillbar-bg');
    if ($progressSelector.length > 0) {
      $($progressSelector).appear(function () {
        $($progressSelector).each(function () {
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
    }
  }
  progressBar();

  //Team Slider
  var teamSlider = function () {
    var $slider = $('.team-slider');
    if ($slider.length > 0) {
      $($slider).slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  };
  teamSlider();

  //Testimonial Slider
  var testimonialSlider = function () {
    var $slider = $('.testimonial-slider');
    if ($slider.length > 0) {
      $($slider).slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [],
      });
    }
  };
  testimonialSlider();

  //Testimonial Client
  var testimonialClient = function () {
    var $clientSlider = $('.testimonial-client-slider');
    if ($clientSlider.length > 0) {
      $($clientSlider).slick({
        arrows: false,
        dots: false,
        infinite: true,
        loop: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    }
  };
  testimonialClient();

  //Portfolio
  var portfolioGrid = function () {
    var $portfoliogridinner = $('.portfoliogrid-inner');
    if ($portfoliogridinner.length > 0) {

      $($portfoliogridinner).imagesLoaded(function () {
        $($portfoliogridinner).isotope({
          itemSelector: ".portfolio",
          layoutMode: "masonry",
          percentPosition: true,
        });
      });
      // Add isotope click function
      $(".portfoliogrid-gallery-filter li").on("click", function () {
        $(".portfoliogrid-gallery-filter li").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $($portfoliogridinner).isotope({
          filter: selector,
          animationOptions: {
            duration: 450,
            easing: "linear",
            queue: false,
          },
        });
        return false;
      });
    }
  };
  portfolioGrid();

  //Feature
  var featureInner = function () {
    var $feature = $('.features_inner');
    if ($feature.length > 0) {
      $($feature).imagesLoaded(function () {
        $($feature).isotope({
          itemSelector: ".features_col",
          layoutMode: "masonry",
          percentPosition: true,
        });
      });
    }
  };
  featureInner();

  //Popup
  var popupGallery = function () {
    var $img_popup = $('.img_popup');
    var $popup_youtube = $('.popup-youtube');
    if ($img_popup.length) {
      $($img_popup).each(function () {
        $($img_popup).magnificPopup({
          type: "image",
          tLoading: "Loading image #%curr%...",
          removalDelay: 300,
          mainClass: "mfp-with-zoom mfp-img-mobile",
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image,
          },
        });
      });
    }
    if ($($popup_youtube).length) {
      $($popup_youtube).magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
      });
    }
  };
  popupGallery();

  //Navbar Fixed
  var navbarFixed = function () {
    var scrollTopValue = 0;
    $(window).scroll(function () {
      var scrollTopVal = $(this).scrollTop();
      var $headerScrollUp = $('.set-sticky');
      if ($headerScrollUp.length > 0) {
        if (scrollTopVal > 200) {
          $($headerScrollUp).addClass("sticky");
          if (scrollTopVal > scrollTopValue) {
            $headerScrollUp.addClass('hide-sticky-header');
          } else {
            $headerScrollUp.removeClass('hide-sticky-header');
          }
          scrollTopValue = scrollTopVal;
        } else {
          $($headerScrollUp).removeClass("sticky");
        }
      }
    });
  };
  navbarFixed();

  //Search Form
  var searchOpen = function () {
    var $search = $('.search a');
    if ($search.length > 0) {
      $($search).on("click", function () {
        if ($(this).parent().hasClass("open")) {
          $(this).parent().removeClass("open");
        } else {
          $(this).parent().addClass("open");
        }
        return false;
      });
    }
  };
  searchOpen();

  // Submenu
  var menu_js = function () {
    var $submenu = $('.submenu');
    if ($submenu.length > 0) {
      $(".submenu > .dropdown-toggle").click(function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }
  };
  menu_js();

  //Dropdown Menu
  var menu_dropdown = function () {
    if ($(window).width() < 992) {
      $(".menu > li .mobile_dropdown_icon").on("click", function (event) {
        event.preventDefault();
        $(this).parent().find(".dropdown-menu").first().slideToggle(700);
        $(this).parent().siblings().find(".dropdown-menu").slideUp(700);
      });
    }
  };
  menu_dropdown();

  //Parallax
  var parallasInit = function () {
    var $parallaxSelector = $('.banner_img,.service_img,.s_parallax');
    if ($parallaxSelector.length > 0) {
      $($parallaxSelector).parallax({
        scalarX: 10.0,
        scalarY: 10.0,
      });
    }
  };
  parallasInit();

  //Wow
  var bodyScrollAnimation = function () {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate === true) {
      new WOW({}).init();
    }
  }
  bodyScrollAnimation();

  //Accordion
  var faqAccordion = function () {
    var topic = $('.topic .open')
    $(topic).on('click', function () {
      var container = $(this).parents(".topic");
      var answer = container.find(".answer");

      answer.slideToggle(200);

      if (container.hasClass("expanded")) {
        container.removeClass("expanded");
      } else {
        container.addClass("expanded");
      }
    });
  };
  faqAccordion();
  var avoneeFaq = function () {
    $(function () {
      $('.accordion').find('.accordion-title').on('click', function () {
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
      });
    });
  }
  avoneeFaq();
  var accordionSearch = function () {
    var timeout;
    $(".live-search-box").on('keyup', function (event) {
      var searchText = $(".live-search-box").val().toLowerCase().replace(/ +(?= )/g, '');
      window.clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        if ($.trim(searchText)) {
          accordionSearchResult(searchText);
        } else {
          $(".topic").show();
          $('#no-result').fadeOut(0);
        }
      }, 500);

    });
  };
  accordionSearch();

  var accordionSearchResult = function (searchText) {
    Array.prototype.hasSubStringOf = function (text) {
      for (var i in this) {
        if (text.toString().indexOf(this[i].toString()) != -1)
          return i;
      }
      return -1;
    };

    $('#no-result').fadeOut(0);
    var section = $(".topic"),
      resultFound = 0;
    section.hide();
    section.each(function (index) {
      var titleText = '',
        $heading = $(this).find('.question').attr('data-search-term');
      if ($heading.length > 0) {
        titleText = $heading.toLowerCase().split(" ");
        if (titleText && titleText.hasSubStringOf(searchText) !== -1) {
          $(this).fadeIn();
          resultFound = 1;
        } else {
          $(this).fadeOut();
        }
      }
    });
    if (resultFound == 0) {
      $('#no-result').fadeIn(400);
    }
    resultFound = 0;
  };

  // Switcher
  var switchTab = function () {
    var $target = $('.switcher'),
      $controlInstance = $target.find('.switcher-button');
    $controlInstance.on('click', function (e) {
      e.preventDefault();
      var _this = $(this),
        parentSwitcher = _this.parent().closest('.switcher'),
        $contentWrapper = parentSwitcher.find('.switcher-content-wrapper'),

        $controlList = _this.find(' .switcher-control'),
        $contentList = parentSwitcher.find('.switcher-content'),
        state = parentSwitcher.hasClass('switcher-disable'),
        $activeControl, $activeContent, activeContentHeight = 'auto';

      $contentWrapper.css({ 'height': $contentWrapper.outerHeight(true) });
      parentSwitcher.toggleClass('switcher-disable switcher-enable');
      if (parentSwitcher.hasClass('switcher-disable')) {
        state = false;
      } else {
        state = true;
      }

      $activeControl = !state ? $controlList.eq(0) : $controlList.eq(1);
      $activeContent = !state ? $contentList.eq(0) : $contentList.eq(1);

      $contentList.removeClass('active-content');
      activeContentHeight = $activeContent.outerHeight(true);
      activeContentHeight += parseInt($contentWrapper.css('border-top-width')) + parseInt($contentWrapper.css('border-bottom-width'));
      $activeContent.addClass('active-content');

      $controlList.attr('aria-expanded', 'false');
      $activeControl.attr('aria-expanded', 'true');

      $contentList.attr('aria-hidden', 'true');
      $activeContent.attr('aria-hidden', 'false');
      $contentWrapper.css({ 'height': activeContentHeight });
    });
  }
  switchTab();

  //Turn off right click
  var turn_off_right_click = function () {
    $(document).on("keydown", function (e) {
      if (e.ctrlKey && e.keyCode == 85 || e.ctrlKey && e.shiftKey && e.keyCode == 73 || e.ctrlKey && e.shiftKey && e.keyCode == 75 || e.metaKey && e.shiftKey && e.keyCode == 91) {
        return false;
      } else {
        return true;
      }
    });
    $("body").on("contextmenu", function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }
  //turn_off_right_click();

  //Subscriber
  var subscriber_form = function (FormId) {
    var subscriberform = $(FormId);
    if (subscriberform.length > 0) {
      $(subscriberform).on('submit', function (e) {
        e.preventDefault();
        var _this = $(this),
          error = false,
          subscriber_email = _this.find('#form-email').val(),
          subscriber_api = _this.data('api'),
          subscriber_style = _this.data('style'),
          show_validation_message = _this.closest('.subscriber-wrap').find('#validator-subscriber'),
          e_patt = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (subscriber_style == 'style1') {
          var subscriber_name = _this.find('#form-name').val();
          if (subscriber_name.length == 0 || subscriber_name == "" || subscriber_name == " ") {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter name.");
          } else if (subscriber_email.length == 0 || subscriber_email == "" || subscriber_email == " ") {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter your email correctly.");
          } else if (!e_patt.test(String(subscriber_email).toLowerCase())) {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter a valid Email address.");
          } else {
            var error = false;
          }

          if (error == false) {
            mailchimpSubscriberSubmit(subscriberform, subscriber_api);
          }
        } else if (subscriber_style == 'style2') {
          if (subscriber_email.length == 0 || subscriber_email == "" || subscriber_email == " ") {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter your email correctly.");
          } else if (!e_patt.test(String(subscriber_email).toLowerCase())) {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter a valid Email address.");
          } else {
            var error = false;
          }
          if (error == false) {
            mailchimpSubscriberSubmitTwo(subscriberform, subscriber_api);
          }
        } else if (subscriber_style == 'style3') {
          if (subscriber_email.length == 0 || subscriber_email == "" || subscriber_email == " ") {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter your email correctly.");
          } else if (!e_patt.test(String(subscriber_email).toLowerCase())) {
            var error = true;
            submitMsgSubscriber(false, show_validation_message, "Please enter a valid Email address.");
          } else {
            var error = false;
          }
          if (error == false) {
            mailchimpSubscriberSubmitThree(subscriberform, subscriber_api);
          }
        }

      });
    }
  }
  subscriber_form('#subscriber-form');
  subscriber_form('#subscriber-form2');
  subscriber_form('#subscriber-form3');

  var callbackSubscriberFunction = function (resp) {
    if (resp.result === "success") {
      formSubscriberSuccess('.subscriber-result-1');
    }
    else {
      submitMsgSubscriber(false, '.subscriber-result-1', "Oops! Something wrong, try again!");
    }
  }

  var callbackSubscriberFunctionTwo = function (resp) {
    if (resp.result === "success") {
      formSubscriberSuccess('.subscriber-result-2');
    }
    else {
      submitMsgSubscriber(false, '.subscriber-result-2', "Oops! Something wrong, try again!");
    }
  }
  var callbackSubscriberFunctionThree = function (resp) {
    if (resp.result === "success") {
      formSubscriberSuccess('.subscriber-result-3');
    }
    else {
      submitMsgSubscriber(false, '.subscriber-result-3', "Oops! Something wrong, try again!");
    }
  }
  var formSubscriberSuccess = function (show_success_message) {
    $(".subscriber-form").trigger("reset");
    submitMsgSubscriber(true, show_success_message, "Thank you for subscribing!");
    setTimeout(function () {
      $(show_success_message).addClass('hide');
    }, 4000)
  }
  var submitMsgSubscriber = function (valid, show_message, msg) {
    if (valid) {
      $(show_message).removeClass('validation-danger').addClass('validation-success').text(msg);
    } else {
      $(show_message).removeClass('validation-success').addClass('validation-danger').text(msg);
    }

  }
  // AJAX MailChimp
  var mailchimpSubscriberSubmit = function (submitClass, mailchimpApi) {
    $(submitClass).ajaxChimp({
      url: mailchimpApi, // Your url MailChimp
      callback: callbackSubscriberFunction
    });
  }
  var mailchimpSubscriberSubmitTwo = function (submitClass, mailchimpApi) {
    $(submitClass).ajaxChimp({
      url: mailchimpApi, // Your url MailChimp
      callback: callbackSubscriberFunctionTwo
    });
  }
  var mailchimpSubscriberSubmitThree = function (submitClass, mailchimpApi) {
    $(submitClass).ajaxChimp({
      url: mailchimpApi, // Your url MailChimp
      callback: callbackSubscriberFunctionThree
    });
  }
  //typer
  var dataTyper = function () {
    $('[data-typer-targets]').typer({
      highlightSpeed: 200,
      typeSpeed: 100,
      clearDelay: 500,
      typeDelay: 200,
      clearOnHighlight: true,
      typerDataAttr: 'data-typer-targets',
      typerInterval: 2000,
    });
  }
  dataTyper();

  var sidebar_overlay = function () {
    var sb_overlay = $(".av-ab-overlay "),
      sidebar_wrap = $(".hide-sidebar-wrap"),
      sidebar_wrap_button = $(".sidebar-button-wrap");

    function show_sidebar() {
      sb_overlay.fadeIn(300);
      sidebar_wrap.animate({
        right: 0
      });
      sidebar_wrap_button.removeClass("sidebar-visibile");
      $("html, body").addClass("hidhtml")
    }
    function hide_sidebar() {
      sidebar_wrap.animate({
        right: "-470px"
      });
      sb_overlay.fadeOut(300);
      sidebar_wrap_button.addClass("sidebar-visibile");
      $("html, body").removeClass("hidhtml")
    }
    sb_overlay.on("click", function () {
      hide_sidebar();
    });
    sidebar_wrap_button.on("click", function () {
      if ($(this).hasClass("sidebar-visibile")) show_sidebar();
      else hide_sidebar();
    });
  }
  sidebar_overlay();
})(jQuery);
