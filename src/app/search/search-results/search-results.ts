import {Component,Input} from '@angular/core';
import {SearchService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.css']
})

export class SearchResults {
	newSearch;
	constructor(private search:SearchService){}
	ngOnInit(){this.search.newSearch.subscribe(s => {this.newSearch = s;here(this.newSearch);});}
}