import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector } from '@ngrx/store';


export class  User {
  id: string;
  name: string;
  constructor() {
    this.id = new Date().getUTCMilliseconds().toString();
  }
}


export const usersAdapter = createEntityAdapter<User>();
export class UsersState implements EntityState<User> {
  ids: string[];
  entities: {[key: string]: User};
  selected: string;
}

const defaultUsersState = new UsersState();

export const initialStateUsers: UsersState = usersAdapter.getInitialState(defaultUsersState);

export const CREATE     = '[Users] Create';
export const UPDATE     = '[Users] Update';
export const DELETE     = '[Users] Delete';
export const SELECT     = '[Users] Select';

export class Create implements Action {
  readonly type = CREATE;
  constructor(public test: User) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<User>,
  ) { }
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) { }
}
export class Select implements Action {
  readonly type = SELECT;
  constructor(public id: string) {
  }
}

export type UsersActions
  = Create
  | Update
  | Delete
  | Select;

export function usersReducer(
  state: UsersState = initialStateUsers,
  action: UsersActions
) {

  switch (action.type) {

    case CREATE:
      return usersAdapter.addOne(action.test, state);

    case UPDATE:
      return usersAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);

    case DELETE:
      return usersAdapter.removeOne(action.id, state);

    case SELECT:
     return {...state, ...{selected: action.id }};

    default:
      return state;
  }

}

