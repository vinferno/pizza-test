import {Action} from '@ngrx/store';
interface Topping {
  id?: number;
  name?: string;
  [key: string]: any;
}

export interface Pizza {
  id?: number;
  name?: string;
  toppings?: Topping[];
}

// load pizzas
export const LOAD_PIZZAS =  '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL =  '[Products] Load Pizzas';
export const LOAD_PIZZAS_SUCCESS =  '[Products] Load Pizzas';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export type PizzasActions = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;
