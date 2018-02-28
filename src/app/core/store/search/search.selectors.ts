import {createFeatureSelector,createSelector} from '@ngrx/store';
import {Search} from './search.model';

export const getSearch$ = createFeatureSelector<Search>('search');
export const getQuery$ = createSelector(getSearch$,(s:Search) => s.query);
export const getResults$ = createSelector(getSearch$,(s:Search) => s.results);
export const getErrorInSearch$ = createSelector(getSearch$,(s:Search) => s.err);
export const getIsAdvSearch$ = createSelector(getSearch$,(s:Search) => s.isAdvSearch);
export const getSuggestions$ = createSelector(getSearch$,(s:Search) => s.suggestions);
//export const getQueryParams$ = createSelector(getSearch$,(s:Search) => s.queryParams);
//export const getQueryParamPreset$ = createSelector(getSearch$,(s:Search) => s.queryParams.preset);