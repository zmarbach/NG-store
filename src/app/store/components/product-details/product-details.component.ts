import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models';

@Component({
  selector: 'store-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId : number;
  product: Product;

  constructor(private productService : ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.productId = +params.productId;

    this.productService.getProductById(this.productId)
      .then((product) => {this.product = product})
  }

}
