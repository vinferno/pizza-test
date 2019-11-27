import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionAgentRequestEnabledCompanies, AgentState } from '../../../store/actions/agent.actions';
import { getAgentState } from '../../../store/selectors/agent.selectors';
import { Observable } from 'rxjs';
import { ResponseContentHeaders } from '../../../responses';
import { getClientManager, getContentHeader } from '../../../store/selectors/content.selectors';
import { getContentState } from '../../../store/reducers/content.map';
import { ClientManagerState } from '../../../store/reducers/client-manager.reducer';
import { RouterStateUrl } from '../../../store/reducers';
import { getUrlState } from '../../../store/selectors/router.selectors';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store/src/serializers/default_serializer';

@Component({
  selector: 'vf-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {
  agent$: Observable<AgentState>;
  public clientManager$: Observable<ClientManagerState>;
  contentHeader$: Observable<ResponseContentHeaders>;
  public url$: Observable<SerializedRouterStateSnapshot>;
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.agent$ = this.store.select(getAgentState);
    this.clientManager$ = this.store.select(getClientManager);
    this.contentHeader$ = this.store.select(getContentHeader);
    this.url$ = this.store.select(getUrlState);
    this.store.dispatch(new ActionAgentRequestEnabledCompanies(''));
  }

}
