const search_input = document.querySelector(".search_input");
const popular_search_container = document.querySelector(".search_Popular_container");
const mobile_header = document.querySelector(".mobile_header");
const mobile_header_menu_bar = document.querySelector(".mobile_header_menu_bar");
const mobile_menu_bar_window = document.querySelector(".mobile_menu_bar_window");
const mobile_header_container = document.querySelector(".mobile_header_container");
const menu_bar_close_btn = document.querySelector(".menu_bar_close_btn");
const mobile_header_search_image = document.querySelector(".mobile_header_search_image");
const mobile_header_popular_searches = document.querySelector(".mobile_header_popular_searches");
const mobile_popular_searches_close = document.querySelector(".mobile_popular_searches_close");
const menu_window_mobile_search_btn = document.querySelector(".menu_window_mobile_search_btn");
const header_tracker_log_in_pop_up_window = document.querySelectorAll('.header_tracker_log_in_pop_up_window');
const header_tracker = document.querySelector('.header_tracker');
const tracker_log_in_close_btn = document.querySelectorAll('.tracker_log_in_close_btn');
const siparish_takip_mobile_btn = document.querySelector('.siparish_takip_mobile_btn');
// opens popular search when search input clicked
search_input.addEventListener("click", ()=>{
    popular_search_container.style.display = "block";
})
// closes popular search container when clicked anywhere
window.addEventListener("click", (e)=>{
    if(e.target != search_input){
        popular_search_container.style.display = "none";
    }
})  
// adding shadow to mobile header when scrolling
window.addEventListener("scroll", (e)=>{
    if(document.documentElement.scrollTop > 0){
        mobile_header.classList.add("scrollShadow");
    }else{
        mobile_header.classList.remove("scrollShadow");
    }
})
// opening menu bar window
mobile_header_menu_bar.addEventListener('click', ()=>{
    mobile_menu_bar_window.style.display = "block";
    mobile_header_container.style.display = "none";
})
// closing menu bar window
menu_bar_close_btn.addEventListener('click', ()=>{
    mobile_menu_bar_window.style.display = "none";
    mobile_header_container.style.display = "flex";
})
// opening popular search in mobile_header
mobile_header_search_image.addEventListener("click", ()=>{
    mobile_header_popular_searches.style.display = "block";
})
menu_window_mobile_search_btn.addEventListener("click", ()=>{
    mobile_header_popular_searches.style.display = "block";
})
// closing popular search in mobile_header
mobile_popular_searches_close.addEventListener("click", ()=>{
    mobile_header_popular_searches.style.display = "none";
})
//  _______ opening tracker log in window _________
header_tracker.addEventListener('click', ()=>{
    header_tracker_log_in_pop_up_window[0].classList.add('tracker_log_in_pop_up_window_display'); 
})
siparish_takip_mobile_btn.addEventListener('click', ()=>{
    header_tracker_log_in_pop_up_window[1].classList.add('tracker_log_in_pop_up_window_display'); 
})
// __________ closing tracker log in window  ________
tracker_log_in_close_btn.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        header_tracker_log_in_pop_up_window.forEach((item1, index1)=>{
            item1.classList.remove('tracker_log_in_pop_up_window_display');
        })    
    })
})
// __________ closing tracker log_in window when clicking outside of box ________
window.addEventListener("click", (e)=>{
    header_tracker_log_in_pop_up_window.forEach((item, index)=>{
        if(e.target == item){
            item.classList.remove('tracker_log_in_pop_up_window_display');
        }
    })
})