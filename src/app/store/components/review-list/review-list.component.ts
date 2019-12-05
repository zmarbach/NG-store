import { Component, OnInit, Input } from '@angular/core';
import { IProduct, IReview } from 'src/app/models';

@Component({
  selector: 'store-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() reviewListProduct: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
