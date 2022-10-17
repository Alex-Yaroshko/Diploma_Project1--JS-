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
