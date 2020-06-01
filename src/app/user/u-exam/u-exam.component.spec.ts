import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UExamComponent } from './u-exam.component';

describe('UExamComponent', () => {
  let component: UExamComponent;
  let fixture: ComponentFixture<UExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
