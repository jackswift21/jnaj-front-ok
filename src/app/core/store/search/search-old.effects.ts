import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../';
import * as SearchActions from './search.actions';
//import {YoutubeSearch} from '../../services';//youtube.search';
//import {YoutubeVideosInfo} from '../../services';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$:Actions,
    private store:Store<JNAJAppState>,
    //private youtubeSearch: YoutubeSearch,
    //private youtubeVideosInfo: YoutubeVideosInfo
    ){}
  @Effect() searchQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_NEW_QUERY)
    .map((action:SearchActions.searchNewQuery) => action.payload)
    .withLatestFrom(this.store)
    .map((latest:any[]) => latest[1])
    .map(() => Observable.of(new SearchActions.test()));
    /*.switchMap((store:JNAJAppState) => 
      this.youtubeSearch.resetPageToken()
      .search(store.search.query,store.search.queryParams)
      .map((youtubeResponse) => new SearchActions.searchResultsReturned(youtubeResponse))
      .catch((err) => Observable.of(new SearchActions.errorInSearch(err))));*/
  @Effect() resetVideos$ = this.actions$
    .ofType(SearchActions.SEARCH_NEW_QUERY)
    .map(() => new SearchActions.resetResults());
  @Effect() searchResultsReturned$ = this.actions$
    .ofType(SearchActions.SEARCH_RESULTS_RETURNED)
    .map((action:SearchActions.searchResultsReturned) => action.payload)
    .map(() => Observable.of(new SearchActions.test()));
    /*.map((medias:{items:GoogleApiYouTubeSearchResource[]}) => 
      medias.items.map(media => media.id.videoId).join(','))
    .mergeMap((mediaIds: string) => this.youtubeVideosInfo.fetchVideosData(mediaIds)
      .map((videos:GoogleApiYouTubeVideoResource[]) =>
        new SearchActions.addResults(videos)));
    .map((youtubeResponse) => this.youtubeVideosActions.addForProcessing(youtubeResponse.items));*/
  @Effect() searchMoreForQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_MORE_FOR_QUERY)
    .withLatestFrom(this.store)
    .map((latest:any[]) => latest[1])
    .filter((store:JNAJAppState) => !store.search.isSearching)
    .map(() => Observable.of(new SearchActions.test()));
    /*.mergeMap((store:JNAJAppState) =>
      this.youtubeSearch.searchMore(store.search.pageToken.next)
      .search(store.search.query, store.search.queryParams)
      .map(youtubeResponse => new SearchActions.searchResultsReturned(youtubeResponse)));*/
  @Effect() searchMoreSearchStarted$ = this.actions$
    .ofType(SearchActions.SEARCH_MORE_FOR_QUERY)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .filter((store:JNAJAppState) => !store.search.isSearching)
    .map(() => new SearchActions.searchStarted());
  @Effect() updatePreset$ = this.actions$
    .ofType(SearchActions.UPDATE_QUERY_PARAM)
    .map(() => new SearchActions.searchCurrentQuery());
  @Effect() resetVideosAfterParamUpdate$ = this.actions$
    .ofType(SearchActions.UPDATE_QUERY_PARAM)
    .map(() => new SearchActions.resetResults());
  @Effect() resetPageToken$ = this.actions$
    .ofType(SearchActions.RESET_PAGE_TOKEN)
    .map((action:SearchActions.resetPageToken) => action.payload)
    .map(() => Observable.of(new SearchActions.test()));
    //.mergeMap(() => Observable.of(this.youtubeSearch.resetPageToken()))
    //.map(() => ({ type: 'PAGE_RESET_DONE' }));
  @Effect() searchCurrentQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_CURRENT_QUERY)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .map((store:JNAJAppState) => new SearchActions.searchNewQuery(store.search.query));
}