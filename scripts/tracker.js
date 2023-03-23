const phone_input = document.querySelectorAll('.phone_input');
const account_list_open_details = document.querySelectorAll('.account_list_open_details');
const tracker_page_account_info_window = document.querySelectorAll('.tracker_page_account_info_window');
const form_cancel_btn = document.querySelector('.form_cancel_btn');
const account_info_form_container = document.querySelector('.account_info_form_container');
const tracker_page_account_informations_container = document.querySelector('.tracker_page_account_informations_container');
const account_informations_update_btn = document.querySelector('.account_informations_update_btn');
const list_arrow_right = document.querySelectorAll('.list_arrow_right');
const log_in_form_logInPassword_open = document.querySelectorAll('.log_in_form_logInPassword_open');
const log_in_form_logInPassword_close =document.querySelectorAll('.log_in_form_logInPassword_close');
const log_in_form_password_ipnut = document.querySelectorAll('.log_in_form_password_ipnut');
const log_in_form_password_warning = document.querySelectorAll('.log_in_form_password_warning');
const change_password_form_submit = document.querySelector('.change_password_form_submit');
const add_new_delivery = document.querySelectorAll('.add_new_delivery');
const new_address_form_window = document.querySelector('.new_address_form_window');
const delivery_addres_main_container = document.querySelector('.delivery_addres_main_container');
const new_address_form_cancel_btn = document.querySelector('.new_address_form_cancel_btn');
// __________ formatting phone input _______________
phone_input.forEach((item, index)=>{
    item.addEventListener("input", (e)=>{
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + ' ' + x[3] + ' ' + x[4];
    });
})
// ____________ opening account list details ________________
account_list_open_details.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        // closing other windows
        tracker_page_account_info_window.forEach((item1, index1)=>{
            item1.classList.remove('tracker_page_account_info_window_flex');
        })
        // removing active class and showing arrow right ____________
        account_list_open_details.forEach((item3, index3)=>{
            item3.classList.remove('tracker_page_account_list_active');
            list_arrow_right[index3].style.display = 'block';
        })
        // opening account list details ____________________________
        tracker_page_account_info_window[index].classList.add('tracker_page_account_info_window_flex');
        // adding active class to account list ______________________
        item.classList.add('tracker_page_account_list_active');
        // removing arrow right icon_________________________________
        list_arrow_right[index].style.display = 'none';
    })
})
//____________ cancel form and opening account information _____
form_cancel_btn.addEventListener('click', ()=>{
    account_info_form_container.style.display = "none";
    tracker_page_account_informations_container.classList.add('tracker_page_account_informations_container_flex');
})
// ________ opening updatig account window when clicking to update button ________
account_informations_update_btn.addEventListener('click', ()=>{
    tracker_page_account_informations_container.classList.remove('tracker_page_account_informations_container_flex');
    account_info_form_container.style.display = "block";
})
// showing passowrd in input
log_in_form_logInPassword_open.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        item.classList.add('password_none');
        log_in_form_logInPassword_close[index].classList.remove('password_none');
        log_in_form_password_ipnut[index].type = "text";
    })
})
// hiding password in input
log_in_form_logInPassword_close.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        item.classList.add('password_none');
        log_in_form_logInPassword_open[index].classList.remove('password_none');
        log_in_form_password_ipnut[index].type = "password";
    })
})
// sign up password condition checking
log_in_form_password_ipnut[1].addEventListener('keyup', (e)=>{
    // length checking
    if((e.target.value).length >= 8){
        log_in_form_password_warning[0].classList.add('true_password_color');
    }else{
        log_in_form_password_warning[0].classList.remove('true_password_color');
    }
    // big letter checking
    if(/[A-Z]/.test(e.target.value)){
        log_in_form_password_warning[1].classList.add('true_password_color');
    }else{
        log_in_form_password_warning[1].classList.remove('true_password_color');
    }
    // Small letter checking
    if(/[a-z]/.test(e.target.value)){
        log_in_form_password_warning[2].classList.add('true_password_color');
    }else{
        log_in_form_password_warning[2].classList.remove('true_password_color');
    }
    // removing not allowed classs from submit button
    if(((e.target.value).length >= 8) && (/[A-Z]/.test(e.target.value)) && (/[a-z]/.test(e.target.value))){
        change_password_form_submit.classList.remove('not_allowed_cursor');
    }else{
        change_password_form_submit.classList.add('not_allowed_cursor');
    }
})
// opening add new address window
add_new_delivery.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        delivery_addres_main_container.style.display = 'none';
        new_address_form_window.style.display = 'block';
    })
})
// cancel add new address form and return main window
new_address_form_cancel_btn.addEventListener('click', ()=>{
    delivery_addres_main_container.style.display = 'block';
    new_address_form_window.style.display = 'none';
})