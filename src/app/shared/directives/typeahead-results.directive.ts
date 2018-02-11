import {
  ChangeDetectorRef,Component,Input,Output,EventEmitter,TemplateRef,ViewContainerRef,
  HostListener,ElementRef,ViewChild,} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/share';

enum Key {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Escape = 27,
  ArrowLeft = 37,
  ArrowRight = 39,
  ArrowUp = 38,
  ArrowDown = 40}


@Component({
	selector: '[typeahead-results]',
	template:`
		<ng-template #suggestionsTplRef>
		  <section class="list-group results" *ngIf="showSuggestions">
		    <div class="typeahead-backdrop" (click)="hideSuggestions()"></div>
		    <button type="button" class="list-group-item"
		      *ngFor="let s of suggestions; let i = index;"
		      [class.active]="markIsActive(i,s)"
		      (click)="handleSelectSuggestion(s)">
		      <span *ngIf="!taItemTpl"><i class="fa fa-search"></i> {{s}}</span>
		      <ng-template
		        [ngTemplateOutlet]="taItemTpl" 
		        [ngTemplateOutletContext]="{ $implicit:{result:s,index:i}}"></ng-template>
		    </button></section></ng-template>`,
	/*styles: [`
    .typeahead-backdrop {
      position: fixed;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;}`],*/
	/*template:`
  	<ng-template #suggestionsTplRef>
  		<!--sub>POPULAR TAGS</sub-->
  		<div class="tag-list">
  			<search-tag-item *ngFor="let item of suggestions;let i = index" 
  				(select)="select(i,$event)" 
  				[selected]="suggestionIndex === i"
  				[tag]="item"></search-tag-item></div></ng-template>`,*/
})

export class TypeAheadSuggestions {
	@Input() set taSuggestions(s:string[]){
		this.suggestions = s;
		this.showSuggestions = true;
		this.suggestionIndex = 0;}
	@Input() taItemTpl: TemplateRef<any>;
	@Output() taSelected = new EventEmitter<string>();
	constructor(
		private element: ElementRef,
    private viewContainer:ViewContainerRef,
    private cdr:ChangeDetectorRef){}
	private subscriptions:Subscription[];
	private activeResult:string;
	suggestions = [];
	showSuggestions = false;
	private suggestionIndex = 0;
  @ViewChild('suggestionsTplRef') suggestionsTplRef;
  @HostListener('keydown',['$event'])
  onElementKeyDown(){return Observable.fromEvent(this.element.nativeElement,'keydown').share();}
  ngOnInit(){
  	this.renderTemplate();
  	const onkeyDown$ = this.onElementKeyDown();
  	this.subscriptions = [this.navigateWithArrows(onkeyDown$)];}
  renderTemplate(){
    this.viewContainer.createEmbeddedView(this.suggestionsTplRef);
    this.cdr.markForCheck();}
  navigateWithArrows(elementObs: Observable<{}>){
    return elementObs
      .filter((e: any) => e.keyCode === Key.ArrowDown || e.keyCode === Key.ArrowUp)
      .map((e: any) => e.keyCode)
      .subscribe((keyCode: number) => {
        const step = keyCode === Key.ArrowDown ? 1 : -1;
        const topLimit = 9;
        const bottomLimit = 0;
        this.suggestionIndex += step;
        if (this.suggestionIndex === topLimit + 1) {
          this.suggestionIndex = bottomLimit;}
        if (this.suggestionIndex === bottomLimit - 1) {
          this.suggestionIndex = topLimit;}
        this.showSuggestions = true;
        this.cdr.markForCheck();
      });}
	select(i,s){console.log(s);this.markIsActive(i,s);}//this.hideSuggestions();}
	markIsActive(index:number,result:string) {
    const isActive = index === this.suggestionIndex;
    if(isActive){this.activeResult = result;}
    return isActive;}
  hideSuggestions(){this.showSuggestions = false;}
  hasItemTemplate(){return this.taItemTpl !== undefined;}
  validateKeyCode(event: KeyboardEvent) {
    return event.keyCode !== Key.Tab
     && event.keyCode !== Key.Shift
     && event.keyCode !== Key.ArrowLeft
     && event.keyCode !== Key.ArrowUp
     && event.keyCode !== Key.ArrowRight
     && event.keyCode !== Key.ArrowDown;}
}