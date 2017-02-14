/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttractionService } from './attraction.service';

describe('AttractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttractionService]
    });
  });

  it('should ...', inject([AttractionService], (service: AttractionService) => {
    expect(service).toBeTruthy();
  }));
});
