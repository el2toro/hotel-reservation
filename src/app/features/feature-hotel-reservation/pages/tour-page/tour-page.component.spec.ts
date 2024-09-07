/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TourPageComponent } from './tour-page.component';

describe('TourPageComponent', () => {
  let component: TourPageComponent;
  let fixture: ComponentFixture<TourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
