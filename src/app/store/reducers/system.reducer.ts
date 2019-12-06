// system reducer
import {
  ACTION_SYSTEM_API_REQUEST_OPERATING_SUCCESS,
  ACTION_SYSTEM_UPDATE_OPERATING_MODE, ActionSystemApiRequestOperatingSuccess,
  ActionSystemUpdateOperatingMode
} from '../actions/system.actions';

export class SystemState {
  operatingMode: string;
  version: string;
  linkHome: string;
  linkAbout: string;
  linkAdministrators: string;
  linkBrokers: string;
}
export const defaultSystemState = new SystemState();
export type SystemActions = ActionSystemApiRequestOperatingSuccess;
export function systemReducer(
  state: SystemState = defaultSystemState,
  action: SystemActions
) {
  switch ( action.type ) {
    case ACTION_SYSTEM_API_REQUEST_OPERATING_SUCCESS:
      return ({...state, ...{ operatingMode: action.payload } });
    default:
      return state;
  }

}
