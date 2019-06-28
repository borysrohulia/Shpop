import { TestBed } from '@angular/core/testing';

import { AllcoffeeService } from './allcoffee.service';

describe('AllcoffeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllcoffeeService = TestBed.get(AllcoffeeService);
    expect(service).toBeTruthy();
  });
});
