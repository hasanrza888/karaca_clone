const contact_window_open = document.querySelectorAll('.contact_window_open');
const contact_map_window_container = document.querySelectorAll('.contact_map_window_container');
const contact_window_close = document.querySelectorAll('.contact_window_close');
// contact modal window opening
contact_window_open.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        contact_map_window_container[index].classList.add('contact_map_window_container_show');
    })
})
// contact modal window closing
contact_window_close.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        contact_map_window_container[index].classList.remove('contact_map_window_container_show');
    })
})
// closing contact window when clicking to outside of main window
contact_map_window_container.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        if(e.target == item){
            contact_map_window_container[index].classList.remove('contact_map_window_container_show');
        }
    })
})