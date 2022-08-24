import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Account } from '../../Domain-Models/account';
import { AccountsService } from '../../services/accounts.service';
import { Bug } from '../../Domain-Models/bug';
import { BugsService } from '../../services/bugs.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
