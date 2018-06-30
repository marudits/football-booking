import { NgModule }            from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/navigation/header/header.component';
import { FooterComponent } from '../components/navigation/footer/footer.component';

// Modules
import { ScheduleModule } from '../pages/schedule/schedule.module';
import { BookingModule } from '../pages/booking/booking.module';
import { AuthModule } from '../pages/auth/auth.module';
import { OrderModule } from '../pages/order/order.module';
import { SharedModule } from '../utils/module/shared-module';

// Routing
import { AppRoutingModule } from '../utils/config/routing';

// Service
import { SharedData } from '../utils/service/shared-data';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    BookingModule,
    AuthModule,
    OrderModule,
    SharedModule
  ],
  providers: [
    SharedData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
