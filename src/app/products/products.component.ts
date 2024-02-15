import { Component, EventEmitter, Input, Output, Injector } from '@angular/core';
import { ProductService } from '../service/product.service'; // Adjusted import path
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-product-base',
  template: '' 
  //templateUrl: './product.component.html'
})
export class ProductsComponent {
  @Input() products: Product[] = [];
  @Output() selectProd = new EventEmitter();

  heading = 'Products Grid';
  errorMessage = '';
  productService: ProductService; // Declare productService variable

  constructor(private injector: Injector) {
    // Get instance of ProductService using Injector
    this.productService = this.injector.get(ProductService);
  }

  // Method to fetch products from the API
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        },
        (error: string) => {
          this.errorMessage = error; // Assign the error message to display
        }
      );
  }

  // Method to handle selection of a product
  selectProduct(product: Product): void {
    this.selectProd.emit(product);
  }
}
