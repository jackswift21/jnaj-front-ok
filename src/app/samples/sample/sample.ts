import {Component,ViewChild,ElementRef} from '@angular/core';
declare const $:any;
declare const here:any;

@Component({
  selector: 'sample',
  templateUrl: './sample.html',
  styleUrls: ['./sample.css']
})

export class Sample {
	@ViewChild('sampleSandbox') sampleSandbox:ElementRef;
	loadAPI: Promise<any>;
	str = `(function(sandbox){
		var newDiv = document.createElement('div');
		newDiv.innerHTML = '<p>SAMPLE SANDBOX WORKS</p>';
		sandbox.appendChild(newDiv);
		console.log("ok bro");
		})(document.getElementById('sampleSandbox'));`;
	constructor(){}
	ngAfterViewInit(){
		this.loadAPI = new Promise(done => {this.loadScript(this.str,false);done(true);})
    .catch(err => here(err));}
	loadScript(src:string,isFile:boolean):HTMLScriptElement{
    const script = document.createElement('script');
    script.type = 'text/javascript';
    isFile?(script.src = src):(script.innerHTML = src);
    script.async = false;
    script.charset = 'utf-8';
    //this.sampleSandbox.nativeElement.appendChild(script);
    $('#sampleSandbox').append(script);
    return script;}
}
