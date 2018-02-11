import { Component } from '@angular/core';
import { CoreLayoutService } from '../providers';
declare const $:any;
declare const here:any;
//import { User,UserService } from '../../../shared';

@Component({
  selector: 'core-footer',
  templateUrl: './footer.html',
  styles:['./footer.css'],
})

export class Footer {
  isIntro;
  constructor(private layout:CoreLayoutService){layout.isIntro.subscribe(b => this.isIntro = b);}
  toggle(){this.layout.toggle();}
  backToTop(){return window.scrollTo(0,0)}
}

	/*me:User = new User();
  selected = [];
  today:number = Date.now();
  constructor(private user:UserService){}
	ngOnInit(){
		this.user.auth.subscribe(a => a?
      (() => {
        this.me = this.user.me;
        this.selected = this[`${this.me.role.toLowerCase()}Tabs`](this.me.handle)})():
      this.selected = this.userTabs());}
  userTabs(handle?:string){return [
    {link:['/'],val:'home',label:'<i class="ion-home"></i>'},
    {link:['/search'],val:'search',label:'<i class="ion-search"></i>'},
    {link:['/orders',handle||''],val:'orders',label:'<i class="ion-pricetag"></i>'},
    {link:['/profile',handle||''],val:'profile',label:'<i class="ion-person"></i>'}];}
  vendorTabs(){return [
    {link:['/'],val:'home',label:'<i class="ion-home"></i>'},
    {link:['/search'],val:'search',label:'<i class="ion-search"></i>'},
    //{link:['/orders',this.vendor.slug],val:'orders',label:'<i class="ion-pricetag"></i>'},
    //{link:['/profile',this.vendor.slug],val:'profile',label:'<i class="ion-person"></i>'}
    ];}
  adminTabs(){return [
    {val:'home',label:'Home',icon:'ion-home',selected:true},
    {val:'search',label:'Search',icon:'ion-search',selected:true},
    {val:'orders',label:'Orders',icon:'ion-pricetag',selected:true},
    {val:'profile',label:'Profile',icon:'ion-person',selected:true}];}*/
