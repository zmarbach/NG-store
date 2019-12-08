import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'store-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  numOfItems : number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let quantities = this.cartService.getCart().items.map( x => x.quantity);

    for(var x of quantities){
     this.numOfItems += x;
    }
  }

}
