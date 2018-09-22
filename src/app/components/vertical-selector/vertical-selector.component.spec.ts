import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSelectorComponent } from './vertical-selector.component';

describe('VerticalSelectorComponent', () => {
  let component: VerticalSelectorComponent;
  let fixture: ComponentFixture<VerticalSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
