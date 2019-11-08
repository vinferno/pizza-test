import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from '../../../store/actions/pizzas.actions';
@Component({
  selector: 'vf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public state;
  public pizzas$: Observable<Pizza[]>;
  constructor(private store: Store<fromStore.ProductsState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
  }

}
