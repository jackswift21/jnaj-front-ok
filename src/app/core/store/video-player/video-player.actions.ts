/*import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ActionCreatorFactory } from '../utils/action-creator.util';

@Injectable()
export class VideoPlayerActions {
  static PLAY = '[Video Player] PLAY';
  static LOAD_AND_PLAY = '[Video Player] LOAD_AND_PLAY';
  static QUEUE = '[Video Player] REMOVE';
  static PLAY_STARTED = '[Video Player] PLAY_STARTED';
  static TOGGLE_PLAYER = '[Video Player] TOGGLE_PLAYER';
  static STATE_CHANGE = '[Video Player] STATE_CHANGE';
  static FULLSCREEN = '[Video Player] FULLSCREEN';
  static RESET = '[Video Player] RESET';
  static LOAD_NEXT_TRACK = '[Video Player] LOAD_NEXT_TRACK';

  togglePlayer = ActionCreatorFactory.create<boolean>(VideoPlayerActions.TOGGLE_PLAYER, true);
  playVideo = ActionCreatorFactory.create<GoogleApiYouTubeVideoResource>(VideoPlayerActions.PLAY);
  loadNextTrack = ActionCreatorFactory.create(VideoPlayerActions.LOAD_NEXT_TRACK);
  loadAndPlay(media: GoogleApiYouTubeVideoResource): Action {
    return {
      type: VideoPlayerActions.LOAD_AND_PLAY,
      payload: media};}
  playStarted(media): Action {return {type: VideoPlayerActions.PLAY_STARTED};}
  updateState(state: number): Action {
    return {
      type: VideoPlayerActions.STATE_CHANGE,
      payload: state};}
  fullScreen(): Action {return {type: VideoPlayerActions.FULLSCREEN};}
  reset(): Action {return {type: VideoPlayerActions.RESET};}
}*/

/*togglePlayer(visible: boolean = true): Action {
  return {
    type: VideoPlayerActions.TOGGLE_PLAYER,
    payload: visible};}*/
