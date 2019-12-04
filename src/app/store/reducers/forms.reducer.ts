import {
  ACTION_FORMS_CREATE_FORM, ACTION_FORMS_UPDATE_ERRORS,
  ACTION_FORMS_UPDATE_FIELD,
  ACTION_FORMS_UPDATE_FULL, defaultFormsState,
  FormsActions,
  FormsState
} from '../actions/forms.actions';

export function formsReducer(
  state: FormsState = defaultFormsState,
  action: FormsActions
) {
  switch ( action.type ) {
    case ACTION_FORMS_UPDATE_FIELD:
      const tempUpdateField = JSON.parse(JSON.stringify({...state.list}));
      const fields = action.payload.field.split('.');
      console.log('tempField', tempUpdateField);
      if (state && state.list) {
        if (tempUpdateField[action.payload.nameOfForm]) {
          if (fields.length > 1) {
            tempUpdateField[action.payload.nameOfForm].value[fields[0]][fields[1]] = action.payload.value;
          } else {
            tempUpdateField[action.payload.nameOfForm].value[action.payload.field] = action.payload.value;
          }
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
      const oldState = JSON.parse(JSON.stringify({...state}));
      const newState = JSON.parse(JSON.stringify({...state}));
      if (!(state && state.list && state.list[action.payload.nameOfForm])) {
        return ({...state});
      }
      newState.list[action.payload.nameOfForm] = {
        nameOfForm: action.payload.nameOfForm,
        value: action.payload.value,
        errors: action.payload.errors,
      };

      oldState.list = newState.list;
      return ({...oldState});
    case ACTION_FORMS_UPDATE_ERRORS:
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
