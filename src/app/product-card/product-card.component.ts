import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  cart!: any;
  @Input() product: any;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCart().subscribe((res) => this.cart = res);
  }

  handleAddToCart(product: Product){
    this.cartService.addToCart(product);
  }



  existInCart(product: Product){
    // console.log(this.cart.findIndex((item: Product) => item.id === product.id));
    const condition = this.cart.find(function(item:any){
      return item.id === product.id;
    });
    return condition ? true : false;
  }

}
