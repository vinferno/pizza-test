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
import { getAgentState } from '../store/selectors/agent.selectors';
import { first, map } from 'rxjs/operators';
import { ActionRouterRequestAuthGuardFail } from '../store/actions/router.actions';
import { AppState } from '../store/models/app.models';

@Injectable({
  providedIn: 'root'
})
export class AgentAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private store: Store<AppState>) {}

  private checkStoreAuthentication(): Observable<boolean> {
    return this.store.pipe(select(getAgentState)).pipe(
      first(),
      map( agent => {
        const allowed = !!(agent && agent.agentID);
        if (!allowed) {
          this.store.dispatch(new ActionRouterRequestAuthGuardFail(''));
        }
        return allowed;
      })
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
