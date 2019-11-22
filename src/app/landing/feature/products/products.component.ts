import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../../../store/actions';
import { AgentState, LoadPizzas } from '../../../store';
import { getSelectedIds } from '../../../store/selectors/users.selectors';
import { RequestLogin, RequestSessionOperatingMode, SessionState, UpdateOperatingMode } from '../../../store/reducers/session.reducer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getAgentState } from '../../../store/selectors/agent.selectors';
@Component({
  selector: 'vf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public pizzas$: Observable<Pizza[]>;
  public selected$ = null;
  public session$: Observable<SessionState>;
  public loginForm: FormGroup;
  public agent$: Observable<AgentState>;
  constructor(
    private store: Store<fromStore.ProductsState>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.selected$ = this.store.select(getSelectedIds);
    this.session$ = this.store.select('session');
    this.agent$ = this.store.select(getAgentState);
    this.store.dispatch(new RequestSessionOperatingMode());
    this.loginForm = this.fb.group({
      username: ['hgs.vinson.fernandez'],
      password: ['password1'],
      reCaptcha: [true],
      agentLocation: ['L'],
      adminDirectSystem: 'C',
      location: this.fb.group({
        adminCity: ['fresno'],
        adminState: ['CA'],
      }),
    });
  }

  public login() {
    this.store.dispatch(new RequestLogin(this.loginForm.value));
  }

}
