import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { Product, IReview } from 'src/app/models';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'store-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId : number;
  product: Product;

  constructor(private productService : ProductService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.productId = +params.productId;

    this.productService.getProductById(this.productId)
      .then((product) => {this.product = product})
  }

  addNewReview(review: IReview){
    this.product.reviews.push(review);
    // this.productService.addReview(this.productId, review);
  }

  addItemToCart(){
    this.cartService.addToCart(this.product);
  }

}
