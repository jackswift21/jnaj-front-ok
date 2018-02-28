import * as UserProfileActions from './user-profile.actions';
import {UserProfile,GoogleBasicProfile,initialUserState} from './user-profile.model';

export function userProfileReducer(state:UserProfile = initialUserState,action:UserProfileActions.All):UserProfile{
  switch (action.type) {
    case UserProfileActions.ADD_PLAYLISTS:
      return Object.assign({},state,{ 
        playlists: [ ...state.playlists, ...action.payload ]});
    case UserProfileActions.UPDATE_TOKEN:
      return Object.assign({},state,{ 
        access_token:action.payload,playlists:[]});
    case UserProfileActions.LOG_OUT:
      return Object.assign({},{
        access_token: '',
        playlists:[],
        profile:{}});
    case UserProfileActions.UPDATE:
      return Object.assign({},state,{ 
        data:action.payload});
    case UserProfileActions.UPDATE_NEXT_PAGE_TOKEN:
      return Object.assign({},state,{ 
        nextPageToken: action.payload });
    case UserProfileActions.UPDATE_USER_PROFILE:
      return Object.assign({},state,{ 
        profile: action.payload });
    case UserProfileActions.VIEWED_PLAYLIST:
      return Object.assign({},state,{ 
        viewedPlaylist:action.payload});
    default:return state;}};