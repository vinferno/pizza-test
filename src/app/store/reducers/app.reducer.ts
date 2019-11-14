import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { StepperReducer } from './stepper/stepper-state';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';

export interface State {
  stepperState: any;
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  stepperState: StepperReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
