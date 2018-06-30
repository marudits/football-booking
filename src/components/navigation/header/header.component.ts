import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = {
    name: "Marudi",
    email: "marudits@gmail.com"
  }

  isAuthenticated: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  signOut(){
    this.isAuthenticated = false;
  }

}
