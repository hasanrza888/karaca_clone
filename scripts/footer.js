const hakkimizda = document.querySelector('.hakkimizda');
const hakkimizda_first_drop_down = document.querySelector('.hakkimizda_first_drop_down');
const haqqimizda = document.querySelector('.haqqimizda');
const haqqimizda_second_drop_down = document.querySelector('.haqqimizda_second_drop_down');
const footer_blog = document.querySelector('.footer_blog');
const blog_drop_down = document.querySelector('.blog_drop_down');
const up_btn = document.querySelector('.up_btn');
// opening and closing footer menus drop-down
const Arr = [hakkimizda, haqqimizda, footer_blog];
const drop_down = [hakkimizda_first_drop_down, haqqimizda_second_drop_down, blog_drop_down];
Arr.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        if(drop_down[index].classList.contains('display_block_for_footer_drop_down')){
            drop_down[index].classList.remove('display_block_for_footer_drop_down');
        }else{
            drop_down[index].classList.add('display_block_for_footer_drop_down');
        }         
    })
})
// showing up button when scrolling
window.addEventListener("scroll", (e)=>{
    if(document.documentElement.scrollTop > 0 && window.innerWidth >= 769){
        up_btn.style.display = "block";
    }else{
        up_btn.style.display = "none";
    }
})