import * as fromPizzas from './pizzas.reducer';
import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';
import { StepperReducer } from './stepper/stepper-state';
import { environment } from '../../../environments/environment';

export * from './app.reducer';


export interface ProductsState {
  pizzas: fromPizzas.PizzaState;

}

export const productReducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,

};

export const getProductsState = createFeatureSelector<ProductsState>('products');




