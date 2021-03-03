import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTypeContainerComponent } from './action-type-container.component';

describe('ActionTypeContainerComponent', () => {
  let component: ActionTypeContainerComponent;
  let fixture: ComponentFixture<ActionTypeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionTypeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTypeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
