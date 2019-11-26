import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  ActionFormsCreateForm,
  ActionFormsUpdateErrors,
  ActionFormsUpdateField,
  HgFormErrorList,
  UpdateFormField
} from '../store/reducers';

export function forbiddenNameValidator(limit: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value > limit;
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private forms: any = {
  };

  constructor(private fb: FormBuilder, private store: Store<any>) { }
  formsInitForm(payload) {
    console.log('formsInit', payload);
    const nameOfForm = payload.nameOfForm;
    this.forms[nameOfForm] = this.fb.group({test: [0, Validators.compose([forbiddenNameValidator(1)])]});
    const formGroup: FormGroup = this.forms[nameOfForm];
    console.log(formGroup);
    const errors = this.getFormValidationErrors(formGroup);
    const newPayload = {nameOfForm, value: formGroup.value, errors};
    this.store.dispatch(new ActionFormsCreateForm(newPayload));
    formGroup.valueChanges.subscribe( value => this.helperFieldUpdate(nameOfForm, value));
    formGroup.statusChanges.subscribe( value => this.statusChanges(nameOfForm, value));
    this.store.dispatch(new ActionFormsUpdateErrors({errors, nameOfForm, status}));
    return of(newPayload);
  }
  formsRequestUpdateField(payload: UpdateFormField) {
    this.forms[payload.nameOfForm].get(payload.field).setValue(payload.value);
    console.log(this.forms[payload.nameOfForm].get(payload.field).value);
    this.store.dispatch(new ActionFormsUpdateField(payload));
    return of(payload);
  }

  private helperFieldUpdate(nameOfForm, value) {
    console.log('helper', value, nameOfForm);
  }
  private statusChanges(nameOfForm, status) {
    const formGroup: FormGroup = this.forms[nameOfForm];
    const errors = this.getFormValidationErrors(formGroup);
    this.store.dispatch(new ActionFormsUpdateErrors({errors, nameOfForm, status}));
  }
  getFormValidationErrors(form: FormGroup): HgFormErrorList {
    const errors = {
      list: [],
    };
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          errors.list.push({key, keyError, value: controlErrors[keyError]});
          errors[key] = keyError;
        });
      }
    });
    return errors;
  }
}
