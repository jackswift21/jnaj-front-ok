import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {ApiService} from '../../shared';
import {AppState} from '../../';
declare const here:any;

//interface SearchResults {profiles:number;samples:number;articles:number;}

@Injectable()
export class SearchService {
	newQuery = new BehaviorSubject<string>('');
	query = this.newQuery.asObservable();
	constructor(private api:ApiService,private state:AppState){}
  go(q){
  	this.newQuery.next(q);
  	this.api.get('/profiles').subscribe(data => this.state.notify({profiles:data.profiles}));}
}