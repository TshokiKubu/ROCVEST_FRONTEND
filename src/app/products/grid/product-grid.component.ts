import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';@Component({
  selector: 'app-products',
  template: ''
})
export class ProductsComponent {
  protected productService: ProductService; 

  constructor(productService: ProductService) {
    this.productService = productService;
  }
}
