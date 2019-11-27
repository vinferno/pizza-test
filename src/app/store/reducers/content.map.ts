import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { contentHeaderReducer } from './content-header.reducer';
import { ResponseContentHeaders } from '../../responses';
import { clientManagerReducer, ClientManagerState } from './client-manager.reducer';

// content action map
export interface ContentState {
  contentHeader: ResponseContentHeaders;
  clientManager: ClientManagerState;
}

export const contentReducers: ActionReducerMap<ContentState> = {
  contentHeader: contentHeaderReducer,
  clientManager: clientManagerReducer,
};

export const getContentState = createFeatureSelector<ContentState>('content');
