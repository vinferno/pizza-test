

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { stepperActions, StepperReducer } from './stepper/stepper-state';

export interface State {
  stepperState: any;
}

export const reducers: ActionReducerMap<State> = {
  stepperState: StepperReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];



export const stateActions = {
  stepperActions,
};
