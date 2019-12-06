import { ICart, ICartItem } from './icart'

export class Cart implements ICart{
    items: ICartItem[];
    total: number; 

    constructor(cart: ICart){
        if(cart){
            this.items = cart.items;
            this.total = cart.total;
        }
    }

}