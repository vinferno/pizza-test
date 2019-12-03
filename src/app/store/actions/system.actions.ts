import { Action } from '@ngrx/store';

// system update operatingMode
export const ACTION_SYSTEM_UPDATE_OPERATING_MODE = '[SYSTEM] (update) operating-mode';
export class ActionSystemUpdateOperatingMode implements Action {
    readonly type = ACTION_SYSTEM_UPDATE_OPERATING_MODE;
    constructor(public payload: any) {}
}

// system apiRequest operating
export const ACTION_SYSTEM_API_REQUEST_OPERATING = '[SYSTEM] (api-request) operating';
export class ActionSystemApiRequestOperating implements Action {
    readonly type = ACTION_SYSTEM_API_REQUEST_OPERATING;
    constructor(public payload: any) {}
}

// system apiRequest operatingSuccess
export const ACTION_SYSTEM_API_REQUEST_OPERATING_SUCCESS = '[SYSTEM] (api-request) operating-success';
export class ActionSystemApiRequestOperatingSuccess implements Action {
    readonly type = ACTION_SYSTEM_API_REQUEST_OPERATING_SUCCESS;
    constructor(public payload: any) {}
}

// system apiRequest operatingFail
export const ACTION_SYSTEM_API_REQUEST_OPERATING_FAIL = '[SYSTEM] (api-request) operating-fail';
export class ActionSystemApiRequestOperatingFail implements Action {
    readonly type = ACTION_SYSTEM_API_REQUEST_OPERATING_FAIL;
    constructor(public payload: any) {}
}

