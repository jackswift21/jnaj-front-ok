import {APP_BASE_HREF} from '@angular/common';
import {UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './customUrlSerializer';
import {AppState} from './app.state';
import {AppWindowService} from './window.service';
import {AppNavigationService} from './navigation.service';
import {ApiService} from './api.service';
import {AuthGuard} from './auth.guard';

export * from './app.state';
export * from './window.service';
export * from './navigation.service';
export * from './api.service';
export * from './auth.guard';

export const PROVIDERS = [
    {provide:APP_BASE_HREF,useValue:'/'},
  	{provide:UrlSerializer,useClass:CustomUrlSerializer},
	{provide:AppState,useClass:AppState},
	{provide:AppWindowService,useClass:AppWindowService},
	{provide:AppNavigationService,useClass:AppNavigationService},
	{provide:ApiService,useClass:ApiService},
	{provide:AuthGuard,useClass:AuthGuard}];