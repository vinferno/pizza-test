import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ContentService} from '../services/content.service';
import {ResponseContentHeaders} from '../responses';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ActionContentHeaderUpdateAll} from '../store/actions';

@Injectable({ providedIn: 'root' })
export class ContentHeaderResolver implements Resolve<ResponseContentHeaders> {
  constructor(
    private contentService: ContentService,
    private store: Store<any>,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.contentService.getContentHeader().pipe(
      map( res => {
        this.store.dispatch( new ActionContentHeaderUpdateAll(res));
        return res; })
    );
  }
}
