import { NgModule } from '@angular/core';

// Components
import { OrderComponent } from './order.component';

// Module
import { SharedModule } from '../../utils/module/shared-module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    OrderComponent
  ]
})
export class OrderModule { }
