import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from 'src/app/core/data-access/bugs.service';
import { Bug } from '../../data-access/bug';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {
  @Input() bug!: Bug;
  @Output() removeBugtEvent = new EventEmitter<Bug>();

  constructor(private bugsService: BugsService, private router: Router) { }

  ngOnInit(): void {
  }

  editBug() {
    this.router.navigate(['bugs-routing/edit', this.bug.bug_id]);
  }

  removeBug(bug_id: number) {
    this.bugsService.removeBug(bug_id).subscribe(() => {
      this.removeBugtEvent.emit(this.bug);
    });
  }

  bugDetails() {
    this.bugsService._setbug(this.bug);
    this.router.navigate(['bugs-routing/details']);
  }

}
