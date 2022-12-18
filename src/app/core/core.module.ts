import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AccountsService } from './data-access/accounts.service';
import { BugsService } from './data-access/bugs.service';
import { CommentsService } from './data-access/comments.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [HomeComponent, FooterComponent,
    HeaderComponent],
  imports: [
    SharedModule,
    RouterModule
  ], providers: [BugsService, AccountsService, CommentsService],
  exports: [HomeComponent, SharedModule]
})
export class CoreModule { }
