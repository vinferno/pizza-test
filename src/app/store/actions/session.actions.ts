// session fail getOperating
export const ACTION_SESSION_FAIL_GET_OPERATING = '[SESSION] (fail) get-operating';
export class ActionSessionFailGetOperating {
    readonly type = ACTION_SESSION_FAIL_GET_OPERATING;
    constructor(public payload: any) {}
}

