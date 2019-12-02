// clientManager reducer
import { ACTION_CLIENT_MANAGER_UPDATE_FULL, ActionClientManagerUpdateFull } from '../actions/client-manager.actions';

export class ClientManagerRoute {
  textForDisplay: string = 'test string for display';
  routeValue: string = 'test string route value';
}
export class ClientManagerState {
  displayType: string = 'test string for displayType';
  routes: ClientManagerRoute[] = [new ClientManagerRoute()];
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
