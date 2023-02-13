import { TestBed } from '@angular/core/testing';

import { DokPersyaratanService } from './dok-persyaratan.service';

describe('DokPersyaratanService', () => {
  let service: DokPersyaratanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DokPersyaratanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
