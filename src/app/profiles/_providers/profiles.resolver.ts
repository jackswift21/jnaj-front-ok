import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot,Resolve,Router,RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {ProfilesService} from './profiles.service';
//import {Article,ArticlesService,UserService} from '../../shared';
declare const here:any;

@Injectable()
export class ProfilesResolver implements Resolve<any> {
  constructor(
    private profiles:ProfilesService,
    //private route:ActivatedRouteSnapshot,
    private router:Router){}
    //private user:UserService
  /*resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{
  	here(route);
    return this.profiles.fetchAll().catch(err => 
    	this.router.navigateByUrl('/home'));}*/
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any>{return Observable.of([]);}
    //return this.profiles.fetch(route.params['id']).catch(err => 
    	//this.router.navigateByUrl('/home'));}
}
