import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../class/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  //Get all products
  getProducts() {
    return this.http.get<Product[]>("https://localhost:7114/api/Products")
  }

  //Get product by id
  getProduct(id : string){
    return this.http.get<Product>("https://localhost:7114/api/Products/" + id)
  }
}
