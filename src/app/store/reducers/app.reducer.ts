import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { formsReducer } from './forms.reducer';
import { AppState } from '../models/app.models';


export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  forms: formsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
