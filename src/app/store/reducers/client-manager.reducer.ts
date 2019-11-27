// clientManager reducer
import { ACTION_CLIENT_MANAGER_UPDATE_FULL, ActionClientManagerUpdateFull } from '../actions/client-manager.actions';

export class ClientManagerRoute {
  textForDisplay: string;
  routeValue: string;
}
export class ClientManagerState {
  displayType: string = '';
  routes: ClientManagerRoute[] = [];
}
export const defaultClientManagerState = new ClientManagerState();
export type ClientManagerActions = ActionClientManagerUpdateFull;
export function clientManagerReducer(
  state: ClientManagerState = defaultClientManagerState,
  action: ClientManagerActions
) {
  switch ( action.type ) {
    case ACTION_CLIENT_MANAGER_UPDATE_FULL:
      return ({...state, ...action.payload });
    default:
      return state;
  }

}
