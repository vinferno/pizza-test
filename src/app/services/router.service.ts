import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ActionAgentUpdateName } from '../store/actions/agent.actions';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  requestAgentLoginSuccess(payload) {
    this.router.navigate(['counselor']);
    return of(new ActionAgentUpdateName('next'));
  }
  routerRequestAuthGuardFail(payload) {
    this.router.navigate(['']);
    return of(null);
  }
  getClientManager(payload) {
    console.log('payload', payload);
    return of(payload);
  }
}
