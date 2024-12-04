
AOS.init({ once: true });

// custom-header-dropdown
$(document).on('click', '.nav-link', function (e) {
  console.log('here');
  if (window.matchMedia("(max-width: 991px)").matches) {
    if ($(this).closest('.nav-item').find('.dropdown').css('display') == 'none') {
      $('.dropdown').css("display", "none");
      $(this).closest('.nav-item').find('.dropdown').css("display", "block");
    } else {
      $('.dropdown').css("display", "none");
    }
  }
});
// custom-header-dropdown

// toggle password
$(".toggle-password").click(function () {
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// toggle password

// slider
$('#home-slider').owlCarousel({
  loop: true,
  margin: 10,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  mouseDrag: false,
  smartSpeed: 250,
  margin: 0,
  navText: [
    '<i class="far fa-chevron-left" aria-hidden="true"></i>',
    '<i class="far fa-chevron-right" aria-hidden="true"></i>'
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    575: {
      items: 1
    },
    767: {
      items: 1
    },
    991: {
      items: 1
    },
    1199: {
      items: 1
    },
    1399: {
      items: 1
    }
  }
});
// slider

//Scroll event
$(window).scroll(function () {
  var scrolled = $(window).scrollTop();
  if (scrolled > 200) $('.go-top').fadeIn('slow');
  if (scrolled < 200) $('.go-top').fadeOut('slow');
});
//Scroll event

//Click event
$('.go-top').click(function () {
  $("html, body").animate({ scrollTop: "0" }, 500);
});
//Click event

// sticky-header
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// sticky-header

// counter js start
$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

$('#number1').jQuerySimpleCounter({ end: parseInt($('#number1').text()), duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: parseInt($('#number2').text()), duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: parseInt($('#number3').text()), duration: 2000 });
$('#number4').jQuerySimpleCounter({ end: parseInt($('#number4').text()), duration: 2000 });
// counter js end

// quantity js start
$(document).on('click', '.quantity-left-minus', function () {
  var sub_qty = parseInt($(this).closest('.numberone').find('input').val());
  if (sub_qty > 1) {
    $(this).closest('.numberone').find('input').val(sub_qty - 1);
    $(this).closest('.numberone').find('input').trigger('change');
  }
});

$(document).on('click', '.quantity-right-plus', function () {
  var add_qty = parseInt($(this).closest('.numberone').find('input').val());
  var max_qty = $(this).closest('.numberone').find('input').attr("max");
  if (add_qty < max_qty) {
    $(this).closest('.numberone').find('input').val(add_qty + 1);
    $(this).closest('.numberone').find('input').trigger('change');
  }
});
// quantity js start

// product-detail multi img slider
$(document).ready(function () {
  var slider = $("#slider");
  var thumb = $("#thumb");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;
  slider.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200
  }).on('changed.owl.carousel', syncPosition);
  thumb
    .on('initialized.owl.carousel', function () {
      thumb.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      margin: 10,
      dots: false,
      nav: true,
      item: 4,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage,
      navText:
        ['<i class="far fa-chevron-left" aria-hidden="true"></i>',
          '<i class="far fa-chevron-right" aria-hidden="true"></i>'],
      responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);
  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);
    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    thumb
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumb.find('.owl-item.active').length - 1;
    var start = thumb.find('.owl-item.active').first().index();
    var end = thumb.find('.owl-item.active').last().index();
    if (current > end) {
      thumb.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      thumb.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      slider.data('owl.carousel').to(number, 100, true);
    }
  }
  thumb.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    slider.data('owl.carousel').to(number, 300, true);
  });

});
// product-detail multi img slider

// img-zoom js strat
$(".img_producto_container")
  // tile mouse actions
  .on("mouseover", function () {
    $(this)
      .children(".img_producto")
      .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
  })
  .on("mouseout", function () {
    $(this)
      .children(".img_producto")
      .css({ transform: "scale(1)" });
  })
  .on("mousemove", function (e) {
    $(this)
      .children(".img_producto")
      .css({
        "transform-origin":
          ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
          "% " +
          ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
          "%"
      });
  });

// img-zoom js end


$('.logo-slider').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  mouseDrag: true,
  smartSpeed: 250,
  responsive: {
    0: {
      items: 1
    },
    575: {
      items: 2
    },
    767: {
      items: 3
    },
    991: {
      items: 4
    },
    1199: {
      items: 4
    },
    1399: {
      items: 4
    }
  }
});



$('.main-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 5000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  mouseDrag: true,
  smartSpeed: 250,
  responsive: {
    0: {
      items: 1
    },
    575: {
      items: 1
    },
    767: {
      items: 1
    },
    991: {
      items: 1
    },
    1199: {
      items: 1
    },
    1399: {
      items: 1
    }
  }
})


$('.featured-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 5000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  mouseDrag: true,
  smartSpeed: 250,
  responsive: {
    0: {
      items: 1
    },
    575: {
      items: 2
    },
    767: {
      items: 3
    },
    991: {
      items: 4
    },
    1199: {
      items: 4
    },
    1399: {
      items: 4
    }
  }
})

$('.cart-product-sec .slider-forone').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav1'
});
$('.cart-product-sec .slider-nav1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-forone',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});



$('.product-img--main')
  // tile mouse actions
  .on('mouseover', function () {
    $(this).children('.product-img--main__image').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
  })
  .on('mouseout', function () {
    $(this).children('.product-img--main__image').css({ 'transform': 'scale(1)' });
  })
  .on('mousemove', function (e) {
    $(this).children('.product-img--main__image').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
  })
  // tiles set up
  .each(function () {
    $(this)
      // add a image container
      .append('<div class="product-img--main__image"></div>')
      // set up a background image for each tile based on data-image attribute
      .children('.product-img--main__image').css({ 'background-image': 'url(' + $(this).attr('data-image') + ')' });
  });


  // plus-minus js

  (function () {
    const quantityContainer = document.querySelector(".quantity");
    const minusBtn = quantityContainer.querySelector(".minus");
    const plusBtn = quantityContainer.querySelector(".plus");
    const inputBox = quantityContainer.querySelector(".input-box");
  
    updateButtonStates();
  
    quantityContainer.addEventListener("click", handleButtonClick);
    inputBox.addEventListener("input", handleQuantityChange);
  
    function updateButtonStates() {
      const value = parseInt(inputBox.value);
      minusBtn.disabled = value <= 1;
      plusBtn.disabled = value >= parseInt(inputBox.max);
    }
  
    function handleButtonClick(event) {
      if (event.target.classList.contains("minus")) {
        decreaseValue();
      } else if (event.target.classList.contains("plus")) {
        increaseValue();
      }
    }
  
    function decreaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.max(value - 1, 1);
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function increaseValue() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
      inputBox.value = value;
      updateButtonStates();
      handleQuantityChange();
    }
  
    function handleQuantityChange() {
      let value = parseInt(inputBox.value);
      value = isNaN(value) ? 1 : value;
  
      // Execute your code here based on the updated quantity value
      console.log("Quantity changed:", value);
    }
  })();

  // plus-minus js end

const browseItems = document.querySelector(".browse-items").querySelectorAll("li");
browseItems.forEach(element => {
  element.addEventListener("click", function () {
    browseItems.forEach(nav => nav.classList.remove("active"))

    this.classList.add("active")
  })
})


