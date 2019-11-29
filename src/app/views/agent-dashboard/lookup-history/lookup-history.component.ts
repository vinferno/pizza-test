import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionAgentRequestLookupHistory } from '../../../store/actions/agent.actions';
import { getAgentLookupHistoryState, getAgentState } from '../../../store/selectors/agent.selectors';
import { Observable } from 'rxjs';
import { LookupHistory } from '../../../store/models/members';

@Component({
  selector: 'vf-lookup-history',
  templateUrl: './lookup-history.component.html',
  styleUrls: ['./lookup-history.component.scss']
})
export class LookupHistoryComponent implements OnInit {

  public lookupHistory$: Observable<LookupHistory[]>;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.lookupHistory$ = this.store.select(getAgentLookupHistoryState);
    this.store.dispatch(new ActionAgentRequestLookupHistory());
  }

}
