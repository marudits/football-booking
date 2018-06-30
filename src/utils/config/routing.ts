import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Pages
import { AuthComponent } from '../../pages/auth/auth.component';
import { BookingComponent } from '../../pages/booking/booking.component';
import { ScheduleComponent } from '../../pages/schedule/schedule.component';
import { OrderComponent } from '../../pages/order/order.component';

const routes: Routes = [
	{ path: '', component: ScheduleComponent},
    { path: 'auth', component: AuthComponent },
    { path: 'booking', component: BookingComponent },
	{ path: 'schedule', component: ScheduleComponent },
	{ path: 'order', component: OrderComponent },
	{ path: '**', component: AuthComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}