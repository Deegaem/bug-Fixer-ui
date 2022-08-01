import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  handleError(error: any) {
    console.log("globalErrorhandler error: ", error);
    let errorMessage = '';
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `An error has occurred: ${error.error.message}`;
        alertifyjs.error(errorMessage);
      } else {
        // server-side error
        errorMessage = `An error has occurred Status: ${error.status}\nMessage: ${error.message}`;
        alertifyjs.error(errorMessage);
      }

    } else {
      errorMessage = `An Unexpected error has occurred: ${error}`;
      alertifyjs.error(errorMessage);
    }

  }
}