import {Injectable} from '@angular/core';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
import {ApiService} from '../../shared';
import {AppState} from '../../'
//import {AppWindowService} from './window.service';
//import {ProfilesService} from './profiles.service';
//import {User,Profile} from '../models';
declare const here:any;

@Injectable()
export class AuthService {
  private authSubject = new ReplaySubject<boolean>(1);
  public auth = this.authSubject.asObservable();
  constructor(private api:ApiService,private state:AppState){}
  //private _window:AppWindowService,
  //private profiles:ProfilesService){}
  attempt(user,authRoute):Observable<any>{
    return Observable.of(this.set(user));}
    	//this.stamp(user).then(
      //user => this.api.post('/user'+authRoute,{user:user}).subscribe(
        //user => this.set(user),err => error(err))));}
  logout():Observable<any>{return Observable.of('logged out');}
    //return this.api.delete('/user/login').map(
      //loggedOut => this.purge(loggedOut));}
	set(user){//:User):User{
    console.log(user);
    //this._window.token = user.token;
    //this.userSubject.next(new User(user));
    this.authSubject.next(true);

    return user;}
  /*private userSubject = new BehaviorSubject<User>(new User());
  public user = this.userSubject.asObservable().distinctUntilChanged();
  get me():User{return this.userSubject.getValue();}
  populate(){
    console.log(this._window.platform);
    this._window.token?
      this.api.get('/user').subscribe(
        user => this.set(user),err => this.purge()):this.purge();}
  update(user:User):Observable<User>{
    return this.api.put('/user',{user:user}).map(
      user => this.set(user));}
  updatePin(creds:Object):Observable<User>{
    return this.api.put('/user/login',{user:{pin:creds}}).map(
      user => this.set(user));}
  updateSettings(settings:Object):Observable<User>{
    return this.api.put('/user',{user:{settings:settings}}).map(
      user => this.set(user));}
  delete():Observable<User>{
    return this.api.delete('/user').map(
      deleted => this.purge(deleted));}
  purge(user:User = new User()){
    this._window.token = '';
    this.userSubject.next(user);
    this.authSubject.next(false);
    return user;}
  stamp(user:User):Promise<User>{
    return this.locate().then(
      loc => new User(Object.assign({},user,{
        loc:loc,device:this._window.platform})));}
  locate():Promise<{}>{return this._window.geolocation.then(loc => loc);}
  //.switchMap(loc => this.api.put('/user',{user:Object.assign({},this.me,{loc:loc})})
  save(item){this._window.save(item);}*/
}

  //getUsers():Observable<any>{return this.api.get('/users').map(data => data);}
  //deleteUsers():Observable<any>{return this.api.delete('/users').map(data => data);}
  //move(m){return this.api.post('/moves',{move:m}).map(data => data.move);}
