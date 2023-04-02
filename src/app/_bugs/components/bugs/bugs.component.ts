import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Account } from '../../../core/data-access/account';
import { AccountsService } from '../../../core/data-access/accounts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bug } from '../../data-access/bug';
import { BugsService } from 'src/app/core/data-access/bugs.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  bugs: Bug[] = [];
  test: any[] = [{ "name": "John", "age": 30 },
  { "name": "John", "age": 30 },
  { "name": "John", "age": 30 },
  { "name": "John", "age": 30 },
  { "name": "John", "age": 30 }
  ]
  account!: Account;
  constructor(private bugsService: BugsService, private accountsService: AccountsService, private router: Router,) { }

  ngOnInit(): void {
    /*   this.bugsService.getBugs().subscribe((bugs: Bug[]) => {
        this.bugs = bugs;
        console.log("bugs: ", bugs)
      }
      ); */
  }
  addBug() {
    this.router.navigate(['bugs-routing/add']);
  }

  logout() {
    this.router.navigate(['']);
  }

  showAccountInfo(account_id: number) {
    this.accountsService.getAccount(account_id).subscribe((account: Account) => {
      this.account = account;
      console.log("Account: ", account)
    });
  }

  public removeBugfun(_bug: any) {
    this.bugs.filter((bug) => { return bug.bug_id != _bug.bug_id })
    console.log("bug from bugs component: ", _bug);
  }

}
