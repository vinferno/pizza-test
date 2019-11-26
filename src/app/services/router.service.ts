import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActionAgentUpdateName } from '../store/reducers';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  agentLoginSuccess() {
    console.log('requestAgentLogin success router');
  }
  requestAgentLoginSuccess(payload) {
    console.log('router service', 'requestAgentLoginSuccess');
    this.router.navigate(['agent-dashboard']);
    return of(new ActionAgentUpdateName('next'));
  }
  routerRequestAuthGuardFail(payload) {
    this.router.navigate(['agent-dashboard']);
    return of(new ActionAgentUpdateName(''));
  }
}
