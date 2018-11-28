import { TestBed, inject } from '@angular/core/testing';

import { AddProducerService } from './add-producer.service';

describe('AddProducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProducerService]
    });
  });

  it('should be created', inject([AddProducerService], (service: AddProducerService) => {
    expect(service).toBeTruthy();
  }));
});
