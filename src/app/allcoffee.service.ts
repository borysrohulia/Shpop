import { Injectable } from '@angular/core';
import { ICoffee } from '../app/coffee';

@Injectable({
  providedIn: 'root'
})
export class AllcoffeeService {
  
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

  constructor() { }
}
