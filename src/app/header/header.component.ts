import { Component, OnInit } from '@angular/core';
import { AllcoffeeService } from '../allcoffee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  subscription;
  currentCount;
  showTea: boolean = false;
  showCoffee: boolean = false;
  showSnack: boolean = false;
  showPresent: boolean = false;
  showAbout: boolean = false;
  showReviews: boolean = false;
  showLang: boolean = false;


  constructor(
    private cardService: AllcoffeeService
  ) { }

  ngOnInit() {
    this.subscription = this.cardService.getCount().subscribe(
      (res) => {
        this.currentCount = res.value;
      },
      (err) => {
        console.error(`An error occurred: ${err.message}`);
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
