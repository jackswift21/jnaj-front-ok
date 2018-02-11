import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';
//import {ProfilesService} from '../services';

@Directive({selector:'[editingProfile]'})

export class EditingProfileDirective {
  /*@Input() set editingProfile(condition:boolean){this.condition = condition;}
  condition:boolean;
  constructor(
    private profiles:ProfilesService,
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef){}
  ngOnInit(){
    this.profiles.edit.subscribe(editing => 
      editing&&this.condition||!editing&&!this.condition?
      (() => {this.viewContainer.clear();this.viewContainer.createEmbeddedView(this.templateRef)})():
      this.viewContainer.clear());}*/
}
