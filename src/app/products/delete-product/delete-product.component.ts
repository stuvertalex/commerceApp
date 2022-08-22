import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId:any;

  constructor(private activeRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router) { }


  ngOnInit(): void {
    this.activeRoute.params.subscribe((data:any)=> {
      this.productId = data['id']
      })
      this.productService.deleteProduct(this.productId).subscribe((item:any)=>{  
        alert('Product sucessfully deleted')
        this.router.navigateByUrl('products')  
      })
      
}
}
