import { Component } from '@angular/core';
import {ProductsComponent} from "../products.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent extends ProductsComponent {
  override heading = 'Product List';
}


