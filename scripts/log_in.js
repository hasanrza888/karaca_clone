const log_in_page_box_header_btns = document.querySelectorAll('.log_in_page_box_header_btns');
const log_in_page_box_body_logIn = document.querySelectorAll('.log_in_page_box_body_logIn');
const log_in_form_logInPassword_open = document.querySelectorAll('.log_in_form_logInPassword_open');
const log_in_form_logInPassword_close = document.querySelectorAll('.log_in_form_logInPassword_close');
const log_in_form_password_ipnut = document.querySelectorAll('.log_in_form_password_ipnut');
const phone_input = document.getElementById("gsm_phone_input");
const log_in_form_third_line_forgotten_password = document.querySelector('.log_in_form_third_line_forgotten_password');
const log_in_page_forgot_password_window = document.querySelector('.log_in_page_forgot_password_window');
const forgot_password_window_close_btn = document.querySelector('.forgot_password_window_close_btn');
const log_in_form_password_warning = document.querySelectorAll('.log_in_form_password_warning');
const sign_up_condition_open_btn = document.querySelectorAll('.sign_up_condition_open_btn');
const sign_up_info_window = document.querySelectorAll('.sign_up_info_window');
const sign_up_info_window_close_btn = document.querySelectorAll('.sign_up_info_window_close_btn');
const sign_up_info_close_btn = document.querySelectorAll('.sign_up_info_close_btn');
// change logIn and signUp window
log_in_page_box_header_btns.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        log_in_page_box_header_btns.forEach((item1, index1)=>{
            item1.classList.remove('btn_active_class');
            log_in_page_box_body_logIn[index1].classList.remove('log_in_page_box_body_logIn_show');
        })
        item.classList.add('btn_active_class');
        log_in_page_box_body_logIn[index].classList.add('log_in_page_box_body_logIn_show');
    })
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
// formatting phone number input
phone_input.addEventListener("input", (e)=>{
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + ' ' + x[3] + ' ' + x[4];
});
//  _______ opening forgot password window _________
log_in_form_third_line_forgotten_password.addEventListener('click', ()=>{        
    log_in_page_forgot_password_window.classList.add('forgot_password_window_display_flex'); 
})
// __________ closing forgot password window  ________
forgot_password_window_close_btn.addEventListener('click', ()=>{
    log_in_page_forgot_password_window.classList.remove('forgot_password_window_display_flex');
})
// __________ closing forgot password window when clicking outside of box ________
window.addEventListener("click", (e)=>{
    if(e.target == log_in_page_forgot_password_window){
        log_in_page_forgot_password_window.classList.remove('forgot_password_window_display_flex');
    }
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
})
//  _______ opening sign_up condition window _________
sign_up_condition_open_btn.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        sign_up_info_window[index].classList.add('sign_up_info_display_flex'); 
    })
})
// __________ closing sign_up condition window  ________
sign_up_info_window_close_btn.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        sign_up_info_window[index].classList.remove('sign_up_info_display_flex');
    })
})
// closing with window footer close button
sign_up_info_close_btn.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        sign_up_info_window[index].classList.remove('sign_up_info_display_flex');
    })
})
// __________ closing sign_up condition window when clicking outside of box ________
sign_up_info_window.forEach((item, index)=>{
    item.addEventListener("click", (e)=>{
        if(e.target == item){
            item.classList.remove('sign_up_info_display_flex');
        }
    })
})