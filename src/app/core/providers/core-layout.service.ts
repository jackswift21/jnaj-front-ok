import {Injectable} from '@angular/core';
import {Router,NavigationStart,NavigationEnd} from '@angular/router';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare const here:any;

@Injectable()
export class CoreLayoutService {
  private intro = new BehaviorSubject<boolean>(false);
  public isIntro = this.intro.asObservable();
  private sidebar = new BehaviorSubject<boolean>(false);
  public openSidebar = this.sidebar.asObservable();
  constructor(private router:Router){
    router.events.subscribe(e =>
      (e instanceof NavigationEnd)?
      (router.routerState.snapshot.url === '/')?
      this.intro.next(true):this.intro.next(false):null);}
  toggle(){this.sidebar.next(!this.sidebar.getValue());}
}