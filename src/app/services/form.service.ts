import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, } from '@angular/forms';

@Injectable()
export class FormService {
  constructor(
    private fb: FormBuilder,
  ) {	}

  /**
   * Adds a `FormControl` to a passed in `FormGroup` instance.
   * Checks for specified `FormControl` name to prevent duplicates.
   * Can add validators to the `FormControl` itself.
   */
  public addFormControl(form: FormGroup, formName: string, validators: ValidatorFn[]): void {
    if (form.contains(formName)) { form.removeControl(formName); }
    return form.addControl(formName, new FormControl('', Validators.compose([...validators])));
  }

  /**
   * Adds `FormArray` list from iterator to a passed in `FormGroup` instance.
   * Checks for specified nested `FormGroup` name to prevent duplicates.
   * Can add validators to the `FormGroup` itself.
   */
  public addFormArray<T>(form: FormGroup, formName: string, iterator: T, validators: ValidatorFn[], isDisabled: boolean = false, blacklist: string[] = []): FormGroup {
    if (form.contains(formName)) { form.removeControl(formName); }
    form.addControl(formName, new FormArray([], Validators.compose([...validators])));

    if (Array.isArray(iterator)) {
      iterator.forEach((listMember: T) => {
        const formArray = form.get(formName) as FormArray;
        formArray.push(this.createFormArrayElement(listMember));
      });
    } else {
      iterator[formName].forEach((listMember: T) => {
        const formArray = form.get(formName) as FormArray;
        formArray.push(this.createFormArrayElement(listMember));
      });
    }

    if (isDisabled) { this.disableFormArrayControls(form, formName, blacklist); }

    return form;
  }

  /**
   * Adds a nested `FormGroup` to a passed in `FormGroup` instance with passed in `sourceObject` properties.
   * Checks for specified nested `FormGroup` name to prevent duplicates.
   * Can add validators to the `FormGroup` itself.
   */
  public addFormGroupSimple<T>(form: FormGroup, formGroupName: string, sourceObject: T, validators: ValidatorFn[]): FormGroup {
    if (form.contains(formGroupName)) { form.removeControl(formGroupName); }
    form.addControl(formGroupName, new FormGroup({ }));

    for (const property in sourceObject) {
      if (sourceObject.hasOwnProperty(property)) {
        this.addFormControl(form.get(formGroupName) as FormGroup, property, [...validators]);
      }
    }

    return form;
  }

  /**
   * Disables `FormControls` within the passed in `FormGroup`. Can exclude specific `FormControls` via the `blacklist`.
   */
  public disableFormGroupControls(formGroup: FormGroup, blacklist: string[] = []): FormGroup {
    for (const property in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(property) && !blacklist.includes(property)) {
        formGroup.get(property).disable();
      }
    }

    return formGroup;
  }

  /**
   * Disables `FormControls` within the passed in `FormArray`. Can exclude specific `FormControls` via the `blacklist`.
   */
  public disableFormArrayControls(form: FormGroup, formName: string, blacklist: string[] = []): FormArray {
    const formArray = form.get(formName) as FormArray;
    formArray.controls.forEach((formGroup: FormGroup) => this.disableFormGroupControls(formGroup, blacklist));
    return formArray;
  }

  /**
   * Toggle whether `FormGroup` is enabled or disabled.
   */
  public toggleFormControls(form: FormGroup, shouldDisable: boolean, blacklist: string[] = []): FormGroup {
    for (const property in form.controls) {
      if (form.controls.hasOwnProperty(property) && !blacklist.includes(property)) {
        (shouldDisable)
          ? form.get(property).enable({ emitEvent: false })
          : form.get(property).disable({ emitEvent: false });
      }
    }

    return form;
  }

  public serializeObj(object): string {
    let component: string;
    let serializedObject: string = '';

    for (const property in object) {
      if (object.hasOwnProperty(property)) {
        component = `${property}=${encodeURIComponent(object[property])}&`;
        serializedObject = serializedObject + component;
      }
    }

    return serializedObject = serializedObject.substring(0, serializedObject.length - 1);
  }

  public serializeString( value: string): string {
    return encodeURIComponent(value);
  }

  private createFormArrayElement<T>(formArrayElement: T): FormGroup {
    return this.fb.group(formArrayElement);
  }
}
