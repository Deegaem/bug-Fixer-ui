import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { BugsService } from 'src/app/core/data-access/bugs.service';
import { CommentsService } from 'src/app/core/data-access/comments.service';
import { Bug } from '../../data-access/bug';


@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.scss']
})
export class BugdetailsComponent implements OnInit {
  id!:number;
  bug!: Bug;
  rootComments: any[]=[];
  cancelComment!: boolean;
  constructor(private bugsService: BugsService, private commentsService: CommentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
    });
    if (this.id) {
      this.bugsService.getBug(this.id).subscribe(res => {
        this.bug = res;  
        console.log("from bugdetails component: ", this.bug);
      });
    }
    //this.rootComments = this.commentsService.filterComments(null);
    this.commentsService.getComments().subscribe((res: any[]) => {
      this.rootComments = res;  
       console.log("res from bugdetails component", this.rootComments)
    });
   // console.log("rootcomments from bugdetails component", this.rootComments)
  }
  bugScreenShot() {
    this.router.navigate(['bugs-routing/bug-screen-shot']);
  }
  update($event: any) {
    this.cancelComment = $event;
  }

}
