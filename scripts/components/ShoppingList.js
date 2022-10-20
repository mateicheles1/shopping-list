import {ShoppingItem} from '../models/ShoppingItem.js';
import {Button} from "../events/Button.js";

export class ShoppingList {
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
        const button = new Button();
        const removeButton = button.createDeleteButton();
        return removeButton; 
    }
}