import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmComponent } from './firearm.component';

describe('FirearmComponent', () => {
  let component: FirearmComponent;
  let fixture: ComponentFixture<FirearmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirearmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
