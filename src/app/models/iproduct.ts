export interface IProduct {
    id: number;
    name: string;
    description : string;
    price : string;
    imageName : string;
    reviews : IReview[];
}

export interface IReview{
    userName : string;
    rating : string;
    comment : string;
    date : string;
}