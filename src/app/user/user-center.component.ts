import { Component, OnInit } from '@angular/core';
 
@Component({
//  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.css']
})
export class UserCenterComponent implements OnInit {
  public title:string='';
   
  constructor() { }
 
  ngOnInit() {
    this.title = 'User Child Routing';
  }
 
}