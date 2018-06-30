import { Component, OnInit } from '@angular/core';

// utils
import { SCHEDULE_LIST } from '../../utils/data/schedule';
import Schedule from '../../utils/interface/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleList: Schedule[];

  constructor() { }

  ngOnInit() {
    this.getScheduleList();
  }

  getScheduleList(){
    this.scheduleList = SCHEDULE_LIST;
  }

}
