import {Directive,Input,Output,EventEmitter,TemplateRef,ViewContainerRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
//import {Profile,VendorProfile} from '../models';
//import {ProfilesService,UserService} from '../services';

@Directive({selector:'[fetchImage]'})

export class FetchImageDirective {
  /*@Input() set profile(profile:Profile){
    //console.log(profile);
    let isVendor = profile instanceof VendorProfile;
    profile.image&&typeof profile.image === 'string'?
      this.profiles.getImg(isVendor?profile['slug']:profile['handle'],profile.image).subscribe(image => {
        this.imageUrl.emit(this.sanitize(image));
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);}):
    profile.image&&typeof profile.image !== 'string'?(() => {
      this.imageUrl.emit(this.sanitize(profile.image));
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);})():
    (() => {
      this.imageUrl.emit('assets/images/smiley-cyrus.jpg');
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);})();}
  @Output() imageUrl = new EventEmitter();
  constructor(
    private profiles:ProfilesService,
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef,
    private sanitizer:DomSanitizer){}
  sanitize(img){return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(img));}*/
}
