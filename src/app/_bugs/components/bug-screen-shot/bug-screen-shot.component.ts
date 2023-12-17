import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bug-screen-shot',
  templateUrl: './bug-screen-shot.component.html',
  styleUrls: ['./bug-screen-shot.component.scss'],
})
export class BugScreenShotComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  bugDetails() {
    this.router.navigate(['bugs-routing/details']);
  }
}
