/*import { Action } from '@ngrx/store';
//import { VendorActions } from './vendor.actions';
import { VendorState, initialState } from './vendor.model';

export function vendor (state = initialState, action: Action): VendorState {
  switch (action.type){
    case VendorActions.TOGGLE_CREATE:return {...state,createNew:!state.createNew};
    case VendorActions.LOAD_ALL:return Object.assign({},state,{vendors:action.payload});
    case VendorActions.SELECT:return Object.assign({},state,{selectedId:action.payload.id});
    case VendorActions.FILTER_CHANGE:return Object.assign({},state,{filter: action.payload });
    case VendorActions.ADD:return Object.assign({},state,{vendors: [ ...state.vendors, ...action.payload]});
    case VendorActions.UPDATE:return Object.assign({},state,{vendors:update(state.vendors,action.payload)});
    case VendorActions.DELETE:return Object.assign({},state,{vendors:remove(state.vendors,action.payload)});
    case VendorActions.DELETE_ALL:return Object.assign({},state,{vendors:[],filter:'',selectedId:''});
    case VendorActions.UPDATE_INDEX:return Object.assign({},state,{selectedId: action.payload });
    default:return state;}};*/
//export const vendorRegister = {reducer:{vendor},actions:VendorActions};

    //case VendorActions.TOGGLE_CREATE:return {...state,createNew:!state.createNew};
    //case VendorActions.LOAD_DETAIL:return Object.assign({},state,{access_token:action.payload,playlists:[]});
    /*case VendorActions.TOGGLE_TABS:
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
function remove(vendors,vendor){return vendors.filter((_vendor) => _vendor.id!==vendor.id);}
function filter(vendors,vendor){return vendors.filter((_vendor) => _vendor.id==vendor.id);}
//function toggleTab(orm:VendorForm,tab:string):VendorForm{return Object.assign({},form,{activeTab:tab});}
function update(vendors,edits){
  return vendors.map(_vendor => {return _vendor.id == edits.id?
    Object.assign({},_vendor,edits):_vendor;});}

/*case VendorActions.RESET:return Object.assign({},state,{access_token: action.payload, playlists: [] });
    case VendorActions.SAVE:return Object.assign({},state,{vendors: [ ...state.vendors, ...action.payload]});
    case VendorActions.SEARCH:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.SEARCH_RECEIVED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.SEARCH_COMPLETED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.ASSIGN:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.UNASSIGN:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.GRADE:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.CLOSE:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] }); 
    case VendorActions.SELECT_NEXT: {
      return { ...state,
        selectedId: selectNextIndex(state.videos, state.selectedId, state.filter, state.repeat)};}
    case VendorActions.SELECT_PREVIOUS:
      return Object.assign({}, state, {
        selectedId: selectPreviousIndex(state.videos, state.selectedId, state.filter)});
    case VendorActions.LOAD_ALL_COMPLETED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.LOAD_DETAIL_COMPLETED:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.ADD_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.UPDATE_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.DELETE_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.VIEW_REMIND:
      return Object.assign({},state,{
        access_token: action.payload, playlists: [] });
    case VendorActions.QUEUE:
      return Object.assign({}, state, {
        videos: addMedia(state.videos,action.payload)});
    case VendorActions.QUEUE_VIDEOS:
      return Object.assign({}, state, {
        videos: addMedias(state.videos, action.payload) });
    case VendorActions.MEDIA_ENDED: return selectNextOrPreviousTrack(state, state.filter);*/

