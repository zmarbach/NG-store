import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services';
import { Product } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'store-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productPromise: Promise<Product[]>;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.productPromise = this.productService.getAll()

  }

  addItem(product){
    this.cartService.addToCart(product);
  }

}
