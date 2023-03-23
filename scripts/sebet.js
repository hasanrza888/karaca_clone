const sebet_page_payment_mobile_coupon_open = document.querySelector('.sebet_page_payment_mobile_coupon_open');
const sebet_page_payment_coupon_container = document.querySelector('.sebet_page_payment_coupon_container');
const sebet_page_payment_prices_show = document.querySelector('.sebet_page_payment_prices_show');
const sebet_page_payment_info = document.querySelector('.sebet_page_payment_info');
const sebet_page_payment_prices_total = document.querySelector('.sebet_page_payment_prices_total');
const sebet_page_product_number_decrease = document.querySelectorAll('.sebet_page_product_number_decrease');
const sebet_page_product_number_increase = document.querySelectorAll('.sebet_page_product_number_increase');
const sebet_page_product_number_show = document.querySelectorAll('.sebet_page_product_number_show');
const sebet_page_products_header_remove_All_cart = document.querySelector('.sebet_page_products_header_remove_All_cart');
const sebet_page_confirm_removing_All_cart_window = document.querySelectorAll('.sebet_page_confirm_removing_All_cart_window');
const confirm_removing_All_cart_header_close_btn = document.querySelectorAll('.confirm_removing_All_cart_header_close_btn');
const sebet_page_removing_All_cart_cancel_btn = document.querySelectorAll('.sebet_page_removing_All_cart_cancel_btn');
const sebet_page_removing_All_cart_confirm_btn = document.querySelectorAll('.sebet_page_removing_All_cart_confirm_btn');
const sebet_page_payment_coupon_btn = document.querySelector(".sebet_page_payment_coupon_btn");
// _________ bank cards slider control using slick slider ___________________
$('.sebet_page_product_payment_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
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
// opening coupon adding form in mobile
sebet_page_payment_mobile_coupon_open.addEventListener('click', ()=>{
  sebet_page_payment_coupon_container.style.display = "flex";
  sebet_page_payment_mobile_coupon_open.style.display = 'none';
})
// opening prices in mobile
sebet_page_payment_prices_show.addEventListener('click', ()=>{
  if(sebet_page_payment_info.classList.contains('sebet_page_payment_display_flex')){
    sebet_page_payment_info.classList.remove('sebet_page_payment_display_flex');
  }else{
    sebet_page_payment_info.classList.add('sebet_page_payment_display_flex');
    sebet_page_payment_prices_total.style.display = 'none';
  }
})
// increase and decrease amount of product with minus and plus buttons
// decrease
sebet_page_product_number_decrease.forEach((item, index) =>{
  item.addEventListener('click', ()=>{
    if(Number(sebet_page_product_number_show[index].innerText) > 1){
      sebet_page_product_number_show[index].innerText = Number(sebet_page_product_number_show[index].innerText) - 1;
    }
  })
})
// increase
sebet_page_product_number_increase.forEach((item, index) =>{
  item.addEventListener('click', ()=>{
    sebet_page_product_number_show[index].innerText = Number(sebet_page_product_number_show[index].innerText) + 1;
  })
})
//  _______ opening delete All cart window _________
sebet_page_products_header_remove_All_cart.addEventListener('click', ()=>{
  sebet_page_confirm_removing_All_cart_window[0].classList.add('confirm_removing_All_cart_window_display'); 
})
// opening coupon add confirm window
sebet_page_payment_coupon_btn.addEventListener('click', ()=>{
  sebet_page_confirm_removing_All_cart_window[1].classList.add('confirm_removing_All_cart_window_display'); 
})
// __________ closing delete All cart window  ________
function close_window(btn){
  btn.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
      sebet_page_confirm_removing_All_cart_window[index].classList.remove('confirm_removing_All_cart_window_display');
    })
  })
}
close_window(confirm_removing_All_cart_header_close_btn);
close_window(sebet_page_removing_All_cart_cancel_btn);
close_window(sebet_page_removing_All_cart_confirm_btn);
// __________ closing delete All cart window when clicking outside of box ________
sebet_page_confirm_removing_All_cart_window.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    if(e.target == sebet_page_confirm_removing_All_cart_window[index]){
      sebet_page_confirm_removing_All_cart_window[index].classList.remove('confirm_removing_All_cart_window_display');
    }
  })
})
// _____________ coupon add form ________________________________
sebet_page_payment_coupon_container.addEventListener('submit', (e)=>{
  e.preventDefault()
})