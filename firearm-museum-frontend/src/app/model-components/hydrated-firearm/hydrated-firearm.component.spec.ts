import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydratedFirearmComponent } from './hydrated-firearm.component';

describe('HydratedFirearmComponent', () => {
  let component: HydratedFirearmComponent;
  let fixture: ComponentFixture<HydratedFirearmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydratedFirearmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydratedFirearmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
