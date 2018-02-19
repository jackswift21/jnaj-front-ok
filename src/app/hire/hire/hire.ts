import {Component} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
//import {SearchService} from '../providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'hire-me',
  templateUrl: './hire.html',
  styleUrls: ['./hire.css']
})

export class HireMe {
	errors:Errors = new Errors();
  isSubmitting = false;
  pLengths = [
    {val:"",label:"Choose length of project"},
    {val:"short",label:"0 - 3 mos"},
    {val:"medium",label:"3 - 6 mos"},
    {val:"fullyear",label:"6 - 12 mos"},
    {val:"longterm",label:"12+ mos"}];
  hireForm:FormGroup;
  constructor(private fb:FormBuilder,
    //private search:SearchService
    ){}
  ngOnInit(){
    this.hireForm = this.fb.group({
      'name':['',Validators.required],
      'email':['',Validators.required],
      'company':['',Validators.required],
      'cpDesc':[''],
      'pDesc':['',Validators.required],
      'pUrl':[''],
      'pLoc':[''],
      'pLength':[''],
      'pUrgency':['immediate',Validators.required],
      'frameworks':[''],
      'emailMeBack':[true],
      'msg':['']});}
  hireJack(){
    this.errors = new Errors();
    this.isSubmitting = true;
    const hireMsg = this.hireForm.value;
    here(hireMsg);}
    /*this.hire.go(hireMsg).subscribe(
      data => {
        this.hireForm.reset();
        this.isSubmitting = false;
        here(data.results)},
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
  openMap(){}
  openPhn(){}
  openEmail(){}
}
