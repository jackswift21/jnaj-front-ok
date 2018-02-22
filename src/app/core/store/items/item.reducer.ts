import { Action } from '@ngrx/store';
import { ItemActions } from './item.actions';
import { ItemModel, initialState } from './item.model';

export function item (state = initialState, action: Action): ItemModel {
  switch (action.type){
    case ItemActions.TOGGLE_CREATE:return {...state,createNew:!state.createNew};
    case ItemActions.LOAD_ALL:return Object.assign({},state,{items:action.payload});
    case ItemActions.SELECT:return Object.assign({},state,{selectedId:action.payload.id});
    case ItemActions.FILTER_CHANGE:return Object.assign({},state,{filter: action.payload });
    case ItemActions.ADD:return Object.assign({},state,{items: [ ...state.items, ...action.payload]});
    case ItemActions.UPDATE:return Object.assign({},state,{items:update(state.items,action.payload)});
    case ItemActions.DELETE:return Object.assign({},state,{items:remove(state.items,action.payload)});
    case ItemActions.DELETE_ALL:return Object.assign({},state,{items:[],filter:'',selectedId:''});
    case ItemActions.UPDATE_INDEX:return Object.assign({},state,{selectedId: action.payload });
    default:return state;}};
export const itemRegister = {reducer:{ item }, actions: ItemActions};

    //case ItemActions.TOGGLE_CREATE:return {...state,createNew:!state.createNew};
    //case ItemActions.LOAD_DETAIL:return Object.assign({},state,{access_token:action.payload,playlists:[]});
    /*case ItemActions.TOGGLE_TABS:
      const activeTab = Object.assign({},state.form.activeTab,action.payload);
      const form = Object.assign({},state.form,{activeTab});
      return Object.assign({},state,{form});*/
/*function addMedia(videos: GoogleApiYouTubeVideoResource[], media: any) {
  const newMedia = [...videos].findIndex(video => video.id === media.id);
  const newMedias = [];
  if (newMedia === -1) {newMedias.push(media);}
  return [...videos, ...newMedias];}*/
/*function addMedias(videos, medias) {
  const allVideoIds = videos.map(video => video.id);
  let newVideos = [];
  medias.forEach(media => {if (allVideoIds.indexOf(media.id) === -1) {newVideos.push(media);}});
  return videos.concat(newVideos);}*/
//function filterVideos(videos: GoogleApiYouTubeVideoResource[], filter: string) {
//  return videos.filter(video => JSON.stringify(video).toLowerCase().includes(filter.toLowerCase()));}
/*function selectNextIndex(videos: GoogleApiYouTubeVideoResource[], selectedId: string, filter: string, isRepeat: boolean): string {
  const filteredVideos = filterVideos(videos, filter);
  const currentIndex: number = filteredVideos.findIndex(video => video.id === selectedId);
  let nextIndex = currentIndex + 1;
  if (!filteredVideos.length) {nextIndex = 0;}
  if (filteredVideos.length === nextIndex) {nextIndex = isRepeat ? 0 : currentIndex;}
  return filteredVideos[nextIndex].id || '';}
/*function selectPreviousIndex(videos: GoogleApiYouTubeVideoResource[], selectedId: string, filter: string): string {
  const filteredVideos = filterVideos(videos, filter);
  const currentIndex: number = filteredVideos.findIndex(video => video.id === selectedId);
  let previousIndex = currentIndex - 1;
  if (!filteredVideos.length || previousIndex < 0) {previousIndex = 0;}
  return filteredVideos[previousIndex].id || '';}
/*function selectNextOrPreviousTrack(state: NowPlaylistInterface, filter: string): NowPlaylistInterface {
  const videosPlaylist = state.videos;
  const currentId = state.selectedId;
  const indexOfCurrentVideo = videosPlaylist.findIndex(video => currentId === video.id);
  const isCurrentLast = indexOfCurrentVideo + 1 === videosPlaylist.length;
  const nextId = isCurrentLast
    ? getNextIdForPlaylist(videosPlaylist, state.repeat, currentId)
    : selectNextIndex(videosPlaylist, currentId, filter, state.repeat);
  return Object.assign({}, state, { selectedId: nextId });}
/*function getNextIdForPlaylist(videos: GoogleApiYouTubeVideoResource[], repeat: boolean, currentId: string = '') {
  let id = '';
  if (videos.length && repeat) {id = videos[0].id;}
  return id;}*/
function remove(items,item){return items.filter((_item) => _item.id!==item.id);}
function filter(items,item){return items.filter((_item) => _item.id==item.id);}
//function toggleTab(orm:ItemForm,tab:string):ItemForm{return Object.assign({},form,{activeTab:tab});}
function update(items,edits){
  return items.map(_item => {return _item.id == edits.id?
    Object.assign({},_item,edits):_item;});}

/*case ItemActions.RESET:return Object.assign({},state,{access_token: action.payload, playlists: [] });
    case ItemActions.SAVE:return Object.assign({},state,{items: [ ...state.items, ...action.payload]});
    case ItemActions.SEARCH:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.SEARCH_RECEIVED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.SEARCH_COMPLETED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.ASSIGN:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.UNASSIGN:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.GRADE:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.CLOSE:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] }); 
    case ItemActions.SELECT_NEXT: {
      return { ...state,
        selectedId: selectNextIndex(state.videos, state.selectedId, state.filter, state.repeat)};}
    case ItemActions.SELECT_PREVIOUS:
      return Object.assign({}, state, {
        selectedId: selectPreviousIndex(state.videos, state.selectedId, state.filter)});
    case ItemActions.LOAD_ALL_COMPLETED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.LOAD_DETAIL_COMPLETED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.ADD_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.UPDATE_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.DELETE_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.VIEW_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case ItemActions.QUEUE:
      return Object.assign({}, state, {
        videos: addMedia(state.videos,action.payload)});
    case ItemActions.QUEUE_VIDEOS:
      return Object.assign({}, state, {
        videos: addMedias(state.videos, action.payload) });
    case ItemActions.MEDIA_ENDED: return selectNextOrPreviousTrack(state, state.filter);*/

