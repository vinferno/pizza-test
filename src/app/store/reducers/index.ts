import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// pizza state

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
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
