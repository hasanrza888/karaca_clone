const istifade_rehberi_menu_item = document.querySelectorAll('.istifade_rehberi_menu_item');
const istifade_rehberi_menu_item_drop_down = document.querySelectorAll('.istifade_rehberi_menu_item_drop_down');
const istifade_rehberi_menu_item_arrow = document.querySelectorAll('.istifade_rehberi_menu_item_arrow');
// opening and closing drop down menu in geri qaytarma page
istifade_rehberi_menu_item.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        if(! istifade_rehberi_menu_item_arrow[index].classList.contains('istifade_rehberi_menu_item_rotate_arrow')){        
            istifade_rehberi_menu_item_arrow[index].classList.add("istifade_rehberi_menu_item_rotate_arrow");
            istifade_rehberi_menu_item_drop_down[index].style.display = "block";
        }else{
            istifade_rehberi_menu_item_arrow[index].classList.remove("istifade_rehberi_menu_item_rotate_arrow");
            istifade_rehberi_menu_item_drop_down[index].style.display = "none";
        }
    })
})