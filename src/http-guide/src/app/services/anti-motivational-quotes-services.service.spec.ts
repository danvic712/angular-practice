import { TestBed } from '@angular/core/testing';

import { AntiMotivationalQuotesServicesService } from './anti-motivational-quotes-services.service';

describe('AntiMotivationalQuotesServicesService', () => {
  let service: AntiMotivationalQuotesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntiMotivationalQuotesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
