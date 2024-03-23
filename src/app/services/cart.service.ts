import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Array<Product>>([]);
  private cartItemsCount = new BehaviorSubject<number>(0);

  constructor() { }

  getCart(){
    return this.cart.asObservable();
  }

  getCartItemsCount() {
    return this.cartItemsCount.asObservable();
  }

  addToCart(item: Product){
    const updatedCart = [...this.cart.getValue(), item];
    console.log(updatedCart);
    this.cart.next(updatedCart);
    this.updateCartItemsCount(updatedCart);
  }

  removeFromCart(item: Product) {
    const updatedCart = this.cart.getValue().filter(cartItem => cartItem.id !== item.id);
    this.cart.next(updatedCart);
    this.updateCartItemsCount(updatedCart);
  }

  private updateCartItemsCount(cartItems: Product[]) {
    this.cartItemsCount.next(cartItems.length);
  }

}


