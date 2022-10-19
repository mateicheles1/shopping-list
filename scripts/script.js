
const input = document.getElementById('input');
const addBtn = document.getElementById('add--btn');
const container = document.querySelector('.shopping--list__container');
const shoppingList = document.querySelector('.shopping--list');


class Buttons {
    constructor() {

    }

    createDeleteButton() {
        const el = document.createElement('button');
        el.classList.add('delete--button');
        el.textContent = 'Remove'
        return el;
    }

    // createAddButton() {
    //     const el = document.createElement('button');
    //     el.classList.add('add--button');
    //     el.textContent = 'Add';
    //     return el;
    // }
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
        // const addButton = this.getAddButton();
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

    // getAddButton () {
    //     const button = new Buttons();
    //     const addButton = button.createAddButton();
    //     return addButton;
    // }


}

function addItem(e) {
    e.preventDefault();
    const list = new ShoppingList(shoppingList);
    list.print();
    input.value = '';
}

addBtn.addEventListener('click', addItem);

