import {AuthGuard} from './auth.guard';
import {ApiService} from './api.service';
import {AppWindowService} from './window.service';

export * from './auth.guard';
export * from './api.service';
export * from './window.service';

export const PROVIDERS = [
	{provide:AuthGuard,useClass:AuthGuard},
	{provide:ApiService,useClass:ApiService},
	{provide:AppWindowService,useClass:AppWindowService},];