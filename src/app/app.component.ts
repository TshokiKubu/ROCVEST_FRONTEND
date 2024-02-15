import { Component } from '@angular/core';
import {Product} from "./products/interfaces/product.interface";


// Dummmy data unrelated to shop
const products = [
  {
    "id": 2,
    "title": "PEGASUS 33 Running Shoes For Men",
    "image": "https://i.pinimg.com/originals/43/40/8e/43408ee5a8d234752ecf80bbc3832e65.jpg",
    "price": 59.99,
    "shortDesc": "SPORTS SHOES",
    "quantity": 51,
    "category": "Shoes"
  },
  {
    "id": 3,
    "title": "MEN'S ADIDAS RUNNING KALUS SHOES",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrEqFHfSbs6rUzcYnN_PcnS_D2JLXusKMVFk4Y8N_tn3hJgNIf",
    "price": 39.99,
    "shortDesc": "SPORTS SHOES",
    "quantity": 69,
    "category": "Shoes"
  },
  {
    "id": 6,
    "title": "PEGASUS 33 Running Shoes For Men",
    "image": "https://i.pinimg.com/originals/43/40/8e/43408ee5a8d234752ecf80bbc3832e65.jpg",
    "price": 59.99,
    "shortDesc": "SPORTS SHOES",
    "quantity": 1,
    "category": "Shoes"
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  showList = true;
  myProducts: Product[] = products;

  toggleView() {
    this.showList = !this.showList;
  }

  logProduct(product: Product) {
    console.log(product);
  }
}
