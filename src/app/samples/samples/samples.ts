import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SamplesService} from '../_providers';
declare const $:any;
declare const here:any;

@Component({
  selector: 'samples',
  templateUrl: './samples.html',
  styleUrls: ['./samples.css']
})

export class Samples {
	/*query;
	samples;
	constructor(
		private route:ActivatedRoute,
		private _samples:SamplesService){}
	ngOnInit(){
		this.route.queryParamMap.subscribe(params => this.query = {...params});//here(this.query);});
		this._samples.current.subscribe(samples => this.samples = samples);
		here(this.samples);}*/
}
