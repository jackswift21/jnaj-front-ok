import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare const here:any;

@Injectable()
export class CoreLayoutService {
  public navMenu = [
    {link:"/search",label:'SEARCH',icon:"fa fa-search"},
    {link:"/samples",label:'SAMPLES',icon:"fa fa-th"},
    //{link:"/about",label:'ABOUT',icon:"fa fa-info"},
    //{link:"/pricing",label:'PRICING',icon:"fa fa-usd"},
    {link:"/contact",label:'CONTACT',query:{subject:'general'},icon:"fa fa-envelope"},
    {link:"/auth/signin",label:'SIGNIN',icon:"fa fa-user-circle"}];
  private intro = new BehaviorSubject<boolean>(false);
  public isIntro = this.intro.asObservable();
  private sidebar = new BehaviorSubject<boolean>(false);
  public openSidebar = this.sidebar.asObservable();
  constructor(private router:Router){
    router.events.subscribe(e => 
      e instanceof NavigationEnd?this.onRouteChangeComplete():null);}
  toggle(){this.sidebar.next(!this.sidebar.getValue());}
  onRouteChangeComplete(){
    window.scrollTo(0,0);
    this.router.routerState.snapshot.url === '/'?
      this.intro.next(true):
      this.intro.next(false);}
}