import { Component, OnInit } from '@angular/core';
import { BugsService } from 'src/app/services/bugs.service';

@Component({
  selector: 'app-bugdetails',
  templateUrl: './bugdetails.component.html',
  styleUrls: ['./bugdetails.component.scss']
})
export class BugdetailsComponent implements OnInit {

  bug: any;
  constructor(private bugsService: BugsService) { }

  ngOnInit(): void {
    if (this.bugsService._getbug()) {
      this.bug = this.bugsService._getbug();
    }
  }

}
