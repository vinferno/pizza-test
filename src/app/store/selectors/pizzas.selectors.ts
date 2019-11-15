import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import { PizzaState } from '../reducers/pizzas.reducer';

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);
export const getPizzasEntities = createSelector(
  getPizzaState,
  ( state: PizzaState ) => state.entities,
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => {
    console.log('entites', entities);
    if (!entities) {
      return [];
    }
    return Object.keys(entities).map( id => entities[parseInt(id, 10)]);
  },
);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  ( state: PizzaState ) => state.loaded,
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  ( state: PizzaState ) => state.loading,
);
