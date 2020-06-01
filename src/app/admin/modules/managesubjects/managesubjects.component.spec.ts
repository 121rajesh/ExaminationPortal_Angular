import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesubjectsComponent } from './managesubjects.component';

describe('ManagesubjectsComponent', () => {
  let component: ManagesubjectsComponent;
  let fixture: ComponentFixture<ManagesubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
