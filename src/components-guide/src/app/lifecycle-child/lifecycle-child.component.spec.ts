import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleChildComponent } from './lifecycle-child.component';

describe('LifecycleChildComponent', () => {
  let component: LifecycleChildComponent;
  let fixture: ComponentFixture<LifecycleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
