import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Takes data from the parent component <app-products> and stores it into productData
  @Input() 
  productData : Product = new Product()

  
  //Boolean to update the UI if the item was added to the cart
  isAdded : boolean = false

  //Gets all the products objects inside the cart for CartService
  itemsAdded = this.crtsrv.getItems()

  constructor(
    private crtsrv: CartService
   ) { }

  ngOnInit(): void {
    this.loadAdded()
  }

  /* uses CartService addToCart() function to add the product object to
  the cart & changes the boolean value to true in order to inform the 
  UI that the product was added to the cart. */
  addToCart() {
    this.crtsrv.addToCart(this.productData)
    this.isAdded = true;
  }
  
  /* runs a foreach loop on itemsAdded to check if this specific prodct
  is listed on the shopping cart. id it is, isAdded is changed to true
  and the UI button changes relatively. */
  loadAdded() {
    this.itemsAdded.forEach(item => {
      if(this.productData.id === item.id) {
        this.isAdded = true;
      }
    });
  }

}
