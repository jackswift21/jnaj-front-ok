import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Intro} from './intro';

export const COMPONENTS = [Intro];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [{path:'',component:Intro}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);