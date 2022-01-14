import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //sets all items into the cart array of objects.
  items = this.crtsrv.getItems()

  constructor(
    private crtsrv: CartService
  ) { }

  ngOnInit(): void {
  }

  //Resets the whole cart
  removeAllItems() {
    this.crtsrv.clearCart()
    this.items = this.crtsrv.getItems()
  }

}
