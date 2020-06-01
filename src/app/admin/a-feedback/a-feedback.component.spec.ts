import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AFeedbackComponent } from './a-feedback.component';

describe('AFeedbackComponent', () => {
  let component: AFeedbackComponent;
  let fixture: ComponentFixture<AFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
