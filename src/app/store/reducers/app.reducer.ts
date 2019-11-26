import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { formsReducer, FormsState } from './forms.reducer';

export interface State {
  router: fromRouter.RouterReducerState<any>;
  forms: FormsState;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  forms: formsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
