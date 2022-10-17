export const url ="https://63444d96242c1f347f838d7d.mockapi.io/Item";

export let items = [];
export async function fetchHandler() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      items = data;
    } catch (error) {
      console.log(error);
    }
    displayItem();
}
fetchHandler();

export let list = document.querySelector(".cards__list");
export function displayItem() {
    console.log( '1');
    let displayItems = '';
    items.forEach(function(item, i) {
        console.log( '2');
        let discountPrice = Math.round(item.price  - (item.sale/100 *item.price));
        displayItems +=  `            
        <li class="card-item" id ="${i}">
        <a class="card-item-link">
            <div class="card-item__img-wrap">
                <img class="card-item__img" id="card-item__img" src="${item.image}" alt="" style="border-radius: 10px">
                    <div id="myModal" class="modal">
                        <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
                        <img class="modal-content" id="img01">
                    </div>
                <p class="card-discount">${-item.sale}%</p>
                <button class = "card-open" id="card-open">Быстрый просмотр</button>
                <button class = "card-tocart"></button>
            </div>
            <div class="card-item__info">
                <p class="card-item__info-price">
                    <span class="card-item__info-price-discount">${discountPrice}$</span>
                    <span class="card-item__info-price-full">${item.price}$</span>
                </p>
                <p class="card-item__info-description">${item.description}</p>
            </div>
        </a>
    </li>`
    list.innerHTML = displayItems;
    })
    // CART ADD
    let itemsDesc = items;
    let cartList = document.querySelector(".items-list");
    const addTocart = document.querySelectorAll('.card-tocart');
    
    displayCart = '';
    addTocart.forEach((elem,)=>{
        elem.addEventListener('click',()=>{
            console.log( '3');
            displayCart += ` 
            <li class="items-list__element">
            <p class="items-list__element-text">${itemsDesc.description}</p>
            <span class="items-list__element-price">${itemsDesc.price}</span>
            <button class="clear-item">Удалить</button>
        </li>` 
        cartList.innerHTML = displayCart;
        });
      });
    //   const deleteItemCart = document.querySelectorAll('.clear-item');
    //   deleteItemCart.forEach((elem,)=>{
    //       console.log( '39');
    //       elem.addEventListener('click',()=>{
    //           console.log( '39');
    //       });
    //     });
    // const cardOpen = document.querySelectorAll('.card-open');
    // const cardImage = document.querySelectorAll('.card-item__img');
    // cardOpen.forEach((elem,)=>{
    //     elem.addEventListener('click',()=>{
    //         console.log(23);
    //         cardImage.className ='bigImage';
    //     });
    //   });

    let modal = document.querySelectorAll('#myModal');
    let img =document.querySelectorAll('#card-item__img');
    let img01 =document.querySelectorAll('#img01');
    img.forEach((elem,)=>{
        elem.addEventListener('click',()=>{
            modal.style.display = "block";
            img01.src = this.src;
        });
      });
};

  
