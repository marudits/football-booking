import { Component, OnInit } from '@angular/core';

// utils
import Schedule from '../../utils/interface/schedule';
import { SCHEDULE_LIST } from '../../utils/data/schedule';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingList: Schedule[];
  user = {
    name: "Marudi"
  }

  constructor() { }

  ngOnInit() {
    this.getBookingList();
  }

  getBookingList(){
    this.bookingList = SCHEDULE_LIST.filter(x => x.name === this.user.name);
  }

}
