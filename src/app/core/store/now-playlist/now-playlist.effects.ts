/*import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMapTo';
import { of } from 'rxjs/observable/of';
import { FooState } from '../store';
import { NowPlaylistActions } from './now-playlist.actions';
import { MediaParserService, YoutubePlayerService } from '../../services';
import { NowPlaylistService } from '../../services/now-playlist.service';
import { 
  getSelectedMedia$,
  getSelectedMediaId$, 
  getPlaylistVideos$, 
  isPlayerInRepeat$ } from '../selectors/now-playlist.selectors';

@Injectable()
export class NowPlaylistEffects {
  constructor(
    private actions$: Actions,
    public store: Store<FooState>,
    private nowPlaylistActions: NowPlaylistActions,
    private nowPlaylistService: NowPlaylistService,
    private mediaParser: MediaParserService,
    private playerService: YoutubePlayerService) {}

  @Effect()
  queueVideo$ = this.actions$
    .ofType(NowPlaylistActions.SELECT)
    .map(toPayload)
    .map((media: GoogleApiYouTubeVideoResource) => this.nowPlaylistActions.queueVideo(media));

  @Effect() // if it's the last track * AND repeat is on * THEN play the first track
  loadNextTrack$ = this.actions$
    .ofType(NowPlaylistActions.MEDIA_ENDED)
    .map(toPayload)
    .withLatestFrom(this.store.let(getSelectedMedia$))
    .filter((states: [any, GoogleApiYouTubeVideoResource]) => states[1] && states[1].hasOwnProperty('id'))
    .map((states: [any, GoogleApiYouTubeVideoResource]) => {
      return this.nowPlaylistActions.selectVideo(states[1]);})
    .share();

  @Effect()
  selectBeforeSeekToTime$ = this.actions$
    .ofType(NowPlaylistActions.SELECT_AND_SEEK_TO_TIME)
    .map(toPayload)
    .map((trackEvent) => this.nowPlaylistActions.updateIndexByMedia(trackEvent.media.id));

  @Effect({ dispatch: false })
  seekToTime$ = this.actions$
    .ofType(NowPlaylistActions.SELECT_AND_SEEK_TO_TIME)
    .map(toPayload)
    .do((trackEvent) => this.playerService.seekTo(this.mediaParser.toNumber(trackEvent.time)))
    .catch((error) => of({ type: 'ERROR_IN_SEEK', payload: error }));
}*/
