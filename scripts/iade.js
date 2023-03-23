const iptal_iade_question = document.querySelectorAll('.iptal_iade_question');
const iptal_iade_mobile_answer = document.querySelectorAll('.iptal_iade_mobile_answer');
const iptal_iade_desktop_answer = document.querySelectorAll('.iptal_iade_desktop_answer');
const kargo_teslimat_question = document.querySelectorAll('.kargo_teslimat_question');
const kargo_teslimat_mobile_answer = document.querySelectorAll('.kargo_teslimat_mobile_answer');
const kargo_teslimat_desktop_answers = document.querySelectorAll('.kargo_teslimat_desktop_answers');
const siparisler_question = document.querySelectorAll('.siparisler_question');
const siparisler_mobile_answers = document.querySelectorAll('.siparisler_mobile_answers');
const siparis_desktop_answers = document.querySelectorAll('.siparis_desktop_answers');
const sikca_sorulan_questions = document.querySelectorAll('.sikca_sorulan_questions');
const sikca_sorulan_mobile_answers = document.querySelectorAll('.sikca_sorulan_mobile_answers');
const sikca_sorulan_desktop_answers = document.querySelectorAll('.sikca_sorulan_desktop_answers');
const questions_left_side_list_title = document.querySelectorAll('.questions_left_side_list_title');
const questions_left_side_list_start = document.querySelectorAll('.questions_left_side_list_start');
const iade_page_detailed_questions_drop_down_answer = document.querySelectorAll('.iade_page_detailed_questions_drop_down_answer');
// opening and closing iade question's answers windows
iptal_iade_question.forEach((item, index)=>{  
    item.addEventListener('click', (e)=>{
        if(e.target == iptal_iade_question[index]){
            show_close(iptal_iade_mobile_answer, iptal_iade_desktop_answer, index);
        }          
    })
})
// kargo teslimat
// opening and closing kargo teslimat's answers windows
kargo_teslimat_question.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        if(e.target == kargo_teslimat_question[index]){
            show_close(kargo_teslimat_mobile_answer, kargo_teslimat_desktop_answers, index);
        }              
    })
})
// siparisler
// opening and closing siparisler's answers windows
siparisler_question.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        if(e.target == siparisler_question[index]){
            show_close(siparisler_mobile_answers, siparis_desktop_answers, index);
        }                
    })    
})
// sikca sorulan 
// opening and closing sikca sorulan's answers windows
sikca_sorulan_questions.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        if(e.target == sikca_sorulan_questions[index]){
            show_close(sikca_sorulan_mobile_answers, sikca_sorulan_desktop_answers, index);
        }                
    })    
})
// common function for closing windows
function show_close(mobile_answer, desktop_answer, index){    
    if(window.innerWidth <= 575){
        // closing  other drop downs
        mobile_answer.forEach((item3, index3)=>{
            if(item3.classList.contains('drop_down_answer_mobile_show') && (index3 !=index)){
                item3.classList.remove('drop_down_answer_mobile_show');
            }
        })
        // opening or closing when clicking to list question
        if(mobile_answer[index].classList.contains('drop_down_answer_mobile_show')){
            mobile_answer[index].classList.remove('drop_down_answer_mobile_show');
        }else{
            mobile_answer[index].classList.add('drop_down_answer_mobile_show');
        }
    }else if(window.innerWidth > 575){
        // removing show class from all windows
        desktop_answer.forEach((item1)=>{
            if(item1.classList.contains('detailed_questions_right_side_show_class')){
                item1.classList.remove('detailed_questions_right_side_show_class');
            }
        })
        // adding show class clicked item's answer
        desktop_answer[index].classList.add('detailed_questions_right_side_show_class');
    }
}
// changing style of question text when active
questions_left_side_list_title.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
        if(e.target == questions_left_side_list_title[index]){
            if(window.innerWidth <= 575){
                questions_left_side_list_title.forEach((item5, index5)=>{
                    if(index != index5){
                        questions_left_side_list_title[index5].style.fontWeight = "400";
                        iade_page_detailed_questions_drop_down_answer[index5].style.fontWeight = "400";
                        questions_left_side_list_start[index5].classList.remove('questions_left_side_list_start_clicked');
                    }                    
                })                
                if(questions_left_side_list_title[index].style.fontWeight == "700"){
                    questions_left_side_list_title[index].style.fontWeight = "400";
                    iade_page_detailed_questions_drop_down_answer[index].style.fontWeight = "400";
                    questions_left_side_list_start[index].classList.remove('questions_left_side_list_start_clicked');
                }else{
                    questions_left_side_list_title[index].style.fontWeight = "700";
                    iade_page_detailed_questions_drop_down_answer[index].style.fontWeight = "400";
                    questions_left_side_list_start[index].classList.add('questions_left_side_list_start_clicked');
                }
            }else{

                questions_left_side_list_start.forEach((item4, index4)=>{
                    item4.classList.remove('left_side_list_start_active');
                    questions_left_side_list_title[index4].classList.remove('questions_left_side_list_title_active');
                })
                if(questions_left_side_list_start[index].classList.contains('left_side_list_start_active')){
                    questions_left_side_list_start[index].classList.remove('left_side_list_start_active');
                    questions_left_side_list_title[index].classList.remove('questions_left_side_list_title_active');
                }else{
                    questions_left_side_list_start[index].classList.add('left_side_list_start_active');
                    questions_left_side_list_title[index].classList.add('questions_left_side_list_title_active');
                }
            }
        }    
    })
})