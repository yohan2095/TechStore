import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //Initiate a new Subscription as sub
  sub : Subscription = new Subscription()

  //Initiate an array of Product class as products
  products : Product[] = []

  //User's input to find a product, the input goes there.
  findProduct : string = "";

  //Initiate inside the Constructor ProductsService as srv only in this comp
  constructor(
    private srv : ProductsService
  ) { }

  ngOnInit(): void {
    /* 
    This function uses getProducts() from ProductsService to GET all the products,
    subscribe() connects the Observer to the Observable sub.
    The data is stored inside the sub and is sent to products.
    */
    this.sub = this.srv.getProducts().subscribe( (data : Product[]) => this.products = data )

    console.table(this.products)
  }

  /* This function takes a product, verifies if the findProduct input match with the name, category or firm
  an returns a boolean relatively. This boolean goes to an *ngIf directive to decide wheter to display the product
  or not according to the search input. */
  search(product : Product):boolean {
    let name = product.productName?.toLowerCase();
    let category = product.category?.toLowerCase();
    let firm = product.firm?.toLowerCase();

    if(name?.includes(this.findProduct.toLowerCase()) ||
       category?.includes(this.findProduct.toLowerCase()) ||
       firm?.includes(this.findProduct.toLowerCase())) {
         return true;
       } else {
         return false;
       }
  }

  ngOnDestroy() {
    //Disposes the resources held by the subscription.
    this.sub.unsubscribe();
  }

}
