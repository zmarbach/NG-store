import { IProduct, IReview } from './iproduct';

export class Product implements IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageName: string;
  reviews: IReview[];

  constructor(product: IProduct) {
    if (product) {
      this.id = product.id;
      this.name = product.name;
      this.price = product.price;
      this.imageName = product.imageName;
      this.reviews = product.reviews;
    }
  }
}

