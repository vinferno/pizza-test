// agent request enabledCompanies
import { Action } from '@ngrx/store';

export class EnabledCompanies {
  companyID: number;
  code: string;
  companyName: string;
}

export class AgentOnly {
  agentID: number = null;
  name: string = null;
  canCreateMembers: boolean = null;
  canAccessCRM: boolean = null;
  mustResetPassword: boolean = null;
  isSupervisor: boolean = null;
  dashboardTemplate: string = null;
  brokerImagePath: string = null;
  hasAccessToAllBrokers: boolean = null;
  brokerID: number = null;
  agentCompanies: EnabledCompanies[] = [];
}
export class AgentState extends AgentOnly {
  permissions: string[] = null;
}

export const defaultAgentState = new AgentState();

// agent update all
export const ACTION_AGENT_UPDATE_ALL = '[AGENT] (update) all';
export class ActionAgentUpdateAll implements Action {
  readonly type = ACTION_AGENT_UPDATE_ALL;
  constructor(public payload: any) {}
}

// agent update agentID
export const ACTION_AGENT_UPDATE_AGENT_ID = '[AGENT] (update) agentID';
export class ActionAgentUpdateAgentID implements Action {
  readonly type = ACTION_AGENT_UPDATE_AGENT_ID;
  constructor(public payload: any) {}
}

export const ACTION_AGENT_REQUEST_ENABLED_COMPANIES = '[AGENT] (request) enabled-companies';
export class ActionAgentRequestEnabledCompanies implements Action {
  readonly type = ACTION_AGENT_REQUEST_ENABLED_COMPANIES;
  constructor(public payload?: any) {}
}

export const ACTION_AGENT_UPDATE_NAME = '[AGENT] (update) name';
export class ActionAgentUpdateName implements Action {
  readonly type = ACTION_AGENT_UPDATE_NAME;
  constructor(public payload: any) {}
}

// agent success login
export const ACTION_AGENT_SUCCESS_LOGIN = '[AGENT] (success) login';
export class ActionAgentSuccessLogin implements Action {
  readonly type = ACTION_AGENT_SUCCESS_LOGIN;
  constructor(public payload: any) {}
}

// agent update agentCompanies
export const ACTION_AGENT_UPDATE_AGENT_COMPANIES = '[AGENT] (update) agent-companies';
export class ActionAgentUpdateAgentCompanies implements Action {
  readonly type = ACTION_AGENT_UPDATE_AGENT_COMPANIES;
  constructor(public payload: any) {
    console.log(payload, 'payload');
  }
}

export type AgentActions =
  ActionAgentUpdateAgentID |
  ActionAgentUpdateName |
  ActionAgentUpdateAll |
  ActionAgentUpdateAgentCompanies;