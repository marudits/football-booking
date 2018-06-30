import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { BookingComponent } from './booking.component';
import { BookingListComponent } from '../../components/booking/booking-list/booking-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookingComponent,
    BookingListComponent
  ]
})
export class BookingModule { }
