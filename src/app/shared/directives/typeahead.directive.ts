import {Directive,Input,Output,EventEmitter,TemplateRef,ViewContainerRef,HostListener,ElementRef,ViewChild,} from '@angular/core';
import {Jsonp,URLSearchParams,RequestOptionsArgs} from '@angular/http';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
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

@Directive({selector:'[typeahead]'})

export class TypeAhead {
  @Output() taSelected = new EventEmitter<string>();
  @Output() taResults = new EventEmitter<string[]>();
  private subscriptions:Subscription[];
  @HostListener('keydown',['$event'])
  handleEsc(event:KeyboardEvent){if(event.keyCode === Key.Escape){event.preventDefault();}}//this.hideSuggestions();
  constructor(private element:ElementRef,private jsonp:Jsonp){}//private viewContainer:ViewContainerRef
  ngOnInit(){
    const onkeyDown$ = this.onElementKeyDown();
    this.subscriptions = [this.filterEnterEvent(onkeyDown$),this.listenAndSuggest()]}
  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.subscriptions.length = 0;}
  onElementKeyDown(){return Observable.fromEvent(this.element.nativeElement,'keydown').share();}
  filterEnterEvent(elementObs:Observable<{}>){//this.handleSelectSuggestion(this.activeResult);});}
    return elementObs
      .filter((e:KeyboardEvent) => e.keyCode === Key.Enter)
      .subscribe((event:Event) => {event.preventDefault();console.log('here');});}
  listenAndSuggest(){
    return Observable.fromEvent(this.element.nativeElement, 'keyup')
      .filter(this.validateKeyCode)
      .map((e: any) => e.target.value)
      .debounceTime(500)
      .concat()
      .distinctUntilChanged()
      //.filter((query: string) => query.length > 0)
      .switchMap((query:string) => query?this.suggest(query):new Promise(done => done([])))
      .subscribe((results:string[]) => {this.taResults.emit(results)});}
  suggest(query:string){
    const url = 'http://suggestqueries.google.com/complete/search';
    const searchConfig: URLSearchParams = new URLSearchParams();
    const searchParams = {
      hl: 'en',
      ds: 'yt',//sets the specific subsite
      client: 'youtube',
      q: query,
      callback: 'JSONP_CALLBACK'};
    Object.keys(searchParams).forEach(param => searchConfig.set(param, searchParams[param]));
    const options:RequestOptionsArgs = {search:searchConfig};
    return this.jsonp.get(url, options)
      .map(response => response.json()[1])
      .map(results => results.map(result => result[0]));}
  handleSelectSuggestion(suggestion: string){this.taSelected.emit(suggestion);}
  validateKeyCode(event:KeyboardEvent){return [Key.Tab,Key.Shift,Key.ArrowLeft,Key.ArrowUp,Key.ArrowRight,Key.ArrowDown].indexOf(event.keyCode)<0;}
}
