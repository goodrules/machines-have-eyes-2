import { TestBed, inject } from '@angular/core/testing';

import { AnalyzePhotoService } from './analyze-photo.service';

describe('AnalyzePhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnalyzePhotoService]
    });
  });

  it('should be created', inject([AnalyzePhotoService], (service: AnalyzePhotoService) => {
    expect(service).toBeTruthy();
  }));
});
