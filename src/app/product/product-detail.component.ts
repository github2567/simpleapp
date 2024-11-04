import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 
import { Product } from './product';
 
import { ProductService } from './product.service';
 
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 
  public products:Product[] = [];
  private id:any;
   
  constructor(
    private productService:ProductService,
    private route: ActivatedRoute,
    private router: Router        
  ) { }
 
  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    if(params.has('id')){
      this.id = params.get('id');
    }    
    this.products = this.productService.getProduct(this.id);
    // console.log(this.id);
    // console.log(this.products);
    // console.log(this.route);
  }
 
  gotoProducts() {
    this.router.navigate(['/products']);
  }  
 
  gotoProducts2(){
    this.router.navigate(['/products',{id:this.id,more:'test'}]);
    // this.router.navigate(['/products',{id:this.id,wow:'xxx'}]);
    // this.router.navigate(['/products',{id:this.id}]);
    // var testid: number = Number(this.id) + 1;
    // var testid = this.id + 1;
    // this.router.navigate(['/products',{id:testid}]);
  }
}