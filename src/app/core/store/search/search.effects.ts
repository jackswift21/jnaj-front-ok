/*import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CMAppState } from '../store';
import { SearchActions } from './search.actions';
import { YoutubeSearch } from '../../services/youtube.search';
import { YoutubeVideosInfo } from '../../services';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private store: Store<CMAppState>,
    private searchActions: SearchActions,
    private youtubeSearch: YoutubeSearch,
    private youtubeVideosInfo: YoutubeVideosInfo) { }

  @Effect()
  searchQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_NEW_QUERY)
    .map(toPayload)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .switchMap((store: CMAppState) =>
      this.youtubeSearch.resetPageToken()
      .search(store.search.query, store.search.queryParams)
      .map((youtubeResponse) => this.searchActions.searchResultsReturned(youtubeResponse))
      .catch((err) => Observable.of(this.searchActions.errorInSearch(err))));

  @Effect()
  resetVideos$ = this.actions$
    .ofType(SearchActions.SEARCH_NEW_QUERY)
    .map(() => this.searchActions.resetResults());

  @Effect()
  searchResultsReturned$ = this.actions$
    .ofType(SearchActions.SEARCH_RESULTS_RETURNED)
    .map(toPayload)
    .map((medias: { items: GoogleApiYouTubeSearchResource[] }) => 
      medias.items.map(media => media.id.videoId).join(','))
    .mergeMap((mediaIds: string) => this.youtubeVideosInfo.fetchVideosData(mediaIds)
      .map((videos: GoogleApiYouTubeVideoResource[]) =>
        this.searchActions.addResults(videos)));
    // .map((youtubeResponse) => this.youtubeVideosActions.addForProcessing(youtubeResponse.items));

  @Effect()
  searchMoreForQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_MORE_FOR_QUERY)
    .map(toPayload)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .filter((store: CMAppState) => !store.search.isSearching)
    .mergeMap((store: CMAppState) =>
      this.youtubeSearch.searchMore(store.search.pageToken.next)
      .search(store.search.query, store.search.queryParams)
      .map(youtubeResponse => this.searchActions.searchResultsReturned(youtubeResponse)));

  @Effect()
  searchMoreSearchStarted$ = this.actions$
    .ofType(SearchActions.SEARCH_MORE_FOR_QUERY)
    .map(toPayload)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .filter((store: CMAppState) => !store.search.isSearching)
    .map(() => this.searchActions.searchStarted());

  @Effect()
  updatePreset$ = this.actions$
    .ofType(SearchActions.UPDATE_QUERY_PARAM)
    .map(() => this.searchActions.searchCurrentQuery());

  @Effect()
  resetVideosAfterParamUpdate$ = this.actions$
    .ofType(SearchActions.UPDATE_QUERY_PARAM)
    .map(() => this.searchActions.resetResults());

  @Effect()
  resetPageToken$ = this.actions$
    .ofType(SearchActions.RESET_PAGE_TOKEN)
    .map(toPayload)
    .mergeMap(() => Observable.of(this.youtubeSearch.resetPageToken()))
    .map(() => ({ type: 'PAGE_RESET_DONE' }));

  @Effect()
  searchCurrentQuery$ = this.actions$
    .ofType(SearchActions.SEARCH_CURRENT_QUERY)
    .map(toPayload)
    .withLatestFrom(this.store)
    .map((latest: any[]) => latest[1])
    .map((store: CMAppState) => this.searchActions.searchNewQuery(store.search.query));
}
*/