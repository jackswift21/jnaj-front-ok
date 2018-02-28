import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {SearchPage} from './search';
import {AdvancedSearch} from './search-adv';
import {SearchResults} from './search-results';
import {TypeAhead} from './typeahead';

export const COMPONENTS = [SearchPage,AdvancedSearch,SearchResults];
export const DIRECTIVES = [TypeAhead];
export const PIPES = [];

const routes:Routes = [{path:'',component:SearchPage}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);