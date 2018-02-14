import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppState} from '../../';
declare const $:any;
declare const here:any;

@Component({
  selector: 'profiles',
  templateUrl: './profiles.html',
  styleUrls: ['./profiles.css']
})

export class Profiles {
	query;
	profiles;
	constructor(private route:ActivatedRoute,private state:AppState){}
	ngOnInit(){
		this.route.queryParamMap.subscribe(params => {
			this.query = {...params.keys, ...params};
			here(this.query);});
		this.state.results.profiles.subscribe(profiles => {
			this.profiles = profiles;
			here(this.profiles);});}
}
