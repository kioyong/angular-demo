import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    item = [];

    constructor() {
    }

    addToCart(product) {
        console.log("addToCart");
        this.item.push(product)
    }

    getItems() {
        console.log("getItems");
        return this.item;
    }

    clearCart() {
        console.log("clearCart");
        this.item = [];
    }
}
