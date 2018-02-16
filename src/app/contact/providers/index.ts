import {ContactService} from './contact.service';
export * from './contact.service';
export const PROVIDERS = [{provide:ContactService,useClass:ContactService}];