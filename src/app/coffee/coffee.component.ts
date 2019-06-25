import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  coffees: any [] = [
    {
      id: 1,
      image: '../../assets/img/coffeecup.png',
      name: 'Espresso Wiener Art',
      been: 'whole',
      color: 'brown',
      type: 'robusta',
      country: 'brazillllll',
      price: '20$',
    }, 
    {
      id: 2,
      image: '../../assets/img/coffebeen.png',
      name: 'Espresso Art',
      been: 'whole',
      color: 'dark',
      type: 'arabica',
      country: 'brazil',
      price: '50$',
    }, 

    {
      id: 3,
      image: '../../assets/img/coffeecup.png',
      name: 'Espresso Wiener',
      been: 'whole',
      color: 'brown',
      type: 'robusta',
      country: 'brazillllll',
      price: '20$',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
