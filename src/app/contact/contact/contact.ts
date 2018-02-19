import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
import {ContactService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})

export class Contact {
  subjects = [
    {val:'',label:'Choose Subject'},
    {val:'general',label:'General Inquiry/Question'},
    {val:'suggestion',label:'Feedback/Suggestion'},
    {val:'advertise',label:'Advertise With Us'},
    {val:'invest',label:'Invest In Us'}];
  errors:Errors = new Errors();
  isSubmitting = false;
  contactForm:FormGroup;
  constructor(
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private contact:ContactService){}
  ngOnInit(){
    this.contactForm = this.fb.group({
      'name':['',Validators.required],
      'email':['',Validators.required],
      'subject':['',Validators.required],
      'message':['',Validators.required],});
    this.route.queryParams.subscribe(p => 'subject' in p?this.contactForm.controls.subject.setValue(p.subject):null);}
  ngAfterViewInit(){$("#name").focus()}
	contactJack(){
    this.errors = new Errors();
    this.isSubmitting = true;
    let subject = this.subjects.filter(s => s.val == this.contactForm.value.subject)[0].label;
    const contactMsg = Object.assign({},this.contactForm.value,{subject:subject});
    here(contactMsg);
    /*this.contact.send(contactMsg,'/contact').subscribe(
      data => this.router.navigateByUrl('/contact/success'),
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
    }
}