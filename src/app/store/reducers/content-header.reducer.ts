// contentHeader update all
import { ResponseContentHeaders } from '../../responses';
import { ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER_SUCCESS, ActionContentHeaderApiRequestClientManagerSuccess } from '../actions';

// contentHeader reducer
export type ContentHeaderActions = ActionContentHeaderApiRequestClientManagerSuccess;
const defaultContentHeaderState = new ResponseContentHeaders();
export function contentHeaderReducer(
  state: ResponseContentHeaders = defaultContentHeaderState,
  action: ContentHeaderActions
) {
  switch ( action.type ) {
    case ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER_SUCCESS:
      return ({...state, ...{ ...action.payload } });
    default:
      return state;
  }

}
