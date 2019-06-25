import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coffeecart',
  templateUrl: './coffeecart.component.html',
  styleUrls: ['./coffeecart.component.scss']
})
export class CoffeecartComponent implements OnInit, OnDestroy {
  id: number;
  sub;
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
  selectedCoffee = {};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
     this.id = params['id'];
     this.selectedCoffee = this.coffees.find((oneCoffee)=> oneCoffee.id == this.id);
     });
     console.log(this.id);
   }

   ngOnDestroy() {
    this.sub.unsubscribe();
   }
}
