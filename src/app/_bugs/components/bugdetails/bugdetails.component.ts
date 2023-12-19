import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BugsService } from 'src/app/core/data-access/bugs.service';
import { CommentsService } from 'src/app/core/data-access/comments.service';
import { Bug } from '../../data-access/bug';

@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.scss'],
})
export class BugdetailsComponent implements OnInit {
  id!: number;
  bug!: Bug;
  rootComments: any[] = [];
  cancelComment!: boolean;
  constructor(
    private bugsService: BugsService,
    private commentsService: CommentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
    if (this.id) {
      this.bugsService.getBug(this.id).subscribe((res) => {
        this.bug = res;
        //console.log("bug from bugdetails component: ", this.bug);
      });
    }
    this.commentsService
      .getCommentsByBugId(this.id, null)
      .subscribe((res: any[]) => {
        this.rootComments = res;
        console.log('bug_id from bugdetails component', this.id);
        console.log(
          'Rootcomments from Bugdetailscomponent: ',
          this.rootComments
        );
      });
  }
  bugScreenShot() {
    this.router.navigate(['bugs-routing/bug-screen-shot']);
  }
  update($event: any) {
    this.cancelComment = $event;
  }
}
