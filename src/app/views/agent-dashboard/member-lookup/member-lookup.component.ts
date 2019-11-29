import { Component, OnInit } from '@angular/core';
import { getAgentState } from '../../../store/selectors/agent.selectors';
import { ActionAgentRequestEnabledCompanies } from '../../../store/actions/agent.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AgentState } from '../../../store/models/agent';

@Component({
  selector: 'vf-member-lookup',
  templateUrl: './member-lookup.component.html',
  styleUrls: ['./member-lookup.component.scss']
})
export class MemberLookupComponent implements OnInit {

  agent$: Observable<AgentState>;

  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.agent$ = this.store.select(getAgentState);
    this.store.dispatch(new ActionAgentRequestEnabledCompanies(''));
  }

}
