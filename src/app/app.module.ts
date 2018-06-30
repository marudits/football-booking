import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/navigation/header/header.component';
import { FooterComponent } from '../components/navigation/footer/footer.component';

// Library
import { MaterializeModule } from 'angular2-materialize';

// Modules
import { ScheduleModule } from '../pages/schedule/schedule.module';
import { BookingModule } from '../pages/booking/booking.module';
import { AuthModule } from '../pages/auth/auth.module';

// Routing
import { AppRoutingModule } from '../utils/data/routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    ScheduleModule,
    BookingModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
