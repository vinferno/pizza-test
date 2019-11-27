import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ACTION_ROUTER_REQUEST_AGENT_LOGIN_SUCCESS, ACTION_ROUTER_REQUEST_AUTH_GUARD_FAIL } from '../actions/router.actions';
import { RouterService } from '../../services/router.service';

@Injectable()
export class RouterEffect {
  constructor(
    private actions$: Actions,
    private routerService: RouterService,
  ) {}

  // router request agentLoginSuccess
  @Effect() save = this.actions$.pipe(
      ofType(ACTION_ROUTER_REQUEST_AGENT_LOGIN_SUCCESS),
      map((action: any) => action.payload),
      switchMap(payload => this.routerService.requestAgentLoginSuccess(payload)),
      switchMap(res => [
      ])
    );

  // router request authGuardFail
  @Effect() authGuardFail = this.actions$.pipe(
      ofType(ACTION_ROUTER_REQUEST_AUTH_GUARD_FAIL),
      map((action: any) => action.payload),
      switchMap(payload => this.routerService.routerRequestAuthGuardFail(payload)),
      switchMap(res => [
      ])
    );
  // router request navigated
  @Effect() navigated = this.actions$.pipe(
      ofType('@ngrx/router-store/navigated'),
      map((action: any) => action.payload),
      switchMap(payload => this.routerService.getClientManager(payload)),
      switchMap(res => [
      ])
    );
}
