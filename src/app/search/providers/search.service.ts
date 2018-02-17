import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {ApiService} from '../../shared';
import {AppState} from '../../';
declare const here:any;

interface Search {query:string,results:{profiles:any[];samples:any[];articles:any[];}}
let initialSearch = {query:'',results:{profiles:[],samples:[],articles:[]}};

@Injectable()
export class SearchService {
	_newSearch = new BehaviorSubject<Search>(initialSearch);
	newSearch = this._newSearch.asObservable();
	constructor(private api:ApiService,private state:AppState){}
  go(q){
  	return this.api.get('/search').map(data => {
  		data = {profiles:data.profiles,samples:['a','b','c'],articles:['a','b','c','d']};
  		let searches = this.state.current.searches;
  		this.state.notify({searches:[...searches,{query:q,results:data}]});
  		this._newSearch.next({query:q,results:data});
  		return {results:data};});}
}