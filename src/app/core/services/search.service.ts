import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Jsonp,URLSearchParams,RequestOptionsArgs} from '@angular/http';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {ApiService} from './api.service';
declare const here:any;

@Injectable()
export class SearchService {
  pageToken = 'ok';
	constructor(private api:ApiService,private jsonp:Jsonp){}
  go(query,params){return this.api.get('/search/go').map(data => null);}
  suggest(query:string){
    const searchConfig: URLSearchParams = new URLSearchParams();
    const searchParams = {
      hl: 'en',
      ds: 'yt',
      xhr: 't',
      client: 'youtube',
      q: query,
      callback:'JSONP_CALLBACK'};
    Object.keys(searchParams).forEach(param => searchConfig.set(param,searchParams[param]));
    return this.api.get("/search/suggest",searchConfig)
    .map(data => data.terms)
    .map(terms => terms.map(t => t.v));}
  addSuggestion(suggestion:string){
    return this.api.post("/search/suggest",{newTerm:suggestion})
    .map(data => data.termAdded);}
  suggestFromGoogle(query:string){
    const url = 'http://suggestqueries.google.com/complete/search';
    const searchConfig: URLSearchParams = new URLSearchParams();
    const searchParams = {
      hl: 'en',
      ds: 'yt',
      xhr: 't',
      client: 'youtube',
      q: query,
      callback:'JSONP_CALLBACK'};
    Object.keys(searchParams).forEach(param => searchConfig.set(param,searchParams[param]));
    const options:RequestOptionsArgs = {search:searchConfig};
    return this.jsonp.get(url,options)
    .map(res => res.json()[1])
    .map(results => results.map(results => results[0]));}
  resetPageToken(){
    //this._apiOptions.pageToken = '';
    this.pageToken = '';
    return this;}
}

/*
interface Search {query:string,results:{profiles:any[];samples:any[];articles:any[];}}
let initialSearch = {query:'',results:{profiles:[],samples:[],articles:[]}};

data = {profiles:data.profiles,samples:['a','b','c'],articles:['a','b','c','d']};
this.state.notify({
  searches:[...this.searches,{query:q,results:data}],
  profiles:data.profiles,
  samples:data.samples,
  articles:data.articles});
return {results:data};*/