import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeecartComponent } from './coffeecart/coffeecart.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ConverToSpacesPipe } from '../app/convert-to-space.pipe';
import { UpperCase } from '../app/upper-case.pipe';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ConverToSpacesPipe,
    UpperCase,
    CoffeeComponent,
    CoffeecartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBglJhtz7FrIC_5jxDn-ID7lj0pjkC39fs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
