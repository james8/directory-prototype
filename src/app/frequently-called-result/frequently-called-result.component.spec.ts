import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyCalledResultComponent } from './frequently-called-result.component';

describe('FrequentlyCalledResultComponent', () => {
  let component: FrequentlyCalledResultComponent;
  let fixture: ComponentFixture<FrequentlyCalledResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyCalledResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyCalledResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
