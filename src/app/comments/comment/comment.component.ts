import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  edit() {
    this.router.navigate(['bugs-routing/edit']);
  }

  remove() {

  }

  reply() {

    this.router.navigate(['bugs-routing/details']);
  }

}
