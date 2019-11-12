
import * as fromPizzas from '../actions/pizzas.actions';


export interface PizzaState {
  data: fromPizzas.Pizza[];
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
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
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

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;


