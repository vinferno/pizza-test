import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ContentHeaderService} from '../services/content-header.service';
import {ResponseContentHeaders} from '../responses';
import { catchError, map } from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {
  ActionContentHeaderApiRequestClientManager,
  ActionContentHeaderApiRequestClientManagerFail,
  ActionContentHeaderApiRequestClientManagerSuccess
} from '../store/actions';

@Injectable({ providedIn: 'root' })
export class ContentHeaderResolver implements Resolve<ResponseContentHeaders> {
  constructor(
    private contentService: ContentHeaderService,
    private store: Store<any>,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    this.store.dispatch(new ActionContentHeaderApiRequestClientManager(null));
    return this.contentService.getContentHeader().pipe(
      map( res => {
        this.store.dispatch( new ActionContentHeaderApiRequestClientManagerSuccess(res));
        return res; }),
      catchError(err => of(new ActionContentHeaderApiRequestClientManagerFail(err)))
    );
  }
}
