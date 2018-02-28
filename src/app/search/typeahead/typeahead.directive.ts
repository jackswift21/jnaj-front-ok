import {Jsonp,URLSearchParams,RequestOptionsArgs} from '@angular/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Observable,BehaviorSubject,Subscription} from 'rxjs/Rx';
declare const here:any;
declare const $:any;

enum Key {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Escape = 27,
  ArrowLeft = 37,
  ArrowRight = 39,
  ArrowUp = 38,
  ArrowDown = 40
}
/*
 using an external template:
 <input [typeaheadTpl]="itemTpl" >
  <ng-template #itemTpl let-result>
    <strong>MY {{ result.result }}</strong>
  </ng-template>
*/

@Component({
  selector: '[typeahead]',
  templateUrl: './typeahead.directive.html',
  styleUrls: ['./typeahead.directive.css'],
})

export class TypeAhead {
  @Input() taSuggestions:Observable<string[]>;
  @Input() taShowSuggestionsOnFocus = new BehaviorSubject<boolean>(false);
  @Input() taItemTemplate: TemplateRef<any>;
  @Output() taGetSuggestions = new EventEmitter<string>();
  @Output() taClearSuggestions = new EventEmitter<string[]>();
  @Output() taSelected = new EventEmitter<string>();
  @Output() taAddSuggestion = new EventEmitter<string>();
  showSuggestions = false;
  results:string[] = [];
  private suggestionIndex = 0;
  private prevIndexBeforeHover = 0;
  private subscriptions: Subscription[];
  private activeResult: string;
  @ViewChild('suggestionsTplRef') suggestionsTplRef;
  @HostListener('keydown',['$event']) handleEsc(event:KeyboardEvent){
    if(event.keyCode === Key.Escape){
      this.toggleSuggestions(false);
      event.preventDefault();}}
  constructor(
    private element:ElementRef,
    private viewContainer:ViewContainerRef,
    private jsonp:Jsonp,
    private cdr:ChangeDetectorRef){}
  ngOnInit(){
    const onkeyDown$ = this.onElementKeyDown();
    this.subscriptions = [
      this.filterEnterEvent(onkeyDown$),
      this.hideOnEmptyQuery(),
      this.listenAndSuggest(),
      this.navigateWithArrows(onkeyDown$)];
    this.taSuggestions.subscribe(s => this.setSuggestions(s));
    this.taShowSuggestionsOnFocus.subscribe(b => this.toggleSuggestions(b));
    this.renderTemplate();}
  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions.length = 0;}
  renderTemplate(){
    this.viewContainer.createEmbeddedView(this.suggestionsTplRef);
    this.cdr.markForCheck();}
  onElementKeyDown(){return Observable.fromEvent(this.element.nativeElement,'keydown').share();}
  filterEnterEvent(elementObs:Observable<{}>){
    return elementObs
      .filter((e:KeyboardEvent) => e.keyCode === Key.Enter)
      .subscribe((event:Event) => {
        event.preventDefault();
        let q = this.element.nativeElement.value;
        q?this.handleSelectSuggestion(this.activeResult||q):null;});}
  listenAndSuggest(){
    return Observable.fromEvent(this.element.nativeElement,'keyup')
      .filter(this.validateKeyCode)
      .map((e: any) => e.target.value)
      .debounceTime(300)
      .concat()
      //.distinctUntilChanged()
      .filter((query:string) => query.length > 0)
      .subscribe((query:string) => this.taGetSuggestions.emit(query));}
  hideOnEmptyQuery(){
    return Observable.fromEvent(this.element.nativeElement,'keyup')
      .filter(this.validateKeyCode)
      .map((e:any) => e.target.value)
      .concat()
      //.distinctUntilChanged()
      .filter((query:string) => query.length === 0)
      .subscribe(() => this.taClearSuggestions.emit());}
  navigateWithArrows(elementObs:Observable<{}>){
    return elementObs
      .filter((e:any) => e.keyCode === Key.ArrowDown || e.keyCode === Key.ArrowUp)
      .map((e:any) => e.keyCode)
      .subscribe((keyCode:number) => {
        const step = keyCode === Key.ArrowDown?1:-1;
        const topLimit = this.results.length-1;
        const bottomLimit = 0;
        this.suggestionIndex += step;
        if(this.suggestionIndex === topLimit + 1){this.suggestionIndex = bottomLimit;}
        if(this.suggestionIndex === bottomLimit - 1){this.suggestionIndex = topLimit;}
        this.toggleSuggestions(true);
        this.cdr.markForCheck();});}
  markIsActive(result:string,index:number){
    const isActive = index === this.suggestionIndex;
    if(isActive){this.activeResult = result;}
    return isActive;}
  toggleIsActiveOnHover(result:string,index:number,hover:boolean){
    hover?
    (() => {
      this.prevIndexBeforeHover = this.suggestionIndex;
      this.suggestionIndex = index;
      this.activeResult = result;})():
    (() => {
      this.suggestionIndex = this.prevIndexBeforeHover;
      this.activeResult = this.results[this.suggestionIndex];})();}
  handleSelectSuggestion(suggestion:string){
    !this.results.includes(suggestion)?this.taAddSuggestion.emit(suggestion):null;
    this.taSelected.emit(suggestion);
    this.taClearSuggestions.emit();}
  toggleSuggestions(show){this.showSuggestions = this.results.length?show:false;}
  setSuggestions(results){
    this.results = results;
    results.length?
      (() => {
        this.toggleSuggestions(true);
        this.suggestionIndex = 0;
        this.prevIndexBeforeHover = 0;})():
      (() => {
        this.toggleSuggestions(false);
        this.activeResult = '';
        this.suggestionIndex = 0;
        this.prevIndexBeforeHover = 0;})();
    this.cdr.markForCheck();}
  hasItemTemplate(){return this.taItemTemplate !== undefined;}
  validateKeyCode(event:KeyboardEvent){
    return event.keyCode !== Key.Tab
     && event.keyCode !== Key.Shift
     && event.keyCode !== Key.ArrowLeft
     && event.keyCode !== Key.ArrowUp
     && event.keyCode !== Key.ArrowRight
     && event.keyCode !== Key.ArrowDown;}
}
