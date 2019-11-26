import { Injectable } from '@angular/core';
import { ActionAgentUpdateAll } from '../store/reducers';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor() { }
  agentSuccessLogin(payload) {
    return of(new ActionAgentUpdateAll(payload));
  }
}
