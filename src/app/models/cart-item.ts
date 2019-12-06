import { ICartItem } from './icart-item';
import { Product } from '../models';

export class CartItem implements ICartItem{
    product: Product;
    quantity: number;
    totalPrice: number;

    constructor(cartItem: CartItem){
        if(cartItem){
            this.product = cartItem.product;
            this.quantity = cartItem.quantity;
            this.totalPrice = cartItem.totalPrice;
        }
    }

}