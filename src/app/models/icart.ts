import { Product } from './product';

export interface ICart{
    items: ICartItem[]
    total: number

}

export interface ICartItem{
    product: Product
    quantity: number
    totalPrice: number

}