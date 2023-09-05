import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400 || error.status === 404) {
            const errorMsg = `Error Code: ${error.status}, 
            Message: Photos are not posted at the beginning of the day, please check back later. 
            Error Message: ${error.message}`;
            console.log(errorMsg);
          }
          return of(new HttpResponse({}));
        })
      )
  }
}
