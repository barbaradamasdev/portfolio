import { TestBed } from '@angular/core/testing';

import { AboutTextService } from './about-text.service';

describe('AboutTextService', () => {
  let service: AboutTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
