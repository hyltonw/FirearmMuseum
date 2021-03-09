import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirearmTypeComponent } from './add-firearm-type.component';

describe('AddFirearmTypeComponent', () => {
  let component: AddFirearmTypeComponent;
  let fixture: ComponentFixture<AddFirearmTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFirearmTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirearmTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
