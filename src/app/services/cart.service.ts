import { Injectable } from '@angular/core';
import { Cart, ICartItem, CartItem} from './../models';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart = {
    items: [],
    total: 0
  }

  itemToAdd: CartItem;

  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    
    let existing = this.cart.items.find(x => x.product.id == product.id);
    if (existing) {
        existing.quantity += 1;
        existing.totalPrice = existing.product.price * existing.quantity;
    } else {
      this.itemToAdd = {
        product: product,
        quantity: 1,
        totalPrice: product.price
      }
      this.cart.items.push(this.itemToAdd);
    }

    this.cart.total = this.cart.items.map(x => x.totalPrice).reduce((x, y) => x + y);
  }

}
