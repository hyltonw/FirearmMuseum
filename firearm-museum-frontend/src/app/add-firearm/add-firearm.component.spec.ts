import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirearmComponent } from './add-firearm.component';

describe('AddFirearmComponent', () => {
  let component: AddFirearmComponent;
  let fixture: ComponentFixture<AddFirearmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFirearmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFirearmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
