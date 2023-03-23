const product_videos_first_row = document.querySelector('.product_videos_first_row');
const product_videos_drop_down = document.querySelector('.product_videos_drop_down');
const product_top_window_container = document.querySelector('.product_top_window_container');
const product_open_detail_window = document.querySelectorAll('.product_open_detail_window');
const product_detail_close = document.querySelectorAll('.product_detail_close');
const product_details_window_desktop = document.querySelectorAll('.product_details_window_desktop');
const mobile_details_list = document.querySelectorAll('.mobile_details_list');
const product_details_window_mobile = document.querySelectorAll('.product_details_window_mobile');
const product_detail_close_mobile = document.querySelectorAll('.product_detail_close_mobile');
const hidden_related_products_list_container = document.querySelector('.hidden_related_products_list_container');
const open_related_products_list = document.querySelector('.open_related_products_list');
// main product slider
$('.product_detail_page_main_product_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
//   arrows: false,
//   fade: true,
  asNavFor: '.product_images_navigation_for_slider',
  prevArrow: '<button class="slick_slider_btn_prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
  nextArrow: '<button class="slick_slider_btn_next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        dots: true,
        arrows: false,
      }
    }
  ]
});
// navigation for main slider
$('.product_images_navigation_for_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.product_detail_page_main_product_slider',
  dots: false,
  infinite: false,
  focusOnSelect: true,
  vertical: true,
});
// ____________ related products slider _________________
$('.product_detail_page_below_products_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  prevArrow: '<button class="related_product_slick_slider_btn_prev"><img src="/catalog/view/assets/images/icons/arrow-left-circle.svg" alt="Önceki"></button>',
  nextArrow: '<button class="related_product_slick_slider_btn_next"><img src="/catalog/view/assets/images/icons/arrow-right-circle.svg" alt="Sonraki"></button>',
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 766,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// opening and closing videos drop down
product_videos_first_row.addEventListener('click', ()=>{
  if(!product_videos_drop_down.classList.contains('product_videos_drop_down_show')){
    product_videos_drop_down.classList.add('product_videos_drop_down_show');
  }else{
    product_videos_drop_down.classList.remove('product_videos_drop_down_show');
  }
})
// product top window when scrolling
window.addEventListener('scroll', ()=>{
  if(document.documentElement.scrollTop >= 2440 && window.innerWidth >= 769){
    product_top_window_container.classList.add('product_top_window_container_flex');
  }else{
    product_top_window_container.classList.remove('product_top_window_container_flex');
  }
})
//  _______ opening product detail window for desktop  _________
product_open_detail_window.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    product_details_window_desktop[index].classList.add('product_details_window_display'); 
  })
})
// __________ closing product detail window for desktop  ________
product_detail_close.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    product_details_window_desktop[index].classList.remove('product_details_window_display');
  })
})
product_details_window_desktop.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    if(e.target == item){
      item.classList.remove('product_details_window_display');
    }
  })
})
//  _______ opening product detail window for desktop  _________
mobile_details_list.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    product_details_window_mobile[index].classList.add('product_details_window_display'); 
  })
})
// __________ closing product detail window for desktop  ________
product_detail_close_mobile.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    product_details_window_mobile[index].classList.remove('product_details_window_display');
  })
})
product_details_window_mobile.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    if(e.target == item){
      item.classList.remove('product_details_window_display');
    }
  })
})
// opening and closing hidden related products in add all to cart box
open_related_products_list.addEventListener('click', ()=>{
  if(!hidden_related_products_list_container.classList.contains('hidden_related_products_list_container_flex')){
    hidden_related_products_list_container.classList.add('hidden_related_products_list_container_flex');
  }else{
    hidden_related_products_list_container.classList.remove('hidden_related_products_list_container_flex');
  }
})