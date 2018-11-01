import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsSvgComponent } from './dots-svg.component';

describe('DotsSvgComponent', () => {
  let component: DotsSvgComponent;
  let fixture: ComponentFixture<DotsSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotsSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
