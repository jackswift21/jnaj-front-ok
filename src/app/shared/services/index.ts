import {ApiService} from './api.service';
export * from './api.service';
export const PROVIDERS = [{provide:ApiService,useClass:ApiService}];