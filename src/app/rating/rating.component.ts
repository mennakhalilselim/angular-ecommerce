import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating!:number;
  stars:Array<number> = [];

  ngOnInit(){
    this.getStars(this.rating);
  }

  getStars(rating: number): void {
    for (let i = 0; i < Math.floor(rating); i++) {
      this.stars.push(1);
    }
    if(Math.round(rating) - Math.floor(rating) !== 0){
      this.stars.push(0.5);
    }
    this.stars = [...this.stars, ...Array(5 - this.stars.length).fill(0)];
  }
}

