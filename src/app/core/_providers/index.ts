import {CoreLayoutService} from './core-layout.service';

export * from './core-layout.service';

export const PROVIDERS = [
	{provide:CoreLayoutService,useClass:CoreLayoutService},
]