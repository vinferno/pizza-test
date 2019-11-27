// system session
import { createSelector } from '@ngrx/store';
import { getSessionState } from '../reducers/session.map';
import { SessionState } from '../reducers/session.map';

export const getSystemState = createSelector(
  getSessionState,
  (state: SessionState) => state.system
);
