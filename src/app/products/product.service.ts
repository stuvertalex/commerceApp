import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsRoutingModule } from './products-routing.module';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search=new BehaviorSubject("")
  constructor(private httpClient:HttpClient) {}

ViewAllProduct(){
const baseURL ="http://localhost:3000/products/"
return this.httpClient.get(baseURL)
}


ViewProduct(productId:any){
  const baseURL ="http://localhost:3000/products/"+productId
  return this.httpClient.get(baseURL)
  }

  deleteProduct(productId:any){
    const baseURL ="http://localhost:3000/products/"+productId
    return this.httpClient.delete(baseURL)
    }

    addProduct(productId:any){
      const baseURL ="http://localhost:3000/products/"+productId
      return this.httpClient.post(baseURL)
      }
    
  
}

