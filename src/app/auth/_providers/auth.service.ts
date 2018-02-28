import {Injectable} from '@angular/core';
import {Observable,BehaviorSubject,ReplaySubject} from 'rxjs/Rx';
//import {AppState,AppWindowService,ApiService} from '../../_providers';
//import {ProfilesService} from './profiles.service';
//import {User,Profile} from '../models';
declare const here:any;

@Injectable()
export class AuthService {
  /*private _isAuth = new ReplaySubject<boolean>(1);
  public isAuth = this._isAuth.asObservable();
  private _authUser = new BehaviorSubject<any>({});
  public authUser = this._authUser.asObservable();
  constructor(
    private state:AppState,
    private api:ApiService,
    private win:AppWindowService){}//private profiles:ProfilesService){}
  attempt(user,authRoute):Observable<any>{
    return this.api.post('/user'+authRoute,{user:user}).map(
      user => this.set(user),err => here(err));}
    //return Observable.of(this.stamp(user)).then()
  logout():Observable<any>{return Observable.of('logged out');}
    //return this.api.delete('/user/login').map(
      //loggedOut => this.purge(loggedOut));}
	set(user){//:User):User{
    console.log(user);
    this.win.token = user.token;
    this._authUser.next(user);//new User(user));
    this._isAuth.next(true);
    return user;}
}

  //getUsers():Observable<any>{return this.api.get('/users').map(data => data);}
  //deleteUsers():Observable<any>{return this.api.delete('/users').map(data => data);}
  //move(m){return this.api.post('/moves',{move:m}).map(data => data.move);}
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