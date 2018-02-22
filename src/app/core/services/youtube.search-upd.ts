import { Injectable } from '@angular/core';
import { FudeziApiService } from './web-api.service';
import { YOUTUBE_API_KEY } from './constants';

@Injectable()
export class YoutubeSearch {
  youtube = {
    req:'http',
    prefix:'http://10.0.0.6:3000',
    path:'/v3/search',
    options:{
      maxResults: '50',
      key: YOUTUBE_API_KEY,
      part: 'snippet,id',
      q: '',
      type: 'video',
      pageToken: '',}};
  constructor(private api:FudeziApiService){}
  search(query:string,params?:any){
    return this.api
      .ready(this.youtube)
      .fetchQ(this.prepare(query,params))
      .map(res => {return res.json().err?
        (() => {console.log('vendors search error',res.json().err);return res.json()})():
        (() => {console.log('videos',res.json());return res.json();})();});}
  prepare(q,p){return q?(p?`${q}${p.preset}`:`${q}`):'';}
  searchMore(nextPageToken: string) {
    this.youtube.options.pageToken = nextPageToken;
    return this;}
  resetPageToken () {
    this.youtube.options.pageToken = '';
    return this;}
}
