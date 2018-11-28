import { TestBed, inject } from '@angular/core/testing';

import { AddActorService } from './add-actor.service';

describe('AddActorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddActorService]
    });
  });

  it('should be created', inject([AddActorService], (service: AddActorService) => {
    expect(service).toBeTruthy();
  }));
});
