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
};

