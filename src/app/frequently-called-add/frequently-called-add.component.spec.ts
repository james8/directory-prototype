import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlyCalledAddComponent } from './frequently-called-add.component';

describe('FrequentlyCalledAddComponent', () => {
  let component: FrequentlyCalledAddComponent;
  let fixture: ComponentFixture<FrequentlyCalledAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyCalledAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlyCalledAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
