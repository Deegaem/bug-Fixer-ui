import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AccountsService } from './data-access/accounts.service';
import { BugsService } from './data-access/bugs.service';
import { CommentsService } from './data-access/comments.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, FooterComponent,
    HeaderComponent],
  imports: [
    RouterModule
  ], providers: [BugsService, AccountsService, CommentsService],
  exports: [HomeComponent, CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class CoreModule { }
