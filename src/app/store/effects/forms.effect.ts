// list Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FormsService } from '../../services/forms.service';
import { map, switchMap } from 'rxjs/operators';
import {
  ACTION_FORMS_INIT_FORM,
  ACTION_FORMS_REQUEST_UPDATE_FIELD,
  ActionFormsInitSuccessForm,
  ActionFormsUpdateFull
} from '../actions/forms.actions';

@Injectable()
export class FormsEffect {
  constructor(
    private actions$: Actions,
    private formsService: FormsService,
  ) {}
  // list init form
  @Effect() save = this.actions$.pipe(
      ofType(ACTION_FORMS_INIT_FORM),
      map((action: any) => action.payload),
      switchMap(payload => this.formsService.formsInitForm(payload)),
      switchMap(res => [
        new ActionFormsUpdateFull({...res}),
        new ActionFormsInitSuccessForm({res}),
      ])
    );
  // forms request updateField
  @Effect() requestUpdateField = this.actions$.pipe(
      ofType(ACTION_FORMS_REQUEST_UPDATE_FIELD),
      map((action: any) => action.payload),
      switchMap(payload => this.formsService.formsRequestUpdateField(payload)),
      switchMap(res => [
      ])
    );

}
