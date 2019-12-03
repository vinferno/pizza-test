import { Action } from '@ngrx/store';


// contentHeader apiRequest clientManager
export const ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER = '[CONTENT_HEADER] (api-request) client-manager';
export class ActionContentHeaderApiRequestClientManager implements Action {
    readonly type = ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER;
    constructor(public payload: any) {}
}
export const ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER_FAIL = '[CONTENT_HEADER] (api-request) client-manager-fail';
export class ActionContentHeaderApiRequestClientManagerFail implements Action {
    readonly type = ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER_FAIL;
    constructor(public payload: any) {}
}
export const ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER_SUCCESS = '[CONTENT_HEADER] (api-request) client-manager-success';
export class ActionContentHeaderApiRequestClientManagerSuccess implements Action {
    readonly type = ACTION_CONTENT_HEADER_API_REQUEST_CLIENT_MANAGER_SUCCESS;
    constructor(public payload: any) {}
}

