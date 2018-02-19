import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Home} from './home';
//import {HomeResolver} from './_providers';

export const COMPONENTS = [Home];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:Home}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);