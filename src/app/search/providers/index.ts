import {SearchService} from './search.service';
export * from './search.service';
export const PROVIDERS = [{provide:SearchService,useClass:SearchService}];