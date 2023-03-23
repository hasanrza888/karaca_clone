const satis_noqta_page_store_list_item = document.querySelectorAll('.satis_noqta_page_store_list_item');
const satis_noqta_page_selling_center_contact_detail = document.querySelector('.satis_noqta_page_selling_center_contact_detail');
const satis_noqta_page_stores_container = document.querySelector('.satis_noqta_page_stores_container');
const satis_noqta_page_search_with_store_name_ipnut = document.querySelector('.satis_noqta_page_search_with_store_name_ipnut');
const satis_noqta_page_store_name = document.querySelectorAll('.satis_noqta_page_store_name');
const satis_noqta_page_cities_list = document.querySelector('.satis_noqta_page_cities_list');
const satis_noqta_page_store_address = document.querySelectorAll('.satis_noqta_page_store_address');
// selling store contact detail window
satis_noqta_page_store_list_item.forEach(item => {
    item.addEventListener('click', ()=>{
        satis_noqta_page_selling_center_contact_detail.classList.add('selling_center_contact_detail_show');
    })
})
let copy_of_list = [...satis_noqta_page_store_list_item];
// search with store name
let city = '';
let store = '';
satis_noqta_page_search_with_store_name_ipnut.addEventListener('keyup', (e)=>{
    store = e.target.value;
    let searchedArr = [...satis_noqta_page_store_list_item].filter((value, index, arr) => { return value.children[0].innerText.toLowerCase().includes(e.target.value.toLowerCase()) && value.children[1].innerText.toLowerCase().includes(city.toLowerCase())} );
    satis_noqta_page_stores_container.innerHTML = '';
    searchedArr.forEach((item, index)=>{
        satis_noqta_page_stores_container.append(item);
    })
})
// search with city name
satis_noqta_page_cities_list.addEventListener('change', (e)=>{    
    if(e.target.value == 'Seçiniz'){
        city = '';
    }        
        city = e.target.value;
        let searchedCity = [...satis_noqta_page_store_list_item].filter((val, index, arr) =>{ return val.children[1].innerText.toLowerCase().includes(e.target.value.toLowerCase()) && val.children[0].innerText.toLowerCase().includes(store.toLowerCase()) });
        satis_noqta_page_stores_container.innerHTML = '';
        searchedCity.forEach((item, index)=>{
            satis_noqta_page_stores_container.append(item);
        })
})