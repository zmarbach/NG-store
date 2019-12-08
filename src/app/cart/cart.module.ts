import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from "./components";

import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [
    components.CartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
