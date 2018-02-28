import {Component,Output,EventEmitter} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppEvents} from '../../core';
import {Search,getQuery$,getResults$,getErrorInSearch$} from '../../core/store/search';
import {Errors} from '../../shared';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-adv',
  templateUrl: './search-adv.html',
  styleUrls: ['./search-adv.css']
})

export class AdvancedSearch {
  @Output() query = new EventEmitter<string>();
  @Output() results = new EventEmitter<any[]>();
	pLengths = [
    {val:"",label:"Choose length of project"},
    {val:"short",label:"0 - 3 mos"},
    {val:"medium",label:"3 - 6 mos"},
    {val:"fullyear",label:"6 - 12 mos"},
    {val:"longterm",label:"12+ mos"}];
  isSubmitting = false;
  errors:Errors = new Errors();
  searchForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private store:Store<Search>,
    private app:AppEvents){
    store.select(getQuery$).subscribe(q => this.query.emit(q));
    store.select(getResults$).subscribe(results => {
      //this.searchInput.reset();
      this.results.emit(results);
      this.isSubmitting = false;});
    store.select(getErrorInSearch$).subscribe(err => {
      here(err,this.errors.errors);
      this.errors = {errors:Object.assign({},this.errors.errors,err)};
      this.isSubmitting = false;});}
  ngOnInit(){
    this.searchForm = this.fb.group({
      'frameworks':['',Validators.required],
      'focus':[''],
      'skills':[''],
      'education':['N'],
      'experience':['1 Year'],
      'location':[''],
      'excludeOOC':[false],
      'pLength':[''],
      'pUrgency':['immediate']});
    this.searchForm.get('experience').disable();}
  ngAfterViewInit(){$('#frameworks').focus();}
  setExperience(n){this.searchForm.controls.experience.setValue(this.numOfYrs(n));}
  numOfYrs(n){return n==0?'None':n==1?('1 Year'):n<11?(n+ ' Years'):'10+ Years';}
  searchJack(){
    this.errors = new Errors();
    this.isSubmitting = true;
    const q = Object.assign({},this.searchForm.value,{experience:this.searchForm.controls.experience.value});
    this.app.do('searchQuery',q);}
}