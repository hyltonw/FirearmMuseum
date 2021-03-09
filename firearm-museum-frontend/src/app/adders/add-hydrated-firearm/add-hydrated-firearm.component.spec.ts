import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHydratedFirearmComponent } from './add-hydrated-firearm.component';

describe('AddHydratedFirearmComponent', () => {
  let component: AddHydratedFirearmComponent;
  let fixture: ComponentFixture<AddHydratedFirearmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHydratedFirearmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHydratedFirearmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
