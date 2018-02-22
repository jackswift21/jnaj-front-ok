import '@ngrx/core/add/operator/select';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {AppSettings,AppVersion,initialState} from './layout.model';
import {LayoutActions} from './layout.actions';

export function layout(state:AppSettings = initialState,action:Action):AppSettings{
  switch (action.type) {
    case LayoutActions.SIDEBAR_EXPAND:return Object.assign({},state,{sidebarOpen:true});
    case LayoutActions.SIDEBAR_COLLAPSE:return Object.assign({},state,{sidebarOpen:false});
    case LayoutActions.SIDEBAR_TOGGLE:return Object.assign({},state,{sidebarOpen:!state.sidebarOpen});
    case LayoutActions.APP_VERSION_RECIEVED: {
      const version = getVersion(state,action.payload);
      return Object.assign({},state,{version});}
    case LayoutActions.APP_CHECK_VERSION: {
      const version = Object.assign({},state.version,{checkingForVersion:true});
      return Object.assign({},state,{version});}
    default:return Object.assign({},initialState,state);}};

export function getSidebarExpanded($state:Observable<AppSettings>){
  return $state.select(state => state.sidebarExpanded);}
function getVersion(state:AppSettings,packageJson:any):AppVersion{
  const currentVersion = state.version.semver;
  const remoteVersion = packageJson.version;
  const version: AppVersion = {
    semver: '',
    isNewAvailable: state.version.isNewAvailable,
    checkingForVersion: false};
  const isCurrentVersionEmpty = '' === currentVersion;
  const isCurrentDifferentFromRemote = !isCurrentVersionEmpty && currentVersion !== remoteVersion;
  if (isCurrentVersionEmpty) {version.semver = remoteVersion;}
  if (isCurrentDifferentFromRemote && !version.isNewAvailable) {
    version.semver = currentVersion;
    version.isNewAvailable = true;}
  else {
    version.semver = remoteVersion;
    version.isNewAvailable = false;}
  return version;}
