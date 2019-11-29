import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ActionAgentUpdateName } from '../store/actions/agent.actions';
import { ApiService } from './api.service';
import { ApiGetClientManager } from './endpoints/request';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router,
    private api: ApiService,
    ) { }
  requestAgentLoginSuccess(payload) {
    this.router.navigate(['counselor']);
    return of(new ActionAgentUpdateName('next'));
  }
  routerRequestAuthGuardFail(payload) {
    this.router.navigate(['']);
    return of(null);
  }
  getClientManager(payload: any) {
    return this.api.request(new ApiGetClientManager(), payload.routerState);
  }
}
