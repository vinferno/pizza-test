import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ActionApiRequestAgentEnabledCompanies } from '../store/actions/api.actions';
import { Store } from '@ngrx/store';
import { ActionAgentUpdateAll } from '../store/actions/agent.actions';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private store: Store<any>) {
  }
  public agentSuccessLogin(payload) {
    return of(new ActionAgentUpdateAll(payload));
  }
  public agentRequestEnabledCompanies() {
    console.log('Service: Agent, request enabled companies');
    this.store.dispatch(new ActionApiRequestAgentEnabledCompanies());
    return of(new ActionApiRequestAgentEnabledCompanies());
  }
}
