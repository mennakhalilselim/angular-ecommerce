import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productcsJson from '../../assets/products.json';
import { Product } from '../models/product';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  products: Array<Product> = productcsJson;
  requestedProduct: any;
  @Input() id?:string;


  ngOnInit(){
    console.log(this.id);
    const id = Number(this.id);
    this.requestedProduct = this.products.find((product: Product) => product.id === id);

  }



}
