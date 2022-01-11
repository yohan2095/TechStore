import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
