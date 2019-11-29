import { LookupHistory } from './members';
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
  lookupHistory: LookupHistory[] = [];
}
export class AgentState extends AgentOnly {
  permissions: string[] = null;
}
