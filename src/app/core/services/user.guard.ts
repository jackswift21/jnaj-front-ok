import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  CanActivateChild, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
//import { Authorization } from './authorization.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth:Authorization,private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    console.log('AuthGuard#canActivate called',{state});
    let url: string = state.url;
    return this.checkLogin(url);}
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){return this.canActivate(route,state);}
  checkLogin(url:string):boolean{
    /*if(this.auth.isSignedIn()){return true;}
    this.router.navigate(['/user']);
    return false;}*/}
}
