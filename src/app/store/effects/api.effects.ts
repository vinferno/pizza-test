// api Effect
import { Injectable } from '@angular/core';
import { ACTION_API_REQUEST_AGENT_ENABLED_COMPANIES } from '../actions/api.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { map, switchMap } from 'rxjs/operators';
import { ActionAgentUpdateAgentCompanies } from '../actions/agent.actions';

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
        console.log('get enabled');
        return this.apiService.agent.enabledCompanies.get();
      }),
      switchMap(res => [
        new ActionAgentUpdateAgentCompanies(res.agentCompanies)
      ])
    );

}
