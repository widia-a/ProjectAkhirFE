import { TestBed } from '@angular/core/testing';

import { KontrakService } from './kontrak.service';

describe('KontrakService', () => {
  let service: KontrakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontrakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
