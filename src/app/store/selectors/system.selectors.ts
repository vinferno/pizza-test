// system session
import { createSelector } from '@ngrx/store';
import { getSessionState, SessionState } from '../reducers/session.map';

export const getSystemState = createSelector(
  getSessionState,
  (state: SessionState) => state.system
);
