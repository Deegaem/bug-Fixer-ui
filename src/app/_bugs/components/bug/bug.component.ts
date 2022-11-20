import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from '../../data-access/bug';
import { BugsService } from '../../data-access/bugs.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {
  @Input() bug: any;
  constructor(private bugsService: BugsService, private router: Router) { }

  ngOnInit(): void {
  }

  editBug(bug: Bug) {
    this.router.navigate(['bugs-routing/edit', bug.bug_id]);
  }

  removeBug(bug_id: number) {
    this.bugsService.removeBug(bug_id).subscribe(() => {
    });
  }

  bugDetails() {
    this.bugsService._setbug(this.bug);
    this.router.navigate(['bugs-routing/details']);
  }

}
