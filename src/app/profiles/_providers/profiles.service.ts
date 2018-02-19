import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {ApiService} from '../../shared';
import {AppState} from '../../';
declare const here:any;

interface SearchResults {profiles:number;samples:number;articles:number;}

@Injectable()
export class ProfilesService {
	_current = new BehaviorSubject<any[]>([]);
  current = this._current.asObservable();
  constructor(private state:AppState,private api:ApiService){}
  fetchAll(){
    let searches = this.state.current.searches;
    return searches[searches.length-1].results.profiles;}
  fetch(id){return this.api.get('/profiles/'+id).map(data => data);}
}