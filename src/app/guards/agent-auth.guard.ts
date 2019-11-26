import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AgentState, State } from '../store/reducers';
import { getAgentState } from '../store/selectors/agent.selectors';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private store: Store<State>) {}

  private checkStoreAuthentication(): Observable<boolean> {
    return this.store.pipe(select(getAgentState)).pipe(
      first(),
      map( agent => !!(agent && agent.agentID))
    );
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkStoreAuthentication();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
