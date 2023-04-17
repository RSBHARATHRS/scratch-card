import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleScratchCardComponent } from './simple-scratch-card.component';

describe('SimpleScratchCardComponent', () => {
  let component: SimpleScratchCardComponent;
  let fixture: ComponentFixture<SimpleScratchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleScratchCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleScratchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
