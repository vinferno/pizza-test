// agent session
import { createSelector } from '@ngrx/store';
import { getSessionState, SessionState } from '../reducers/session.map';
import { AgentState } from '../actions/agent.actions';

export const getAgentState = createSelector(
  getSessionState,
  (state: SessionState) => state.agent
);

export const getAgentLookupHistoryState = createSelector(
  getAgentState,
  (state: AgentState) => state.lookupHistory
);


