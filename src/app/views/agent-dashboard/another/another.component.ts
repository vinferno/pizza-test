import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionAgentRequestEnabledCompanies, AgentState } from '../../../store/actions/agent.actions';
import { getAgentState } from '../../../store/selectors/agent.selectors';
import { Observable } from 'rxjs';
import { ResponseContentHeaders } from '../../../responses';
import { getContentHeader } from '../../../store/selectors/content.selectors';

@Component({
  selector: 'vf-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss']
})
export class AnotherComponent implements OnInit {
  agent$: Observable<AgentState>;
  contentHeader$: Observable<ResponseContentHeaders>;
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.agent$ = this.store.select(getAgentState);
    this.contentHeader$ = this.store.select(getContentHeader);
    this.contentHeader$.subscribe( answer => {
      console.log(answer, 'answer');
    });
    this.store.dispatch(new ActionAgentRequestEnabledCompanies(''));
  }

}
