import * as LayoutActions from './layout.actions';
import {AppSettings,AppVersion,initialState} from './layout.model';

export function layoutReducer(state:AppSettings = initialState,action:LayoutActions.All):AppSettings{
  switch(action.type){
    case LayoutActions.SIDEBAR_EXPAND:return Object.assign({},state,{sidebarOpen:true});
    case LayoutActions.SIDEBAR_COLLAPSE:return Object.assign({},state,{sidebarOpen:false});
    case LayoutActions.SIDEBAR_TOGGLE:return Object.assign({},state,{sidebarOpen:!state.sidebarOpen});
    case LayoutActions.TOGGLE_IS_INTRO:return Object.assign({},state,{isIntro:action.payload});
    case LayoutActions.APP_VERSION_RECEIVED:return Object.assign({},state,{version:action.payload});
    case LayoutActions.APP_CHECK_VERSION:{
      const version = Object.assign({},state.version,{checkingForVersion:true});
      return Object.assign({},state,{version});}
    default:return Object.assign({},initialState,state);}};
