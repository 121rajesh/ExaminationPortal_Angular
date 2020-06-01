import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AManageProfileComponent } from './a-manage-profile.component';

describe('AManageProfileComponent', () => {
  let component: AManageProfileComponent;
  let fixture: ComponentFixture<AManageProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AManageProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AManageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
