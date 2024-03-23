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
  @Input() product: any;

  constructor(private cartService: CartService){}

  handleAddToCart(product: Product){
    this.cartService.addToCart(product);
  }

}
