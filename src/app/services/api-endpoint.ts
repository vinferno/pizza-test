import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { catchError, map, shareReplay } from 'rxjs/operators';
// import { environment } from '../../environments/environment';
//
// type headerProp = 'getValidateHeaders' |
//   'getTokenHeaders' | 'getTokenHeadersWithFingerprint' | 'basic' | 'basicWithFingerprint' | 'passThrough' | 'none';
//
// export interface EndpointConfig {
//   route: string;
//   headers: {
//     get?: string;
//     post?: string;
//     put?: string;
//     delete?: string;
//   };
// }
//
// @Injectable()
// export class ApiEndpoint {
//   public url: string = environment.apiRoute;
//   public session = {
//     fingerprint: 'ABC',
//   };
//   public config: EndpointConfig;
//   public getAction: string;
//   public postAction: string;
//   public putAction: string;
//   public deleteAction: string;
//
//   constructor(
//     public http: HttpClient,
//     public store: Store<any>,
//   ) {
//   }
//
//   public initialize(config: EndpointConfig): void {
//     this.config = config;
//   }
//
//   public post<T>(payload: T, paramRoute?: string, paramHeader?: headerProp): Observable<any> {
//     const headers = this.prepareHeader(paramHeader || this.config.headers.post);
//     const route = paramRoute || this.config.route;
//
//     return this.http.post(`${this.url}${route}`, payload, headers).pipe(
//       shareReplay(),
//       map((response: HttpRequest<any>) => this.handleRequest(response, this.postAction)),
//       catchError((error: HttpErrorResponse) => this.handleError(error)),
//     );
//   }
//
//   public put<T>(payload: T, paramRoute?: string, paramHeader?: headerProp): Observable<any> {
//     const headers = this.prepareHeader(paramHeader || this.config.headers.put);
//     const route = paramRoute || this.config.route;
//
//     return this.http.put(`${this.url}${route}`, payload, headers).pipe(
//       shareReplay(),
//       map((response: HttpRequest<any>) => this.handleRequest(response, this.postAction)),
//       catchError((error: HttpErrorResponse) => this.handleError(error)),
//     );
//   }
//
//   public delete(paramRoute?: string, paramHeader?: headerProp): Observable<any> {
//     const headers = this.prepareHeader(paramHeader || this.config.headers.delete);
//     const route = paramRoute || this.config.route;
//
//     return this.http.delete(`${this.url}${route}`, headers).pipe(
//       shareReplay(),
//       map((response: HttpRequest<any>) => this.handleRequest(response, this.deleteAction)),
//       catchError((error: HttpErrorResponse) => this.handleError(error)),
//     );
//   }
//
//   public get<t>(paramRoute?: string, paramHeader?: headerProp): Observable<any> {
//     const headers = this.prepareHeader(paramHeader || this.config.headers.get);
//     const route = paramRoute || this.config.route;
//     const finalRoute = `${this.url}${route}`;
//
//     return this.http.get(finalRoute, headers).pipe(
//       shareReplay(),
//       map((response: HttpRequest<any>) => this.handleRequest(response, this.getAction)),
//       catchError((error: HttpErrorResponse) => this.handleError(error)),
//     );
//   }
//
//   private prepareHeader(headerType: headerProp | string): { headers: HttpHeaders; withCredentials: boolean } {
//     let headers = new HttpHeaders();
//
//     if (headerType === 'getTokenHeaders') {
//       headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
//       headers = headers.set('Accept', 'application/json');
//     }
//
//     if (headerType === 'getTokenHeadersWithFingerprint') {
//       headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
//       headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
//       headers = headers.set('Accept', 'application/json');
//     }
//
//     if (headerType === 'getValidateHeaders') {
//       headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
//     }
//
//     if (headerType === 'basic') {
//       headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//       headers = headers.set('Accept', '*/*');
//     }
//
//     if (headerType === 'basicWithFingerprint') {
//       headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
//       headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//       headers = headers.set('Accept', '*/*');
//     }
//
//     if (headerType === 'passThrough') {
//       headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//       headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
//       headers = headers.set('Accept', 'application/json');
//     }
//
//     if (headerType === 'none') {
//       headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//       headers = headers.set('Accept', '*/*');
//     }
//
//     return {
//       headers,
//       withCredentials: true,
//     };
//   }
//
//   private handleRequest(response: HttpRequest<any>, action: string): HttpRequest<any> {
//     if (action) { this.store.dispatch({type: action, payload: response}); }
//     return response;
//   }
//
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     return null;
//   }
// }
