import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContentState, getContentState } from '../reducers/content.map';
export const getContentHeader = createSelector(
  getContentState,
  (state: ContentState) => {
    return state.contentHeader;
  }
);

export const getClientManager = createSelector(
  getContentState,
  (state: ContentState) => {
    return state.clientManager;
  }
);
