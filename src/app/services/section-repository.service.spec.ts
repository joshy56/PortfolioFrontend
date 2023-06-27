import { TestBed } from '@angular/core/testing';

import { SectionRepositoryService } from './section-repository.service';

describe('SectionRepositoryService', () => {
  let service: SectionRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
