import { TestBed } from '@angular/core/testing';

import { NgxDynamicHeadingsService } from './ngx-dynamic-headings.service';

describe('NgxDynamicHeadingsService', () => {
  let service: NgxDynamicHeadingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicHeadingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
