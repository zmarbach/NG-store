export interface IProduct {
    id: number;
    name: string;
    description : string;
    price : number;
    imageName : string;
    reviews : IReview[];
}

export interface IReview{
    userName : string;
    rating : number;
    comment : string;
    date : number;
}