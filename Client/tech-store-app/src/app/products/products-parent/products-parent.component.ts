import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../utils/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-products-parent',
  templateUrl: './products-parent.component.html',
  styleUrls: ['./products-parent.component.css']
})
export class ProductsParentComponent implements OnInit {

  sub : Subscription = new Subscription()

  products : Product[] = [];

  constructor(
    private srv : ProductService
  ) { }

  ngOnInit(): void {
    //Get all products and set it on 'products'
    this.sub = this.srv.getProducts().subscribe( (data : Product[]) => this.products = data)
  }

  //Clean-up the subscription
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
