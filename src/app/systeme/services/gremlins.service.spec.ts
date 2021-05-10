import { TestBed } from '@angular/core/testing';

import { GremlinsService } from './gremlins.service';

describe('GremlinsService', () => {
  let service: GremlinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GremlinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
