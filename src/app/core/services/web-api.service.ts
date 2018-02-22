import { Http, Jsonp, URLSearchParams, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Authorization } from './authorization.service';

@Injectable()
export class FudeziApiService {
  /*url:string;
  idKey:string;
  contentType:string;
  nextPageToken:string;
  config: URLSearchParams = new URLSearchParams();
  jsonpOptions:any;
  isSearching = false;
  authorize = false;
  constructor(
    private http:Http,
    private jsonp:Jsonp,
    private auth:Authorization){
    if(auth){this.authorize = true;}
  }
  ready(o){
    this.url = `${o.prefix}${o.path}`;
    //this.idKey = o.idKey || '';
    this.contentType = o.content;
    if(o.req == 'jsonp'){this.jsonpOptions = o.options}
    else{this.setConfig(o.options);}
    return this;}
  fetchQ(query){
    this.isSearching = true;
    query?this.setConfig({q:query}):null;
    const opts:RequestOptionsArgs = {
      search:this.config,
      headers:this.createHeaders(false)};
    //console.log(opts);
    return this.http.get(this.url,opts).map(res => res.json());}
  fetchJsonp(query){
    this.isSearching = true;
    return this.jsonp.request(this.url+query).map(res => res.json());}
  fetch(){
    this.isSearching = true;
    const opts:RequestOptionsArgs = {
      search:this.config,
      headers: this.createHeaders(false)};
    return this.http.get(this.url,opts)
      .map(res => res.json())
      .map(res => {
        res.nextPageToken?(()=>res.nextPageToken=this.nextPageToken)():null;
        this.isSearching = false;
        return res;});}
  post(data){
    const opts:RequestOptionsArgs = {headers: this.createHeaders(false)};
    return this.http.post(this.url,data).map(res => res.json());}
  put(data){
    const opts:RequestOptionsArgs = {headers: this.createHeaders(false)};
    return this.http.put(this.url,data,opts).map(res => res.json());}
  delete(){
    const opts:RequestOptionsArgs = {headers: this.createHeaders(false)};
    return this.http.delete(this.url).map(res => res.json());}
  private createHeaders(addAuth:boolean){
    console.log('auth:',this.authorize);
    const headersOptions = {};
    const accessToken = this.auth.accessToken;
    const contentType = this.contentType;
    if(contentType){headersOptions["Content-Type"] = contentType;}
    if(accessToken&&addAuth){headersOptions['authorization'] = `Bearer ${accessToken}`;}
    return new Headers(headersOptions);}
  setConfig(opts){Object.keys(opts).forEach(opt =>{this.config.set(opt,opts[opt]);});}
  hasToken():boolean{return this.auth && this.auth.accessToken.length>0;}
  resetPageToken(){this.config.set('pageToken', '');}
  fetchNextPage(){if(!this.isSearching){this.config.set('pageToken',this.nextPageToken);}}*/
}
