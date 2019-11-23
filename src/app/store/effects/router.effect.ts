import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ResponseAgentLogin, SessionService } from '../../services/session.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadPizzasFail } from '../actions';
import { ACTION_ROUTER_REQUEST_AGENT_LOGIN_SUCCESS } from '../actions/router.actions';
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
}
