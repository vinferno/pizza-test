import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContentState, getContentState } from '../reducers/content.map';
export const getContentHeader = createSelector(
  getContentState,
  (state: ContentState) => {
    console.log('get state header', state);
    return state.contentHeader;
  }
);
