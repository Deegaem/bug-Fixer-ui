import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsRoutingComponent } from './comments-routing.component';

describe('CommentsRoutingComponent', () => {
  let component: CommentsRoutingComponent;
  let fixture: ComponentFixture<CommentsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
