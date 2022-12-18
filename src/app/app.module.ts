import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertifyService } from './services/alertify.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttperrorInterceptor } from './services/Global Error Handling/httperror interceptor/httperror.interceptor';
import { GlobalErrorHandler } from './services/Global Error Handling/GlobalErrorHandler';
import { CoreModule } from './core/core.module';
//import { MyErrorHandler } from './services/MyErrorHandler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,

  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttperrorInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
