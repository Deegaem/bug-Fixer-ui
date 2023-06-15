import { Component, OnInit } from '@angular/core';
import { Account } from '../../../core/data-access/account';
import { AccountsService } from '../../../core/data-access/accounts.service';
import { Router } from '@angular/router';
import { Bug } from '../../data-access/bug';
import { BugsService } from 'src/app/core/data-access/bugs.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  bugs: Bug[] = [];
  account!: Account;
  constructor(private bugsService: BugsService, private accountsService: AccountsService, private router: Router,) { }

  ngOnInit(): void {
    this.bugsService.getBugs().subscribe((bugs: Bug[]) => {
      this.bugs = bugs;
    }
    );
  }
  addBug() {
    this.router.navigate(['bugs-routing/add']);
  }

  showAccountInfo(account_id: number) {
    this.accountsService.getAccount(account_id).subscribe((account: Account) => {
      this.account = account;
    });
  }

  public removeBugfun(_bug: any) {
    console.log("from removebugfun on bugs component");
    this.bugs = this.bugs.filter((bug) => { return bug.bug_id != _bug.bug_id });
  }

}
