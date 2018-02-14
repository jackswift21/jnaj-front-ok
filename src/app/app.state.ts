import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {ApiService} from './shared';
declare const here:any;

interface SearchResults {profiles:any[];samples:any[];articles:any[];}

@Injectable()
export class AppState {
	constructor(private api:ApiService){}
  private searches = {
  	profiles:new BehaviorSubject<any[]>([]),
  	samples:new BehaviorSubject<any[]>([]),
  	articles:new BehaviorSubject<any[]>([])};
  public results = {
  	profiles:this.searches.profiles.asObservable(),
  	samples:this.searches.samples.asObservable(),
  	articles:this.searches.articles.asObservable()};
  notify(data){Object.keys(data).forEach(k => this.searches[k].next(data[k]));}
}