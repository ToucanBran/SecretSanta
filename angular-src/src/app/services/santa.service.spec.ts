import { TestBed, inject } from '@angular/core/testing';

import { SantaService } from './santa.service';

describe('SantaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SantaService]
    });
  });

  it('should be created', inject([SantaService], (service: SantaService) => {
    expect(service).toBeTruthy();
  }));
});
