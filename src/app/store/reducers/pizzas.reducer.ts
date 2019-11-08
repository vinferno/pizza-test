import { Pizza, PizzasActions } from '../actions/pizzas.actions';
import * as fromPizzas from '../actions/pizzas.actions';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [
    {
      name: 'my pizza',
      toppings: [
        {
          id: 6,
          name: 'mushrooms'
        }
        ]
    }
  ],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasActions,
): PizzaState {
  
  switch ( action.type ) {
    case fromPizzas.LOAD_PIZZAS:
      return {
        ...state,
        loading: true,
      };
    case fromPizzas.LOAD_PIZZAS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case fromPizzas.LOAD_PIZZAS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
  }
  return state;
}
