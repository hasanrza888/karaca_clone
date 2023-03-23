const blog_page_header_search = document.querySelectorAll('.blog_page_header_search');
const blog_page_header_search_window = document.querySelector('.blog_page_header_search_window');
const close_search_window = document.querySelector('.close_search_window');
const menu_drop_down_btn = document.querySelector('.menu_drop_down_btn');
const menu_list_drop = document.querySelector('.menu_list_drop');
const blog_page_mobile_header_menu_container = document.querySelector('.blog_page_mobile_header_menu_container');
const mobile_footer_menu_bar = document.querySelector('.mobile_footer_menu_bar');
const mobile_header_menu_close = document.querySelector('.mobile_header_menu_close');
const menu_drop_down_btn_icon = document.querySelector('.menu_drop_down_btn_icon');
// opening search window
blog_page_header_search.forEach((item ,index)=>{
    item.addEventListener('click', ()=>{
        blog_page_header_search_window.classList.add('blog_page_header_search_window_show');
    })
})
// closing search window
close_search_window.addEventListener('click', ()=>{
    blog_page_header_search_window.classList.remove('blog_page_header_search_window_show');
})
blog_page_header_search_window.addEventListener('click', (e)=>{
    if(e.target == blog_page_header_search_window){
        blog_page_header_search_window.classList.remove('blog_page_header_search_window_show');
    }
})
// moile menu list drop open and close
menu_drop_down_btn.addEventListener('click', ()=>{
    // open drop menu
    if(! menu_list_drop.classList.contains('menu_list_drop_flex')){
        menu_list_drop.classList.add('menu_list_drop_flex');
        menu_drop_down_btn_icon.classList.add('menu_drop_down_btn_icon_transform');
    }else{
        // close drop menu
        menu_list_drop.classList.remove('menu_list_drop_flex');
        menu_drop_down_btn_icon.classList.remove('menu_drop_down_btn_icon_transform');  
    }
})
// mobile header menu open
mobile_footer_menu_bar.addEventListener('click', ()=>{
    blog_page_mobile_header_menu_container.classList.add('mobile_header_menu_show');
})
// mobile header menu close
mobile_header_menu_close.addEventListener('click', ()=>{
    blog_page_mobile_header_menu_container.classList.remove('mobile_header_menu_show');
})