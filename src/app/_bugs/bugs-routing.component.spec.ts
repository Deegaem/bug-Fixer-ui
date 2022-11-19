import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsRoutingComponent } from './bugs-routing.component';

describe('BugsRoutingComponent', () => {
  let component: BugsRoutingComponent;
  let fixture: ComponentFixture<BugsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BugsRoutingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
