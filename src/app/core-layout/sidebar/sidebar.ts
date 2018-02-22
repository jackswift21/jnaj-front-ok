import {Component} from '@angular/core';
import {CoreLayoutService} from '../_providers';
declare const here:any;
declare const $:any;

@Component({
  selector: 'core-sidebar',
  templateUrl: './sidebar.html',
  styles:['./sidebar.css'],
})

export class Sidebar {
	navMenu;
	constructor(private layout:CoreLayoutService){}
	ngOnInit(){this.navMenu = this.layout.navMenu;}
	ngAfterViewInit(){
		let mySidebar = $("#mySidebar");
		this.layout.openSidebar.subscribe(open => {
			if(open){mySidebar.removeClass("w3-animate-left-hide").addClass("w3-animate-left").show();}
			else{
				mySidebar.removeClass("w3-animate-left").addClass("w3-animate-left-hide");
				setTimeout(() => mySidebar.hide(),400);}});}
	toggle(){this.layout.toggle();}
}
