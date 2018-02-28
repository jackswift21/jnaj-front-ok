import {Injectable} from '@angular/core';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
//import {AppState} from '../../_providers';
declare const here:any;

@Injectable()
export class CoreLayoutService {
  /*navMenu;
  footerNavMenu;
  private _isIntro = new BehaviorSubject<boolean>(false);
  public isIntro = this._isIntro.asObservable();
  private sidebar = new BehaviorSubject<boolean>(false);
  public openSidebar = this.sidebar.asObservable();
  constructor(private state:AppState){
    this.state.current.subscribe(state => {
      this.navMenu = state.navMenu;
      this.footerNavMenu = state.footerNavMenu;
      this._isIntro.next(state.isIntro);});}
  toggle(){this.sidebar.next(!this.sidebar.getValue());}*/
}