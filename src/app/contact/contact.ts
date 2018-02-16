import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../shared';
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
  selectedSubject = "";
  constructor(private route:ActivatedRoute,private api:ApiService){}
  ngOnInit(){
    this.route.queryParams.subscribe(p => 
    'subject' in p?(this.selectedSubject = p.subject):null);}
  ngAfterViewInit(){$("#name").focus()}
	contactJack(){
    let data = {};
    $("#contactForm").serializeArray().forEach(a => data[a.name] = a.value);
    here(data);
    data['subject'] = this.subjects.filter(s => s.val = data['subject'])[0].label;
    this.api.post("/contact",data).subscribe(msg => here(msg));}

  /*@Input() authType:String = '';
  @Input() authRole:String = '';
  errors:Errors = new Errors();
  isSubmitting = false;
  authForm:FormGroup;
  pinCtrl:FormControl;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService,
    private fb: FormBuilder){
    this.authForm = this.fb.group({
      'handle': ['Johnny46', Validators.required],
      'pin': ['9999', [Validators.required,Validators.minLength(4)]]});
    this.pinCtrl = new FormControl(9999);}
  onPinInput(k?:string){
    let p = this.authForm.controls.pin,c = $("#pinCtrl");
    k==null?p.setValue(c.val().toString()):
    !(/[0-9]/).test(k)?c.val(p.value):
    c.val().toString().length>4?c.val(c.val().toString().slice(0,-1)):
    p.setValue(c.val().toString());}
  ngOnInit(){
    this.authType === 'signup'?this.authForm.addControl('email',new FormControl()):null;
    this.authRole === 'admin'&&this.authType === 'signup'?this.authForm.addControl('adminCode',new FormControl()):null;
    $("#pinCtrl").bind("cut copy paste",e => e.preventDefault());
    $("#pinCtrl").bind("input",e => this.onPinInput(e.originalEvent.data));};
  submitAuth(){
    this.errors = new Errors();
    this.isSubmitting = true; 
    const creds = Object.assign({},this.authForm.value,{role:this.authRole.toUpperCase()});
    this.user.attempt(creds,this.authType==='signin'?'/login':'').subscribe(
      data =>
        data.role === 'USER'?this.router.navigateByUrl('/'):
        data.role === 'VENDOR'?this.router.navigateByUrl('/vendorDash'):
        data.role === 'ADMIN'?this.router.navigateByUrl('/adminDash'):
        this.router.navigateByUrl('/'),
      err => {
        console.log(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
}
