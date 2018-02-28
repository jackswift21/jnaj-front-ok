import {Component,Input} from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.css']
})

export class SearchResults {
	@Input() query:string = '';
	@Input() results:any[] = [];
}