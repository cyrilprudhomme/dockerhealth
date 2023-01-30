import {TestBed} from '@angular/core/testing';

import {DockerapiService} from './dockerapi.service';

describe('DockerapiService', () => {
  let service: DockerapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockerapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
