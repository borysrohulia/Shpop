import { Component, OnInit } from '@angular/core';
import { AllcoffeeService } from '../allcoffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss'],
  providers: [AllcoffeeService]
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
  coffees;

  constructor(private allCoffee: AllcoffeeService) { }

  ngOnInit() {
    this.coffees = this.allCoffee.getCoffees();
  }

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
}
