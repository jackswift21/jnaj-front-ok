import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Pricing} from './pricing';

export const COMPONENTS = [Pricing];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:Pricing}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);