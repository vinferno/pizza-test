// contentHeader update all
import { ResponseContentHeaders } from '../../responses';

export const ACTION_CONTENT_HEADER_UPDATE_ALL = '[CONTENT_HEADER] (update) all';
export class ActionContentHeaderUpdateAll {
    readonly type = ACTION_CONTENT_HEADER_UPDATE_ALL;
    constructor(public payload: any) {}
}


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
