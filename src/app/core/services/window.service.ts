import {Injectable} from '@angular/core';

@Injectable()
export class WindowRef {
geolocate(){return new Promise<{}>(done => done({lat:29.8716473,lng:-95.2931506,ts:Date.now()}));}
  	//window.navigator.geolocation.getCurrentPosition(done))
   // .catch(err => this.geoLocationFailed(err))
	//.then(data => this.geoLocationSuccess(data));}
geoLocationSuccess(loc){
	let c ={lat:loc.coords.latitude,lng:loc.coords.longitude,ts:Date.now()};
	console.log(c);
	return c}
geoLocationFailed(err){
	console.log("Geolocation is not supported by this browser.");
	return{lat:null,lng:null,ts:Date.now()};}
}