import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IReview, Review, Product } from 'src/app/models';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from 'src/app/services';

@Component({
  selector: 'store-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Input() product: Product;
  @Output() submitReview = new EventEmitter<IReview>();

  review: Review;

  userName : string;
  rating : number;
  comment : string;

  constructor(private productService: ProductService){

  }

  ngOnInit() {

  }

  submit() {

    this.review = {userName : this.userName,
      rating : this.rating,
      comment : this.comment,
      date: Date.now()
    }
    
    this.submitReview.emit(this.review);

    this.productService.addReview(this.product.id, this.review);

    this.clear();
    
  }

  clear(){
    this.userName = "",
    this.rating = 0,
    this.comment = ""
  }

}
