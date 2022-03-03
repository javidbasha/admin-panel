import { TestBed } from '@angular/core/testing';

import { UpdatehisService } from './updatehis.service';

describe('UpdatehisService', () => {
  let service: UpdatehisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatehisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
