import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IReview } from 'src/app/models';

@Component({
  selector: 'store-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  @Output() submitReview = new EventEmitter<IReview>();

  userName : string;
  rating : number;
  comment : string;


  ngOnInit() {

  }

  submit() {
    this.submitReview.emit({
      userName : this.userName,
      rating : this.rating,
      comment : this.comment,
      date: Date.now()
      
    })

    this.clear();
  }

  clear(){
    this.userName = "",
    this.rating = 0,
    this.comment = ""
  }

}
