const hediyye_karti_uye_ol_window = document.querySelector('.hediyye_karti_uye_ol_window');
const hediyye_karti_page_second_section_product_sending_confirm = document.querySelector('.hediyye_karti_page_second_section_product_sending_confirm');
const hediye_karti_uye_ol_close_btn = document.querySelector('.hediye_karti_uye_ol_close_btn');
const hediyye_karti_uye_ol_container = document.querySelector('.hediyye_karti_uye_ol_container');
const hediyye_karti_password_open = document.querySelector('.hediyye_karti_password_open');
const hediyye_karti_password_close = document.querySelector('.hediyye_karti_password_close');
const uye_ol_password = document.querySelector('#uye_ol_password');
const product_price_choosing_values = document.querySelectorAll('.product_price_choosing_values');
const number_of_choosed_cart = document.querySelector('.number_of_choosed_cart');
const hediyye_karti_page_second_section_product_number_choosing = document.querySelector('.hediyye_karti_page_second_section_product_number_choosing');
const product_price_choosing_values_input = document.querySelector('.product_price_choosing_values_input');
const change_amount = document.querySelector('.change_amount');
const product_number_choosing_input = document.querySelector('.product_number_choosing_input');
const product_number_decrease = document.querySelector('.product_number_decrease');
const product_number_increase = document.querySelector('.product_number_increase');
//  _______ opening uye ol window _________
hediyye_karti_page_second_section_product_sending_confirm.addEventListener('click', ()=>{
    if(! hediyye_karti_page_second_section_product_sending_confirm.classList.contains('hediyye_karti_not_allowed')){
        hediyye_karti_uye_ol_window.classList.add('hediyye_karti_display_flex'); 
    }
})
// __________ closing uye ol window  ________
hediye_karti_uye_ol_close_btn.addEventListener('click', ()=>{
    hediyye_karti_uye_ol_window.classList.remove('hediyye_karti_display_flex');
})
// __________ closing uye ol window when clicking outside of box ________
window.addEventListener("click", (e)=>{
    if(e.target == hediyye_karti_uye_ol_window){
        hediyye_karti_uye_ol_window.classList.remove('hediyye_karti_display_flex');
    }
})
// showing passowrd in input
hediyye_karti_password_open.addEventListener('click', ()=>{
    hediyye_karti_password_open.classList.add('password_none');
    hediyye_karti_password_close.classList.remove('password_none');
    uye_ol_password.type = "text";
})
// hiding password in input
hediyye_karti_password_close.addEventListener('click', ()=>{
    hediyye_karti_password_close.classList.add('password_none');
    hediyye_karti_password_open.classList.remove('password_none');
    uye_ol_password.type = "password";
})
// clicking price values in hediyye karti page
let card_number = 0;
product_price_choosing_values.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        // adding active class to buttons
        if(index != 5){
            if(change_amount.classList.contains('price_active_btn')){
                change_amount.classList.remove('price_active_btn')
                product_price_choosing_values_input.style.display = "none";
            }
            if(!item.classList.contains('price_active_btn')){
                item.classList.add('price_active_btn');
                card_number += 1;
                hediyye_karti_page_second_section_product_sending_confirm.classList.remove('hediyye_karti_not_allowed');
            }else{
                item.classList.remove('price_active_btn');
                card_number -= 1;
                hediyye_karti_page_second_section_product_sending_confirm.classList.add('hediyye_karti_not_allowed');
            }
            if(card_number == 1){
                hediyye_karti_page_second_section_product_number_choosing.style.display = "block";
            }else{
                hediyye_karti_page_second_section_product_number_choosing.style.display = "none";
            }
        }
        // showing number of cards
        if(card_number != 0){
            number_of_choosed_cart.innerText = `${card_number} Kart Seçildi`;
        }else{
            number_of_choosed_cart.innerText = "Barem Seçilmedi";
        }
    })
})
// chancing amount gift
change_amount.addEventListener('click', ()=>{
    card_number = 0;
    product_price_choosing_values.forEach((item, index)=>{
        if(item.classList.contains('price_active_btn')){
            item.classList.remove('price_active_btn');
        }
    })
    change_amount.classList.add('price_active_btn');
    hediyye_karti_page_second_section_product_number_choosing.style.display = "block";
    product_price_choosing_values_input.style.display = "flex";
    number_of_choosed_cart.innerText = "Barem Seçilmedi";
    hediyye_karti_page_second_section_product_sending_confirm.classList.remove('hediyye_karti_not_allowed');
})
// changing input value with decrease button
product_number_decrease.addEventListener('click', ()=>{
    if((Number(product_number_choosing_input.value) - 1) > 0){
        product_number_choosing_input.value = Number(product_number_choosing_input.value) - 1;
    }
})
// changing input value with increase button
product_number_increase.addEventListener('click', ()=>{
    product_number_choosing_input.value = Number(product_number_choosing_input.value) + 1;
})