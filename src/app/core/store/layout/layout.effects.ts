import {Injectable} from '@angular/core';
import {Effect,Actions,toPayload} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {JNAJAppState} from '../store';
import {LayoutActions} from './layout.actions';
//import {NowPlaylistService} from '../../services';
import {VersionCheckerService} from '../../services';///version-checker.service';

@Injectable()
export class LayoutEffects {
  constructor(
    public actions$:Actions,
    public store:Store<JNAJAppState>,
    public layoutActions:LayoutActions,
    public versionCheckerService:VersionCheckerService
    ){}
  @Effect({dispatch:false})
  updateAppVersion$ = this.actions$
    .ofType(LayoutActions.APP_UPDATE_VERSION)
    .map(() => this.versionCheckerService.updateVersion());
  @Effect({dispatch:false})
  checkForNewAppVersion$ = this.actions$
    .ofType(LayoutActions.APP_CHECK_VERSION)
    .map(() => this.versionCheckerService.checkForVersion());
}
