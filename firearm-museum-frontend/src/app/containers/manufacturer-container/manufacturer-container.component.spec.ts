import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerContainerComponent } from './manufacturer-container.component';

describe('ManufacturerContainerComponent', () => {
  let component: ManufacturerContainerComponent;
  let fixture: ComponentFixture<ManufacturerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
