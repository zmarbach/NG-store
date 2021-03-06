import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'products',  loadChildren: () => import('./store/store.module').then(data => data.StoreModule)},
{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(data => data.CartModule)},
{ path: '', redirectTo: 'products', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
