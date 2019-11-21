
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
}
export class AgentState extends AgentOnly {
  permissions: string[] = null;
}

const defaultAgentState = new AgentState();

// agent update agentID
export const ACTION_AGENT_UPDATE_AGENT_ID = '[AGENT] (update) agentID';
export class ActionAgentUpdateAgentID {
    readonly type = ACTION_AGENT_UPDATE_AGENT_ID;
    constructor(public payload: any) {}
}

export const ACTION_AGENT_UPDATE_NAME = '[AGENT] (update) name';
export class ActionAgentUpdateName {
    readonly type = ACTION_AGENT_UPDATE_NAME;
    constructor(public payload: any) {}
}

export type AgentActions =
  ActionAgentUpdateName |
  ActionAgentUpdateAgentID;


export function agentReducer(
  state: AgentState = defaultAgentState,
  action: AgentActions
) {
  switch ( action.type ) {
    case ACTION_AGENT_UPDATE_AGENT_ID:
      return ({...state, ...{ agentID: action.payload } });
    case ACTION_AGENT_UPDATE_NAME:
      return ({...state, ...{ name: action.payload } });

// agent reducer
    default:
      return state;
  }

}
