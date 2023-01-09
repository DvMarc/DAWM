import { TestBed } from '@angular/core/testing';

import { MonsterUriService } from './monster-uri.service';

describe('MonsterUriService', () => {
  let service: MonsterUriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterUriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
