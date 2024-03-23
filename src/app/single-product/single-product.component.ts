import { Product } from './../models/product';
import { ProductsService } from './../services/products.service';
import { Component, Input } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RatingComponent, CounterComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  // products: Array<Product> = productcsJson;
  requestedProduct: any;
  @Input() id?:string;


  constructor(private productsService: ProductsService){}

  ngOnInit(){
    const id = Number(this.id);
    this.productsService.getSingleProduct(id).subscribe((res) => this.requestedProduct = res);
    // this.requestedProduct = this.products.find((product: Product) => product.id === id);

  }



}
