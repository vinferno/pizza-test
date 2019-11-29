import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ActionApiRequestAgentEnabledCompanies } from '../store/actions/api.actions';
import { Store } from '@ngrx/store';
import { ActionAgentUpdateAll } from '../store/actions/agent.actions';
import { ApiService } from './api.service';
import { ApiGetMemberSearchHistory } from './endpoints/request';
import { ResponseMemberSearchHistory } from '../store/models/members';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(
    private store: Store<any>,
    private api: ApiService,
  ) {
  }
  public agentSuccessLogin(payload) {
    return of(new ActionAgentUpdateAll(payload));
  }
  public agentRequestEnabledCompanies() {
    this.store.dispatch(new ActionApiRequestAgentEnabledCompanies());
    return of(new ActionApiRequestAgentEnabledCompanies());
  }
  public agentRequestLookupHistory() {
    return this.api.request<ResponseMemberSearchHistory>(new ApiGetMemberSearchHistory());
  }
}
