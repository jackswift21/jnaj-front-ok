import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {NotFound} from './not-found';

export const COMPONENTS = [NotFound];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:NotFound}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);