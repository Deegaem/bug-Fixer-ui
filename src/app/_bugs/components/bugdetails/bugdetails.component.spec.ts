import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugdetailsComponent } from './bugdetails.component';

describe('BugdetailsComponent', () => {
  let component: BugdetailsComponent;
  let fixture: ComponentFixture<BugdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
