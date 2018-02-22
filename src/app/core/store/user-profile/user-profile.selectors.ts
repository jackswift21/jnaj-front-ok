/*import { Observable } from 'rxjs/Observable';
import { UserProfile } from './user-profile.model';
import { FooState } from '../store';

export function getUser$(state$: Observable<FooState>): Observable<UserProfile> {
  return state$.select(state => state.user);}

export function getUserPlaylists$(state$: Observable<FooState>): Observable<GoogleApiYouTubePlaylistResource[]> {
  return state$.select(state => state.user.playlists);};

export function getUserViewPlaylist$(state$: Observable<FooState>) {
  return state$.select(state => state.user.viewedPlaylist);};

export function getIsUserSignedIn$(state$: Observable<FooState>) {
  return state$.select(state => {
    return state.user.access_token !== ''; });};
*/