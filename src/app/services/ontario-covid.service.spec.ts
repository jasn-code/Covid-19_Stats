import { TestBed } from '@angular/core/testing';

import { OntarioCovidService } from './ontario-covid.service';

describe('OntarioCovidService', () => {
  let service: OntarioCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OntarioCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
