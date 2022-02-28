import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chef2Component } from './chef2.component';

describe('Chef2Component', () => {
  let component: Chef2Component;
  let fixture: ComponentFixture<Chef2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chef2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chef2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
