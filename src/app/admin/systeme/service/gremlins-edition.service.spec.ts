import { TestBed } from '@angular/core/testing';

import { GremlinsEditionService } from './gremlins-edition.service';

describe('GremlinsEditionService', () => {
  let service: GremlinsEditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GremlinsEditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
