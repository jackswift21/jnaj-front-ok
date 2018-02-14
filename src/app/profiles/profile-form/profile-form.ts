import { Component } from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.html',
  styleUrls: ['./profile-form.css']
})

export class ProfileForm {
	isNew = true;
}
