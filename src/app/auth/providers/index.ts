import {NoAuthGuard} from './no-auth.guard';
export * from './no-auth.guard';
export const PROVIDERS = [{provide:NoAuthGuard,useClass:NoAuthGuard}];