/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AvalabilitySectionComponent } from './avalability-section.component';

describe('AvalabilitySectionComponent', () => {
  let component: AvalabilitySectionComponent;
  let fixture: ComponentFixture<AvalabilitySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalabilitySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalabilitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
