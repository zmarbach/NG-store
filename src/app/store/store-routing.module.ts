import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as components from './components';

const routes: Routes = [
  { path: 'list', component: components.ProductListComponent },
  { path: ':productId', component: components.ProductDetailsComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }