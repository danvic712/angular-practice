import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiMotivationalQuotesComponent } from './anti-motivational-quotes.component';

describe('AntiMotivationalQuotesComponent', () => {
  let component: AntiMotivationalQuotesComponent;
  let fixture: ComponentFixture<AntiMotivationalQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiMotivationalQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiMotivationalQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
