export class Button {
    constructor() {

    }

    createDeleteButton() {
        const el = document.createElement('button');
        el.classList.add('delete--button');
        el.textContent = 'Remove'
        return el;
    }

}