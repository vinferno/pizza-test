import {
  ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES_SUCCESS,
  ACTION_AGENT_API_REQUEST_AGENT_LOGIN_SUCCESS, ACTION_AGENT_API_REQUEST_TEST_MEMBERS_SUCCESS,
  ACTION_AGENT_UPDATE_AGENT_ID,
  ACTION_AGENT_UPDATE_LOOKUP_HISTORY,
  ACTION_AGENT_UPDATE_NAME,
  AgentActions,
} from '../actions/agent.actions';
import { AgentState } from '../models/agent';

export const defaultAgentState = new AgentState();
export function agentReducer(
  state: AgentState = defaultAgentState,
  action: AgentActions
) {
  switch ( action.type ) {
    case ACTION_AGENT_API_REQUEST_AGENT_LOGIN_SUCCESS:
      return ({...state, ...{ ...action.payload } });
    case ACTION_AGENT_UPDATE_AGENT_ID:
      return ({...state, ...{ agentID: action.payload } });
    case ACTION_AGENT_UPDATE_NAME:
      return ({...state, ...{ name: action.payload } });
      case ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES_SUCCESS:
        return ({...state, ...{ agentCompanies: action.payload } });
    case ACTION_AGENT_UPDATE_LOOKUP_HISTORY:
      return ({...state, ...{ lookupHistory: action.payload } });
    case ACTION_AGENT_API_REQUEST_TEST_MEMBERS_SUCCESS:
      return ({...state, ...{ testMembers: action.payload } });
// agent reducer
    default:
      return state;
  }

}
