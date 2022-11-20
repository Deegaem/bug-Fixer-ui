import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { BugsService } from './data-access/bugs.service';
import { AccountsService } from './data-access/accounts.service';
import { CommentsService } from './data-access/comments.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [FooterComponent,
    HeaderComponent],
  imports: [HttpClientModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, FooterComponent,
    HeaderComponent],
  providers: [BugsService, AccountsService, CommentsService],
})
export class SharedModule { }
