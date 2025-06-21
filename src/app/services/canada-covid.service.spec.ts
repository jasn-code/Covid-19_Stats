import { TestBed } from '@angular/core/testing';

import { CanadaCovidService } from './canada-covid.service';

describe('CanadaCovidService', () => {
  let service: CanadaCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanadaCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
