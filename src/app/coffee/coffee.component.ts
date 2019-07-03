import { Component, OnInit } from '@angular/core';
import { AllcoffeeService } from '../allcoffee.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  formats: any [] = [
    'Whole-bean', 'Ground', 'Instant', 'Specialty', 'Decaf', 'Freshly-roasted', 'Capsules'
  ];

  roastingDegrees: any [] = [
    'Light', 'Medium', 'Dark'
  ];

  coffeeType = [
    'Arabica 100%', 'Robusta 100%', 'Arabica 90% Robusta 10%', 'Arabica 80% Robusta 20%',
    'Arabica 70% Robusta 30%', 'Arabica 60% Robusta 40%', 'Arabica 50% Robusta 50%', 'Arabica 30% Robusta 70%',
    'Arabica 20% Robusta 80%'
  ];

  producingCountryes = [
    'Brazil', 'Colombia', 'Ethiopia', 'Guatemala'
  ];

  offers = [
    'New', 'Sale'
  ]

  statusFormat: boolean = false;
  statusDegree: boolean = false;
  statusType: boolean = false;
  statusCountry: boolean = false;
  statusOffer: boolean = false;
  counterBlock: boolean = false;

  subscriptionCart;   // for => countCart
  subscriptionLike;   // for => countLike
  countLike;          // value of countLike in real time
  countCart;          // value of countCart in real time
  coffees = [];            // array with coffee from service

  subCart;
  viewCart = [];      // cart with goods in real time in service  
  modCart;            // help var for send data to service 

  constructor(private allCoffee: AllcoffeeService) { }

  ngOnInit() {
    this.coffees = this.allCoffee.getCoffees();     
    
    this.subscriptionCart = this.allCoffee.getCountCart().subscribe(
      (res) => {
        this.countCart = res.value;
      });

      this.subscriptionLike = this.allCoffee.getCountLike().subscribe(
        (res) => {
          this.countLike = res.value;
        });

        this.subCart = this.allCoffee.getCart().subscribe(
          (res) => {
            this.viewCart = res;
          }
        );
  }

  
      addData(item)  {                              //add coffee to cart
        this.modCart = this.viewCart.push(this.coffees[item-1]);
        this.allCoffee.addCart(this.modCart);
      }
          
      

  
      plusLike() {                                  
        this.allCoffee.setCountLike(this.countLike + 1);
      }

      minusLike() {
        if(this.countLike > 0) {
          this.allCoffee.setCountLike(this.countLike - 1);
        }
      }

      plusCart() {
        this.allCoffee.setCountCart(this.countCart + 1);
      }

      minusCart() {
        if(this.countCart > 0) {
          this.allCoffee.setCountCart(this.countCart - 1);
        }
      }

      // slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};
      

      showFormat() {
        this.statusFormat = !this.statusFormat;
      }

      showDegree() {
        this.statusDegree = !this.statusDegree;
      }

      showType() {
        this.statusType = !this.statusType;
      }

      showCountry() {
        this.statusCountry = !this.statusCountry;
      }

      showOffer() {
        this.statusOffer = !this.statusOffer;
      }

      showAddCount() {
        this.counterBlock = !this.counterBlock;
      }
  
}
