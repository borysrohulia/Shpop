import { Component, OnInit } from '@angular/core';
import { AllcoffeeService } from '../allcoffee.service';

// https://pastebin.com/zreqb7jG    supervagno!!!!!!!!!!!!!

/* ngOnInit() {
    this.subscription = this.cardService.getCount().subscribe(
      (res) => {
        this.currentCount = res.value;
      },
      (err) => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
    this.warmApi.getSubscriptions().catch(error => {
      if (error.status === 403) {
        this.hasNoSubscriptions = true;
        if (!environment.isApp) $('[data-toggle="tooltip"]').tooltip('show');
      }
    });
  } */ 

  // supervagno!!!!!!!!!!!!!

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
  count;
  countLike;
  countCart;
  subForLike;
  subForCart;

  constructor(private allCoffee: AllcoffeeService) { }

  ngOnInit() {
    // this.count = this.allCoffee.getCoffees();
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
