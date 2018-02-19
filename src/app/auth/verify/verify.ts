import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
import {AuthService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'verify',
  templateUrl: './verify.html',
  styleUrls: ['./verify.css']
})

export class VerifyAcct {
  resendCode(){here('code resent');location.reload();}
  email = 'jack1.fu.dz@gmail.com';
  errors:Errors = new Errors();
  isSubmitting = false;
  vCodeInput:FormControl = new FormControl('',Validators.required);
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    //private auth:AuthService,
    ){}
  ngOnInit(){}
  verifyJack(){
    this.errors = new Errors();
    this.isSubmitting = true; 
    const code = this.vCodeInput.value;
    here(code);}
    /*this.auth.verify(code).subscribe(
      data =>
        data.role === 'USER'?this.router.navigateByUrl('/'):
        //data.role === 'VENDOR'?this.router.navigateByUrl('/vendorDash'):
        //data.role === 'ADMIN'?this.router.navigateByUrl('/adminDash'):
        this.router.navigateByUrl('/'),
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
}