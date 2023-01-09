import { TestBed } from '@angular/core/testing';

import { QueryMonsterService } from './query-monster.service';

describe('QueryMonsterService', () => {
  let service: QueryMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryMonsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
