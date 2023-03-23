const geri_qaytarma_menu_item = document.querySelectorAll('.geri_qaytarma_menu_item');
const geri_qaytarma_menu_item_drop_down = document.querySelectorAll('.geri_qaytarma_menu_item_drop_down');
const geri_qaytarma_menu_item_arrow = document.querySelectorAll('.geri_qaytarma_menu_item_arrow');
// opening and closing drop down menu in geri qaytarma page
geri_qaytarma_menu_item.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        if(! geri_qaytarma_menu_item_arrow[index].classList.contains('geri_qaytarma_menu_item_rotate_arrow')){            
            geri_qaytarma_menu_item_arrow[index].classList.add("geri_qaytarma_menu_item_rotate_arrow");
            geri_qaytarma_menu_item_drop_down[index].style.display = "block";
        }else{
            geri_qaytarma_menu_item_arrow[index].classList.remove("geri_qaytarma_menu_item_rotate_arrow");
            geri_qaytarma_menu_item_drop_down[index].style.display = "none";
        }        
    })
})