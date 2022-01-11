import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

//Routes (L9-10 Defines the routes and L11 the onloaded route)
const appRoutes: Routes = [{path : 'products', component : ProductsComponent},
                           {path : 'cart', component : CartComponent},
                           {path : '', redirectTo : '/products', pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
