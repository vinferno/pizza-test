// url router
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export const getRouterState = createFeatureSelector<RouterReducerState>('router');

export const getUrlState = createSelector(
  getRouterState,
  (state: RouterReducerState) => state.state
);
