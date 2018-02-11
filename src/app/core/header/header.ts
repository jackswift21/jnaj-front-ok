import { Component } from '@angular/core';
import { CoreLayoutService } from '../providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'core-header',
  templateUrl: './header.html',
  styles:['./header.css'],
})

export class Header {
  isIntro;
  constructor(private layout:CoreLayoutService){layout.isIntro.subscribe(b => this.isIntro = b);}
  toggle(){this.layout.toggle();}
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
