import { Component } from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})

export class Search {
	exp;
	expSlider;
  ngAfterViewInit(){
  	this.expSlider = $("#myRange"),this.exp = $("#experience");
  	this.exp.val(this.numOfYrs(this.expSlider.val()));}
  setExperience(event){this.exp.val(this.numOfYrs(event.target.value));}
  numOfYrs(n){return n==0?'None':n==1?('1 Year'):n<11?(n+ ' Years'):'10+ Years';}
  searchJack(){
    let data = {};
    $("#search").serializeArray().forEach(a => data[a.name] = a.value);
    data['experience'] = this.exp.val();
    here(data);}
    //send(data);}
  send(data){
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
      if(this.readyState == 4&&this.status == 200){
        here(JSON.parse(this.responseText));}};
    xhr.open("POST","http://localhost:3000/search",true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify(data));}
}
