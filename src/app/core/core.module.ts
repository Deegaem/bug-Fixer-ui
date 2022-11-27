import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AccountsService } from './data-access/accounts.service';
import { BugsService } from './data-access/bugs.service';
import { CommentsService } from './data-access/comments.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HomeComponent, FooterComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ], providers: [BugsService, AccountsService, CommentsService],
})
export class CoreModule { }
