const kampaniya_page_left_menu_container = document.querySelector('.kampaniya_page_left_menu_container');
const kampaniya_page_right_side_container = document.querySelector('.kampaniya_page_right_side_container');
const kampaniya_page_left_menu_item = document.querySelectorAll('.kampaniya_page_left_menu_item');
const kampaniya_page_right_side_campaign_category = document.querySelectorAll('.kampaniya_page_right_side_campaign_category');
const kampaniya_box_header_condition = document.querySelectorAll('.kampaniya_box_header_condition');
const kampaniya_page_right_side_condition_window = document.querySelectorAll('.kampaniya_page_right_side_condition_window');
const kampaniya_box_footer_condition_mobile = document.querySelectorAll('.kampaniya_box_footer_condition_mobile');
const condition_window_header_close = document.querySelectorAll('.condition_window_header_close');
const condition_window_footer_close_btn = document.querySelectorAll('.condition_window_footer_close_btn');
const condition_window_container = document.querySelectorAll('.condition_window_container');
const kampaniya_page_right_side_condition_window_class = document.querySelector('.kampaniya_page_right_side_condition_window');
const kampaniya_page_left_heading_name = document.querySelector('.kampaniya_page_left_heading_name');
const kampaniya_page_menu_open = document.querySelector('.kampaniya_page_menu_open');
const kampaniya_page_menu_close = document.querySelector('.kampaniya_page_menu_close');
// position fixed when scolling on compaign boex
window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop >= kampaniya_page_right_side_container.scrollTop){
        kampaniya_page_left_menu_container.classList.add('kampaniya_page_left_menu_container_fixed');
    }else{
        kampaniya_page_left_menu_container.classList.remove('kampaniya_page_left_menu_container_fixed');
    }
})
// adding active class to menu item
kampaniya_page_left_menu_item.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        kampaniya_page_left_menu_item.forEach(item2 =>{
            item2.classList.remove('left_menu_item_active');
        })
        kampaniya_page_right_side_campaign_category.forEach((item3, index3)=>{
            item3.classList.remove('right_side_campaign_category_show');
        })
        item.classList.add('left_menu_item_active');
        kampaniya_page_right_side_campaign_category[index].classList.add('right_side_campaign_category_show');
    })
})
// _____________ opening condition window in desktop _________________
kampaniya_box_header_condition.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        kampaniya_page_right_side_condition_window[index].classList.add('condition_display_flex');
    })
})
// _____________ opening condition window in mobile _________________
kampaniya_box_footer_condition_mobile.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        kampaniya_page_right_side_condition_window[index].classList.add('condition_display_flex');
    })
})
// ________________ closing condition window function _________________
function close(close_btn){
    close_btn.forEach((item, index)=>{
        item.addEventListener('click', (e)=>{    
            kampaniya_page_right_side_condition_window[index].classList.remove('condition_display_flex');
        })
    })
}
close(condition_window_header_close);
close(condition_window_footer_close_btn);
kampaniya_page_right_side_condition_window.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        if(e.target == kampaniya_page_right_side_condition_window[index]){
            kampaniya_page_right_side_condition_window[index].classList.remove('condition_display_flex');
        }
    })
})
// opening mobile menu
kampaniya_page_left_heading_name.addEventListener('click', ()=>{
    if(window.innerWidth <= 767){
        if(kampaniya_page_left_menu_container.classList.contains('kampaniya_page_left_menu_show')){
            kampaniya_page_left_menu_container.classList.remove('kampaniya_page_left_menu_show');
            kampaniya_page_menu_close.classList.remove('icons_display');
            kampaniya_page_menu_open.classList.add('icons_display');
        }else{
            kampaniya_page_left_menu_container.classList.add('kampaniya_page_left_menu_show');
            kampaniya_page_menu_close.classList.add('icons_display');
            kampaniya_page_menu_open.classList.remove('icons_display');
        }
    }
})