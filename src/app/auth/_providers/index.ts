import {NoAuthGuard} from './no-auth.guard';
import {AuthService} from './auth.service';
export * from './no-auth.guard';
export * from './auth.service';
export const PROVIDERS = [
	{provide:NoAuthGuard,useClass:NoAuthGuard},
	{provide:AuthService,useClass:AuthService}];