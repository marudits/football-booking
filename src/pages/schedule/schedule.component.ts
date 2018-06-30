import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleList = [
    {
      id: 1,
      name: 'Marudi',
      time: {
        start: '07:00',
        end: '08:00'
      },
      date: '20-07-2018',
      place: 'Field Eco 1'
    }, {
      id: '2',
      name: 'Tri',
      time: {
        start: '08:00',
        end: '09:00'
      },
      date: '20-07-2018',
      place: 'Field Eco 1'
    }, {
      id: '3',
      name: 'Subakti',
      time: {
        start: '07:00',
        end: '08:00'
      },
      date: '20-07-2018',
      place: 'Field Premium 1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
