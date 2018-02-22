import {Injectable} from '@angular/core';
import {Location} from '@angular/common'
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {AppWindowService} from './window.service';
import {AppState} from './app.state';
declare const here:any;

@Injectable()
export class AppNavigationService {
  private backOrForward = false;
  private lastScrollPosition;
  private navMenu = [
    {route:"/search",query:{},label:'SEARCH',icon:"fa fa-search"},
    {route:"/samples",query:{},label:'SAMPLES',icon:"fa fa-th"},
    //{route:"/about",query:{},label:'ABOUT',icon:"fa fa-info"},
    //{route:"/pricing",query:{},label:'PRICING',icon:"fa fa-usd"},
    {route:"/contact",query:{subject:'general'},label:'CONTACT',icon:"fa fa-envelope"},
    {route:"/auth/signin",query:{},label:'SIGNIN',icon:"fa fa-user-circle"}];
  private footerNavMenu = [
    {route:'/contact',query:{subject:'advertise'},label:'Advertise With Us',title:'Advertise'},
    {route:'/contact',query:{subject:'invest'},label:'Invest In Us',title:'Invest'},
    {route:'/about',query:{},label:'About J.N.A.J.',title:'About'},
    {route:'/about/thanks',query:{},label:'Special Thanks',title:'Thanks'}];
  private _isIntro = new BehaviorSubject<boolean>(false);
  public isIntro = this._isIntro.asObservable();
  constructor(
    private router:Router,
    private state:AppState,
    private win:AppWindowService,
    private location:Location){
    this.state.notify({navMenu:this.navMenu,footerNavMenu:this.footerNavMenu});
    this.state.current.subscribe(s => this.lastScrollPosition = s.lastScrollPosition);
    this.location.subscribe(() => this.backOrForward = true);
    router.events.subscribe(e => 
      e instanceof NavigationStart?this.onRouteChangeStart():
      e instanceof NavigationEnd?this.onRouteChangeComplete():null);}
  onRouteChangeStart(){this.state.notify({lastScrollPosition:this.win.scroll()});}
  onRouteChangeComplete(){
    this.backOrForward?
      (() => {this.win.scroll(this.lastScrollPosition);here(this.backOrForward,this.lastScrollPosition)})():
      (() => {this.win.scroll(0);this.backOrForward = false;})();
    this.router.routerState.snapshot.url === '/'?
      this.state.notify({isIntro:true}):
      this.state.notify({isIntro:false});}
}