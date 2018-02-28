import {createFeatureSelector,createSelector} from '@ngrx/store';
import {UserProfile} from './user-profile.model';

export const getUser$ = createFeatureSelector<UserProfile>('userProfile');
export const getUserPlaylists$ = createSelector(getUser$,(s:UserProfile) => s.playlists);
export const getUserViewPlaylist$ = createSelector(getUser$,(s:UserProfile) => s.viewedPlaylist);
export const getIsUserSignedIn$ = createSelector(getUser$,(s:UserProfile) => s.access_token !== '');