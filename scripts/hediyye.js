const hediyye_page_hediyye_description_open_button = document.querySelector('.hediyye_page_hediyye_description_open_button');
const hediyye_page_hediyye_description_close_button = document.querySelector('.hediyye_page_hediyye_description_close_button');
const hediyye_page_hediyye_description_close = document.querySelector('.hediyye_page_hediyye_description_close');
// opening continues of description in hediyye page
hediyye_page_hediyye_description_open_button.addEventListener('click', ()=>{
    hediyye_page_hediyye_description_close.classList.add("hediyye_display_block");
    hediyye_page_hediyye_description_open_button.style.display = "none";
    hediyye_page_hediyye_description_close_button.style.display = "block";
})
// closing continues of description in hediyye page
hediyye_page_hediyye_description_close_button.addEventListener('click', ()=>{
    hediyye_page_hediyye_description_close.classList.remove("hediyye_display_block");
    hediyye_page_hediyye_description_open_button.style.display = "block";
    hediyye_page_hediyye_description_close_button.style.display = "none";
})