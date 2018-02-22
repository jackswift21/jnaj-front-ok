import {Injectable} from '@angular/core';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {AppWindowService} from './window.service';
declare const here:any;

let initialState = {searches:[{query:'',results:{profiles:[],samples:[],articles:[]}}]};

@Injectable()
export class AppState {
  private _current = new BehaviorSubject<any>({});
  public current = this._current.asObservable();
  constructor(private win:AppWindowService){window.onbeforeunload = () => this.win.state = this._current.getValue();}
  initialize(){this.win.state?this.notify(this.win.state):this.notify(initialState);}
  notify(data){
    let state = this._current.getValue();
    Object.keys(data).forEach(k => state[k] = data[k]);
    this.win.state = state;
    here(state);
    this._current.next(state);}
  fetch(key:string){return this._current.getValue()[key];}
  /*save(item:object){
    let newState = Object.assign({},this.state,item);
    this.state(newState);}
  destroy(key:string){
    if(this.state){
      this.state(() => {
        let state = this.state;
        delete state[key];
        done(state)});}}//what is the return of delete function*/
}