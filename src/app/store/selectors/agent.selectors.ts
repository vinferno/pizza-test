// agent session
import { createSelector } from '@ngrx/store';
import { getSessionState, SessionState } from '../reducers/session.map';

export const getAgentState = createSelector(
  getSessionState,
  (state: SessionState) => state.agent
);

