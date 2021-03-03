import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmTypeComponent } from './firearm-type.component';

describe('FirearmTypeComponent', () => {
  let component: FirearmTypeComponent;
  let fixture: ComponentFixture<FirearmTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirearmTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
