import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HireMe} from './hire';

export const COMPONENTS = [HireMe];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:':handle',component:HireMe}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);