import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { UserRoutingModule } from './user-routing.module';
import { UserCenterComponent } from './user-center.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
 
import { UserService } from './user.service';
 
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[
    UserService
  ],  
  declarations: [UserCenterComponent, UserListComponent, UserDetailComponent]
})
export class UserModule { }