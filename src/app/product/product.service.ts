import { Injectable } from '@angular/core';
 
import { PRODUCTS } from './mock-products';
 
@Injectable()
export class ProductService {
 
  constructor() { }
 
  getProducts(){
     return PRODUCTS;
  }
 
  getProduct(id:number|string){
    return PRODUCTS.filter(
      function(product,i){    
        return product.id == id ? product : null;
      }
    );
  }
 
}