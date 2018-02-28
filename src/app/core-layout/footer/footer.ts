import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppEvents} from '../../core';
import {AppSettings,getFooterNav$,isIntro$} from '../../core/store/layout';
import {Errors} from '../../shared';
declare const $:any;
declare const here:any;

@Component({
  selector: 'core-footer',
  templateUrl: './footer.html',
  styles:['./footer.css'],
})

export class Footer {
  navMenu;
  isIntro;
  today:number = Date.now();
  constructor(
    private store:Store<AppSettings>,
    private app:AppEvents){
    store.select(getFooterNav$).subscribe(nav => this.navMenu = nav);
    store.select(isIntro$).subscribe(intro => this.isIntro = intro);}
  toggle(){this.app.do('toggleSidebar');}
  backToTop(){return window.scrollTo(0,0)}
}
