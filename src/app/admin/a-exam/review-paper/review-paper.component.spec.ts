import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPaperComponent } from './review-paper.component';

describe('ReviewPaperComponent', () => {
  let component: ReviewPaperComponent;
  let fixture: ComponentFixture<ReviewPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
