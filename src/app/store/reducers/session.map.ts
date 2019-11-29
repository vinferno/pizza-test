import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { agentReducer } from './agent.reducer';
import { systemReducer, SystemState } from './system.reducer';
import { AgentState } from '../models/agent';

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
