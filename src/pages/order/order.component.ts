import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Data
import { SLOT_HOURS, PITCH } from '../../utils/data/form';

// Service
import { SharedData } from '../../utils/service/shared-data';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  slotHours = SLOT_HOURS;
  pitch = PITCH;
  form = {
    date: null,
    time: null,
    place: null,
    description: null
  }
  constructor(
    private router: Router,
    private sharedData: SharedData
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form);
    let schedule = this.sharedData.getData('schedule');
    let newItem = Object.assign({}, this.form, 
      { name: "Marudi" }, 
      { id: (new Date()).getTime().toString()}
    );
    console.log('newItem: ', newItem);
    
    schedule.push(newItem);

    this.sharedData.setData('schedule', schedule);
    // this.router.navigate(['/booking']);
  }

}
