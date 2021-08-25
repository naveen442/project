import { TestBed } from '@angular/core/testing';

import { SanthoshService } from './santhosh.service';

describe('SanthoshService', () => {
  let service: SanthoshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanthoshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
