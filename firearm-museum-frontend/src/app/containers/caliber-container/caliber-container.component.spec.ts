import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliberContainerComponent } from './caliber-container.component';

describe('CaliberContainerComponent', () => {
  let component: CaliberContainerComponent;
  let fixture: ComponentFixture<CaliberContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaliberContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliberContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
