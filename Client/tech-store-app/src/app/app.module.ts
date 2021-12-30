import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Personal Modules
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsParentComponent } from './products/products-parent/products-parent.component';
import { ProductsChildComponent } from './products/products-child/products-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsParentComponent,
    ProductsChildComponent
  ],
  imports: [
    BrowserModule,
    //Personal Modules
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
