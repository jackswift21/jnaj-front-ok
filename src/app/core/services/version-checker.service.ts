import {Injectable,NgZone} from '@angular/core';
import {Http} from '@angular/http';
import {Observable,Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../store';
import {AppVersion} from '../store/layout/layout.model';
import * as layout from '../store/layout/layout.actions';
import {AppWindowService} from './window.service';
declare const here:any;

@Injectable()
export class VersionCheckerService {
  private interval = 1000 * 60 * 60;
  private protocol = 'https';
  private prefix = 'raw.githubusercontent.com';
  private repo = 'jackswift21/jnaj-front-ok';//orizens/echoes-player';
  private repoBranch = 'gh-pages';
  private pathToFile = 'assets/package.json';
  public url = `${this.protocol}:${this.prefix}/${this.repo}/${this.repoBranch}/${this.pathToFile}`;
  constructor(
    private http:Http,
    private zone:NgZone,
    private store:Store<JNAJAppState>,
    private win:AppWindowService){}
  start(){
    let checkTimer:Subscription;
    this.zone.runOutsideAngular(() => {
      checkTimer = Observable.timer(0,this.interval)
        .switchMap(() => this.http.get(this.url))
        .catch(err => {here(err);return Observable.of(err);})
        .retry()
        .filter(res => res && res.status === 200)
        .subscribe(res => this.store.dispatch(new layout.getVersion(res.json())));});
    return checkTimer;}
  checkForVersion(){
    return this.http.get(this.url)
      .retry()
      .filter(res => res && res.status === 200)
      .take(1)
      .subscribe(this.notifyNewVersion.bind(this));}
      //.catch(err => {here(err);return Observable.of(err);});}
  notifyNewVersion(res){this.store.dispatch(new layout.getVersion(res.json()));} 
  getVersion(current:AppVersion,packageJson:any){
    const currentVersion = current.semver;
    const remoteVersion = packageJson.version;
    const version:AppVersion = {
      semver:'',
      isNewAvailable:current.isNewAvailable,
      checkingForVersion:false};
    const isCurrentVersionEmpty = '' === currentVersion;
    const isCurrentDifferentFromRemote = !isCurrentVersionEmpty && currentVersion !== remoteVersion;
    if(isCurrentVersionEmpty){version.semver = remoteVersion;}
    if(isCurrentDifferentFromRemote && !version.isNewAvailable){
      version.semver = currentVersion;
      version.isNewAvailable = true;}
    else{
      version.semver = remoteVersion;
      version.isNewAvailable = false;}
    this.store.dispatch(new layout.receivedVersion(version));}
  updateVersion(){this.win.refresh(true);}
}