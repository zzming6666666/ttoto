import { TestBed, inject } from '@angular/core/testing';

import { TtotoLibService } from './ttoto-lib.service';

describe('TtotoLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TtotoLibService]
    });
  });

  it('should be created', inject([TtotoLibService], (service: TtotoLibService) => {
    expect(service).toBeTruthy();
  }));
});
