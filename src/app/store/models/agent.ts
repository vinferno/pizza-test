import { LookupHistory } from './members';
import { ResponseAgentApiRequestTestMembers } from '../../services/endpoints/responses';
export class EnabledCompanies {
  companyID: number;
  code: string;
  companyName: string;
}
export class AgentEnabledCompanies {
  agentCompanies: EnabledCompanies[] = [];
}

export class AgentOnly extends AgentEnabledCompanies {
  agentID: number;
  name: string = '';
  canCreateMembers: boolean = null;
  canAccessCRM: boolean = null;
  mustResetPassword: boolean = null;
  isSupervisor: boolean = null;
  dashboardTemplate: string = null;
  brokerImagePath: string = null;
  hasAccessToAllBrokers: boolean = null;
  brokerID: number = null;
  lookupHistory: LookupHistory[] = [];
  testMembers: ResponseAgentApiRequestTestMembers;
}
export class AgentState extends AgentOnly {
  permissions: string[] = [];
}
export class  ResponseAgentApiRequestAgentLogin {
  agent: AgentOnly = new AgentOnly();
  permissions: string[] = [];
}
