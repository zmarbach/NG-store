import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';

import * as components from './components';
// import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    components.ProductListComponent,
    components.ProductDetailsComponent,
    components.ReviewListComponent,
    components.ReviewFormComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // SharedModule
  ]
})
export class StoreModule { }