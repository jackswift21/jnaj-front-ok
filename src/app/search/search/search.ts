import {Component} from '@angular/core';
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
  constructor(private search:SearchService){}
  searchJack(){
  	let q = $('#simpleSearch').val();
  	q?this.search.go({q:q}):null}
}
