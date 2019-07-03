import { Component, OnInit } from '@angular/core';
import { AllcoffeeService } from '../allcoffee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showTea: boolean = false;
  showCoffee: boolean = false;
  showSnack: boolean = false;
  showPresent: boolean = false;
  showAbout: boolean = false;
  showReviews: boolean = false;
  showLang: boolean = false;

  countLike;
  countCart;
  subForLike;
  subForCart;

  constructor(private allCoffee: AllcoffeeService) { }

  lat: number = 51.678418;
  lng: number = 7.809007;

  ngOnInit() {
    this.subForLike = this.allCoffee.getCountLike().subscribe(
      (res) => {
        this.countLike = res.value;
      }
    );

    this.subForCart = this.allCoffee.getCountCart().subscribe(
      (res) => {
        this.countCart = res.value;
      }
    );
  }

  showTeaBlock() {
    this.showTea = !this.showTea;
  }

  showCoffeeBlock() {
    this.showCoffee = !this.showCoffee;
  }

  showSnackBlock() {
    this.showSnack = !this.showSnack;
  }
  
  showPresentBlock() {
    this.showPresent = !this.showPresent;
  }

}
