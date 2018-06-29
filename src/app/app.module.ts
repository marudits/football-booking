import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pages
import { AppComponent } from './app.component';
import { ScheduleComponent } from '../pages/schedule/schedule.component';
import { BookingComponent } from '../pages/booking/booking.component';
import { AuthComponent } from '../pages/auth/auth.component';

// Routing
import { AppRoutingModule } from '../utils/data/routing';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    BookingComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
