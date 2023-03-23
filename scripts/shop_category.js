const information_btn = document.querySelectorAll('.information_btn');
const hidden_information = document.querySelector('.hidden_information');
// _________ product category slider ______________________________________
$('.shop_category_page_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: '<img class="slider_prev_btn" src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki">',
  nextArrow: '<img class="slider_next_btn" src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki">',
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// ____________ opening closing of page information text block _____________________
information_btn.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    // __________ opens hidden btn __________________
    information_btn.forEach((item1, index1)=>{
      if(item1.classList.contains('hide_btn_class')){
        item1.classList.remove('hide_btn_class');
      }
    });
    // __________ hides current btn ________
    item.classList.add('hide_btn_class');
    // __________ opens and closes information container ___________________
    if(hidden_information.classList.contains('category_information_close')){
      hidden_information.classList.remove('category_information_close');
    }else{
      hidden_information.classList.add('category_information_close');
    }
  })
})