import { Product } from '../models';

export interface ICartItem{
    product: Product
    quantity: number
    totalPrice: number

}