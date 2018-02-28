import {Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Observable,BehaviorSubject} from 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {AppEvents} from '../../core';
import {
  Search,
  getQuery$,
  getResults$,
  getErrorInSearch$,
  getIsAdvSearch$,
  getSuggestions$} from '../../core/store/search';
import {Errors} from '../../shared';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})

export class SearchPage {
  query:string = '';
  queryTags:string[] = [];
  results:any[] = [];
  searchAdv = false;
  isSubmitting = false;
  errors:Errors = new Errors();
  searchInput:FormControl = new FormControl('',Validators.required);
  showSuggestionsOnFocus = new BehaviorSubject<boolean>(false);
  suggestions:Observable<string[]>;
  constructor(
    private fb:FormBuilder,
    private store:Store<Search>,
    private app:AppEvents){
    store.select(getQuery$).subscribe(q => this.query = q);
    store.select(getResults$).subscribe(results => {
      //this.searchInput.reset();
      this.results = results;
      this.isSubmitting = false;});
    store.select(getErrorInSearch$).subscribe(err => {
      here(err,this.errors.errors);
      this.errors = {errors:Object.assign({},this.errors.errors,err)};
      this.isSubmitting = false;});
    store.select(getIsAdvSearch$).subscribe(adv => {
      this.searchAdv = adv;
      !adv?setTimeout(() => $('#searchInput').focus(),100):null});
    this.suggestions = store.select(getSuggestions$);}
  ngOnInit(){
    this.searchInput.valueChanges
    .distinctUntilChanged()
    .debounceTime(300)
    .subscribe(q => this.app.do('updateQuery',q));}
  ngAfterViewInit(){$('#searchInput').bind('focus',() => this.showSuggestionsOnFocus.next(true));}
  searchJack(){
  	this.errors = new Errors();
    this.isSubmitting = true;
  	this.app.do('searchQuery',this.searchInput.value);}
  addQueryTag(suggestion:string){
    here(suggestion);
    !this.queryTags.includes(suggestion)?this.queryTags.push(suggestion):null;
    this.searchInput.reset();
    $('#searchInput').focus();}
  removeQueryTag(suggestion){
    this.queryTags = this.queryTags.filter(s => s !== suggestion);
    $('#searchInput').focus();}
  getSuggestions(query){this.app.do('getSuggestions',query);}
  clearSuggestions(){this.app.do('updateSuggestions',[]);}
  addSuggestion(suggestion){this.app.do('addSuggestion',suggestion);}
}
