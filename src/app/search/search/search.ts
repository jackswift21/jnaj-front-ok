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
  searchJack(){this.search.go({q:$('#simpleSearch').val()})}
}
