import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})

export class ViewAllProductsComponent implements OnInit {
productList:any;
filterCategory:any;
searchKey:any="";
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.ViewAllProduct().subscribe(data=>{
      console.log(data);
      
      this.productList=data
    })

this.productService.search.subscribe((value:any)=>
this.searchKey=value)


  }
  filter(category:any){
    this.filter=this.productList
    .filter((item:any)=>{
      if(item.categoryId==category||category==''){
        return item
      }
    
    
  })
  }

}