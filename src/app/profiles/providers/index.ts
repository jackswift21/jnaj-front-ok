import {ProfilesResolver} from './profiles.resolver';
import {ProfilesService} from './profiles.service';
export * from './profiles.resolver';
export * from './profiles.service';
export const PROVIDERS = [
{provide:ProfilesResolver,useClass:ProfilesResolver},
{provide:ProfilesService,useClass:ProfilesService}];