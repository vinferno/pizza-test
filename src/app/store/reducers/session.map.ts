import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { agentReducer } from './agent.reducer';
import { AgentState } from '../actions/agent.actions';

// session action map
export interface SessionState {
  agent: AgentState;
}

export const sessionReducers: ActionReducerMap<SessionState> = {
  agent: agentReducer,
};

export const getSessionState = createFeatureSelector<SessionState>('session');
