import * as fromPizzas from '../actions/pizzas.actions';

export interface PizzaState {
  entities: { [ id: number ]: fromPizzas.Pizza };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities : null,
  loaded : false,
  loading : false,
};

export function reducer( state = initialState, action: fromPizzas.PizzasActions, ): PizzaState {
  switch ( action.type ) {
    case fromPizzas.LOAD_PIZZAS:
      return {
        ...state,
        loading : true,
      };
    case fromPizzas.LOAD_PIZZAS_SUCCESS:
      return {
        ...state,
        loading : false,
        loaded : true,
        entities: action.payload.reduce ( ( entities: { [ id: number ]: fromPizzas.Pizza }, pizza ) => {
          return {
            ...entities,
            [ pizza.id ] : pizza
          };
        }, {
          ...state.entities
        } ),
      };
    case fromPizzas.LOAD_PIZZAS_FAIL:
      return {
        ...state,
        loading : false,
        loaded : true,
      };
  }
  return state;
}
