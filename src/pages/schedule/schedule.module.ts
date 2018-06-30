import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ScheduleComponent } from './schedule.component';
import { ScheduleItemComponent } from '../../components/schedule/schedule-item/schedule-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleItemComponent
  ]
})
export class ScheduleModule { }
