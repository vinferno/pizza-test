import { Action } from '@ngrx/store';

// clientManager update full
export const ACTION_CLIENT_MANAGER_UPDATE_FULL = '[CLIENT_MANAGER] (update) full';
export class ActionClientManagerUpdateFull implements Action {
    readonly type = ACTION_CLIENT_MANAGER_UPDATE_FULL;
    constructor(public payload: any) {}
}

