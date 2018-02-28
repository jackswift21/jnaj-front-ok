import {Action} from '@ngrx/store';
import {GoogleBasicProfile} from './user-profile.model';

export const UPDATE = '[UserProfile] UPDATE';
export const ADD_PLAYLISTS = '[UserProfile] ADD_PLAYLISTS';
export const UPDATE_TOKEN = '[UserProfile] UPDATE_TOKEN';
export const LOG_OUT = '[UserProfile] LOG_OUT';
export const UPDATE_NEXT_PAGE_TOKEN = '[UserProfile] UPDATE_NEXT_PAGE_TOKEN';
export const USER_PROFILE_COMPLETED = '[UserProfile] USER_PROFILE_COMPLETED';
export const UPDATE_USER_PROFILE = '[UserProfile] UPDATE_USER_PROFILE';
export const USER_PROFILE_RECIEVED = '[UserProfile] USER_PROFILE_RECIEVED';
export const VIEWED_PLAYLIST = '[UserProfile] VIEWED_PLAYLIST';
export const TEST_USER_PROFILE_ACTION = '[UserProfile] TEST_USER_PROFILE_ACTION';

export class test implements Action {readonly type = TEST_USER_PROFILE_ACTION;}
export class update implements Action {readonly type = ADD_PLAYLISTS;constructor(public payload:any){}}
export class setViewPlaylist implements Action {readonly type = VIEWED_PLAYLIST;constructor(public payload:string){}}
export class updateData implements Action {readonly type = UPDATE;constructor(public payload:any){}}
export class addPlaylists implements Action {readonly type = ADD_PLAYLISTS;constructor(public payload:any[]){}}
export class updateToken implements Action {readonly type = UPDATE_TOKEN;constructor(public payload:string){}}
export class signOut implements Action {readonly type = LOG_OUT;}
export class updatePageToken implements Action {readonly type = UPDATE_NEXT_PAGE_TOKEN;constructor(public payload:string){}}
export class userProfileCompleted implements Action {readonly type = USER_PROFILE_COMPLETED;}
export class userProfileRecieved implements Action {readonly type = USER_PROFILE_RECIEVED;constructor(public payload:any){}}
export class updateUserProfile implements Action {
  readonly type = UPDATE_USER_PROFILE;
  constructor(public payload:GoogleBasicProfile){}}

export type All =
test|
setViewPlaylist|
updateData|
addPlaylists|
updateToken|
signOut|
updatePageToken|
userProfileCompleted|
userProfileRecieved|
updateUserProfile;