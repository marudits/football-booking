import { Component, OnInit } from '@angular/core';

// Interface
import Schedule from '../../utils/interface/schedule';

// Service
import { SharedData } from '../../utils/service/shared-data';

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

  constructor(
    private sharedData: SharedData
  ) { }

  ngOnInit() {
    this.getBookingList();
  }

  getBookingList(){
    let schedule = this.sharedData.getData('schedule');
    this.bookingList = schedule.filter(x => x.name === this.user.name);
    console.log(this.bookingList);
  }

}
