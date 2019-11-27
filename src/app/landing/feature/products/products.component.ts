import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionSessionApiRequestAgentLogin, ActionSessionApiRequestOperating } from '../../../store/reducers/session.reducer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SystemState } from '../../../store/reducers/system.reducer';
import { getSystemState } from '../../../store/selectors/system.selectors';

@Component({
  selector: 'vf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public loginForm: FormGroup;
  public system$: Observable<SystemState>;
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.system$ = this.store.select(getSystemState);
    this.store.dispatch(new ActionSessionApiRequestOperating());
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
    this.store.dispatch(new ActionSessionApiRequestAgentLogin(this.loginForm.value));
  }

}
