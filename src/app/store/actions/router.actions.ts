// router nav agentLoginSuccess
export const ACTION_ROUTER_NAV_AGENT_LOGIN_SUCCESS = '[ROUTER] (nav) agentLoginSuccess';
export class ActionRouterNavAgentLoginSuccess {
    readonly type = ACTION_ROUTER_NAV_AGENT_LOGIN_SUCCESS;
    constructor(public payload: any) {}
}
// case ACTION_ROUTER_NAV_AGENT_LOGIN_SUCCESS:
//  return ({...state, ...{ agentLoginSuccess: action.payload } });


// router request agentLoginSuccess
export const ACTION_ROUTER_REQUEST_AGENT_LOGIN_SUCCESS = '[ROUTER] (request) agent-login-success';
export class ActionRouterRequestAgentLoginSuccess {
    readonly type = ACTION_ROUTER_REQUEST_AGENT_LOGIN_SUCCESS;
    constructor(public payload: any) {}
}
// case ACTION_ROUTER_REQUEST_AGENT_LOGIN_SUCCESS:
//  return ({...state, ...{ agentLoginSuccess: action.payload } });
