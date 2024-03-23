import { Component, Input } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter!: number;

  constructor(private counterService: CounterService){

  }

  ngOnInit(){
    this.counterService.getCounter().subscribe((res) => this.counter = res);
  }

  decreaseCounter(){
    this.counterService.setCounter(this.counter - 1);
  }

  increaseCounter(){
    this.counterService.setCounter(this.counter + 1);
  }

}