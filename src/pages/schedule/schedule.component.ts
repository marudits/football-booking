import { Component, OnInit } from '@angular/core';

// Data
import { SCHEDULE_LIST } from '../../utils/data/schedule';

// Interface
import Schedule from '../../utils/interface/schedule';

// Service
import { SharedData } from '../../utils/service/shared-data';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleList: Schedule[];

  constructor(
    private sharedData: SharedData
  ) { }

  ngOnInit() {
    this.getScheduleList();
  }

  getScheduleList(){
    this.scheduleList = this.sharedData.getData('schedule');
  }

}
