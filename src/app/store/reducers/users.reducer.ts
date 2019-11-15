import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector } from '@ngrx/store';


export class  User {
  id: string;
  name: string;
  constructor() {
    this.id = new Date().getUTCMilliseconds().toString();
  }
}

export class UsersState {
  id: string[];
  entities: {[key: string]: User};
}

export const usersAdapter = createEntityAdapter<User>();
export interface UsersState extends EntityState<User> {}

const defaultUsersState = new UsersState();

export const initialStateUsers: UsersState = usersAdapter.getInitialState(defaultUsersState);

export const CREATE     = '[Tests] Create';
export const UPDATE     = '[Tests] Update';
export const DELETE     = '[Tests] Delete';

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

export type UsersActions
  = Create
  | Update
  | Delete;

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
      return usersAdapter.removeOne(action.id, state)

    default:
      return state;
  }

}

export const getUsersState = createFeatureSelector<UsersState>('users');

export const {
  selectAll: usersSelectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = usersAdapter.getSelectors(getUsersState);
