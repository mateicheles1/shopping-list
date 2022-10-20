
export class ShoppingItem {
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
