import {
  ACTION_AGENT_UPDATE_AGENT_COMPANIES,
  ACTION_AGENT_UPDATE_AGENT_ID,
  ACTION_AGENT_UPDATE_ALL, ACTION_AGENT_UPDATE_LOOKUP_HISTORY,
  ACTION_AGENT_UPDATE_NAME,
  AgentActions,
  AgentState,
  defaultAgentState
} from '../actions/agent.actions';

export function agentReducer(
  state: AgentState = defaultAgentState,
  action: AgentActions
) {
  switch ( action.type ) {
    case ACTION_AGENT_UPDATE_ALL:
      return ({...state, ...{ ...action.payload } });
    case ACTION_AGENT_UPDATE_AGENT_ID:
      return ({...state, ...{ agentID: action.payload } });
    case ACTION_AGENT_UPDATE_NAME:
      return ({...state, ...{ name: action.payload } });
      case ACTION_AGENT_UPDATE_AGENT_COMPANIES:
        return ({...state, ...{ agentCompanies: action.payload } });
    case ACTION_AGENT_UPDATE_LOOKUP_HISTORY:
      return ({...state, ...{ lookupHistory: action.payload } });
// agent reducer
    default:
      return state;
  }

}
