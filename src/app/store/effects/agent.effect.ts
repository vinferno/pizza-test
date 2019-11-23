// agent Effect
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AgentService } from '../../services/agent.service';
import { map, switchMap } from 'rxjs/operators';
import { ACTION_AGENT_SUCCESS_LOGIN } from '../reducers';

@Injectable()
export class AgentEffect {
  constructor(
    private actions$: Actions,
    private agentService: AgentService,
  ) {}

  // agent success login
  @Effect() save = this.actions$.pipe(
      ofType(ACTION_AGENT_SUCCESS_LOGIN),
      map((action: any) => action.payload),
      switchMap(payload => this.agentService.agentSuccessLogin(payload)),
      switchMap(res => [
      ])
    );

}
