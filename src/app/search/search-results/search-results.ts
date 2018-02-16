import {Component,Input} from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.css']
})

export class SearchResults {
	@Input() results = {profiles:0,samples:0,articles:0};
}