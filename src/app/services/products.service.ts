import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('https://dummyjson.com/products');
  }

  getSingleProduct(id: number){
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
