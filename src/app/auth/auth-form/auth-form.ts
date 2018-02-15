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
	toggleAuthType(){this.authType = this.authType =='signin'?'signup':'signin'}
  doAuth(){
    let data = {};
    $("#auth").serializeArray().forEach(a => data[a.name] = a.value);
    //data['experience'] = this.exp.val();
    here(data);}
  //auth.doAuth()
}
