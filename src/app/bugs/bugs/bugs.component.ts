import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  constructor(private bugsService: BugsService, private accountsService: AccountsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.bugsService.getBugs().subscribe((bugs: Bug[]) => {
      this.bugs = bugs;
      console.log("bugs: ", bugs)
    });
  }

}
