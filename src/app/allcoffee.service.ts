import { Injectable } from '@angular/core';
import { ICoffee } from '../app/coffee';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllcoffeeService {

  private sumLike = { value: 0 };
  private countLike = new BehaviorSubject(this.sumLike);

  private sumCart = { value: 0 };
  private countCart = new BehaviorSubject(this.sumCart);

  
  
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
      counterGoods: 0,
      counterLike: 0
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
      counterGoods: 0,
      counterLike: 0
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
      counterGoods: 0,
      counterLike: 0
    }
  ];
  }

  getCountLike() {
    return this.countLike.asObservable();
  }

  getCountCart() {
    return this.countCart.asObservable();
  }

  setCountLike(val: number): void {
    this.countLike.next({value: val});
  }

  setCountCart(val: number): void {
    this.countCart.next({value: val});
  }

  resetCountCart(): void {
    this.countCart.next(this.sumCart);
  }

  resetCountLike(): void {
    this.countLike.next(this.sumLike);
  }

  constructor() { }
}
