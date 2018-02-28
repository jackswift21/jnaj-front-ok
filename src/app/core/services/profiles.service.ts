import {Injectable} from '@angular/core';
import {Observable,BehaviorSubject,Subscription} from 'rxjs/Rx';
import {ApiService} from './api.service';
//import {Profile} from '../models';
declare const Here:any;
const here = new Here().log;

@Injectable()
export class ProfilesService {
  /*public edit = new BehaviorSubject<string>('');
  constructor(private api:ApiService){}
  get(handle:string):Observable<Profile>{return this.api.get('/profiles/'+handle).map(data => data.profile);}
  	//data => this.getImg(data.profile.handle,data.profile.image));}//.map(
  		//imageData => new Profile(Object.assign({},data.profile,{image:imageData}))));}
  getImg(handle:string,img:string):Observable<string|Blob>{
  	return img?
  	this.api.fetch('/profiles/'+handle+'/uploads/'+img).map(imageData => new Blob([imageData]),err => here(err)):
  	Observable.of('');}
  post(handle:string,profile:Profile):Observable<Profile>{return this.api.put('/profiles/'+handle,{profile:profile}).map((data:{profile:Profile}) => data.profile);}
  put(handle:string,profile:Profile):Observable<Profile>{return this.api.put('/profiles/'+handle,{profile:profile}).map((data:{profile:Profile}) => data.profile);}
  delete(handle:string):Observable<Profile>{return this.api.put('/profiles/'+handle).map((data:{profile:Profile}) => data.profile);}
  link(handle:string):Observable<Profile>{return this.api.post('/profiles/'+handle+'/link');}
  unlink(handle:string):Observable<Profile>{return this.api.delete('/profiles/'+handle+'/link');}*/
}

/*postImg(handle:string,img:any):Observable<void>{
  return img?
  this.api.send('/profiles/'+handle+'/uploads',img).map(imageData => here('ok'),err => here(err)):
  Observable.of(here('nope'));}*/