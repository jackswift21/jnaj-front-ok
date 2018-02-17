import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../';
declare const $:any;
declare const here:any;

@Component({
  selector: 'samples',
  templateUrl: './samples.html',
  styleUrls: ['./samples.css']
})

export class Samples {
	query;
	samples;
	constructor(private route:ActivatedRoute,private state:AppState){}
	ngOnInit(){
		/*this.route.queryParamMap.subscribe(params => {
			this.query = {...params.keys, ...params};here(this.query);});
		this.state.current.searches.samples.subscribe(samples => {
			this.samples = samples;here(this.samples);});}*/}
}
