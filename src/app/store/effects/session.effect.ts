import { Actions, Effect, ofType } from '@ngrx/effects';
import { REQUEST_LOGIN, REQUEST_OPERATING_MODE, RequestLogin, UpdateOperatingMode } from '../reducers/session.reducer';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PizzaService } from '../../services/pizza.service';
import { LoadPizzasFail, LoadPizzasSuccess, Pizza } from '../actions';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResponseAgentLogin, SessionService } from '../../services/session.service';
import { ResponseOperating } from '../../services/api.service';

@Injectable()
export class SessionEffect {
  constructor(
    private actions$: Actions,
    private sessionService: SessionService,
  ) {}

  @Effect()loadSessionOperatingMode = this.actions$.pipe(
    ofType(REQUEST_OPERATING_MODE),
    switchMap(() => {
      return this.sessionService.getOperating().pipe(
        map((payload: ResponseOperating) => new UpdateOperatingMode(payload.operatingMode) ),
        catchError((error) => of(new LoadPizzasFail(error)))
      );
    })
  );
  @Effect()loginAgent = this.actions$.pipe(
    ofType(REQUEST_LOGIN),
    switchMap((action: RequestLogin) => {
      return this.sessionService.login(action.payload).pipe(
        map((payload: ResponseAgentLogin) => new UpdateOperatingMode(payload.operatingMode) ),
        catchError((error) => of(new LoadPizzasFail(error)))
      );
    })
  );
}
