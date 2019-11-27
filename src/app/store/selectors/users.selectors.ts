import { createFeatureSelector, createSelector } from '@ngrx/store';
import {usersAdapter, UsersState} from "../actions/users.actions";

export const getUsersState = createFeatureSelector<UsersState>('users');

export const {
  selectAll: usersSelectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = usersAdapter.getSelectors(getUsersState);

export const getUsersNames = createSelector(
  usersSelectAll,
  (users) => users[0]
);

export const getSelectedIds = createSelector(
  getUsersState,
  (state) => state.selected
);
export const getSelectedIds2 = createSelector(
  getUsersState,
  (state) => state.selectedIds
);
