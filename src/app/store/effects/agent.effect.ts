// agent Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgentService } from '../../services/agent.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES,
  ACTION_AGENT_API_REQUEST_AGENT_LOGIN,
  ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION,
  ACTION_AGENT_API_REQUEST_TEST_MEMBERS,
  ACTION_AGENT_REQUEST_LOOKUP_HISTORY,
  ActionAgentApiRequestAgentEnabledCompaniesFail,
  ActionAgentApiRequestAgentEnabledCompaniesSuccess,
  ActionAgentApiRequestAgentLoginFail, ActionAgentApiRequestGetMemberSpecificationFail,
  ActionAgentApiRequestGetMemberSpecificationSuccess,
  ActionAgentApiRequestTestMembersFail,
  ActionAgentApiRequestTestMembersSuccess,
  ActionAgentUpdateLookupHistory,
} from '../actions/agent.actions';
import { ResponseMemberSearchHistory } from '../models/members';
import { of } from 'rxjs';
import { AgentOnly, EnabledCompanies, ResponseAgentApiRequestAgentLogin } from '../models/agent';
import { ResponseAgentApiRequestGetMemberSpecification, ResponseAgentApiRequestTestMembers } from '../../services/endpoints/responses';

@Injectable()
export class AgentEffect {
  constructor(
    private actions$: Actions,
    private agentService: AgentService,
  ) {}

  // agent apiRequest agentLogin
  @Effect() agentLogin = this.actions$.pipe(
       ofType(ACTION_AGENT_API_REQUEST_AGENT_LOGIN),
       map((action: any) => action.payload),
      switchMap((payload) => {
        return this.agentService.agentApiRequestAgentLogin(payload).pipe(
          map((res: ResponseAgentApiRequestAgentLogin) => res),
          switchMap((res: ResponseAgentApiRequestAgentLogin) => [
            ...this.agentService.requestAgentLoginSuccess(res),
          ]),
          catchError((error) => {
            return of(new ActionAgentApiRequestAgentLoginFail(error));
            }
            )
        );
      })
    );

  // agent apiRequest agentEnabledCompanies
  @Effect() agentEnabledCompanies = this.actions$.pipe(
       ofType(ACTION_AGENT_API_REQUEST_AGENT_ENABLED_COMPANIES),
       map((action: any) => action.payload),
      switchMap((payload) => {
        return this.agentService.agentApiRequestAgentEnabledCompanies().pipe(
          map((res: AgentOnly) => res.agentCompanies),
          switchMap((res: EnabledCompanies[]) => [
            new ActionAgentApiRequestAgentEnabledCompaniesSuccess(res),
          ]),
          catchError((error) => of(new ActionAgentApiRequestAgentEnabledCompaniesFail(error)))
        );
      })
    );

  // agent request lookupHistory
  @Effect() lookupHistory = this.actions$.pipe(
      ofType(ACTION_AGENT_REQUEST_LOOKUP_HISTORY),
      map((action: any) => action.payload),
      switchMap(payload => this.agentService.agentRequestLookupHistory()),
      switchMap(( res: ResponseMemberSearchHistory) => [
        new ActionAgentUpdateLookupHistory(res.matchingMembers)
      ])
    );

  // agent apiRequest testMembers
  @Effect() testMembers = this.actions$.pipe(
       ofType(ACTION_AGENT_API_REQUEST_TEST_MEMBERS),
       map((action: any) => action.payload),
      switchMap((payload) => {
        return this.agentService.agentApiRequestTestMembers(payload).pipe(
          map((res: ResponseAgentApiRequestTestMembers) => res),
          switchMap((res: ResponseAgentApiRequestTestMembers) => [
            new ActionAgentApiRequestTestMembersSuccess(res),
          ]),
          catchError((error) => of(new ActionAgentApiRequestTestMembersFail(error)))
        );
      })
    );

  // EFFECT LISTENER
// agent apiRequest getMemberSpecification
  @Effect() getMemberSpecification = this.actions$.pipe(
    ofType(ACTION_AGENT_API_REQUEST_GET_MEMBER_SPECIFICATION),
    map((action: any) => action.payload),
    switchMap((payload) => {
      return this.agentService.agentApiRequestGetMemberSpecification(payload).pipe(
        map((res: ResponseAgentApiRequestGetMemberSpecification) => res),
        switchMap((res: ResponseAgentApiRequestGetMemberSpecification) => [
          new ActionAgentApiRequestGetMemberSpecificationSuccess(res),
        ]),
        catchError((error) => of(new ActionAgentApiRequestGetMemberSpecificationFail(error)))
      );
    })
  );
}
