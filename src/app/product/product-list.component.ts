import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
import { Product } from './product';
 
import { ProductService } from './product.service';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  public products:Product[] = [];
  public highlightId:any;
 
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router        
  ) { }
 
  ngOnInit() {
    this.products = this.productService.getProducts();
    let params = this.route.snapshot.paramMap;
    if(params.has('id')){
      this.highlightId = params.get('id');
    }
    //console.log(this.products);
    //console.log(this.route);
  }
 
}