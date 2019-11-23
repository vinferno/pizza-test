import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';

import { Observable, throwError as observableThrowError, } from 'rxjs';
import { catchError, tap, timeout, } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';

const defaultTimeout = environment.production ? 60000 : 300000;

@Injectable ()
export class AuthInterceptor implements HttpInterceptor {
  private loginSeconds = 1140000;

  constructor(
    private store: Store<any>,
    private tokenExtractor: HttpXsrfTokenExtractor,
  ) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    let requestToForward: HttpRequest<any> = req;
    const token = this.tokenExtractor.getToken () as string;
    if ( token !== null ) {
      requestToForward = req.clone ( { setHeaders : { 'X-XSRF-TOKEN' : token } } );
    }
    if ( !(
      requestToForward.url.split ( '/' ).pop () !== 'validation' &&
      requestToForward.url.split ( '/' ).pop () !== 'operating' &&
      requestToForward.url.split ( '/' ).pop () !== 'credentials'
    ) ) {
    }

    return next.handle ( requestToForward ).pipe (
      timeout ( defaultTimeout ),
      tap ( ( evt: any ) => {
        evt.method = requestToForward.method;
        if ( evt instanceof HttpResponse ) {
        }
      } ),
      catchError ( response => {
        response.url = requestToForward.url;
        response.method = requestToForward.method;
        if ( response instanceof HttpErrorResponse ) {
          if ( response.status === 401 ) {

          }
        }
        return observableThrowError ( response );
      } ),
    );
  }
}
