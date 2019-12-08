import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';

@NgModule({
  declarations: [
    components.BasketComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components.BasketComponent
  ]
})
export class SharedModule { }