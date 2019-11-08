import {Action} from '@ngrx/store';
import { Actions } from '@ngrx/store-devtools/src/reducer';
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

// @ts-ignore
export class LoadPizzas implements Actions {
  readonly type = LOAD_PIZZAS;
}

// @ts-ignore
export class LoadPizzasFail implements Actions {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

// @ts-ignore
export class LoadPizzasSucces implements Actions {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

export type PizzasActions = LoadPizzas | LoadPizzasFail | LoadPizzasSucces;
