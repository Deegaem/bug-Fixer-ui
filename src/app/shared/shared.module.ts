import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BugsService } from '../services/bugs.service';
import { AccountsService } from '../services/accounts.service';
import { CommentsService } from '../services/comments.service';



@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [BugsService, AccountsService, CommentsService],
})
export class SharedModule { }
