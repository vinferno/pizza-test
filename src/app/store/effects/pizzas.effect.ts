import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as pizzaActions from '../actions/pizzas.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {PizzaService} from '../../services/pizza.service';
import {Pizza} from '../actions';
import {of} from 'rxjs';

@Injectable()
export class PizzasEffect {
  constructor(private actions$: Actions, private pizzaServie: PizzaService) {
  }

  @Effect()
  loadPizzas$ = this.actions$.pipe(
    ofType(pizzaActions.LOAD_PIZZAS),
    switchMap(() => {
      console.log('switch');
      return this.pizzaServie.getPizzas().pipe(
        map((pizzas: Pizza[]) => new pizzaActions.LoadPizzasSuccess(pizzas)),
        catchError( (error) => of(new pizzaActions.LoadPizzasFail(error)))
      );
    }),
  );
}
