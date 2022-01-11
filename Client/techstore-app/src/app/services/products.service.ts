import { Injectable } from '@angular/core';

//My imports
import { HttpClient } from '@angular/common/http';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /*//Url to the Products collection from the server.
  url = "https://localhost:7256/api/Products";*/

  constructor(private http : HttpClient) { }

  //Get all products. (Sends an http request to the server an get All the products)
  getProducts() {
    return this.http.get<Product[]>("https://localhost:7256/api/products")
  }

  //Get product by id. (Sends an http request to the server and get a products by its id)
  getProduct(id : string) {
    return this.http.get<Product>("https://localhost:7256/api/Products/" + id)
  }
}
