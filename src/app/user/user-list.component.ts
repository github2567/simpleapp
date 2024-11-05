import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
import { User } from './user';
 
import { UserService } from './user.service';
 
@Component({
//  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 
  public users:User[]=[];
  public highlightId:any;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router        
  ) { }
  
  ngOnInit() {
    this.users = this.userService.getUsers();
    let params = this.route.snapshot.paramMap;
    if(params.has('id')){
      this.highlightId = params.get('id');
    }
  }
 
}