import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsRoutingComponent } from './accounts-routing.component';

describe('AccountsRoutingComponent', () => {
  let component: AccountsRoutingComponent;
  let fixture: ComponentFixture<AccountsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
