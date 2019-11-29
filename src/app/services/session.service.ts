import { Injectable } from '@angular/core';
import { ApiService, ResponseOperating } from './api.service';
import { of } from 'rxjs';
import { FormService } from './form.service';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { ActionSessionApiSuccessAgentLogin } from '../store/reducers/session.reducer';
import { ActionRouterRequestAgentLoginSuccess } from '../store/actions/router.actions';
import { ActionAgentUpdateAll } from '../store/actions/agent.actions';
import { ApiAgentLogin, ApiGetOperatingMode } from './endpoints/request';
import { AgentOnly } from '../store/models/agent';

export class  ResponseAgentLogin {
  agent: AgentOnly;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private api: ApiService,
    public formService: FormService,
    private store: Store<any>,
    ) { }
  getOperating() {
    return this.api.request<ResponseOperating>(new ApiGetOperatingMode());
  }
  requestAgentLogin( payload) {
    return this.api.request(new ApiAgentLogin(), this.formService.serializeObj(payload)).pipe(
      map((response: ResponseAgentLogin ) => {
        response.agent.name = response.agent.name.toUpperCase();
        return response;
      }),
      catchError((error: HttpErrorResponse) =>  of(error) )
    );
  }
  requestAgentLoginSuccess( payload): any[] {
    const permissions = 'permissions';
    payload.agent[ permissions ] = payload.permissions;
    return [
      new ActionSessionApiSuccessAgentLogin({...payload.agent}),
      new ActionAgentUpdateAll({...payload.agent}),
      new ActionRouterRequestAgentLoginSuccess(payload)
    ];
  }
}
