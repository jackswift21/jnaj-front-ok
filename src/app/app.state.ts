import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
declare const here:any;

let initialState = {
  searches:[]
};

@Injectable()
export class AppState {
  private _current = new BehaviorSubject<any>({});
  //public current = this._current.asObservable();
  initialize(){
    if(localStorage['jnajAppState']) this.notify(JSON.parse(localStorage['jnajAppState']));
    else this.notify(initialState);}
  notify(data){
    let state = this._current.getValue();
    Object.keys(data).forEach(k => state[k] = data[k]);
    localStorage.setItem('jnajAppState',JSON.stringify(state));
    this._current.next(state);}
  get current(){return this._current.getValue()}
}