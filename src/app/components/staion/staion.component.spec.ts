import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaionComponent } from './staion.component';

describe('StaionComponent', () => {
  let component: StaionComponent;
  let fixture: ComponentFixture<StaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaionComponent]
    });
    fixture = TestBed.createComponent(StaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
