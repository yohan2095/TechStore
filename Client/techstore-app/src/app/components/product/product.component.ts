import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/classes/product';

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
  isAdded : boolean = false;


  //Initiate an event which will be sent to the <app-products> component
  @Output() 
  itemToCart = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /* Changes the boolean value to true in order to inform the UI that the product was 
     added to the cart and send the product id number as a string to the parent component */
  addToCart() {
    if(this.isAdded === false) {
      this.isAdded = !this.isAdded;
      this.itemToCart.emit(this.productData.id)
    }
  } 

}
