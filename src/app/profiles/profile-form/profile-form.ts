import {Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
import {ProfilesService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'profile-form',
  templateUrl: './profile-form.html',
  styleUrls: ['./profile-form.css']
})

export class ProfileForm {
	isNew = true;
	pLengths = [
    {val:"",label:"Choose Desired Project Length"},
    {val:"short",label:"0 - 3 mos"},
    {val:"medium",label:"3 - 6 mos"},
    {val:"fullyear",label:"6 - 12 mos"},
    {val:"longterm",label:"12+ mos"}];
	experienceSlider;
	errors:Errors = new Errors();
  isSubmitting = false;
  profileForm:FormGroup;
  constructor(private fb:FormBuilder,private profiles:ProfilesService){}
  ngOnInit(){
    this.profileForm = this.fb.group({
    	'profilePic':[''],
      'frameworks':['',Validators.required],
      'focus':['',Validators.required],
      'skills':['',Validators.required],
      'education':['N',Validators.required],
      'experience':['1 Year',Validators.required],
      'location':['',Validators.required],
      'pLength':['',Validators.required],
      'availability':['immediate',Validators.required]});
  	this.profileForm.get('experience').disable();}
  setExperience(n){this.profileForm.controls.experience.setValue(this.numOfYrs(n));}
  numOfYrs(n){return n==0?'None':n==1?('1 Year'):n<11?(n+ ' Years'):'10+ Years';}
  submitNewProfile(){
    this.errors = new Errors();
    this.isSubmitting = true;
    const profile = Object.assign({},this.profileForm.value,{
    	experience:this.profileForm.controls.experience.value});
    here(profile);}
    /*this.profiles.add(profile).subscribe(
      data => {
        this.profileForm.reset();
        this.isSubmitting = false;
        here(data.results)},
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
}
