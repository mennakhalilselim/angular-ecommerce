import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CounterComponent, AsyncPipe, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: any;
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cart = this.cartService.getCart();
  }

  deleteFromCart(item: Product){
    this.cartService.removeFromCart(item);
  }

}


