import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AExamComponent } from './a-exam.component';

describe('AExamComponent', () => {
  let component: AExamComponent;
  let fixture: ComponentFixture<AExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
