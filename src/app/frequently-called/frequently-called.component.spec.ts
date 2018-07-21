import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyCalledComponent } from './frequently-called.component';

describe('FrequentlyCalledComponent', () => {
  let component: FrequentlyCalledComponent;
  let fixture: ComponentFixture<FrequentlyCalledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyCalledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
