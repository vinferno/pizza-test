import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../../../store/actions';
import { LoadPizzas } from '../../../store';
import { getSelectedIds } from '../../../store/selectors/users.selectors';
import { RequestSessionOperatingMode, SessionState, UpdateOperatingMode } from '../../../store/reducers/session.reducer';
@Component({
  selector: 'vf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public pizzas$: Observable<Pizza[]>;
  public selected$ = null;
  public session$: Observable<SessionState>;
  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.selected$ = this.store.select(getSelectedIds);
    this.session$ = this.store.select('session');
    this.store.dispatch(new UpdateOperatingMode('new value'));
    this.store.dispatch(new RequestSessionOperatingMode());
  }

  public login() {
    console.log('log in')
  }
}
