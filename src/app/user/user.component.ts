import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users
  constructor() { }

  ngOnInit() {
    this.users=new FormGroup({
      lastPeriodDate:new FormControl('') 
    })
  }

}
