import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCtaComponent } from './main-cta.component';

describe('MainCtaComponent', () => {
  let component: MainCtaComponent;
  let fixture: ComponentFixture<MainCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
