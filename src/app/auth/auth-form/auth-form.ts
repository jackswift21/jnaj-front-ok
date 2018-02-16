import {Component} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
declare const $:any;
declare const here:any;

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.html',
  styleUrls: ['./auth-form.css']
})

export class AuthForm {
  //@Input() authType:String = '';
  //@Input() authRole:String = '';
  authType = 'signin';
  authRole = 'user';
  errors:Errors = new Errors();
  isSubmitting = false;
  authForm:FormGroup;
  pinCtrl:FormControl;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    //private state:AppState,
    //private user:UserService,
    //private auth:AuthService,
    private fb:FormBuilder){
    this.authForm = this.fb.group({
      'handle':['',Validators.required],
      'password':['',Validators.required]});}
    //'pin':['9999',[Validators.required,Validators.minLength(4)]]
    //this.pinCtrl = new FormControl(9999);
  ngOnInit(){
    here('okkk');
    this.authType === 'signup'?(() => {
      this.authForm.addControl('name',this.fb.group({
        'first':['',[Validators.required]],
        'last':['',[Validators.required]]}));
      this.authForm.addControl('email',new FormControl(['', [Validators.required]]));})():null;
    this.authRole === 'admin'&&this.authType === 'signup'?this.authForm.addControl('adminCode',new FormControl()):null;
    $("#pinCtrl").bind("cut copy paste",e => e.preventDefault());
    $("#pinCtrl").bind("input",e => this.onPinInput(e.originalEvent.data));}
  onPinInput(k?:string){
    let p = this.authForm.controls.pin,c = $("#pinCtrl");
    k==null?p.setValue(c.val().toString()):
    !(/[0-9]/).test(k)?c.val(p.value):
    c.val().toString().length>4?c.val(c.val().toString().slice(0,-1)):
    p.setValue(c.val().toString());}
	toggleAuthType(){this.authType = this.authType =='signin'?'signup':'signin'}
  doAuth(){
    this.errors = new Errors();
    this.isSubmitting = true; 
    const creds = Object.assign({},this.authForm.value,{role:this.authRole.toUpperCase()});
    here(creds);
    /*this.auth.attempt(creds,this.authType==='signin'?'/login':'').subscribe(
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
}