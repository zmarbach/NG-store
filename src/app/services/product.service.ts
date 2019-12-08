import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, IProduct, IReview, Review } from '../models';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Product[]> {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}/`, {headers: new HttpHeaders().set('Authorization', environment.userName)})
      .toPromise()
      .then(products => (products || []).map(product => new Product(product)));
  }

  getProductById(id: number) : Promise<Product> {
    if (id <= 0 || isNaN(id)) {
        return Promise.resolve(null);
      }

    else{
      return this.httpClient.get<IProduct>(`${this.baseUrl}/${id}`, {headers: new HttpHeaders().set('Authorization', environment.userName)})
      .toPromise()
      .then(product => new Product(product));
      }
  }

  addReview(productId: number, review: IReview) :  Promise<IReview> {
    return this.httpClient.post<IReview>(`${this.baseUrl}/${productId}/reviews`, review, {headers: new HttpHeaders().set('Authorization', environment.userName)})
    .toPromise()
    .then(response => new Review(response));

  }

  // addReview(product: Product) : Promise<Product> {
  //   return this.httpClient.post<IProduct>(`${this.baseUrl}/${product.id}/reviews`, product, {headers: new HttpHeaders().set('Authorization', environment.userName)})
  //   .toPromise()
  //   .then(response => new Product(response));

  // }

}

