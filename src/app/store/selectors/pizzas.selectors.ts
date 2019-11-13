import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
);
export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzaEntities,
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
  fromPizzas.getPizzasLoaded,
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading,
);
