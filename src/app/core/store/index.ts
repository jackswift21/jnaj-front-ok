import {ActionReducerMap,ActionReducer,MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';

import {SamplesActions,SamplesState,samplesReducer} from './samples';
export {SamplesActions,SamplesState};
import {LayoutActions,AppSettings,layoutReducer,LayoutEffects} from './layout';
export {LayoutActions,AppSettings};
import {NavigationActions,NavigationEffects} from './navigation';
export {NavigationActions};
import {SearchActions,Search,searchReducer,SearchEffects} from './search';
export {SearchActions,Search};
import {UserProfileActions,UserProfile,userProfileReducer,UserProfileEffects} from './user-profile';
export {UserProfileActions,UserProfile};

export interface JNAJAppState {
	samples:SamplesState;
	layout:AppSettings;
	search:Search;
	userProfile:UserProfile;}
export const reducers:ActionReducerMap<JNAJAppState> = {
  samples:samplesReducer,
  layout:layoutReducer,
  search:searchReducer,
  userProfile:userProfileReducer};
export const metaReducers:MetaReducer<JNAJAppState>[] = !environment.production?[]:[];//logger
export const EFFECTS = [
  LayoutEffects,
  SearchEffects,
  UserProfileEffects,
  NavigationEffects];

export function logger(reducer:ActionReducer<JNAJAppState>):ActionReducer<JNAJAppState> {
  return function(state:JNAJAppState,action:any):JNAJAppState {
    console.log('state',state);
    console.log('action',action);
    return reducer(state,action);};}