import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService
  ],   
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
