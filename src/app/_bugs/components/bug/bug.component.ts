import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from 'src/app/core/data-access/bugs.service';
import { Bug } from '../../data-access/bug';
import { CommentsService } from 'src/app/core/data-access/comments.service';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss'],
})
export class BugComponent implements OnInit {
  @Input() bug!: any;
  @Output() removeBugEvent = new EventEmitter<Bug>();

  constructor(
    private bugsService: BugsService,
    private commentsService: CommentsService,
    private router: Router
  ) {}

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
        this.deleteAllCommentsRelatedToBug();
        //ToDo Merge two Observables into one Observable of the same type (2 delete requset to one subscribe)
        //Do multiple HTTP requests using the RxJs Concat Operator
        //https://www.youtube.com/watch?v=b59tcUwfpWU
      });
    }
  }

  deleteAllCommentsRelatedToBug() {
    this.commentsService
      .removeCommentsByBugId(this.bug.bug_id)
      .subscribe(() => {
        this.removeBugEvent.emit(this.bug);
        console.log('something went wrong');
      });
  }

  bugDetails() {
    this.router.navigate(['bugs-routing/details', this.bug.bug_id]);
  }
}
