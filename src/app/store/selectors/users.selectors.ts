import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersAdapter, UsersState } from '../reducers/users.reducer';

export const getUsersState = createFeatureSelector<UsersState>('users');

export const {
  selectAll: usersSelectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = usersAdapter.getSelectors(getUsersState);

export const getUsersNames = createSelector(
  usersSelectAll,
  (users) => { console.log('users', users); return users[0]; }
);

export const getSelectedIds = createSelector(
  getUsersState,
  (state) => {console.log('state..', state); return state.selected; }
);
