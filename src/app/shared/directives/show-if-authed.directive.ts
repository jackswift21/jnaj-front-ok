import {Directive,Input,TemplateRef,ViewContainerRef} from '@angular/core';
//import {UserService} from '../services';

@Directive({selector:'[showIfAuthed]'})

export class ShowIfAuthedDirective {
  @Input() set showIfAuthed(condition:boolean){this.condition = condition;}
  condition:boolean;
  constructor(
    //private user:UserService,
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef){}
  ngOnInit(){}
    /*this.user.auth.subscribe(auth =>
      auth&&this.condition||!auth&&!this.condition?
      (() => {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef)})():
      this.viewContainer.clear());}*/
}
