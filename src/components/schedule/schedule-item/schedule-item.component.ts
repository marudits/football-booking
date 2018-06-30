import { Component, OnInit, Input } from '@angular/core';

// interface
import Schedule from '../../../utils/interface/schedule';

@Component({
  selector: 'schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  @Input() schedule: Schedule;
  @Input() key: String;

  constructor() { }

  ngOnInit() {
  }

}


