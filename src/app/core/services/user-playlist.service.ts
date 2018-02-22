import { Injectable, NgZone } from '@angular/core';
import { FudeziApiService } from './web-api.service';
import { YoutubeVideosInfo } from './youtube-videos-info.service';
import { GoogleBasicProfile } from '../store/user-profile';

@Injectable()
export class UserPlaylistService {
  /*playlistInfo = {
    prefix: 'https://www.googleapis.com/youtube',
    path:'/v3/playlistItems',
    options:{
      mine: 'true',
      idKey: 'playlistId'}};
  playlists = {
    prefix: 'https://www.googleapis.com/youtube',
    path:'/v3/playlists',
    options:{
      mine: 'true',
      part: 'snippet,id,contentDetails',
      pageToken:''}};
  playlistApi = {
    prefix: 'https://www.googleapis.com/youtube',
    path:'/v3/playlists',
    options: {
      idKey: 'id',
      part: 'snippet,id,contentDetails'}};
  isSearching: Boolean = false;
  constructor(
    private zone: NgZone,
    private youtubeVideosInfo: YoutubeVideosInfo,
    private api:FudeziApiService){}
  getPlaylists(isNewPage:boolean){
    const hasAccessToken = this.api.hasToken();
    if (!hasAccessToken) {return;}
    if (isNewPage) {this.api.resetPageToken();}
    return this.api
      .ready(this.playlists)
      .fetch();}
  updatePageToken(pageToken:string){
    this.playlists.options.pageToken = pageToken;}
  resetPageToken(){this.playlists.options.pageToken='';}
  fetchPlaylist(playlistId:string){
    this.playlistApi.options.idKey = playlistId;
    return this.api
      .ready(this.playlistApi)
      .fetch();}
  fetchPlaylistItems(playlistId: string) {
    //this.playlistInfo.options.delete('pageToken');
    this.playlistApi.options.idKey = playlistId;
    return this.api
      .ready(this.playlistInfo)
      .fetch()
      .switchMap(res => {
        const videoIds = res.items.map(video => video.snippet.resourceId.videoId).join(',');
        return this.youtubeVideosInfo.fetchVideosData(videoIds);});}
  isTokenValid(token) {
    const accessToken = this.playlists.config.get('access_token');
    return accessToken === token;}
  toUserJson (profile): GoogleBasicProfile {
    let _profile: GoogleBasicProfile = {};
    if (profile) {
      _profile.imageUrl = profile.getImageUrl();
      _profile.name = profile.getName();}
    return _profile;}*/
}
