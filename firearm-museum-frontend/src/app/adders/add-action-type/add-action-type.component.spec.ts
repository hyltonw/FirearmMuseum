import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActionTypeComponent } from './add-action-type.component';

describe('AddActionTypeComponent', () => {
  let component: AddActionTypeComponent;
  let fixture: ComponentFixture<AddActionTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActionTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
