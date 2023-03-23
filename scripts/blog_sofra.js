const blog_pagination_btn_number = document.querySelectorAll('.blog_pagination_btn_number');
const blog_pagination_btn_prev = document.querySelector('.blog_pagination_btn_prev');
const blog_pagination_btn_next = document.querySelector('.blog_pagination_btn_next');
// adding active class to pagination buttons 
blog_pagination_btn_number.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        blog_pagination_btn_number.forEach((item1, index1)=>{
            item1.classList.remove('blog_pagination_btn_active');
        })
        item.classList.add('blog_pagination_btn_active');
        page_checker(index);
    })
})
// next button of pagination
blog_pagination_btn_next.addEventListener('click', ()=>{
    for(let i=0; i< blog_pagination_btn_number.length; i++){
        if(blog_pagination_btn_number[i].classList.contains('blog_pagination_btn_active')){
            blog_pagination_btn_number[i].classList.remove('blog_pagination_btn_active');
            blog_pagination_btn_number[i+1].classList.add('blog_pagination_btn_active');
            page_checker(i+1);
            return;
        }
    }
})
// previous button of paagination
blog_pagination_btn_prev.addEventListener('click', ()=>{
    for(let i=0; i< blog_pagination_btn_number.length; i++){
        if(blog_pagination_btn_number[i].classList.contains('blog_pagination_btn_active')){
            blog_pagination_btn_number[i].classList.remove('blog_pagination_btn_active');
            blog_pagination_btn_number[i-1].classList.add('blog_pagination_btn_active');
            page_checker(i-1);
            return;
        }
    }
})
// pagination checker function
function page_checker(index){
    if(! ((index == 0)|| index == (blog_pagination_btn_number.length -1))){
        console.log('duzdu');
        blog_pagination_btn_prev.classList.remove('end_pagination_btn');
        blog_pagination_btn_next.classList.remove('end_pagination_btn');
    }else if(index == 0){
        blog_pagination_btn_prev.classList.add('end_pagination_btn');
        blog_pagination_btn_next.classList.remove('end_pagination_btn');
    }else if(index == (blog_pagination_btn_number.length -1)){
        blog_pagination_btn_next.classList.add('end_pagination_btn');
        blog_pagination_btn_prev.classList.remove('end_pagination_btn');
    }
}