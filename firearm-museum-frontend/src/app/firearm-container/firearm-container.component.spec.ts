import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirearmContainerComponent } from './firearm-container.component';

describe('FirearmContainerComponent', () => {
  let component: FirearmContainerComponent;
  let fixture: ComponentFixture<FirearmContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirearmContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirearmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
