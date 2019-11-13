import * as fromRouter from '@ngrx/router-store';

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
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  stepperState: StepperReducer,
  router: null,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];



export const stateActions = {
  stepperActions,
};
