// agent Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgentService } from '../../services/agent.service';
import { map, switchMap } from 'rxjs/operators';
import { ACTION_AGENT_REQUEST_ENABLED_COMPANIES, ACTION_AGENT_SUCCESS_LOGIN } from '../actions/agent.actions';

@Injectable()
export class AgentEffect {
  constructor(
    private actions$: Actions,
    private agentService: AgentService,
  ) {}

  // agent success login
  @Effect() save = this.actions$.pipe(
      ofType(ACTION_AGENT_SUCCESS_LOGIN),
      map((action: any) => action.payload),
      switchMap(payload => {

        return this.agentService.agentSuccessLogin(payload); }),
      switchMap(res => [
      ])
    );
  // agent request enabledCompanies
  @Effect() enabledCompanies = this.actions$.pipe(
      ofType(ACTION_AGENT_REQUEST_ENABLED_COMPANIES),
      map((action: any) => {
        return action.payload;
      }),
      switchMap((payload) => {
        return this.agentService.agentRequestEnabledCompanies();
      }),
      switchMap(res => [
      ])
    );

}
