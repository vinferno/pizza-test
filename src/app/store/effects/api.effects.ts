// api Effect
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';

@Injectable()
export class ApiEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}
  // api request agentEnabledCompanies


}
