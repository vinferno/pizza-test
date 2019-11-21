import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { of } from 'rxjs';
import { FormService } from './form.service';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AgentOnly } from '../store/reducers/agent.reducer';

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
    return this.api.getSessionOperatingMode();
  }
  login(payload) {
    console.log(payload);
    return this.api.login(this.formService.serializeObj(payload)).pipe(
      map((response: ResponseAgentLogin ) => {
        response.agent.name = response.agent.name.toUpperCase();
        return response;
      }),
      catchError((error: HttpErrorResponse) =>  of(error) )
    );
  }
}
