import { TestBed } from '@angular/core/testing';

import { RutaConductorService } from './ruta-conductor.service';

describe('RutaConductorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RutaConductorService = TestBed.get(RutaConductorService);
    expect(service).toBeTruthy();
  });
});
