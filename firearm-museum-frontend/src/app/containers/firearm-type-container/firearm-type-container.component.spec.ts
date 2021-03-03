import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmTypeContainerComponent } from './firearm-type-container.component';

describe('FirearmTypeContainerComponent', () => {
  let component: FirearmTypeContainerComponent;
  let fixture: ComponentFixture<FirearmTypeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmTypeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirearmTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
