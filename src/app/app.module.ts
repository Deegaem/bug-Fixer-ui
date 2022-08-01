import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AccountsModule } from './accounts/accounts.module';
import { BugsModule } from './bugs/bugs.module';
import { CommentsModule } from './comments/comments.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AlertifyService } from './services/alertify.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttperorInterceptor } from './services/httperor.interceptor';
import { GlobalErrorHandler } from './services/GlobalErrorHandler';
//import { MyErrorHandler } from './services/MyErrorHandler.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AccountsModule,
    BugsModule,
    CommentsModule,
    HomeModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttperorInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
