import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveManufacturerComponent } from './remove-manufacturer.component';

describe('RemoveManufacturerComponent', () => {
  let component: RemoveManufacturerComponent;
  let fixture: ComponentFixture<RemoveManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveManufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
