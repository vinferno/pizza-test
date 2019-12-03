import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActionAgentApiRequestAgentLoginSuccess, ActionAgentUpdateAll } from '../store/actions/agent.actions';
import { ApiService } from './api.service';
import { ApiAgentLogin, ApiGetAgentEnabledCompanies, ApiGetMemberSearchHistory } from './endpoints/request';
import { ResponseMemberSearchHistory } from '../store/models/members';
import { FormService } from './form.service';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { EnabledCompanies, ResponseAgentApiRequestAgentLogin } from '../store/models/agent';
import { ActionRouterRequestAgentLoginSuccess } from '../store/actions/router.actions';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private api: ApiService,
    public formService: FormService,
    private store: Store<any>,
  ) {
  }
  public agentRequestLookupHistory() {
    return this.api.request<ResponseMemberSearchHistory>(new ApiGetMemberSearchHistory());
  }
  public agentApiRequestAgentLogin(payload) {
    return this.api.request(new ApiAgentLogin(), this.formService.serializeObj(payload)).pipe(
        map((response: ResponseAgentApiRequestAgentLogin ) => {
          console.log('real response', response);
          response.agent.name = response.agent.name.toUpperCase();
          return response;
        }),
        catchError((error: HttpErrorResponse) =>  of(error) )
      );
  }
  requestAgentLoginSuccess( payload): any[] {
    console.log('SUCCESS', payload);
    const permissions = 'permissions';
    payload.agent[ permissions ] = payload.permissions;
    return [
      new ActionAgentApiRequestAgentLoginSuccess({...payload.agent}),
      new ActionRouterRequestAgentLoginSuccess('')
    ];
  }
  public agentApiRequestAgentEnabledCompanies() {
    return this.api.request<EnabledCompanies>(new ApiGetAgentEnabledCompanies());
  }
}
