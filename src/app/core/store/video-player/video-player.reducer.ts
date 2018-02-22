import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action, Dispatcher } from '@ngrx/store';
/*import { VideoPlayerActions } from './video-player.actions';
import { VideoPlayerState, initialPlayerState, GoogleApiYoutubeVideo } from './video-player.model';

export function player (state: VideoPlayerState = initialPlayerState, action: Action): VideoPlayerState {
  switch (action.type) {
    case VideoPlayerActions.PLAY:return playVideo(state, action.payload);
    case VideoPlayerActions.QUEUE:return state;
    case VideoPlayerActions.TOGGLE_PLAYER:return toggleVisibility(state);
    case VideoPlayerActions.STATE_CHANGE:return changePlayerState(state, action.payload);
    case VideoPlayerActions.FULLSCREEN: {
      const on = !state.fullscreen.on;
      let { height, width } = initialPlayerState.fullscreen;
      if (on) {
        height = window.innerHeight;
        width = window.innerWidth;}
      const fullscreen = { on, height, width };
      return Object.assign({}, state, { fullscreen });}
    case VideoPlayerActions.RESET:return Object.assign({}, state,{isFullscreen: false,playerState: 0});
    case Dispatcher.INIT: {
      const fullscreen = initialPlayerState.fullscreen;
      return Object.assign({}, initialPlayerState, state, { fullscreen });};
    default:return Object.assign({}, initialPlayerState, state);}};

export function playVideo(state: VideoPlayerState,media: GoogleApiYoutubeVideo) {
  return Object.assign({}, state, {
    mediaId: media.id,media});}
export function toggleVisibility(state: VideoPlayerState) {
  return Object.assign({}, state, { showPlayer: !state.showPlayer });}
export function changePlayerState(state: VideoPlayerState, playerState: YT.PlayerState) {
  return Object.assign({}, state, { playerState: playerState });}*/
