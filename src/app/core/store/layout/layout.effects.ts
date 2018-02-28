import {Injectable} from '@angular/core';
import {Effect,Actions,ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../';
import * as LayoutActions from './layout.actions';
import {AppNavigationService} from '../../services/navigation.service';
import {VersionCheckerService} from '../../services/version-checker.service';
declare const here:any;

@Injectable()
export class LayoutEffects {
  constructor(
    public actions$:Actions,
    public store:Store<JNAJAppState>,
    public versionChecker:VersionCheckerService,
    public navigation:AppNavigationService){}
  @Effect({dispatch:false}) appInit$ = this.actions$
    .ofType(ROOT_EFFECTS_INIT)
    .do(() => here('layout effects initialized'));
  @Effect({dispatch:false}) checkForNewAppVersion$ = this.actions$
    .ofType(LayoutActions.APP_CHECK_VERSION)
    .map(() => this.versionChecker.checkForVersion());
  @Effect({dispatch:false}) getAppVersion$ = this.actions$
    .ofType(LayoutActions.APP_GET_VERSION)
    .map((action:LayoutActions.getVersion) => action.payload)
    .withLatestFrom(this.store)
    .map(([packageJson,store]) => this.versionChecker.getVersion(store.layout.version,packageJson));
  @Effect({dispatch:false}) updateAppVersion$ = this.actions$
    .ofType(LayoutActions.APP_UPDATE_VERSION)
    .map(() => this.versionChecker.updateVersion());
}