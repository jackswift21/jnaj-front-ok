import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
//import {UserService} from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}//,private user:UserService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
  	return Observable.of(true);}
  	//return this.user.auth.take(1)}*/
}
