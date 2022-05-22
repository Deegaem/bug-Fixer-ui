import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
