import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
import { User } from './user';
 
import { UserService } from './user.service';
 
@Component({
//  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
 
  public users:User[]=[];
  public id:any;
    
  constructor(
    private userService:UserService,
    private route: ActivatedRoute,
    private router: Router        
  ) { }
  
  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    if(params.has('id')){
      this.id = params.get('id');
    }    
    this.users = this.userService.getUser(this.id);
  }
  
  gotoUsers() {
    this.router.navigate(['/users']);
  }  
  
  gotoUsers2(){
    this.router.navigate(['/users',{id:this.id,more:'test'}]);
  }
 
}