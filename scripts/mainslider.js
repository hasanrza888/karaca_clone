$(document).ready(function () {
    $(".under-head-class").slick({
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button class="slide-arrow slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left.svg" alt="Önceki"></button>',
      nextArrow: '<button class="slide-arrow slick-next"><img src="/catalog/view/assets/images/icons/arrow-right.svg" alt="Sonraki"></button>',
      responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 2,
              
            },
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },        
      ],
    });  
    $(".one-time").slick({
      // dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button class="slide-arrow  one-slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left.svg" alt="Önceki"></button>',
      nextArrow: '<button class="slide-arrow  one-slick-next"><img src="/catalog/view/assets/images/icons/arrow-right.svg" alt="Sonraki"></button>',
    });
    $(".under-big").slick({
      // dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button class="slide-arrow  under-big-slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
      nextArrow: '<button class="slide-arrow  under-big-slick-next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },       
      ],
    });  
    $(".under-big-two-autoplay").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },       
      ],
    });
    $(".best-seller-area").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        '<button class="slide-arrow  under-big-two-slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
      nextArrow:
        '<button class="slide-arrow  under-big-two-slick-next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },      
      ],
    });
    $(".star-area").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        '<button class="slide-arrow  under-big-two-slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
      nextArrow:
        '<button class="slide-arrow  under-big-two-slick-next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },       
      ],
    });
    $(".gift-autoplay").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        '<button class="slide-arrow  under-big-two-slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
      nextArrow:
        '<button class="slide-arrow  under-big-two-slick-next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },       
      ],
    });  
    $(".popular-autoplay").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        '<button class="slide-arrow  under-big-two-slick-prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
      nextArrow:
        '<button class="slide-arrow  under-big-two-slick-next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },      
      ],
    });  
    // marka autoplay  
     $(".marka-autoplay").slick({
       slidesToShow: 10,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 2000,
       prevArrow: false,
       nextArrow: false,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 2,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
           },
         },        
       ],
     });  
  });