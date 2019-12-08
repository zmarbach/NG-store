import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'store-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [],
    total: 0
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
   this.cart =  this.cartService.getCart();
  }

}
