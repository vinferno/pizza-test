import * as fromRouter from '@ngrx/router-store';
import { FormsState } from '../actions/forms.actions';

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
  forms: FormsState;
}
