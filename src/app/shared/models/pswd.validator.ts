import {AbstractControl} from '@angular/forms';
declare const here:any;

export class PasswordValidator {
  static matchPassword(AC: AbstractControl){
    let password = AC.get('pswd').value; // to get value in input tag
    let confirmPassword = AC.get('c_pswd').value; // to get value in input tag
      if(password != confirmPassword) {
        //here('pswds do no match');
        AC.get('c_pswd').setErrors({matchPassword:true})}
      else{
        //console.log('pswds r good');
        return null}}}