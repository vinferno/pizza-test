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
} from '../store/actions/forms.actions';

import * as forms from '../forms/index';
import { isFormGroup } from '../forms/form.consts';

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
    const nameOfForm = payload.nameOfForm;
    console.log(forms);
    console.log(forms[nameOfForm]);
    const correctForm = forms[nameOfForm];
    const nestedFormGroups = [];
    Object.keys(correctForm).forEach( key => {
      if (correctForm[key][0] === isFormGroup) {
        const nest = {
          key,
          value : correctForm[key][1]
        };
        nestedFormGroups.push(nest);
        console.log(key, 'key');
        delete correctForm[key];
      }
    });

    this.forms[nameOfForm] = this.fb.group(correctForm);
    nestedFormGroups.forEach( nest => {
      this.forms[nameOfForm].addControl(nest.key, this.fb.group(nest.value));
    });
    console.log('form', this.forms[nameOfForm]);
    const formGroup: FormGroup = this.forms[nameOfForm];
    const errors = this.getFormValidationErrors(formGroup);
    const newPayload = {nameOfForm, value: formGroup.value, errors};
    this.store.dispatch(new ActionFormsCreateForm(newPayload));
    formGroup.valueChanges.subscribe( value => this.helperFieldUpdate(nameOfForm, value));
    formGroup.statusChanges.subscribe( value => this.statusChanges(nameOfForm, value));
    this.store.dispatch(new ActionFormsUpdateErrors({errors, nameOfForm, status}));
    return of(newPayload);
  }
  formsRequestUpdateField(payload: UpdateFormField) {
    const form = this.forms[payload.nameOfForm];
    form.get(payload.field).setValue(payload.value);
    const invalid = this.findInvalidControls(form);
    console.log('invalid', invalid);
    console.log(payload);
    this.store.dispatch(new ActionFormsUpdateField(payload));
    return of(payload);
  }

  private helperFieldUpdate(nameOfForm, value) {
  }
  private statusChanges(nameOfForm, status) {
    const formGroup: FormGroup = this.forms[nameOfForm];
    const errors = this.getFormValidationErrors(formGroup);
    this.store.dispatch(new ActionFormsUpdateErrors({errors, nameOfForm, status}));
  }
  private getFormValidationErrors(form: FormGroup): HgFormErrorList {
    let errors = {
      list: [],
    };
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          errors.list.push({key, keyError, value: controlErrors[keyError]});
          errors[key] = keyError;
        });
      }
      const secondErrors = this.testIsFormGroup(form.get(key));
      if (secondErrors) {
        errors.list.push(...secondErrors.list);
        errors = {...errors, ...secondErrors};
      }
    });
    console.log('errors', errors);
    return errors;
  }

  public findInvalidControls(form) {
    const invalid = [];
    const controls = form.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log(controls[name], 'control full!!!');
        if (controls[name].controls) {
          console.log('control group', name);
          invalid.push(...this.findInvalidControls(controls[name]));
        } else {
          console.log('!', name);
        }
        console.log('errors!!!', controls[name].errors);
        invalid.push(name);
      }
    }
    console.log('invalid', invalid);
    return invalid;
  }

  public testIsFormGroup(form: any) {
    if (form.controls) {
      console.log('is a form group after test', form);
      return this.getFormValidationErrors(form);
    }
  }
}
