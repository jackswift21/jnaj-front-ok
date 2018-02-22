/*import { Action } from '@ngrx/store';
import { SearchActions } from './search.actions';
import { Search, PresetParam, initialState } from './search.model';

export function search(state: Search = initialState, action: Action): Search {
  switch (action.type) {
    case SearchActions.SEARCH_NEW_QUERY:
      return Object.assign({}, state, {
        query: action.payload,
        isSearching: true});
    case SearchActions.UPDATE_QUERY_PARAM:
      const queryParams = Object.assign({}, state.queryParams, action.payload);
      return Object.assign({}, state, { queryParams });
    case SearchActions.SEARCH_RESULTS_RETURNED:
      const { nextPageToken, prevPageToken } = action.payload;
      const statePageToken = state.pageToken;
      const pageToken = {
        next: nextPageToken || statePageToken.next,
        prev: prevPageToken || statePageToken.prev};
      return Object.assign({}, state, { pageToken });
    case SearchActions.SEARCH_STARTED:return Object.assign({}, state, { isSearching: true });
    case SearchActions.ADD_RESULTS:
      return Object.assign({}, state, {
        results: [...state.results, ...action.payload],
        isSearching: false});
    case SearchActions.RESET_RESULTS:return Object.assign({}, state, { results: [] });
    default: return Object.assign({}, initialState, state);}};

export const searchRegister = {reducer: { search } ,actions: SearchActions};

export const getQuery = (state: Search) => state.query;
export const getQueryParams = (state: Search) => state.queryParams;
export const getQueryParamPreset = (state: Search) => state.queryParams.preset;
*/