import {ModuleWithProviders} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Samples} from './samples';
import {Sample} from './sample';
import {SimpleSimon} from './simon';
//import {SampleResolver} from './_providers';

export const COMPONENTS = [Samples,Sample,SimpleSimon];
export const DIRECTIVES = [];
export const PIPES = [];

const routes:Routes = [
	{path:'',component:Samples},
	{path:'test',component:Sample},
	{path:'simon',component:SimpleSimon}];
export const ROUTING:ModuleWithProviders = RouterModule.forChild(routes);