import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppEvents} from '../../core';
import {AppSettings,getMainNav$,getSidebarOpen$} from '../../core/store/layout';
import {Errors} from '../../shared';
declare const $:any;
declare const here:any;

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.html',
  styles:['./sidebar.css'],
})

export class Sidebar {
	navMenu;
  constructor(
    private store:Store<AppSettings>,
    private app:AppEvents){
    store.select(getMainNav$).subscribe(nav => this.navMenu = nav);}
  ngAfterViewInit(){
  	let mySidebar = $("#mySidebar");
  	this.store.select(getSidebarOpen$).subscribe(open => {
  		if(open){
	  		mySidebar
	  		.removeClass("w3-animate-left-hide")
	  		.addClass("w3-animate-left")
	  		.show();}
			else{
				mySidebar
				.removeClass("w3-animate-left")
				.addClass("w3-animate-left-hide");
				setTimeout(() => mySidebar.hide(),400);}});}
	close(){this.app.do('closeSidebar');}
}
