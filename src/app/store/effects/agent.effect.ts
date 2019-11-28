// agent Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgentService } from '../../services/agent.service';
import { map, switchMap } from 'rxjs/operators';
import {
  ACTION_AGENT_REQUEST_ENABLED_COMPANIES,
  ACTION_AGENT_REQUEST_LOOKUP_HISTORY,
  ACTION_AGENT_SUCCESS_LOGIN, ActionAgentUpdateLookupHistory
} from '../actions/agent.actions';

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

  // agent request lookupHistory
  @Effect() lookupHistory = this.actions$.pipe(
      ofType(ACTION_AGENT_REQUEST_LOOKUP_HISTORY),
      map((action: any) => action.payload),
      switchMap(payload => this.agentService.agentRequestLookupHistory()),
      switchMap(res => [
        new ActionAgentUpdateLookupHistory(res.matchingMembers)
      ])
    );

}
