import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bug-fixer-ui';

  normalError(): never {
    throw new Error('Something went wrong');
  }
}
