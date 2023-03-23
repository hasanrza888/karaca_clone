const information_btn = document.querySelectorAll('.information_btn');
const hidden_information = document.querySelector('.hidden_information');
const filter_list_item = document.querySelectorAll('.filter_list_item');
const filter_list_item_drop_down = document.querySelectorAll('.filter_list_item_drop_down');
const filter_list_arrow = document.querySelectorAll('.filter_list_arrow');
const subcategory_page_product_box = document.querySelectorAll('.subcategory_page_product_box');
const three_row_order = document.querySelector('.three_row_order');
const four_row_order = document.querySelector('.four_row_order');
const three_row_icon = document.querySelector('.three_row_icon');
const second_grid_first_icon = document.querySelector('.second_grid_first_icon');
const second_grid_second_icon = document.querySelector('.second_grid_second_icon');
const product_campaign_check = document.querySelectorAll('.product_campaign_check');
const product_box_free_delivery_close = document.querySelectorAll('.product_box_free_delivery_close');
const product_free_delivery_block = document.querySelectorAll('.product_free_delivery_block');
const product_add_to_cart_btn = document.querySelectorAll('.product_add_to_cart_btn');
const product_cart_img = document.querySelectorAll('.product_cart_img');
const add_to_cart_plus = document.querySelectorAll('.add_to_cart_plus');
const add_to_cart_plus_icon = document.querySelectorAll('.add_to_cart_plus_icon');
const adding_to_cart_window = document.querySelector('.adding_to_cart_window');
const adding_to_cart_window_close = document.querySelector('.adding_to_cart_window_close');
const mobile_two_row_order = document.querySelector('.mobile_two_row_order');
const mobile_one_row_order = document.querySelector('.mobile_one_row_order');
const mobile_two_row_order_cube = document.querySelectorAll('.mobile_two_row_order_cube');
const mobile_one_row_order_cube = document.querySelector('.mobile_one_row_order_cube');
const mobile_filter_open_btn = document.querySelector('.mobile_filter_open_btn');
const subcategory_page_all_filters = document.querySelector('.subcategory_page_all_filters');
const filter_window_close = document.querySelector('.filter_window_close');
const mobile_confirm_confirm = document.querySelector('.mobile_confirm_confirm');
// closing and opening list drop downs
filter_list_item.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
      if(window.innerWidth > 767){
        // desktop window
        if(!filter_list_item_drop_down[index].classList.contains('filter_list_item_drop_down_hide')){
          filter_list_item_drop_down[index].classList.add('filter_list_item_drop_down_hide');
          filter_list_arrow[index].classList.add('arrow_rotate');
        }else{
            filter_list_item_drop_down[index].classList.remove('filter_list_item_drop_down_hide');
            filter_list_arrow[index].classList.remove('arrow_rotate');
        } 
      }else{
        // tablet and mobile window
        filter_list_item_drop_down.forEach((item1, index1)=>{
          if(index1 != index){
            item1.classList.remove('filter_list_item_drop_down_hide');
            filter_list_arrow[index1].classList.remove('arrow_rotate');
          }
        })
        if(!filter_list_item_drop_down[index].classList.contains('filter_list_item_drop_down_hide')){
          filter_list_item_drop_down[index].classList.add('filter_list_item_drop_down_hide');
          filter_list_arrow[index].classList.add('arrow_rotate');
        }else{
          filter_list_item_drop_down[index].classList.remove('filter_list_item_drop_down_hide');
          filter_list_arrow[index].classList.remove('arrow_rotate');
        }
      }      
    })
})
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
//_________ product box image slider
$('.product_box_image_slider_container').slick({
  dots: true,
  infinite: false,
  autoplay: false,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
});
// autoplay and pause when hovering on slider
$('.product_box_image_slider_container').mouseover(function() {
  $(this).slick('slickSetOption', "autoplaySpeed", 500, true).slick('slickPlay');
});
$('.product_box_image_slider_container').mouseout(function() {
  $(this).slick('slickSetOption', "autoplaySpeed", 500, true).slick('slickPause');
});
// _________ changing grid system to three row___________
three_row_order.addEventListener('click', ()=>{
  // changing buttons colors
  three_row_order.classList.add('row_order_background');
  three_row_icon.classList.add('row_icon_color');
  four_row_order.classList.remove('row_order_background');
  second_grid_first_icon.classList.remove('row_icon_color');
  second_grid_second_icon.classList.remove('row_icon_color');
  // changing flex 
  subcategory_page_product_box.forEach((item, index)=>{
    if(! item.classList.contains('subcategory_page_product_box_third_row')){
      item.classList.add('subcategory_page_product_box_third_row');
    }
  })
  // refreshing slick slider
  $('.product_box_image_slider_container').slick('resize');
  $('.product_box_image_slider_container').slick('setPosition');
})
// _________ changing grid system to four row _________
four_row_order.addEventListener('click', ()=>{
  // changing buttons colors
  four_row_order.classList.add('row_order_background');
  three_row_order.classList.remove('row_order_background');
  second_grid_first_icon.classList.add('row_icon_color');
  second_grid_second_icon.classList.add('row_icon_color');
  three_row_icon.classList.remove('row_icon_color');
  // changing flex 
  subcategory_page_product_box.forEach((item, index)=>{
    if(item.classList.contains('subcategory_page_product_box_third_row')){
      item.classList.remove('subcategory_page_product_box_third_row');
    }
  })
  // refreshing slick slider
  $('.product_box_image_slider_container').slick('resize');
  $('.product_box_image_slider_container').slick('setPosition');
})
// ________ opening free delivery block ____________
product_campaign_check.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    item.style.display = 'none';
    product_box_free_delivery_close[index].style.display = "block";
    product_free_delivery_block[index].style.display = "block";
  })
})
// ________ closing free delivery block ____________
product_box_free_delivery_close.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    item.style.display = 'none';
    product_free_delivery_block[index].style.display = "none";
    product_campaign_check[index].style.display = "block";    
  })
})
// ___________ add to cart button ______________________________________
product_add_to_cart_btn.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    item.classList.add('active_cart_bg_color');
    // changing cart image color
    product_cart_img[index].classList.add('active_cart');
    // changing plus icon color and border color
    add_to_cart_plus[index].classList.add('active_cart_bg_color');
    add_to_cart_plus[index].classList.add('add_to_cart_plus_active');
    // opening cart information
    adding_to_cart_window.classList.add('adding_to_cart_window_flex');
  })
})
// ____________ closing add to cart information window __________________
adding_to_cart_window_close.addEventListener('click', ()=>{
  adding_to_cart_window.classList.remove('adding_to_cart_window_flex');
})
// _________________________ mobile grid changing __________________________
// _________________________________________________________________________
// _______________ changing grid to two row ________
mobile_two_row_order.addEventListener('click', ()=>{
  // button background change
  mobile_one_row_order.classList.remove('mobile_grid_box_active');
  mobile_two_row_order.classList.add('mobile_grid_box_active');
  // button cube background change
  mobile_two_row_order_cube.forEach((item, index)=>{
    item.classList.add('mobile_grid_cube_active');
  })
  mobile_one_row_order_cube.classList.remove('mobile_grid_cube_active');
  // changing flex 
  subcategory_page_product_box.forEach((item, index)=>{
    if(item.classList.contains('product_box_mobile_one_row')){
      item.classList.remove('product_box_mobile_one_row');
    }
  })
  // refreshing slick slider
  $('.product_box_image_slider_container').slick('resize');
  $('.product_box_image_slider_container').slick('setPosition');
})
// _______________ changing grid to one row ________
mobile_one_row_order.addEventListener('click', ()=>{
  // button background change
  mobile_two_row_order.classList.remove('mobile_grid_box_active');
  mobile_one_row_order.classList.add('mobile_grid_box_active');
  // button cube background change
  mobile_two_row_order_cube.forEach((item, index)=>{
    item.classList.remove('mobile_grid_cube_active');
  })
  mobile_one_row_order_cube.classList.add('mobile_grid_cube_active');
  // changing flex 
  subcategory_page_product_box.forEach((item, index)=>{
    if(! item.classList.contains('product_box_mobile_one_row')){
      item.classList.add('product_box_mobile_one_row');
    }
  })
  // refreshing slick slider
  $('.product_box_image_slider_container').slick('resize');
  $('.product_box_image_slider_container').slick('setPosition');
})
// ____________ opening mobile filter window ____________
mobile_filter_open_btn.addEventListener('click', ()=>{
  subcategory_page_all_filters.classList.add('subcategory_page_all_filters_display');
})
// ____________ closing mobile filter window ____________
filter_window_close.addEventListener('click', ()=>{
  subcategory_page_all_filters.classList.remove('subcategory_page_all_filters_display');
})
mobile_confirm_confirm.addEventListener('click', ()=>{
  subcategory_page_all_filters.classList.remove('subcategory_page_all_filters_display');
})