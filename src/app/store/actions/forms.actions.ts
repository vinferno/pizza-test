// list reducer

export interface UpdateFormField {
  nameOfForm: string;
  field: string;
  value: any;
}

interface FormsCreate {
  nameOfForm: string;
  value: any;
  errors: any;
}

interface FormsInit {
  nameOfForm: string;
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

export class FormsState {
  list: any = {};
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
  constructor(public payload: FormsCreate) {}
}


// forms init form
export const ACTION_FORMS_INIT_FORM = '[FORMS] (init) form';
export class ActionFormsInitForm {
  readonly type = ACTION_FORMS_INIT_FORM;
  constructor(public payload: FormsInit) {}
}

// forms initSuccess form
export const ACTION_FORMS_INIT_SUCCESS_FORM = '[FORMS] (init-success) form';
export class ActionFormsInitSuccessForm {
  readonly type = ACTION_FORMS_INIT_SUCCESS_FORM;
  constructor(public payload: any) {}
}

// forms create form
export const ACTION_FORMS_CREATE_FORM = '[FORMS] (create) form';
export class ActionFormsCreateForm {
  readonly type = ACTION_FORMS_CREATE_FORM;
  constructor(public payload: FormsCreate) {}
}

// forms update errors
export const ACTION_FORMS_UPDATE_ERRORS = '[FORMS] (update) errors';
export class ActionFormsUpdateErrors {
  readonly type = ACTION_FORMS_UPDATE_ERRORS;
  constructor(public payload: ActionPayloadFormErrors) {}
}


export const defaultFormsState = new FormsState();

export type FormsActions =
  ActionFormsUpdateField |
  ActionFormsInitForm |
  ActionFormsUpdateFull |
  ActionFormsUpdateErrors |
  ActionFormsCreateForm;
