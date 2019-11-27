// system reducer
import { ACTION_SYSTEM_UPDATE_OPERATING_MODE, ActionSystemUpdateOperatingMode } from '../actions/system.actions';

export class SystemState {
  operatingMode: string;
}
export const defaultSystemState = new SystemState();
export type SystemActions = ActionSystemUpdateOperatingMode;
export function systemReducer(
  state: SystemState = defaultSystemState,
  action: SystemActions
) {
  switch ( action.type ) {
    case ACTION_SYSTEM_UPDATE_OPERATING_MODE:
      return ({...state, ...{ operatingMode: action.payload } });
    default:
      return state;
  }

}
