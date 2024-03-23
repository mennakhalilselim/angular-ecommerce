import { CounterService } from './../services/counter.service';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItemsCount!:number;
  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.getCartItemsCount().subscribe((res) => this.cartItemsCount = res);
  }

}
