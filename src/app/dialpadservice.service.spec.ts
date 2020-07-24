import { TestBed } from '@angular/core/testing';

import { DialpadserviceService } from './dialpadservice.service';

describe('DialpadserviceService', () => {
  let service: DialpadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialpadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
