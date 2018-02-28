import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppEvents} from '../../core';
import {AppSettings,getMainNav$,isIntro$} from '../../core/store/layout';
import {Errors} from '../../shared';
declare const $:any;
declare const here:any;

@Component({
  selector: 'core-header',
  templateUrl: './header.html',
  styles:['./header.css'],
})

export class Header {
  isIntro;
  navMenu;
  constructor(
    private store:Store<AppSettings>,
    private app:AppEvents){
    store.select(isIntro$).subscribe(intro => this.isIntro = intro);
    store.select(getMainNav$).subscribe(nav => this.navMenu = nav);}
  toggle(){this.app.do('toggleSidebar');}
}


	/*role = '';
  profilePic = '';
  title = 'Home';
  constructor(private user:UserService){}
  ngOnInit(){
    this.user.auth.subscribe(a => a?
      (() => {
        this.profilePic = this.user.me.profile.image;
        this.role = '('+this.capitalize(this.user.me.role)+')';})():null);}
  capitalize(str){return str.split('').map((c,i) => i==0?c.toUpperCase():c).join('')}*/
