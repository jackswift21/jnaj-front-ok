import {Action} from '@ngrx/store';
import {AppSettings} from './layout.model';

export const SIDEBAR_EXPAND = '[CORE LAYOUT] SIDEBAR_EXPAND';
export const SIDEBAR_COLLAPSE = '[CORE LAYOUT] SIDEBAR_COLLAPSE';
export const SIDEBAR_TOGGLE = '[CORE LAYOUT] SIDEBAR_TOGGLE';


export const APP_CHECK_VERSION = '[APP SETTINGS] APP_CHECK_VERSION';
export const APP_GET_VERSION = '[APP SETTINGS] APP_GET_VERSION';
export const APP_UPDATE_VERSION = '[APP SETTINGS] APP_UPDATE_VERSION';
export const APP_VERSION_RECEIVED = '[APP SETTINGS] APP_VERSION_RECEIVED';
export const TOGGLE_IS_INTRO = '[CORE LAYOUT] TOGGLE_IS_INTRO';

export class checkVersion implements Action {readonly type = APP_CHECK_VERSION;}
export class getVersion implements Action {
	readonly type = APP_GET_VERSION;
	constructor(public payload:any){}}
export class receivedVersion implements Action {
	readonly type = APP_VERSION_RECEIVED;
	constructor(public payload:any){}}
export class updateVersion implements Action {readonly type = APP_UPDATE_VERSION;}
export class toggleSidebar implements Action {readonly type = SIDEBAR_TOGGLE;}
export class openSidebar implements Action {
  readonly type = SIDEBAR_EXPAND;
  constructor(public payload:boolean = true){}}
export class closeSidebar implements Action {
  readonly type = SIDEBAR_COLLAPSE;
  constructor(public payload:boolean = false){}}
export class toggleIsIntro implements Action {
  readonly type = TOGGLE_IS_INTRO;
  constructor(public payload:boolean){}}

export type All =
receivedVersion|
updateVersion|
checkVersion|
getVersion|
toggleSidebar|
openSidebar|
closeSidebar|
toggleIsIntro;