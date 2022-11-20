import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from '../../data-access/bugs.service';
import { CommentsService } from '../../data-access/comments.service';


@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.scss']
})
export class BugdetailsComponent implements OnInit {
  bug: any;
  rootComments: any[] = [];
  constructor(private bugsService: BugsService, private commentsService: CommentsService, private router: Router) { }

  ngOnInit(): void {
    if (this.bugsService._getbug()) {
      this.bug = this.bugsService._getbug();
    }
    this.rootComments = this.commentsService.filterComments(null);
    console.log("rootcomments", this.rootComments);
  }
  bugScreenShot() {
    this.router.navigate(['bugs-routing/bug-screen-shot']);
  }

}
