import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Search} from './search';
import {AdvancedSearch} from './search-adv';
import {SearchResults} from './search-results';

export const COMPONENTS = [Search,AdvancedSearch,SearchResults];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:Search}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);