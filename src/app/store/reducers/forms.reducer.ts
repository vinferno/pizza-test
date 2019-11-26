// list reducer

export interface UpdateFormField {
  nameOfForm: string;
  field: string;
  value: any;
}

// forms request updateField
export const ACTION_FORMS_REQUEST_UPDATE_FIELD = '[FORMS] (request) update-field';
export class ActionFormsRequestUpdateField {
    readonly type = ACTION_FORMS_REQUEST_UPDATE_FIELD;
    constructor(public payload: UpdateFormField) {}
}

// list update field
export const ACTION_FORMS_UPDATE_FIELD = '[FORMS] (update) field';
export class ActionFormsUpdateField {
    readonly type = ACTION_FORMS_UPDATE_FIELD;
    constructor(public payload: UpdateFormField) {}
}

// forms update full
export const ACTION_FORMS_UPDATE_FULL = '[FORMS] (update) full';
export class ActionFormsUpdateFull {
    readonly type = ACTION_FORMS_UPDATE_FULL;
    constructor(public payload: any) {}
}

interface FormsInit {
  nameOfForm: string;
}
// forms init form
export const ACTION_FORMS_INIT_FORM = '[FORMS] (init) form';
export class ActionFormsInitForm {
    readonly type = ACTION_FORMS_INIT_FORM;
    constructor(public payload: any) {}
}

// forms initSuccess form
export const ACTION_FORMS_INIT_SUCCESS_FORM = '[FORMS] (init-success) form';
export class ActionFormsInitSuccessForm {
    readonly type = ACTION_FORMS_INIT_SUCCESS_FORM;
    constructor(public payload: any) {}
}

interface FormsCreate {
  nameOfForm: string;
  value: any;
  errors: any;
}
// forms create form
export const ACTION_FORMS_CREATE_FORM = '[FORMS] (create) form';
export class ActionFormsCreateForm {
    readonly type = ACTION_FORMS_CREATE_FORM;
    constructor(public payload: FormsCreate) {}
}

export interface HgFormErrorList {
  list: any[];
  [key: string]: any;
}

interface ActionPayloadFormErrors {
  nameOfForm: string;
  errors: HgFormErrorList;
  status: string;
}
// forms update errors
export const ACTION_FORMS_UPDATE_ERRORS = '[FORMS] (update) errors';
export class ActionFormsUpdateErrors {
    readonly type = ACTION_FORMS_UPDATE_ERRORS;
    constructor(public payload: ActionPayloadFormErrors) {}
}

export class FormsState {
  list: any = {};
}
const defaultFormsState = new FormsState();

export type FormsActions =
  ActionFormsUpdateField |
  ActionFormsInitForm |
  ActionFormsUpdateFull |
  ActionFormsUpdateErrors |
  ActionFormsCreateForm;
export function formsReducer(
  state: FormsState = defaultFormsState,
  action: FormsActions
) {
  switch ( action.type ) {
    case ACTION_FORMS_UPDATE_FIELD:
      const tempUpdateField = JSON.parse(JSON.stringify({...state.list}));
      if (state && state.list) {
        if (tempUpdateField[action.payload.nameOfForm]) {
          console.log(tempUpdateField[action.payload.nameOfForm].value[action.payload.field]);
          tempUpdateField[action.payload.nameOfForm].value[action.payload.field] = action.payload.value;
        } else {
          return ({...state});
        }
      }
      return ({...state, ...{ list: tempUpdateField } });
    case ACTION_FORMS_CREATE_FORM:
      const tempCreate = JSON.parse(JSON.stringify({...state.list}));
      if (state && state.list) {
        if (tempCreate[action.payload.nameOfForm]) {
          return ({...state});
        } else {
          tempCreate[action.payload.nameOfForm] = {
            nameOfForm: action.payload.nameOfForm,
            value: action.payload.value,
            errors: action.payload.errors,
          };
        }
      }
      return ({...state, ...{ list: tempCreate } });
    case ACTION_FORMS_UPDATE_FULL:
      const tempUpdateFull = JSON.parse(JSON.stringify({...state.list}));
      if (state && state.list) {
        if (tempUpdateFull[action.payload.nameOfForm]) {
          tempUpdateFull[action.payload.nameOfForm] = {
            nameOfForm: action.payload.nameOfForm,
            value: action.payload.value,
            errors: action.payload.errors,
          };
        } else {
          return ({...state});
        }
      }
      return ({...state, ...{ list: tempUpdateFull } });
    case ACTION_FORMS_UPDATE_ERRORS:
      console.log('err');
      const tempUpdateErrors = JSON.parse(JSON.stringify({...state.list}));
      if (state && state.list) {
        if (tempUpdateErrors[action.payload.nameOfForm]) {
          tempUpdateErrors[action.payload.nameOfForm].errors = action.payload.errors;
          tempUpdateErrors[action.payload.nameOfForm].status = action.payload.status;
        } else {
          return ({...state});
        }
      }
      return ({...state, ...{ list: tempUpdateErrors } });
    default:
      return state;
  }

}
