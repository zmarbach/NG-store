import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';

import * as components from './components';
import { BasketComponent } from '../shared/components';

@NgModule({
  declarations: [
    components.ProductListComponent,
    components.ProductDetailsComponent,
    components.ReviewListComponent,
    components.ReviewFormComponent,
    BasketComponent
    
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }