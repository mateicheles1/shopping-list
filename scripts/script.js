import {input} from './elements/elements.js';
import {addBtn} from './elements/elements.js';
import {shoppingList} from './elements/elements.js';
import {shoppingContainer} from './elements/elements.js';
import {ShoppingList} from './components/ShoppingList.js';


export function addItem(e) {
    e.preventDefault();
    const list = new ShoppingList(shoppingList);
    list.print();
    const items = [...document.querySelectorAll('.shopping--item')];
    items.forEach((item, i) => item.setAttribute('id', `${i + 1}`));
    const buttons = [...document.querySelectorAll('.delete--button')];
    buttons.forEach((btn, i) => btn.setAttribute('id', `${i + 1}`));
    input.value = '';
}

export function removeItem (e) {
    if(!e.target.classList.contains('delete--button')) return;
    const items = [...document.querySelectorAll('.shopping--item')];
    const itemIDs = items.map(item => item.id);
    if(e.target.id !== itemIDs.slice(-1).join('')) return;
    console.log(`E: ${e.target.id}
                ID: ${itemIDs.slice(-1).join('')}`);
    
    
}


addBtn.addEventListener('click', addItem);
shoppingContainer.addEventListener('click', removeItem);

