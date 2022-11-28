import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Account } from '../../../authentication/data-access/account';
import { AccountsService } from '../../../core/data-access/accounts.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BugsService } from '../../data-access/bugs.service';
import { Bug } from '../../data-access/bug';

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
  createbug() {
    this.router.navigate(['bugs-routing/add']);
  }

  showAccountInfo(account_id: number) {
    this.accountsService.getAccount(account_id).subscribe((account: Account) => {
      this.account = account;
      console.log("Account: ", account)
    });
  }

}
