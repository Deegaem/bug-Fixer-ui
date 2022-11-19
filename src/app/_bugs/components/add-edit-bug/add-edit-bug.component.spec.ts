import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBugComponent } from './add-edit-bug.component';

describe('AddEditBugComponent', () => {
  let component: AddEditBugComponent;
  let fixture: ComponentFixture<AddEditBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
