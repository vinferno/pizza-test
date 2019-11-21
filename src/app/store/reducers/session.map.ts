import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { agentReducer, AgentState } from './agent.reducer';
// session action map
export interface SessionState {
  agent: AgentState;
}

export const sessionReducers: ActionReducerMap<SessionState> = {
  agent: agentReducer,
};

export const getSessionState = createFeatureSelector<SessionState>('session');
