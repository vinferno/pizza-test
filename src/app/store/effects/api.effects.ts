// api Effect
import { Injectable } from '@angular/core';
import { ACTION_API_REQUEST_AGENT_ENABLED_COMPANIES } from '../actions/api.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { map, switchMap } from 'rxjs/operators';
import { ActionAgentUpdateAgentCompanies, EnabledCompanies } from '../actions/agent.actions';
import { ApiGetAgentEnabledCompanies } from '../../services/endpoints/request';

@Injectable()
export class ApiEffect {
  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}
  // api request agentEnabledCompanies
  @Effect() agentEnabledCompanies = this.actions$.pipe(
      ofType(ACTION_API_REQUEST_AGENT_ENABLED_COMPANIES),
      map((action: any) => action.payload),
      switchMap(payload => {
        return this.apiService.request<EnabledCompanies>(new ApiGetAgentEnabledCompanies());
      }),
      switchMap(res => [
        new ActionAgentUpdateAgentCompanies(res.agentCompanies)
      ])
    );

}
