// url router
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterStateUrl } from '../reducers';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store/src/serializers/default_serializer';
import { RouterReducerState } from '@ngrx/router-store';

export const getRouterState = createFeatureSelector<RouterReducerState>('router');

export const getUrlState = createSelector(
  getRouterState,
  (state: RouterReducerState) => state.state
);
