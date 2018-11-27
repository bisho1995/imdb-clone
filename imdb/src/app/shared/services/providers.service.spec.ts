import { TestBed, inject } from "@angular/core/testing";

import { ProducersService } from "./producers.service";

describe("ProvidersService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducersService]
    });
  });

  it("should be created", inject(
    [ProducersService],
    (service: ProducersService) => {
      expect(service).toBeTruthy();
    }
  ));
});
