/*import { Observable } from 'rxjs/Observable';
import { NowPlaylistInterface } from './now-playlist.model';
import { FooState } from '../store';

export function isPlayerInRepeat$(state$: Observable<FooState>): Observable<boolean> {
  return state$.select(state => state.nowPlaylist.repeat);}

export function getPlaylistVideos$(state$: Observable<FooState>): Observable<GoogleApiYouTubeVideoResource[]> {
  return state$.select(state => state.nowPlaylist.videos);}

export function getSelectedMediaId$(state$: Observable<FooState>): Observable<string> {
  return state$.select(state => state.nowPlaylist.selectedId);}

export function getSelectedMedia$(state$: Observable<FooState>) {
  return state$.select(state => {
    const selectedId = state.nowPlaylist.selectedId;
    const mediaIds = state.nowPlaylist.videos.map(video => video.id);
    const selectedMediaIndex = mediaIds.indexOf(selectedId);
    return state.nowPlaylist.videos[selectedMediaIndex];});}*/
