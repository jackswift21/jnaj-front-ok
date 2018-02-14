import {Component} from '@angular/core';
import {AppState} from '../../';
import {SearchService} from '../providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-results',
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.css']
})

export class SearchResults {
	query;
	results = {profiles:[],samples:[],articles:[]};
	constructor(private search:SearchService,private state:AppState){}
	ngOnInit(){
		this.search.query.subscribe(q => {this.query = q;here(this.query);});
		this.state.results.profiles.subscribe(p => this.results.profiles = p.length);
		this.state.results.samples.subscribe(s => this.results.samples = s.length);
		this.state.results.articles.subscribe(a => this.results.articles = a.length);}
}