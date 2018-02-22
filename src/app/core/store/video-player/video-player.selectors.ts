/*import { Observable } from 'rxjs/Observable';
import { VideoPlayerState } from './video-player.model';
import { FooState } from '../store';

export function getPlayer$ (state$: Observable<FooState>): Observable<VideoPlayerState> {
  return state$.select(state => state.player);}

export function getCurrentMedia$ (state$: Observable<FooState>): Observable<VideoPlayerState> {
  return state$.select(state => state.player.media);}

export function getIsPlayerPlaying$ (state$: Observable<FooState>): Observable<boolean> {
  return state$.select(state => state.player.playerState)
    .map((playerState: YT.PlayerState) => playerState === 1);}

export function getShowPlayer$(state$: Observable<FooState>): Observable<boolean> {
  return state$.select(state => state.player.showPlayer);}

export function getPlayerFullscreen$(state$: Observable<FooState>) {
  return state$.select(state => state.player.fullscreen);}*/
