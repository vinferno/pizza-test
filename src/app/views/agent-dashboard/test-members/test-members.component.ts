import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionAgentRequestEnabledCompanies } from '../../../store/actions/agent.actions';
import { Store } from '@ngrx/store';
import { getAgentState } from '../../../store/selectors/agent.selectors';
import { AgentState } from '../../../store/models/agent';

@Component({
  selector: 'vf-test-members',
  templateUrl: './test-members.component.html',
  styleUrls: ['./test-members.component.scss']
})
export class TestMembersComponent implements OnInit {

  agent$: Observable<AgentState>;

  public selectedValue;
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.agent$ = this.store.select(getAgentState);
    this.store.dispatch(new ActionAgentRequestEnabledCompanies(''));
  }
  testMemberSelection(event) {


    console.dir(event);
  }

}
