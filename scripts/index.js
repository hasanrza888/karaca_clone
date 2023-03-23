const index_page_information_open_button = document.querySelector('.index_page_information_open_button');
const index_page_information_close_button = document.querySelector('.index_page_information_close_button');
const index_page_information_close = document.querySelector('.index_page_information_close');
// opening continues of description in index page
index_page_information_open_button.addEventListener('click', ()=>{
    index_page_information_close.classList.add("hediyye_display_block");
    index_page_information_open_button.style.display = "none";
    index_page_information_close_button.style.display = "block";
})
// closing continues of description in index page
index_page_information_close_button.addEventListener('click', ()=>{
    index_page_information_close.classList.remove("hediyye_display_block");
    index_page_information_open_button.style.display = "block";
    index_page_information_close_button.style.display = "none";
})