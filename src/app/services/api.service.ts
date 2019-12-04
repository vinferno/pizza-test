import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ArtModeService } from './art-mode.service';

export interface ResponseOperating {
  operatingMode: string;
}

export const headersGetValidate = 'getValidateHeaders';
export const headersGetToken = 'getTokenHeaders';
export const headersGetTokenWithFingerprint = 'getTokenHeadersWithFingerprint';
export const headersBasic = 'basic';
export const headersBasicWithFingerprint = 'basicWithFingerprint';
export const headersPassThrough = 'passThrough';
export const headersNone = 'none';

type headerProp = 'getValidateHeaders' |
  'getTokenHeaders' |
  'getTokenHeadersWithFingerprint' |
  'basic' |
  'basicWithFingerprint' |
  'passThrough' |
  'none' | string;

export const methodGet = 'get';
export const methodPost = 'post';
export const methodPut = 'put';
export const methodDelete = 'delete';
type Methods = 'get' |
  'post' |
  'delete' |
  'put' | string;

export interface EndpointConfig {
  route: string;
  headers: {
    get?: string;
    post?: string;
    put?: string;
    delete?: string;
  };
}


export class ApiConfig {
  method: Methods;
  route: string;
  headers: headerProp;
  responseType: any;
  artModeResponse?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string = environment.apiRoute;
  public session = {
    fingerprint: 'ABC',
  };
  public config: EndpointConfig;
  public getAction: string;
  public postAction: string;
  public putAction: string;
  public deleteAction: string;
  constructor(
    private http: HttpClient,
    public store: Store<any>,
    public artModeService: ArtModeService,
  ) { }

  request<T>(config: ApiConfig, payload?: any) {
    let artModeResponse = new config.responseType();
    if ( environment.artMode ) {
      if (config.responseType) {
        artModeResponse = this.artModeService.getResponse(config.responseType);
      }
      return of(new HttpResponse({ status: 200, body: artModeResponse }).body);
    }
    switch (config.method ) {
      case 'put':
        return this.put(payload, config.route, config.headers);
      case 'post':
        return this.post(payload, config.route, config.headers);
      case 'delete':
        return this.delete(config.route, config.headers);
      case 'get':
        return this.get(config.route, config.headers );
    }
  }


  public initialize(config: EndpointConfig): void {
    this.config = config;
  }

  public post<T>(payload: T, paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers.post);
    const route = paramRoute || this.config.route;

    return this.http.post(`${this.url}${route}`, payload, headers).pipe(
      shareReplay(),
      map((response: HttpRequest<any>) => this.handleRequest(response, this.postAction)),
      catchError((error: HttpErrorResponse) => this.handleError(error)),
    );
  }

  public put<T>(payload: T, paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers.put);
    const route = paramRoute || this.config.route;

    return this.http.put(`${this.url}${route}`, payload, headers).pipe(
      shareReplay(),
      map((response: HttpRequest<any>) => this.handleRequest(response, this.postAction)),
      catchError((error: HttpErrorResponse) => this.handleError(error)),
    );
  }

  public delete(paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers.delete);
    const route = paramRoute || this.config.route;

    return this.http.delete(`${this.url}${route}`, headers).pipe(
      shareReplay(),
      map((response: HttpRequest<any>) => this.handleRequest(response, this.deleteAction)),
      catchError((error: HttpErrorResponse) => this.handleError(error)),
    );
  }

  public get<t>(paramRoute?: string, paramHeader?: headerProp): Observable<any> {
    const headers = this.prepareHeader(paramHeader || this.config.headers.get);
    const route = paramRoute || this.config.route;
    const finalRoute = `${this.url}${route}`;

    return this.http.get(finalRoute, headers).pipe(
      shareReplay(),
      map((response: HttpRequest<any>) => this.handleRequest(response, this.getAction)),
      catchError((error: HttpErrorResponse) => this.handleError(error)),
    );
  }

  private prepareHeader(headerType: headerProp | string): { headers: HttpHeaders; withCredentials: boolean } {
    let headers = new HttpHeaders();

    if (headerType === 'getTokenHeaders') {
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers = headers.set('Accept', 'application/json');
    }

    if (headerType === 'getTokenHeadersWithFingerprint') {
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
      headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
      headers = headers.set('Accept', 'application/json');
    }

    if (headerType === 'getValidateHeaders') {
      headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
    }

    if (headerType === 'basic') {
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Accept', '*/*');
    }

    if (headerType === 'basicWithFingerprint') {
      headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Accept', '*/*');
    }

    if (headerType === 'passThrough') {
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('X-Auth-Fingerprint', this.session.fingerprint);
      headers = headers.set('Accept', 'application/json');
    }

    if (headerType === 'none') {
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Accept', '*/*');
    }

    return {
      headers,
      withCredentials: true,
    };
  }

  private handleRequest(response: HttpRequest<any>, action: string): HttpRequest<any> {
    if (action) { this.store.dispatch({type: action, payload: response}); }
    return response;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return null;
  }
}
