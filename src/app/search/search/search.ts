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
  errors:Errors = new Errors();
  isSubmitting = false;
  searchInput:FormControl = new FormControl('',Validators.required);
  constructor(private fb:FormBuilder,private search:SearchService){}
  ngAfterViewInit(){$("#searchInput").focus()}
  searchJack(){
  	this.errors = new Errors();
    this.isSubmitting = true;
    const query = this.searchInput.value;
  	this.search.go(query).subscribe(
      data => {
      	this.searchInput.reset();
      	this.isSubmitting = false;
      	here(data.results)},
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}
}
