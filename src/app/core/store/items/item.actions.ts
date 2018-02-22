import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ActionCreatorFactory } from 'ngrx-action-creator-factory';
//import { ItemState } from './assignment.reducer';

@Injectable()
export class ItemActions {
  //action types
    static LOAD_ALL = '[Item] LOAD_ALL';
    //static LOAD_DETAIL = '[Item] LOAD_DETAIL';
    //static LOAD_ALL_COMPLETED = '[Item] LOAD_ALL_COMPLETED';
    //static LOAD_DETAIL_COMPLETED = '[Item] LOAD_DETAIL_COMPLETED';
    static TOGGLE_CREATE = '[Item] TOGGLE_CREATE';
    static SELECT = '[Item] SELECT';
    static ADD = '[Item] ADD';
    //static SAVE = '[Item] SAVE';
    static UPDATE = '[Item] UPDATE';
    static DELETE = '[Item] DELETE';
    static DELETE_ALL = '[Item] DELETE_ALL';
    static UPDATE_INDEX = '[Item] UPDATE_INDEX';
    static FILTER_CHANGE = '[Item] FILTER_CHANGE';
    /*static TOGGLE_TABS = '[Item] TOGGLE_TABS';
    static ASSIGN = '[Item] ASSIGN';
    static UNASSIGN = '[Item] UNASSIGN';
    static GRADE = '[Item] GRADE';
    static CLOSE = '[Item] CLOSE';
    static RESET = '[Item] RESET';
    static SEARCH = '[Item] SEARCH';
    static SEARCH_RECEIVED = '[Item] SEARCH_RECEIVED';
    static SEARCH_COMPLETED = '[Item] SEARCH_COMPLETED';
    static REMIND = '[Item] REMIND';
    static ADD_REMIND = '[Item] ADD_REMIND';
    static UPDATE_REMIND = '[Item] UPDATE_REMIND';
    static DELETE_REMIND = '[Item] DELETE_REMIND';
    static VIEW_REMIND = '[Item] VIEW_REMIND'; */
  //action methods
    toggleCreate = ActionCreatorFactory.create(ItemActions.TOGGLE_CREATE);
    /*loadAll = (data: any) => ({type: ItemActions.LOAD_ALL,payload: data});
    loadDetail = (data: any) => ({type: ItemActions.LOAD_DETAIL,payload: data});
    loadAllCompleted = (data: any) => ({type: ItemActions.LOAD_ALL_COMPLETED,payload: data});
    loadDetailCompleted = (data: any) => ({type: ItemActions.LOAD_DETAIL_COMPLETED,payload: data});
    select = (data: any) => ({type: ItemActions.SELECT,payload: data});
    add = (data: any) => ({type: ItemActions.ADD,payload: data});
    update = (token: string) => ({type: ItemActions.UPDATE,payload: token});
    save = (token: string) => ({type: ItemActions.SAVE,payload: token});
    reset = (token: string)  => ({type: ItemActions.RESET,payload: token});
    search = (token: string)  => ({type: ItemActions.SEARCH,payload: token});
    delete = (token: string)  => ({type: ItemActions.DELETE,payload: token});
    assign = (token: string)  => ({type: ItemActions.ASSIGN,payload: token});
    unassign = (token: string)  => ({type: ItemActions.UNASSIGN,payload: token});
    grade = (token: string)  => ({type: ItemActions.GRADE,payload: token});
    close = (token: string)  => ({type: ItemActions.CLOSE,payload: token});
    toggleTabs = (token: string)  => ({type: ItemActions.TOGGLE_TABS,payload: token});
    remind = (token: string)  => ({type: ItemActions.REMIND,payload: token});
    addRemind = (token: string)  => ({type: ItemActions.ADD_REMIND,payload: token});
    updateRemind = (token: string)  => ({type: ItemActions.UPDATE_REMIND,payload: token});
    deleteRemind = (token: string)  => ({type: ItemActions.DELETE_REMIND,payload: token});*/
}

/*static QUEUE_LOAD_VIDEO = '[Item] QUEUE_LOAD_VIDEO';
  static QUEUE = '[Item] QUEUE';
  static QUEUE_LOAD_VIDEO_SUCCESS = '[Item] QUEUE_LOAD_VIDEO_SUCCESS';
  static SELECT_NEXT = '[Item] SELECT_NEXT';
  static SELECT_PREVIOUS = '[Item] SELECT_PREVIOUS';
  static QUEUE_VIDEOS = '[Item] QUEUE_VIDEOS';
  static MEDIA_ENDED = '[Item] MEDIA_ENDED';
  static SELECT_AND_SEEK_TO_TIME = '[Item] SELECT_AND_SEEK_TO_TIME';

  mediaEnded = ActionCreatorFactory.create(ItemActions.MEDIA_ENDED);
  selectNext = ActionCreatorFactory.create(ItemActions.SELECT_NEXT);
  selectPrevious = ActionCreatorFactory.create(ItemActions.SELECT_PREVIOUS);
  removeAll = ActionCreatorFactory.create(ItemActions.REMOVE_ALL);
  removeVideo = ActionCreatorFactory.create<GoogleApiYouTubeVideoResource>(ItemActions.REMOVE);
  toggleRepeat = ActionCreatorFactory.create(ItemActions.TOGGLE_REPEAT);
  seekTo = ActionCreatorFactory.create<{time: string, media: GoogleApiYouTubeVideoResource}>(ItemActions.SELECT_AND_SEEK_TO_TIME);
  queueLoadVideo(media): Action {return {type: ItemActions.QUEUE_LOAD_VIDEO,payload: media};}
  queueVideo(media: GoogleApiYouTubeVideoResource): Action {return {type: ItemActions.QUEUE,payload: media};}
  updateIndexByMedia(mediaId: string): Action {return {type: ItemActions.UPDATE_INDEX,payload: mediaId};}
  queueFailed(media): Action {return {type: ItemActions.QUEUE_FAILED,payload: media};}
  queueVideos(videos: any): Action {return {type: ItemActions.QUEUE_VIDEOS,payload: videos};}
  selectVideo(media: GoogleApiYouTubeVideoResource): Action {return {type: ItemActions.SELECT,payload: media};}
  setViewPlaylist = ActionCreatorFactory.create<string>(ItemActions.VIEWED_PLAYLIST);
  updateData = (data: any) => ({type: ItemActions.UPDATE,payload: data})
  addPlaylists(playlists: Array<any>) {return {type: ItemActions.ADD_PLAYLISTS,payload: playlists};}
  updateToken = (payload: string) =>({ type: ItemActions.UPDATE_TOKEN, payload });
  signOut() {return {type: ItemActions.LOG_OUT};}
  updatePageToken(token: string) {return {type: ItemActions.UPDATE_NEXT_PAGE_TOKEN,payload: token};}
  userProfileCompleted() {return {type: ItemActions.USER_PROFILE_COMPLETED};}
  userProfileRecieved (profile: any) {return {type: ItemActions.USER_PROFILE_RECIEVED,payload: profile};}
  updateUserProfile (arr:Items) {return {type: ItemActions.UPDATE_USER_PROFILE,payload:arr};}*/
