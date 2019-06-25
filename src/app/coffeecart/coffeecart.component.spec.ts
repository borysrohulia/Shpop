import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeecartComponent } from './coffeecart.component';

describe('CoffeecartComponent', () => {
  let component: CoffeecartComponent;
  let fixture: ComponentFixture<CoffeecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
