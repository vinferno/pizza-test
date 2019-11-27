import { Action } from '@ngrx/store';

// system update operatingMode
export const ACTION_SYSTEM_UPDATE_OPERATING_MODE = '[SYSTEM] (update) operating-mode';
export class ActionSystemUpdateOperatingMode implements Action {
    readonly type = ACTION_SYSTEM_UPDATE_OPERATING_MODE;
    constructor(public payload: any) {}
}

