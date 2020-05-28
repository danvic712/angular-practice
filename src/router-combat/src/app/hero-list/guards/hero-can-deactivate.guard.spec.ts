import { TestBed } from '@angular/core/testing';

import { HeroCanDeactivateGuard } from './hero-can-deactivate.guard';

describe('HeroCanDeactivateGuard', () => {
  let guard: HeroCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
