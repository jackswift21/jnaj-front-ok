import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../';
import * as SearchActions from './search.actions';
import {SearchService} from '../../services/search.service';
//import {YoutubeVideosInfo} from '../../services';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$:Actions,
    private store:Store<JNAJAppState>,
    private search:SearchService){}
  @Effect() searchCurrentQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_CURRENT_QUERY)
    .withLatestFrom(this.store)
    .map((latest:any[]) => latest[1])
    .map((store:JNAJAppState) => new SearchActions.searchNewQuery(store.search.query));
  @Effect() searchSuggestions$ = this.actions$
    .ofType(SearchActions.GET_SUGGESTIONS)
    .map((action:SearchActions.getSuggestions) => action.payload)
    .switchMap((query:string) => this.search.suggest(query))
    .map((results:string[]) => new SearchActions.updateSuggestions(results));
  @Effect() addSuggestion$ = this.actions$
    .ofType(SearchActions.ADD_SUGGESTION)
    .map((action:SearchActions.addSuggestion) => action.payload)
    .mergeMap((suggestion:string) => this.search.addSuggestion(suggestion))
    .map(() => ({type:'SUGGESTION_ADDED'}));
  @Effect() searchQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_NEW_QUERY)
    .map((action:SearchActions.searchNewQuery) => action.payload)
    .withLatestFrom(this.store)
    .map((latest:any[]) => latest[1])
    .switchMap((store:JNAJAppState) => 
      this.search.resetPageToken()
      .go(store.search.query,store.search.queryParams)
      .map(results => new SearchActions.searchResultsReturned(results))
      .catch(err => Observable.of(new SearchActions.errorInSearch(err))));
  @Effect() resetResults$ = this.actions$
    .ofType(SearchActions.SEARCH_NEW_QUERY)
    .map(() => new SearchActions.resetResults());
  @Effect() searchResultsReturned$ = this.actions$
    .ofType(SearchActions.SEARCH_RESULTS_RETURNED)
    .map((action:SearchActions.searchResultsReturned) => action.payload)
    .map(results => new SearchActions.addResults(results));
  @Effect() updatePreset$ = this.actions$
    .ofType(SearchActions.UPDATE_QUERY_PARAM)
    .map(() => new SearchActions.searchCurrentQuery());
  @Effect() resetResultsAfterParamUpdate$ = this.actions$
    .ofType(SearchActions.UPDATE_QUERY_PARAM)
    .map(() => new SearchActions.resetResults());
  @Effect() resetPageToken$ = this.actions$
    .ofType(SearchActions.RESET_PAGE_TOKEN)
    .map((action:SearchActions.resetPageToken) => action.payload)
    .mergeMap(() => Observable.of(this.search.resetPageToken()))
    .map(() => ({ type: 'PAGE_RESET_DONE' }));
}

/*
  @Effect() searchResultsReturned$ = this.actions$
    .ofType(SearchActions.SEARCH_RESULTS_RETURNED)
    .map((action:SearchActions.searchResultsReturned) => action.payload)
    .map((medias:{items:GoogleApiYouTubeSearchResource[]}) => medias.items.map(media => media.id.videoId).join(','))
    .mergeMap((mediaIds:string) => 
      this.youtubeVideosInfo.fetchVideosData(mediaIds)
      .map((videos:GoogleApiYouTubeVideoResource[]) => new SearchActions.addResults(videos)));
    .map((youtubeResponse) => 
    // WHAT IS THIS?
    this.youtubeVideosActions.addForProcessing(youtubeResponse.items));
    //
  @Effect() searchMoreForQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_MORE_FOR_QUERY)
    .withLatestFrom(this.store)
    .map((latest:any[]) => latest[1])
    .filter((store:JNAJAppState) => !store.search.isSearching)
    .mergeMap((store:JNAJAppState) =>
      this.youtubeSearch.searchMore(store.search.pageToken.next)
      .search(store.search.query, store.search.queryParams)
      .map(youtubeResponse => new SearchActions.searchResultsReturned(youtubeResponse)));
  @Effect() searchMoreSearchStarted$ = this.actions$
    .ofType(SearchActions.SEARCH_MORE_FOR_QUERY)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .filter((store:JNAJAppState) => !store.search.isSearching)
    .map(() => new SearchActions.searchStarted());
*/