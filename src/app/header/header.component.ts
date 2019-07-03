import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
