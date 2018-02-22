import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {AppState,ApiService} from '../../_providers';
declare const here:any;

interface Search {query:string,results:{profiles:any[];samples:any[];articles:any[];}}
let initialSearch = {query:'',results:{profiles:[],samples:[],articles:[]}};

@Injectable()
export class SearchService {
  searches;
  _newSearch = new BehaviorSubject<Search>(initialSearch);
	newSearch = this._newSearch.asObservable();
	constructor(private api:ApiService,private state:AppState){
    this.state.current.subscribe(state => {
      this._newSearch.next(state.searches[state.searches.length-1]);
      here(this._newSearch.getValue());});}
  go(q){
  	return this.api.get('/search').map(data => {
  		data = {profiles:data.profiles,samples:['a','b','c'],articles:['a','b','c','d']};
  		this.state.notify({
        searches:[...this.searches,{query:q,results:data}],
        profiles:data.profiles,
        samples:data.samples,
        articles:data.articles});
  		return {results:data};});}
}