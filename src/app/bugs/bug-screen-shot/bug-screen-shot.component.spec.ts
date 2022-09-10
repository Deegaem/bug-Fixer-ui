import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugScreenShotComponent } from './bug-screen-shot.component';

describe('BugScreenShotComponent', () => {
  let component: BugScreenShotComponent;
  let fixture: ComponentFixture<BugScreenShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugScreenShotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugScreenShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
