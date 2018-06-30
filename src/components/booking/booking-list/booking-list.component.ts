import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  @Input() booking;
  constructor() { }

  ngOnInit() {
  }

}
