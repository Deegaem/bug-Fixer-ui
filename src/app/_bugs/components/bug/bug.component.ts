import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from 'src/app/core/data-access/bugs.service';
import { Bug } from '../../data-access/bug';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss'],
})
export class BugComponent implements OnInit {
  @Input() bug!: any;
  @Output() removeBugEvent = new EventEmitter<Bug>();

  constructor(private bugsService: BugsService, private router: Router) {}

  ngOnInit(): void {
    console.log('from ngoninit bugcomponent', this.bug);
  }

  editBug() {
    this.router.navigate(['bugs-routing/edit', this.bug.bug_id]);
  }

  removeBug() {
    if (
      confirm(
        'Are you sure to delete this Bug? you will delete also all it related comments '
      )
    ) {
      this.bugsService.removeBug(this.bug.bug_id).subscribe(() => {
        this.removeBugEvent.emit(this.bug);
        console.log('from removebug subscribe');
      });
    }
  }

  bugDetails() {
    this.router.navigate(['bugs-routing/details', this.bug.bug_id]);
  }
}
