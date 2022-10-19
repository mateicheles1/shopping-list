
const input = document.getElementById('input');
const addBtn = document.getElementById('add--btn');
const container = document.querySelector('.shopping--list__container');
const shoppingList = document.querySelector('.shopping--list');



class ShoppingItem {
    constructor(name) {
        this.name = name;
    }

    createElement() {
        const el = document.createElement('li');
        el.innerHTML = this.name;
        return el;
    }
}



class ShoppingList {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    print() {
        const item = new ShoppingItem(input.value);
        const el = item.createElement();
        this.parentElement.appendChild(el);
        console.log(item);
    }


}

function addItem(e) {
    e.preventDefault();
    const list = new ShoppingList(shoppingList);
    list.print();
    input.value = '';
}

addBtn.addEventListener('click', addItem);

