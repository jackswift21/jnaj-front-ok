import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfilesService} from '../_providers';
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
	constructor(
		private route:ActivatedRoute,
		private _profiles:ProfilesService){}
	ngOnInit(){
		this.route.queryParamMap.subscribe(params => this.query = {...params});//here(this.query);});
		this._profiles.current.subscribe(profiles => this.profiles = profiles);
		here(this.profiles);}
}
