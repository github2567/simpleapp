import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
// import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

/* 
const appRoutes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'products', component: ProductComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PagenofoundComponent }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    HomeComponent,
    UserComponent,
    // ProductComponent,
    PagenofoundComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: false } // <-- debugging purposes only set true
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
