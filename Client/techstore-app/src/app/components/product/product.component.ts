import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  sub : Subscription = new Subscription();

  //Takes data from the parent component <app-products> and stores it into productData
  @Input() 
  productData : Product = new Product()

  //Gets product Id from parent component <app-products> and stores is at productId
  @Input()
  productId : string = "";

  
  //Boolean to update the UI if the item was added to the cart
  isAdded : boolean = false;

  constructor(
    private crtsrv: CartService,
    private prdsrv: ProductsService
   ) { }

  ngOnInit(): void {
    this.loadAdded()
    /* 
    This function uses getProduct() from ProductsService to GET a product by it's Id,
    subscribe() connects the Observer to the Observable sub.
    The data is stored inside the sub and is sent to productData.
    */
    this.sub = this.prdsrv.getProduct(this.productId).subscribe(data => this.productData = data)
    
  }

  /* uses CartService addToCart() function to add the product object to
  the cart & changes the boolean value to true in order to inform the 
  UI that the product was added to the cart. */
  addToCart() {
    this.crtsrv.addToCart(this.productData)
    this.isAdded = true;
  }
  
  /* Gets all the products objects inside the cart for CartService.
  runs a foreach loop on itemsAdded to check if this specific prodct
  is listed on the shopping cart. id it is, isAdded is changed to true
  and the UI button changes relatively. */
  loadAdded() {
    let itemsAdded = this.crtsrv.getItems()
    itemsAdded.forEach(item => {
      if(this.productId=== item.id) {
        this.isAdded = true;
      }
    });
  }

}
