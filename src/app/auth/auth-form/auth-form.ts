import { Component } from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.html',
  styleUrls: ['./auth-form.css']
})

export class AuthForm {
  authType = 'signin';
  authRole = 'user';
	doAuth(){
    let data = {};
    $("#auth").serializeArray().forEach(a => data[a.name] = a.value);
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
