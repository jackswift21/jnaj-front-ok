import { Injectable } from '@angular/core';
//import { FudeziApiService } from './web-api.service';

@Injectable()
export class FudeziSearch {
  /*fuSearch = {
    prefix:'http://10.0.0.6:3000/fe',
    path:'/v1/vendors',
    options:{}};
  constructor(private api:FudeziApiService){}
  search(query:string,params?:any){
    const path = this.fuSearch.path+'/search';
    const _apiOpts = Object.assign({},this.fuSearch,{path:path});
    return this.api
      .ready(_apiOpts)
      .fetchQ(this.prepare(query,params))
      .map(res => {return res.err?
        (() => {console.log('vendors search error',res.err);return res})():
        (() => {console.log('vendors',res.vendors);return res.vendors})();});}
  prepare(q,p){return q?(p?`${q}${p.preset}`:`${q}`):'';}
  searchMore(nextPageToken:string){
    //this.fuSearch.options.pageToken = nextPageToken;
    return this;}
  resetPageToken(){
    //this.fuSearch.options.pageToken = '';
    return this;}*/
}