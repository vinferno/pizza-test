// agent request enabledCompanies
import { Action } from '@ngrx/store';
// API REQUEST ACTIONS
// agent apiRequest agentLogin
export const ACTION_AGENT_API_REQUEST_AGENT_LOGIN = '[AGENT] (api-request) agent-login';
export class ActionAgentApiRequestAgentLogin implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_AGENT_LOGIN;
    constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_AGENT_LOGIN_FAIL = '[AGENT] (api-request) agent-login-fail';
export class ActionAgentApiRequestAgentLoginFail implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_AGENT_LOGIN_FAIL;
    constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_AGENT_LOGIN_SUCCESS = '[AGENT] (api-request) agent-login-success';
export class ActionAgentApiRequestAgentLoginSuccess implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_AGENT_LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

// agent apiRequest agentEnabledCompanies
export const ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES = '[AGENT] (api-request) agent-enabled-companies';
export class ActionAgentApiRequestAgentEnabledCompanies implements Action {
  readonly type = ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES;
  constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES_FAIL = '[AGENT] (api-request) agent-enabled-companies-fail';
export class ActionAgentApiRequestAgentEnabledCompaniesFail implements Action {
  readonly type = ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES_FAIL;
  constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES_SUCCESS = '[AGENT] (api-request) agent-enabled-companies-success';
export class ActionAgentApiRequestAgentEnabledCompaniesSuccess implements Action {
  readonly type = ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES_SUCCESS;
  constructor(public payload: any) {}
}

// agent apiRequest testMembers
export const ACTION_AGENT_API_REQUEST_TEST_MEMBERS = '[AGENT] (api-request) test-members';
export class ActionAgentApiRequestTestMembers implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_TEST_MEMBERS;
    constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_TEST_MEMBERS_FAIL = '[AGENT] (api-request) test-members-fail';
export class ActionAgentApiRequestTestMembersFail implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_TEST_MEMBERS_FAIL;
    constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_TEST_MEMBERS_SUCCESS = '[AGENT] (api-request) test-members-success';
export class ActionAgentApiRequestTestMembersSuccess implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_TEST_MEMBERS_SUCCESS;
    constructor(public payload: any) {}
}


// (nameSpace)   (type)   (method)    (action)
// agent  apiRequest post  getMemberSpecification
export const ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION = '[AGENT] (api-request) get-member-specification';
export class ActionAgentApiRequestGetMemberSpecification implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION;
    constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION_FAIL = '[AGENT] (api-request) get-member-specification-fail';
export class ActionAgentApiRequestGetMemberSpecificationFail implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION_FAIL;
    constructor(public payload: any) {}
}
export const ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION_SUCCESS = '[AGENT] (api-request) get-member-specification-success';
export class ActionAgentApiRequestGetMemberSpecificationSuccess implements Action {
    readonly type = ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION_SUCCESS;
    constructor(public payload: any) {}
}














export const ACTION_AGENT_UPDATE_NAME = '[AGENT] (update) name';
export class ActionAgentUpdateName implements Action {
  readonly type = ACTION_AGENT_UPDATE_NAME;
  constructor(public payload: any) {}
}

// agent request lookupHistory
export const ACTION_AGENT_REQUEST_LOOKUP_HISTORY = '[AGENT] (request) lookup-history';
export class ActionAgentRequestLookupHistory implements Action {
    readonly type = ACTION_AGENT_REQUEST_LOOKUP_HISTORY;
    constructor() {}
}

// NON API REQUEST ACTIONS
// agent update all
export const ACTION_AGENT_UPDATE_ALL = '[AGENT] (update) all';
export class ActionAgentUpdateAll implements Action {
  readonly type = ACTION_AGENT_UPDATE_ALL;
  constructor(public payload: any) {}
}
export const ACTION_AGENT_UPDATE_LOOKUP_HISTORY = '[AGENT] (update) lookup-history';
export class ActionAgentUpdateLookupHistory implements Action {
  readonly type = ACTION_AGENT_UPDATE_LOOKUP_HISTORY;
  constructor(public payload: any) {}
}
// agent update agentID
export const ACTION_AGENT_UPDATE_AGENT_ID = '[AGENT] (update) agentID';
export class ActionAgentUpdateAgentID implements Action {
  readonly type = ACTION_AGENT_UPDATE_AGENT_ID;
  constructor(public payload: any) {}
}




export type AgentActions =
  ActionAgentUpdateAgentID |
  ActionAgentUpdateName |
  ActionAgentUpdateAll |
  ActionAgentUpdateLookupHistory |
  ActionAgentApiRequestAgentLoginSuccess |
  ActionAgentApiRequestTestMembersSuccess |
  ActionAgentApiRequestAgentEnabledCompaniesSuccess;
