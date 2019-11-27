import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { contentHeaderReducer } from './content-header.reducer';
import { ResponseContentHeaders } from '../../responses';

// content action map
export interface ContentState {
  contentHeader: ResponseContentHeaders;
}

export const contentReducers: ActionReducerMap<ContentState> = {
  contentHeader: contentHeaderReducer,
};

export const getContentState = createFeatureSelector<ContentState>('content');
