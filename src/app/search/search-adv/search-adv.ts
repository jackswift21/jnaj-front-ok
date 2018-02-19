import {Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
import {SearchService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-adv',
  templateUrl: './search-adv.html',
  styleUrls: ['./search-adv.css']
})

export class AdvancedSearch {
	pLengths = [
    {val:"",label:"Choose length of project"},
    {val:"short",label:"0 - 3 mos"},
    {val:"medium",label:"3 - 6 mos"},
    {val:"fullyear",label:"6 - 12 mos"},
    {val:"longterm",label:"12+ mos"}];
  isSubmitting = false;
  errors:Errors = new Errors();
  searchForm:FormGroup;
  constructor(private fb:FormBuilder,private search:SearchService){}
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
  setExperience(n){this.searchForm.controls.experience.setValue(this.numOfYrs(n));}
  numOfYrs(n){return n==0?'None':n==1?('1 Year'):n<11?(n+ ' Years'):'10+ Years';}
  searchJack(){
    this.errors = new Errors();
    this.isSubmitting = true;
    const query = Object.assign({},this.searchForm.value,{
      experience:this.searchForm.controls.experience.value});
    here(query);}
    /*this.search.go(query).subscribe(
      data => {
        this.searchForm.reset();
        this.isSubmitting = false;
        here(data.results)},
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
}
