import {input} from './elements.js';
import {addBtn} from './elements.js';
import {shoppingList} from './elements.js';
import {shoppingContainer} from './elements.js';


class Buttons {
    constructor() {

    }

    createDeleteButton() {
        const el = document.createElement('button');
        el.classList.add('delete--button');
        el.textContent = 'Remove'
        return el;
    }

}


class ShoppingItem {
    constructor(name) {
        this.name = name;
    }

    createElement() {
        const el = document.createElement('li');
        el.classList.add('shopping--item');
        el.innerHTML = this.name;
        return el;
    }

}


class ShoppingList {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    print() {
        if(!input.value) return;
        const item = this.getElementItem();
        const removeButton = this.getRemoveButton();
        this.parentElement.appendChild(item);
        this.parentElement.appendChild(removeButton);
    }

    getElementItem() {
        const item = new ShoppingItem(input.value);
        const el = item.createElement();
        return el;
    }

    getRemoveButton() {
        const button = new Buttons();
        const removeButton = button.createDeleteButton();
        return removeButton; 
    }


}

function addItem(e) {
    e.preventDefault();
    const list = new ShoppingList(shoppingList);
    list.print();
    const items = [...document.querySelectorAll('.shopping--item')];
    items.forEach((item, i) => item.setAttribute('id', `${i + 1}`));
    const buttons = [...document.querySelectorAll('.delete--button')];
    buttons.forEach((btn, i) => btn.setAttribute('id', `${i + 1}`));
    input.value = '';
}

function removeItem (e) {
    if(!e.target.classList.contains('delete--button')) return;
    const items = [...document.querySelectorAll('.shopping--item')];
    const itemIDs = items.map(item => item.id);
    if(e.target.id !== itemIDs.slice(-1).join('')) return;
    console.log(`E: ${e.target.id}
                ID: ${itemIDs.slice(-1).join('')}`);
    
    
}

addBtn.addEventListener('click', addItem);
shoppingContainer.addEventListener('click', removeItem);

