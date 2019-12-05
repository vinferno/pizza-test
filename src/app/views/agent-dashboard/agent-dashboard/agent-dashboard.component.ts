import { Component, OnInit } from '@angular/core';
import { getUrlState } from '../../../store/selectors/router.selectors';
import { Observable } from 'rxjs';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store/src/serializers/default_serializer';
import { Store } from '@ngrx/store';
import { ClientManagerState } from '../../../store/reducers/client-manager.reducer';
import { getClientManager, getContentHeader } from '../../../store/selectors/content.selectors';
import { ResponseContentHeaders } from '../../../responses';

@Component({
  selector: 'hg-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.scss']
})
export class AgentDashboardComponent implements OnInit {
  public url$: Observable<SerializedRouterStateSnapshot>;
  public clientManager$: Observable<ClientManagerState>;
  contentHeader$: Observable<ResponseContentHeaders>;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.url$ = this.store.select(getUrlState);
    this.clientManager$ = this.store.select(getClientManager);
    this.contentHeader$ = this.store.select(getContentHeader);
  }

}
