import {SamplesService} from './samples.service';

export * from './samples.service';

export const PROVIDERS = [{provide:SamplesService,useClass:SamplesService}];