import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
// import { UserComponent } from './user/user.component';
=======
import { UserComponent } from './user/user.component';
>>>>>>> fb771c11116584bc49e9d2a7120afa9728790857
// import { ProductComponent } from './product/product.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
 
const appRoutes: Routes = [
<<<<<<< HEAD
  // { path: 'users', component: UserComponent },
=======
  { path: 'users', component: UserComponent },
>>>>>>> fb771c11116584bc49e9d2a7120afa9728790857
  // { path: 'products', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PagenofoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }