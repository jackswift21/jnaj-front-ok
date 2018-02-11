import { Component } from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})

export class Contact {
	contactJack(){
    let data = {};
    $("#contact").serializeArray().forEach(a => data[a.name] = a.value);
    //data['experience'] = this.exp.val();
    here(data);}
    //send(data);}
  send(data){
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function(){
      if(this.readyState == 4&&this.status == 200){
        here(JSON.parse(this.responseText));}};
    xhr.open("POST","http://localhost:3000/contact",true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify(data));}
}