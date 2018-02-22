import {Component,ViewChild,ElementRef,ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {Errors} from '../../shared';
//import {SearchService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'sample-playground',
  templateUrl: './sample-playground.html',
  styleUrls: ['./sample-playground.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})

export class SamplePlayground {
	jsSample = `console.log('all good bro');`;
	htmlSample = `<p class="w3-large w3-text-green"><b>SAMPLE SANDBOX WORKS</b></p><p class="special">Really, really well</p>`;
	cssSample = `.special{color:red;}`;
	showSample = false;
	isSubmitting = false;
	errors:Errors = new Errors();
	sampleForm:FormGroup;
	constructor(private fb:FormBuilder,private ref:ChangeDetectorRef){}//,private search:SearchService
	ngOnInit(){
    this.sampleForm = this.fb.group({
      'js':[this.jsSample,Validators.required],
      'html':[this.htmlSample],
      'css':[this.cssSample],
      'tests':[''],
    	'title':['',Validators.required]});}
  ngOnDestroy(){
  	this.detachElement('sampleSandboxCss');
  	this.detachElement('sampleSandboxJs');}
  runSample(){
  	const sample = this.sampleForm.value;
    this.showSample = true;
    this.ref.detectChanges();
    this.loadSampleAPI(sample);}
  loadSampleAPI(sample:any):Promise<any>{
  	return new Promise(done => {
  		sample.css?(() => {this.loadCss(sample.css,false);this.ref.detectChanges()})():null;
  		sample.html?(() => {$('#sampleSandbox').html(sample.html);this.ref.detectChanges()})():null;
  		this.loadScript(sample.js,false);
  		window.scrollTo(0,0);
  		done(true);})
  	.catch(err => {
  		here(err);
  		$('#sampleSandbox').html(err);});}
  loadCss(src:string,isFile:boolean):HTMLStyleElement{
		this.detachElement('sampleSandboxCss');
    let head  = document.getElementsByTagName('head')[0],
    css  = document.createElement('style');
    css.id   = 'sampleSandboxCss';
    //css.rel  = 'stylesheet';
    css.type = 'text/css';
    css.innerHTML = src;//'http://website.com/css/stylesheet.css';
    css.media = 'all';
    head.appendChild(css);
  	return css;}
	loadScript(src:string,isFile:boolean):HTMLScriptElement{
    this.detachElement('sampleSandboxJs');
    const script = document.createElement('script');
    script.id = 'sampleSandboxJs';
    script.type = 'text/javascript';
    script.innerHTML = src;
    script.async = false;
    script.charset = 'utf-8';
    //this.sampleSandbox.nativeElement.appendChild(script);
    $('#sampleSandbox').append(script);
    return script;}
  backToPlayground(){this.showSample = false;this.isSubmitting = false;}
  detachElement(id){return document.getElementById(id)?document.getElementById(id).remove():null;}
  runTests(){}
  saveSample(){
  	this.errors = new Errors();
    this.isSubmitting = true;
    const sample = this.sampleForm.value;
    here(sample);}
  	/*this.samples.save(query).subscribe(
      data => {
        this.sampleForm.reset();
        this.isSubmitting = false;
        here(data.results)},
      err => {
        here(err,this.errors.errors);
        this.errors = {errors:Object.assign({},this.errors.errors,err)};
        this.isSubmitting = false;});}*/
}
