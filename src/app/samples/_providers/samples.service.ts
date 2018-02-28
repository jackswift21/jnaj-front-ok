import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
//import {AppState,ApiService} from '../../_providers';
declare const here:any;

@Injectable()
export class SamplesService {
	/*profiles;
	_current = new BehaviorSubject<any[]>([]);
  current = this._current.asObservable();
  constructor(private state:AppState,private api:ApiService){
  	this.state.current.subscribe(state =>
  		this._current.next(state.profiles));}
  fetch(id){return this.api.get('/profiles/'+id).map(data => data);}*/
}