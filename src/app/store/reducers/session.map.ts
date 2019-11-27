import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { agentReducer } from './agent.reducer';
import { AgentState } from '../actions/agent.actions';
import { systemReducer, SystemState } from './system.reducer';

// session action map
export interface SessionState {
  agent: AgentState;
  system: SystemState;
}

export const sessionReducers: ActionReducerMap<SessionState> = {
  agent: agentReducer,
  system: systemReducer,
};

export const getSessionState = createFeatureSelector<SessionState>('session');
