import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from 'src/app/services/bugs.service';
import { Bug } from '../../Domain-Models/bug';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {
  @Input() data: any;
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
    this.router.navigate(['bugs-routing/details']);
  }

}
