import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from 'src/app/core/data-access/bugs.service';
import { CommentsService } from 'src/app/core/data-access/comments.service';


@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.scss']
})
export class BugdetailsComponent implements OnInit {
  bug: any;
  rootComments: any[] = [];
  cancelComment!: boolean;
  constructor(private bugsService: BugsService, private commentsService: CommentsService, private router: Router) { }

  ngOnInit(): void {
    if (this.bugsService._getbug()) {
      this.bug = this.bugsService._getbug();
    }
    this.rootComments = this.commentsService.filterComments(null);
    console.log("rootcomments", this.rootComments);
  }
  logout() {
    this.router.navigate(['']);
  }
  bugScreenShot() {
    this.router.navigate(['bugs-routing/bug-screen-shot']);
  }
  update($event: any) {
    this.cancelComment = $event;
  }

}
