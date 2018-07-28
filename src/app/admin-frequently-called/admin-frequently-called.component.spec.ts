import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFrequentlyCalledComponent } from './admin-frequently-called.component';

describe('AdminFrequentlyCalledComponent', () => {
  let component: AdminFrequentlyCalledComponent;
  let fixture: ComponentFixture<AdminFrequentlyCalledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFrequentlyCalledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFrequentlyCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
