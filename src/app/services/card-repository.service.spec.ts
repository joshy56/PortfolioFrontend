import { TestBed } from '@angular/core/testing';

import { CardRepositoryService } from './card-repository.service';

describe('CardRepositoryService', () => {
  let service: CardRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
