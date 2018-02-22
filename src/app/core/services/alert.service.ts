import {Http} from '@angular/http';
import {Injectable,NgZone,EventEmitter} from '@angular/core';
//import {ALERTS} from '../store/alert';

@Injectable()
export class AlertService {
	/*create(label){
		const index = ALERTS.map(alert=>alert['label']).indexOf(label);
		return Object.assign({},ALERTS[index],{
			ts:{created:Date.now()},
			id:this.generateId()});}
	confirm(alert){
		return Object.assign({},alert,{
			ts:{confirmed:Date.now()},
			confirmed:true});}
  autoclose(alert):Promise<boolean>{
	  return new Promise<boolean>(done => {
	    alert.comfirm?done():setTimeout(done,2000)})
	    .then(() => {return !alert.confirm});}
	private generateId(){
	  	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c => {
		    let r = Math.random() * 16 | 0, v = c == 'x' ? r :(r & 0x3 | 0x8);
		    return v.toString(16);}))}*/
}