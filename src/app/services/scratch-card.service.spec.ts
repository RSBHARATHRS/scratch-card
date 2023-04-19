import { TestBed } from '@angular/core/testing';

import { ScratchCardService } from './scratch-card.service';

describe('ScratchCardService', () => {
  let service: ScratchCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScratchCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
