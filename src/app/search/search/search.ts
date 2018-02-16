import {Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
import {SearchService} from '../providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})

export class Search {
  searchAdv = false;
  results = {profiles:0,samples:0,articles:0};
  errors:Errors = new Errors();
  isSubmitting = false;
  searchInput:FormControl = new FormControl('',Validators.required);
  constructor(private fb:FormBuilder,private search:SearchService){}
  ngAfterViewInit(){$("#searchInput").focus()}
  searchJack(){
  	this.errors = new Errors();
    this.isSubmitting = true;
    const query = this.searchInput.value;
    here(query);
    this.searchInput.reset();
  	/*this.search.go(query,'/search').subscribe(
      data => this.results = data.results,
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
	}
}
