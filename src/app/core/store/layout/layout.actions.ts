import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {ActionCreatorFactory} from 'ngrx-action-creator-factory';

@Injectable()
export class LayoutActions {
  static SIDEBAR_EXPAND = '[CORE LAYOUT] SIDEBAR_EXPAND';
  static SIDEBAR_COLLAPSE = '[CORE LAYOUT] SIDEBAR_COLLAPSE';
  static SIDEBAR_TOGGLE = '[CORE LAYOUT] SIDEBAR_TOGGLE';
  static APP_VERSION_RECIEVED = '[APP SETTINGS] APP_VERSION_RECIEVED';
  static APP_UPDATE_VERSION = '[APP SETTINGS] APP_UPDATE_VERSION';
  static APP_CHECK_VERSION = '[APP SETTINGS] APP_CHECK_VERSION';

  recievedAppVersion = ActionCreatorFactory.create<any>(LayoutActions.APP_VERSION_RECIEVED);
  updateAppVersion = ActionCreatorFactory.create(LayoutActions.APP_UPDATE_VERSION);
  checkVersion = ActionCreatorFactory.create(LayoutActions.APP_CHECK_VERSION);

  expandSidebar(): Action {return {type:LayoutActions.SIDEBAR_EXPAND,payload:true};}
  collapseSidebar(): Action {return {type:LayoutActions.SIDEBAR_COLLAPSE,payload:false};}
  toggleSidebar(): Action {return {type:LayoutActions.SIDEBAR_TOGGLE};}
}
