import { items } from "./api";

// SLIDER**************
export const images = document.querySelectorAll('.slider .slider-line img');
export const sliderLine = document.querySelector('.slider-line');
export let count = 0;
export let width = '';
export function init() {
    width =document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
        rollSlider();
    })
}
export function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}

// CART
export const modalWindowOpen = document.querySelector('.header__inner-cart');
export const modalWindow  = document.querySelector('.cart');
export const modalWindowClose = document.querySelector('.close-cart');

//   SEARCH
export const search = document.querySelector('#search');
search.oninput = function search () {
    let val = this.value.trim();
    let searchItems = document.querySelectorAll('#cards__list li');
    if (val !='') {
        searchItems.forEach(function(elem){
            if(elem.innerText.search(val) == -1) {
                elem.style.display = "none";
            }
            else {
                elem.style.display = "block";
            }
        })
    }
    else {
        searchItems.forEach(function(elem){
            elem.style.display = "block";
        });
    }
}
// CART ADD
export let cartList = document.querySelector(".items-list");
export let cartItemText = document.querySelectorAll(".card-item__info-description");
export function cart() {
    const addTocart = document.querySelectorAll('.card-tocart');
    displayCart = '';
    addTocart.forEach((elem)=>{
        elem.addEventListener('click',()=>{
            console.log( '3');
            displayCart += ` 
            <li class="items-list__element">
            <p class="items-list__element-text">3280</p>
            <span class="items-list__element-price">Стоимость</span>
            <button class="clear-item">Удалить</button>
        </li>` 
        cartList.innerHTML = displayCart;
        })
      })
};
// export const deleteItem = document.querySelectorAll(".clear-item");
// // Delete item
// export function deleteItems () {
//     console.log('4');
//         deleteItem.addEventListener('click', ()=>{
//             console.log('5');
//     });
// };
// setTimeout(deleteItems, 4000);

window.addEventListener('resize', init);
init();  
document.querySelector('.slider-prev').addEventListener('click', function() {
    count--;
    if (count <0){
        count = images.length -1;
    }
    rollSlider();
});
document.querySelector('.slider-next').addEventListener('click', function() {
    count++;
    if (count >= images.length){
        count = 0;
    }
    rollSlider();
});
