import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart!: any;
  constructor(private cartService: CartService){}


  ngOnInit(){
    // console.log(this.cartService.getCart());
    this.cart = this.cartService.getCart().subscribe((res) => this.cart = res);
    // console.log(this.cart);
  }

  deleteFromCart(item: Product){
    console.log(item);
    this.cartService.removeFromCart(item);
  }
}


