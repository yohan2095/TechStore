import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/class/product';

@Component({
  selector: 'app-products-child',
  templateUrl: './products-child.component.html',
  styleUrls: ['./products-child.component.css']
})
export class ProductsChildComponent implements OnInit {

  @Input()
  productData : Product = new Product()

  constructor() { }

  ngOnInit(): void {
    console.log(this.productData)
  }

}
