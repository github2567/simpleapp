import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { ProductComponent } from './product/product.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
 
const appRoutes: Routes = [
  // { path: 'users', component: UserComponent },
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