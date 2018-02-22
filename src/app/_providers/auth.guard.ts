import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from './app.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private state:AppState){}
  canActivate(route:ActivatedRouteSnapshot):Observable<boolean>{
  	return this.state.current.take(1).map(s => s.isAuth);}
}
