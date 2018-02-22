import {Injectable,NgZone} from '@angular/core';
import {Http} from '@angular/http';
import {Observable,Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../../app.store';
import {LayoutActions} from '../actions/layout.actions';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';

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
    private layoutActions:LayoutActions){}
  check(){return this.http.get(this.url);}
  start(){
    let checkTimer: Subscription;
    this.zone.runOutsideAngular(() => {
      checkTimer = Observable.timer(0,this.interval)
        .switchMap(() => this.check())
        .catch(err => {here(err);return Observable.of(err);})
        .retry()
        .filter(res => res && res.status === 200)
        .subscribe(res => this.store.dispatch(this.layoutActions.recievedAppVersion(res.json())));});
    return checkTimer;}
  updateVersion(){if(window){window.location.reload(true);}}
  checkForVersion(){
    return this.check()
      .retry()
      .filter(res => res && res.status === 200)
      .take(1)
      .subscribe(this.notifyNewVersion.bind(this));}
  notifyNewVersion(res){this.store.dispatch(this.layoutActions.recievedAppVersion(res.json()));}
}
