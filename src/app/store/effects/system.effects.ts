// system Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SystemService } from '../../services/system.service';
import {
  ACTION_SYSTEM_API_REQUEST_OPERATING,
  ActionSystemApiRequestOperatingFail,
  ActionSystemApiRequestOperatingSuccess
} from '../actions/system.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ResponseSystemApiRequestOperating } from '../../services/endpoints/responses';
import { of } from 'rxjs';

@Injectable()
export class SystemEffect {
  constructor(
    private actions$: Actions,
    private systemService: SystemService,
  ) {}

  // system apiRequest operating
  @Effect() operating = this.actions$.pipe(
       ofType(ACTION_SYSTEM_API_REQUEST_OPERATING),
       map((action: any) => action.payload),
      switchMap((payload) => {
        return this.systemService.systemApiRequestOperating(payload).pipe(
          map((res: ResponseSystemApiRequestOperating) => res),
          switchMap((res: ResponseSystemApiRequestOperating) => [
            new ActionSystemApiRequestOperatingSuccess(res.operatingMode),
          ]),
          catchError((error) => of(new ActionSystemApiRequestOperatingFail(error)))
        );
      })
    );
}
