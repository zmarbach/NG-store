import { Component, OnInit, Input } from '@angular/core';
import { IProduct, IReview } from 'src/app/models';

@Component({
  selector: 'store-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() reviewListProduct: IProduct;


  get numOfReviews() : number{  
    if(this.reviewListProduct && this.reviewListProduct.reviews){
    return this.reviewListProduct.reviews.length;
  } 
}

  constructor() { }

  ngOnInit() {
  }

  // ngOnChanges(){
  //   this.reviewListProduct
  // }



}


