import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors,PasswordValidator} from '../../shared';
import {AuthService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'auth',
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})

export class Auth {
  authType;
  authRole = 'user';
  isSubmitting = false;
  errors:Errors = new Errors();
  authForm:FormGroup;
  pinCtrl:FormControl;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder,
    private auth:AuthService){}
  ngOnInit(){
    this.authForm = this.fb.group({'handle':['Jack1',Validators.required]});
    //'pin':['9999',[Validators.required,Validators.minLength(4)]]
    //this.pinCtrl = new FormControl(9999);
    this.authType = this.route.snapshot.url[0].path;
    this.toggleAuthControls();
    $("#pinCtrl").bind("cut copy paste",e => e.preventDefault());
    $("#pinCtrl").bind("input",e => this.onPinInput(e.originalEvent.data));}
  toggleAuthControls(){
    if(this.authType == 'signup'){
      this.authForm.addControl('name',this.fb.group({
        'first':['Jack',[Validators.required]],
        'last':['Swift',[Validators.required]]}));
      this.authForm.addControl('email',new FormControl('jack1.fu.dz@gmail.com',Validators.required));
      this.authForm.removeControl('pswd');
      this.authForm.addControl('pswds',this.fb.group({
        'pswd':['password',[Validators.required]],
        'c_pswd':['password',[Validators.required]]},
        {validator:PasswordValidator.matchPassword}));
      this.authRole === 'admin'?this.authForm.addControl('adminCode',new FormControl()):null;}
    else{
      let ctrls = ['name','email','adminCode','pswds'];
      ctrls.forEach(f => this.authForm.controls[f]?this.authForm.removeControl(f):null);
      this.authForm.addControl('pswd',new FormControl('password',Validators.required));}}
  onPinInput(k?:string){
    let p = this.authForm.controls.pin,c = $("#pinCtrl");
    k==null?p.setValue(c.val().toString()):
    !(/[0-9]/).test(k)?c.val(p.value):
    c.val().toString().length>4?c.val(c.val().toString().slice(0,-1)):
    p.setValue(c.val().toString());}
  doAuth(){
    this.errors = new Errors();
    this.isSubmitting = true;
    const creds = Object.assign({},this.authForm.value,{
      role:this.authRole.toUpperCase(),
      device:localStorage['jnajDevice']});
    if(creds.pswds){creds.pswd = creds.pswds.pswd;delete creds.pswds;}
    here(creds);
    this.auth.attempt(creds,this.authType==='signin'?'/login':'').subscribe(
      data => {
        here(data);
        this.isSubmitting = false;},
        //data.role === 'USER'?this.router.navigateByUrl('/'):
        //data.role === 'VENDOR'?this.router.navigateByUrl('/vendorDash'):
        //data.role === 'ADMIN'?this.router.navigateByUrl('/adminDash'):
        //this.router.navigateByUrl('/'),
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}
}