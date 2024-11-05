import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { UserCenterComponent } from './user-center.component';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';
 
const userRoutes: Routes = [
  {
    path:'users',
    component:UserCenterComponent,
    children:[
      {
        path: '',
        component: UserListComponent
      },
      {
        path:':id',
        component:UserDetailComponent
      }
 
    ]
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }