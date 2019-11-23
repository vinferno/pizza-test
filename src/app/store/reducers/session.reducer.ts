import { Action } from '@ngrx/store';

export class SessionState {
  operatingMode: string = 'init';
}

const defaultSessionState = new SessionState();

// session apiRequest operating
export const ACTION_SESSION_API_REQUEST_OPERATING = '[SESSION] (api-request) operating';
export class ActionSessionApiRequestOperating {
    readonly type = ACTION_SESSION_API_REQUEST_OPERATING;
    constructor() {}
}


// session apiSuccess operating
export const ACTION_SESSION_API_SUCCESS_OPERATING = '[SESSION] (api-success) operating';
export class ActionSessionApiSuccessOperating {
    readonly type = ACTION_SESSION_API_SUCCESS_OPERATING;
    constructor(public payload: any) {}
}

// session apiRequest requestAgentLogin
export const ACTION_SESSION_API_REQUEST_AGENT_LOGIN = '[SESSION] (api-request) agent-requestAgentLogin';
export class ActionSessionApiRequestAgentLogin {
    readonly type = ACTION_SESSION_API_REQUEST_AGENT_LOGIN;
    constructor(public payload: any) {}
}

// session apiSuccess requestAgentLogin
export const ACTION_SESSION_API_SUCCESS_AGENT_LOGIN = '[SESSION] (api-success) agent-requestAgentLogin';
export class ActionSessionApiSuccessAgentLogin {
    readonly type = ACTION_SESSION_API_SUCCESS_AGENT_LOGIN;
    constructor(public payload: any) {}
}

export type SessionActions =
  ActionSessionApiRequestOperating |
  ActionSessionApiSuccessOperating |
  ActionSessionApiRequestAgentLogin;

export function sessionReducer(
  state: SessionState = defaultSessionState,
  action: SessionActions
) {
  switch ( action.type ) {
    case ACTION_SESSION_API_SUCCESS_OPERATING:
 return ({...state, ...{ operating: action.payload } });
    default:
      return state;
  }

}

