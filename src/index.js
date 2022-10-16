import { url } from './api.js';
import { items } from './api.js';
import {fetchHandler } from './api.js';
import {list } from './api.js';
import {displayItem } from './api.js';


// Utils
import {images } from './utils.js';
import {sliderLine } from './utils.js';
import {count } from './utils.js';
import {width } from './utils.js';
import {init} from './utils.js';
import {rollSlider} from './utils.js';
import {modalWindowOpen} from './utils.js';
import {modalWindow} from './utils.js';
import {modalWindowClose} from './utils.js';
import {search} from './utils.js';
import {cart} from './utils.js';
import {cartItemText} from './utils.js';
import {cartList} from './utils.js';
import {deleteItem } from './utils.js';



modalWindowOpen.addEventListener('click', function () {
    modalWindow.style.display = "block";
});
modalWindowClose.addEventListener('click', function () {
    modalWindow.style.display = "none";
});

setTimeout(cart, 2000);