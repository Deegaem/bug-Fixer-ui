import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [CommonModule, ReactiveFormsModule]
})
export class SharedModule { }
