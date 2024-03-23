import { Component } from '@angular/core';
import productcsJson from '../../assets/products.json';
import { Product } from '../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // products: Array<Product> = productcsJson;
  productsRes: any = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(
      (res) => this.productsRes = res,
      (error) => console.log(error)
    );
  }

}
