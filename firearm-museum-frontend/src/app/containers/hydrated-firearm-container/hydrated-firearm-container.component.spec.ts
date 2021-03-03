import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydratedFirearmContainerComponent } from './hydrated-firearm-container.component';

describe('HydratedFirearmContainerComponent', () => {
  let component: HydratedFirearmContainerComponent;
  let fixture: ComponentFixture<HydratedFirearmContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HydratedFirearmContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HydratedFirearmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
