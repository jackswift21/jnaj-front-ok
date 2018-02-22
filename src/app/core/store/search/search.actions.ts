/*import { Injectable } from '@angular/core';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';

@Injectable()
export class SearchActions {
  // @ActionCreator({
  //   type: 'UPDATE_FILTER',
  //   payload: string
  // })
  // @ActionCreator<string>(SearchActions.UPDATE_FILTER)
  // update;
  static UPDATE_FILTER = '[Search] UPDATE_FILTER';
  static UPDATE_QUERY_PARAM = '[Search] UPDATE_QUERY_PARAM';
  static SEARCH_NEW_QUERY = '[Search] SEARCH_NEW_QUERY';
  static SEARCH_MORE_FOR_QUERY = '[Search] SEARCH_MORE_FOR_QUERY';
  static GET_SUGGESTIONS = '[Search] GET_SUGGESTIONS';
  static RESET_PAGE_TOKEN = '[Search] RESET_PAGE_TOKEN';
  static SEARCH_RESULTS_RETURNED = '[Search] SERACH_RESULTS_RETURNED';
  static SEARCH_CURRENT_QUERY = '[Search] SEARCH_CURRENT_QUERY';
  static SEARCH_STARTED = '[Search] SEARCH_STARTED';

  // Results Actions
  static ADD_RESULTS = '[Search] ADD_RESULTS';
  static RESET_RESULTS = '[Search] RESET_RESULTS';
  static ERROR_RESULTS = '[Search] ERROR_RESULTS';

  getSuggestions = ActionCreatorFactory.create<string>(SearchActions.GET_SUGGESTIONS);
  searchCurrentQuery = ActionCreatorFactory.create(SearchActions.SEARCH_CURRENT_QUERY);
  searchNewQuery = ActionCreatorFactory.create<string>(SearchActions.SEARCH_NEW_QUERY);
  searchMoreForQuery = ActionCreatorFactory.create(SearchActions.SEARCH_MORE_FOR_QUERY);
  updateFilter = ActionCreatorFactory.create(SearchActions.UPDATE_FILTER);
  updateQueryParam = ActionCreatorFactory.create<any>(SearchActions.UPDATE_QUERY_PARAM);
  resetPageToken = ActionCreatorFactory.create<any>(SearchActions.RESET_PAGE_TOKEN);
  searchResultsReturned = ActionCreatorFactory.create<any>(SearchActions.SEARCH_RESULTS_RETURNED);
  searchStarted = ActionCreatorFactory.create(SearchActions.SEARCH_STARTED);
  addResults = ActionCreatorFactory.create(SearchActions.ADD_RESULTS);
  resetResults = ActionCreatorFactory.create(SearchActions.RESET_RESULTS);
  errorInSearch = ActionCreatorFactory.create<any>(SearchActions.ERROR_RESULTS);
}
*/