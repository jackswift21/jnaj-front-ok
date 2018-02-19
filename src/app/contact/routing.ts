import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Contact} from './contact';

export const COMPONENTS = [Contact];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:Contact}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);