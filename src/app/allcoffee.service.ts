import { Injectable } from '@angular/core';
import { ICoffee } from '../app/coffee';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllcoffeeService {
  private initialCount = { value: 0 };
  private countTracker = new BehaviorSubject(this.initialCount);
  
  constructor() { }
  
  getCoffees(): ICoffee[] {
    return [
    {
      id: 1,
      image: '../assets/img/coffeecup.png',
      name: 'Espresso Wiener Art',
      been: 'whole',
      color: 'brown',
      types: 'robusta',
      country: 'brazillllll',
      price: '20$',
    }, 
    {
      id: 2,
      image: '../assets/img/coffebeen.png',
      name: 'Espresso Art',
      been: 'whole',
      color: 'dark',
      types: 'arabica',
      country: 'brazil',
      price: '50$',
    }, 

    {
      id: 3,
      image: '../assets/img/coffeecup.png',
      name: 'Espresso Wiener',
      been: 'whole',
      color: 'brown',
      types: 'robusta',
      country: 'brazillllll',
      price: '20$',
    }
  ];
  }
  
  getCount() {
    return this.countTracker.asObservable();
  }
 
  setCount(val: number): void {
    this.countTracker.next({value: val});
  }
 
  resetCount(): void {
    this.countTracker.next(this.initialCount);
  }
}
