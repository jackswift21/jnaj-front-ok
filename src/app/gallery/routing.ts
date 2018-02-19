import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Gallery} from './gallery';

export const COMPONENTS = [Gallery];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:Gallery}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);