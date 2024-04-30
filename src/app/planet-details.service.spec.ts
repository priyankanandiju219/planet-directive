import { TestBed } from '@angular/core/testing';

import { PlanetDetailsService } from './planet-details.service';

describe('PlanetDetailsService', () => {
  let service: PlanetDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
