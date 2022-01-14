import { Injectable } from '@angular/core';

//My imports
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = []

  //takes a product object and push it inthe items array of objects.
  addToCart(product : Product) {
    this.items.push(product);
  }

  removeFromCart(product : Product) {
    this.items = this.items.filter(el => el !== product)
  }

  //Returns items Array of Object.
  getItems() {
    return this.items;
  }

  //Resets items and returns it.
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
