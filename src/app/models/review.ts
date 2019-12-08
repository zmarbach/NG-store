
import { IReview } from './iproduct';

export class Review implements IReview{
    userName : string;
    rating : number;
    comment : string;
    date : number;

    constructor(review: IReview){
        this.userName = review.userName;
        this.rating = review.rating;
        this.comment = review.comment;
        this.date = review.date;
    }
}