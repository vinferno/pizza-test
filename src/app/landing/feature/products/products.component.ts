import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../../../store/actions';
import { LoadPizzas } from '../../../store';
import { getSelectedIds } from '../../../store/selectors/users.selectors';
@Component({
  selector: 'vf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public pizzas$: Observable<Pizza[]>;
  public selected$ = null;
  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    this.store.dispatch(new fromStore.LoadPizzas());
    this.selected$ = this.store.select(getSelectedIds);
  }

}
