import {Injectable} from '@angular/core';
import {Location} from '@angular/common'
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../store';
import * as layout from '../store/layout/layout.actions';
import {AppWindowService} from './window.service';
declare const here:any;

@Injectable()
export class AppNavigationService {
  private backOrForward = false;
  private lastScrollPosition;
  private isIntro = false;
  constructor(
    private router:Router,
    private location:Location,
    private store:Store<JNAJAppState>,
    private win:AppWindowService){
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){}
      if(event instanceof NavigationEnd){this.updateLayoutIsIntro();}});}
  updateLayoutIsIntro(){
    !this.isIntro&&this.router.routerState.snapshot.url === '/'?
    (() => {this.store.dispatch(new layout.toggleIsIntro(true));this.isIntro = !this.isIntro})():
    this.isIntro&&this.router.routerState.snapshot.url !== '/'?
    (() => {this.store.dispatch(new layout.toggleIsIntro(false));this.isIntro = !this.isIntro})():null;}
}
//this.state.current.subscribe(s => this.lastScrollPosition = s.lastScrollPosition);
//this.location.subscribe(() => this.backOrForward = true);
//this.backOrForward?
//(() => {this.win.scroll(this.lastScrollPosition);here(this.backOrForward,this.lastScrollPosition)})():
//(() => {this.win.scroll(0);this.backOrForward = false;})();