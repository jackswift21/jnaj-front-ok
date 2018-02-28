import {Action} from '@ngrx/store';
import {Search} from './search.model';

export const UPDATE_QUERY = '[Search] UPDATE_QUERY';
export const UPDATE_FILTER = '[Search] UPDATE_FILTER';
export const UPDATE_QUERY_PARAM = '[Search] UPDATE_QUERY_PARAM';
export const UPDATE_SUGGESTIONS = '[Search] UPDATE_SUGGESTIONS';
export const ADD_SUGGESTION = '[Search] ADD_SUGGESTION';
export const SEARCH_NEW_QUERY = '[Search] SEARCH_NEW_QUERY';
export const SEARCH_MORE_FOR_QUERY = '[Search] SEARCH_MORE_FOR_QUERY';
export const GET_SUGGESTIONS = '[Search] GET_SUGGESTIONS';
export const RESET_PAGE_TOKEN = '[Search] RESET_PAGE_TOKEN';
export const SEARCH_RESULTS_RETURNED = '[Search] SEARCH_RESULTS_RETURNED';
export const SEARCH_CURRENT_QUERY = '[Search] SEARCH_CURRENT_QUERY';
export const SEARCH_STARTED = '[Search] SEARCH_STARTED';
export const TOGGLE_ADV_SEARCH = '[Search] TOGGLE_ADV_SEARCH';
// Results Actions
export const ADD_RESULTS = '[Search] ADD_RESULTS';
export const RESET_RESULTS = '[Search] RESET_RESULTS';
export const ERROR_RESULTS = '[Search] ERROR_RESULTS';
export const TEST_SEARCH_ACTION = '[Search] TEST_SEARCH_ACTION';

export class test implements Action {readonly type = TEST_SEARCH_ACTION;}
export class updateCurrentQuery implements Action {
  readonly type = UPDATE_QUERY;
  constructor(public payload:string){}}
export class searchCurrentQuery implements Action {readonly type = SEARCH_CURRENT_QUERY;}
export class searchNewQuery implements Action {
  readonly type = SEARCH_NEW_QUERY;
  constructor(public payload:string){}}
export class resetResults implements Action {readonly type = RESET_RESULTS;}
export class searchResultsReturned implements Action {
  readonly type = SEARCH_RESULTS_RETURNED;
  constructor(public payload:any){}}
export class addResults implements Action {
  readonly type = ADD_RESULTS;
  constructor(public payload:any[]){}}
export class errorInSearch implements Action {
  readonly type = ERROR_RESULTS;
  constructor(public payload:any){}}
export class toggleAdvSearch implements Action{readonly type = TOGGLE_ADV_SEARCH;}
export class searchMoreForQuery implements Action {readonly type = SEARCH_MORE_FOR_QUERY;}
export class updateFilter implements Action {
  readonly type = UPDATE_FILTER;
  constructor(public payload:string){}}
export class updateQueryParam implements Action {
  readonly type = UPDATE_QUERY_PARAM;
  constructor(public payload:any){}}
export class addSuggestion implements Action {
  readonly type = ADD_SUGGESTION;
  constructor(public payload:string){}}
export class updateSuggestions implements Action {
  readonly type = UPDATE_SUGGESTIONS;
  constructor(public payload:string[]){}}
export class getSuggestions implements Action {
  readonly type = GET_SUGGESTIONS;
  constructor(public payload:string){}}
export class resetPageToken implements Action {
  readonly type = RESET_PAGE_TOKEN;
  constructor(public payload:any){}}
export class searchStarted implements Action {readonly type = SEARCH_STARTED;}

export type All =
test|
updateCurrentQuery|
updateSuggestions|
getSuggestions|
addSuggestion|
searchCurrentQuery|
searchNewQuery|
searchMoreForQuery|
getSuggestions|
updateFilter|
updateQueryParam|
resetPageToken|
searchResultsReturned|
searchStarted|
addResults|
resetResults|
errorInSearch|
toggleAdvSearch;