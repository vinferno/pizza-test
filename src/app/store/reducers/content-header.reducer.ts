// contentHeader update all
import { ResponseContentHeaders } from '../../responses';
import { ACTION_CONTENT_HEADER_UPDATE_ALL, ActionContentHeaderUpdateAll } from '../actions';

// contentHeader reducer
export type ContentHeaderActions = ActionContentHeaderUpdateAll;
const defaultContentHeaderState = new ResponseContentHeaders();
export function contentHeaderReducer(
  state: ResponseContentHeaders = defaultContentHeaderState,
  action: ContentHeaderActions
) {
  switch ( action.type ) {
    case ACTION_CONTENT_HEADER_UPDATE_ALL:
      return ({...state, ...{ ...action.payload } });
    default:
      return state;
  }

}
