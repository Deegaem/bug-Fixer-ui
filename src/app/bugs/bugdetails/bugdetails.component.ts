import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BugsService } from 'src/app/services/bugs.service';

@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.scss']
})
export class BugdetailsComponent implements OnInit {

  bug: any;
  constructor(private bugsService: BugsService, private router: Router) { }

  ngOnInit(): void {
    if (this.bugsService._getbug()) {
      this.bug = this.bugsService._getbug();
    }
  }
  bugScreenShot() {
    this.router.navigate(['bugs-routing/bug-screen-shot']);
  }

}
