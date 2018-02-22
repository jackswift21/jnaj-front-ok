/*import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { FooState } from '../store';
import { getPlayerFullscreen$ } from './video-player.selectors';
import { VideoPlayerActions } from './video-player.actions';
import { NowPlaylistService } from '../../services';
import { YoutubePlayerService } from '../../services/youtube-player.service';
import { YoutubeVideosInfo } from '../../services/youtube-videos-info.service';

@Injectable()
export class VideoPlayerEffects {
  constructor(
    public actions$: Actions,
    public store: Store<FooState>,
    public videoPlayerActions: VideoPlayerActions,
    public youtubePlayerService: YoutubePlayerService,
    public youtubeVideosInfo: YoutubeVideosInfo,
    public nowPlaylistService: NowPlaylistService) { }
  @Effect() playVideo$ = this.actions$
    .ofType(VideoPlayerActions.PLAY)
    .map(toPayload)
    .switchMap(media => Observable
      .of(this.youtubePlayerService.playVideo(media))
      .map(video => this.videoPlayerActions.playStarted(video)));
  @Effect() loadAndPlay$ = this.actions$
    .ofType(VideoPlayerActions.LOAD_AND_PLAY)
    .map(toPayload)
    .switchMap((media: any) => this.youtubeVideosInfo.fetchVideoData(media.id || media.id.videoId)
      .map(video => this.videoPlayerActions.playVideo(video)));
  @Effect({dispatch:false}) toggleFullscreen$ = this.actions$
    .ofType(VideoPlayerActions.FULLSCREEN)
    .withLatestFrom(this.store.let(getPlayerFullscreen$))
    .do((states: [ any, {on, height, width} ]) => 
      this.youtubePlayerService.setSize(states[1].height, states[1].width));
}
*/
