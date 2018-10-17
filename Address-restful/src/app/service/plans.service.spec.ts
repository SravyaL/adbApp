import { TestBed, inject } from '@angular/core/testing';

import { ServicePlans } from './plans.service';

describe('ServicePlans', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePlans]
    });
  });

  it('should be created', inject([ServicePlans], (service: ServicePlans) => {
    expect(service).toBeTruthy();
  }));
});
