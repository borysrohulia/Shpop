import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeComponent } from './coffee/coffee.component';
import { MainComponent } from './main/main.component';
import { CoffeecartComponent } from './coffeecart/coffeecart.component';

const routes: Routes = [
  { path:  '', component:  MainComponent},
  { path:  'coffee', component:  CoffeeComponent},
  { path: 'coffeecart/:id', component: CoffeecartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
