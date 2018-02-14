import { Component } from '@angular/core';
import {SearchService} from '../providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search-adv',
  templateUrl: './search-adv.html',
  styleUrls: ['./search-adv.css']
})

export class AdvancedSearch {
	exp;
	expSlider;
  constructor(private search:SearchService){}
  ngAfterViewInit(){
  	this.expSlider = $("#myRange"),this.exp = $("#experience");
  	this.exp.val(this.numOfYrs(this.expSlider.val()));}
  setExperience(event){this.exp.val(this.numOfYrs(event.target.value));}
  numOfYrs(n){return n==0?'None':n==1?('1 Year'):n<11?(n+ ' Years'):'10+ Years';}
  searchJack(){
    let data = {};
    $("#searchAdv").serializeArray().forEach(a => data[a.name] = a.value);
    data['experience'] = this.exp.val();
    here(data);
    this.search.go({q:data})}
}
