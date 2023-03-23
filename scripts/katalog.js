const open_catalogue_pdf = document.querySelector('.open_catalogue_pdf');
const catalogue_book_window = document.querySelector('.catalogue_book_window');
const catalogue_book_view_close_btn = document.querySelector('.catalogue_book_view_close_btn');
//  _______ opening uye ol window _________
open_catalogue_pdf.addEventListener('click', ()=>{
    catalogue_book_window.classList.add('catalogue_book_window_display'); 
})
// __________ closing uye ol window  ________
catalogue_book_view_close_btn.addEventListener('click', ()=>{
    catalogue_book_window.classList.remove('catalogue_book_window_display');
})
// __________ closing uye ol window when clicking outside of box ________
window.addEventListener("click", (e)=>{
    if(e.target == catalogue_book_window){
        catalogue_book_window.classList.remove('catalogue_book_window_display');
    }
})