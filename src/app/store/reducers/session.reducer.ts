import { createEntityAdapter } from '@ngrx/entity';
import { Action, on } from '@ngrx/store';

export class Session {
  operatingMode: string;
}

export class SessionState {
  operatingMode: string = 'init';
}

const defaultSessionState = new SessionState();

export const UPDATE_OPERATING_MODE = '[SESSION] update operatingMode';
export const REQUEST_OPERATING_MODE = '[SESSION] request operatingMode';
export const REQUEST_LOGIN = '[SESSION] Request login';

export class UpdateOperatingMode implements Action {
  readonly type = UPDATE_OPERATING_MODE;
  constructor(public payload: string) {}
}

export class RequestSessionOperatingMode implements Action {
  readonly type = REQUEST_OPERATING_MODE;
  constructor() {}
}
export class RequestLogin implements Action {
  readonly type = REQUEST_LOGIN;
  constructor(public payload: any) {}
}

export type SessionActions =
  UpdateOperatingMode |
  RequestSessionOperatingMode |
  RequestLogin
  ;

export function sessionReducer(
  state: SessionState = defaultSessionState,
  action: SessionActions
) {
  switch ( action.type ) {
    case UPDATE_OPERATING_MODE:
      return ({...state, ...{ operatingMode: action.payload }});
    case REQUEST_OPERATING_MODE:
      return ({...state});
    default:
      return state;
  }

}
