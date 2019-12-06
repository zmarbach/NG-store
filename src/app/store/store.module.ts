import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';

import * as components from './components';

@NgModule({
  declarations: [
    components.ProductListComponent,
    components.ProductDetailsComponent,
    components.ReviewListComponent,
    components.ReviewFormComponent,
    components.CartComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StoreModule { }