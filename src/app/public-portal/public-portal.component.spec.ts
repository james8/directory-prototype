import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPortalComponent } from './public-portal.component';

describe('PublicPortalComponent', () => {
  let component: PublicPortalComponent;
  let fixture: ComponentFixture<PublicPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
