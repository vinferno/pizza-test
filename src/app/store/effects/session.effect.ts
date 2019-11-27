import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ACTION_SESSION_API_REQUEST_AGENT_LOGIN,
  ACTION_SESSION_API_REQUEST_OPERATING,
  ActionSessionApiSuccessOperating
} from '../reducers/session.reducer';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ActionSessionFailGetOperating } from '../actions/session.actions';
import { ActionSystemUpdateOperatingMode } from '../actions/system.actions';
export interface ResponseOperating {
  operatingMode: string;
}

@Injectable()
export class SessionEffect {
  constructor(
    private actions$: Actions,
    private sessionService: SessionService,
  ) {}

  @Effect()loadSessionOperatingMode = this.actions$.pipe(
    ofType(ACTION_SESSION_API_REQUEST_OPERATING),
    switchMap(() => {
      return this.sessionService.getOperating().pipe(
        map((payload: ResponseOperating) => payload),
        switchMap(payload => [
          new ActionSessionApiSuccessOperating(''),
          new ActionSystemUpdateOperatingMode(payload.operatingMode)
        ]),
        catchError((error) => of(new ActionSessionFailGetOperating(error)))
      );
    })
  );

  @Effect() save = this.actions$.pipe(
    ofType(ACTION_SESSION_API_REQUEST_AGENT_LOGIN),
    map((action: any) => action.payload),
    switchMap(payload => this.sessionService.requestAgentLogin(payload)),
    switchMap(res => [
        ...this.sessionService.requestAgentLoginSuccess(res),

    ])
  );
}
